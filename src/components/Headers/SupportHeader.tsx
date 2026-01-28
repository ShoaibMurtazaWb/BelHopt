
export default function SupportHeader() {
  return (
    <div className='flex justify-between items-center px-4 sm:px-15 lg:px-25 py-3 shadow shadow-darkgray  '>
      <div><img className='w-20 sm:w-24 lg:w-28' src="../../public/Logo.png" alt="Bellhpot" /></div>
      <div className='flex gap-1.5 sm:gap-2'>
        <img className='w-4 sm:w-5 lg:w-6' src="/Support.svg" alt="Support" />
        <p className='text-sm! sm:text-lg! lg:text-xl!'>Support</p>
      </div>
    </div>
  )
}
