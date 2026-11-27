import { registerschema } from "../component/component formschema/registerschema";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    });

   function onsubmit1(data) {
    console.log(data);
    alert("Register success");
    navigate("/login",{state:data});
}
    return (
    <form onSubmit={handleSubmit(onsubmit1)}>
      <input type='text' required placeholder="Enter your username" name="username"{...register("name")}/>
      <p>{errors.name?.message}</p>
      <input type='text' required placeholder="Enter your email" name="email"{...register("email")}/>
      <p>{errors.email?.message}</p>
      <input type='text' required placeholder="Enter your password" name="passsword"{...register("password")}/>
      <p>{errors.password?.message}</p>
      <input type='text' required placeholder="Enter your age" name="age"{...register("age")}/>
      <p>{errors.age?.message}</p>
      <><button type="submit">submit</button></>
    </form>
 )
}
export default Register