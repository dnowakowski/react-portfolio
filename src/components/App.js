import React, { Component } from 'react';
import '../stylesheets/main.scss';
import Main from './Main';
import Loader from './Loader';

class App extends Component {
  constructor(){
    super();

    this.state = {
      contentLoaded:false,
    }

  }

  render() {
    return (
      <React.Fragment>
        { !this.state.contentLoaded && <Loader/>
        }
        <Main showContent = {this.showContent} />
      </React.Fragment>
    );
  }

  showContent = () => {
    this.setState((state) => {
      return {contentLoaded:true}
      
    });
  }
  
}

export default App;
