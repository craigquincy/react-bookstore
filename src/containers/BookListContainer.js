import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import BookList from '../components/BookList'

const mapStateToProps = state => ({
  books: state.books
})

export default connect(
  mapStateToProps,
  null
)(BookList)
