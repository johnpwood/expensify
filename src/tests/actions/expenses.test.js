import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should set up remove expense action object', () => {
    const act = removeExpense('abc123')
    expect(act).toEqual({ type: 'REMOVE_EXPENSE', id: 'abc123' })
})

test('Should return appropriate action to edit expense', () => {
    const act = editExpense('abc123', { note: 'new note value' })
    expect(act).toEqual(
        { type: 'EDIT_EXPENSE', id: 'abc123', updates: { note: 'new note value'} }
    )}
)

test('Should return appropriate action to add an expense with provided values', () => {
    const addend = {
        description: 'rent',
        amount: 50000,
        createdAt: 1000,
        note: 'This was some rent'
    }
    const act = addExpense(addend)
    expect(act).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...addend,
            id: expect.any(String)
        }
    })
})

test('Should return appropriate action to add an expense with missing properties', () => {
    const act = addExpense()
    expect(act).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})