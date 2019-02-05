import React from 'react';

export default class LanguageSelector extends React.Component {
    constructor() {
        super()
        this.handleLangBtn = this.handleLangBtn.bind(this);
    }
    
    handleLangBtn = (e) => {
        const lang = e.target.value;
        console.log(lang);
        this.props.onSelectLanguage(lang);            
    }   

    render() {
        return (
            <div className="language-selector">
                <span>wersja językowa:</span>
                <button onClick={this.handleLangBtn} value="pl">PL</button>
                <button onClick={this.handleLangBtn} value="en">EN</button>
            </div>  
        )
    }
}