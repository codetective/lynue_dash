import { MdHome } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { HiCode, HiCollection } from "react-icons/hi";
import { FaClipboardCheck, FaRss } from "react-icons/fa";

const admin_nav_links = [
  {
    path: "/",
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
    path: "/checklist",
    name: "Checklists",
    icon: FaClipboardCheck,
  },
  {
    path: "/checklist",
    name: "Integrations",
    icon: HiCode,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: BsGearFill,
  },
];
const blog_nav_links = [
  {
    path: "/",
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

const navLinks = { admin_nav_links, blog_nav_links };

export default navLinks;
