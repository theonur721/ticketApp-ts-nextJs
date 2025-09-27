import { NextResponse as Res } from "next/server";
import Ticket from "../models/ticket";

// yeni ticket oluştur
export async function POST(req: Request) {
  try {
    //istek bodysine al
    const body = await req.json();
    // veritabınına kaydet
    const newTicket = await Ticket.create(body);

    return Res.json(
      { message: "Ticket Oluşturuldu", data: newTicket },
      { status: 201 }
    );
  } catch (err) {
    return Res.json(
      { message: "Ticket oluşturulurken hata meydana geldi" },
      { status: 500 }
    );
  }
}

console.log(process.env);

// bütün ticketleri client a göndermek için
export async function GET() {
  try {
    const tickets = await Ticket.find();
    return Res.json(
      { message: "Bütün Ticketler geldi", data: tickets },
      { status: 200 }
    );
  } catch (error) {
    return Res.json(
      { message: "Ticketler getirilirken bir hata meydana geldi" },
      { status: 500 }
    );
  }
}
