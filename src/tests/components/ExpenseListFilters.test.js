import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => { 
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate} />
    )
})

test('should render ExpenseListFilters', () => { 
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alternate filters', () => { 
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => { 
    wrapper.find('input').simulate('change', { target: { value: 'new text filter' } })
    expect(setTextFilter).toHaveBeenLastCalledWith('new text filter')
})

test('should sort by date', () => { 
    wrapper.find('select').simulate('change', { target: { value: 'date' } })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => { 
    wrapper.find('select').simulate('change', { target: { value: 'amount' } })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date change', () => { 
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate: 100, endDate: 105 })
    expect(setStartDate).toHaveBeenLastCalledWith(100)
    expect(setEndDate).toHaveBeenLastCalledWith(105)
})

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('endDate')
    expect(wrapper.state('calendarFocused')).toBe('endDate')
})
