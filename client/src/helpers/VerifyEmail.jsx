import { useFormikContext } from "formik";  
import {Link} from 'react-router-dom'
import api from "../lib/axios";

const VerifyEmail = () => {
    const {values} = useFormikContext();

    const Verify= () => {
        console.log(values.email);
        try {
            const res = api.post("/users/sendverificationemail",{email: values.email});
            if(res.status===200){
                console.log("sent succesfully");
            }
        } catch (error) {
            console.error("error", error);
        }
    }

    return (
        <Link onClick={Verify}>VerifyEmail</Link>
    );
}

export default VerifyEmail;