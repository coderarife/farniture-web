import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import TestimonialItem from './TestimonialItem';

const Testimonial = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <section className='bg-[#F6F6F6] py-28'>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto my-3">
          <dir className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
            <h2 className='text-5xl font-bold leading-tight'> Words from our customers</h2>

          </dir>
          <div className='my-8'>
            <div className='w-full'>

              <Carousel infinite={true} autoPlay={true} autoPlaySpeed={3000} responsive={responsive}>
                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>
                  <dir className="text-4xl">❤</dir>
                  <dir className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </dir>
                  <dir className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>

                      <img className='bg-slate-200 p-2 rounded-full' src="https://st2.depositphotos.com/1009217/8814/v/600/depositphotos_88149872-stock-illustration-geeky-girl-avatar.jpg
" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>John D.</h3>
                      <p>California</p>
                    </div>
                  </dir>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>
                <dir className="text-4xl">❤</dir>

                  <dir className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </dir>
                  <dir className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src=" 
                   https://st2.depositphotos.com/1009217/8814/v/600/depositphotos_88149872-stock-illustration-geeky-girl-avatar.jpg
                      " alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>John D.</h3>
                      <p>California</p>
                    </div>
                  </dir>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>
                <dir className="text-4xl">❤</dir>

                  <dir className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </dir>
                  <dir className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://st2.depositphotos.com/1009217/8814/v/600/depositphotos_88149872-stock-illustration-geeky-girl-avatar.jpg
" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>John D.</h3>
                      <p>California</p>
                    </div>
                  </dir>
                </div>

                <div className='shadow-md bg-white shadow-slat  ce-200 p-12  m-2'>
                <dir className="text-4xl">❤</dir>
                
                  <dir className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </dir>
                  <dir className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://st2.depositphotos.com/1009217/8814/v/600/depositphotos_88149872-stock-illustration-geeky-girl-avatar.jpg
" alt="profileLogo1" />
                    </div>
                    <div>
                    <h3 className='text-2xl font-extrabold'>John D.</h3>
                     <p>California</p>
                    </div>
                  </dir>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>
                <dir className="text-4xl">❤</dir>

                  <dir className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </dir>
                  <dir className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://st2.depositphotos.com/1009217/8814/v/600/depositphotos_88149872-stock-illustration-geeky-girl-avatar.jpg
" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>John D.</h3>
                      <p>California</p>
                    </div>
                  </dir>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>
                <dir className="text-4xl">❤</dir>

                  <dir className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </dir>
                  <dir className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="
                   https://st2.depositphotos.com/1009217/8814/v/600/depositphotos_88149872-stock-illustration-geeky-girl-avatar.jpg
                      " alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>John D.</h3>
                      <p>California</p>
                    </div>
                  </dir>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>
                <dir className="text-4xl">❤</dir>

                  <dir className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </dir>
                  <dir className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://st2.depositphotos.com/1009217/8814/v/600/depositphotos_88149872-stock-illustration-geeky-girl-avatar.jpg
" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>John D.</h3>
                      <p>California</p>
                    </div>
                  </dir>
                </div>
              </Carousel>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Testimonial