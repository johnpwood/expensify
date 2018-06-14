export default (expenses) => {
    return expenses.reduce((acc, x) => acc + x.amount, 0)
}
