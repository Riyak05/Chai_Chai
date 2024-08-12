"use server";
import Razorpay from "razorpay";
// import Payment from "../models/payment.js"
import Payment from "@/models/payment.js";
import connectDb from "@/db/connectDb";
import User from "@/models/User";
import {notFound } from "next/navigation"


export const initiate = async (amount, to_username, paymentform) => {
  
  await connectDb();
  let user = await User.findOne({ username: p.to_user });
  const secret = user.razorpaysecret;
  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: secret,
  });

  // instance.orders.create({
  // amount: 50000,
  // currency: "INR",
  // receipt: "receipt#1",
  // notes: {
  //     key1: "value3",
  //     key2: "value2"
  // }
  // })

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };
  let x = await instance.orders.create(options);
  await Payment.create({
    oid: x.id,
    amount: amount/100,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });
  return x;
};

export const fetchuser = async (username) => {
  await connectDb();
  let u = await User.findOne({ username: username });
  if (!u) {
    return null;
  }
  let user = u.toObject((flattenObjectIds = true));

  return user;
};

export const fetchpayment = async (user) => {
  await connectDb();
  let p = await Payment.find({ to_user: username,done:true }).sort({ amount: -1 }).limit(10).lean();

  return p;
};

export const updateProfile = async (data, oldusername) => {
  await connectDb();
  let ndata = Object.fromEntries(data);
  if (oldusername != ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "Username already exists" };
    }
    await User.updateOne({ email: ndata.email }, ndata);
  
  await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username });
}
  else{

  await User.updateOne({ email: ndata.email }, ndata);
};
}