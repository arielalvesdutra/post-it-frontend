import React, { Fragment } from 'react'

import HeaderContainer from '../../containers/Header'
import ContentContainer from '../../containers/Content'

import PostIt from '../../components/PostIt'
import AddPostIt from '../../components/AddPostIt'

const IndexPage = () => (
  <Fragment>
    <HeaderContainer />
    <ContentContainer>
      <div>
        <AddPostIt />
      </div>
      <div>
        <PostIt title="Domain-Driven Design" description="Ler o livro." />
      </div>
    </ContentContainer>
  </Fragment>
)

export default IndexPage
