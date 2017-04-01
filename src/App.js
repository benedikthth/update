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
      locale: "en_US",
      currentTab: 0
    };
  }

  handleLocaleChange(locale) {
    console.log(locale);
    this.setState({
      locale: locale,
      currentTab: this.state.currentTab
    });
  }

  tabChange(tab){
    this.setState({
      locale: this.state.locale,
      currentTab: tab
    });
    return this.handleSelect;
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
          </div>

          <div className="tabSection">

            <div className="glowConceal"></div>

            <Tabs onSelect={ (ev)=>this.tabChange(ev) } selectedIndex={this.state.currentTab}>
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
                <ul>
                  <li>
                    <a href="http://www.code.spock.is/procedural">
                      <Translate path="tabs.links.links.procedural"/>
                      </a>
                  </li>
                    <li>
                      <a href="http://www.space.spock.is">
                        <Translate path="tabs.links.links.space"/>
                      </a>
                  </li>
                  <li>
                    <a href="http://www.painter.spock.is">
                      <Translate path="tabs.links.links.painter"/>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.flappy.spock.is">
                      <Translate path="tabs.links.links.flappy"/>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.wheel.spock.is">
                      <Translate path="tabs.links.links.wheel"/>
                    </a>
                  </li>
                </ul>
              </TabPanel>

              <TabPanel>
                <Translate path="tabs.contact.titleText" tagName="h2" />
                <ul>
                  <li>
                    <a href="www.github.com/benedikthth"><Translate path="tabs.contact.links.github" /></a>
                    <a href="www.linkedin.com/in/bennijesus/"><Translate path="tabs.contact.links.linkedIn" /></a>
                    <a href="mailto:benedikthth@gmail.com"><Translate path="tabs.contact.links.email" /></a>
                  </li>
                </ul>
              </TabPanel>

            </Tabs>

        </div>

        </div>
      </LocaleProvider>
    );
  }
}

export default App;
