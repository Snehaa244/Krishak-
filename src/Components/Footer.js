import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#08320b] px-4 py-10 md:py-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10">
                
                {/* Footer Section 1 */}
                <div className="footer-section md:w-1/4 space-y-7">
                    <h4 className="text-white font-semibold">
                        <img src="logo2.png" className="h-36 w-auto" alt="Logo" />
                        <br />
                        Happen active county. Winding morning<br />ambition shyness evident to poor.<br />Because elderly new to the point<br />to main success.
                    </h4>
                    <form className="newsletter-form flex">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="form-control px-3 py-2 rounded-l-md w-full"
                            name="email"
                        />
                        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-r-md">Go</button>
                    </form>
                </div>

                {/* Divider for medium screens and above */}
                <div className="hidden md:block md:border-l md:border-gray-300"></div>

                {/* Footer Section 2 */}
                <div className="footer-section md:w-1/4 space-y-7">
                    <h3 className="text-white font-bold">Explore</h3>
                    <ul className="text-white space-y-2">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Legal Notices</a></li>
                        <li><a href="#">Privacy Notices</a></li>
                        <li><a href="#">Security Information</a></li>
                        <li><a href="#">Trust Center</a></li>
                    </ul>
                </div>

                {/* Footer Section 3 */}
                <div className="footer-section md:w-1/4 space-y-7">
                    <h4 className="text-white font-bold">Recent Posts</h4>
                    <ul className="text-white space-y-4">
                        <li className="flex items-center space-x-3">
                            <img src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2023/04/blog-2-150x150.jpg" className="h-16 w-16 rounded-lg" alt="Post Image" />
                            <p className="text-yellow-500 text-sm">April 14, 2023<br />Announcing if the resolution sentiments</p>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img src="https://validthemes.net/themeforest/wp/agrul/wp-content/uploads/2023/04/blog-1-150x150.jpg" className="h-16 w-16 rounded-lg" alt="Post Image" />
                            <p className="text-yellow-500 text-sm">April 14, 2023<br />The Super Soil Organic Farming</p>
                        </li>
                    </ul>
                </div>

                {/* Footer Section 4 */}
                <div className="footer-section md:w-1/4 space-y-7">
                    <h4 className="text-white font-bold">Contact Info</h4>
                    <ul className="text-white space-y-4">
                        <li className="flex items-center space-x-3">
                            <img src="https://img.icons8.com/?size=48&id=2yfgHA8XGxvd&format=gif" className="h-6 w-6" alt="Location Icon" />
                            <strong>Address: AITR Mangliya, Indore</strong>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img src="https://img.icons8.com/?size=48&id=tnnUFgHrPmR0&format=gif" className="h-6 w-6" alt="Email Icon" />
                            <strong>Email: abc@gmail.com</strong>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img src="https://img.icons8.com/?size=40&id=lCYOZaaeqtKc&format=gif" className="h-6 w-6" alt="Phone Icon" />
                            <strong>Phone: +123 34598768</strong>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}
