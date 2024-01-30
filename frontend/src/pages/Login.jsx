import { useState } from "react";
import {Link} from 'react-router-dom'

export default function Login() {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          {" "}
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>

        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              value={formData.email}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
              type="email"
              placeholder="Enter Your Email"
              name="email"
            />
          </div>
        </form>
        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="mt-7 text-center"><button className="btn w-full rounded-md" type="submit">Login</button></div>
        <p className="mt-5 text-textColor  text-center">I don&apos;t have an account? <Link to='/register' className="text-primaryColor font-medium"> Register</Link> </p>
    
        </form>
          </div>
    </section>
  );
}
