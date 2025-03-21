import Image from "next/image";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const Assesment = () => {
  const [openSection, setOpenSection] = useState("assessments");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Assessments & Analysis",
      key: "assessments",
      content: (
        <>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#239F79] rounded-full"></span>
            <p className="font-semibold text-[#239F79]">
              Risk & Opportunity Assessment
            </p>
          </div>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#239F79] rounded-full"></span>
            <p className="font-semibold text-[#239F79]">
              Materiality & Double/Triple Materiality
            </p>
          </div>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#239F79] rounded-full"></span>
            <p className="font-semibold text-[#239F79]">
              Climate-Related Risk and Opportunities Assessment
            </p>
          </div>
          <div className="ml-4 text-sm">
            <p className="font-semibold text-[#239F79]">- Environment:</p>
            <p>
              Comprehensive Environmental Audits, (Carbon & GHG - Scope 1, 2 &
              3), Carbon Credits, Water & Waste Monitoring, Green Building
              Certifications, Life Cycle Analysis for Projects/Products (ISO
              14040 & ISO -14044), Climate Responsive Master Plans
            </p>
            <p className="mt-2 font-semibold text-[#239F79]">- Social:</p>
            <p>Human Rights Assessment (UNBHR & SA8000)</p>
          </div>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#239F79] rounded-full"></span>
            <p className="font-semibold text-[#239F79]">
              Impact Assessment of CSR Activities
            </p>
          </div>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#239F79] rounded-full"></span>
            <p className="font-semibold text-[#239F79]">
              Social Return on Investments (SROI) Framework
            </p>
          </div>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#239F79] rounded-full"></span>
            <p className="font-semibold text-[#239F79]">
              Tech-Enabled Monitoring & Evaluation of CSR and Non-CSR Projects
            </p>
          </div>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#239F79] rounded-full"></span>
            <p className="font-semibold text-[#239F79]">
              Designing M&E for Outcome/Impact Bonds
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Reporting",
      key: "reporting",
      content: (
        <>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#239F79] rounded-full"></span>
            <p className="font-semibold text-[#239F79]">
          Domestic & International Sustainability Reporting <span className="text-black font-normal">(using BRSR, GRI, TCFD, Science-Based Target Initiatives(SBTi) and other relevant frameworks) using our in-house developed sustainability tool </span> 

            </p>
          </div>
          <div className="relative pl-4">
            <span className="absolute -left-4 top-1 w-2 h-2 bg-[#239F79] rounded-full"></span>
            <p className="font-semibold text-[#239F79]">
            MSME Lite <span className="text-black font-normal">allows MSMEs to do Sustainability Reporting in alignment with the BRSR Core Framework of BRSR </span>
            </p>
          </div>
        
        
        </>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto bg-white relative md:mt-10 mt-4 z-0">
      <div className="absolute z-50 hidden sm:block">
        <Image
          src="/solutions/icon-001.svg"
          className="-ml-14 -mt-7"
          width={160}
          height={100}
        />
      </div>
      {sections.map((section) => (
        <div key={section.key}>
          <button
            className="flex justify-between w-full p-7 md:text-2xl text-xl font-semibold text-[#043929] bg-gray-100 my-1 md:px-20"
            onClick={() => toggleSection(section.key)}
          >
            {section.title}
            {openSection === section.key ? (
              <AiOutlineCaretUp />
            ) : (
              <AiOutlineCaretDown />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openSection === section.key
                ? "max-h-96 overflow-y-auto"
                : "max-h-0"
            }`}
          >
            <div className="p-4 md:pl-20 pl-6 space-y-3 text-gray-700 relative">
              {/* Vertical Dotted Line */}
              <div className="absolute md:left-[67px] left-[11px] top-0 h-full w-[2px] border-l-2 border-dashed border-[#4f4e4e]"></div>
              {section.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Assesment;
