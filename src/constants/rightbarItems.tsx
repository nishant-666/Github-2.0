import {
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineCodeSandbox,
  AiOutlineStar,
  AiOutlineCode,
} from "react-icons/ai";
import { BsBuildingAdd } from "react-icons/bs";
import { GoRepo } from "react-icons/go";

export const rightbarOptions = [
  {
    option: "Your Profile",
    icon: <AiOutlineUser size={20} />,
  },
  {
    option: "Your Repositories",
    icon: <GoRepo size={20} />,
  },
  {
    option: "Your Projects",
    icon: <AiOutlineProject size={20} />,
  },
  {
    option: "Your Codespaces",
    icon: <AiOutlineCodeSandbox size={20} />,
  },
  {
    option: "Your Organizations",
    icon: <BsBuildingAdd size={20} />,
  },
  {
    option: "Your Stars",
    icon: <AiOutlineStar size={20} />,
  },
  {
    option: "Your Gists",
    icon: <AiOutlineCode size={20} />,
  },
];
