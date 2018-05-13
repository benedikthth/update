import React, { Component } from 'react';


class PortfolioItem extends Component {

    render() {

        const {image, text, to} = this.props;


        return <div className="portfolioItem">
            <img src={image} />
            <a href={to}>{text}</a>
        </div>

    }

}
export default PortfolioItem;
   
    