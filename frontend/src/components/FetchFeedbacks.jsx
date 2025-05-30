import React, { useState } from 'react'
import { toast } from 'react-toastify'

const FetchFeedbacks = () => {
    const [pass,setPass]=useState("")
    const [data,setData]=useState([])
    const [isAuthorised,setIsAuthorised]=useState(false)

    const handleInputChange = (e)=>{
        const {name,value}=e.target
        setPass((prev)=>({
            ...prev,[name]:value
        }))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:3000/api/v1/all-feedbacks",{
                headers:{
                    'x-admin-secret':pass
                },
                method:"GET"
            })

            if(response.ok){
                const jsonData = await response.json()
                setData(jsonData.data)
                setIsAuthorised(true)
                toast.success("Feedbacks fetched successfully")
            }
            else {
                toast.error("Unauthorised access")
            }
        } catch (error) {
            toast.error("Server error. Please try again.");
        }
    }
  return (
    <div>
      {!isAuthorised ? (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={pass}
            placeholder="Enter admin password"
            onChange={(e)=>setPass(e.target.value)}
          />
          <button type="submit">View Feedbacks</button>
        </form>
      ) : (
        <div>
          <h2>All Feedbacks</h2>
          <ul>
            {data.map((item) => (
              <li key={item._id}>
                <strong>{item.name}</strong> - {item.rating}/5 - {item.comment} - {item.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FetchFeedbacks
