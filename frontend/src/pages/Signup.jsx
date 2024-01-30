import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/person.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [selectedFile, setSelecteFile] = useState(null);
  // const [previewURL, setPreviewURL] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "Patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* {======= img =======} */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* {======= form =======} */}

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form className="py-4 md:py-0" onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                  type="text"
                  placeholder="Full Name"
                  name="name"
                />
              </div>
              <div className="mb-5">
                <input
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <div className="mb-5">
                <input
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>

              <div className="flex justify-between">
                <label className="text-headingColor font-bold ">
                  Are you a:{" "}
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[14px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold ">
                  Gender:{" "}
                  <select
                    name="Gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[14px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 mt-7 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor:pointer"
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg cursor-pointer truncate"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7 text-center">
                <button className="btn w-full rounded-md" type="submit">
                  Signup
                </button>
              </div>
              <p className="mt-5 text-textColor  text-center">
                I have an account?{" "}
                <Link to="/login" className="text-primaryColor font-medium">
                  {" "}
                  Login{" "}
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
