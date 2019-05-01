import * as React from "react";
import styles from "./filter.module.scss";
import { connect } from "react-redux";
import { IStore } from "../../reducers";
import { fetchBooks } from "../../reducers/bookReducer";

export interface IOwnProps {}

export interface IStateProps {
  fetchBooks: (author: string) => void;
}

export interface IState {
  author: string;
}

class FilterAuthor extends React.Component<IOwnProps & IStateProps, IState> {
  public state = { author: "" };

  public render() {
    return (
      <form>
        <fieldset>
          <label className={styles.select}>Select Author</label>
          <select id="Author" onChange={this.handleChange}>
            <option value="Jane">Jane Austen</option>
            <option value="Isaac">Isaac Asimov</option>
            <option value="Dan">Dan Brown</option>
          </select>
        </fieldset>
      </form>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ author: event.target.value });
    fetchBooks(this.state.author);
  };
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {};
};

const mapDispatchToProps = { fetchBooks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterAuthor);
