
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
}));

const tileData = [{
    img: img1,
    title: '1',
    cols: 1,
  },
  {
    img: img2,
    title: '3',
    cols: 1,
  },
  {
    img: img3,
    title: '3',
    cols: 1,
  },
  {
    img: img4,
    title: '4',
    cols: 1,
  },
  {
    img: img5,
    title: '5',
    cols: 1,
  },
  {
    img: img6,
    title: '6',
    cols: 1,
  },
  {
    img: img7,
    title: '7',
    cols: 1,
  },
  {
    img: img8,
    title: '8',
    cols: 1,
  },
  {
    img: img9,
    title: '9',
    cols: 1,
  }
]

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1} >
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}