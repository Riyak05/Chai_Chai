"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession;
  const [showdropdown, setShowdropdown] = useState(false);
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-4 md:h-16 flex-col md:flex-row">
      <Link
        className="logo font-bold text-lg flex justify-center items-center"
        href={"/"}
      >
        <img src="tea.gif" width={44} alt="" />
        <span className="text-xl md:text-base my-3 md:my-0">GetMeaChai!</span>
      </Link>

      {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}

      <div className="relative flex flex-col md:block gap-4
      ">
        {!session && (
          <>
            <button
              onClick={() => setShowdropdown(!showdropdown)}
              onBlur={() => {
                setTimeout(() => {
                  setShowdropdown(false);
                }, 100);
              }}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Welcome
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${
                showdropdown ? "" : "hidden"
              } absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm bg-gray-800 hover:bg-gray-700  rounded-xl text-white dark:text-gray-600"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  {/* <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-800 hover:rounded-xl dark:hover:bg-gray-900 dark:hover:text-white"
                  >
                    Dashboard
                  </Link> */}

                  <Link href="/dashboard">
                    <button className="block px-4 py-2 hover:bg-gray-800 hover:rounded-xl dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </button>
                  </Link>
                </li>
                <li>
                  {/* <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-800 hover:rounded-xl dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Page
                  </Link> */}

                  {/* <Link href={`User/${session}`}>
                    <button className="block px-4 py-2 hover:bg-gray-800 hover:rounded-xl dark:hover:bg-gray-600 dark:hover:text-white">
                    Your Page
                    </button>
                  </Link> */}
                </li>
                <li>
                  {/* <Link
                    href={`User/${session}`}
                    className="block px-4 py-2 hover:bg-gray-800 hover:rounded-xl dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Page
                </li> */}
                {/* <li> */}
                  {/* <Link
                    onClick={() => signOut()}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-800 hover:rounded-xl dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link> */}

                  <Link href="/Sign out">
                    <button className="block px-4 py-2 hover:bg-gray-800 hover:rounded-xl dark:hover:bg-gray-600 dark:hover:text-white">
                    Payment
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {/* {!session && (
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        )} */}

        {!session && (
          <Link href={"/logout"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Logout
            </button>
          </Link>
        )}

        {!session && (
          <Link href={"/login"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
