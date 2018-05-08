import 'babel-polyfill';
import React, { Component } from 'react';
import './App.css';
import image from './profile.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Translate, { LocaleProvider, /*LocaleSwitch,*/ TranslateMaker } from 'react-translate-maker'
import SwitchLocaleButton from './translate/SwitchLocaleButton.js';
import Cookies from 'react-cookie';
//import * as FontAwesome from 'react-icons/fa';

var Github = require('react-icons/lib/fa/github'),
    Linkedin = require('react-icons/lib/fa/linkedin'),
    Email = require('react-icons/lib/fa/envelope-o'),
    Moon = require('react-icons/lib/fa/moon-o'),
    Sun = require('react-icons/lib/fa/sun-o');

Tabs.setUseDefaultStyles(false);

class App extends Component {

  constructor(props, context){
    super(props, context);

    console.log(window.location.hash.split('#'));
    //var ct = 0;
    //if(window.location.hash !== ""){ ct=parseInt(window.location.hash.split('#')[1]) }
    var c_tab = parseInt(Cookies.load('sTab'));
    var c_color = Cookies.load('color');
    var c_locale = Cookies.load('locale');
    console.log(c_tab);
    if( isNaN(c_tab) ){
      c_tab = 0;
      Cookies.save('sTab', c_tab);
    }
    if(c_color === undefined){
      c_color = 'day';
      Cookies.save('color', 'day');
    }
    if(c_locale === undefined){
      c_locale = 'en_US';
      Cookies.save('locale', c_locale);
    }

    this.state = {
      colorScheme: c_color,
      locale: c_locale,
      currentTab: c_tab
    };
  }

  colorSchemeChange(){
    var cs = (this.state.colorScheme === 'day')? 'night': 'day';
    Cookies.save('color', cs);
    this.setState({
      colorScheme: cs,
      locale: this.state.locale,
      currentTab: this.state.currentTab
    });
  }

  handleLocaleChange(locale) {
    console.log(locale);
    Cookies.save('locale', locale);
    this.setState({
      colorScheme: this.state.colorScheme,
      locale: locale,
      currentTab: this.state.currentTab
    });
  }

  tabChange(tab){
    Cookies.save('sTab', tab);
    this.setState({
      colorScheme: this.state.colorScheme,
      locale: this.state.locale,
      currentTab: tab
    });
    return this.handleSelect;
  }



  render() {
    const {data, locales} = this.props;
    const currentLocale = this.state.locale;
    const colorScheme = this.state.colorScheme;
    const currentTab = this.state.currentTab;
    const translate = new TranslateMaker({
      data: data,
    });

    const CSicon = (colorScheme === 'day')? Moon: Sun;
    return (

      <LocaleProvider translate={translate} locale={currentLocale} >

        <div className={"App "+colorScheme} >
          <div className={"App-header "+colorScheme}>
            <img src={image} className="App-profile" alt=" Benedikt Holm Thordarson" />
            <SwitchLocaleButton click={this.handleLocaleChange.bind(this)} locales={locales} currentLocale={currentLocale}/>
            <button className={"changeColorScheme "+colorScheme} onClick={this.colorSchemeChange.bind(this)} >
              <CSicon />
            </button>
            <Translate tagName="h2" path='welcome'/>
          </div>

          <div className={"tabSection " + colorScheme}>

            {/*<div className={"glowConceal " +colorScheme}></div>*/}

            <p className="constructionNotice">This site is under construction.</p>

            <Tabs onSelect={ (ev)=>this.tabChange(ev) } selectedIndex={currentTab}>
              <TabList>
                <Tab> <Translate path="tabs.introduction.label"/> </Tab>
                <Tab> <Translate path="tabs.links.label" /> </Tab>
                <Tab> <Translate path="tabs.contact.label" /> </Tab>
              </TabList>


              <TabPanel>
                <Translate path="tabs.introduction.titleText"  tagName='h2' className='title' />
                <Translate path="tabs.introduction.summary" tagName='div' className='paragraph summary'/>
                <div className='connectbar left'></div>
                <Translate path="tabs.introduction.interests" tagName='div' className='paragraph interests'/>
                <div className='connectbar right'></div>
                <Translate path="tabs.introduction.hobbies" tagName='div' className='paragraph hobbies'/>
              </TabPanel>

              <TabPanel>
                <Translate path="tabs.links.titleText" tagName="h2"/>
                <ul className={colorScheme}>
                  <li>
                    <a href="http://www.code.spock.is/procedural">
                      <Translate path="tabs.links.links.procedural"/>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.code.spock.is/sudoku">
                      <Translate path="tabs.links.links.sudoku"/>
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
                <ul className={colorScheme}>
                  <li>
                    <Github className="faicon"/>
                    <a href="http://www.github.com/benedikthth"><Translate path="tabs.contact.links.github" /></a>
                  </li>
                  <li>
                    <Linkedin className="faicon"/>
                    <a href="http://www.linkedin.com/in/bennijesus/"><Translate path="tabs.contact.links.linkedIn" /></a>
                  </li>
                  <li>
                    <Email className="faicon"/>
                    <a href="mailto:benedikthth@gmail.com"><Translate path="tabs.contact.links.email" /></a>
                  </li>
                </ul>
              </TabPanel>

            </Tabs>

        </div>

        <div className={"background "+colorScheme}></div>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
