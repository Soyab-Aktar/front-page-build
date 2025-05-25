// src/Components/Preview/Preview.jsx
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import FrontPagePreview from "./FrontPagePreview";

const Preview = () => {
  const previewRef = useRef();
  const location = useLocation();
  const data = location.state || {};

  const handleDownload = () => {
    console.log("Download button clicked"); // <== ADD THIS
    const input = previewRef.current;

    if (!input) {
      console.error("previewRef is null");
      return;
    }

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
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
