import React, {PureComponent} from 'react';

import HomeModule from '../components/HomeModule';

class Home extends PureComponent {
  render(){
    return(
      <div style={{display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>
        <HomeModule
          title="Portfolio"
          body="This is the body of the home module for a description"
          color="royalblue"
          link="/portfolio"
        />
        <HomeModule
          title="Resume"
          body="This is the body of the home module for a description"
          color="crimson"
          link="/resume"
        />
        {/* <HomeModule
          title="About"
          body="This is the body of the home module for a description"
          color="crimson"
          link="/about"
        /> */}
      </div>
    );
  }
}

export default Home;
