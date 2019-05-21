import React from 'react'
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core'

import './PostIt.css'

const style = {
  color: '#333',
  backgroundColor: 'gold'
}

const PostIt = ({ title, description, color, backgroundColor }) => (
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
    </Card>
  </div>
)

export default PostIt
