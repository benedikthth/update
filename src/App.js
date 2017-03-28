import 'babel-polyfill';
import React, { Component } from 'react';
import './App.css';
import image from './profile.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Translate, { LocaleProvider, /*LocaleSwitch,*/ TranslateMaker } from 'react-translate-maker'
import SwitchLocaleButton from './translate/SwitchLocaleButton.js';


Tabs.setUseDefaultStyles(false);

class App extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      locale: "en_US"
    };
  }

  handleLocaleChange(locale) {
    console.log(locale);
    this.setState({
      locale: locale,
    });
    this.render();
  }

  render() {

    const {data, locales} = this.props;
    const currentLocale = this.state.locale;
    const translate = new TranslateMaker({
      data: data,
    });
    return (

      <LocaleProvider translate={translate} locale={currentLocale} >

        <div className="App">
          <div className="App-header">
            <img src={image} className="App-profile" alt="profile image" />
            <SwitchLocaleButton click={this.handleLocaleChange.bind(this)} locales={locales} currentLocale={currentLocale}/>
            <Translate tagName="h2" path='welcome'/>
            <h3>This is Work in progress</h3>


            <Tabs onSelect={this.handleSelect} selectedIndex={0}>
              <TabList>
                <Tab><Translate path="tabs.introduction.label"/></Tab>
                <Tab><Translate path="tabs.contact.label"/></Tab>
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
      </LocaleProvider>
    );
  }
}

export default App;
