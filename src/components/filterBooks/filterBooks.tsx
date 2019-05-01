import * as React from "react";
import styles from "./filter.module.scss";

export interface IProps {}

export interface IState {
  isBookHidden: boolean;
}

class FilterBooks extends React.Component<IProps, IState> {
  public state = { isBookHidden: true };
  public render() {
    return (
      <section className={styles.show}>
        <form>
          <fieldset>
            <label className={styles.select}>Select year</label>
            <select id="Author">
              <option value="2000">2000's</option>
              <option value="1990">1990's</option>
              <option value="1980">1980's</option>
              <option value="1970">1970's</option>
              <option value="1900">1900's</option>
              <option value="1800">1800's</option>
            </select>
          </fieldset>
          <fieldset>
            <label className={styles.select}>Select genre</label>
            <select id="Author">
              <option value="Fiction">Fiction</option>
              <option value="Literary">Literary</option>
              <option value="Aeronautics">Aeronautics</option>
              <option value="History">History</option>
            </select>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default FilterBooks;
