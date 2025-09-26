import { ErrorMessage } from "../lib/error.js";
import { ComparePass, HashPass } from "../lib/hash.js";
import UserModel from "../model/UserModel.js";
import type { ILogUser, IRegisterUser } from "../types/user.types.js";

export class AuthService {
    async register(params: IRegisterUser) {
        const hash = await HashPass(params.password);
        params.password = hash;
        const user = await UserModel.create(params);
        user.password = "";
        return user;
    }
    async login(params: ILogUser) {
        const user = await UserModel.findOne({ email: params.email });
        if (!user) {
            throw new ErrorMessage("User not found", "auth-ser-lgn", 404);
        }
        const isSame = await ComparePass(params.password, user.password);
        if (!isSame) {
            throw new ErrorMessage("Password doesn't match", "auth-ser-lgn");
        }
        user.password = "";
        return user;
    }
    async getme(id: string) {
        const user = await UserModel.findById(id);
        if (!user) {
            throw new ErrorMessage("User not found", "auth-ser-lgn", 404);
        }
        user.password = "";
        return user;
    }
}
