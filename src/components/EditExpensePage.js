import React from 'react';
import { connect } from 'react-redux'

import { editExpense, removeExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
                }} />
            <button 
                onClick={()=>{
                    props.dispatch(removeExpense(props.match.params.id))
                    props.history.push('/')
                }}>Delete</button>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage);
