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
            <Typography variant="h5" className="font-bold text-yellow-400 text-lg sm:text-xl">
              Messages
            </Typography>
            <Box className="bg-gray-800 rounded-md p-2  text-xs text-white font-medium flex items-center">
              40
            </Box>
          </Box>
        </Box>
        <Divider />

        <Box className="flex items-center justify-between p-4">
          <Typography className="text-white sm:text-base md:font-bold md:text-sm ">All Messages</Typography>
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
                <Box className="flex items-center justify-between mb-0.5">
                  <Typography
                    variant="body2"
                    className={`font-medium overflow-hidden text-ellipsis text-white
                      }`}
                  >
                    {conversation.name}
                  </Typography>
                  <StarBorderIcon

                    className={`w-4 h-4 text-white`}
                  />
                </Box>
                <Typography
                  variant="body2"
                  className={`overflow-hidden text-ellipsis whitespace-nowrap mb-1 ${selectedConversation.id === conversation.id ? "text-gray-700" : "text-gray-400"
                    }`}
                >
                  {conversation.lastMessage}
                </Typography>
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
