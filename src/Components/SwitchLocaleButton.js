import React, {Component} from 'react';

class SwitchLocaleButton extends Component {

  constructor(props, context){
    super(props, context);

    this.state={
      language: props.language
    }

  }

  changeState(){
    
    this.state = {
      language:  (this.state.language==="en_US"? "is_IS": "en_US")
    }

  }
  


  switch(e){

    this.changeState();

    //stop event from triggering click event of underlying stuff
    e.stopPropagation();

    this.props.click(this.state.language);

  }


  render(){
    return(

      <a className="noselect" onClick={this.switch.bind(this)}>{(this.state.language==="en_US"? "Íslenska": "English")}</a>

    );
  }

}

export default SwitchLocaleButton;
