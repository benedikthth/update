import React, {Component} from 'react';
import flag_iceland from './iceland.png';
import flag_US from './us.png';
class SwitchLocaleButton extends Component {

  constructor(props, context){
    super(props, context);
    console.log(props);
    this.state={
      language: props.currentLocale
    }

  }

  changeState(){
    this.state = {
      language:  (this.state.language==="en_US"? "is_IS": "en_US")
    }
  }


  switch(){
    this.changeState();
    this.props.click(this.state.language);
  }


  render(){
    return(
      <a className={this.state.language==="en_US"?"SwitchLocaleButton slb_ice":"SwitchLocaleButton slb_us"} onClick={this.switch.bind(this)}></a>
    );
  }

}

export default SwitchLocaleButton;
