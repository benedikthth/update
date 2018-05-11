import 'babel-polyfill';
import React, { Component } from 'react';
import { LocaleProvider, TranslateMaker } from 'react-translate-maker';
import Cookies from 'react-cookie';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../App.css';

import Sidebar from './Sidebar';
import HomePage from './HomePage';
import PortfolioPage from './PortfolioPage';
import ColorSchemeProvider from '../ColorScheme/ColorSchemeProvider';
import CvPage from './CvPage';


class App extends Component {

  constructor(props, context){
    super(props, context);

    
    ColorSchemeProvider.instance.subscribe(this.colorSchemeChange.bind(this));

    let c_locale = Cookies.load('locale');
    let c_color = Cookies.load('color');

    

    if(c_color === undefined){
      c_color = 'light';
      Cookies.save('color', c_color);
    }

    ColorSchemeProvider.instance.scheme = c_color;
    
    if(c_locale === undefined){
      c_locale = 'en_US';
      Cookies.save('locale', c_locale);
    }

    this.state = {
      locale: c_locale,
      colorScheme: c_color
    };


    ColorSchemeProvider.instance.scheme = c_color;
    
  }

  
  colorSchemeChange(colorScheme){
    
    Cookies.save('color', colorScheme);

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

          <div className={`App`}>

            <Sidebar handleLocaleChange={this.handleLocaleChange.bind(this)} language={currentLocale}/>

            {/*<div className={`mainApp`}>*/}

              <Route name="home" exact path="/" component={HomePage} />
              <Route name="portfolio" exact path="/portfolio" component={PortfolioPage} />
              <Route name="cv" exact path="/cv" component={CvPage} />
           
            </div>
          
          {/*</div>*/}
        
        </Router>
      
      </LocaleProvider>

    );

  }
}

export default App;
