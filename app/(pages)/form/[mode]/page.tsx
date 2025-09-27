import Form from "@/app/components/form";

type Params = { mode: string };

async function getTicketById(id: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  const res = await fetch(`${base}/api/tickets/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Ticket getirilirken bir hata meydana geldi");

  const json = await res.json();

  return json.data ?? json.ticket ?? json;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { mode } = await params;
  const isEditMode = mode !== "new";

  const editItem = isEditMode ? await getTicketById(mode) : null;

  return (
    <div>
      <Form editItem={editItem} />
    </div>
  );
}
