// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
     const user= useLoaderData();

    const {name, id, username, email, phone, website }=user;
    return (
        <div>
            <h3>Details about user</h3>

            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>User Name: {username}</p>
            <p>Email: {email} </p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            
            
        </div>
    );
};

export default UserDetails;