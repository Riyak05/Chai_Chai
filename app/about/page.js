// import React from 'react'

// const About = () => {
//   return (
//     // first div px8 md:px4
//     <div>
//         About Page on Get me a chai using Tailwind CSS and Next.js
//       <h1 className='text-xl'>About</h1>
//     </div>
//   )
// }

// export default About

// export const metadata = {
//     title: 'About - Get Me A Chai!',
//   }

import React from "react";

const About = () => {
  return (
    <>
      <div className="  min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-whitemin-h-screen  p-6">
        <header className=" text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">About Get Me A Chai</h1>
            <p className="text-lg mt-2">
              Bringing people together, one cup at a time.
            </p>
          </div>
        </header>

        <main className="container mx-auto mt-8 text-white">
          <section className="text-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-400 text-2xl ">
              At Get Me A Chai, our mission is to connect people through the joy
              of sharing a cup of chai. We believe that a simple gesture, like
              buying a chai for someone, can make a significant difference in
              their day and strengthen our community bonds.
            </p>
          </section>

          <section className=" shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
            <div className="flex flex-wrap -mx-4 justify-evenly">
              

              <div className="p-6 rounded-xl text-center">
                <img
                  src="https://media.licdn.com/dms/image/C5103AQGC5znKFkPvUw/profile-displayphoto-shrink_200_200/0/1566371496366?e=2147483647&v=beta&t=up1abNl2kzDds78HCROceieR7wPteFT4Kv-2MJeJFJE"
                  alt="Team Member 3"
                  className="w-42 h-42 mx-auto rounded-full object-cover mb-4"
                />
                <p className="text-3xl text-gray-400">John Deo
                </p>
              </div>
              <div className="p-6 rounded-lg text-center">
                <img
                  src="https://media.licdn.com/dms/image/C5103AQGC5znKFkPvUw/profile-displayphoto-shrink_200_200/0/1566371496366?e=2147483647&v=beta&t=up1abNl2kzDds78HCROceieR7wPteFT4Kv-2MJeJFJE"
                  alt="Team Member 3"
                  className="w-42 h-42 mx-auto rounded-full object-cover mb-4"
                />
                <p className="text-3xl text-gray-400">John Deo
                </p>
              </div>
              <div className="p-6 rounded-lg text-center">
                <img
                 src="https://media.licdn.com/dms/image/C5103AQGC5znKFkPvUw/profile-displayphoto-shrink_200_200/0/1566371496366?e=2147483647&v=beta&t=up1abNl2kzDds78HCROceieR7wPteFT4Kv-2MJeJFJE"
                  alt="Team Member 3"
                  className="w-42 h-42 mx-auto rounded-full object-cover mb-4"
                />
                <p className="text-3xl text-gray-400">John Deo
                </p>
              </div>
            </div>
          </section>

          <section className="shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400 text-2xl mb-4">
              Have questions or want to get in touch? We'd love to hear from
              you. You can reach us via email at{" "}
              <a
                href="mailto:contact@getmeachai.com"
                className="text-blue-600 hover:underline"
              >
                contact@getmeachai.com
              </a>{" "}
              or follow us on social media.
            </p>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://twitter.com/getmeachai"
                className="text-blue-500 hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com/getmeachai"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/getmeachai"
                className="text-pink-600 hover:underline"
              >
                Instagram
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
