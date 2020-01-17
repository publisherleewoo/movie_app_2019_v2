import React from 'react'
import {Link} from "react-router-dom"


export default function Movie({data}) {
    console.log(data)
    return (
        <Link to={{
            pathname:`/movies/${data.id}`,
            state:{data}
        }}>
            <div>
                {data.title}
            </div>
        </Link>
    )
}
