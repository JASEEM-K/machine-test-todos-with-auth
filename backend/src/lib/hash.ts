import { hash, compare, genSalt } from "bcrypt-ts";

export const HashPass = async (txt: string) => {
    const salt = await genSalt(10);
    return await hash(txt, salt);
};

export const ComparePass = async (pass: string, hash: string) => {
    return await compare(pass, hash);
};
