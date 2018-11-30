import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import BookCard from '../components/BookCard'

const mapDispatchToProps = dispatch => ({
  onClickAdd: book => dispatch(addToCart(book))
})

export default connect(
  null,
  mapDispatchToProps
)(BookCard)
