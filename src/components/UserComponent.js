import React from 'react'
import { useParams } from 'react-router-dom';

const UserComponent = () => {
    const params = useParams();
    const { name } = params;

    return (
        <div>
            <h1>User {name}'s Page</h1>
        </div>
    )
}

export default UserComponent;