import { SidebarLink } from "@/types";

export const themesBrowser = [
    { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
    { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  ];

export const sidebarLinks: SidebarLink[] = [
{
    icon: "fi fi-ss-home",
    route: "/dashboard",
    label: "Dashboard",
    color: "#00A8E1",
    hoverColor: "hover:bg-[#00A8E1] hover:bg-opacity-30",
},
{
    icon: "fi fi-sr-users",
    route: "/community",
    label: "Community",
    color: "#1EBC9C",
    hoverColor: "hover:bg-[#1EBC9C] hover:bg-opacity-30",
},
{
    icon: "fi fi-ss-bookmark",
    route: "/collection",
    label: "Collections",
    color: "#3DFF6F",
    hoverColor: "hover:bg-[#3DFF6F] hover:bg-opacity-30",
},
{
    icon: "fi fi-sr-briefcase",
    route: "/jobs",
    label: "Find Jobs",
    color: "#6C5B7B",
    hoverColor: "hover:bg-[#6C5B7B] hover:bg-opacity-30",
},
{
    icon: "fi fi-sr-tags",
    route: "/tags",
    label: "Tags",
    color: "#F76C6C",
    hoverColor: "hover:bg-[#F76C6C] hover:bg-opacity-30",
},
{
    icon: "fi fi-ss-user",
    route: "/profile",
    label: "Profile",
    color: "#E84A5F",
    hoverColor: "hover:bg-[#E84A5F] hover:bg-opacity-30",
},
{
    icon: "fi fi-sr-info",
    route: "/ask-question",
    label: "Ask a question",
    color: "#4CAF50",
    hoverColor: "hover:bg-[#4CAF50] hover:bg-opacity-30",
},
{
    icon: "fi fi-sr-briefcase",
    route: "/projects",
    label: "Projects",
    color: "#FFB300",
    hoverColor: "hover:bg-[#FFB300] hover:bg-opacity-30",
},
{
    icon: "fi fi-ss-users-alt",
    route: "/teams",
    label: "Teams",
    color: "#7C4DFF",
    hoverColor: "hover:bg-[#7C4DFF] hover:bg-opacity-30",
},
{
    icon: "fi fi-ss-heart",
    route: "/favorites",
    label: "Favorites",
    color: "#FF4081",
    hoverColor: "hover:bg-[#FF4081] hover:bg-opacity-30",
},
{
    icon: "fi fi-sr-paper-plane",
    route: "/messages",
    label: "Messages",
    color: "#00B0FF",
    hoverColor: "hover:bg-[#00B0FF] hover:bg-opacity-30",
},
{
    icon: "fi fi-sr-bell-notification-social-media",
    route: "/notifications",
    label: "Notifications",
    color: "#FF5722",
    hoverColor: "hover:bg-[#FF5722] hover:bg-opacity-30",
},
{
    icon: "fi fi-ss-comment-alt-check",
    route: "/todo",
    label: "Todo",
    color: "#9E9E9E",
    hoverColor: "hover:bg-[#9E9E9E] hover:bg-opacity-30",
},
];
