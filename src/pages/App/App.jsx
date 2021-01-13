import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";
import Patrick from '../Patrick/Patrick'

class App extends Component {
  state = {
    user: authService.getUser(),
    patricksThings: [
      {
        name: "coffee",
        image:
          "https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg",
        attributes: ["energy, ", "caffeine, ", "yummy, "],
      },
      {
        name: "coding",
        image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg",
        attributes: ["computers, ","programming, "]
      },
    ],
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Route
          exact
          path='/'
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
              {this.state.patricksThings.map((thing) => (
                <div>
                  {thing.name}
                  <img src={thing.image} alt='' height='50' width='50' />
                  {thing.attributes}
                </div>
              ))}
            </main>
          )}
        />
        <Route
          exact
          path='/signup'
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path='/login'
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path='/users'
          render={() => (user ? <Users /> : <Redirect to='/login' />)}
        />
        <Route
          exact
          path='/patrick'
          render={() => <Patrick patricksThings={this.state.patricksThings} />}
        />
      </>
    );
  }
}

export default App;
