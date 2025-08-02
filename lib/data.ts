export interface Message {
  id: number;
  text: string;
  time: string;
  isOwn: boolean;
  images?: Array<{ id: string; file: File; preview: string }>;
}

export interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  isStarred: boolean;
  messages: Message[];
}

export const conversations: Conversation[] = [
  {
    id: 1,
    name: "Jennifer Markus",
    avatar: "/images/avatars/alice.jpg",
    lastMessage:
      "Hey! Did you finish the Hi-Fi wireframes for flora app design?",
    time: "Today | 05:30 PM",
    isStarred: true,
    messages: [
      {
        id: 1,
        text: "Oh, hello! All perfectly. I will check it and get back to you soon",
        time: "04:45 PM",
        isOwn: false,
      },
      {
        id: 2,
        text: "Oh, hello! All perfectly. I will check it and get back to you soon",
        time: "04:45 PM",
        isOwn: true,
      },
      {
        id: 3,
        text: "Oh, hello! All perfectly. I will check it and get back to you soon",
        time: "04:45 PM",
        isOwn: false,
      },
      {
        id: 4,
        text: "Oh, hello! All perfectly. I will check it and get back to you soon",
        time: "04:45 PM",
        isOwn: true,
      },
    ],
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    avatar: "/images/avatars/andrew.jpg",
    lastMessage:
      "Hey! Did you finish the Hi-Fi wireframes for flora app design?",
    time: "Today | 05:30 PM",
    isStarred: true,
    messages: [
      {
        id: 1,
        text: "Great work on the wireframes! The client loved them.",
        time: "03:20 PM",
        isOwn: false,
      },
      {
        id: 2,
        text: "Thank you! I'm glad they approved the design direction.",
        time: "03:25 PM",
        isOwn: true,
      },
      {
        id: 3,
        text: "When can we expect the final mockups?",
        time: "03:30 PM",
        isOwn: false,
      },
    ],
  },
  {
    id: 3,
    name: "Bessie Cooper",
    avatar: "/images/avatars/Blair.jpg",
    lastMessage:
      "Hey! Did you finish the Hi-Fi wireframes for flora app design?",
    time: "Today | 05:30 PM",
    isStarred: true,
    messages: [
      {
        id: 1,
        text: "The project timeline looks good. Let's schedule a review meeting.",
        time: "02:15 PM",
        isOwn: false,
      },
      {
        id: 2,
        text: "Perfect! How about tomorrow at 2 PM?",
        time: "02:18 PM",
        isOwn: true,
      },
      {
        id: 3,
        text: "That works for me. I'll send the calendar invite.",
        time: "02:20 PM",
        isOwn: false,
      },
    ],
  },
  {
    id: 4,
    name: "Cameron Williamson",
    avatar: "/images/avatars/carl.jpg",
    lastMessage:
      "Hey! Did you finish the Hi-Fi wireframes for flora app design?",
    time: "Today | 05:30 PM",
    isStarred: true,
    messages: [
      {
        id: 1,
        text: "I've reviewed the user flow diagrams. They look comprehensive.",
        time: "01:45 PM",
        isOwn: false,
      },
      {
        id: 2,
        text: "Thanks for the feedback! Any suggestions for improvements?",
        time: "01:50 PM",
        isOwn: true,
      },
      {
        id: 3,
        text: "Maybe we could simplify the onboarding process a bit more.",
        time: "01:55 PM",
        isOwn: false,
      },
    ],
  },
  {
    id: 5,
    name: "Esther Howard",
    avatar: "/images/avatars/Katina.jpg",
    lastMessage:
      "Hey! Did you finish the Hi-Fi wireframes for flora app design?",
    time: "Today | 05:30 PM",
    isStarred: true,
    messages: [
      {
        id: 1,
        text: "The color palette you chose is perfect for the brand identity.",
        time: "12:30 PM",
        isOwn: false,
      },
      {
        id: 2,
        text: "I'm so glad you like it! It took some time to get it right.",
        time: "12:35 PM",
        isOwn: true,
      },
      {
        id: 3,
        text: "Your attention to detail really shows. Great job!",
        time: "12:40 PM",
        isOwn: false,
      },
    ],
  },
  {
    id: 6,
    name: "Savannah Nguyen",
    avatar: "/images/avatars/Tyson.jpg",
    lastMessage:
      "Hey! Did you finish the Hi-Fi wireframes for flora app design?",
    time: "Today | 05:30 PM",
    isStarred: true,
    messages: [
      {
        id: 1,
        text: "Can we discuss the mobile responsiveness of the design?",
        time: "11:15 AM",
        isOwn: false,
      },
      {
        id: 2,
        text: "I've prepared some responsive mockups to show you.",
        time: "11:20 AM",
        isOwn: true,
      },
      {
        id: 3,
        text: "Excellent! When would be a good time to review them?",
        time: "11:25 AM",
        isOwn: false,
      },
    ],
  },
  {
    id: 7,
    name: "Darlene Robertson",
    avatar: "/images/avatars/Nora.jpg",
    lastMessage:
      "Hey! Did you finish the Hi-Fi wireframes for flora app design?",
    time: "Today | 05:30 PM",
    isStarred: true,
    messages: [
      {
        id: 1,
        text: "The user testing results are in. Overall very positive!",
        time: "10:30 AM",
        isOwn: false,
      },
      {
        id: 2,
        text: "That's fantastic news! What were the main takeaways?",
        time: "10:35 PM",
        isOwn: true,
      },
      {
        id: 3,
        text: "Users loved the intuitive navigation and clean interface.",
        time: "10:40 AM",
        isOwn: false,
      },
    ],
  },
  {
    id: 8,
    name: "Brooklyn Simmons",
    avatar: "/images/avatars/Helen.jpg",
    lastMessage:
      "Hey! Did you finish the Hi-Fi wireframes for flora app design?",
    time: "Today | 05:30 PM",
    isStarred: true,
    messages: [
      {
        id: 1,
        text: "I've finished the prototype. Ready for your review!",
        time: "09:45 AM",
        isOwn: true,
      },
      {
        id: 2,
        text: "Amazing! I'll take a look and get back to you with feedback.",
        time: "09:50 AM",
        isOwn: false,
      },
      {
        id: 3,
        text: "Take your time. I'm excited to hear your thoughts!",
        time: "09:55 AM",
        isOwn: true,
      },
    ],
  },
];

export const emojis = [
  "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
  "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
  "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩",
  "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣",
  "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬",
  "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗",
  "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯",
  "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐",
  "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈",
  "👍", "👎", "👌", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉",
  "👆", "🖕", "👇", "☝️", "👋", "🤚", "🖐️", "✋", "🖖", "👏",
  "🙌", "🤲", "🤝", "🙏", "✍️", "💪", "🦾", "🦿", "🦵", "🦶",
  "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍",
];

export const mentionUsers = [
  { id: 1, name: "Jennifer Markus", avatar: "/images/jennifer-avatar.png" },
  { id: 2, name: "Kathryn Murphy", avatar: "/images/kathryn-avatar.png" },
  { id: 3, name: "Bessie Cooper", avatar: "/images/bessie-avatar.png" },
  { id: 4, name: "Cameron Williamson", avatar: "/images/cameron-avatar.png" },
  { id: 5, name: "Esther Howard", avatar: "/images/esther-avatar.png" },
  { id: 6, name: "Savannah Nguyen", avatar: "/images/savannah-avatar.png" },
  { id: 7, name: "Darlene Robertson", avatar: "/images/darlene-avatar.png" },
  { id: 8, name: "Brooklyn Simmons", avatar: "/images/brooklyn-avatar.png" },
]; 