import React, {Component} from 'react';

import SwitchLocaleButton from './SwitchLocaleButton';

import Translate, { LocaleProvider, TranslateMaker } from 'react-translate-maker'

import { Link } from 'react-router-dom';

class SideBar extends Component {
    constructor(props, context){
        super(props, context);
        this.active = false;
        //this.props = props;
        console.log(props);
        

    }

    toggle() {
        
        this.active = !this.active;
        this.forceUpdate();
    }

    render() {

        if(!this.active){
        
            return <div className={`sideBar ${this.active? "active": ""}`} onClick={this.toggle.bind(this)}></div>
        
        } else {
        
            return <div className={`sideBar ${this.active? "active": ""}`} onClick={this.toggle.bind(this)}  >
                

                
                <SwitchLocaleButton click={this.props.handleLocaleChange} language={this.props.language}/> <br />

                <ul id="headerButtons">
                    <li className="navButton"><Link to=""><Translate path="homePage.link"/></Link></li>
                    <li className="navButton"><Link to="about"><Translate path="aboutPage.link"/></Link></li>
                    <li className="navButton"><Link to="portfolio"><Translate path="portfolioPage.link"/></Link></li>             
                </ul>

            </div>

    }
    }
}

export default SideBar;