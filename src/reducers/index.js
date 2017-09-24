import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import ParkCheckInFormReducer from "./ParkCheckInFormReducer"

export default combineReducers({
    auth: AuthReducer,
    parkCheckInForm: ParkCheckInFormReducer
});
