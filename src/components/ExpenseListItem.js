import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description = '', amount = -1, createdAt=0 } ) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}:</h3></Link>
        <p>Created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>
        <p>amount: {numeral(amount/100).format('$0,0.00')}</p>
    </div>
)
ExpenseListItem.propTypes = {
    dispatch: PropTypes.func,
    id: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.number,
    createdAt: PropTypes.number
}

export default ExpenseListItem;
