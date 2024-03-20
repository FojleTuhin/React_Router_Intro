import { Outlet } from "react-router-dom";
import Header from "./Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1> This is from home. </h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;