import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import {Skills, Experience} from '../components/Data';

function typewriterAnimation(steps){
  steps = 35;
  return(
    {
      animation: 'typewriter '+(1)+'s steps('+steps+') .5s 1 normal both,'+
      'blinkTextCursor 500ms steps('+steps+') infinite normal'
    }
  );
}

function fadeInAnimation(delay){
  return(
    {
      opacity: '0',
      animation: 'fadeIn 2s '+delay+'s forwards',
    }
  )
}

class Resume extends PureComponent {
  state = {
    value: 0,
    skill: '',
    skillInfo: 'Hover over a skill to see relevant experience',
    expData: {
      role: 'Unselected',
      desc: 'Hover over a category to see experience'
    }
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
        <div className="resume-section-general" style={fadeInAnimation((19/20 + .2))}>
          <Typography gutterBottom component="div">
            <Box fontStyle="oblique" color="darkgray" width="50%" component="div" marginBottom="24px"
              className="resume-section-heading"
            >
              With a great love for architecture and design, solving puzzles, math,
              and attention to even the smallest of details, I follow the path of
              a web developer with a stronger focus on the front-end and a desire
              to use my skills to make a change in the world.
            </Box>
          </Typography>
          <Typography variant="h2" gutterBottom className="resume-myName">
            Jesus Gonzalo Martinez Jr.
          </Typography>
          <Typography variant="h4" gutterBottom className="resume-roles">
            Full-Stack Developer, Android Developer
          </Typography>
          <hr />
          <Grid container direction="row" className="resume-section-body" justify="space-evenly">
            <Grid container direction="column" justify="space-around">
              <Typography variant="h6" gutterBottom
                style={{fontWeight: '400'}}>
                Email: jezze.04@gmail.com
              </Typography>
              <Typography variant="h6" style={{fontWeight: '400'}} gutterBottom>
                <a rel='noopener noreferrer' target="_blank" href="https://github.com/jezze4">
                  Github: github.com/jezze4
                </a>
              </Typography>
              <Typography variant="h6" gutterBottom style={{fontWeight: '400'}}>
                <a rel='noopener noreferrer' target="_blank" href="https://linkedin.com/in/jezze4">
                  LinkedIn: in/jezze4
                </a>
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
      </div>
    );
  }

      skillEnter = (value, color, skill, skillInfo) => {
        let ref = value.currentTarget;
        ref.style.boxShadow = "0 0 20px " + color + " inset";
        ref.style.color = "inherit";
        if(skill==="Object-Oriented Programming/Design") skill="OOP/OOD"
        if(skill==="Big(O) Management") skill="Big O"
        skill = skill + ': '
        this.setState({
          skill,
          skillInfo
        })
      }

      skillLeave = (value) => {
        let ref = value.currentTarget;
        ref.style.boxShadow = "none";
        this.setState({
          skill: '',
          skillInfo: 'Hover over a skill to see relevant experience'
        });
      }

      showSkill = (skill, skillInfo, type, index) => {
        let color = (type === "proficient") ? "green"
                  : (type === "familiar") ? "blue"
                  : (type === "hard") ? "violet"
                  : "red";
        let key = skill + '-' + index;
        return(
          <Typography
            key={key}
            className="resume-skill"
            variant="body1"
            onMouseEnter={(val)=>this.skillEnter(val, color, skill, skillInfo)}
            onMouseLeave={this.skillLeave}
          >
            {skill}
          </Typography>
        );
      }

  renderSkills() {
    return(
      <div className="resume-section-container">
          <Typography
            variant='h2'
            className="resume-section-title anim-typewriter"
            style={typewriterAnimation(6)}>
            Skills
          </Typography>
        <Typography gutterBottom component="div" variant="h6" style={fadeInAnimation((6/20 + .2))}>
          <Box fontStyle="oblique" color="darkgray" fontWeight="300"
            component="div" marginBottom="36px" textAlign="center" whiteSpace="nowrap" className="skill-details">
            <span style={{fontSize: '.7em',color: "rgba(255,255,255,.4)"}}>{this.state.skill}</span>{this.state.skillInfo}
          </Box>
        </Typography>
        <div className="resume-section-skills" style={fadeInAnimation((6/20 + .2))}>
          <Grid container direction="row" justify="space-around" style={{width: '100%'}} className="skills-list">
            <Grid item style={{width: '25%'}}>
              <Typography variant="h4" className='skill-header' gutterBottom style={{textAlign: 'center', color: 'green'}}>
                Proficiency
              </Typography>
              {Skills.ProficientTools.map( (skill, index) =>
                this.showSkill(skill.skill, skill.info, "proficient", index))}
            </Grid>
            <Grid item style={{width: '25%'}}>
              <Typography variant="h4" className='skill-header' gutterBottom style={{textAlign: 'center', color: 'royalblue'}}>
                Familiar
              </Typography>
              {Skills.FamiliarTools.map( (skill, index) =>
                this.showSkill(skill.skill, skill.info, "familiar", index))}
            </Grid>
            <Grid item style={{width: '25%'}}>
              <Typography variant="h4" className='skill-header' gutterBottom style={{textAlign: 'center', color: 'violet'}}>
                Hard Skills
              </Typography>
              {Skills.HardSkills.map( (skill, index) =>
                this.showSkill(skill.skill, skill.info, "hard", index))}
            </Grid>
            <Grid item style={{width: '25%'}}>
              <Typography variant="h4" className='skill-header' gutterBottom style={{textAlign: 'center', color: 'red'}}>
                Soft Skills
              </Typography>
              {Skills.SoftSkills.map( (skill, index) =>
                this.showSkill(skill.skill, skill.info, "soft", index))}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

  expEnter = (role, desc) => {
    const newData = {role: role, desc: desc}
    this.setState({
      expData: newData
    })
  }

  renderExperience() {
    const {expData} = this.state;
    return(
      <div className="resume-section-container">
        <Typography
          variant='h2'
          className="resume-section-title anim-typewriter"
          style={typewriterAnimation(10)}
          >
          Experience
        </Typography>
        <div className="resume-section-experience" style={fadeInAnimation((10/20 + .2))}>
          <Grid container direction="row" spacing={4}>
            {Experience.map( (value, index) =>
              <Grid key={"exp-section-"+index} item xs={6} sm={4}>
                <Typography className="experience-company"
                  onMouseEnter={()=>this.expEnter(value.role, value.description)}>
                  {value.company}
                </Typography>
              </Grid>
            )}
          </Grid>
          <div className="experience-data">
            <Typography gutterBottom className="experience-role">{expData.role}</Typography>
            <Typography className="experience-desc">{expData.desc}</Typography>
          </div>
        </div>
      </div>
    );
  }

  renderPDF() {
    return(
      <a className="resume-pdf-link" target="_blank" href="Resume_JesusMartinez.pdf" download>
        <Typography>Download Resume PDF</Typography>
      </a>
    );
  }

  handleChange = (event, value) => {
    this.setState({value})
  }

  render(){
    const {value} = this.state;
    return(
      <div className="resume-container"  style={{background: 'black', color: 'white'}}>
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
        {this.renderPDF()}
      </div>
    );
  }
}

export default Resume;
