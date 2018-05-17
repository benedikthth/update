import 'babel-polyfill';
import React, { Component } from 'react';
import { LocaleProvider, TranslateMaker } from 'react-translate-maker';
import Cookies from 'react-cookie';

import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import '../App.css';

import Sidebar from './Sidebar/Sidebar';

import HomePage      from './Pages/HomePage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import CvPage        from './Pages//CvPage';

import ColorSchemeProvider from '../ColorScheme/ColorSchemeProvider';
import LanguageProvider from '../translate/LanguageProvider';
import NotFoundPage from './Pages/NotFound';



class App extends Component {

  constructor(props, context){
    super(props, context);

    let c_locale = Cookies.load('locale');
    let c_color = Cookies.load('color');
    
    if(c_color === undefined){
      c_color = 'light';
      Cookies.save('color', c_color);
    }
    
    
    if(c_locale === undefined){
      c_locale = 'en_US';
      Cookies.save('locale', c_locale);
    }
    LanguageProvider.instance.language = c_locale;
    ColorSchemeProvider.instance.scheme = c_color;
    
    
    
    ColorSchemeProvider.instance.subscribe(this.colorSchemeChange.bind(this));
    LanguageProvider.instance.subscribe(this.handleLocaleChange.bind(this));
  
  }

  
  colorSchemeChange(colorScheme){
    
    Cookies.save('color', colorScheme);
    
  }
  

  handleLocaleChange(locale) {
    
    console.log(locale);
    Cookies.save('locale', locale);
    
    this.forceUpdate();
  }



  render() {
    const {data} = this.props;

    const currentLocale = LanguageProvider.instance.language;
    
    const translate = new TranslateMaker({
      data: data,
    });

    return (

      <LocaleProvider translate={translate} locale={currentLocale} >

        <Router>

          <div className={`App`}>
              <Sidebar handleLocaleChange={this.handleLocaleChange.bind(this)} language={currentLocale} />

              <Switch>
              <Route exact path={'/'} component={HomePage} />
              <Route exact path="/portfolio" component={PortfolioPage} />
              <Route exact path="/cv" component={CvPage} />
              <Route component={NotFoundPage} />
              </Switch>
            </div>
          
          {/*</div>*/}
        
        </Router>
      
      </LocaleProvider>

    );

  }
}

export default App;
