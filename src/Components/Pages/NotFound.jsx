import React, { Component } from 'react';
import { Translate } from 'react-translate-maker';

class NotFoundPage extends Component {

    render(){
    
        return <div className="mainApp">

        <h1>404</h1>

        <Translate path="notFound" />
        
      </div>

        
    }

}

export default NotFoundPage;