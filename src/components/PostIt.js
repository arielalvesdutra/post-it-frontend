import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Card, CardContent, Typography } from '@material-ui/core'

import './PostIt.css'
import { deletePostIt } from '../redux/actions/post-its';

const style = {
  color: '#333',
  backgroundColor: 'gold'
}

const PostItCardAction = ({ id, onDeletePostIt }) => (
  <div className="Post-It-Action-Container">
  <button type="submit" title="Excluir post-it" onClick={() => onDeletePostIt(id)}>
    <FontAwesomeIcon icon={faTrashAlt} size="lg" />
  </button>
</div>
)

const PostIt = ({ id, description, title, onDeletePostIt }) => (
  <div className="Post-It">
    <Card className="Card" elevation={3} style={style}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" style={style} >
          {title}
        </Typography>
        <Typography component="p" style={style}>
          {description}
        </Typography>
      </CardContent>
      <PostItCardAction id={id} onDeletePostIt={onDeletePostIt} />
    </Card>
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    onDeletePostIt: (id) => dispatch(deletePostIt(id))
  }
}

export default connect(null, mapDispatchToProps)(PostIt)
