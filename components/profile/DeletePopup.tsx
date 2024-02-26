"use client";

import { FormEvent, Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { deleteProject } from '@/lib/actions/ProjectManagement';
import { useDeleteButtonContext } from '@/context/DeleteButtonContext';

interface Props {
  productId: string;
}

const Modal = ({ productId }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleDelete = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await deleteProject(productId);
    setIsSubmitting(false);
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-red-400 text-gray-800 shadow-sm hover:bg-gray-50 rounded-br-xl border border-red-600 mt-auto"
        onClick={openModal}
      >
        Delete
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="dialog-container">
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 " />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            />

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="dialog-content">
                <div className="flex flex-col">
                  <div className="flex justify-end">
                    <a className="p-3 border border-gray-200 rounded-10 " onClick={closeModal}>
                      <Image
                        src={"/assets/icons/x-close.svg"}
                        alt="close"
                        width={12}
                        height={12}
                        className="cursor-pointer"
                      />
                    </a>
                  </div>

                  <p className="pt-4 flex justify-center font-bold text-2xl">
                    Are you sure you want to delete?
                  </p>
                  <h3 className= "py-3 flex justify-center font-bold text-xl">
                    This action cannot be reversed
                    
                  </h3>

                  <form className="flex flex-col mt-5" onSubmit={handleDelete}>
                    <div className= "inline-flex">
                    <button
                      type="button"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-l-xl bg-gray-700 hover:bg-gray-400 text-white shadow-sm border border-black"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-red-500 shadow-sm hover:bg-red-600  text-white rounded-r-xl border border-red-600 mt-auto"
                    >
                      Delete
                    </button>
                    </div>  
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
