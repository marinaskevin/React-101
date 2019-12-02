import React from 'react';
import './List.css';

class List extends React.Component {
  render() {
    let userList = this.props.users.map((user,index) => {
      if(user === this.props.loggedIn) {
        return ( <li key={index} className="logged-in">{user}</li> );
      } else {
        return ( <li key={index}>{user}</li> );
      }
    });
    return (
      <div>
        <h1>The List Component</h1>
        <ul>
          {userList}
        </ul>
      </div>
    );
  }
}

export default List;
