"use client"

import React, {useEffect, useState} from "react"

const Users = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const getUsers = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const result = await response.json()
        setUsers(result)
        setLoading(false)
    }

    useEffect(() => {
        getUsers()
    }, [])


    if (loading) {
        return "loading...."
    }
    return (

        <div>
            <h1>user list</h1>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}-{user.email}</li>
                ))}

            </ul>
        </div>
    )
}

export default Users