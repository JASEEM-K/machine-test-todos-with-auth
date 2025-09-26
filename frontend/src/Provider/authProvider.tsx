import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

type User = {
    _id: string;
    email: string;
    name: string;
};

type SelectType = User | null;

type contextValue = {
    user: SelectType;
    setUser: (text: SelectType) => void;
};

const AuthContext = createContext<contextValue>({
    user: null,
    setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<SelectType | null>(null);
    useEffect(() => {
        (async () => {
            const data = await axiosInstance
                .get("/auth/me")
                .then((d) => {
                    setUser(d.data.data);
                    toast(d.data.message);
                })
                .catch((e) => {
                    setUser(null);
                    toast(e.response.data.message);
                    console.log(e);
                });
        })();
    }, []);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error();
    }
    return context;
}
