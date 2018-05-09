import React, {Component} from 'react';

import SwitchLocaleButton from './SwitchLocaleButton';

import Translate from 'react-translate-maker'

import ColorSchemeProvider from '../ColorScheme/ColorSchemeProvider';

//import ColorSchemeProvider from '../ColorScheme/ColorSchemeProvider';
import ChangeColorSchemeButton from './ChangeColorSchemeButton';

import { Link } from 'react-router-dom';
//fas fa-ellipsis-h

var Ellipsis = require('react-icons/lib/fa/ellipsis-h');

class SideBar extends Component {
    constructor(props, context){
        super(props, context);
        this.active = false;
        //this.props = props;
        console.log(props);
        

    }

    toggle() {
        
        //console.log(ColorSchemeProvider.instance);
        this.active = !this.active;
        this.forceUpdate();
    }

    render() {

        if(!this.active){
        
            return <div className={`sideBar ${this.active? "active": ""} ${ColorSchemeProvider.instance.scheme}`} onClick={this.toggle.bind(this)}>
                <Ellipsis />
            </div>
        
        } else {
        
            return <div className={`sideBar ${this.active? "active": ""} ${ColorSchemeProvider.instance.scheme}`} onClick={this.toggle.bind(this)}  >
                


                <div className="horizontalLayoutGroup">
                    
                    <ChangeColorSchemeButton />
                    {" ~ "} 
                    <SwitchLocaleButton click={this.props.handleLocaleChange} language={this.props.language}/> <br />

                </div>


                <ul id="headerButtons">
                    <li className="navButton">
                        <Link to=""><Translate path="homePage.link"/></Link>
                    </li>
                    {/*<li className="navButton"><Link to="about"><Translate path="aboutPage.link"/></Link></li>*/}
                    <li className="navButton">
                        <Link to="portfolio"><Translate path="portfolioPage.link"/></Link>
                    </li>   
                    <li className="bavButton">
                        <Link to="cv"><Translate path="cvPage.link" /></Link>
                    </li>          
                </ul>

            </div>

    }
    }
}

export default SideBar;