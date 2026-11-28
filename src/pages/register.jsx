import { registerschema } from "../component/component formschema/registerschema";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    });

   function onsubmit(data) {
    console.log(data);
    alert("Register success");
    navigate("/login",{state:data});
} 
    return (
    <form onSubmit={handleSubmit(onsubmit)} 
    className="bg-black mx-auto mt-16 flex w-full max-w-md flex-col rounded-xl bg-gray-800 p-8 shadow-lg" > 
      <input type='text' required placeholder="Enter your username" name="username"{...register("name")}
         className="bg-white mx-auto mt-16 flex w-full max-w-md flex-col rounded-xl bg-gray-600 p-8 shadow-lg">
    </input>
      <p className="mb-1 mt-2 min-h-[1.10rem] text-xs text-red-500">{errors.name?.message}</p>
      <input type='email' required placeholder="Enter your email" name="email"{...register("email")}
            className="bg-white mx-auto mt-16 flex w-full max-w-md flex-col rounded-xl bg-gray-600 p-8 shadow-lg">
        </input>
      <p className="mb-5 mt-2 min-h-[1.10rem] text-xs text-red-500">{errors.email?.message}</p>
      <input type='password' required placeholder="Enter your password" name="passsword"{...register("password")}
            className="bg-white mx-auto mt-16 flex w-full max-w-md flex-col rounded-xl bg-gray-600 p-8 shadow-lg">
        </input>
      <p className="mb-5 mt-2 min-h-[1.10rem] text-xs text-red-500">{errors.password?.message}</p>
      <input type='number' required placeholder="Enter your age" name="age"{...register("age")}
      className="bg-white mx-auto mt-16 flex w-full max-w-md flex-col rounded-xl bg-gray-600 p-8 shadow-lg">
        </input>
      <p className="mb-5 mt-2 min-h-[1.10rem] text-xs text-red-500">{errors.age?.message}</p>
      <><button type="submit"
         className="mt-1 rounded-lg bg-white-500 py-3 font-bold text-white transition hover:bg-black-600 active:scale-95q"
      >submit</button></>
    </form>
 )
}
export default Register