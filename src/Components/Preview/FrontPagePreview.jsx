import React, { forwardRef } from "react";
import { useLocation } from "react-router-dom";
import Preview from "./Preview";

const FrontPagePreview = forwardRef(({ data }, ref) => {
  const location = useLocation();
  const formData = data || location.state || {};

  return (
    <div
      ref={ref}
      className="w-[210mm] h-[297mm] bg-white p-10 text-black shadow-md mx-auto "
    >
      <div className=" flex flex-col justify-between h-full border-8 border-double border-black p-4">
        <div className="flex flex-col justify-between">
          <h1 className="text-5xl font-bold text-center mb-12">
            {formData.universityName || "Your University Name"}
          </h1>
        </div>
        <div className="w-1/2 mx-auto">
          <img src={formData.image} className="mx-auto" />
        </div>

        <div>
          {/* Tagline */}
          <p className="text-center p-2 border-4 border-double border-black">
            <strong>{formData.tagLine}</strong>
          </p>
          {/* FormData */}
          <div className="border-4 border-double border-black p-6 space-y-2 text-4xl flex flex-col gap-4">
            <div className="flex gap-5">
              <p>
                <strong>Roll:</strong> {formData.roll}
              </p>
              <p>
                <strong>No:</strong> {formData.no}
              </p>
            </div>
            <p>
              <strong>Registration No:</strong> {formData.registrationNo}
            </p>
            <p>
              <strong>Subject Code:</strong> {formData.subjectCode}
            </p>
            <p>
              <strong>Course Code:</strong> {formData.courseCode}
            </p>
            <p>
              <strong>Course Name:</strong> {formData.courseName}
            </p>
            <p>
              <strong>Session:</strong> {formData.session}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FrontPagePreview;
