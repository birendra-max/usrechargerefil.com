import React from 'react'

export default function InternetError() {
    return (
        <>
            <div classNameName="bg-gray-100 px-2 text-center">
                <div className="h-screen flex flex-col justify-center items-center">
                    <h1 className="text-8xl font-extrabold text-red-500">500</h1>
                    <p className="text-4xl font-medium ">Internal Server Error</p>
                    <p className="text-xl  mt-4">We apologize for the inconvenience. Please try again later.</p>
                </div>
            </div>
        </>
    )
}
