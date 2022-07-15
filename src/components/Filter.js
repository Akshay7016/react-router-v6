import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const age = searchParams.get('age')
    const city = searchParams.get('city')

    return (
        <div>
            <h3>Filter Page</h3>
            <h5>Age is: {age}</h5>
            <h5>City is: {city}</h5>

            <input type="text" onChange={(event) => setSearchParams({ text: event.target.value })} />
            <br />
            <br />
            <button onClick={() => setSearchParams({ age: 40, city: "Mumbai" })} > Change age to 40 & city to Mumbai</button>
        </div>
    )
}

export default Filter;