import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import LanguageSelector from './LanguageSelector';

const messages = defineMessages({
    tTerms: {
        id: 'footer.terms',
        defaultMessage: 'terms'
    },
    tConditions: {
        id: 'footer.conditions',
        defaultMessage: 'conditions of use'
    },
    tCopyright: {
        id: 'footer.copyright',
        defaultMessage: 'Copyright © 2019 Company'
    },
})

class Terms extends React.Component {
    constructor() {
        super()
        this.liftLanguageUp = this.liftLanguageUp.bind(this);
    }

    liftLanguageUp = (lang) => {
        this.props.onSelectLanguage(lang);
    }

    render() {
        const { intl: { formatMessage } } = this.props;
        return (
            <div className="terms-container">
                <p className="footer-credits">
                    Using the application you accept the <a href="dummy.html">{formatMessage(messages.tTerms)}</a> and <a href="dummy.html">{formatMessage(messages.tConditions)}</a>.
                    {formatMessage(messages.tCopyright)}
                </p>
                <LanguageSelector onSelectLanguage={this.liftLanguageUp} />
            </div>
        )
    }
}
export default injectIntl(Terms);