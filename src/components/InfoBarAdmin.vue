<script setup>
    import { ref, onMounted, onBeforeUnmount } from "vue";
    import { db } from "@/firebase";
    import { ref as dbRef, onValue, push, set, update, remove } from "firebase/database";

    const messages = ref([]);
    const draft = ref("");

    const editingId = ref(null);
    const editDraft = ref("");

    let unsub = null;

    onMounted(() => {
    const r = dbRef(db, "infoMessages");

    const maybeUnsub = onValue(r, (snap) => {
        const val = snap.val();
        const arr = val ? Object.entries(val).map(([id, data]) => ({ id, ...data })) : [];
        arr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        messages.value = arr;
    });

    unsub = typeof maybeUnsub === "function" ? maybeUnsub : null;
    });

    onBeforeUnmount(() => {
    if (unsub) unsub();
    });

    async function addMessage() {
    if (!draft.value) return;
    const newRef = push(dbRef(db, "infoMessages"));
    await set(newRef, { text: draft.value, createdAt: Date.now() });
    draft.value = "";
    }

    function startEdit(m) {
    editingId.value = m.id;
    editDraft.value = m.text || "";
    }

    function cancelEdit() {
    editingId.value = null;
    editDraft.value = "";
    }

    async function saveEdit(id) {
    if (!editDraft.value) return;
    await update(dbRef(db, `infoMessages/${id}`), { text: editDraft.value });
    cancelEdit();
    }

    async function deleteMessage(id) {
    await remove(dbRef(db, `infoMessages/${id}`));
    }
</script>


<template>

    <!-- Tilføj -->
    <form class="form" @submit.prevent="addMessage">
      <input
        v-model.trim="draft"
        placeholder="Skriv ændring (fx: Vi lukker kl. 15 i dag)..."
      />
      <button class="primary" :disabled="!draft">Tilføj</button>
    </form>

    <!-- Liste -->
    <ul class="list">
      <li v-for="m in messages" :key="m.id" class="row">
        <template v-if="editingId === m.id">
          <input v-model.trim="editDraft" />
          <button class="rediger" :disabled="!editDraft" @click="saveEdit(m.id)">Gem</button>
          <button class="slet" @click="cancelEdit">Annuller</button>
        </template>

        <template v-else>
          <span class="text">{{ m.text }}</span>
          <div class="actions">
            <button class="rediger" @click="startEdit(m)">Rediger</button>
            <button class="slet" @click="deleteMessage(m.id)">Slet</button>
          </div>
        </template>
      </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../assets/_colors.scss' as c;
@use '../assets/_fonts.scss' as f;
@use '../assets/_buttons.scss' as b;

.rediger {
  @include b.button(b.$button-secondary-Admin);
}

.slet {
  @include b.button(b.$button-slet-Admin);
}

.primary {
  @include b.button(b.$button-primary-Admin);
}


.page { 
    padding: 24px 16px; 
    max-width: 800px; 
    margin: 0 auto; 
}

.form { 
    display: flex; 
    gap: 10px; 
    margin: 16px 0; 
}

input { 
    flex: 1; 
    padding: 10px 12px; 
    border-radius: 10px; 
    border: 1px solid rgba(0,0,0,0.15); 
}

button { 
    padding: 10px 12px; 
    border-radius: 10px; 
    border: 1px solid rgba(0,0,0,0.15); 
    background: white; cursor: pointer; 
}

button:disabled { 
    opacity: .5; 
    cursor: not-allowed; 
}

.list { 
    list-style: none; 
    padding: 0; 
    margin: 16px 0 0; 
    display: grid; 
    gap: 10px; 
}

.row { 
    padding: 12px; 
    border-radius: 12px; 
    border: 1px solid rgba(0,0,0,0.12); 
    display: flex; 
    justify-content: space-between; 
    gap: 12px; 
    align-items: center; 
}

.text { 
    flex: 1; 
}

.actions { 
    display: flex; 
    gap: 8px; 
}

.danger { 
    border-color: rgba(220, 50, 50, 0.5); 
}
</style>