import React from 'react';
import CompanyInfo from './CompanyInfo';
import Terms from './Terms';

/* ### Footer ### */
  
export default class Footer extends React.Component {
  constructor() {
    super()
    this.liftLanguageUp = this.liftLanguageUp.bind(this);
  }
  liftLanguageUp = (lang) => {
    this.props.onSelectLanguage(lang);            
  }    
  render() {
    return (
      <div className="footer-container container">
        <footer className="wrapper">
          <CompanyInfo />
          <Terms onSelectLanguage={this.liftLanguageUp} />
        </footer>
      </div>
    )
  }
}