import React from "react";
import { BsCloudDownload } from "react-icons/bs";

interface DownloadButtonsProps {
  onDownload: (fileName: string) => void;
}

const DownloadButtons = ({ onDownload }: DownloadButtonsProps) => {
  return (
    <div className="flex gap-1 flex-wrap">
      <div className="flex justify-center items-center text-[#00ae7f]">
        <BsCloudDownload
          size={16}
          className="bg-[#9fefdf] text-green-600 h-7 w-7 pt-1 pb-0.5 px-1.5 rounded-l-md font-semibold"
        />
        <button
          className="flex justify-center items-center gap-1 bg-[#c2f4ea] px-2 py-1.5 rounded-r-md text-xs font-semibold"
          onClick={() => onDownload("Spreadsheet.xls")}
        >
          Spreadsheet.xls
        </button>
      </div>
      <div className="flex justify-center items-center text-primary-blue">
        <BsCloudDownload
          size={16}
          className="bg-[#a1d9ff] text-primary-blue h-7 w-7 pt-1 pb-0.5 px-1.5 rounded-l-md font-semibold"
        />
        <button
          className="flex justify-center items-center gap-1 bg-[#c2e6ff] px-2 py-1.5 rounded-r-md text-xs font-semibold"
          onClick={() => onDownload("Spreadsheet.xls")}
        >
          Document.doc
        </button>
      </div>
      <div className="flex justify-center items-center text-[#b7a35f]">
        <BsCloudDownload
          size={16}
          className="bg-[#fff1a0] text-[#b7a35f] h-7 w-7 pt-1 pb-0.5 px-1.5 rounded-l-md font-semibold"
        />
        <button
          className="flex justify-center items-center gap-1 bg-[#fff8d0] px-2 py-1.5 rounded-r-md text-xs font-semibold"
          onClick={() => onDownload("Spreadsheet.xls")}
        >
          Presentation.ppt
        </button>
      </div>
    </div>
  );
};

export default DownloadButtons;
