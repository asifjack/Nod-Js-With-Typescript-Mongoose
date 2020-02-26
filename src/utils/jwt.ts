const jwt = require('jsonwebtoken')

export function createJWTToken(payload: any, secretKey: string, expiresInSecs: number): Promise<string> {
    return new Promise(async (resolve, reject) => {
        jwt.sign(payload, secretKey, { expiresIn: expiresInSecs }, async (err: any, token: any) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(token);
            }
        })
    });
}

export function verifyJwtToken(token: string, secrateKey: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
        jwt.verify(token, secrateKey, (err: any, payload: any) => {
            if (err) {
                resolve(err)
            }
            else {
                resolve(payload)
            }
        })
    })
}

