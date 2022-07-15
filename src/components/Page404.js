import React from 'react'
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <div>404 Page Not Found</div>
            <Link to='/'>Go to Home</Link>
        </div>
    )
}

export default Page404;