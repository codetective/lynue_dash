import { MdHome, MdCreate } from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";

import { TiMessages } from "react-icons/ti";
import { BsGearFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { HiCode, HiCollection, HiOutlineTicket } from "react-icons/hi";
import { FaClipboardCheck, FaRss } from "react-icons/fa";

const super_admin_nav_links = [
  {
    path: "/superadmin",
    name: "Home",
    icon: MdHome,
  },
  {
    path: "/posts",
    name: "Posts",
    icon: FaRss,
  },
  {
    path: "/users",
    name: "Users",
    icon: HiCollection,
  },
  {
    path: "/listings",
    name: "Listings",
    icon: FaClipboardCheck,
  },
  {
    path: "/tickets",
    name: "Tickets",
    icon: HiCode,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: TiMessages,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: BsGearFill,
  },
];
const blog_admin_nav_links = [
  {
    path: "/blog",
    name: "Home",
    icon: MdHome,
  },
  {
    path: "/create",
    name: "Create Post",
    icon: MdCreate,
  },
  {
    path: "/posts",
    name: "Posts",
    icon: FaRss,
  },
  {
    path: "/categories",
    name: "Categories",
    icon: BiCategoryAlt,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: BsGearFill,
  },
];

const analyst_nav_links = [
  {
    path: "/blog",
    name: "Home",
    icon: MdHome,
  },
  {
    path: "/articles",
    name: "Articles",
    icon: FaRss,
  },
  {
    path: "/collection",
    name: "Collection",
    icon: HiCollection,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: BsGearFill,
  },
];

const support_nav_links = [
  {
    path: "/support",
    name: "Home",
    icon: MdHome,
  },
  {
    path: "/tickets",
    name: "Tickets",
    icon: HiOutlineTicket,
  },
  {
    path: "/open",
    name: "Open Tickets",
    icon: RiQuestionnaireLine,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: TiMessages,
  },
];

const admin_nav_links = [
  {
    path: "/admin",
    name: "Home",
    icon: MdHome,
  },
  {
    path: "/articles",
    name: "Articles",
    icon: FaRss,
  },
  {
    path: "/collection",
    name: "Collection",
    icon: HiCollection,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: BsGearFill,
  },
];

const navLinks = {
  super_admin_nav_links,
  blog_admin_nav_links,
  admin_nav_links,
  analyst_nav_links,
  support_nav_links,
};

export default navLinks;
