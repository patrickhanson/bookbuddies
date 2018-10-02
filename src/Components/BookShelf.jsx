import React from "react";
import { connect } from "react-redux";
import Book from "./Book.jsx";
import { Container, Grid, Button } from "semantic-ui-react";

class BookShelf extends React.Component {
  state = { booksToDisplay: [] };
  componentDidMount() {
    if (this.props.allBooks) {
      this.setState({ booksToDisplay: this.props.allBooks });
    }
  }

  defaultBooks() {
    return this.state.booksToDisplay.map(book => {
      console.log("book.userId", book.userId);
      return (
        <Book
          title={book.title}
          author={book.author}
          bookId={book.id}
          ownerId={book.userId}
          image={book.image}
          rating={book.rating}
          key={book.id}
          google={"false"}
        />
      );
    });
  }
  filterBooks = () =>{
    const filterBooksArray = this.state.booksToDisplay.filter(book =>{
     return book.title.includes(this.props.search)      
    })
      
  }

  render() {
    return (
      <React.Fragment>
      <Button onClick={this.filterBooks}>search</Button>
        <Grid container style={{ paddingTop: "3vh" }}>
          {this.defaultBooks()}
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { allBooks: state.books,
          ...state };
};

function mapDispatchToProps(dispatch) {
  return {};
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShelf);
export default Connect;
