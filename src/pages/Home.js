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
        />
        <HomeModule
          title="Resume"
          body="This is the body of the home module for a description"
          color="violet"
        />
        <HomeModule
          title="About"
          body="This is the body of the home module for a description"
          color="crimson"
        />
      </div>
    );
  }
}

export default Home;
