import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
import Project from '../components/Project';
import {WebProjects} from '../assets/data/projectData';

function typewriterAnimation(steps, delay, count){
  let inf = (count)?count:'infinite';
  let delayType = delay + .5
  return(
    {
      translateZ: '0',
      fontSize: '3.5vmax',
      animation: 'typewriter '+(1)+'s steps('+steps+') '+delayType+'s 1 normal both,'+
      'blinkTextCursor 500ms steps('+steps+') '+delay+'s '+inf+' normal'
    }
  );
}

class Portfolio extends PureComponent {


  renderHeader(){
    return(
      <div style={{
        textAlign: 'center',
        paddingTop: '25vh',
        height: '75vh',
        background: 'radial-gradient(circle, rgba(148, 0, 211,.25), black 60%)',
        backgroundPosition: 'center',
        animation: 'pulse 5s ease infinite'
      }}>
        <Typography className="anim-typewriter"
          style={typewriterAnimation(135, 0, 3)}>
          PROJECT:
        </Typography><br />
        <Typography className="anim-typewriter"
          style={typewriterAnimation(135, 1.5, 3)}>
          PORTFOLIO
        </Typography><br /><br />
        <Typography className="anim-typewriter"
          style={typewriterAnimation(135, 3, 0)}>
          Jesus G Martinez
        </Typography><br /><br /><br />
        <Button component={Link} to="/resume" classes={{root: 'resume-link'}}>
          To My Resume
        </Button>
        <Typography style={{position: 'absolute', bottom: '30px', width: '100%'}}>
          Scroll to continue
        </Typography>
      </div>
    );
  }


  render(){
    return(
      <div style={{background: 'black', color: 'gainsboro'}}>
          {this.renderHeader()}
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
      </div>
    );
  }
}

export default Portfolio;
