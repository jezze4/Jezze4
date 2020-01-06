import React, {PureComponent} from 'react';

import Project from '../components/Project';
import {WebProjects} from '../assets/data/projectData';

class Portfolio extends PureComponent {
  render(){
    return(
      <div>
        {
          WebProjects.map( (data, index) => (
            <Project
              key={`project-${index}`}
              project={data}
            />
          ))
        }
      </div>
    );
  }
}

export default Portfolio;
