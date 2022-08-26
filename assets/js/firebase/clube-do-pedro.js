import app from './app.js'
import {
  getFirestore,
  colllection,
  addDoc
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subsribeToclubedoPedro(subscription) {
  const db = getFirestore(app)
  const clubedoPedroCollection = colllection(db, 'clube-do-pedro')
  const docRef = await addDoc(clubedoPedroCollection, subscription)
  return docRef.id
}
//salvar no banco de dados
