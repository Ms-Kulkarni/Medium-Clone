import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
    const navigate = useNavigate();

    async function handleLogout() {
        await localStorage.removeItem("token");
        navigate("/signin");
    }

    return (
        <div className="border-b flex justify-between px-6 py-4 shadow-sm">
            <div className="flex flex-col justify-center cursor-pointer">
                <Link to={"/blogs"} className="font-medium text-xl pl-1.5">
                    Medium
                </Link>
            </div>
            <div className="flex justify-center items-center gap-4">
                <Link to={`/publish`}>
                    <button
                        type="button"
                        className="text-white bg-green-700 hover:bg-green-800 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center"
                    >
                        Write
                    </button>
                </Link>
                <Avatar name="Anonymous" size={"big"} />
                <button
                    className="hover:bg-gray-300 transition-all duration-200 p-1.5 rounded-full"
                    onClick={handleLogout}
                >
                    <svg
                        width={25}
                        height={25}
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};