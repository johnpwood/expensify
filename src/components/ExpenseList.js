import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses.</p>
            ) : (
                props.expenses.map(x => (<ExpenseListItem {...x} key={x.id} />))
            )
        }
        
    </div>
)
ExpenseList.propTypes = {
    expenses: PropTypes.array,
    filters: {

    }
}

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
