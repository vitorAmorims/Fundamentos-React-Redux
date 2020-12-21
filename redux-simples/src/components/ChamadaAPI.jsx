import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/actions/asyncActions";

class UserContainer extends React.Component {
  componentDidMount() {
    fetchUsers()
  }
  render() {
    // console.log(this.props)
    const { userData } = this.props;
    // console.log(userData)
    const { data } = userData;
    // console.log(data);
    if (data.loading) {
      return <h2>Loading...</h2>;
    }
    if (data.error) {
      return <h2>{data.error}</h2>;
    }
    const { users } = data;
    console.log(users);
    const listUsers = users.map((user) => <li  key={user}>{user}</li>);
    if (users.length > 0) {
      return (
        <div>
          <h2>User List</h2>
          <ul>{listUsers}
            {/* {data.users.map((user) => (
              <p key={user.name}>{user.name}</p>
            ))} */}
          </ul>
        </div>
      );
    }
  }
}

// function UserContainer(props) {
//   useEffect(() => {
//     fetchUsers()
//   });

//   if (props.data.loading) {
//     return <h2>Loading...</h2>;
//   }
// if (asyncReducer.error) {
//   return <h2>{asyncReducer.error}</h2>;
// }
// if (asyncReducer.users.length > 0) {
//   return (
//     <div>
//       <h2>User List</h2>
//       <div>
//         {asyncReducer.users.map((user) => <p>{user.name}</p>)}
//       </div>
//     </div>
//   );
// }
// }

function mapStateToProps(state) {
  console.log(state);
  return {
    userData: state,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // fetchUsers: () => dispatch(fetchUsers())
    fetchUserForApp() {
      // action creator -> action
      const action = fetchUsers();
      return dispatch(action); //esta action será passado para todos os reducers
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
