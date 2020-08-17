import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import HeaderContainer from '../../containers/Header'
import ContentContainer from '../../containers/Content'
import Pagination from '../../components/Pagination/Pagination'
import AddPostIt from '../../components/AddPostIt/AddPostIt'
import ListPostIts from '../../components/ListPostIts/ListPostIts'
import { fetchPostIts } from '../../redux/actions/postItsActions';

const IndexPage = (props) => {
  const { postIts, isLoading, onFetchPostIts} = props

  useEffect(() => {
    function onMount() {
      onFetchPostIts()
    }
    onMount()
  },[onFetchPostIts])

  return (
    <>
      <HeaderContainer />
      <ContentContainer>
        <AddPostIt />
        <ListPostIts postIts={postIts} isLoading={isLoading} />
        <Pagination />
      </ContentContainer>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPostIts: () => dispatch(fetchPostIts())
  }
}

const mapStateToProps = ({ postIts, isLoading, itemsPerPage, totalItems }) => {
  return {
    postIts,
    isLoading,
    itemsPerPage,
    totalItems
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
