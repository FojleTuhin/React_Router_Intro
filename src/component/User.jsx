import { Link } from "react-router-dom";

const User = ({user}) => {

    const{id, name,email, phone}=user;

    const userStyle={
        border:'2px solid white',
        padding:'10px',
        borderRadius:'20px',
        margin:'10px'
    }

    return (
        <div style={userStyle}>
            <p>id:{id}</p>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/user/${id}`}>Show details</Link>
            
        </div>
    );
};

export default User;