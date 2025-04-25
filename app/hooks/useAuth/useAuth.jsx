import axios from 'axios'
import { useEffect, useState } from 'react'

const useAuth = () => {

    const [user, setUser] = useState(null)


    useEffect(() => {

        const token = localStorage.getItem('token')

        const authenticationFetched = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/user/authentication', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log('checking email data', res.data.data)
                setUser(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        authenticationFetched()

    }, [user])

    return { user }
}

export default useAuth