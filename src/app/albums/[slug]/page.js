import React from "react"

const AlbumDetail = async ({params}) => {

    const {slug} = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${slug} `)
    const album = await res.json()
    if (!album) {
        return "album not fount"
    }

    return (

        <>

            <h1>Album details</h1>
            <p>{album?.title}</p>
            <p>album id:{album?.id} </p>
            <p>user id:{album?.userId} </p>
        </>
    )
}

export default AlbumDetail