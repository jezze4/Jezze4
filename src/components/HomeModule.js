import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

class HomeModule extends PureComponent {

  handleOnHover = (data) => {
    let ref = data.currentTarget.children[1];
    ref.classList.add("home-module-hover");
  }

  removeOnHover = (data) => {
    let ref = data.currentTarget.children[1];
    ref.classList.remove("home-module-hover")
  }

  render(){
    return(
      <Link to={this.props.link}
      className="home-module-container"
      style={{color: this.props.color, border: this.props.color + " 0px solid"}}
      onMouseEnter={this.handleOnHover}
      onMouseLeave={this.removeOnHover}>
        <Typography className="home-module-title">
          {this.props.title}
        </Typography>
        <Typography className="home-module-body">
          {this.props.body}
        </Typography>
      </Link>
    );
  }
}

export default HomeModule;
