import React  from 'react'
import { connect } from 'react-redux'
import { createPostIt } from '../../redux/actions/postItsActions';
import Bar from '../Bar/Bar'
import './AddPostIt.css'

const AddPostIt = (props) => {

  function handleForm (event) {
    event.preventDefault()
    const data = new FormData(event.target)

    const postIt = {
      title: data.get('title'),
      description: data.get('description')
    }
  
    try {
      validateForm(postIt)
      props.onCreatePostIt(postIt)
    } catch (error) { }
  }

  function validateForm(postIt) {
    if (!postIt.title) throw Error('É necessário preencher o título')  
    if (!postIt.description) throw Error('É necessário preencher a descriaçao')
  }

  return (
    <section className="addPostIt">
      <form onSubmit={handleForm} className="addPostIt__form">        
          <span className="addPostIt__span">
            <input name="title" type="text" placeholder="Título do Post-It" 
                id="title" title="Preencha o título. Atalho: Crtl + D" required/>
          </span>
          <span className="addPostIt__span">
            <input name="description" type="text" maxLength="500"
              title="Preencha a descrição do Post-It"
              placeholder="Descrição do Post-It" required />
          </span>
          <span className="addPostIt__span">
            <button type="submit">Cadastrar Post-It</button>
          </span>
      </form>
      <Bar />
    </section>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onCreatePostIt: (postIt) => dispatch(createPostIt(postIt))
  }
}

export default connect(null, mapDispatchToProps)(AddPostIt)
