import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    dashboard
  </div>
);

const AddExpensePage = () => (
  <div>
    add an expense here.
  </div>
);

const HelpPage = () => (
  <div>
    Here you will get help.
  </div>
);

const EditExpensesPage = () => (
  <div>
    Edit your expenses here.
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensesPage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));
