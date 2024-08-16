import { HiArrowRightOnRectangle } from "react-icons/hi2";

const Logout = () => {
  return (
    <div className=" flex items-center gap-2 cursor-pointer  hover:text-stone-600">
      <span className="!transition !duration-75">Logout</span>
      <HiArrowRightOnRectangle className="text-4xl !transition !duration-75" />
    </div>
  );
};

export default Logout;
