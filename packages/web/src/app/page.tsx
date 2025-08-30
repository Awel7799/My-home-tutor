import heroImg from '../../public/Depth60.png'


export default function Home() {
  return (
    <section className='h-500 border'>
      <div className='flex justify-center p-5 border'>
       <img src={heroImg.src} alt="" />
      </div>
      <h2 className='text-2xl font-bold ml-[10%] p-5'>How it work</h2>
      <h1 className='text-4xl font-bold ml-[9%] p-5'>simple steps to success </h1>
      <p className='ml-[10%]'>our platform makes it easy to find and connect with qualified tutors </p>
      <div>

      </div>
    </section>
  );
}
