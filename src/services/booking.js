import { db } from '@/firebase'
import { ref, get, set } from 'firebase/database'

const path = 'tilmeldStatus' // her gemmes status

// Hent nuværende status (returnerer 0 eller 1)
export async function getBookingStatus() {
  const snap = await get(ref(db, path))
  return snap.exists() ? snap.val() : 0
}

// Skift status (hvis 0 → 1, hvis 1 → 0)
export async function toggleBookingStatus(current) {
  const newValue = current === 1 ? 0 : 1
  await set(ref(db, path), newValue)
  return newValue
}
