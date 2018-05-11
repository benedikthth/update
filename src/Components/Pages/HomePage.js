import React, { Component } from 'react';

import Translate from 'react-translate-maker';

import welcome from '../../img/welcome.jpg';

import arty from '../../img/artistic.jpg';

import gaming from '../../img/gaming.jpg';

import webDesign from '../../img/webdesign.jpg';

class HomePage extends Component {

 
    

    render(){

        
        return <div className="mainApp"> 
            <h1>
                <Translate path="homePage.heading" />
            </h1>

            <div style={{backgroundImage: 'url('+welcome+')'}} className="sectionImage" />

            <p>
                <Translate path="homePage.introduction" />
            </p>

            <div style={{backgroundImage: 'url('+arty+')'}} className="sectionImage" />

            <p>
                <Translate path="homePage.hobbies" />
            </p>

            <div style={{backgroundImage: 'url('+gaming+')'}} className="sectionImage" />

            <p>
                <Translate path="homePage.gameDesigner" />
            </p>

            <div style={{backgroundImage: `url(${webDesign})`}} className="sectionImage" />

            <p>
                <Translate path="homePage.webDesign" />
            </p>

        </div>

        
    }

}

export default HomePage;