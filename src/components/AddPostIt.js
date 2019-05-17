import React from 'react'

import './AddPostIt.css'

const Bar = () => (
  <div style={{
    border: '1px solid darkgoldenrod', margin: '20px 0px'
  }} />
)

const AddPostIt = () => (
  <div className="AddPostIt">
    <form>
      <div className="AddPostIdForm">
        <span>
          <input type="text" placeholder="Título do Post-It" />
        </span>
        <span>
          <input type="text" placeholder="Descrição do Post-It" />
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

export default AddPostIt
