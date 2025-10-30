// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"

// export default function ForFun(){
//     const [user,setUser] = useState([])
//     const [post,setPost] = useState({})
//     const [show,setShow] = useState(false)
//     const Get = async() =>{
//         try{
//             const res = await fetch('https://reqres.in/api/users', {
//                         headers: {
//                             'x-api-key': 'reqres-free-v1'
//                         }
//                         })
//             const data = await res.json()
//             setUser(data.data)
            
//         }
//         catch(err){
//             console.log('Error',err)
//         }
//     }
//     const Post = async() =>{
//         try{
//             const res = await fetch('https://reqres.in/api/users', {
//                         method: 'POST',
//                         headers: {
//                             'x-api-key': 'reqres-free-v1',
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             name: 'John Doe',
//                             job: 'Developer'
//                         })
//                         })
//             const data =  await res.json()
//             setPost(data)
//         }
//         catch(err){
//             console.log('Error',err)
//         }
//     }
//     const handleClick = () =>{
//         Get()
//         setShow(true)
//         Post()
//     }
//     useEffect(()=>{
//         Get()
       
//     },[])
//     return(
//         <>
//         <button onClick={handleClick}>Click Me</button>
//         {show && <>
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>name:</th>
//                         <th>email:</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         user.map((e)=>(
//                             <tr>
//                             <td>{e.first_name}</td>
//                             <td>{e.email}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </div>
//         <hr></hr>
//         <div>
//             {post.name}
//         </div>
//         </>
//         }
//         </>
//     )
// }
import axios from "axios"
export default function ForFun(){
    const [get,setGet] = useState([])
    const [post,setPost] = useState({})
    const [show,setShow] = useState(false)
    const Get = async ()=>{
        const res = await axios.get('https://reqres.in/api/users', {
                    headers: {
                        'x-api-key': 'reqres-free-v1'
                    }
                    })
        // console.log(res.data.data)
        setGet(res.data.data) 
    }
    const Post = async()=>{
        const res = await axios.post('https://reqres.in/api/users', 
                    {
                        name: 'John Doe',
                        job: 'Developer'
                    },
                    {headers: {
                        'x-api-key': 'reqres-free-v1',
                        'Content-Type': 'application/json'
                    },
                   
                    })
        setPost(res.data)

    }
    useEffect(()=>{
        Get()
        Post()
    },[])
    const handleClick = () =>{
        Get()
        Post()
        setShow(true)
    }
    return(
        <>
        <button onClick={handleClick}>Click Me</button>
        {show && <>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name:</th>
                        <th>email:</th>
                    </tr>
                </thead>
                <tbody>
                    {get.map((e)=>(
                        <tr>
                            <td>{e.first_name}</td>
                            <td>{e.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <hr/>
        <div>
            {post.name}
        </div>
        </>}
        </>
    )
}