import { registerschema } from "../component formschema/registerschema";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

function Register(){
    const navigate = UseNavigate();
    const {register, handlesubmit, formState:{errors}}=useForm({
        resolver: zodresolver(registerschema)
    })
}


function onsubmit1(data){
    console.log(data)
    alert("register sucess")
    Navigate("/")
}
return (
    <form onSubmit={handlesubmit(onsubmit)}>
      <input type='text' required placeholder="Enter your username" name="username"{...register("name")}/>
      <p>{errors.name?.message}</p>
      <input type='text' required placeholder="Enter your username" name="username"{...register("email")}/>
      <p>{errors.email?.message}</p>
      <input type='text' required placeholder="Enter your username" name="username"{...register("password")}/>
      <p>{errors.password?.message}</p>
      <input type='text' required placeholder="Enter your username" name="username"{...register("age")}/>
      <p>{errors.age?.message}</p>
      <><button type="submit">submit</button></>
    </form>
)