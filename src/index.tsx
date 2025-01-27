import { ApolloProvider } from "@apollo/client";
import { ModalProvider } from "@modal/ModalProvider";
import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { graphqlClient } from "./graphql/client";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={graphqlClient}>
      <HelmetProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </HelmetProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
