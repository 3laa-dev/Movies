import ReactPaginate from "react-paginate";
import { useDispatch, useSelector, } from "react-redux";
import { paginate } from "../redux/actions/moviesActions";
import { useEffect, useState } from "react"
export default function MyPagination() {
  //{paginate , pageCount}



  
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const handlePageClick = (data) => {
    dispatch(paginate(data.selected + 1 ,state.searchWord ))

  }
  return (
    <div className="d-flex justify-content-center mt-4">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        previousLabel="< Prev"
        pageRangeDisplayed={2}
        pageCount={(state.pageCount > 500) ? 500 : state.pageCount}
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