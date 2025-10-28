import { db } from '@/firebase'
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'

const colRef = collection(db, 'events')

/* Henter alle hold sorteret pr. dato og starttid.
 * Returnerer: [{id, title, date, start, end, location, coach, capacity, description, ...}]
 */
export async function getEvents() {
  const q = query(colRef, orderBy('date'), orderBy('start'))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

/**
 * Opretter nyt hold.
 * @param {{title:string,date:string,start:string,end?:string,location?:string,coach?:string,capacity?:number,description?:string}} data
*/
export async function addEvent(data) {
  const clean = {
    ...data,
    capacity: Number(data.capacity || 0),
    createdAt: serverTimestamp(),
  }
  const ref = await addDoc(colRef, clean)
  return { id: ref.id, ...clean }
}

/* Sletter hold pr. id.*/
export async function deleteEventById(id) {
  await deleteDoc(doc(db, 'events', id))
}