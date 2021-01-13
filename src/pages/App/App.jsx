import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";
import Patrick from '../Patrick/Patrick'
import Sophia from '../Sophia/Sophia'
import Brittany from '../Brittany/Brittany'

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
      }],
    sophiasThings: [
      {
        name: 'cats',
        image: 'http://placekitten.com/200/300',
        attributes: ['fuzzy, ', 'cute, ', 'assholes']
      },
      {
        name: 'fries',
        image: 'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg',
        attributes: ['crispy, ', 'fluffy, ', 'hot']
      },
      {
        name: 'wine',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfaBYduYGaVP6WsfPIghjSFtFzarCvntcOsmJ7KxMrikA_uETJJGnoN9UGvui895FCe_4tA&usqp=CAc',
        attributes: ['tasty, ', 'boozy, ', 'fun']
      }
    ],
    brittanyThings:[
      { 
        name: 'banana',
        image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        attributes: ['potassium-rich', 'yellow when good', 'not a taco', 'ring ring ring ring ring ring ring']
      },
      {
        name: 'turkey',
        image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        attributes: ['such gobbles', 'good when stuffed', 'not a taco', 'why gravy exists']
      },
      {
        name: 'taco',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'linux',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
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
              <h1>Welcome. These are all our things!</h1>
              {this.state.patricksThings.map((thing) => (
                <div>
                  {thing.name}
                  <img src={thing.image} alt='' height='50' width='50' />
                  {thing.attributes}
                </div>
                 ))}

                {this.state.sophiasThings.map((thing) => (
                <div>
                  {thing.name}
                  <img src={thing.image} alt='' height='50' width='50' />
                  {thing.attributes}
                </div>
                 ))}

              {this.state.brittanyThings.map((thing) => (
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

       <Route exact path='/sophia' render={() => (
         <Sophia 
           sophiasThings={this.state.sophiasThings}
         />

       )}
       />
        <Route
          exact
          path='/brittany'
          render={() => <Brittany brittanyThings={this.state.brittanyThings} />}
        />
       </>
    );
  }
}

export default App;
