import moment from 'moment'

export default [
    {
        id:'abc123',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id:'bbc123',
        description: 'Rent',
        note: '',
        amount: 10095,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },{
        id:'cbc123',
        description: 'Credit Card',
        note: '',
        amount: 1950,
        createdAt: moment(0).add(4, 'days').valueOf()
    },{
        id:'dbc123',
        description: 'Grocery',
        note: 'a note',
        amount: 1,
        createdAt: moment(0).subtract(2, 'days').valueOf()
    },
]
