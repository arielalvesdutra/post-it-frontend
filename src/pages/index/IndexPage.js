import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ClipLoader } from 'react-spinners'
import HeaderContainer from '../../containers/Header'
import ContentContainer from '../../containers/Content'

import PostIt from '../../components/PostIt'
import Pagination from '../../components/Pagination'
import AddPostIt from '../../components/AddPostIt'

import './IndexPage.css'

import { fetchPostIts } from '../../redux/actions/post-its';

class IndexPage extends Component {

  componentDidMount = () => {
    this.props.onFetchPostIts()
  }

  render() {

    const postIts = this.props.postIts

    return (
      <Fragment>
        <HeaderContainer />
        <ContentContainer>
          <div>
            <AddPostIt />
          </div>
          <div className="post-its-container">
            {this.props.isLoading && (
              <ClipLoader />
            )}
            {!this.props.isLoading && !postIts.length && (
              <div className="not-found-records">
                <strong>Nenhum registro encontrado.</strong>
              </div>
            )}
            {postIts.length > 0 && !this.props.isLoading && postIts.map((postIt, key) => (
              <PostIt title={postIt.title}
                id={postIt.id}
                description={postIt.description}
                key={key} />
            ))
            }
          </div>
          <Pagination />
        </ContentContainer>
      </Fragment>
    )
  }
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

export default connect(
  mapStateToProps, mapDispatchToProps
)(IndexPage)
