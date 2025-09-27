import Ticket from "../../models/ticket";

type Params = {
  params: { id: string };
};

// id si bilinen ticketi silen route

export async function DELETE(req: Request, { params }: Params) {
  try {
    await Ticket.findByIdAndDelete(params.id);
    return Response.json({ message: "Ticket silindi" }, { status: 200 });
  } catch (err) {
    Response.json(
      { message: "Ticket silinirken bir hata meydana geldi", err },
      { status: 500 }
    );
  }
}

// id si bilinen ticketi dödüren route

export async function GET(req: Request, { params }: Params) {
  try {
    const ticket = await Ticket.findById(params.id);
    return Response.json({ ticket });
  } catch (err) {
    Response.json(
      { message: "Ticket getirilirken bir hata meydana geldi", err },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request, { params }: Params) {
  const body = await req.json();
  try {
    const updated = await Ticket.findByIdAndUpdate(params.id, body);
    return Response.json({ updated });
  } catch (err) {
    Response.json(
      { message: "Ticket güncellenirken bir hata meydana geldi", err },
      { status: 500 }
    );
  }
}
