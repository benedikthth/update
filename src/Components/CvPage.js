import React, { Component } from 'react';

import CV from '../img/benedikt_cv.pdf';

class CvPage extends Component {

    render(){
    
        return <div className={'pdfDisplay mainApp'}>

        <object height="100%" width="100%" type="application/pdf" 
        data={`${CV}`}
        >

        <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href={`/pdf/${CV}`}>click here to download the PDF file.</a></p>

        </object>
        
      </div>

        
    }

}

export default CvPage;