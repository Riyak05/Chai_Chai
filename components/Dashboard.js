"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import { ToastContainer, toast } from 'react-toastify';


const Dashboard = () => {
  // const { data: session, update } = useSession;
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setform] = useState({});
  useEffect(() => {
    getData();
    if (!session) {
      // router.push("/dashboard")
      router.push("/dashboard");
    }
  }, [router, session]);

  const getData = async () => {
    let u = await fetchuser(session?.user.name);
    setform(u);
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name);
    toast("🦄 Profile Updated!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "black",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="black"
      />

      <ToastContainer />
      <div className="py-5 container mx-auto px-6">
        <h1 className=" text-center my-5 font-bold text-3xl">
          Welcome to your Dashboard
        </h1>
        <form className="max-w-2xl mx-auto py-5 " action={handleSubmit}>
          <div className="my-2">
            <label htmlFor="name" className="block mb-2 text-sm font-medium ">
              Name
            </label>
            <input
              value={form?.name ? form.name : ""}
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              className=" w-full p-3 rounded-lg bg-slate-800 "
            />
          </div>
          <div className="my-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              value={form?.email ? form.email : ""}
              onChange={handleChange}
              type="text"
              name="email"
              id="email"
              className=" w-full p-3 rounded-lg bg-slate-800 "
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium"
            >
              Username
            </label>
            <input
              value={form?.username ? form.username : ""}
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              className=" w-full p-3 rounded-lg bg-slate-800 "
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="profilepic"
              className="block mb-2 text-sm font-medium"
            >
              Profile Picture
            </label>
            <input
              value={form?.profilepic ? form.profilepic : ""}
              onChange={handleChange}
              type="text"
              name="profilepic"
              id="profilepic"
              className=" w-full p-3 rounded-lg bg-slate-800 "
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="coverpic"
              className="block mb-2 text-sm font-medium"
            >
              Cover Picture
            </label>
            <input
              value={form?.coverpic ? form.coverpic : ""}
              onChange={handleChange}
              type="text"
              name="coverpic"
              id="coverpic"
              className=" w-full p-3 rounded-lg bg-slate-800 "
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="razorpayid"
              className="block mb-2 text-sm font-medium"
            >
              Razorpay Id
            </label>
            <input
              value={form?.razorpayid ? form.razorpayid : ""}
              onChange={handleChange}
              type="text"
              name="razorpayid"
              id="razorpayid"
              className=" w-full p-3 rounded-lg bg-slate-800 "
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="razorpaysecret"
              className="block mb-2 text-sm font-medium"
            >
              Razorpay Secret
            </label>
            <input
              value={form?.razorpaysecret ? form.razorpaysecret : ""}
              onChange={handleChange}
              type="text"
              name="razorpaysecret"
              id="razorpaysecret"
              className=" w-full p-3 rounded-lg bg-slate-800 "
            />
          </div>

          <div className="my-6">
            <button className="text-white w-full bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;


