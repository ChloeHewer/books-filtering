import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "../reducers/index";
import { fetchBooks, IBook } from "../reducers/bookReducer";
import Books from "../components/booksComponent/booksComponent";
import styles from "./booksContainer.module.scss";

export interface IOwnProps {}

export interface IStateProps {
  books: IBook[];
  fetchBooks: (authorName: string) => void;
}

export interface IState {
  filteredList: IBook[];
  author: string;
}

class BooksContainer extends React.Component<IOwnProps & IStateProps, IState> {
  public state = { filteredList: [], author: "" };

  public componentDidMount = () => {
    this.props.fetchBooks("Isaac Asimov");
  };

  public render() {
    return (
      <div>
        <section className={styles.forms}>
          <form>
            <fieldset>
              <label className={styles.author}>Select Author</label>
              <select id="Author" onChange={this.handleChange}>
                <option value="Jane Austen">Jane Austen</option>
                <option value="Isaac Asimov">Isaac Asimov</option>
                <option value="Dan Brown">Dan Brown</option>
              </select>
            </fieldset>
          </form>

          <form>
            <fieldset>
              <label className={styles.genre}>Select genre</label>
              <select id="Genre">
                <option value="Fiction">Fiction</option>
                <option value="Literary">Literary</option>
                <option value="Aeronautics">Aeronautics</option>
                <option value="History">History</option>
              </select>
            </fieldset>
          </form>
        </section>

        <section className={styles.books}>
          {this.props.books.map((book, index) => (
            <Books key={index} books={book} />
          ))}
        </section>
      </div>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ author: event.target.value }, () =>
      this.props.fetchBooks(this.state.author)
    );
  };
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {
    books: state.books.books
  };
};

const mapDispatchToProps = {
  fetchBooks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksContainer);
