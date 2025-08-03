"use client";

import { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme, ThemeProvider, Typography } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ConversationList from "../components/ConversationList";
import ChatArea from "../components/ChatArea";
import MenuDrawer from "../components/MenuDrawer";
import SubscriptionModal from "../components/SubscriptionModal";
import {
  darkTheme,
  StyledContainer,
  StyledMainContent,
  StyledMessagesContainer,
} from "../lib/theme";
import { conversations, Conversation } from "../lib/data";
import ProfileHeader from "@/components/ProfileHeader";

export default function MessagingInterface() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubscription(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [selectedConversation]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && sidebarOpen) {
        const target = event.target as Element;
        if (
          !target.closest(".sidebar") &&
          !target.closest("[data-sidebar-toggle]")
        ) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, sidebarOpen]);

  const handleConversationSelect = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    if (isMobile) {
      setShowChat(true);
      setSidebarOpen(false);
    }
  };

  const handleBackToConversations = () => {
    setShowChat(false);
  };

  const handleSendMessage = (
    message: string,
    images: Array<{ id: string; file: File; preview: string }>
  ) => {
    if (message.trim() || images.length > 0) {
      const newMessage = {
        id: Date.now(),
        text: message.trim(),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isOwn: true,
        images: images.length > 0 ? [...images] : undefined,
      };

      setSelectedConversation((prev) => ({
        ...prev,
        messages: [...prev.messages, newMessage],
        lastMessage:
          message.trim() ||
          `Sent ${images.length} image${images.length !== 1 ? "s" : ""}`,
        time: "Just now",
      }));
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <StyledContainer >
        <Header
          isMobile={isMobile}
          showChat={showChat}
          onBackToConversations={handleBackToConversations}
          onMenuToggle={() => setIsMenuOpen(true)}
          onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        {isMobile && sidebarOpen && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 40,
            }}
            onClick={() => setSidebarOpen(false)}
          />
        )}


        <Sidebar sidebarOpen={sidebarOpen} />
        <ProfileHeader sidebarOpen={sidebarOpen} />

        <StyledMainContent>
          <StyledMessagesContainer>

            <ConversationList
              conversations={conversations}
              selectedConversation={selectedConversation}
              isMobile={isMobile}
              showChat={showChat}
              onConversationSelect={handleConversationSelect}
            />

            <ChatArea
              selectedConversation={selectedConversation}
              isMobile={isMobile}
              showChat={showChat}
              onSendMessage={handleSendMessage}
            />
          </StyledMessagesContainer>
        </StyledMainContent>
        <MenuDrawer
          isMenuOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />

        <SubscriptionModal
          open={showSubscription}
          onClose={() => setShowSubscription(false)}
        />
      </StyledContainer>
    </ThemeProvider>
  );
}
