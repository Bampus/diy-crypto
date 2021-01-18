import { caesarEncrypt, caesarDecrypt } from "./diycrypto.js"




const secretMessage = "BAMPUSBIGBOI"
const encryptedMessage = caesarEncrypt(secretMessage, 7)
const decryptedMessage = caesarDecrypt(encryptedMessage, 7)
console.log(secretMessage, encryptedMessage, decryptedMessage)

