import React, { Component } from 'react';

import ColorSchemeProvider from '../../ColorScheme/ColorSchemeProvider';

//import Translate, { LocaleProvider, /*LocaleSwitch,*/ TranslateMaker } from 'react-translate-maker'

const Moon = require('react-icons/lib/fa/moon-o'),
       Sun = require('react-icons/lib/fa/sun-o');

class ChangeColorSchemeButton extends Component {

 
    click(e){
        e.stopPropagation();
        ColorSchemeProvider.instance.toggle();
        this.forceUpdate();
    }

    render(){
        
        if(ColorSchemeProvider.instance.scheme === 'light'){
            return <Moon onClick={this.click.bind(this)}  />
        } else {
            return <Sun onClick={this.click.bind(this)}  />
        }
        

        
    }

}

export default ChangeColorSchemeButton;