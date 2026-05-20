import ReactPaginate from "react-paginate";

export default function MyPagination({paginate , pageCount}) {
  const handlePageClick = (data)=>{
      paginate(data.selected + 1);
  }
  return (
    <div className="d-flex justify-content-center mt-4">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        previousLabel="< Prev"
        pageRangeDisplayed={2}
        pageCount={(pageCount > 500)? 500 : pageCount}
        renderOnZeroPageCount={null}
        
        marginPagesDisplayed={2}
        

        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        
        previousClassName="page-item"
        previousLinkClassName="page-link"
        
        nextClassName="page-item"
        nextLinkClassName="page-link"
        
        breakClassName="page-item"
        breakLinkClassName="page-link"
        
        activeClassName="active"
      />
    </div>
  );
}