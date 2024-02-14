import {useState} from 'react'
import React from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


export default function Register() {

  const naviagte = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',

  })

  const registerUser = async (e) => {
    e.preventDefault()

    const {name, email, password} = data 
    try {
      const {data} = await axios.post('/register', {
        name, email, password
      })
      if (data.error) {
        toast.error(data.error)
      } else{
        setData({})
        toast.success('Login Successful. Welcome!')
        naviagte('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div>
      <form onSubmit={registerUser}>
          <label>Name</label>
          <input type="text" placeholder='Enter name....' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
          <label>Email</label>
          <input type="email" placeholder='Enter e-mail....' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
          <label>Password</label>
          <input type="password" placeholder='Enter password....' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}