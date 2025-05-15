import React, { useEffect, useState } from 'react'

const useAuth = () => {

    const [token, setToken] = useState("")

    const getUserAuth = ()=>{
        const authToken = localStorage.getItem("token")
        setToken(authToken || null)
    }

    useEffect(()=>{
        getUserAuth()
    },[token, getUserAuth])

  return {token, getUserAuth}
}

export default useAuth