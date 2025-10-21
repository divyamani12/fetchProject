import { useEffect } from "react"
import { useState } from "react"

export default function ForFun(){
    const [user,setUser] = useState([])
    const [show,setShow] = useState(false)
    const GetData = async() =>{
        try{
            const getting= await fetch('https://reqres.in/api/users')
            const data = await getting.json() 
            console.log(data.data)
            setUser(data.data)
            setShow(true)
        }
        catch(err){
            console.log('error',err)
        }
    }
    useEffect(()=>{
        GetData()
    },[])
    const handleClick = async()=>{
        try{
            const response = await fetch('https://reqres.in/api/users', {
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
            const data = await response.json()
            console.log(data)
            GetData()
        }
        catch(err){
            console.log("error",err)
        }
    }
    return(
        <>
        <button onClick={handleClick}>clickme</button>
        {show && <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                        {user.map((e)=>(
                            <tr key={e.id}>
                                <td>{e.first_name}{e.last_name}</td>
                                <td>{e.email}</td>
                            </tr>
                           
                        ))}
                </tbody>
            </table>          
        </div>}
        </>
    )
}