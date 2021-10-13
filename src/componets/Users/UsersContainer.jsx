import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow,toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../../componets/Common/Preloader/Preloader';
import usersAPI from '../../api/usersAPI'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
        {this.props.isFetching ? <Preloader/>: null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged= {this.onPageChanged}
                      sers = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow} 
                      followingInProgress = {this.props.toggleFollowingInProgress}
                      
        />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.userPage.users, ///state.usersPage.users
        pageSize: state.usersPage.PageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}

//let mapDispatchToProps = (dispatch) => {
// return {
//     follow: (userId) => {
//         dispatch(followAC(userId))
//     },
//      unfollow: (userId) => {
//         dispatch(unfollowAC(userId))
//      },
//     setUsers: (users) => {
//          dispatch(setUserAC(users))
//      },
//       setCurrentPage: (pageNumber) => {
//           dispatch(setCurrentPageAC(pageNumber))
//       },
//       setTotalUsersCount: (totalCount) => {
//            dispatch(setTotalUsersCountAC(totalCount))
//        },
//      toggleIsFetching: (isFetching) => {
///           dispatch(setToggleIsFetchingAC(isFetching))
//        }
//    }
//}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers 
})(UsersContainer);