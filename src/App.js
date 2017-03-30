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

  calcAge() {
    var birthday = +new Date("25. Jul 1993");
    return ~~((Date.now() - birthday) / (31557600000));
  }

  render() {
    const age = this.calcAge();
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
                <Tab><Translate path="tabs.links.label" /></Tab>
                <Tab><Translate path="tabs.contact.label" /></Tab>
              </TabList>


              <TabPanel>
                <Translate path="tabs.introduction.titleText"  tagName="h2" />
                <Translate path="tabs.introduction.summary" age={age} tagName="p"/>
              </TabPanel>

              <TabPanel>
                <Translate path="tabs.links.titleText" tagName="h2"/>
              </TabPanel>



              <TabPanel>
                <h2>HERE ARE LINKS</h2>
              </TabPanel>
            </Tabs>

          </div>


        </div>
      </LocaleProvider>
    );
  }
}

export default App;
