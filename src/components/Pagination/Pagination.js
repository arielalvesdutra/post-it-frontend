import React from 'react'
import { connect } from 'react-redux'
import PaginationHelper from "react-js-pagination";
import { fetchPostIts, setCurrentPage } from '../../redux/actions/postItsActions';
import './Pagination.css'

const Pagination = (props) => {

  function changePage(selectedPage) {
    const { onFetchPostIts, onSetCurrentPage } =  props
    let { filters } = props
    
    filters.page = selectedPage

    onSetCurrentPage(selectedPage)
    onFetchPostIts(filters)
  }

  return (
    <section className="paginationn">
      {props.postIts.length > 0 && props.isLoading === false && (
        <PaginationHelper 
          activePage={props.currentPage}
          itemsCountPerPage={props.itemsPerPage}
          totalItemsCount={props.totalItems}
          pageRangeDisplayed={4}
          onChange={changePage}
        />
      )}
    </section>
  )
}

const mapStateToProps = (props) => {
  const { postIts, isLoading, itemsPerPage, 
    totalItems, currentPage, filters } = props

  return {
    currentPage,
    filters,
    isLoading,
    itemsPerPage,
    postIts,
    totalItems,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPostIts: (filters) => dispatch(fetchPostIts(filters)),
    onSetCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
