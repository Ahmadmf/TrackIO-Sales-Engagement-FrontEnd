import axios from "axios";
import {SIGNUP_USER} from "../actions/types";
import {GET_ERRORS} from "../actions/types";
import C from "../resource/values";

export const signUpUser =(newUser,history) => (dispatch) =>{
    axios
        .post(C.SERVER_CALL+"api/auth/signUp",newUser)
        .then((res) => {
            console.log(res.data);
            history.push("/app/campaign");
            dispatch({
                type: SIGNUP_USER,
                payload: newUser,
            })
        })
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload:err.res.data,
            })
        );
};