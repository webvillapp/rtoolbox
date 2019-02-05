import React from 'react';
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
  sbPlaceholder: {
    id: 'searchbox.placeholder',
    defaultMessage: 'Szukaj...'
  }
})


class SearchBox extends React.Component {
  render() {
    const {intl:{formatMessage}} = this.props;
    return (
      <div className="searchbox header-item">
        <form className="search-basic">
          <input type="search" placeholder={formatMessage(messages.sbPlaceholder)} />
        </form>
        <form id="search-responsive">
          <input type="search" placeholder= {formatMessage(messages.sbPlaceholder)} />
        </form>
      </div>
    )
  }
}
export default injectIntl(SearchBox);