import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Homepage = () => {
  const fields = [
    {
      name: "universityName",
      label: "University Name",
      placeholder: "Enter University Name",
    },
    {
      name: "image",
      label: "Upload Logo or Image",
      placeholder: "",
    },
    {
      name: "tagLine",
      label: "TagLine",
      placeholder:
        "Ex : Four Year Under Graduate Programme SEMESTER - IV Examination (under NEP), 2025",
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
    image: "",
    tagLine:
      "Four Year Under Graduate Programme SEMESTER - IV Examination (under NEP), 2025",
    roll: "",
    no: "",
    registrationNo: "",
    subjectCode: "",
    courseCode: "",
    courseName: "",
    session: "",
  });

  const [includeImage, setIncludeImage] = useState(true);
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
    for (const key in formData) {
      if (!formData[key]) {
        if (!includeImage && key === "image") continue;
        toast.error("Please fill the form correctly.");
        return;
      }
    }

    const finalData = { ...formData };
    if (!includeImage) finalData.image = "";

    navigate("/preview", { state: finalData });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="card w-full max-w-2xl bg-black border-4 border-double border-emerald-800 rounded-2xl shadow-[0_0_40px_10px_rgba(16,185,129,0.25)] transition-all duration-500 hover:shadow-[0_0_60px_15px_rgba(16,185,129,0.35)]">
        <div className="card-body p-6">
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 tracking-wide">
            Front Page Details
          </h2>

          <form className="space-y-5">
            {/* Checkbox to include/exclude image field */}
            <div className="form-control w-full">
              <label className="cursor-pointer label">
                <span className="label-text text-white font-medium">
                  Include Logo or Image?
                </span>
                <input
                  type="checkbox"
                  checked={includeImage}
                  onChange={(e) => setIncludeImage(e.target.checked)}
                  className="checkbox checkbox-emerald"
                />
              </label>
            </div>

            {/* Form Fields */}
            {fields.map(({ name, label, placeholder }) => {
              if (name === "image" && !includeImage) return null;

              if (name === "image") {
                // Image upload input
                return (
                  <div key={name} className="form-control w-full">
                    <label className="label mb-1">
                      <span className="text-gray-300 font-medium tracking-wide">
                        {label}
                      </span>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFormData((prev) => ({
                              ...prev,
                              image: reader.result, // base64 image
                            }));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="file-input file-input-bordered w-full bg-gray-900 text-white border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-500"
                    />
                  </div>
                );
              }

              return (
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
              );
            })}

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
