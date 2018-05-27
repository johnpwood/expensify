import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import expenses from '../fixtures/expenses'
import ExpenseForm from '../../components/ExpenseForm'

test('should render form correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense form with data already populated', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot
})

test('should render an error message for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', { preventDefault: () => { } })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set description in the state on input change', () => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', { target: { value } })
    expect(wrapper.state('description')).toBe(value)
})

test('should set note in the state on textarea change', () => {
    const value = 'new note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', { target: { value } })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount in state on change if the input is valid', () => {
    const value = '21.22'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe(value)
})


test('should not set the state if input for amount is invalid', () => {
    const value = '22a.45'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount')).not.toBe(value)
})

test('should call onSubmit for valid form', () => { 
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[3]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', { 
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    const expense = { ...expenses[3], id: undefined }
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
        expense
    )
})

test('should set new date in the state when the date changes', () => { 
    const wrapper = shallow(<ExpenseForm />)
    const now = moment()
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendarFocused in the state when focus changes', () => { 
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused: true})
    expect(wrapper.state('calendarFocused')).toEqual(true)
})
