import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const fields = [
    {
      name: "universityName",
      label: "University Name",
      placeholder: "Enter University Name",
    },
    { name: "roll", label: "Roll", placeholder: "Enter Your Roll" },
    { name: "no", label: "No", placeholder: "Enter Your No" },
    {
      name: "registrationNo",
      label: "Registration No",
      placeholder: "Enter Registration No",
    },
    {
      name: "subjectCode",
      label: "Subject Code",
      placeholder: "Enter Subject Code",
    },
    {
      name: "courseCode",
      label: "Course Code",
      placeholder: "Enter Course Code",
    },
    {
      name: "courseName",
      label: "Course Name",
      placeholder: "Enter Course Name",
    },
    { name: "session", label: "Session", placeholder: "Enter Session" },
  ];

  const [formData, setFormData] = useState({
    universityName: "",
    roll: "",
    no: "",
    registrationNo: "",
    subjectCode: "",
    courseCode: "",
    courseName: "",
    session: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/preview", { state: formData });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl bg-black border-4 border-double border-emerald-800 rounded-2xl shadow-[0_0_40px_10px_rgba(16,185,129,0.25)] transition-all duration-500 hover:shadow-[0_0_60px_15px_rgba(16,185,129,0.35)]">
        <div className="card-body p-6">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 tracking-wide">
            Front Page Details
          </h2>

          <form className="space-y-5">
            {fields.map(({ name, label, placeholder }) => (
              <div key={name} className="form-control w-full">
                <label className="label mb-1">
                  <span className="text-gray-300 font-medium tracking-wide">
                    {label}
                  </span>
                </label>
                <input
                  type="text"
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-gray-900 text-white border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-500"
                />
              </div>
            ))}

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full mt-4 font-semibold tracking-wide transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
