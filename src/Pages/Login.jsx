import { useState } from "react"

let Login=()=>{
    let[user,setUser]=useState({email:"",password:""})
    let emailHandler=(event)=>{
        setUser({email:event.target.value})
    }
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-5">
                <form action="">
        <h1>{JSON.stringify(user)}</h1>
        <div className="form-group">
        <label>Email</label>
        <input type='email' onChange={emailHandler} className="form-control"/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input type='password' className="form-control"/>
        </div>
        <input type="submit" value="login" className="btn btn-outline-success"/>
    </form>  
                </div>
            </div>
        </div>
    </div>
}
export default Login