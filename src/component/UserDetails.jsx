// import { useLoaderData } from "react-router-dom";

import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
     const user= useLoaderData();

    const {name, id, username, email, phone, website }=user;
    const navigate= useNavigate();

    const goBack=()=>{
        navigate(-1)
    }
    return (
        <div style={{
            border:'3px solid gray',
            margin:'10px',
            padding:'20px',
            borderRadius:'20px'
        }}>
            <h3>Details about user</h3>

            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>User Name: {username}</p>
            <p>Email: {email} </p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <button onClick={goBack}>Go back</button>
            
        </div>
    );
};

export default UserDetails;