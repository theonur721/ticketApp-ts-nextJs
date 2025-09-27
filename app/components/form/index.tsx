"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useMemo } from "react";

type Props = { editItem?: any };

const Form = ({ editItem }: Props) => {
  const router = useRouter();
  const arr = new Array(5).fill("");

  // tip uyumu: priority string gelebilir
  const priorityValue = useMemo(
    () => (editItem?.priority != null ? Number(editItem.priority) : undefined),
    [editItem]
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ticketData = Object.fromEntries(formData.entries());

    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticketData),
    });

    if (!res.ok) throw new Error("Ticket oluşturulamadı");

    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-3/4 md:w-1/2 my-4"
      >
        <h3 className="text-2xl font-bold">
          {editItem ? "Ticket Güncelle" : "Ticket Oluştur"}
        </h3>

        <label>Başlık</label>
        <input
          type="text"
          name="title"
          required
          defaultValue={editItem?.title ?? ""}
        />

        <label>Açıklama</label>
        <textarea
          name="description"
          required
          defaultValue={editItem?.description ?? ""}
        />

        <label>Kategori</label>
        <select name="category" defaultValue={editItem?.category ?? ""}>
          <option>Yazılım Sorunu</option>
          <option>Donanım Sorunu</option>
          <option>Bağlantı Sorunu</option>
        </select>

        <label>Öncelik</label>
        <div className="flex gap-3 flex-wrap">
          {arr.map((_, index) => {
            const id = String(index + 1);
            return (
              <label
                key={id}
                htmlFor={id}
                className="flex items-center gap-1 cursor-pointer"
              >
                <input
                  id={id}
                  type="radio"
                  value={index + 1}
                  name="priority"
                  defaultChecked={priorityValue === index + 1}
                />
                <span>{index + 1}</span>
              </label>
            );
          })}
        </div>

        <label>İlerleme</label>
        <input
          type="range"
          name="progress"
          min={0}
          max={100}
          defaultValue={editItem?.progress ?? 0}
        />

        <label>Durum</label>
        <select name="status" required defaultValue={editItem?.status ?? ""}>
          <option>Başladı</option>
          <option>Başlamadı</option>
          <option>Bitti</option>
        </select>

        <button className="btn mt-5">
          {editItem ? "Güncelle" : "Oluştur"}
        </button>
      </form>
    </div>
  );
};

export default Form;
