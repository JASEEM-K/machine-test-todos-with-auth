import React, { useEffect, useState } from "react";
import CreateTask from "../component/CreateTask";
import { axiosInstance } from "../lib/axios";
import { Link } from "react-router";
import toast from "react-hot-toast";

type taskType = {
    _id: string;
    title: string;
    description: string;
    isDone: boolean;
    cardColor: string;
    tags: string[];
};

const HomePage = () => {
    const [tasks, setTasks] = useState<taskType[]>([]);
    useEffect(() => {
        (async () => {
            await axiosInstance
                .get("/task/")
                .then((d) => {
                    setTasks(d.data.data);
                    toast(d.data.message);
                })
                .catch((err) => {
                    setTasks([]);
                    toast(err.response.data.message);
                    console.log(err);
                });
        })();
    }, []);
    const handleCheck = async (id: string) => {
        setTasks((p) =>
            p.map((task) =>
                task._id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
        const body = {
            isDone: true,
        };
        const data = await axiosInstance.put(`/task/${id}`, body);
        setTasks(data.data.data);
    };
    return (
        <div className="flex flex-col h-[90dvh] justify-between w-dvw space-y-4 py-3  px-4">
            <div className="space-y-4 pt-2">
                <div className="font-bold text-2xl">Tasks</div>
                <div className="space-y-2.5">
                    {tasks.length > 0 &&
                        tasks.map((t) => (
                            <div
                                key={t._id}
                                className={`w-full min-h-10 max-h-fit py-1 rounded-lg flex items-center justify-start px-4 gap-5 ${t.cardColor} cursor-pointer `}
                                onClick={() => {
                                    handleCheck(t._id);
                                }}
                            >
                                <input
                                    type="checkbox"
                                    className="h-5 w-5"
                                    checked={t.isDone}
                                />
                                <div>
                                    <div className="font-semibold">
                                        {t.title}
                                    </div>
                                    <div className=" text-sm">
                                        {t.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="flex w-dvw items-end justify-end px-10 pr-13 pb-10">
                <Link to="/create">
                    <div className="flex items-center shadow-[0_4px_2px_rgba(0,0,0,0.3)] cursor-pointer justify-center bg-[#F8F9FA] rounded-full h-10 w-10">
                        <img
                            src="/+.png"
                            alt="button for change to create task page "
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
