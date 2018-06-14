import React from 'react'
import { shallow } from 'enzyme'
import { expenseSummary, ExpenseSummary } from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[2]]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should should correctly render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})