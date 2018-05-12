import React, { Component } from 'react';

import { LocaleProvider   } from 'react-translate-maker'

class ContactItem extends Component {

    static contextTypes = {
        ...LocaleProvider.childContextTypes,
    };
    
   

    render(){

        const { Icon, to } = this.props;
        
        return <a href={to}  className="contactItem" > 
            <Icon />
        </a>
                
        
    }

}


export default ContactItem;