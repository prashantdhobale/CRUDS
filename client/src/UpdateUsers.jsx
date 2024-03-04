import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUsers (){
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3002/getUser/'+id)
        .then(result => {console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)   
                setPassword(result.data.email)   
         })
        .catch(err => console.log(err))
      },[])


const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3002/updateUser/"+id,{name, email, password})
    .then(result => {
        console.log(result)
        navigate('/')
})      
.catch(err => console.log(err))
}
    
return(
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3"> 
            <h2>Add User</h2>
            <form onSubmit={Update}>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter name" className="form-control" 
                    value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="emailxt" placeholder="Enter email" className="form-control" 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter passowrd" className="form-control" 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>  
    </div>
    )
}

export default UpdateUsers;