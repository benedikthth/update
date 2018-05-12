import React, { Component } from 'react';

import { LocaleProvider   } from 'react-translate-maker'

import ChangeLocaleButton from '../SettingsButtons/SwitchLocaleButton';
import ChangeColorSchemeButton from '../SettingsButtons/ChangeColorSchemeButton';

class SettingsPanel extends Component {

    static contextTypes = {
        ...LocaleProvider.childContextTypes,
    };
    
    active= false;

    click(e){

        e.stopPropagation();
        this.active = !this.active;
        this.forceUpdate();
    
    }

    render(){

        
        const { t } = this.context;

        if(!this.active){
            return <div className="settingsPanel" onClick={this.click.bind(this)}>
                <p className="panelHeading">{t('sidebar.settings', '')}</p>
            </div>
        } else {
            return <div className='settingsPanel' onClick={this.click.bind(this)}>
                
                <p className="panelHeading">{t('sidebar.settings', '')} </p>

                <ul className="horizontalLayoutList">
                
                <li><ChangeColorSchemeButton /></li>

                <li><ChangeLocaleButton /></li>
                
                </ul>
            
            </div>
        }
    }

}


export default SettingsPanel;