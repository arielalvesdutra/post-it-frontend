import React from 'react'

import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core'

const PostIt = ({ title, description, color, backgroundColor }) => (
  <Card className="Card" elevation={3}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography component="p">
        {description}
      </Typography>
    </CardContent>
  </Card>
)

export default PostIt