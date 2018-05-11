import React, {Component} from 'react';

import LanguageProvider from '../../translate/LanguageProvider';

class SwitchLocaleButton extends Component {

  constructor(props, context){
    super(props, context);

    this.state={
      language: LanguageProvider.instance.language
    }

  }



  changeState(){
    
    this.state = {
      language:  (this.state.language === "en_US" ? "is_IS": "en_US")
    }
    
    LanguageProvider.instance.language = this.state.language;

  }
  


  switch(e){

    //this.changeState();

    LanguageProvider.instance.toggle();

    //stop event from triggering click event of underlying stuff
    e.stopPropagation();

    this.forceUpdate();
  }


  render(){

    const language = (LanguageProvider.instance.language === 'en_US')? 'Íslenska': 'English';

    return(

      <a className="noselect" onClick={this.switch.bind(this)}>{language}</a>

    );
  }

}

export default SwitchLocaleButton;
