import axios from 'axios'
//JWT based authentication

export const loginUser = async (email: string, password: string) => {
    const response = await axios.post('/api/auth/login', { email, password })
    console.log(response)
    return response.data
}

export const registerUser = async (data: { name: string; email: string; password: string }) => {
    const response = await axios.post('/api/auth/register', data)
    console.log(response);
    return response.data
}