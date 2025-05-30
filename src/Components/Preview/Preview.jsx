// src/Components/Preview/Preview.jsx
import React, { useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import FrontPagePreview from "./FrontPagePreview";
import { toast } from "react-toastify";

const Preview = () => {
  const previewRef = useRef();
  const location = useLocation();
  const data = location.state || {};

  const handleDownload = () => {
    toast.success("Download Started, Thank you");
    const input = previewRef.current;

    if (!input) {
      console.error("previewRef is null");
      return;
    }

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 0.7);
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("front-page.pdf");
      })
      .catch((err) => {
        console.error("Failed to generate PDF", err);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6">
      <h1 className="bg-emerald-600 p-2 rounded-md font-bold w-full text-center">
        Front Page Preview
      </h1>
      <FrontPagePreview ref={previewRef} data={data} />
      <button
        onClick={handleDownload}
        className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default Preview;
