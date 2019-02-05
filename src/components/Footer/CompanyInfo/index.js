import React from 'react';
import {defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
    ciName: {
        id: 'footer.company',
        defaultMessage: 'Company'
    },
    ciAddress: {
        id: 'footer.address',
        defaultMessage: 'Adres firmy 123'
    },
    ciKRS: {
        id: 'footer.krs',
        defaultMessage: 'KRS: 34534342'
    },
    ciREGON: {
        id: 'footer.regon',
        defaultMessage: 'REGON: 324523523'
    },
    ciNIP: {
        id: 'footer.nip',
        defaultMessage: 'NIP: 423545432'
    },
})


/* ### Footer ### */

class CompanyInfo extends React.Component {
    render() {
        const {intl:{formatMessage}} = this.props;
        return (
            <div className="company-info-container">
                <h3 className="company-info-name">{formatMessage(messages.ciName)}</h3>
                <ul>
                    <li className="company-info-element address">{formatMessage(messages.ciAddress)}</li>
                    <li className="company-info-element krs">{formatMessage(messages.ciKRS)}</li>
                    <li className="company-info-element regon">{formatMessage(messages.ciREGON)}</li>
                    <li className="company-info-element nip">{formatMessage(messages.ciNIP)}</li>
                </ul>
            </div>
        )
    }
}
export default injectIntl(CompanyInfo);