import React, { Component } from 'react';

import ColorSchemeProvider from '../ColorScheme/ColorSchemeProvider';

//import Translate, { LocaleProvider, /*LocaleSwitch,*/ TranslateMaker } from 'react-translate-maker'

const Moon = require('react-icons/lib/fa/moon-o'),
    Sun = require('react-icons/lib/fa/sun-o');

class ChangeColorSchemeButton extends Component {

    colorSchemeChange(locale){
        this.forceUpdate();
    }

    constructor(props, context){
        super(props, context);
        ColorSchemeProvider.instance.subscribe(this.colorSchemeChange.bind(this));
    }

    click(e){
        e.stopPropagation();
        ColorSchemeProvider.instance.toggle();
    }

    render(){
        //console.log(ColorSchemeProvider.instance.scheme);
        
        //console.log(ico);
        
        if(ColorSchemeProvider.instance.scheme === 'light'){
            return <Moon onClick={this.click}/>
        } else {
            return <Sun onClick={this.click}/>
        }
        

        
    }

}

export default ChangeColorSchemeButton;