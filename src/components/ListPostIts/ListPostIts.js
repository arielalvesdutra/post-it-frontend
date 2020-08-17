import React from 'react'
import { ClipLoader } from 'react-spinners'
import PostIt from '../PostIts/PostIt'
import './ListPostIts.css'

const ListPostIts = ({ postIts, isLoading }) => {

  return (
    <section className="listPostIts">
      {isLoading && (<ClipLoader />)}

      {!isLoading && !postIts.length && (
        <div className="not-found-records">
          <strong>Nenhum registro encontrado.</strong>
        </div>
      )}

      {!isLoading && postIts.length > 0 &&  postIts.map((postIt, key) => (
        <PostIt title={postIt.title}
          id={postIt.id}
          description={postIt.description}
          key={key} />
      ))}
    </section>
  )
}

export default ListPostIts
