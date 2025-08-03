"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Box, Typography, IconButton, Avatar, TextField, Divider, Grid } from "@mui/material"
import { Star, Search, MoreVert, EmojiEmotions, AttachFile, Send, Close } from "@mui/icons-material"
import { emojis } from "@/lib/utils"

interface Message {
  id: number
  text: string
  time: string
  isOwn: boolean
  images?: Array<{ id: string; file: File; preview: string }>
}

interface Conversation {
  id: number
  name: string
  avatar: string
  lastMessage: string
  time: string
  isStarred: boolean
  messages: Message[]
}

interface ChatAreaProps {
  selectedConversation: Conversation
  isMobile: boolean
  showChat: boolean
  onSendMessage: (message: string, images: Array<{ id: string; file: File; preview: string }>) => void
}

export default function ChatArea({ selectedConversation, isMobile, showChat, onSendMessage }: ChatAreaProps) {
  const [message, setMessage] = useState("")
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showMentions, setShowMentions] = useState(false)
  const [mentionQuery, setMentionQuery] = useState("")
  const [uploadedImages, setUploadedImages] = useState<Array<{ id: string; file: File; preview: string }>>([])
  const [cursorPosition, setCursorPosition] = useState(0)
  const messageInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)


  const mentionUsers = [
    { id: 1, name: "Jennifer Markus", avatar: "/images/avatars/alice.jpg" },
    { id: 2, name: "Kathryn Murphy", avatar: "/images/avatars/andrew.jpg" },
    { id: 3, name: "Bessie Cooper", avatar: "/images/avatars/Blair.jpg" },
    { id: 4, name: "Cameron Williamson", avatar: "/images/avatars/carl.jpg" },
    { id: 5, name: "Esther Howard", avatar: "/images/avatars/Katina.jpg" },
    { id: 6, name: "Savannah Nguyen", avatar: "/images/avatars/Tyson.jpg" },
    { id: 7, name: "Darlene Robertson", avatar: "/images/avatars/Nora.jpg" },
    { id: 8, name: "Brooklyn Simmons", avatar: "/images/avatars/Helen.jpg" },
  ]

  const handleEmojiSelect = (emoji: string) => {
    const input = messageInputRef.current
    if (input) {
      const start = input.selectionStart || 0
      const end = input.selectionEnd || 0
      const newMessage = message.slice(0, start) + emoji + message.slice(end)
      setMessage(newMessage)
      setShowEmojiPicker(false)
      setTimeout(() => {
        input.focus()
        input.setSelectionRange(start + emoji.length, start + emoji.length)
      }, 0)
    }
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const cursorPos = e.target.selectionStart || 0

    setMessage(value)
    setCursorPosition(cursorPos)

    const beforeCursor = value.slice(0, cursorPos)
    const atIndex = beforeCursor.lastIndexOf("@")

    if (atIndex !== -1 && atIndex === beforeCursor.length - 1) {
      setShowMentions(true)
      setMentionQuery("")
    } else if (atIndex !== -1 && beforeCursor.slice(atIndex + 1).match(/^\w*$/)) {
      setShowMentions(true)
      setMentionQuery(beforeCursor.slice(atIndex + 1))
    } else {
      setShowMentions(false)
      setMentionQuery("")
    }
  }

  const handleMentionSelect = (user: (typeof mentionUsers)[0]) => {
    const input = messageInputRef.current
    if (input) {
      const beforeCursor = message.slice(0, cursorPosition)
      const afterCursor = message.slice(cursorPosition)
      const atIndex = beforeCursor.lastIndexOf("@")

      const newMessage = message.slice(0, atIndex) + `@${user.name} ` + afterCursor
      setMessage(newMessage)
      setShowMentions(false)

      setTimeout(() => {
        input.focus()
        const newPos = atIndex + user.name.length + 2
        input.setSelectionRange(newPos, newPos)
      }, 0)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const preview = e.target?.result as string
          const newImage = {
            id: Math.random().toString(36).substr(2, 9),
            file,
            preview,
          }
          setUploadedImages((prev) => [...prev, newImage])
        }
        reader.readAsDataURL(file)
      }
    })

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSendMessage = () => {
    if (message.trim() || uploadedImages.length > 0) {
      onSendMessage(message.trim(), uploadedImages)
      setMessage("")
      setUploadedImages([])

      if (messageInputRef.current) {
        messageInputRef.current.focus()
      }
    }
  }

  const removeImage = (imageId: string) => {
    setUploadedImages((prev) => prev.filter((img) => img.id !== imageId))
  }

  const filteredMentionUsers = mentionUsers.filter((user) =>
    user.name.toLowerCase().includes(mentionQuery.toLowerCase()),
  )
  const handleMentionButtonClick = () => {
    const at = "@"
    const newMessage = message + at
    const cursorPos = newMessage.length

    setMessage(newMessage)
    setCursorPosition(cursorPos)

    setShowMentions(true)
    setMentionQuery("")

    setTimeout(() => {
      if (messageInputRef.current) {
        messageInputRef.current.focus()
        messageInputRef.current.setSelectionRange(cursorPos, cursorPos)
      }
    }, 0)
  }

  return (
    <Box className={`flex flex-col flex-1 md:min-h-[400px]`}>

      <Box className="hidden sm:flex items-center ml-auto pr-6 pt-6 mb-6">
        <Box className="w-10 h-5 rounded-full bg-yellow-500 relative cursor-pointer">
          <Box className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 transition-all duration-200" />
        </Box>
        <Typography className="text-white text-xs font-normal pl-2">Email Notifications</Typography>
      </Box>
      <Divider />

      <Box className="p-2 sm:p-3 pb-2 border-b border-gray-700">
        <Box className="flex items-center justify-between">
          <Box className="flex items-center gap-1.5 pt-4">
            <Avatar src={selectedConversation.avatar || "/placeholder.svg"} className="w-8 h-8 sm:w-10 sm:h-10">
              {selectedConversation.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </Avatar>
            <Typography variant="body1" className="font-medium text-white text-sm sm:text-base">
              {selectedConversation.name}
            </Typography>
          </Box>
          <Box className="flex items-center gap-1">
            <IconButton size="small" className="text-white hover:text-yellow-500">
              <Star />
            </IconButton>
            <IconButton size="small" className="text-white hover:text-yellow-500">
              <Search />
            </IconButton>
            <IconButton size="small" className="text-white hover:text-yellow-500">
              <MoreVert />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box className="flex-1 overflow-y-auto p-2 sm:p-3">
        <Box className="flex flex-col gap-2">
          {selectedConversation.messages.map((msg) => (
            <Box
              key={msg.id}
              className={`max-w-[320px] p-4 sm:p-5 rounded-2xl mb-2 ${msg.isOwn ? "bg-gray-700 text-white self-end" : "bg-white text-black self-start"
                } sm:max-w-[280px] sm:p-[10px_14px]`}
            >
              {msg.text && (
                <Typography variant="body2" className="text-sm sm:text-base">
                  {msg.text}
                </Typography>
              )}
              {msg.images && msg.images.length > 0 && (
                <Box className={`flex flex-wrap gap-1 ${msg.text ? "mt-1" : "mt-0"}`}>
                  {msg.images.map((image) => (
                    <img
                      key={image.id}
                      src={image.preview || "/placeholder.svg"}
                      alt="Message attachment"
                      style={{
                        maxWidth: "200px",
                        maxHeight: "200px",
                        borderRadius: "8px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </Box>
              )}
              <Typography
                variant="caption"
                className={`block mt-0.5 text-xs sm:text-sm ${msg.isOwn ? "text-gray-400" : "text-gray-500"}`}
              >
                {msg.time}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className="p-2 sm:p-3 pt-2">
        {/* Image Previews */}
        {uploadedImages.length > 0 && (
          <Box className="mb-2 flex flex-wrap gap-1">
            {uploadedImages.map((image) => (
              <Box key={image.id} className="relative">
                <img
                  src={image.preview || "/placeholder.svg"}
                  alt="Upload preview"
                  className="w-20 h-20 object-cover rounded-lg border border-gray-500"
                />
                <IconButton
                  onClick={() => removeImage(image.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white hover:bg-red-600"
                  size="small"
                >
                  <Close fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Box>
        )}

        <Box className="relative w-full">
          {showEmojiPicker && (
            <Box
              className="
            absolute bottom-full mb-2 p-4 z-10 
            w-full h-64 overflow-y-auto bg-gray-800 border border-gray-500 rounded-xl
            sm:w-[280px] sm:h-[200px]
            sm:left-1/2 sm:-translate-x-1/2

            md:left-0 md:translate-x-0 md:w-[420px]"
            >
              <Grid container spacing={2}>
                {emojis.map((emoji, index) => (
                  <Grid item xs={2} key={index}>
                    <IconButton
                      onClick={() => handleEmojiSelect(emoji)}
                      className="text-xl hover:bg-gray-700 p-0.5"
                    >
                      {emoji}
                    </IconButton>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {showMentions && (
            <Box
              className="ml-36 mb-2 w-72 max-h-56 overflow-y-auto z-10 bg-gray-800 border border-gray-500 rounded-xl
            sm:w-[220px] sm:left-1/2 sm:-translate-x-1/2"
            >
              {filteredMentionUsers.map((user) => (
                <Box
                  key={user.id}
                  onClick={() => handleMentionSelect(user)}
                  className="flex items-center gap-1.5 p-1.5 cursor-pointer hover:bg-gray-700"
                >
                  <Avatar src={user.avatar || "/placeholder.svg"} className="w-4 h-4">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>
                  <Typography variant="body2" className="text-white">
                    {user.name}
                  </Typography>
                </Box>
              ))}
              {filteredMentionUsers.length === 0 && (
                <Box className="p-1.5">
                  <Typography variant="body2" className="text-gray-400">
                    No users found
                  </Typography>
                </Box>
              )}
            </Box>
          )}

          <Box className="bg-black rounded-2xl p-1.5 sm:p-2 w-full max-w-auto mx-auto">
            <Box className="rounded-xl px-1.5 sm:px-2 pt-1.5 pb-1">
              <TextField
                inputRef={messageInputRef}
                value={message}
                onChange={handleMessageChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
                multiline
                fullWidth
                placeholder="Write anything..."
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  className: "text-white text-sm sm:text-base min-h-5 p-0",
                }}
                className="bg-transparent shadow-none [&_textarea]:p-0"
              />

              <Box className="flex items-center gap-1 sm:gap-2 mt-1">
                <IconButton
                  onClick={handleMentionButtonClick}
                  className="text-white hover:text-yellow-500"
                >
                  @
                </IconButton>
                <IconButton
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="text-white hover:text-yellow-500"
                >
                  <EmojiEmotions />

                </IconButton>

                <IconButton onClick={() => fileInputRef.current?.click()} className="text-white hover:text-yellow-500">
                  <AttachFile />
                </IconButton>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Box className="flex ml-auto sm:ml-[240px] flex-1 justify-end">
                  <IconButton
                    onClick={handleSendMessage}
                    disabled={!message.trim() && uploadedImages.length === 0}
                    className={`w-10 h-10 rounded-xl border border-gray-700 ${message.trim() || uploadedImages.length > 0
                      ? "bg-yellow-500 text-black hover:bg-yellow-600"
                      : "bg-gray-800 text-white"
                      } disabled:bg-gray-800 disabled:text-gray-600`}
                  >
                    <Send fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
