import React, { Component } from 'react'
import { connect } from 'react-redux'
import './AddPostIt.css'
import { createPostIt } from '../redux/actions/post-its';

const Bar = () => (
  <div style={{
    border: '1px solid darkgoldenrod', margin: '20px 0px'
  }} />
)

class AddPostIt extends Component {

  handleForm = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    const postIt = {
      title: data.get('title'),
      description: data.get('description')
    }
  
    try {
      this.validadeForm(postIt)
  
      this.props.onCreatePostIt(postIt)
    } catch (error) {
  
    }
  }

  validadeForm = postIt => {
    if (!postIt.title) {
      throw Error('É necessário preencher o título')
    }
  
    if (!postIt.description) {
      throw Error('É necessário preencher a descriaçao')
    }
  }

  render() {

    return (
      <div className="AddPostIt">
        <form onSubmit={this.handleForm}>
          <div className="AddPostIdForm">
            <span>
              <input name="title" type="text" placeholder="Título do Post-It" />
            </span>
            <span>
              <input name="description" type="text" maxLength="500"
                placeholder="Descrição do Post-It" />
            </span>
            <span>
              <button>
                Cadastrar Post-It
            </button>
            </span>
          </div>
        </form>
        <Bar />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {

  return {
    onCreatePostIt: (postIt) => dispatch(createPostIt(postIt))
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostIt)
