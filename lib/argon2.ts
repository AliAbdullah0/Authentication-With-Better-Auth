import { hash,verify,type Options } from "@node-rs/argon2"

const opts:Options = {
    memoryCost:19456,
    timeCost:2,
    outputLen:22,
    parallelism:1,
};

export async function hashPassword(password:string){
    const result = await hash(password,opts)
    return result
}

export async function verifyPassword(data:{password:string,hash:string}){
    const {password,hash} = data;
    const isCorrect = await verify(hash,password,opts)
    return isCorrect
}