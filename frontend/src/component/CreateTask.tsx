import React, { useState } from "react";
import { axiosInstance } from "../lib/axios";
import { colorList } from "../lib/createcomdata";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type formType = {
    title: string;
    description: string;
    cardColor: string;
    tags: string[];
};

const CreateTask = () => {
    const [form, setForm] = useState<formType>({
        cardColor: "",
        title: "",
        description: "",
        tags: [],
    });
    const navigate = useNavigate();
    const handleSubmit = async () => {
        const data = await axiosInstance
            .post("/task/create", form)
            .then((d) => toast(d.data.message))
            .catch((err) => toast(err.response.data.message));
        navigate("/");
    };
    return (
        <div className="bg-white h-[90dvh] space-y-5 pt-5 px-3">
            <h1 className="font-bold text-3xl">New Task</h1>
            <div className=" flex-col space-y-3">
                <div
                    className="authpage-input "
                    style={{ backgroundColor: "#F8F9FA" }}
                >
                    <input
                        type="text"
                        placeholder="Name your new task"
                        value={form.title}
                        onChange={(e) => {
                            setForm((p) => ({
                                ...p,
                                title: e.target.value,
                            }));
                        }}
                    />
                </div>
                <div
                    className="authpage-input "
                    style={{ backgroundColor: "#F8F9FA" }}
                >
                    <input
                        type="text"
                        placeholder="Describe your new task"
                        value={form.description}
                        onChange={(e) => {
                            setForm((p) => ({
                                ...p,
                                description: e.target.value,
                            }));
                        }}
                    />
                </div>
            </div>

            {/* card color */}
            <h2 className="font-bold text-lg">Card Color</h2>

            <div className="flex gap-3 px-3">
                {colorList.map((cl) => (
                    <div
                        key={cl.id}
                        className={`h-10 w-10 rounded-full border-4 cursor-pointer ${
                            cl.bgColor
                        } ${
                            form.cardColor === cl.bgColor
                                ? "border-slate-800"
                                : "border-slate-200"
                        }`}
                        onClick={() => {
                            setForm((p) => ({ ...p, cardColor: cl.bgColor }));
                        }}
                    ></div>
                ))}
            </div>

            <div className="flex w-dvw items-end justify-end px-10 pb10">
                <div
                    className="flex items-center shadow-[0_4px_2px_rgba(0,0,0,0.3)] cursor-pointer justify-center bg-[#F8F9FA] rounded-full h-10 w-10"
                    onClick={handleSubmit}
                >
                    <img src="/check.png" alt="check mark for submitting" />
                </div>
            </div>
        </div>
    );
};

export default CreateTask;
