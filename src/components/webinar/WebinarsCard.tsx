import React from "react";
import Image from "next/image";
import cardImage from "/public/thumbnail.png";
import { useRouter } from "next/navigation";
import { WebinarsProps } from "@/models/webinars";
import { FaPlay } from "react-icons/fa";
import useModal from "@/hooks/useModal";

interface WebinarsCardProps {
  data: WebinarsProps;
}

const WebinarsCard = ({ data }: WebinarsCardProps) => {
  const { openModal } = useModal();
  const router = useRouter();
  return (
    <div className="text-zinc-700 cursor-pointer rounded-2xl shadow-xl bg-white group">
      <div
        className="rounded-t-2xl group-hover:bg-[#007eff] relative transition"
        onClick={() => openModal(data.id)}
      >
        <Image
          src={cardImage}
          width={500}
          height={500}
          alt={data.title}
          className="group-hover:opacity-70"
          // onClick={() => router.push(`/webinars?id=${data.id}`)}
        />
        <FaPlay
          className="hidden group-hover:flex absolute top-[37.5%] left-[42%] drop-shadow-2xl transition"
          size={58}
          color="white"
        />
      </div>
      <div className="p-5 rounded-b-2xl">
        <p className="font-extrabold group-hover:text-[#007eff]">
          {data.title}
          {data.author}
        </p>
      </div>
    </div>
  );
};

export default WebinarsCard;
