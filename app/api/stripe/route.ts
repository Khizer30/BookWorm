import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";
//
import { type Res, type StripeReq } from "@lib/Interface";

// Start Stripe
const stripe: Stripe = new Stripe(process.env.STRIPE_SK!, { apiVersion: "2023-10-16" });

// Stripe
export async function POST(req: NextRequest): Promise<NextResponse<Res>>
{
  try
  {
    const url: URL = new URL(req.url);
    const { uid, email, products }: StripeReq = await req.json();

    const session: Stripe.Response<Stripe.Checkout.Session> = await stripe.checkout.sessions.create({
      line_items: products,
      customer_email: email,
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${ url.origin }/cart/${ uid }?success=true`,
      cancel_url: `${ url.origin }/cart/${ uid }?success=false`
    });

    if (session.url)
    {
      return NextResponse.json({ code: 100, message: session.url });
    }
    else
    {
      return NextResponse.json({ code: 400, message: "Session Error" });
    }
  }
  catch
  {
    return NextResponse.json({ code: 500, message: "Stripe Connection Error" });
  }
}