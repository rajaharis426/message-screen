"use client"

import { Avatar, Badge, Button, Typography } from "@mui/material"
import HvacIcon from '@mui/icons-material/Hvac';

interface SidebarProps {
  sidebarOpen: boolean
}

export default function Sidebar({ sidebarOpen }: SidebarProps) {
  const menuItems = [
    { label: "Pro Dashboard", active: false },
    { label: "My Contact Info", active: false },
    { label: "My ProFile™", active: false },
    { label: "Job Messages", active: true },
    { label: "My Opportunities", active: false },
    { label: "Job Alerts", active: false },
    { label: "Creative Jobs", active: false },
    { label: "Agencies Shortlist", active: false },
    { label: "Change Password", active: false },
    { label: "Delete Profile", active: false },
  ]

  return (
    <div
      className={`
        xs:block sm:hidden xl:block fixed top-26 left-0 h-5/6 w-64 bg-black text-white border border-gray-600 rounded-3xl
          p-6 pt-6
        transition-transform duration-300 ease-in-out
         md:relative md:translate-x-0 md:m-0 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        z-50 
      `}
    >
      <div className="text-center mb-8">

        <div className="relative inline-block mb-6">


          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 rounded-full bg-black opacity-80 blur-2xl z-0"></div>

            <img
              src="/images/user-profile.jpeg"
              alt="Matthew Marcos"
              className="relative z-10 w-40 h-40 rounded-full object-cover"
            />

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black border-4 border-black flex items-center justify-center">
              <img
                src="/images/app-logo.jpeg"
                alt="Agency Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>


        </div>

        <p
          className="text-[23.625px] leading-[29px] font-bold uppercase text-white text-center flex items-center font-inter"
        >
          MATTHEW
          MARCOS
        </p>

        <button className="text-white border-2 mt-3 border-white bg-transparent hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-bold transition-colors duration-300">
          VIEW PROFILE™
        </button>


      </div>


      <nav className="space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`
    cursor-pointer 
    transition-colors duration-200 
    font-inter font-semibold 
    text-sm leading-5 
    ${item.active ? "text-yellow-400" : "text-white"} 
    hover:text-yellow-300
  `}
          >
            {item.label}
          </div>

        ))}
      </nav>
    </div>
  )
}
