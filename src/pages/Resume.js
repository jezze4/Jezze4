import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function typewriterAnimation(steps){
  return(
    {
      animation: 'typewriter '+(steps/20)+'s steps('+steps+') .5s 1 normal both,'+
      'blinkTextCursor 500ms steps('+steps+') infinite normal'
    }
  );
}

class Resume extends PureComponent {
  state = {
    value: 0,
  }

  renderGeneralInfo() {
    return(
      <div className="resume-section-container">

        <Typography
          variant='h2'
          className="resume-section-title anim-typewriter"
          style={typewriterAnimation(19)}>
          General Information
        </Typography>

        <Typography gutterBottom component="div">
          <Box fontStyle="oblique" color="darkgray" width="50%" component="div" marginBottom="24px">
            With a great love for architecture and design, solving puzzles, math,
            and attention to even the smallest of details, I follow the path of
            aweb developer with a stronger focus on the front-end and hope to use
            my skills to make a change in the world.
          </Box>
        </Typography>
        <Typography variant="h3" gutterBottom>Name: Jesus Gonzalo Martinez Jr.</Typography>
        <Typography variant="h5" gutterBottom>Full-Stack Developer, Android Developer</Typography>
        <hr />
        <Grid container direction="row" className="resume-section-body" justify="space-evenly">
          <Grid container direction="column" justify="space-around">
            <Typography variant="h6" gutterBottom
              style={{fontWeight: '400'}}>
              Email: jezze.04@gmail.com
            </Typography>
            <Typography variant="h6" gutterBottom
              style={{fontWeight: '400'}}>
              Github: github.com/jezze4
            </Typography>
            <Typography variant="h6" gutterBottom
              style={{fontWeight: '400'}}>
              LinkedIn: in/jezze4
            </Typography>
            <br />
            <Typography variant="h6" gutterBottom
              style={{fontWeight: '400'}}>
              School: The University of Texas, Austin
            </Typography>
            <Typography variant="h6" gutterBottom
              style={{fontWeight: '400'}}>
              Major: Computer Science
            </Typography>
            <Typography variant="h6" gutterBottom
              style={{fontWeight: '400'}}>
              Degree: Bachelor of Science and Arts
            </Typography>
          </Grid>
        </Grid>

      </div>
    );
  }

  renderSkills() {
    return(
      <div className="resume-section-container">
        <Typography
          variant='h2'
          className="resume-section-title anim-typewriter"
          style={typewriterAnimation(5)}>
          Skills
        </Typography>

      </div>
    );
  }

  renderExperience() {
    return(
      <div className="resume-section-container">
        <Typography
          variant='h2'
          className="resume-section-title anim-typewriter"
          style={typewriterAnimation(10)}
          >
          Experience
        </Typography>

      </div>
    );
  }

  handleChange = (event, value) => {
    this.setState({value})
  }

  render(){
    const {value} = this.state;
    return(
      <div className="resume-container">
        <Tabs
          classes={{
            root: 'resume-tabs-root',
            indicator: 'resume-tabs-indicator'
          }}
          orientation="vertical"
          value={value}
          onChange={this.handleChange}
          aria-label="Resume vertical tabs"
        >
          <Tab
            label="General Info"
            classes={{
              root: 'resume-tab-root',
              wrapper: 'resume-tab-wrapper',
              selected: 'resume-tab-active'
            }}
          />
          <Tab
            label="Skills"
            classes={{
              root: 'resume-tab-root',
              wrapper: 'resume-tab-wrapper',
              selected: 'resume-tab-active'
            }}
          />
          <Tab
            label="Experience"
            classes={{
              root: 'resume-tab-root',
              wrapper: 'resume-tab-wrapper',
              selected: 'resume-tab-active'
            }}
          />
        </Tabs>
        <div hidden={value!==0}>{this.renderGeneralInfo()}</div>
        <div hidden={value!==1}>{this.renderSkills()}</div>
        <div hidden={value!==2}>{this.renderExperience()}</div>
      </div>
    );
  }
}

export default Resume;
