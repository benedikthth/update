import React, { Component } from 'react';

import Translate, { LocaleProvider, /*LocaleSwitch,*/ TranslateMaker } from 'react-translate-maker'

class AboutPage extends Component {

    render(){

        

        return <div> 

            <h1>
                This is the about page.
            </h1>

            <p>
                Here i'll put some info about myself.
            </p>

            <p>
                Some shit about my hobbies
            </p>
            
            <p>
                Some shit about my schoolwork
            </p>
            


        </div>

        
    }

}

export default AboutPage;