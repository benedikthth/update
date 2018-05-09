import React, { Component } from 'react';

import Translate from 'react-translate-maker';

class HomePage extends Component {

 
    

    render(){

        

        return <div> 
            <h1>
                <Translate path="homePage.heading" />
            </h1>

            <p>
                <Translate path="homePage.firstParagraph" />
            </p>

            <p>
                <Translate path="homePage.secondParagraph" />
            </p>

            <p>
                <Translate path="homePage.thirdParagraph" />
            </p>

        </div>

        
    }

}

export default HomePage;