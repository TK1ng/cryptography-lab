const possible = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "I", " "];

const message = "I love cryptography!";


function findStart(char) {
    return possible.indexOf(char); //?
}

function decode(str, key = 6) {
    let decodedStr = '';

    for (let i = 0; i < str.length; i++) {
        let decryptedIndex = findStart(str[i]) - key; //?
        findStart(str[i]); //?
        console.log(decryptedIndex);
        if (decryptedIndex < 0) {
            decryptedIndex += possible.length;
        }
        decodedStr += possible[decryptedIndex];
    }

    return decodedStr;
}

function encode(str, key = 6) {
    let encodedStr = '';

    for (let i = 0; i < str.length; i++) {
        let encryptedIndex = findStart(str[i]) + key; //?

        if (encryptedIndex >= possible.length) {
            encryptedIndex -= possible.length;
        }

        encodedStr += possible[encryptedIndex];
        console.log(encryptedIndex);
    }
    return encodedStr;
}



console.log(encode(message)); //?
decode('ffruIkfixcvzumxgvnce'); //?

