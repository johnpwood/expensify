import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let wrapper, history, editExpense, removeExpense

beforeEach(() => { 
    history = { push: jest.fn() }
    editExpense = jest.fn()
    removeExpense = jest.fn()
    wrapper = shallow(<EditExpensePage
                            expense={expenses[2]}
                            history={history}
                            editExpense={editExpense}
                            removeExpense={removeExpense} />)
})

test('should render EditExpensePage', () => { 
    expect(wrapper).toMatchSnapshot()
})

test('should call appropriate function on form submission', () => {
    const expense = { ...expenses[2], id: undefined }
    wrapper.find('ExpenseForm').prop('onSubmit')(expense)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expense)
})

test('should call appropriate function to remove the expense when the button is pressed', () => { 
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenCalledWith(expenses[2].id)
    expect(history.push).toHaveBeenCalledWith('/')
})