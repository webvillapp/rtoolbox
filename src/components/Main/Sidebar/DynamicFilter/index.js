import React from 'react';
import { injectIntl, defineMessages } from "react-intl";
import {FormattedMessage} from 'react-intl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
library.add({faSearch, faAngleDown, faAngleUp});


const messages = defineMessages({
  dfPlaceholder: {
    id: 'filter.placeholder',
    defaultMessage: 'Filtruj...'
  }
})

class DynamicFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: ''
    };
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleSwitcherClick = this.handleSwitcherClick.bind(this);
    this.handleRadioButton = this.handleRadioButton.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleTextInput(e) {
    this.setState(
      { textValue: e.target.value },
      () => {
          this.state.textValue.length >= 3 
          ? this.props.onTextInputChange(this.state.textValue) 
          : this.props.onTextInputChange('')
      }
    );
  }

  handleButtonClick() {
      this.props.onTextInputChange(this.state.textValue);
  }

  handleSwitcherClick(e) {
    this.props.onSwitcherClick(e.target.value);
  }

  handleRadioButton(e) {
    this.props.onRadioChange(e.target.value);
  }

  handleFormSubmit(e) {
      e.preventDefault();
  }

  render() {
    const {intl:{formatMessage}} = this.props;
    return (
      <form className="dynamic-filter" id="filterform" name="filterform" onSubmit={this.handleFormSubmit} >
        <input id="linkfilter" name="linkfilter" type="text" placeholder={formatMessage(messages.dfPlaceholder)} onChange={this.handleTextInput} value={this.state.textValue} />
        <button type="button" onClick={this.handleButtonClick}>
          <FontAwesomeIcon icon="search" />
        </button>
        <button type="button" id="filter-settings-switcher" onClick={this.handleSwitcherClick}><FormattedMessage id="filter.btnSwitch" defaultMessage="Przełącz typ filtra" />
          <FontAwesomeIcon icon={ this.props.isSettingsShowing ? "angle-up" : "angle-down" } className="farrow" />
        </button>
        <div id="filter-settings" className={ this.props.isSettingsShowing ? "slide-down" : "slide-up" } >
          <label><FormattedMessage id="filter.labelType" defaultMessage="Typ filtra:" /></label><br />
          <span><input type="radio" name="filtertype" value="l" onChange={this.handleRadioButton} /> <FormattedMessage id="filter.byLinks" defaultMessage="Linki" /></span>
          <span><input type="radio" name="filtertype" value="c" defaultChecked onChange={this.handleRadioButton} /> <FormattedMessage id="filter.byCategories" defaultMessage="Kategorie" /><br /></span>
        </div>
      </form>
    )
  }
}
  
export default injectIntl(DynamicFilter);

