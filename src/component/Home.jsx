import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";


const Home = () => {
     const clickMe=()=>{
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
          });
     }

    return (
        <div>
            <Header></Header>
            
            <Outlet></Outlet>


            <button onClick={clickMe}>Click me</button>

            <Footer></Footer>
        </div>
    );
};

export default Home;