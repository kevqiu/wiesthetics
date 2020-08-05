import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const ServiceCard = (props) => {
    const { title, description, imgSrc } = props;
    
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