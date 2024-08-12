import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "../models/Payment";
import Razorpay from "razorpay";
import connectDb from "../db/connectDB";
import User from "@/models/User";


export const POST = async (req) => {
  await connectDb();
  let body = await req.formData();
  body = object.fromEntries(body);

  let p = await Payment.findOne({ oid: body.razorpay_order_id });
  if (!p) {
    return NextResponse.jsonr({
      success: false,
      message: "Order Id not found",
    });
  }

  let user = await User.findOne({ username: p.to_user });
  const secret = user.razorpaysecret;

  let xx = validatePaymentVerification(
    {
      order_id: body.razorpay_order_id,
      razorpay_payment_id: body.razorpay_payment_id,
    },
    body.razorpay_signature,

    secret
  );

  if (xx) {
    const updatePayment = await Payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { done: "true" },
      { new: true }
    );
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentdone=true`
    );
  } else {
    return NextResponse.error("Payment Verification Failed");
  }
};
