import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';

class HomeModule extends PureComponent {

  handleOnHover = (data) => {
    let ref = data.currentTarget.children[1];
    ref.classList.add("home-module-hover")
  }

  removeOnHover = (data) => {
    let ref = data.currentTarget.children[1];
    ref.classList.remove("home-module-hover")
  }

  render(){
    return(
      <div
      className="home-module-container"
      onMouseEnter={this.handleOnHover}
      onMouseLeave={this.removeOnHover}>
        <Typography className="home-module-title">
          {this.props.title}
        </Typography>
        <Typography className="home-module-body">
          {this.props.body}
        </Typography>
      </div>
    );
  }
}

export default HomeModule;
