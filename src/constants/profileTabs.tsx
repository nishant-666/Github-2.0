import { BsBook } from "react-icons/bs";
import { GoRepo } from "react-icons/go";
import {
  AiOutlineProject,
  AiOutlineCodeSandbox,
  AiOutlineStar,
} from "react-icons/ai";

export const tabList = [
  {
    key: "overview",
    option: "Overview",
    icon: <BsBook size={20} />,
  },
  {
    key: "repositories",
    option: "Repositories",
    icon: <GoRepo size={20} />,
  },
  {
    key: "projects",
    option: "Projects",
    icon: <AiOutlineProject size={20} />,
  },
  {
    key: "packages",
    option: "Packages",
    icon: <AiOutlineCodeSandbox size={20} />,
  },
  {
    key: "stars",
    option: "Stars",
    icon: <AiOutlineStar size={20} />,
  },
];
