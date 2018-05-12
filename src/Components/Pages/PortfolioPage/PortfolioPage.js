import React, { Component } from 'react';

import PortfolioItem from './PortfolioItem';
import { LocaleProvider   } from 'react-translate-maker'


import solver from '../../../img/portfolio/solver.PNG';
/*
import painter from '../../../img/portfolio/painter.PNG';
import map from '../../../img/portfolio/map.png';
import spacegame from '../../../img/portfolio/spacegame.png';
import sudoku from '../../../img/portfolio/sudoku.PNG';
*/


class PortfolioPage extends Component {

    static contextTypes = {
        ...LocaleProvider.childContextTypes,
    };
   
    
    render(){

        const { t } = this.context;

        return <div className="mainApp"> 

            <h1>
                This is the portfolio page
            </h1>

            <ul>
                <li>
                    <PortfolioItem image={solver} text={t('portfolioPage.csp', '')} to={"code.spock.is/csp"} />
                </li>
            </ul>
            
        </div>

        
    }

}

export default PortfolioPage;