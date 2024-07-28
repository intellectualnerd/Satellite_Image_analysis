import { Outlet } from "react-router-dom";
import MyNav from "./Component/MyNav";
import '../../../css/User/user.css'
const User = () => {
    return (
        <>
        <div className="mainUser">

        <MyNav/>
        <Outlet/>
        </div>
        </>
    );
}
export default User;