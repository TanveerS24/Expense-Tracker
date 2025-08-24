import { useFormikContext } from "formik";  
import {Link} from 'react-router-dom'
import api from "../lib/axios";

const VerifyEmail = () => {
    const {values} = useFormikContext();

    const Verify= async () => {
        console.log(values.email);
        try {
            const res = await api.post("/users/sendverificationemail",{email: values.email});
            if(res.status===200){
                console.log("sent succesfully");
                localStorage.setItem("status", "sent");
            }
            return false;
        } catch (error) {
            console.error("error", error);
        }
    }

    return (
        <Link className="text-blue-500 underline w-auto h-auto flex flex-col
        items-center justify-center " onClick={() => {Verify(); VerifiedEmail();}}>
            VerifyEmail
        </Link>
    );
}

export default VerifyEmail;