import { subsribeToclubedoPedro } from './firebase/clube-do-pedro.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value
  }
  //pra funcionar de verdade ao invés de console.log, enviar para o banco de dados
  const subscriptionId = await subsribeToclubedoPedro(subscription)
  console.log(`inscito com sucesso: ${subscriptionId}`)
})

//debugger
