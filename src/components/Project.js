import React, {PureComponent} from 'react';
import {
  Typography
} from '@material-ui/core'

import '../assets/css/Project.css'

class Project extends PureComponent {
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
      </div>
    );
  }
}

export default Project;
