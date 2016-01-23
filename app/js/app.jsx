import React from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open})
  }
  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />
        <LeftNav open={this.state.open}>
          <MenuItem onTouchTap={this.handleClose.bind(this)}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose.bind(this)}><Link to="/about">About</Link></MenuItem>
        </LeftNav>
        {this.props.children}
      </div>

    )
  }
}
module.exports = App;
