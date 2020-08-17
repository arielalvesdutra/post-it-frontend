import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Card, CardContent, Typography } from '@material-ui/core'
import { deletePostIt } from '../../redux/actions/postItsActions';
import './PostIt.css'

const style = {
  color: '#333',
  backgroundColor: 'gold',
  boxShadow: '0 0 0'
}

const PostItCardAction = ({ id, onDeletePostIt }) => (
  <div className="postIt__actionContainer">
    <button type="submit" title="Excluir post-it" onClick={() => onDeletePostIt(id)}>
      <FontAwesomeIcon icon={faTrash} size="lg" />
    </button>
  </div>
)

const PostIt = ({ id, description, title, onDeletePostIt }) => (
  <div className="postIt">
    <Card className="Card"  style={style}>
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
