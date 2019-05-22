import numeral from 'numeral'

const coursePrice = numeral(1000).format('$0,00.00')
console.log(`I would like to pay ${coursePrice} for this awesome course.`)