import axios from 'axios'
import { useState } from 'react'
export default function Axios(){
    const [get,setGet] = useState([])
    const [post,setPost] = useState({})
    const Getting = async()=>{
        const res = await axios.get('https://reqres.in/api/users', {
                    headers: {
                        'x-api-key': 'reqres-free-v1'
                    }
                    })
        console.log(res.data.data)
        setGet(res.data.data)
    }
    const Posting = async()=>{
        const res = await axios.post('https://reqres.in/api/users', 
                    {
                        name: 'John Doe',
                        job: 'Developer'
                    },
                    {
                    headers: {
                        'x-api-key': 'reqres-free-v1',
                        'Content-Type': 'application/json'
                    },})
        console.log(res.data)
        setPost(res.data)
    }
    const handleClick = ()=>{
        Getting()
        Posting()
    }
    return(
        <>
        <button onClick={handleClick}>Click me</button>
        <div>
            {
                get.map((e)=>(
                    <p key={e.id}>{e.email}</p>
                ))
            }
        </div>
        <hr/>
        <div>
            {
                Object.keys(post).map((key)=>(
                    <p>{`${key}:${post[key]}`}</p>
                ))
            }
        </div>
        </>
    )
}



