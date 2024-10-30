interface PaginationProps {
  currentPage: number;
  setCurrentPage: (pageNum: number) => void;
  totalPages: number;
}

function Pagination ({currentPage, setCurrentPage, totalPages}: PaginationProps) {

  const pageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const pagination = () => {
    const pages = [];
    
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => pageChange(currentPage - 1)}
        >
        </button>
      );
    }

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => pageChange(i)}
          style={{ fontWeight: i === currentPage ? 'bold' : 'normal' }}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => pageChange(currentPage + 1)}
        >
          
        </button>
      );
    }
  
    return pages;
  };
  return(
    <>
      {pagination()}
    </>
  )
}

export default Pagination