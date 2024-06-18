import React from 'react';
import ContactUs from './ContactUs';
import SignUp from './SignUp';

export default function OurIdentity() {

  function showsignUpForm() {
    document.getElementById('signup').style.display = "block";
  }
  const handelSignUpForm = (formdata) => {
    switch (formdata) {
      case 0:
        // for sign up form close 
        document.getElementById('signup').style.display = 'none';
        break;
      case 1:
        // for when sign up for is success 
        document.getElementById('signup').style.display = 'none';
        break;
      default:
        document.getElementById('signup').style.display = 'none';
    }
  }

  return (
    <>
      <section className="pt-8 lg:pt-16 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover overflow-hidden">
        {/* signup form  */}
        <div id='signup' style={{ display: "none" }}>
          <SignUp checkData={handelSignUpForm} />
        </div>
        {/* signup form  */}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="relative z-10">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-600 dark:to-violet-400">
                  Preline: A vision for 2024
                </p>

                <div className="mt-5 max-w-4xl">
                  <h1 className="block font-semibold text-4xl md:text-5xl lg:text-4xl">
                    Top-Up Your Mobile Instantly with US Recharge Refill
                  </h1>
                </div>


                <div className="mt-5 max-w-2xl">
                  <p className="text-sm">Welcome to US-RECHARGE-REFILL.COM, the top choice for instant mobile recharges in the US. Benefit from fast, simple, and dependable service to keep your phone connected effortlessly. Enjoy the ease of topping up your mobile anytime and anywhere with just a few clicks.</p>
                </div>


                <div className="mt-8 gap-3 flex justify-center">
                  <a className="py-3 px-4 inline-flex items-center gap-x-2 md:text-sm text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#outidentity">
                    Our Identity
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </a>
                  <button onClick={showsignUpForm} className="py-3 px-4 inline-flex items-center gap-x-2 md:text-sm text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" classNameName="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                    Create Account
                  </button>
                </div>

              </div>
            </div>
          </div>
          <div id='outidentity' className="flex justify-center">
            <div className="container relative flex flex-col justify-between h-full max-w-12xl mx-auto xl:px-0 mt-10">
              <div className="w-full">
                <div className="flex flex-col w-full mb-10 sm:flex-row">
                  <div className="w-full mb-10 sm:mb-0 md:w-1/2">
                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                      <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Why US Recharge Refill?</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Choosing US Recharge Refill means opting for fast, reliable mobile recharges available 24/7. Our platform supports all major prepaid carriers, ensuring seamless connectivity. With an easy-to-use interface, you can top up your mobile anytime, anywhere. Enjoy dependable service and dedicated customer support with US Recharge Refill.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <div className="relative h-full ml-0 md:mr-10">
                      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                      <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">24/7/365 support</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Understanding that individuals may not find time to visit a phone store for payments, we offer 24/7/365 processing of phone bill payments. The majority of refills are promptly completed for your convenience. Rest assured, our support team is available whenever you require assistance—we're here to help you stay connected hassle-free!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full mb-5 sm:flex-row">
                  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                      <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Variety of Carriers</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">We cater to a diverse range of carriers to meet your specific needs. Choose from a variety of major prepaid carriers for seamless mobile recharges. Enjoy flexibility and convenience with our wide selection of supported networks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                      <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Convenience</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Experience unparalleled convenience with our user-friendly platform for mobile recharges. Our streamlined process allows you to refill your phone effortlessly anytime, anywhere. Enjoy hassle-free connectivity with just a few clicks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <div className="relative h-full ml-0 md:mr-10">
                      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                      <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">User-Friendly Platform</h3>
                        </div>
                        <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p className="mb-2 text-gray-600">Our platform offers an intuitive interface designed for effortless navigation. Easily refill your mobile with just a few simple steps. Enjoy a seamless experience tailored to your convenience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactUs />
      </section>
    </>
  )
}
