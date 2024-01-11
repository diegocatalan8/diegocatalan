import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoMdClose } from "react-icons/io";


 const Modal =({closeModal, isModalOpen = false})=> {
  

  

  

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10"  onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
            as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    
                    <div className="relative px-6 py-8 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <button onClick={closeModal} className='absolute top-0 right-0'> <IoMdClose className=' text-[30px]  cursor-pointer'/> </button>
                      <Dialog.Title as="h3" className="my-8 text-xl text-center font-semibold leading-6 text-[#26577C]">
                      Frontend Developer <span className='text-[#E55604]'>At Chilltepe S.A.</span>
                      </Dialog.Title>
                      <div className="mt-2">
                        <ol className='w-full list-disc  text-left'>
                            <li className='mb-2'>
                             Creating robust, scalable, and maintainable components in React.js.
                            </li>
                            <li className='mb-2'>
                            Working closely with the development team to translate UI prototypes into functional software.
                            </li>
                            <li className='mb-2'>
                             Reviewing code and providing constructive feedback to enhance the quality of the code.
                            </li>
                            <li className='mb-2'>
                             Identifying and resolving issues in the software.
                            </li>
                            <li className='mb-2'>
                             Coordinating efficient Git management by implementing branching and merging strategies that enhanced team collaboration.
                            </li>
                            <li >
                             Actively collaborating in a Scrum environment, ensuring a seamless transition between sprints and effective implementation of product features.
                            </li>
                            
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
               
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal;