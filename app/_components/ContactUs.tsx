import Button from '@/components/ui/Button';
import React from 'react';

function ContactUs() {
  return (
    <div className=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-[#3C3967] p-8 rounded-lg">
          <h1 className="text-2xl font-bold text-white mb-4 text-center">OUR ALUMNI</h1>
          {/* Content  */}
        </div>

        {/* Right Section  */}
        <div className="bg-[#3C3967] p-8 rounded-lg">
          <h1 className="text-2xl font-bold text-white mb-4">CONTACT US</h1>
          <p className="text-sm text-gray-300">
            Subheading for description or instructions
          </p>
          
          {/* Form */}
          <form className="space-y-4 mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-white mb-2">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Jane"
                  className="appearance-none rounded-md w-full px-3 py-2 bg-[#272448] text-white border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-white mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Doe"
                  className="appearance-none rounded-md w-full px-3 py-2 bg-[#272448] text-white border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                placeholder="email@example.com"
                className="appearance-none rounded-md w-full px-3 py-2 bg-[#272448] text-white border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Enter your question or message"
                className="appearance-none rounded-md w-full px-3 py-2 bg-[#272448] text-white border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>

            <div className=' flex bg-white justify-center text-center rounded-md'>
             <Button className='text-black'>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
