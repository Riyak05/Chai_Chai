import React from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDb from "@/db/connectDb";
import User from "@/models/User"

const Username = async ({ params }) => {
  const checkUser = async () => {
    await connectDb();

    let u = await User.findOne({ username: params.username });

    if (!u) {
      return notFound();
    }
  };
  checkUser();
  return (
    <>
      <PaymentPage userName={params.username} />
    </>
  );
};

export default Username;
export async function generateMetadata({ params }) {
  return {
    title: 'Payment Page - Get Me A Chai',
  }
}