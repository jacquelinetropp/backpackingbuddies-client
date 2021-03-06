import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";
import AuthRoute from "./util/AuthRoute.js";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import User from "./pages/User";
import CreateDetails from "./pages/CreateDetails";
import HomePosts from "./pages/HomePosts";
import Explore from "./pages/Explore";

import "./App.css";

import Navbar from "./components/layout/navbar";
import Axios from "axios";

const theme = createMuiTheme(themeFile);

Axios.defaults.baseURL =
  "https://us-central1-backpackingbuddies-97109.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    Axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={HomePosts} />
            <Route exact path="/explore" component={Explore} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/signup" component={Signup} />
            <Route exact path="/user/:handle" component={User} />
            <Route exact path="/user/:handle/post/:postId" component={User} />
            <Route exact path="/createprofile" component={CreateDetails} />
          </Switch>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
