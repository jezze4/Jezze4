import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

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

const Skills = {
  ProficientTools : [
    { skill : 'C',
      info: "Used for Operating Systems projects. "},
    { skill : 'C++',
      info: "Used in Computer Graphics, Game Technology, and Object-Oriented Programming. APIs used with include OGRE3D and OpenGL"},
    { skill : 'Java',
      info: "Used in Data Structures and Object-Oriented Programming. Used for side Android projects"},
    { skill : 'JavaScript',
      info: "Used while working on side web projects. Frameworks known include ReactJS, NodeJS, & ExpressJS"},
    { skill : 'ReactJS',
      info: "Main tool used for web development. 1.5+ years of experience"},
    { skill : 'Git',
      info: "2+ years of experience."}],
  FamiliarTools : [
    { skill: 'Kotlin',
      info: "Basic knowledge. Used to create app for LDO as practice."},
    { skill: 'C#',
      info: "Basic knowledge with unsaved practice."},
    { skill: 'PHP',
      info: "Basic knowledge. Used to practice on a local server"},
    { skill: 'Python',
      info: "Used in Software Engineering. Intermediate knowledge of functions."},
    { skill: 'SQL',
      info: "Fair amount of experience (2+ years). SQL: MySQL, PostgreSQL. NoSQL: MongoDB, Firestore "},
    { skill: 'React Native',
      info: "Fair amount of experience (~2 years). Practiced creating apps using Expo"},
    { skill: 'WordPress',
      info: "Fair amount of experience. Used for LDO website. Maintained until late 2017 (1 year)"},
    { skill: 'NPM',
      info: "Basic knowledge of dealing with packages, dependencies, and fixing errors."},
    { skill: 'NodeJS/ExpressJS',
      info: "Basic knowledge. Learned base then continued with ExpressJS"},
    { skill: 'Ruby-on-Rails',
      info: "Fair amount of experience. Used to create SHOME project"}],
  HardSkills : [
    { skill: 'Algorithms',
      info: "Knowledge consistent with most UTCS students"},
    { skill: 'Data Structures',
      info: "Knowledge consistent with most UTCS students"},
    { skill: 'Big(O) Management',
      info: "Constantly review speed of data structure functions while avoiding inefficient algorithms"},
    { skill: 'Object-Oriented Programming/Design',
      info: "Fair amount of experience (3+ years). "},
    { skill: 'CI/CD',
      info: "Integrated in a few projects (VoteWisely, OOP projects)."}],
  SoftSkills : [
    { skill: 'Adaptability',
      info: "Known to work in various conditions - from the bus to restaurants to a simple desk"},
    { skill: 'Communication',
      info: "Experience talking with clients with little-to-no tech knowledge"},
    { skill: 'Eagerness',
      info: "Always want to learn something new and start on a new project!!"},
    { skill: 'Detail-Oriented!',
      info: "Border-line compulsive-level attention to details"},
    { skill: 'Empathetic',
      info: "Will work around keeping others satisfied and happy in the environment. "}]
}

class Resume extends PureComponent {
  state = {
    value: 1,
    skill: '',
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
              a web developer with a stronger focus on the front-end and a desire
              to use my skills to make a change in the world.
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
            component="div" marginBottom="36px" textAlign="center">
            <span style={{fontSize: '.7em',color: "rgba(255,255,255,.4)"}}>{this.state.skill}</span>{this.state.skillInfo}
          </Box>
        </Typography>
        <div className="resume-section-skills" style={fadeInAnimation((6/20 + .2))}>
          <Grid container direction="row" justify="space-around" style={{width: '100%'}}>
            <Grid item style={{width: '25%'}}>
              <Typography variant="h4" gutterBottom style={{textAlign: 'center', color: 'green'}}>
                Proficiency
              </Typography>
              {Skills.ProficientTools.map( (skill, index) =>
                this.showSkill(skill.skill, skill.info, "proficient", index))}
            </Grid>
            <Grid item style={{width: '25%'}}>
              <Typography variant="h4" gutterBottom style={{textAlign: 'center', color: 'royalblue'}}>
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
