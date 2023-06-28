"use client";
import React, { useCallback, useEffect, useState } from "react";
import useModal from "@/hooks/useModal";
import Video from "@/components/Video";
import DownloadButtons from "@/components/Buttons/DownloadButtons";
import { AiOutlineClose } from "react-icons/ai";
import { useWebinarsId } from "@/hooks/useWebinars";

interface WebinarsModalProps {
  visible?: boolean;
  onClose: any;
}

const WebinarsModal = ({ visible, onClose }: WebinarsModalProps) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { webinarsId } = useModal();
  const { data } = useWebinarsId(webinarsId);
  console.log("webinarsId: ", data);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  const handleDownload = (fileName: string) => {
    // implementar a lógica de download do arquivo
  };

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-20 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-lg rounded-2xl overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-white drop-shadow-md`}
        >
          <div className="absolute top-0 left-0 w-full h-1 rounded-t-md bg-[#2c83fb] z-50 transition" />
          <div className="relative h-auto w-full flex justify-center items-center">
            <div className="flex p-8 w-4/6">
              <p className="font-bold text-lg text-zinc-900">
                <span className="text-[#2c83fb]">Webinar: </span>
                {data?.title}
                {data?.author}
              </p>
            </div>
            <div
              className="cursor-pointer absolute top-1 right-0 h-10 w-10 rounded-full bg-white flex items-center justify-center"
              onClick={handleClose}
            >
              <AiOutlineClose
                className="text-zinc-500 font-semibold"
                size={18}
              />
            </div>
          </div>
          <div className="relative h-auto">
            <Video
              url={data?.videoUrl!}
              thumbnail={data?.thumbnail}
              width={512}
              height={300}
            />
          </div>
          <div className="relative p-5">
            <p className="font-bold text-sm border-b border-slate-300 pb-2">
              Descrição
            </p>
            <p className="pt-2 text-justify text-sm pb-2">
              {data?.description}
            </p>
            <p className="font-bold text-sm border-b border-slate-300 py-2">
              Downloads
            </p>
            <div className="pt-2 flex gap-1">
              <DownloadButtons onDownload={handleDownload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarsModal;
