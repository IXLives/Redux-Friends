import React from "react";
import { connect } from "react-redux";
import {withRouter, Link} from 'react-router-dom'



class Dashboard extends React.Component {

 
  logout = (e) => {
      e.preventDefault()
      localStorage.removeItem('token')
      this.props.history.push('/login')
  }

  render() {
    return (
      <>
        <h1>Friends</h1>
        <Link to ='/friends'>Friends List</Link><br/>
        <button onClick = {this.logout}>Logout</button>
      </>
    );
  }
}

export default withRouter(Dashboard);

