import React from 'react';
import {Toolbox, Default} from '../layouts';
import {FormattedMessage} from 'react-intl';

const routes = [
  {
    id: 1, 
    name: <FormattedMessage id="routes.glowna" defaultMessage="Strona Główna" tagName="span" />,
    path: "/",
    layout: Toolbox,
    exact: true
  },
  {
    id: 2, 
    name: <FormattedMessage id="routes.wiadomosci" defaultMessage="Wiadommości" />,
    path: "/wiadomosci",
    layout: Default,
    exact: true
  },
  {
    id: 3, 
    name: <FormattedMessage id="routes.departamenty" defaultMessage="Departamenty" />,
    path: "/departamenty",
    layout: Default,
    exact: true
  },
  {
    id: 4, 
    name: <FormattedMessage id="routes.niezbednik" defaultMessage="Niezbędnik" />,
    path: "/niezbednik",
    layout: Toolbox,
    exact: true
  },
  {
    id: 5, 
    name: <FormattedMessage id="routes.ogloszenia" defaultMessage="Ogłoszenia" />,
    path: "/ogloszenia",
    layout: Default,
    exact: true
  },
  {
    id: 6, 
    name: <FormattedMessage id="routes.sekcje" defaultMessage="Sekcje" />,
    path: "/sekcje",
    layout: Default,
    exact: true
  }
]

export default routes;