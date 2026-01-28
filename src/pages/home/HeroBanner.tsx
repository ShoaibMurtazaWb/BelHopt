
export default function HeroBanner() {
  return (
    <section className="bg-red-5 w-full">
      <div className='flex justify-between px-20 mx-auto max-w-[2800px] '>
        <div className='flex flex-col gap-6 justify-center'>
            <h1 className='text-white '>Be The Fastest In Delivering Your Foods</h1>
            <p className='text-white! font-crimson!'>We’re always available to serve you!</p>
        </div>
        <div>
            <img src="/HomeBannerImage.svg" alt="" />
        </div>
    </div>
    </section>
  )
}
