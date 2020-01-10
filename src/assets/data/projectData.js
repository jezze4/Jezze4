import React from 'react'
import SRL_D1 from '../imgs/srl-home.png'
import SRL_D2 from '../imgs/srl-appts.png'
import SRL_D3 from '../imgs/srl-service.png'
import SRL_M1 from '../imgs/srl-home_m.jpg'
import SRL_M2 from '../imgs/srl-appts_m.jpg'
import SRL_M3 from '../imgs/srl-service_m.jpg'

import LDO_D1 from '../imgs/ldo-home.png';
import LDO_D2 from '../imgs/ldo-about.png';
import LDO_D3 from '../imgs/ldo-apply.png';
import LDO_M1 from '../imgs/ldo-home_m.jpg';
import LDO_M2 from '../imgs/ldo-about_m.jpg';
import LDO_M3 from '../imgs/ldo-apply_m.jpg';

import VOTE_D1 from '../imgs/vote-home.png';
import VOTE_D2 from '../imgs/vote-states.png';
import VOTE_D3 from '../imgs/vote-rep.png';
import VOTE_D4 from '../imgs/vote-map.png';
import VOTE_M1 from '../imgs/vote-home_m.jpg';
import VOTE_M2 from '../imgs/vote-states_m.jpg';
import VOTE_M3 from '../imgs/vote-rep_m.jpg';
import VOTE_M4 from '../imgs/vote-map_m.jpg';

const WebProjects = [
  {
    title: <span id="srl-title">Sport's <b>RECOVERY</b> Lounge</span>,
    description: "Site to help users make an appointment for some premium-quality " +
                 " recovery after a vitalizing workout!",
    type: 'Adaptive',
    frontEnd: 'ReactJS',
    backEnd: 'Firebase',
    database: 'Firestore',
    imagesDesktop: [SRL_D1, SRL_D2, SRL_D3],
    imagesMobile: [SRL_M1, SRL_M2, SRL_M3],
    imagesTitles: ['Home','Apptointments','Services'],
    imageDisplay: null,
    link: 'https://sportsrecoverylounge.com'
  },
  {
    title: "LDO Staffing Solutions",
    description: "There are always people looking for jobs! This business offers a " +
                  "variety of jobs available in Laredo, TX",
    type: 'Adaptive',
    frontEnd: 'ReactJS',
    backEnd: 'Firebase',
    database: 'Firestore',
    imagesDesktop: [LDO_D1, LDO_D2, LDO_D3],
    imagesMobile: [LDO_M1, LDO_M2, LDO_M3],
    imagesTitles: ['Home','About','Submitting Application'],
    imageDisplay: null,
    link: 'https://ldo-staffing.web.app'
  },
  {
    title: "VoteWisely",
    description: "Simple React-based project made for a Software Engineering " +
                  "course taught at The University of Texas at Austin",
    type: 'Responsive',
    frontEnd: 'ReactJS',
    backEnd: 'NodeJS + ExpressJS',
    database: 'AWS, PostgreSQL',
    imagesDesktop: [VOTE_D1, VOTE_D2, VOTE_D3, VOTE_D4],
    imagesMobile: [VOTE_M1, VOTE_M2, VOTE_M3, VOTE_M4],
    imagesTitles: ['Home','States Directory','Representative', 'Interactive Map'],
    imageDisplay: null,
    link: 'https://thewisevote.com'
  },
]

export {WebProjects};
