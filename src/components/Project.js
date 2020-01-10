import React, {PureComponent} from 'react';
import {
  Typography, Grid, Button
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import DesktopTemplate from '../assets/imgs/MacScreen_sm.png'
import MobileTemplate from '../assets/imgs/GalaxyScreen.png'

import '../assets/css/Project.css';


class Project extends PureComponent {

  state = {
    index: 0,
  }


  renderDesktopImages(images){
    const {index} = this.state;
    return(
      <div>
        <img src={DesktopTemplate} className='desktop-template no-drag' alt='desktop-template' />
        <SwipeableViews index={index} className="desktop-img-container">
          {images.map((image, imgIndex) =>
            <img src={image} key={`screenshot-${imgIndex}`}
              alt={`screenshot-${imgIndex}`} className='desktop-img-1' />
          )}
        </SwipeableViews>
      </div>
    );
  }

  renderMobileImages(images){
    const {index} = this.state;
    return(
      <div>
        <img src={MobileTemplate} className='mobile-template no-drag' alt='mobile-template'/>
        <SwipeableViews index={index} className="mobile-img-container">
          {images.map((image, imgIndex) =>
            <img src={image} key={`screenshot-${imgIndex}`}
              alt={`screenshot-${imgIndex}`} className='mobile-img-1' />
          )}
          {/* <img src={images[0]} alt="screenshot1" className="mobile-img-1"/>
          <img src={images[1]} alt="screenshot1" className="mobile-img-1"/>
          <img src={images[2]} alt="screenshot1" className="mobile-img-1"/> */}
        </SwipeableViews>
      </div>
    );
  }

  renderTitles(titles){
    return(
      <Grid container direction="column" justify="space-evenly" alignItems="stretch"
        style={{height: '100%'}}>
        {titles.map( (title, index) =>
          <Grid item key={`imageTitle-${index}`}>
            <Button fullWidth variant="outlined"
              onClick={()=>this.setState({index})}>
              {title}
            </Button>
          </Grid>
        )}
      </Grid>
    );
  }

  render(){
    const {project} = this.props;
    return(
      <div className="project-root">
        <Typography variant="h3">{project.title}</Typography>
        <Typography component="p">{project.description}</Typography>
        <Typography component="p">Design Style: {project.type}</Typography>
        <Typography component="p">
          Stack: {project.frontEnd}, {project.backEnd}, {project.database}
        </Typography>
        <Typography component="a" href={project.link} rel="noopener noreferrer" target="_blank">
          Visit Site
        </Typography>
        <Grid container direction="row" justify="space-around">
          <Grid item sm={12} md={5}>
            {this.renderDesktopImages(project.imagesDesktop)}
          </Grid>
          <Grid item sm={4} md={2}>
            {this.renderTitles(project.imagesTitles)}
          </Grid>
          <Grid item sm={12} md={3}>
            {this.renderMobileImages(project.imagesMobile)}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Project;
