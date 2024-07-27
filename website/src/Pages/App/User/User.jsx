import { Outlet } from "react-router-dom";
import MyNav from "./Component/MyNav";

const User = () => {
    return (
        <>
        <MyNav/>
        <Outlet/>
        </>
    );
}
export default User;