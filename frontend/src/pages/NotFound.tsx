import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="h-[90dvh] w-dvw relative">
            <img
                className="absolute bottom-0"
                src="/background-line.png"
                alt="vector background lines"
            />
            <div className="items-center justify-center gap-2 authpage-card">
                <h1 className="text-5xl font-bold">404</h1>
                <p className="text-3xl font-bold">Page not found </p>
                <div
                    className="font-semibold text-blue-500 cursor-pointer"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Go Back to Home Page?
                </div>
            </div>
        </div>
    );
};

export default NotFound;
