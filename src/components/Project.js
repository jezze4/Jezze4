import React, {PureComponent} from 'react';
import {
  Typography, Grid
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import DesktopTemplate from '../assets/imgs/MacScreen_sm.png'
import MobileTemplate from '../assets/imgs/GalaxyScreen.png'

import '../assets/css/Project.css';


class Project extends PureComponent {


  renderDesktopImages(images){
    return(
      <div>
        <img src={DesktopTemplate} className='desktop-template' alt='desktop-template' />
        <img src={images[0]} alt="screenshot1" className='desktop-img-1'/>
      </div>
    );
  }

  renderMobileImages(images){
    return(
      <div>
        <img src={MobileTemplate} className='mobile-template' alt='mobile-template'/>
        <img src={images[0]} alt="screenshot1" className="mobile-img-1"/>
      </div>
    );
  }

  render(){
    const {project} = this.props;
    return(
      <div className="project-root">
        {/* <Typography variant="h3">{project.title}</Typography> */}
        <Typography component="p">{project.description}</Typography>
        <Typography component="p">Design Style: {project.type}</Typography>
        <Typography component="p">
          Stack: {project.frontEnd}, {project.backEnd}, {project.database}
        </Typography>
        <Typography component="a" href={project.link} rel="noopener noreferrer" target="_blank">
          Visit Site
        </Typography>
        <Grid container direction="row" justify="space-around">
          <Grid item>
            {this.renderDesktopImages(project.imagesDesktop)}
          </Grid>
          <Grid item>
            {this.renderMobileImages(project.imagesMobile)}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Project;
