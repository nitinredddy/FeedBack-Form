import React, { useState } from 'react'
import {toast} from 'react-toastify'

const FeedBack = () => {
    const [form,setForm] = useState({
        name:"",
        rating:"",
        email:"",
        comment:""
    })

    const [message,setMessage]=useState("")

    const handleInputChange = (e)=>{
        const {name,value}=e.target
        setForm((prev)=>({
            ...prev,[name]:value
        }))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:3000/api/v1/feedback",{
                headers:{
                    "Content-Type":"application/json"
                },
                method:"POST",
                body:JSON.stringify(form)
            })
            const data = response.json()

            if(response.ok){
                toast.success("Form submitted successfully")
                setForm({
                    name:"",
                    email:"",
                    comment:"",
                    rating:""
                })
            }
            else {
                setMessage(data?.message || "Error submitting feedback");
            }
        } catch (error) {
            setMessage("Server error. Please try again.");
        }
    }
  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange}
        /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
        /><br />

        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={handleInputChange}
        /><br />

        <textarea
          name="comment"
          placeholder="Comment"
          value={form.comment}
          onChange={handleInputChange}
        ></textarea><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FeedBack
