import React from 'react';
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'
const store = configureStore()

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'

import getVisibleExpenses from './selectors/expenses'

store.dispatch(addExpense( {description: 'water bill', amount: 2000 }))
store.dispatch(addExpense({ description: 'gas bill', amount: 10, createdAt: 2000}))
store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -2000}))

const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

