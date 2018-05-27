import React from 'react'
import { shallow } from 'enzyme'

import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render one expense passed through props', () => { 
    const wrapper = shallow(<ExpenseListItem { ...expenses[1] } />)
    expect(wrapper).toMatchSnapshot()
    const wrapper2 = shallow(<ExpenseListItem { ...expenses[2] } />)
    expect(wrapper2).toMatchSnapshot()
})
