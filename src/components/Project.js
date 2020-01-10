import React, {PureComponent} from 'react';
import {
  Typography, Grid, Button
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import DesktopTemplate from '../assets/imgs/MacScreen_sm.png'
import MobileTemplate from '../assets/imgs/GalaxyScreen_.png'

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
        </SwipeableViews>
      </div>
    );
  }

  renderTitles(titles){
    const {index} = this.state;
    return(
      <Grid container direction="row" justify="space-evenly" spacing={2}
        className="titles-container">
        {titles.map( (title, titleIndex) =>
          <Grid item key={`imageTitle-${titleIndex}`} xs={12} sm={12/titles.length}>
            <Button fullWidth variant="outlined"
              classes={{
                root: ((titleIndex===index)?'titles-active ':'') + 'titles-root',
                }}
              onClick={()=>this.setState({index: titleIndex})}>
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
      <div style={{height: '250vh'}}>
        <div className="project-intro">
          <Typography variant="h3" style={{padding: '32px 0'}}>{project.title}</Typography>
          <Typography component="p" className="project-desc" style={{paddingBottom: '24px'}}>
            {project.description}
          </Typography>
          <Typography component="p" className="project-desc">Design Style: {project.type}</Typography>
          <Typography component="p" className="project-desc">
            Stack: {project.frontEnd}, {project.backEnd}, {project.database}
          </Typography>
          <Typography component="a" className="project-link"
            href={project.link}
            rel="noopener noreferrer"
            target="_blank">
              TAKE A LOOK
          </Typography>
        </div>
        <div className="project-root">
          <Grid container direction="row" justify="space-around">
            <Grid item xs={12} sm={7}>
              {this.renderDesktopImages(project.imagesDesktop)}
            </Grid>
            <Grid item xs={7} sm={3}>
              {this.renderMobileImages(project.imagesMobile)}
            </Grid>
            <Grid item xs={5} sm={12}>
              {this.renderTitles(project.imagesTitles)}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Project;
