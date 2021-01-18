const secretMessage = "BAMPUSBIGBOI"



function caesarEncrypt(msg) {

    const charCodes = []
    for (let i = 0; i < secretMessage.length; i++) {
        charCodes.push(secretMessage[i].charCodeAt(0))
    }

    console.log(charCodes)

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + 1
    }

    console.log(charCodes)

    let encryptedMessage = ""

    for (let i = 0; i < charCodes.length; i++) {
        encryptedMessage = encryptedMessage + String.fromCharCode(charCodes[i])
    }
}

console.log(encryptedMessage)

// Översätta varje tecken till ett nummer. 
// Shifta det nummeret
// Översätt numret till tecken