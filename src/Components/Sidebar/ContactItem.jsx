import React, { Component } from 'react';

import { LocaleProvider   } from 'react-translate-maker'

class ContactItem extends Component {

    static contextTypes = {
        ...LocaleProvider.childContextTypes,
    };
    
   

    render(){

        const { Icon, tp, to } = this.props;
        
        const { t } = this.context;

    
            return <a href={to} tp={to} className="contactItem" > <Icon /> </a>
            
        
    }

}


export default ContactItem;