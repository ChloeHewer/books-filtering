import * as React from "react";
import styles from "./header.module.scss";

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <ul className={styles.navBar}>
        <li className={styles.li}>This is your filtered books</li>
        <li className={styles.li}>sign in</li>
        <li className={styles.li}>Filter Books</li>
      </ul>
    );
  }
}

export default Header;
