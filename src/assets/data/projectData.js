import React from 'react'
import SRL_D1 from '../imgs/srl-screen1.png'
import SRL_D2 from '../imgs/srl-screen2.png'
import SRL_D3 from '../imgs/srl-screen3.png'
import SRL_M1 from '../imgs/srl-mobile1_sm.jpg'
import SRL_M2 from '../imgs/srl-mobile2_sm.jpg'
import SRL_M3 from '../imgs/srl-mobile3_sm.jpg'

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
    imagesDesktop: [null, null, null],
    imagesMobile: [null, null, null],
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
    imagesDesktop: [null, null, null],
    imagesMobile: [null, null, null],
    imageDisplay: null,
    link: 'https://thewisevote.com'
  },
]

export {WebProjects};
