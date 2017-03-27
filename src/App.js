import React, { Component } from 'react';
import './App.css';
import image from './profile.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


Tabs.setUseDefaultStyles(false);
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={image} className="App-profile" alt="logo" />
          <h2>Welcome to Spock.is</h2>
          <h3>This is Work in progress</h3>


          <Tabs onSelect={this.handleSelect} selectedIndex={0}>
            <TabList>
              <Tab>Introduction</Tab>
              <Tab>Contact</Tab>
            </TabList>

            <TabPanel>
              <h2>Hello from Foo</h2>
            </TabPanel>
            <TabPanel>
              <h2>Hello from Bar</h2>
            </TabPanel>
          </Tabs>



        </div>
      </div>
    );
  }
}

export default App;
