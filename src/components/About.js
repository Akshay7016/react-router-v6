import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

            <Link to='/' state={{age:10, name: "Akshay"}}>Go to Home Page</Link>

            <br /> <br /> <br />

            {/* Params example */}
            <ul>
                <li><Link to='/user/akshay'>Akshay</Link></li>
                <li><Link to='/user/rohan'>Rohan</Link></li>
            </ul>
        </div>
    )
}

export default About;