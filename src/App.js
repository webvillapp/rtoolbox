import React from "react";
import './scss/main.scss';
import {componentMaker} from './utils';
import routes from './routes';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header} from './components';
import {Footer} from './components';

import {IntlProvider, addLocaleData} from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import plLocaleData from "react-intl/locale-data/pl";
import translations from "./i18n/locales/"
addLocaleData([...enLocaleData, ...plLocaleData]);


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentLang: 'pl'
    }

    this.handleLangChange = this.handleLangChange.bind(this);
  }
  handleLangChange(cLang) {
    this.setState({
      currentLang: cLang
    })
  }
  render() {
    const lang = this.state.currentLang;
    const messages = translations[lang];
    
    return (
      <IntlProvider locale={lang} key={lang} messages={messages}>
        <Router>
          <React.Fragment>
            <Header navItems={routes} />
            <Switch>
              {
                //routes.map(r => <Route exact={r.exact} key={r.path} path={r.path} component={r.layout} />)
                routes.map(r => <Route exact={r.exact} key={r.path} path={r.path} render={() => componentMaker(r.layout, r.name)} />)
              }
            </Switch>
            <Footer onSelectLanguage={this.handleLangChange} />
          </React.Fragment>
        </Router>
      </IntlProvider>
    );
  }
}
export default App;