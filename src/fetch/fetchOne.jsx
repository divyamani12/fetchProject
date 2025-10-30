import { useState } from "react"

export default function Fetch(){
    const[get,setGet] = useState([])
    const [post,setPost] = useState({})
    const Getting = async() =>{
        const res = await fetch('https://reqres.in/api/users', {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
            })
        const result = await res.json()
        setGet(result.data)
        console.log(result.data)
    }
    const Posting = async()=>{
        const res = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'x-api-key': 'reqres-free-v1',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'John Doe',
                job: 'Developer'
            })
        })
        const data = await res.json()
        setPost(data)
        console.log(data)
    }
    const handleClick = () =>{
        Getting()
        Posting()
    }
    return(
        <>
        <button onClick={handleClick}>clickme</button>
        <div>
            {
                get.map((e)=>(
                    <p key={e.id}>{e.email}</p>
                ))
            }
        </div>
        <hr></hr>
        <div>
            {
                // <p>{post.name}</p>
                Object.keys(post).map((key)=>(
                    <p>{`${key}:${post[key]}`}</p>
                ))
            }
        </div>
        </>
    )
}