interface PaginationProps {
  currentPage: number;
  setCurrentPage: (pageNum: number) => void;
  totalPages: number;
}

function Pagination ({currentPage, setCurrentPage, totalPages}: PaginationProps) {

  const pageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  return(
    <div className='space-x-2'>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => pageChange(i + 1)}
          className={`px-2 py-1 rounded ${
            i + 1 === currentPage
              ? 'bg-pink-500 text-white font-bold'
              : 'bg-pink-100 hover:bg-gray-300'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination