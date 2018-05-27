import moment from 'moment'
import { setTextFilter,
         sortByDate,
         sortByAmount,
         setStartDate,
         setEndDate } from '../../actions/filters'

test('should create appropriate SET_START_DATE action', () => {
    const act = setStartDate(moment(0))
    expect(act).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should create appropriate SET_END_DATE action', () => {
    const act = setEndDate(moment(0))
    expect(act).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should create appropriate action to set the text filter.', () => {
    let act = setTextFilter('filter')
    expect(act).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'filter'
    })
    act = setTextFilter()
    expect(act).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should create appropriate SORT_BY_DATE action', () => {
    let act = sortByDate()
    expect(act).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate appropriate SORT_BY_AMOUNT actions', () => {
    const act = sortByAmount()
    expect(act).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

