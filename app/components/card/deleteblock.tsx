"use client";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

type Props = {
  id: string;
};

const DeleteBlock = ({ id }: Props) => {
  const router = useRouter();

  //api isteği atma silme için
  const handleDelete = async () => {
    const res = await fetch(`/api/tickets/${id}`, {
      method: "DELETE",
    });
    // sayfa yenileme
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FaTrash
      onClick={handleDelete}
      className="cursor-pointer hover:text-red-700"
    />
  );
};

export default DeleteBlock;
