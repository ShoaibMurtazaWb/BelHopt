import { useNavigate } from "react-router-dom"
export default function SupportHeader() {
  const navigate = useNavigate()
  return (
    <header className="w-full">

      <div className="flex bg-white justify-between items-center px-4 py-3 mx-auto sm:px-10 md:px-10 lg:px-20 max-w-700 shadow shadow-darkgray  ">
        <div><img
          className="w-20 sm:w-24 lg:w-30 hover:cursor-pointer"
          src="../../public/Logo.png"
          alt="Bellhpot"
          onClick={() => navigate("/")}
        /></div>
      <div className='flex gap-1.5 sm:gap-2'>
        <img className='w-4 sm:w-5 lg:w-6' src="/Support.svg" alt="Support" />
        <p className='text-sm! sm:text-lg! lg:text-xl!'>Support</p>
      </div>
    </div>
    </header>
  )
}
