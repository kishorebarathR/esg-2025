import React from 'react';

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Amit Gupta",
      role: "Director,",
      department: "Evidence for Change",
      imgSrc: "/whyEsgOne/AmitGupta.png"
    },
    {
      name: "Priyamvada Tiwari",
      role: "Associate Director,",
      department: "Platform & Policy",
      imgSrc: "/whyEsgOne/Priyamvada Tiwari.png"
    },
    {
      name: "Shankar AG",
      role: "Program Director,",
      department: "Swasti",
      imgSrc: "/whyEsgOne/Shankar-AG.png"
    },
    {
      name: "Shaonli Chakraborty",
      role: "Director,",
      department: "Upfront",
      imgSrc: "/whyEsgOne/Shaonli-Chakraborty.png"
    },
    {
        name: "Vishrut Shivkumar",
        role: "Business Lead,",
        department: "Shoonya Net Zero Catalyst",
        imgSrc: "/whyEsgOne/Vishrut Shivkumar.png"
      },
      {
        name: "Karthik E",
        role: "Manager,",
        department: "Evidence for Change",
        imgSrc: "/whyEsgOne/Karthik.png"
      },
      {
        name: "Amruta Vyavahare",
        role: "Sr. Research Lead,",
        department: "Evidence for Change",
        imgSrc: "/whyEsgOne/Amruta Vyavahare-01.jpeg"
      }
  ];

  return (
    <div className="container mx-auto px-4 lg:py-6">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl text-[#632E88] text-center mb-12">
        Meet our Team
      </h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image Container */}
            <div className="w-full aspect-square rounded-3xl overflow-hidden mb-4">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-[#7E3F98] text-2xl  text-center">
              {member.name}
            </h3>

            {/* Role and Department */}
            <div className="text-center  text-lg">
              <p>{member.role}</p>
              <p>{member.department}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;