import 'babel-polyfill';
import React, { Component } from 'react';
import '../App.css';
import { LocaleProvider, TranslateMaker } from 'react-translate-maker';
import Cookies from 'react-cookie';

import Sidebar from './Sidebar';

import { BrowserRouter as Router, Route} from 'react-router-dom';


import HomePage from './HomePage';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';

import ColorSchemeProvider from '../ColorScheme/ColorSchemeProvider';


class App extends Component {

  constructor(props, context){
    super(props, context);

    const instance = ColorSchemeProvider.instance;
    
    instance.subscribe(this.colorSchemeChange.bind(this));

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

  
  colorSchemeChange(colorScheme){
    console.log('foo');
    
    Cookies.save('color', colorScheme);
    this.setState({
      colorScheme: colorScheme,
      locale: this.state.locale
    })

    this.forceUpdate();
  }
  

  handleLocaleChange(locale) {
    //console.log(locale);
    Cookies.save('locale', locale);
    this.setState({
      colorScheme: this.state.colorScheme,
      locale: locale
    });
    
  }



  render() {
    const {data} = this.props;
    const currentLocale = this.state.locale;
    
    const translate = new TranslateMaker({
      data: data,
    });

    return (
      <LocaleProvider translate={translate} locale={currentLocale} >
        <Router>
          <div className={`App ${ColorSchemeProvider.instance.scheme}`}>

            <Sidebar handleLocaleChange={this.handleLocaleChange.bind(this)} language={currentLocale}/>

            <div className={`mainApp ${ColorSchemeProvider.instance.scheme}`}>

              {/*<Translate path="welcome" />*/}
          
              <Route name="home" exact path="/" component={HomePage} />
              <Route name="portfolio" exact path="/portfolio" component={PortfolioPage} />
            
            </div>
          
          </div>
        </Router>
      </LocaleProvider>

    );
  }
}

export default App;
