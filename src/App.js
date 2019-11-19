import React, {Component} from 'react';
import './components/Toolbar/Toolbar';
import Toolbar from './components/Toolbar/Toolbar';
import BackDrop from './components/BackDrop/BackDrop'
import SideDrawer from './components/SideDrawer/SideDrawer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    }

    this.drawerClickHandler = this.drawerClickHandler.bind(this);
    this.backDropClickHandler = this.backDropClickHandler.bind(this);
  }

  drawerClickHandler() {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      }
    });
  }
  
  backDropClickHandler() {
    this.setState({
      sideDrawerOpen: false,
    })
  }

  render() {
    let backDrop;
    if(this.state.sideDrawerOpen) {
      backDrop = <BackDrop clickHandler={this.backDropClickHandler}/>;
    }

    return(
      <div>
        <Toolbar drawerHandler={this.drawerClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
      </div>
    );
  }
}
