import React, { Component } from 'react';


import { LocaleProvider   } from 'react-translate-maker'
import provideTranslations from 'react-translate-maker/dist/provideTranslations';

import ContactItem from './ContactItem';

var Linkedin = require('react-icons/lib/fa/linkedin');
var Github = require('react-icons/lib/fa/github');
var Twitter = require('react-icons/lib/fa/twitter');
var Email = require('react-icons/lib/fa/envelope');

class ContactInfoPanel extends Component {

    static contextTypes = {
        ...LocaleProvider.childContextTypes,
    };

    render(){
        
        const { t } = this.context;
        
        return <div className='navLinks'>
            
            <p className={'panelHeading'}>{t('sidebar.contact', '')}</p>


            <ul className='doubleColumn'>
                <li><ContactItem Icon={Linkedin} to="https://www.linkedin.com/in/bennijesus/" /></li>
                
                <li><ContactItem Icon={Github} to="https://github.com/benedikthth" /></li>
                <li><ContactItem Icon={Twitter} to="https://www.linkedin.com/in/bennijesus/" /></li>
                <li><ContactItem Icon={Email} to="mailto:b@spock.is" /></li>
            </ul>


        </div>

        
    }

}

export default ContactInfoPanel;