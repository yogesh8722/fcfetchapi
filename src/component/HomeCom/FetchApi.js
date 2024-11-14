import React, { useEffect, useState } from 'react'
import Cards from './Cards';

export default function FetchApi() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])
    return (
        <div className='card-position'>
                {data.map((item, index) => (
                    <div key={index}><Cards name={item.name} email={item.email} /></div>
                ))}
        </div>
    )
}
