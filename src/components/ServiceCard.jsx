import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Wizard from './stepform/index'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ServiceCard = (props) => {
    const { id, title, description, imgSrc } = props;
    
    return (
        <Card>
            <CardHeader
              title={title}
              color="primary"/>
            {imgSrc ? <CardMedia
              style={{height: "200px"}}
              image={imgSrc}
            /> : ''}
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
        </Card>
  );
}

export default ServiceCard;