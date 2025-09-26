import { hash, compare, genSalt } from "bcrypt-ts";

export const HashPass = async (txt: string) => {
    const salt = await genSalt(10);
    const hashPass = await hash(txt, salt);
    return hashPass;
};

export const ComparePass = async (pass: string, hash: string) => {
    const val = await compare(pass, hash);
    return val;
};
