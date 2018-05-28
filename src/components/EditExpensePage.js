import React from 'react';
import { connect } from 'react-redux'

import { editExpense, removeExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends React.Component {
    onEdit = expense => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeExpense(this.props.expense.id)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onEdit} />
                <button
                    onClick={this.onRemove}>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: id => dispatch(removeExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

