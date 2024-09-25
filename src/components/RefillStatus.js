import React from 'react'

export default function RefillStatus() {

  return (
    <>
      {/* <!-- component --> */}
      <div className="md:pt-40 pt-28 pb-20 md:pb-36 p-4">
        <div className="container mx-auto flex justify-center items-center p-18 md:p-0">
          <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6  shadow-lg rounded-lg">
            <div className=''>
              <h1 className='text-4xl font-bold py-2'>Refill Status</h1>
              <p className='py-2 w-98 '>Please provide the required details below to inquire about the status of your phone refill. This will help determine the current progress of your refill order.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-cols-1 gap-2 border border-gray-200 p-2 rounded">
                <div className="flex border rounded items-center p-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>

                  <input type="number" accept='*/number' placeholder="Phone Number"
                    className="w-full focus:outline-none text-gray-700" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 border border-gray-200 p-2 rounded">
                <div className="flex border rounded items-center p-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                  </svg>

                  <input type="text" placeholder=" Transction ID"
                    className="w-full focus:outline-none text-gray-700" />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="block w-full  mx-auto bg-indigo-500  hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold text-md">Check Your Status</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
