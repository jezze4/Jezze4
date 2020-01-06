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
};

const Experience = [
  {
    company: "LDO Staffing Solutions",
    role: "Web Developer (WordPress)",
    description: "Migrated from vanilla development (using " +
    " Bootstrap, JavaScript/jQuery, PHP, and SQL with MariaDB) to WordPress to" +
    " allow for easier and faster content management." +
    " Converted to ReactJS + Firebase while creating a small CMS for the client." +
    " Added an app-like experience to make it easier for users to traverse through" +
    " the site and send in applications."
  },
  {
    company: "Sport's Recovery Lounge",
    role: "Web Developer (ReactJS)",
    description: "Built responsive website for startup using React for front-end" +
    " to allow customers to quickly and easily make appointments through desktop" +
    " or mobile. Hosting and database storage done on Firebase."
  },
  {
    company: "The Wise Vote",
    role: "Lead Front-End Developer (ReactJS)",
    description: "Lead the frontend development in a team of six to create a " +
    "fast and well-received UX and modern UI using styled Material-UI components for React; " +
    "Managed to design the only project of 11 to have a mobile-friendly website " +
    "that still satisfied project requirements"
  },
  {
    company: "SHOME",
    role: "Front-End Developer (Ruby-on-Rails)",
    description: "Recruited to lead the front-end development and managed to " +
    "improvecode-readability, reduce code used, and enhance mobile UI/UX"
  },
  {
    company: "LDO Staffing Solutions App",
    role: "Android Devoper (Kotlin)",
    description: "Utilizing Firebase as a database, a user can look at listings " +
    "and apply for a job within the app by uploading a resume file (local or " +
    "Google Drive) which is sent to a pre-determined email. Set up using JavaMail API."
  },
  {
    company: "PintOS",
    role: "C Developer",
    description: "Expanded on the pintos toy OS project to include priority " +
    "scheduling, allow argument passing onto stack, implement system calls for " +
    "user programs, add virtual memory, and use a multi-level indexed file system."
  }
]

export {Skills, Experience};
