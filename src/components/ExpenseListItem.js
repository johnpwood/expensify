import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description = '', amount = -1, createdAt=0 } ) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}:</h3></Link>
        <p>Created at: {createdAt}</p>
        <p>amount: {amount}</p>
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
