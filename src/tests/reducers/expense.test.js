import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(
        [expenses[0], expenses[2], expenses[3]]
    )
})

test('should not remove any expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})


test('should add an expense', () => {
    const expense = {
        description: 'added expense',
        id: 'new id',
        amount: 222
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses.concat([expense]))
})

test('should edit an expense', () => {
    const updates = {
        description: 'new description',
        note: 'new note'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        expenses[0], expenses[1], { ...expenses[2], ...updates }, expenses[3]
    ])
})

test('should not edit an expense if the expense is not found', () => {
    const updates = {
        description: 'new description',
        note: 'new note'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'not an id!',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
