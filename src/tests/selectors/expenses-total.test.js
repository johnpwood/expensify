import totalExpenses from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses match', () => { 
    expect(totalExpenses([])).toBe(0)
})

test('should return value of single expense', () => {
    expect(totalExpenses([expenses[1]])).toBe(10095)
})

test('should return total amount of a list of expenses', () => {
    expect(totalExpenses(expenses)).toBe(12241)
})

