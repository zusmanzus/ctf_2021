for (let i = 10000; i < 99999; i++) {
setTimeout(() => 
    AES ()
        .decrypt(encrypted, i)
        .then((decrypted) => console.log('decrypted', decrypted))
        .catch(_ => console.log('bad key: ', i))
)
}
