"use client"

import { Box, Typography, IconButton, Avatar } from "@mui/material"
import { Refresh, Message, Menu as MenuIcon, ArrowBack } from "@mui/icons-material"
import HvacIcon from '@mui/icons-material/Hvac';
interface HeaderProps {
  isMobile: boolean
  showChat: boolean
  onBackToConversations: () => void
  onMenuToggle: () => void
  onSidebarToggle: () => void
}

export default function Header({ isMobile, showChat, onBackToConversations, onMenuToggle, onSidebarToggle, }: HeaderProps) {
  return (
    <Box className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-black sm:p-6">
      <Box className="flex items-center gap-2">
        {isMobile && showChat && (
          <IconButton onClick={onBackToConversations} className="text-white hover:text-yellow-500">
            <ArrowBack />
          </IconButton>
        )}
        <img src="/images/app-logo.jpeg" className="w-12 h-12 rounded-full" />
        {/*  */}
        {/* </Box> */}
        {/* <Typography className="text-white text-sm font-medium hidden sm:block">
          AD AGENCY CREATIVES COMMUNITY
        </Typography> */}
      </Box>
      <Box className="flex items-center gap-2">
        <IconButton className="text-white hover:text-yellow-500">
          <Refresh />
        </IconButton>
        <IconButton className="text-white hover:text-yellow-500">
          <Message />
        </IconButton>
        {isMobile && !showChat && (
          <IconButton data-sidebar-toggle onClick={onSidebarToggle} className="text-white hover:text-yellow-500">
            <MenuIcon />
          </IconButton>
        )}
        <IconButton className="text-white hover:text-yellow-500" onClick={onMenuToggle}>
          <MenuIcon />
        </IconButton>
        <Avatar src="/images/matthew-avatar.jpg" className="w-8 h-8">
          MM
        </Avatar>
      </Box>
    </Box>
  )
}
