import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function Register() {
    const [formData, setFormData] = useState({
        username:'',
        password:'',
        email:'',
        tel:'',
        }
    )

    const hdlChange = (evt) => {
        const {name, value} = evt.target;
        setFormData((prev) => ({...prev, [name]: value }))
        console.log(name, value)
    };

    const navigate=useNavigate()

    const hdlSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            console.log("Register Succesfull", res.data)
            toast.success("Reegister Successful")
            navigate('/post')
        } catch (error) {
            console.log('err')
            toast.error("Register Error")
        }

    }


  return (
    <div className='text-2xl font-semibold flex justify-center'>
        <form onSubmit={hdlSubmit} className='w-2xl flex flex-col'action="">
            <label className='flex justify-center gap-3'>Username</label>
            <input name='username' onChange={hdlChange} className='border-2 border-gray-400' placeholder='Please input your username...' value={formData.username} />
            
            <label className='flex justify-center gap- mt-3'>Password</label>
            <input name='password' onChange={hdlChange} className='border-2 border-gray-400' type='password' placeholder='Please input your password...' value={formData.password} />
            
            <label className='flex justify-center gap- mt-3'>E-mail</label>
            <input name='email' onChange={hdlChange} className='border-2 border-gray-400' type='email' placeholder='Please input your email...' value={formData.email} />
            
            <label className='flex justify-center gap- mt-3'>Tel</label>
            <input name='tel' onChange={hdlChange} className='border-2 border-gray-400' placeholder='Please input your phone number...' value={formData.tel} />
            
            <button className='bg-gray-500 p-2 rounded-2xl mt-5'>Submit</button>
        </form>
    </div>
  )
}

export default Register