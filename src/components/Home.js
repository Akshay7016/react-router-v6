import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const location = useLocation();

    console.log(location);

    const navToPage = (url) => {
        navigate(url);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

            <Link to='/about'>Go to About Page</Link>
            <br />
            <br />
            {/* useNavigate example */}
            <button onClick={() => navigate('/about')}>Go to About page</button>
            <br />
            <button onClick={() => navToPage('/filter')}>Go to Filter page</button>

            <br />
            <br />
            <br />

            {/* State from About component to Home Component */}
            {location.state ? <h4>Data from About component:  {location.state.age} {location.state.name}</h4> : null}

        </div>
    )
}

export default Home