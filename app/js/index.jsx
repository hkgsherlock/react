import React from 'react';
import {Link} from 'react-router';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
//import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

const tilesData = [
  {
    img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111'
  }, {
    img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu'
  }, {
    img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67'
  }, {
    img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1'
  }, {
    img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans'
  }, {
    img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel'
  }, {
    img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111'
  }, {
    img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki'
  }
];

const tileElements = tilesData.map(tile => <GridTile key={tile.img} title={tile.title} subtitle={<span>by
  <b>{tile.author}</b>
</span>} actionIcon={<IconButton></IconButton>}><img src={tile.img}/></GridTile>);

const gridListStyle = {
  overflowY: 'auto',
  marginBottom: 24
};

class Index extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {/* Basic grid list with mostly default options */}
        <GridList
          cellHeight={200}
          style={gridListStyle}
          >
          {tileElements}
        </GridList>
      </div>
    )
  }
}
module.exports = Index;
