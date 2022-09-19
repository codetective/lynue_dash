import { MdHome, MdCreate } from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";

import { TiMessages } from "react-icons/ti";
import { BsGearFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { HiCode, HiCollection, HiOutlineTicket } from "react-icons/hi";
import {
  FaClipboardCheck,
  FaRss,
  FaUserCircle,
  FaUserTie,
} from "react-icons/fa";

const super_admin_nav_links = [
  {
    path: "/superadmin",
    name: "Home",
    icon: MdHome,
  },
  {
    path: "/superadmin/admins",
    name: "Admins",
    icon: FaUserTie,
  },
  {
    path: "/superadmin/users",
    name: "Users",
    icon: HiCollection,
  },
  {
    path: "/superadmin/listings",
    name: "Listings",
    icon: FaClipboardCheck,
  },
  {
    path: "/superadmin/tickets",
    name: "Tickets",
    icon: HiCode,
  },
  {
    path: "/superadmin/messages",
    name: "Messages",
    icon: TiMessages,
  },
  {
    path: "/superadmin/settings",
    name: "Settings",
    icon: BsGearFill,
  },
  {
    path: "/superadmin/profile",
    name: "Profile",
    icon: FaUserCircle,
  },
];
const blog_admin_nav_links = [
  {
    path: "/blog",
    name: "Home",
    icon: MdHome,
  },
  {
    path: "/blog/create",
    name: "Create Post",
    icon: MdCreate,
  },
  {
    path: "/blog/posts",
    name: "Posts",
    icon: FaRss,
  },
  {
    path: "/blog/categories",
    name: "Categories",
    icon: BiCategoryAlt,
  },
  {
    path: "/blog/settings",
    name: "Settings",
    icon: BsGearFill,
  },
  {
    path: "/superadmin/profile",
    name: "Profile",
    icon: FaUserCircle,
  },
];

const analyst_nav_links = [
  {
    path: "/analyst",
    name: "Home",
    icon: MdHome,
  },
  {
    path: "/analyst/articles",
    name: "Articles",
    icon: FaRss,
  },
  {
    path: "/analyst/collection",
    name: "Collection",
    icon: HiCollection,
  },
  {
    path: "/analyst/settings",
    name: "Settings",
    icon: BsGearFill,
  },
  {
    path: "/superadmin/profile",
    name: "Profile",
    icon: FaUserCircle,
  },
];

const support_nav_links = [
  {
    path: "/support",
    name: "Home",
    icon: MdHome,
  },
  {
    path: "/support/tickets",
    name: "Tickets",
    icon: HiOutlineTicket,
  },
  {
    path: "/support/open",
    name: "Open Tickets",
    icon: RiQuestionnaireLine,
  },
  {
    path: "/support/messages",
    name: "Messages",
    icon: TiMessages,
  },
  {
    path: "/superadmin/profile",
    name: "Profile",
    icon: FaUserCircle,
  },
];

const admin_nav_links = [
  {
    path: "/admin",
    name: "Home",
    icon: MdHome,
  },
  {
    path: "/admin/articles",
    name: "Articles",
    icon: FaRss,
  },
  {
    path: "/admin/collection",
    name: "Collection",
    icon: HiCollection,
  },
  {
    path: "/admin/settings",
    name: "Settings",
    icon: BsGearFill,
  },
  {
    path: "/superadmin/profile",
    name: "Profile",
    icon: FaUserCircle,
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
