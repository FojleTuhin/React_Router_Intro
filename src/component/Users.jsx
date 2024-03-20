import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {

    const users=useLoaderData();
   
    return (
        <div>
            <h3>Our users: {users.length}</h3>
            <div>
                {
                    users.map(user => <User key={user.id} user={user} ></User>)
                }
            </div>
        </div>
    );
};

export default Users;