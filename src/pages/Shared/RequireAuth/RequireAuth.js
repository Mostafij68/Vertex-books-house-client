import { Navigate, useLocation } from "react-router-dom";
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};