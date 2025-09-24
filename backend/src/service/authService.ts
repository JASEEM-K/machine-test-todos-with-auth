import { ErrorMessage } from "../lib/error.js";
import { ComparePass, HashPass } from "../lib/hash.js";
import UserModel from "../model/UserModel.js";
import type { ILogUser, IRegisterUser } from "../types/user.types.js";

export class AuthService {
    async register(params: IRegisterUser) {
        const hash = await HashPass(params.passwrod);
        const user = await UserModel.create({ ...params, passwrod: hash });
        return user;
    }
    async login(params: ILogUser) {
        const user = await UserModel.findOne({ email: params.email });
        if (!user) {
            throw new ErrorMessage("User not found", "auth-ser-lgn", 404);
        }
        const isSame = await ComparePass(params.passwrod, user.passwrod);
        if (!isSame) {
            throw new ErrorMessage("Password doesn't match", "auth-ser-lgn");
        }
        return user;
    }
}
