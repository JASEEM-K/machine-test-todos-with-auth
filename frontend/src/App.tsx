import { NavBar } from "./component/navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./Provider/authProvider";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import CreateTask from "./component/CreateTask";
import { Toaster } from "react-hot-toast";

function App() {
    const { user } = useAuth();

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
                <Route
                    path="/create"
                    element={user ? <CreateTask /> : <LoginPage />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
