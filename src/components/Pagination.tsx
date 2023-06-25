interface PaginationProps {
  currentPage: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from(Array(totalPages).keys()).map((i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-3 font-semibold text-base">
      Página
      {pages.map((page) => (
        <button
          key={page}
          className={`${
            page === currentPage
              ? "border border-[#2c83fb] font-bold text-[#2c83fb] transition px-3 py-1 rounded-md"
              : "px-1 py-1"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
