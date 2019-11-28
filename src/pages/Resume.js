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

function fadeInAnimation(delay){
  return(
    {
      opacity: '0',
      animation: 'fadeIn 2s '+delay+'s forwards',
    }
  )
}

const Skills = {
  ProficientTools : [
    {skill : 'C',         info: "info"},
    {skill : 'C++',       info: "info"},
    {skill : 'Java',      info: "info"},
    {skill : 'JavaScript', info: "info"},
    {skill : 'ReactJS',   info: "info"},
    {skill : 'Git',       info: "info"}],
  FamiliarTools : [
    {skill: 'Kotlin',     info: "info"},
    {skill: 'C#',         info: "info"},
    {skill: 'PHP',        info: "info"},
    {skill: 'Python',     info: "info"},
    {skill: 'SQL',        info: "info"},
    {skill: 'React Native', info: "info"},
    {skill: 'WordPress',  info: "info"},
    {skill: 'NPM',        info: "info"},
    {skill: 'NodeJS',     info: "info"},
    {skill: 'Ruby-on-Rails', info: "info"}],
  HardSkills : [
    {skill: 'Algorithms',       info: "info"},
    {skill: 'Data Structures',  info: "info"},
    {skill: 'Big(O) Management', info: "info"},
    {skill: 'Object-Oriented Programming/Design', info: "info"},
    {skill: 'CI/CD',            info: "info"}],
  SoftSkills : [
    {skill: 'Adaptability',     info: "info"},
    {skill: 'Communication',    info: "info"},
    {skill: 'Eagerness',        info: "info"},
    {skill: 'Detail-Oriented!', info: "info"},
    {skill: 'Empathetic',       info: "info"}]
}

class Resume extends PureComponent {
  state = {
    value: 1,
    skillInfo: 'Hover over a skill to see relevant experience'
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
            <Box fontStyle="oblique" color="darkgray" width="50%" component="div" marginBottom="24px">
              With a great love for architecture and design, solving puzzles, math,
              and attention to even the smallest of details, I follow the path of
              aweb developer with a stronger focus on the front-end and hope to use
              my skills to make a change in the world.
            </Box>
          </Typography>
          <Typography variant="h2" gutterBottom>Jesus Gonzalo Martinez Jr.</Typography>
          <Typography variant="h4" gutterBottom>Full-Stack Developer, Android Developer</Typography>
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
      </div>
    );
  }

      skillEnter = (value, color, skillInfo) => {
        let ref = value.currentTarget;
        ref.style.boxShadow = "0 0 20px " + color + " inset";
        ref.style.color = "inherit";
        this.setState({skillInfo})
      }

      skillLeave = (value) => {
        let ref = value.currentTarget;
        ref.style.boxShadow = "none";
        this.setState({skillInfo: 'Hover over a skill to see relevant experience'});
      }

      showSkill = (skill, skillInfo, type, index) => {
        let color = (type === "proficient") ? "green" : (type === "familiar") ? "blue"
              : (type === "hard") ? "violet" : "red";
        let key = skill + '-' + index;
        return(
          <Typography
            key={key}
            className="resume-skill"
            variant="h5"
            onMouseEnter={(val)=>this.skillEnter(val, color, skillInfo)}
            onMouseLeave={this.skillLeave}
          >
            {skill}
          </Typography>
        );
      }

  renderSkills() {
    return(
      <div className="resume-section-container" style={{width: '100%'}}>
        <Typography
          variant='h2'
          className="resume-section-title anim-typewriter"
          style={typewriterAnimation(5)}>
          Skills
        </Typography>
        <Typography gutterBottom component="div" variant="h4" style={fadeInAnimation((5/20 + .2))}>
          <Box fontStyle="oblique" color="darkgray" width="100%"
            component="div" marginBottom="36px" textAlign="center">
            {this.state.skillInfo}
          </Box>
        </Typography>
        <div className="resume-section-skills" style={fadeInAnimation((5/20 + .2))}>
          <Grid container direction="row" justify="space-around" style={{width: '100%'}}>
            <Grid item style={{width: '25%'}}>
              <Typography variant="h4" gutterBottom style={{textAlign: 'center', color: 'green'}}>
                Proficiency
              </Typography>
              {Skills.ProficientTools.map( (skill, index) =>
                this.showSkill(skill.skill, skill.info, "proficient", index))}
            </Grid>
            <Grid item style={{width: '25%'}}>
              <Typography variant="h4" gutterBottom style={{textAlign: 'center', color: 'blue'}}>
                Familiar
              </Typography>
              {Skills.FamiliarTools.map( (skill, index) =>
                this.showSkill(skill.skill, skill.info, "familiar", index))}
            </Grid>
            <Grid item style={{width: '25%'}}>
              <Typography variant="h4" gutterBottom style={{textAlign: 'center', color: 'violet'}}>
                Hard Skills
              </Typography>
              {Skills.HardSkills.map( (skill, index) =>
                this.showSkill(skill.skill, skill.info, "hard", index))}
            </Grid>
            <Grid item style={{width: '25%'}}>
              <Typography variant="h4" gutterBottom style={{textAlign: 'center', color: 'red'}}>
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
