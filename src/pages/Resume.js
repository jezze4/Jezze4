import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

class Resume extends PureComponent {
  state = {
    value: 0,
  }

  renderGeneralInfo() {
    return(
      <Grid container style={{padding: '16px 24px'}}>
        <Typography variant='h2' className="resume-section-title">General Information</Typography>

      </Grid>
    );
  }

  renderSkills() {
    return(
      <Grid container style={{padding: '16px 24px'}}>
        <Typography variant='h2' className="resume-section-title">Skills</Typography>

      </Grid>
    );
  }

  renderExperience() {
    return(
      <Grid container style={{padding: '16px 24px'}}>
        <Typography variant='h2' className="resume-section-title">Experience</Typography>

      </Grid>
    );
  }

  handleChange = (event, value) => {
    this.setState({value})
  }

  render(){
    const {value} = this.state;
    console.log(value)
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
