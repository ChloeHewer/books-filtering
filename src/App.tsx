import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import BooksContainer from "./containers/booksContainer";
import Header from "../src/components/header/header";
import FilterAuthor from "../src/components/filterBooks/filterAuthor";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <body>
            <BooksContainer />
          </body>
        </div>
      </Provider>
    );
  }
}

export default App;
