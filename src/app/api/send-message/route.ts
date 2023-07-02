import { NextResponse } from "next/server";
import { sendNotification } from "../../../utility/telegram";

export async function POST(req: Request) {
  try {
    const { text, parseMode } = await req.json();
    await sendNotification(text, parseMode);
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
}
