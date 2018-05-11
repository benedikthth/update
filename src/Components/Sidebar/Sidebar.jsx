
import React, {Component} from 'react';

import profile from '../../img/profile.jpg';

import SettingsPanel from './SettingsPanel';

import ContactInfoPanel from './ContactInfoPanel';


import { LocaleProvider   } from 'react-translate-maker'
import provideTranslations from 'react-translate-maker/dist/provideTranslations';


import { Link } from 'react-router-dom';


var Ellipsis = require('react-icons/lib/fa/ellipsis-h');


class SideBar extends Component {
    

    static contextTypes = {
        ...LocaleProvider.childContextTypes,
    };
    
    active = false;
    
    toggle() {
        
        this.active = !this.active;
        this.forceUpdate();
    }
    
    render() {

        const { t } = this.context;

        if(!this.active){
        
            return <div className={`sideBar ${this.active? "active": ""} `} onClick={this.toggle.bind(this)}>
                <Ellipsis className="icon" />
            </div>
        
        } else {
        
            return <div className={`sideBar ${this.active? "active": ""} `} onClick={this.toggle.bind(this)}  >
                
                <img src={profile} alt="My profile"  className="profile noselect"/>

                <div className="seperator" />

                    <SettingsPanel />

                <div className="seperator" />

                <ul className="navLinks">

                    <li >
                        <Link className="noselect" to="" data-hover={t('homePage.link', '')}>
                            {t('homePage.link', '')}
                        </Link>
                    </li>
                   
                    <li >
                        <Link className='noselect' to='portfolio' data-hover={t('portfolioPage.link', '')}>
                            {t('portfolioPage.link', '')}
                        </Link>
                    </li>   
                   
                    <li >
                        {/*<Link className="noselect" to="cv"><Translate path="cvPage.link"  /></Link>*/}
                        <Link className="noselect" to='cv' data-hover={t('cvPage.link', '')}>
                            {t('cvPage.link','')}
                        </Link>
                    </li>          
               
                </ul>

                <div className="seperator" />

                <ContactInfoPanel />

            </div>

    }
    }
}


export default SideBar;