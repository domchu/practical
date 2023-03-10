import { FaHome } from "react-icons/fa";
import { BsBlockquoteLeft } from "react-icons/bs";
import { FcBusinessContact } from "react-icons/fc";
import { FaBeer } from "react-icons/fa";
//adde all the json 
const Data = [
  {
    title: "Home",
    path: "/",
    icons: <FaHome />,
  },
  {
    title: "Contact",
    path: "/contact",
    icons: <FcBusinessContact />,
  },
  {
    title: "Blog",
    path: "/blog",
    icons: <BsBlockquoteLeft />,
  },
  {
    title: "Faq",
    path: "/faq",
    icons: <FaBeer />,
  },
  {
    title: "About",
    path: "/about/search",
    icons: <FaBeer />,
  },
];

export default Data;
