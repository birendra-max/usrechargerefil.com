import React, { useState } from 'react';
import NetworkSelect from './NetworkSelect';
import NetworkPlanes from './NetworkPlanes';
import Checkout from './Checkout';
import ContactUs from './ContactUs';
import SignUp from './SignUp';
// import one from './img/1.png';
// import two from './img/2.png';
// import three from './img/3.png';
// import four from './img/4.png';
// import five from './img/5.png';
// import r1 from './img/r1.png';

export default function Home() {

    let mystyleif = "transition-all duration-500 ease-in delay-75 w-6 h-6 bg-indigo-600 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-xl lg:w-10 text-black lg:h-10"
    let mystyleelse = 'transition-all duration-500 ease-in delay-75 w-6 h-6 bg-gray-50  border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-xl lg:w-10 text-black lg:h-10'
    const [currentStep1, setcurrentStep1] = useState();
    const [currentStep2, setcurrentStep2] = useState();
    const [currentStep3, setcurrentStep3] = useState();
    const [currentStep4, setcurrentStep4] = useState();

    window.onload = function () {
        setcurrentStep1(localStorage.getItem('currentStep1'));
        setcurrentStep2(localStorage.getItem('currentStep2'));
        setcurrentStep3(localStorage.getItem('currentStep3'));
        setcurrentStep4(localStorage.getItem('currentStep4'));
    };

    const handleDataFromchild = (data) => {
        switch (data) {
            case 1:
                setcurrentStep1(data);

                console.log(data)
                break;
            case 2:
                setcurrentStep2(data);

                console.log(data)
                break;
            case 3:
                setcurrentStep3(data);

                console.log(data)
                break;
            case 4:
                setcurrentStep4(data);

                console.log(data)
                break;
            case 0:
                setcurrentStep1(data)
                console.log(data)
                break;
            case 20:
                setcurrentStep2(0);
                console.log("00");
                break;
            default:

        }
    }
    function showform() {
        document.getElementById('quickrecharge').style.display = "block";
    }
    function hide() {
        document.getElementById('quickrecharge').style.display = "none";
    }

    function showsignUpForm() {
        document.getElementById('signup').style.display = "block";
    }

    const handelSignUpForm=(formdata)=>{
        switch(formdata){
            case 0:
                // for sign up form close 
                document.getElementById('signup').style.display='none';
                break;
            case 1:
                // for when sign up for is success 
                document.getElementById('signup').style.display='none';
                break;
            default:
                document.getElementById('signup').style.display='none';
        }
    }

    return (
        <>
            <main id="main">
                {/* Hero section in  */}
                <br />
                <section id='headersection' className="body-font border-2">
                    <div className="container mx-auto flex sm:px-10 py-10 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-5xl text-2xl mb-1 font-medium"><span className="text-violet-500 drop-shadow-2xl">Welcome</span> to <span className="text-yellow-400">!</span>
                                <br className="hidden lg:inline-block drop-shadow-lg" /> <span className="text-fuchsia-500">USRECHARGEREFILL.COM</span>.
                            </h1>
                            <p className="mb-8 leading-relaxed text-1xl p-4">Welcome to US-RECHARGE-REFILL.COM, your premier destination for instant mobile top-ups across the US. Enjoy quick, easy, and reliable service to keep your phone connected without any hassle. Experience the convenience of recharging your mobile anytime, anywhere with just a few clicks.</p>
                            <div id='headerbutton'>
                                <button onClick={showform} type="type" id="signupbtn1" className='cursor-pointer'>
                                    Quick Recharge
                                </button>
                                <button onClick={showsignUpForm} type="type" id="signupbtn1" className='ml-2'>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6 rounded-full flex justify-end">
                            <img id='rechargeimg' className="rounded-full w-96 h-92 drop-shadow-lg" src="https://yt3.googleusercontent.com/bvwGaVr04uiEmnSy3ag7m9LO25dNyEJbtGBBQ7_WFhceAE59ghwZNTMbL1tcbEV6rI63HOKp=s900-c-k-c0x00ffffff-no-rj" alt="recharge icon" />

                        </div>
                    </div>
                </section>
                {/* Hero section in  */}

                {/* search form  */}
                <div id='quickrecharge' style={{ display: "none" }} className="bg-gray-400 w-full">
                    <div
                        className="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-2 h-modal h-full justify-center items-center text-white bg-[black]/100 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-right bg-cover">

                        <div className="container m-auto p-8 ">
                            <div className="m-auto md:w-12/12">
                                <div className="text-xl md:text-4xl font-semibold max-w-xl text-center  -mt-28">
                                    <span>Your <span className="text-green-500">Premier Destination</span> for <span className="text-blue-500">Seamless </span> Mobile
                                        <span className="text-yellow-500">Top-Ups</span> for
                                        <span className="text-purple-500"> your Prepaid Servic </span>.</span>
                                </div>
                                <div style={{ position: "relative", button: "40px" }} className="flex flex-1 items-center justify-center -mt-18">
                                    <div className="w-full max-w-lg">
                                        <div className="mt-5 sm:flex sm:items-center">
                                            <input id="q" name="q" className="inline w-full rounded-md border border-gray-300 bg-white py-4 md:py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-2xl text-black" placeholder="(555)-000-0000" type="number" />
                                            <div className='mt-4 md:mt-1 md:ml-2 md:flex md:justify-center flex justify-center'>
                                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:text-xl text-xl px-5 py-3 md:py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center">Search</button>
                                                <button onClick={hide} className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  md:text-xl text-xl px-5 py-4 md:py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex justify-center">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* search form  */}

                {/* signup form  */}
                <div id='signup' style={{ display: "none" }}>
                   <SignUp checkData={handelSignUpForm} />
                </div>
                {/* signup form  */}

                {/* Recharge Serviceses Section  */}
                <section id='rechargeservices' >
                    <div id="Services">
                        <fieldset className="border-2 mb-4">
                            <legend className="ml-8 text-indigo-500 md:text-4xl text-2xl font-thin">Recharge Services</legend>
                            {/* steps section start  */}
                            <ol className="flex justify-center md:mt-18 mt-8 text-xs font-medium sm:text-base">
                                <li id='step1' className={(currentStep1) ? "md:ml-60 ml-10 transition-all duration-500 ease-in delay-75 flex w-full relative text-indigo-600  after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5  after:top-3 after:left-4" : "md:ml-60 ml-10 transition-all duration-500 ease-in delay-75 flex w-full relative after:content-['']  after:w-full after:h-0.5  after:bg-gray-600 after:inline-block after:absolute lg:after:top-5  after:top-3 after:left-4"}>
                                    <div className="block whitespace-nowrap z-10">
                                        <span id='step1round' className={(currentStep1) ? mystyleif : mystyleelse}>{(currentStep1) ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                            : 1}</span>
                                        Step 1

                                    </div>
                                </li>
                                <li id='step2' className={(currentStep2) ? "transition-all duration-500 ease-in delay-75 flex w-full relative text-indigo-600  after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5  after:top-3 after:left-4" : "transition-all duration-500 ease-in delay-75 flex w-full relative  after:content-['']  after:w-full after:h-0.5  after:bg-gray-600 after:inline-block after:absolute lg:after:top-5  after:top-3 after:left-4"}>
                                    <div className="block whitespace-nowrap z-10">
                                        <span id='step1round' className={(currentStep2) ? mystyleif : mystyleelse}>{(currentStep2) ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                            : 2}</span>
                                        Step 2

                                    </div>
                                </li>
                                <li id='step1' className={(currentStep3) ? "transition-all duration-500 ease-in delay-75 flex w-full relative text-indigo-600  after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5  after:top-3 after:left-4" : "transition-all duration-500 ease-in delay-75 flex w-full relative  after:content-['']  after:w-full after:h-0.5  after:bg-gray-600 after:inline-block after:absolute lg:after:top-5  after:top-3 after:left-4"}>
                                    <div className="block whitespace-nowrap z-10">
                                        <span id='step1round' className={(currentStep3) ? mystyleif : mystyleelse}>{(currentStep3) ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                            : 3}</span>
                                        Step 3

                                    </div>
                                </li>
                                <li id='step1' className={(currentStep4) ? "transition-all duration-500 ease-in delay-75 flex w-full relative text-indigo-600  after:content-[''] " : "transition-all duration-500 ease-in delay-75 flex w-full relative  after:content-['']"}>
                                    <div className="block whitespace-nowrap z-10">
                                        <span id='step1round' className={(currentStep4) ? mystyleif : mystyleelse}>{(currentStep4) ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                            : 4}</span>
                                        Step 4

                                    </div>
                                </li>
                            </ol>

                            {/* steps section start  */}

                            {(currentStep1) ? (currentStep2 ? (currentStep3) ? "hello" : <Checkout setData={handleDataFromchild} /> : <NetworkPlanes setData={handleDataFromchild} />) : <NetworkSelect setData={handleDataFromchild} />}

                        </fieldset>
                    </div>
                </section>
                {/* Recharge Serviceses Section  */}
            </main>
            <ContactUs />
        </>
    )
}
