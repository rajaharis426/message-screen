"use client"

import { Box, Typography, IconButton, Avatar, Divider } from "@mui/material"
import { Edit, MoreVert, Star } from "@mui/icons-material"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
interface Conversation {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  isStarred: boolean
  messages: Array<{
    id: number
    text: string
    time: string
    isOwn: boolean
  }>
}

interface ConversationListProps {
  conversations: Conversation[]
  selectedConversation: Conversation
  isMobile: boolean
  showChat: boolean
  onConversationSelect: (conversation: Conversation) => void
}

export default function ConversationList({ conversations, selectedConversation, onConversationSelect, }: ConversationListProps) {
  return (
    <Box
      className="sm:w-4/6 lg:w-1/4 xl:w-2/6 2xl:w-1/5 flex flex-col border-r border-gray-700
        md:border-b md:max-h-full
        sm:max-h-full"
    >
      <Box className="">
        <Box className="flex items-center justify-between mb-2 p-3">
          <Box className="flex items-center gap-1 p-1">
            <p className="text-[24px] leading-8 font-bold text-center flex items-center text-[#FFCD1A] font-inter">
              Messages
            </p>
            <Box className="bg-gray-800 rounded-md p-2  text-xs text-white font-medium flex items-center">
              40
            </Box>
          </Box>
        </Box>
        <Divider />

        <Box className="flex items-center justify-between p-4">
          <p className="mx-auto w-[91px] h-[17px] font-inter font-semibold text-[14px] leading-[17px] text-[#F2F4FE]">
            All Messages</p>
          <Box className="flex items-center gap-1">
            <IconButton size="small" className="text-white hover:text-yellow-500">
              <Edit fontSize="small" />
            </IconButton>
            <IconButton size="small" className="text-white hover:text-yellow-500">
              <MoreVert fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Divider />

      <Box className="flex-1 overflow-y-auto px-2 sm:px-3 mt-4">
        {conversations.map((conversation) => (
          <Box
            key={conversation.id}
            className={`p-2 sm:p-3 rounded-lg cursor-pointer mb-0.5 ${selectedConversation.id === conversation.id ? "bg-[rgba(255,205,26,0.1)]" : "bg-transparent"
              } hover:bg-gray-800`}
            onClick={() => onConversationSelect(conversation)}
          >
            <Box className="flex items-start gap-1.5">
              <Avatar src={conversation.avatar || "/placeholder.svg"} className="w-10 h-10">
                {conversation.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </Avatar>
              <Box className="flex-1 min-w-0">
                <Box className="flex items-center justify-between mb-0.5 w-full">
                  <p className="  h-[17px] font-inter font-bold text-[14px] leading-[17px] text-white">
                    {conversation.name}
                  </p>
                  <StarBorderIcon

                    className={`w-4 h-4 text-white`}
                  />
                </Box>
                <p className="w-[208.75px] h-[30px] font-inter font-normal text-[12px] leading-[15px] text-[#636363]">
                  {conversation.lastMessage}
                </p>
                <Box className="flex items-center gap-0.5">
                  {/* <Box className="w-2 h-2 bg-emerald-500 rounded-full" /> */}
                  <QueryBuilderIcon sx={{ fontSize: 16 }} />
                  <Typography
                    variant="caption"
                    className={`${selectedConversation.id === conversation.id ? "text-gray-700" : "text-gray-500"}`}
                  >
                    {conversation.time}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
