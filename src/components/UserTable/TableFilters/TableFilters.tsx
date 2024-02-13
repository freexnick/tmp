import { useState } from "react";

import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import UserRegistrationForm from "@/components/UserRegistrationForm/UserRegistrationForm";


function TableFilters() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="pt-2.5 px-5 flex items-center flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
          <Button onClick={() => setIsModalOpen(true)} type="light">
            დამატება
          </Button>
        </div>
        <label className="sr-only">Search</label>
        <div className="relative  ml-3">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                // stroke-linejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="შეიყვანეთ სახელი"
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        title={"მომხმარებლის დამატება"}
        onClose={() => setIsModalOpen(false)}
      >
        <UserRegistrationForm />
      </Modal>
    </>
  );
}

export default TableFilters;
