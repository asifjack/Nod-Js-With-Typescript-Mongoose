const bcrypt = require('bcrypt');

export function getHash(password: string): Promise<string> {
    return new Promise(async (resolve, rejects) => {
        bcrypt.hash(password, 12, async (er: any, hash: string) => {
            console.log(hash, "hash");
            resolve(hash)
        });

    })
}

export function checkHash(password: string, hashPassword: string): Promise<boolean> {
    return new Promise(async (resolve, rejects) => {
        bcrypt.compare(password, hashPassword, async (er: any, red: boolean) => {
            resolve(red)

        })
    })
}