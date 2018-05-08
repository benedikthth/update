import 'babel-polyfill';
import React, { Component } from 'react';
import '../App.css';
//import image from '../img/profile.jpg';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Translate, { LocaleProvider, /*LocaleSwitch,*/ TranslateMaker } from 'react-translate-maker'
//import SwitchLocaleButton from './SwitchLocaleButton.js';
import Cookies from 'react-cookie';

import Sidebar from './Sidebar';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';
//import * as FontAwesome from 'react-icons/fa';
/*
var Github = require('react-icons/lib/fa/github'),
    Linkedin = require('react-icons/lib/fa/linkedin'),
    Email = require('react-icons/lib/fa/envelope-o'),
    Moon = require('react-icons/lib/fa/moon-o'),
    Sun = require('react-icons/lib/fa/sun-o');
*/
//Tabs.setUseDefaultStyles(false);

class App extends Component {

  constructor(props, context){
    super(props, context);

    let c_locale = Cookies.load('locale');
    let c_color = Cookies.load('color');
    /*
    console.log(window.location.hash.split('#'));
    
    */
    if(c_color === undefined){
      c_color = 'day';
      Cookies.save('color', 'day');
    }
    if(c_locale === undefined){
      c_locale = 'en_US';
      Cookies.save('locale', c_locale);
    }
    this.state = {
      locale: c_locale,
      colorScheme: c_color
    };
    
  }
  colorSchemeChange(){
    var cs = (this.state.colorScheme === 'day')? 'night': 'day';
    Cookies.save('color', cs);
    this.setState({
      colorScheme: cs,
      locale: this.state.locale
    });
  }

  handleLocaleChange(locale) {
    console.log(locale);
    Cookies.save('locale', locale);
    this.setState({
      colorScheme: this.state.colorScheme,
      locale: locale
    });
  }



  render() {
    const {data, locales} = this.props;
    const currentLocale = this.state.locale;
    const colorScheme = this.state.colorScheme;
    //const currentTab = this.state.currentTab;
    const translate = new TranslateMaker({
      data: data,
    });

    return (
      <LocaleProvider translate={translate} locale={currentLocale} >
        <Router>
          <div className="App">

            <Sidebar handleLocaleChange={this.handleLocaleChange.bind(this)} language={currentLocale}/>

            <div className="mainApp">

              <Translate path="welcome" />
          
              <Route name="home" exact path="/" component={HomePage} />
              <Route name="about" exact path="/about" component={AboutPage} />
              <Route name="portfolio" exact path="/portfolio" component={PortfolioPage} />
            
            </div>
          
          </div>
        </Router>
      </LocaleProvider>
    );
  }
}

export default App;
