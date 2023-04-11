import React from "react";
import Card from "./UI/Card";

const User = (props) => {
    // console.log
    return (<Card className="users">
        <ul>
            {props.users.map(user => {
                return <li key={user.id}>{user.username}({user.age} years old)</li>
            })}
        </ul>
    </Card>);
}

export default User;