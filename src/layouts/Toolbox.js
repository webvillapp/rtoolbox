import React from "react";
import {MainToolbox} from '../components';
import {defineMessages, injectIntl } from 'react-intl';

export const mesg = defineMessages({
    cnFora: {
      id: 'categories.fora',
      defaultMessage: 'Fora Dyskusyjne'
    },
    cnForaForumBudownictwa: {
        id: 'categories.fora.forumBudownictwa',
        defaultMessage: 'Forum Budownictwa'
    },
    cnForaForumInstalacji: {
        id: 'categories.fora.forumInstalacji',
        defaultMessage: 'Forum Instalacji'
    },
    cnForaForumNieruchomosci: {
        id: 'categories.fora.forumNieruchomosci',
        defaultMessage: 'Forum Nieruchomości'
    },
    cnForaForumNowosci: {
        id: 'categories.fora.forumNowosci',
        defaultMessage: 'Forum Nowości'
    },
    cnProjekty: {
        id: 'categories.projekty',
        defaultMessage: 'Projekty'
    },
    cnSpolki: {
        id: 'categories.spolki',
        defaultMessage: 'Spółki'
    },
    cnZasoby: {
        id: 'categories.zasoby',
        defaultMessage: 'Zasoby O365'
    },
    cnWazne: {
        id: 'categories.wazne',
        defaultMessage: 'Ważne'
    },
});
  

class Toolbox extends React.Component {
    render() {
        const { formatMessage } = this.props.intl;
        const initialCategories = [
            {
                'id': 1,
                'name': formatMessage(mesg.cnFora),
                'iconUrl': 'https://img.icons8.com/material-rounded/24/000000/cloud.png',
                'links': [
                    {
                        'id': 1, 
                        'name': formatMessage(mesg.cnForaForumInstalacji),
                        'url': 'http://google.pl'
                    },
                    {
                        'id': 2, 
                        'name': formatMessage(mesg.cnForaForumBudownictwa),
                        'url': 'http://google.pl'
                    },
                    {
                        'id': 3, 
                        'name': formatMessage(mesg.cnForaForumNieruchomosci),
                        'url': 'http://google.pl'
                    },
                    {
                        'id': 4, 
                        'name': formatMessage(mesg.cnForaForumNowosci),
                        'url': 'http://google.pl'
                    }
                ]
            },
            {
                'id': 2,
                'name': formatMessage(mesg.cnProjekty),
                'iconUrl': 'https://img.icons8.com/material-rounded/24/000000/internet.png',
                'links': [
                    {
                        'id': 1, 
                        'name': 'Biura',
                        'url': 'http://google.pl'
                    },
                    {
                        'id': 2, 
                        'name': 'Handel',
                        'url': 'http://google.pl'
                    },
                    {
                        'id': 3, 
                        'name': 'Hotele',
                        'url': 'http://google.pl'
                    }
                ]
            },
            {
                'id': 3,
                'name': formatMessage(mesg.cnSpolki),
                'iconUrl': 'https://img.icons8.com/material-rounded/24/000000/connected.png',
                'links': [
                    {
                        'id': 1, 
                        'name': 'Spółka XYZ',
                        'url': 'http://google.pl'
                    }
                ]
            },
            {
                'id': 4,
                'name': formatMessage(mesg.cnZasoby),
                'iconUrl': 'https://img.icons8.com/material-rounded/24/000000/cloud-checked.png',
                'links': [
                    {
                        'id': 1, 
                        'name': 'Office Apps',
                        'url': 'http://google.pl'
                    },
                    {
                        'id': 2, 
                        'name': 'OneDrive',
                        'url': 'http://google.pl'
                    },
                    {
                        'id': 3, 
                        'name': 'Outlook',
                        'url': 'http://google.pl'
                    },
                    {
                        'id': 4, 
                        'name': 'Sharepoint',
                        'url': 'http://google.pl'
                    },
                    {
                        'id': 5, 
                        'name': 'Yammer',
                        'url': 'http://google.pl'
                    },
                    {
                        'id': 6, 
                        'name': 'Lorem ipsum',
                        'url': 'http://google.pl'
                    }
                ]
            },
            {
                'id': 5,
                'name': formatMessage(mesg.cnWazne),
                'iconUrl': 'https://img.icons8.com/material-rounded/24/000000/mail-network.png',
                'links': [
                    {
                        'id': 1, 
                        'name': 'Ogłoszenia parafialne',
                        'url': 'http://google.pl'
                    }
                ]
            }
        ];
      return (
          <MainToolbox title={this.props.title} allCategories={initialCategories} />
      )
    }
}

export default injectIntl(Toolbox);