
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthRouteProps {
    children: ReactNode;
    isProtected: boolean;
}

const isAuthenticated = (): boolean => {
    return !!localStorage.getItem("token");
};

const AuthRoute = ({ children, isProtected }: AuthRouteProps) => {
    const authenticated = isAuthenticated();

    if (isProtected && !authenticated) {
        return <Navigate to="/signin" />;
    }

    if (!isProtected && authenticated) {
        return <Navigate to="/blogs" />;
    }

    return <>{children}</>;
};

export default AuthRoute;
