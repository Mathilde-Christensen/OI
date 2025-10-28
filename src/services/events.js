import { db } from '@/firebase'
import {
  ref,
  get,
  push,
  remove,
  query,
  orderByChild,
  serverTimestamp,
} from 'firebase/database'

const EVENTS_PATH = 'events'

/**
 * Hent alle hold (returnerer array sorteret efter dato + start).
 */
export async function getEvents() {
  const eventsRef = ref(db, EVENTS_PATH)
  const q = query(eventsRef, orderByChild('date')) // hjælper lidt på overførsel
  const snap = await get(q)
  const value = snap.val() || {} // RTDB giver et objekt

  const list = Object.entries(value).map(([id, data]) => ({ id, ...data }))
  return list.sort((a, b) => {
    const aKey = `${a.date} ${a.start ?? '00:00'}`
    const bKey = `${b.date} ${b.start ?? '00:00'}`
    return aKey.localeCompare(bKey)
  })
}

/**
 * Opret nyt hold.
 */
export async function addEvent(data) {
  const clean = {
    ...data,
    capacity: Number(data.capacity || 0),
    createdAt: serverTimestamp(), // RTDB server-timestamp
  }
  const newRef = await push(ref(db, EVENTS_PATH), clean)
  return { id: newRef.key, ...clean }
}

/**
 * Slet hold.
 */
export async function deleteEventById(id) {
  await remove(ref(db, `${EVENTS_PATH}/${id}`))
}
