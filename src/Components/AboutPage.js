import React, { Component } from 'react';

import Translate from 'react-translate-maker'

class AboutPage extends Component {

    render(){

        

        return <div> 

            <h1>
                <Translate path="aboutPage.heading" />
            </h1>

            <p>
                <Translate path="aboutPage.firstParagraph" />
            </p>

            <p>
                <Translate path="aboutPage.secondParagraph" />
            </p>
            
            <p>
                <Translate path="aboutPage.thirdParagraph" />
            </p>
            


        </div>

        
    }

}

export default AboutPage;