import { useState } from "react"

let Registration=()=>{
    let[user,setUser]=useState({name:"",mobile:"",DOB:""})
   return <div>
    <div className="container">
            <div className="row">
                <div className="col-5">
                <form action="" onSubmit={submitHandler}>
        <h1>{JSON.stringify(user)}</h1>
        <div className="form-group">
        <label>Name</label>
        <input type='text' onChange={updateHandler} className="form-control" name=""/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input type='password' onChange={updateHandler} className="form-control" name="password"/>
        </div>
        <input type="submit" value="login" className="btn btn-outline-success"/>
    </form>  
                </div>
            </div>
        </div>
   </div>
}
export default Registration