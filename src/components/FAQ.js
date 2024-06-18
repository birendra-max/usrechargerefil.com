// src/App.js

const FAQ = () => {

    return (
        <>
            <section className="bg-[#1D1D1D] text-gray-100 py-32 min-h-screen">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-10 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How long will it take for my refill to be ready?</summary>
                            <div className="px-4 pb-4">
                                <p>The time it takes to complete a refill can vary based on the specific medication and the pharmacy's current workload. Generally, it takes between 1 to 3 business days for a refill to be processed and available for pickup or delivery. Please contact your pharmacy for precise timing.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What should I do if I haven't received my refill yet?</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    If you haven't received your refill within the expected period, please take the following steps:
                                    <li>Check the refill status via the pharmacy’s website or mobile app, if available.
                                    </li>
                                    <li>Reach out to the pharmacy directly to inquire about any delays.
                                    </li>
                                    <li>Make sure your contact information is current, so the pharmacy can reach you if necessary.
                                    </li>
                                    <li>Confirm that your prescription is still valid and that no additional information or authorization is needed from your healthcare provider.</li>
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Why did you cancel my refill and still charge me ?</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    There are several potential reasons for a refill being canceled, including:
                                    <li>The prescription has expired.</li>
                                    <li>Issues with insurance coverage.</li>
                                    <li>The medication is out of stock.</li>
                                    <li>Problems with the prescription details (e.g., incorrect dosage).</li>

                                    If you have been charged but your refill was canceled, please contact our customer service team to investigate. We will look into the issue and provide a resolution, which may include a refund if warranted.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Why is there a charge from you on my account?</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    Charges from our pharmacy on your account may include:
                                    <li>Costs for medication refills.</li>
                                    <li>Service fees for processing and handling.</li>
                                    <li>Delivery charges, if applicable.</li>
                                    If you do not recognize a charge, please review your recent orders. For more details, contact our billing department for an explanation of the charges.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How can I get a refund for my refill?</summary>
                            <div className="px-4 pb-4">
                                <p>
                                    To request a refund for your refill, please
                                </p>
                            </div>
                        </details>
                        {/* <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What is your customer support contact?</summary>
                            <div className="px-4 pb-4">
                                <p>If you have any questions, concerns, or need assistance, you can reach our customer support team at 9911083755 during our business hours, Monday to Saturday from 10 am to 6 pm. You can also contact us via email at <a href="" className="underline">example@gmail.com</a>.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What are your terms and conditions?</summary>
                            <div className="px-4 pb-4">
                                <p>You can find our detailed terms and conditions by visiting our
                                    <a href="" className="underline">Terms of Service</a>
                                    page on our website. It includes information about our policies, user guidelines, and more.</p>
                            </div>
                        </details> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
