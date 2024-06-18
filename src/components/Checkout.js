import React from 'react';
import axios from 'axios';


export default function Checkout({ setData }) {

  const phone = (sessionStorage.getItem('Num1')) ? sessionStorage.getItem('Num1').replace(/\D/g, "") : "";
  const carrier = (localStorage.getItem('NetworkName')) ? localStorage.getItem('NetworkName') : " ";
  const states = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Wyoming', abbreviation: 'WY' }
  ];

  const cities = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA",
    "Austin, TX",
    "Jacksonville, FL",
    "Fort Worth, TX",
    "Columbus, OH",
    "Charlotte, NC",
    "San Francisco, CA",
    "Indianapolis, IN",
    "Seattle, WA",
    "Denver, CO",
    "Washington, DC",
    "Boston, MA",
    "El Paso, TX",
    "Nashville, TN",
    "Detroit, MI",
    "Oklahoma City, OK",
    "Portland, OR",
    "Las Vegas, NV",
    "Memphis, TN",
    "Louisville, KY",
    "Baltimore, MD",
    "Milwaukee, WI",
    "Albuquerque, NM",
    "Tucson, AZ",
    "Fresno, CA",
    "Sacramento, CA",
    "Kansas City, MO",
    "Long Beach, CA",
    "Mesa, AZ",
    "Atlanta, GA",
    "Colorado Springs, CO",
    "Virginia Beach, VA",
    "Raleigh, NC",
    "Omaha, NE",
    "Miami, FL",
    "Oakland, CA",
    "Minneapolis, MN",
    "Tulsa, OK",
    "Wichita, KS",
    "New Orleans, LA",
    "Arlington, TX",
    "Bakersfield, CA",
    "Tampa, FL",
    "Anaheim, CA",
    "Aurora, CO",
    "Santa Ana, CA",
    "St. Louis, MO",
    "Riverside, CA",
    "Corpus Christi, TX",
    "Lexington, KY",
    "Pittsburgh, PA",
    "Anchorage, AK",
    "Stockton, CA",
    "Cincinnati, OH",
    "St. Paul, MN",
    "Toledo, OH",
    "Greensboro, NC",
    "Newark, NJ",
    "Plano, TX",
    "Henderson, NV",
    "Lincoln, NE",
    "Buffalo, NY",
    "Jersey City, NJ",
    "Chula Vista, CA",
    "Fort Wayne, IN",
    "Orlando, FL",
    "St. Petersburg, FL",
    "Chandler, AZ",
    "Laredo, TX",
    "Norfolk, VA",
    "Durham, NC",
    "Madison, WI",
    "Lubbock, TX",
    "Irvine, CA",
    "Winston-Salem, NC",
    "Glendale, AZ",
    "Garland, TX",
    "Hialeah, FL",
    "Reno, NV",
    "Chesapeake, VA",
    "Gilbert, AZ",
    "Baton Rouge, LA",
    "Irving, TX",
    "Scottsdale, AZ",
    "North Las Vegas, NV",
    "Fremont, CA",
    "Boise, ID",
    "Richmond, VA",
    "San Bernardino, CA",
    "Spokane, WA",
    "Birmingham, AL",
    "Modesto, CA",
    "Des Moines, IA",
    "Rochester, NY",
    "Tacoma, WA",
    "Fontana, CA",
    "Oxnard, CA"
  ];


  // Inputs color change 

  function changeColorfname(event) {
    if (event.target.value.length === 0) {
      document.getElementById('fname').style.border = "2px solid red";
      document.getElementById('fname').style.color = "red";
    }
    else {
      document.getElementById('fname').style.border = "2px solid green";
      document.getElementById('fname').style.color = "green ";
    }
  }
  function changeColorlname(event) {
    if (event.target.value.length === 0) {
      document.getElementById('lname').style.border = "2px solid red";
      document.getElementById('lname').style.color = "red";
    }
    else {
      document.getElementById('lname').style.border = "2px solid green";
      document.getElementById('lname').style.color = "green ";
    }

  }

  function changeColoremail(event) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let res = pattern.test(event.target.value);
    if (!res) {
      document.getElementById('email').style.border = "2px solid red";
      document.getElementById('email').style.color = "red";
    }
    else {
      document.getElementById('email').style.border = "2px solid green";
      document.getElementById('email').style.color = "green ";
    }
  }

  function changeColoraddress(event) {
    if (event.target.value.length === 0) {
      document.getElementById('address').style.border = "2px solid red";
      document.getElementById('address').style.color = "red";
    }
    else {
      document.getElementById('address').style.border = "2px solid green";
      document.getElementById('address').style.color = "green ";
    }
  }

  function changeColorcity(event) {
    if (event.target.value.length === 0 || event.target.value === "City") {
      document.getElementById('city').style.border = "2px solid red";
      document.getElementById('city').style.color = "red";
    }
    else {
      document.getElementById('city').style.border = "2px solid green";
      document.getElementById('city').style.color = "green ";
    }
  }


  function changeColorstate(event) {
    if (event.target.value.length === 0 || event.target.value === "State") {
      document.getElementById('state').style.border = "2px solid red";
      document.getElementById('state').style.color = "red";
    }
    else {
      document.getElementById('state').style.border = "2px solid green";
      document.getElementById('state').style.color = "green ";
    }
  }


  function changeColorzip(event) {
    if (event.target.value.length === 0 || event.target.value === "State") {
      document.getElementById('zip').style.border = "2px solid red";
      document.getElementById('zip').style.color = "red";
    }
    else {
      document.getElementById('zip').style.border = "2px solid green";
      document.getElementById('zip').style.color = "green ";
    }
  }

  // Inputs color change 


  //Send data to backend

  function getbillingdetails() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zip = document.getElementById('zip').value;

    if (fname.length === 0) {
      // alert("Plz enter First Name")
      document.getElementById('fname').style.border = "2px solid red";
      document.getElementById('fname').style.color = "red";
    }
    else {
      if (lname.length === 0) {
        document.getElementById('lname').style.border = "2px solid red";
        document.getElementById('lname').style.color = "red";
      }
      else {
        if (email.length === 0) {
          document.getElementById('email').style.border = "2px solid red";
          document.getElementById('email').style.color = "red";
        } else {
          var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          let res = pattern.test(email);
          if (!res) {
            document.getElementById('email').style.border = "2px solid red";
            document.getElementById('email').style.color = "red";
          }
          else {
            if (address.length === 0) {
              document.getElementById('address').style.border = "2px solid red";
              document.getElementById('address').style.color = "red";
            }
            else {
              if (city === "City") {
                document.getElementById('city').style.border = "2px solid red";
                document.getElementById('city').style.color = "red";
              }
              else {
                if (state === "State") {
                  document.getElementById('state').style.border = "2px solid red";
                  document.getElementById('state').style.color = "red";
                }
                else {
                  if (zip.length === 0) {
                    document.getElementById('zip').style.border = "2px solid red";
                    document.getElementById('zip').style.color = "red";
                  }
                  else {
                    const UserBillingDetails = {
                      Fname: fname,
                      Lname: lname,
                      Email: email,
                      Phone: phone,
                      City: city,
                      State: state,
                      Zip: zip,
                      Carrier: carrier
                    }
                    axios.post('http://localhost/recharge/Recharge.html', JSON.stringify(UserBillingDetails))
                      .then(response => {
                        console.log(response.data)
                        if (response.data) {
                          alert("Form Submit Successfylly")
                        } else {
                          alert('Somthing is wrong ! Try again')
                        }
                      })
                      .catch(error => {
                        console.error('Error:', error);
                      });
                  }
                }
              }
            }
          }
        }
      }

    }
  }
  //Send data to backend


  function resetcheckout() {
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('address').value = "";
    document.getElementById('city').value = "";
    document.getElementById('state').value = "";
    document.getElementById('zip').value = "";

    document.getElementById('fname').placeholder = "Fitst Name";
    document.getElementById('lname').placeholder = "Last Name";
    document.getElementById('email').placeholder = "Email";
    document.getElementById('address').placeholder = "Address";
    document.getElementById('city').placeholder = "";
    document.getElementById('state').placeholder = "";
    document.getElementById('zip').placeholder = "Zip";
  }


  function prev() {
    sessionStorage.clear();
    localStorage.removeItem('currentStep2');
    setData(20);
  }
  return (
    <>
      {/* Network select section  */}
      <div className="mt-8 flex items-center justify-center min-h-screen relative z-10">
        <div
          className="w-full max-w-[1190px] px-6 sm:px-8 md:px-16 py-10 md:py-20 rounded-xl bg-[blue]/20 min-h-[300px] m-2 shadow-[0px_14px_28px_-5px_rgba(100,0,0,0.21)]">
          <h1 className="font-semibold md:text-2xl text-sx mb-2 tracking-wider drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">
            Billing address
          </h1>
          <div className="font-sans">
            <div className="flex max-sm:flex-col gap-4 h-full">
              <div className="max-w-4xl mx-auto w-full h-max rounded-md p-4 sticky top-0">
                <div>
                  <h3 className="text-base font-semibold mb-4 flex justify-around items-center">
                    Personal Details
                    <button
                      className=" float-right cursor-pointer inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md hover:bg-indigo-900 hover:text-white" onClick={prev}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round 2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                        </path>
                      </svg>
                      <span className="ml-1 font-bold text-lg">Back</span>
                    </button>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative flex items-center">
                      <input type="text" placeholder="First Name" id='fname' onKeyDown={changeColorfname}
                        className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" autoComplete='off' />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"></path>
                      </svg>
                    </div>

                    <div className="relative flex items-center">
                      <input type="text" placeholder="Last Name" id='lname' onKeyDown={changeColorlname}
                        className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" autoComplete='off' />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"></path>
                      </svg>
                    </div>

                    <div className="relative flex items-center">
                      <input type="email" accept='email/*' placeholder="Email" id='email' onKeyDown={changeColoremail}
                        className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" autoComplete='off' />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 682.667 682.667">
                        <defs>
                          <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                          </clipPath>
                        </defs>
                        <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                          <path fill="none" strokeMiterlimit="10" strokeWidth="40"
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                            data-original="#000000"></path>
                          <path
                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                            data-original="#000000"></path>
                        </g>
                      </svg>
                    </div>

                    <div className="relative flex items-center">
                      <input type="number" value={phone} placeholder="Phone No."
                        className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                      <svg fill="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 64 64">
                        <path
                          d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                          data-original="#000000"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-base font-semibold  mb-4">Shipping Address</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Address Line" id='address' onKeyDown={changeColoraddress}
                      className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" autoComplete='off' />

                    {/* citys for input  */}
                    <select id='city' onClick={changeColorcity} className='px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none'>
                      <option defaultChecked>City</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {/* citys for input  */}


                    {/* state for input  */}
                    <select id='state' onClick={changeColorstate} className='px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none'>
                      <option default>State</option>
                      {states.map((state) => (
                        <option key={state.abbreviation} value={state.abbreviation}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                    {/* state for input  */}


                    <input type="number" accept='number/*' id='zip' placeholder="Zip Code" onKeyDown={changeColorzip}
                      className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" autoComplete='off' />
                  </div>

                  <div className="flex gap-4 max-md:flex-col mt-8">
                    <button onClick={resetcheckout} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex justify-center align-center">Cancel</button>
                    <button onClick={getbillingdetails} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center align-center">Complete Purchase</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Network select section  */}
    </>
  )
}
