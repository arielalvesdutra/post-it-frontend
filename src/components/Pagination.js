import React, { Component } from 'react'
import { connect } from 'react-redux'
import PaginationHelper from "react-js-pagination";

import './Pagination.css'
import { fetchPostIts, setCurrentPage } from '../redux/actions/post-its';

class Pagination extends Component {

  changePage = selectedPage =>  {
    this.forceUpdate()

    let filters = this.props.filters
    filters.page = selectedPage

    this.props.onSetCurrentPage(selectedPage)
    this.props.onFetchPostIts(filters)
  }

  render() {

    return (
      <section className="Pagination">

        {this.props.postIts.length > 0 && this.props.isLoading === false && (
          <PaginationHelper
            activePage={this.props.currentPage}
            itemsCountPerPage={this.props.itemsPerPage}
            totalItemsCount={this.props.totalItems}
            pageRangeDisplayed={4}
            onChange={this.changePage}
          />
        )}
        
      </section>
    )
  }
}

const mapStateToProps = ({ 
      postIts, isLoading, itemsPerPage, totalItems, currentPage, filters
    }) => {
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
