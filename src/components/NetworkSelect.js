import React from 'react';

export default function NetworkSelect({setData}) {
    let currentStep1 = 0;
    function changestep(NetworkName) {
        currentStep1 = 1;
        setData(currentStep1);
        localStorage.setItem('currentStep1', currentStep1);
        localStorage.setItem('NetworkName', NetworkName);
    }
    return (
        <div>
            {/* Network select section  */}
            <div className="mt-8 flex items-center justify-center min-h-screen relative z-10">
                <div
                    className="w-full max-w-[1190px] px-6 sm:px-8 md:px-16 py-10 md:py-20 rounded-xl bg-[#2563eb]/30 min-h-[300px] m-2 shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.21)]">
                    <h1 className="font-semibold md:text-4xl text-2xl mb-2 tracking-wider drop-shadow-[3px_3px_5px_rgba(91,91,91,0.58)]">Choose a Carrier</h1>
                    <small className="font-[500]">In the event that we do not have a full 30-days, we extrapolate based on data we have.</small>
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <div className='h-44 md:h-58 group relative inline-block overflow-hidden rounded font-medium text-slate-800 hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 hover:p-1'>
                            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <img
                                onClick={() => changestep('AT & T MOBILE')} alt="AT & T PREPAID"
                                className="cursor-pointer block h-full w-full rounded-lg object-cover object-center"
                                src="https://i0.wp.com/tmo.report/wp-content/uploads/2024/01/ATT.png?fit=2100%2C1182&ssl=1" />
                        </div>
                        <div className='h-44 md:h-58 group relative inline-block overflow-hidden rounded font-medium text-slate-800 hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 hover:p-1'>
                            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <img onClick={() => changestep('BOOST MOBILE')}
                                alt="BOOST MOBILE"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src="https://www.freeiconspng.com/uploads/boost-mobile-png-18.png" />
                        </div>
                        <div className='h-44 md:h-58 group relative inline-block overflow-hidden rounded font-medium text-slate-800 hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 hover:p-1'>
                            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <img onClick={() => changestep('CRECKET WIRELESS')}
                                alt="CRECKET WIRELESS"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src="https://i.redd.it/34syoxsx5zk51.png" />
                        </div>
                        <div className='h-44 md:h-58 group relative inline-block overflow-hidden rounded font-medium text-slate-800 hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 hover:p-1'>
                            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <img onClick={() => changestep("T MOBILE")}
                                alt="T MOBILE"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src="https://mobilityarena.com/wp-content/uploads/2022/03/Tmobile-phone-service-review.jpg" />
                        </div>
                        <div className='h-44 md:h-58 group relative inline-block overflow-hidden rounded font-medium text-slate-800 hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 hover:p-1'>
                            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <img onClick={() => changestep("SAMPLE MOBILE")}
                                alt="SAMPLE MOBILE"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcIt2r7bFIqyBwPJdnHL0XzXtJCD3K2b5wCXTQsCD5i38n_gOkZIvP0Pp5a1WBABE2gE&usqp=CAU" />
                        </div>
                        <div className='h-44 md:h-58 group relative inline-block overflow-hidden rounded font-medium text-slate-800 hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 hover:p-1'>
                            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <img onClick={() => changestep("METRO BY T MOBILE")}
                                alt="METRO BY T MOBILE"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src="https://www.t-mobile.com/news/_admin/uploads/2020/04/Metro-by-T-Mobile_New_Logo_Secondary_RGB_W-on-DP.jpg" />
                        </div>
                        <div className='h-44 md:h-58 group relative inline-block overflow-hidden rounded font-medium text-slate-800 hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 hover:p-1'>
                            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <img onClick={() => changestep("ULTRA MOBILE")}
                                alt="ULTRA MOBILE"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src="https://cdn.mos.cms.futurecdn.net/JnP4nhY9wDroQ6GSFzkL55-1200-80.jpg" />
                        </div>
                        <div className='h-44 md:h-58 group relative inline-block overflow-hidden rounded font-medium text-slate-800 hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 hover:p-1'>
                            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <img onClick={() => changestep("NET10 WIRELESS")}
                                alt="NET10 WIRELESS"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src="https://recommerce-static.recharge.com/media/cache/product_card/9f/07/6be4b0477e40a6230c0c71632e00.png" />
                        </div>
                        <div className='h-44 md:h-58 group relative inline-block overflow-hidden rounded font-medium text-slate-800 hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 hover:p-1'>
                            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <img onClick={() => changestep("H20 WIRELESS")}
                                alt="H20 WIRELESS"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src="https://www.bitrefill.com/content/cn/b_rgb%3Affe700%2Cc_pad%2Ch_720%2Cw_1280/v1559632057/h2o.webp" />
                        </div>

                        <div className='h-44 md:h-58 group relative inline-block overflow-hidden rounded font-medium text-slate-800 hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-600 hover:p-1'>
                            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
                            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
                            <img onClick={() => changestep("VERIZON")}
                                alt="VERIZON"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src="https://i.ytimg.com/vi/0nU7VvDd4OI/hqdefault.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Network select section  */}
        </div>
    )
}
