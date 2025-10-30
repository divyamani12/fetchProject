import { useEffect,useState } from "react"
// import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Login(){
    // const navigate = useNavigate()
    const [data,setData] = useState({})
    const [form,setForm] = useState({
        email:"",
        password:""
    }) 
    const handleClick = (e) =>{
        e.preventDefault()
        console.log(form)     
        handleError()   
    } 
    const handleError = () =>{
        if(data){
            alert("sucessful")
        }
        else{
            alert("error found")
        }
    }
    const Post =  async() =>{
        const response = await axios.post('https://reqres.in/api/login', 
            {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            },
            {
                headers: {
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                },
            })
        console.log(response.data)
        setData(response.data)
        localStorage.setItem('token',response.data.token)
    }
    useEffect(()=>{
        Post()
    },[])
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
          
    }
    return(
        <>
        <div>
            <form>
                <label>Email:</label>
                <input type="email" placeholder="Enter Email" value={form.email} onChange={handleChange} name="email"/>
                <label>Password:</label>
                <input type='Password' placeholder="Enter Password" value={form.password} onChange={handleChange} name="password"/>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
        </>
    )
}