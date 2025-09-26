import { useState } from "react";
import { axiosInstance } from "../lib/axios";
import { useAuth } from "../Provider/authProvider";
import toast from "react-hot-toast";

type FromData = {
    email: string;
    name: string;
    password: string;
};

const RegisterPage = () => {
    const [form, setForm] = useState<FromData>({
        email: "",
        name: "",
        password: "",
    });
    const handleSubmit = async () => {
        await axiosInstance
            .post("/auth/login", form)
            .then((d) => {
                toast(d.data.message);
                const { setUser } = useAuth();
                setUser(d.data.data);
            })
            .catch((e) => toast(e.response.data.message));
    };
    return (
        <div className="h-[90dvh] w-dvw relative">
            <img
                className="absolute bottom-0"
                src="/background-line.png"
                alt="vector background lines"
            />
            <div className="authpage-card items-center justify-evenly">
                <div className="flex flex-col  items-center gap-3">
                    <h1 className="font-bold text-blue-500 text-xl">
                        Register
                    </h1>
                    <p className="max-w-70 text-center ">
                        Welcome back! Sign in using your social account or email
                        to continue us
                    </p>
                    <img
                        className="h-13 w-50"
                        src="/Social-uihut.png"
                        alt="social media logos"
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="authpage-input">
                        <input
                            type="text"
                            placeholder="Name"
                            value={form.name}
                            onChange={(e) => {
                                setForm((p) => ({
                                    ...p,
                                    name: e.target.value,
                                }));
                            }}
                        />
                    </div>

                    <div className="authpage-input">
                        <input
                            type="text"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) => {
                                setForm((p) => ({
                                    ...p,
                                    email: e.target.value,
                                }));
                            }}
                        />
                    </div>

                    <div className="authpage-input">
                        <input
                            type="text"
                            placeholder="Password"
                            value={form.password}
                            onChange={(e) => {
                                setForm((p) => ({
                                    ...p,
                                    password: e.target.value,
                                }));
                            }}
                        />
                    </div>
                </div>

                <button
                    className="authpage-botton"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;
