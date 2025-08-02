"use client"

import { useState } from "react"
import { Box, Typography, IconButton, Avatar, Button, Drawer } from "@mui/material"
import { Message, Close } from "@mui/icons-material"
import HvacIcon from '@mui/icons-material/Hvac';

interface MenuDrawerProps {
  isMenuOpen: boolean
  onClose: () => void
}

export default function MenuDrawer({ isMenuOpen, onClose }: MenuDrawerProps) {
  const [creativesOpen, setCreativesOpen] = useState(false)
  const [loungeOpen, setLoungeOpen] = useState(false)

  return (
    <Drawer
      anchor="right"
      open={isMenuOpen}
      onClose={onClose}
      PaperProps={{
        className: `w-full bg-black
            sm:w-80
            bg-[radial-gradient(circle_at_1px_1px,_#1a1a1a_1px,_transparent_0)] bg-[length:20px_20px]`,
      }}
    >
      <Box className="h-full text-white flex flex-col">

        <Box className="flex items-center justify-between p-3 border-b border-gray-700">

          <Box className="flex items-center gap-2">
            {/* <Box className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center relative">
              <HvacIcon />

            </Box> */}
          </Box>


          <Box className="flex items-center gap-2">
            <IconButton size="small" className="text-white hover:text-yellow-500">
              <Message />
            </IconButton>
            <IconButton size="small" className="text-white hover:text-yellow-500" onClick={onClose}>
              <Close />
            </IconButton>
            <Avatar src="/placeholder-user.jpg" className="w-8 h-8">
              MM
            </Avatar>
          </Box>
        </Box>

        <Box className="flex-1 p-3 flex flex-col gap-2">
          <Typography variant="h6" className="text-white cursor-pointer hover:text-yellow-500 font-medium">
            Home
          </Typography>
          <Typography variant="h6" className="text-white cursor-pointer hover:text-yellow-500  font-medium">
            About
          </Typography>
          <Box
            className="flex items-center justify-between cursor-pointer hover:[&_.menu-text]:text-yellow-500"
            onClick={() => setCreativesOpen(!creativesOpen)}
          >
            <Typography className="menu-text text-white  font-medium" variant="h6">
              Creatives
            </Typography>
            <Typography className="text-white text-xs">{creativesOpen ? "▲" : "▼"}</Typography>
          </Box>
          {creativesOpen && (
            <Box className="pl-2 flex flex-col gap-1">
              <Typography className="text-gray-400 text-sm cursor-pointer hover:text-white">
                Browse Creatives
              </Typography>
              <Typography className="text-gray-400 text-sm cursor-pointer hover:text-white">
                Featured Profiles
              </Typography>
              <Typography className="text-gray-400 text-sm cursor-pointer hover:text-white">
                Creative Categories
              </Typography>
            </Box>
          )}
          <Typography variant="h6" className="text-white cursor-pointer hover:text-yellow-500  font-medium">
            Agencies
          </Typography>
          <Box
            className="flex items-center justify-between cursor-pointer hover:[&_.menu-text]:text-yellow-500"
            onClick={() => setLoungeOpen(!loungeOpen)}
          >
            <Typography className="menu-text text-white  font-medium" variant="h6">
              The lounge
            </Typography>
            <Typography className="text-white text-xs">{loungeOpen ? "▲" : "▼"}</Typography>
          </Box>
          {loungeOpen && (
            <Box className="pl-2 flex flex-col gap-1">
              <Typography className="text-gray-400 text-sm cursor-pointer hover:text-white">Community Forum</Typography>
              <Typography className="text-gray-400 text-sm cursor-pointer hover:text-white">
                Events & Meetups
              </Typography>
              <Typography className="text-gray-400 text-sm cursor-pointer hover:text-white">Resources</Typography>
            </Box>
          )}
          <Typography variant="h6" className="text-white cursor-pointer hover:text-yellow-500  font-medium">
            Search jobs
          </Typography>
          <Typography variant="h6" className="text-white cursor-pointer hover:text-yellow-500  font-medium">
            Hire talent
          </Typography>
          <Typography variant="h6" className="text-white cursor-pointer hover:text-yellow-500  font-medium">
            Faq
          </Typography>
        </Box>

      </Box>
    </Drawer>
  )
}
