import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import totalExpenses from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpenseSummary = (props) => {
    const n = props.expenses.length
    return (
        <div>
            <p>Showing {n} expense{n === 1 ? '' : 's'} totalling {numeral(totalExpenses(props.expenses)/100).format('$0,0.00')}</p>
        </div>
    )
}

ExpenseSummary.propTypes = {
    expenses: PropTypes.array,
    filters: {

    }
}

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseSummary)
