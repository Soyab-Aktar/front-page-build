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
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="card w-full max-w-2xl shadow-2xl bg-white">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-4 text-emerald-500">
            Front Page Details
          </h2>

          <form className="space-y-4">
            {fields.map(({ name, label, placeholder }) => (
              <div key={name} className="form-control w-full">
                <label className="label">
                  <span className="label-text text-gray-300 font-semibold">
                    {label}
                  </span>
                </label>
                <input
                  type="text"
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className="input input-bordered border-emerald-900 w-full"
                />
              </div>
            ))}
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn bg-emerald-600 hover:bg-emerald-700 text-white w-full mt-4"
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
