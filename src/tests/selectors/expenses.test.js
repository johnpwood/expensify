import moment from 'moment'
import selectExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

test('Should filter by text value', () => { 
    const filters = {
        text: 're',
        sortBy: 'date'
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([
        expenses[2], expenses[1]
    ])
 })

 test('Should filter by start date', () => { 
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0)
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([
        expenses[2], expenses[0]
    ])
 })

 test('Should filter by end date', () => { 
    const filters = {
        text: '',
        sortBy: 'date',
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([
        expenses[0], expenses[3], expenses[1]
    ])
 })

 test('Should sort by amount', () => { 
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([
        expenses[3], expenses[0], expenses[2], expenses[1]
    ])
 })