import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';

import HomeModule from '../components/HomeModule';

class Home extends PureComponent {
  render(){
    return(
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <HomeModule
          title="Portfolio"
          body="This is the body of the home module for a description"
        />
        <HomeModule
          title="Resume"
          body="This is the body of the home module for a description"
        />
        <HomeModule
          title="About"
          body="This is the body of the home module for a description"
        />
      </div>
    );
  }
}

export default Home;
