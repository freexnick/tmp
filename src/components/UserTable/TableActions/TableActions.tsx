import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Link from "next/link";

import SubmitionModal from "@/components/SubmitionModal/SubmitionModal";
import { deleteUser } from "@/app/api/v1/apiClient";

interface ActionProps {
  userId: number;
}

const TableActions: React.FC<ActionProps> = ({ userId }) => {
  const [openModal, setOpenModal] = useState(false);
  const [responsType, setResponsType] = useState<"success" | "error" | null>(
    null
  );

  return (
    <>
      {responsType === "success" ? (
        <div
          className="fixed p-4 mb-10 right-4 top-8 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">იუზერი წარმატებით წაიშალა</span>
        </div>
      ) : responsType === "error" ? (
        <div
          className="fixed p-4 mb-4 right-4 top-10 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">დაფიქსირდა შეცდომა</span>
        </div>
      ) : (
        <></>
      )}
      <div className="h-4 w-4 " data-tooltip-id="my-tooltip-1">
        <HiOutlineDotsVertical className="cursor-pointer" />
      </div>

      <ReactTooltip
        variant="light"
        className="bg-[none] opacity-1"
        noArrow
        id="my-tooltip-1"
        place="bottom"
        positionStrategy="fixed"
        opacity={1}
        openOnClick={true}
        offset={-5}
        clickable={true}
      >
        <div className="w-62  h-22 rounded-lg p-1 absolute bg-white left-[-200px] shadow-lg">
          <Link href={`users/profile?id=${userId}`}>
            <div className="w-60 h-[39px] text-[#474747] cursor-pointer hover:bg-blue-100 text-sm px-4 py-2.5 rounded-lg flex items-center">
              <FaRegUser className="mr-2" /> პროფილის ნახვა
            </div>
          </Link>
          <div
            onClick={() => setOpenModal(true)}
            className="w-60 cursor-pointer h-[39px] text-[#7A0000] hover:bg-red-100 text-sm px-4 py-2.5 rounded-lg flex items-center"
          >
            <RiDeleteBin7Line color="#7A0000" className="mr-2" /> მომხმარებლის
            გაუქმება
          </div>
        </div>
      </ReactTooltip>
      <SubmitionModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={() => deleteUser(userId, setOpenModal, setResponsType)}
      />
    </>
  );
};

export default TableActions;
