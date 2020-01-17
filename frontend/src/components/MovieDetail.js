import React from 'react'

export default function MovieDetail({location}) {
    const {medium_cover_image,title} = location.state.data
    return (
        <div><img src={medium_cover_image} alt={title}/> </div>
         )
     
}
