import { createToken } from "../lib/token.js";
import { AuthService } from "../service/authService.js";
import type { ILogUser, IRegisterUser } from "../types/user.types.js";

export class AuthController {
    async regster(params: IRegisterUser) {
        const user = await new AuthService().register(params);
        const token = createToken({ user: user._id.toString() });
        return { data: user.toObject(), token };
    }

    async login(params: ILogUser) {
        const user = await new AuthService().login(params);
        const token = createToken({ user: user._id.toString() });
        return { data: user.toObject(), token };
    }
    async getme(id: string) {
        const user = await new AuthService().getme(id);
        return { data: user.toObject() };
    }
}
