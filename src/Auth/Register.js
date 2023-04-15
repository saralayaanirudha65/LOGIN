import React, {useState} from "react";
import { toast } from "react-toastify";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    // Form Function
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name,email,phone,address,password);
        toast.success('Registered successfully');
    }





    return (

        <div className="register">
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input type="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" required/>
                    
                   
                </div>
                <div class="mb-3">
                    <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required/>
                    
                   
                </div>
                <div class="mb-3">
                    <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} class="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone" required/>
                   
                </div>
                <div class="mb-3">
                    <input type="Address" value={address} onChange={(e) => setAddress(e.target.value)} class="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp" placeholder="Address" required/>
                   
                </div>
                <div class="mb-3">
                    
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" 
                    id="exampleInputPassword1" placeholder="password" required  />
                    
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
export default Register