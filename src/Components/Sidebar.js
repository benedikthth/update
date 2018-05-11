import React, {Component} from 'react';

import SwitchLocaleButton from './SwitchLocaleButton';

import Translate from 'react-translate-maker'

import ChangeColorSchemeButton from './ChangeColorSchemeButton';

import { Link } from 'react-router-dom';

import profile from '../img/profile.jpg';

var Ellipsis = require('react-icons/lib/fa/ellipsis-h');

class SideBar extends Component {
    constructor(props, context){
        super(props, context);
        this.active = false;
        

    }

    toggle() {
        
        this.active = !this.active;
        this.forceUpdate();
    }

    render() {

        if(!this.active){
        
            return <div className={`sideBar ${this.active? "active": ""} `} onClick={this.toggle.bind(this)}>
                <Ellipsis className="icon" />
            </div>
        
        } else {
        
            return <div className={`sideBar ${this.active? "active": ""} `} onClick={this.toggle.bind(this)}  >
                
                <img src={profile} alt="My profile picture"  className="profile noselect"/>

                <div className="seperator" />

                <ul className="horizontalLayoutList">
                    
                    <li>
                        <ChangeColorSchemeButton />
                    </li>
                    
                    <li>
                        <SwitchLocaleButton click={this.props.handleLocaleChange} language={this.props.language}/> <br />
                    </li>

                </ul>

                <div className="seperator" />

                <ul className="navLinks">
               
                    <li >
                        <Link className="noselect" to=""><Translate path="homePage.link"/></Link>
                    </li>
                   
                    <li >
                        <Link className="noselect" to="portfolio"><Translate path="portfolioPage.link"/></Link>
                    </li>   
                   
                    <li >
                        <Link className="noselect" to="cv"><Translate path="cvPage.link" /></Link>
                    </li>          
               
                </ul>

            </div>

    }
    }
}

export default SideBar;