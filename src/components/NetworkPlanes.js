import React, { useState } from 'react'

export default function NetworkPlanes({ setData }) {
    const [inputValue, setInputValue] = useState('');
    // const [plans, setPlans] = useState(5);
    function hide() {
        setInputValue("");
        document.getElementById('mypopupform').style.display = 'none';
        document.getElementById('number1').style.color = "black";
        document.getElementById('number1').style.border = "2px solid black";
        document.getElementById('number2').style.color = "black";
        document.getElementById('number2').style.border = "2px solid black";
    }
    function resetform() {
        setInputValue("");
        document.getElementById('number1').style.color = "black";
        document.getElementById('number1').style.border = "2px solid black";
        document.getElementById('number2').style.color = "black";
        document.getElementById('number2').style.border = "2px solid black";
    }
    function show() {
        document.getElementById('mypopupform').style.display = 'block';
        document.getElementById('mypopupform').style.transition = "all 2s";
    }

    function addParan(event) {
        setInputValue(event.target.value);
        if (event.target.value.length === 3) {
            let value1 = event.target.value;
            value1 = "(" + value1 + ")-";
            setInputValue(value1);
            document.getElementById('number1').style.color = "red";
            document.getElementById('number1').style.border = "2px solid red";
            document.getElementById('number2').style.color = "red";
            document.getElementById('number2').style.border = "2px solid red";
        }
        else if (event.target.value.length === 9) {
            let value2 = event.target.value;
            value2 = value2 + "-";
            setInputValue(value2);
        }
        else if (event.target.value.length === 14) {
            document.getElementById('number1').style.color = "green";
            document.getElementById('number1').style.border = "2px solid green";
            document.getElementById('number2').style.color = "green";
            document.getElementById('number2').style.border = "2px solid green";
        }
    }


    function NumberValidateion(event) {
        let num1 = document.getElementById('number1').value;
        let num2 = document.getElementById('number2').value;
        if (num1.length === 14 && num2.length === 14) {
            if (num1 === num2) {
                let UserNumber = {
                    'Num1': num1,
                    'Num2': num2,
                    'Carrier': localStorage.getItem('NetworkName')
                };
                const jsonUserdata = JSON.stringify(UserNumber);
                sessionStorage.setItem("jsonUserdata", jsonUserdata);
                sessionStorage.setItem("Num1", num1);
                localStorage.setItem('currentStep2', 2);
                setData(2)
                document.getElementById('mypopupform').style.display = 'none';
            }
            else {
                alert("Number is incorrect !")
            }
        }
        else {
            alert("Number Should be 10 digite !")
        }
    }

    function prev() {
        localStorage.clear();
        setData(0);
    }

    return (
        <div>
            {/* pop up form start  */}

            <div id='mypopupform' className="bg-gray-400 ">
                <div
                    className="fixed grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-2 h-modal h-full justify-center items-center ">
                    <div className="relative container m-auto px-6">
                        <div className="m-auto md:w-7/12 transition-transform duration-75 ease-in-out">
                            <svg onClick={hide} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 md:ml-52 ml-72 -mb-6 md:-mb-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            <div className="mt-10 grid space-y-4 flex justify-center item-center text-black">
                                <div className="login-container">
                                    <div className="login-header">
                                        <div>Enter Phone Number</div>
                                    </div>
                                    <div className="relative mt-2 max-w-xs text-gray-500">
                                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                            US
                                        </div>
                                        <input type="text" value={inputValue} onChange={addParan} disabled={inputValue.length >= 14} id='number1' placeholder="(555)-000-0000" className="w-full pl-[3rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg" required />
                                    </div>
                                    <div className="relative mt-2 max-w-xs text-gray-500">
                                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                            US
                                        </div>
                                        <input type="text" value={inputValue} onChange={addParan} disabled={inputValue.length >= 14} id='number2' placeholder="(555)-000-0000" className="w-full pl-[3rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg" required />
                                    </div>
                                    <div className='flex justify-space items-center mt-8'>
                                        <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-1xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" id="login-button1" onClick={NumberValidateion}>Continue</button>
                                        <button onClick={resetform} className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-1xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reset</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* card planes start  */}


            <div className="mt-8 flex items-center justify-center min-h-screen relative z-10">
                <div
                    className="w-full max-w-[1190px] px-6 sm:px-8 md:px-16 py-10 md:py-20 rounded-xl bg-[blue]/30 min-h-[300px] m-2 shadow-[0px_14px_28px_-5px_rgba(100,0,0,0.21)]">
                    <h1 className="font-semibold text-2xl mb-2 tracking-wider drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">Choose a Plane
                        <button
                            className=" float-right cursor-pointer inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md hover:bg-indigo-900 hover:text-white" onClick={prev}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round 2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                                </path>
                            </svg>
                            <span className="ml-1 font-bold text-lg">Back</span>
                        </button>
                    </h1>
                    <small className="font-[500]">You chose the network {localStorage.getItem('NetworkName')} and now choose the plan. </small>


                    <ul className="flex items-center justify-between gap-8 mt-10 md:flex-row flex-col">
                        <li>
                            <div id='plane' className="p-6 rounded-lg shadow-lg bg-yellow-500 text-black">
                                <h2 className="text-2xl font-semibold ">Basic Plan</h2>
                                <div className="mt-4">
                                    <span className="text-5xl font-bold ">$19</span>
                                    <span>/month</span>
                                </div>
                                <ul id='plane' className="mt-6 space-y-2">
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        Unlimited Access
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        24/7 Customer Support
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        Premium Features
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <button onClick={show} className="w-full flex justify-center item-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-1xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='plane1' className="p-6 rounded-lg shadow-lg  bg-yellow-500 text-black">
                                <h2 className="text-2xl font-semibold ">Basic Plan</h2>
                                <div className="mt-4">
                                    <span className="text-5xl font-bold ">$19</span>
                                    <span>/month</span>
                                </div>
                                <ul id='plane' className="mt-6 space-y-2">
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        Unlimited Access
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        24/7 Customer Support
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        Premium Features
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <button onClick={show} className="w-full flex justify-center item-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-1xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='plane2' className="p-6 rounded-lg shadow-lg bg-yellow-500 text-black">
                                <h2 className="text-2xl font-semibold ">Basic Plan</h2>
                                <div className="mt-4">
                                    <span className="text-5xl font-bold ">$19</span>
                                    <span>/month</span>
                                </div>
                                <ul id='plane' className="mt-6 space-y-2">
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        Unlimited Access
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        24/7 Customer Support
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        Premium Features
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <button onClick={show} className="w-full flex justify-center item-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-1xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div id='plane3' className="p-6 rounded-lg shadow-lg  bg-yellow-500 text-black">
                                <h2 className="text-2xl font-semibold ">Basic Plan</h2>
                                <div className="mt-4">
                                    <span className="text-5xl font-bold ">$19</span>
                                    <span>/month</span>
                                </div>
                                <ul id='plane' className="mt-6 space-y-2">
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        Unlimited Access
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        24/7 Customer Support
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round 2" d="M5 13l4 4L19 7"></path></svg>
                                        Premium Features
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <button onClick={show} className="w-full flex justify-center item-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-1xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>


            {/* pop up form end  */}

        </div>
    )
}
