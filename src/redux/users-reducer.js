import { useCallback } from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
     users: [
    //    {
      //      id: 1, photoUrl: 'https://yandex.by/images/search?from=tabbar&text=johnny%20cash&pos=27&img_url=https%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2Fs1080x1080%2F153766930_3731968010228492_5244246955663047709_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D108%26_nc_ohc%3Dm6D6grsGeSsAX8fGTov%26oh%3Db99a300169eb5a4ba63faba3f6a8f68a%26oe%3D60678954&rpt=simage&rlt_url=https%3A%2F%2Fcdn.fishki.net%2Fupload%2Fpost%2F2019%2F05%2F13%2F2976147%2F9b074d6874b45b7170a4e05fe5937bb3.jpg&ogl_url=https%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2Fs1080x1080%2F153766930_3731968010228492_5244246955663047709_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D108%26_nc_ohc%3Dm6D6grsGeSsAX8fGTov%26oh%3Db99a300169eb5a4ba63faba3f6a8f68a%26oe%3D60678954',
          //  followed: false, fullName: 'Philip', status: 'IAMABOSS', location: { city: 'Minsk', country: 'Belarus' }
        //},
        //{
          //  id: 2, photoUrl: 'https://yandex.by/images/search?from=tabbar&text=johnny%20cash&pos=27&img_url=https%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2Fs1080x1080%2F153766930_3731968010228492_5244246955663047709_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D108%26_nc_ohc%3Dm6D6grsGeSsAX8fGTov%26oh%3Db99a300169eb5a4ba63faba3f6a8f68a%26oe%3D60678954&rpt=simage&rlt_url=https%3A%2F%2Fcdn.fishki.net%2Fupload%2Fpost%2F2019%2F05%2F13%2F2976147%2F9b074d6874b45b7170a4e05fe5937bb3.jpg&ogl_url=https%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2Fs1080x1080%2F153766930_3731968010228492_5244246955663047709_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D108%26_nc_ohc%3Dm6D6grsGeSsAX8fGTov%26oh%3Db99a300169eb5a4ba63faba3f6a8f68a%26oe%3D60678954',
            //followed: true, fullName: 'Charly', status: 'IAMABOSS', location: { city: 'Moscow', country: 'Russia' }
        //},
        //{
        //    id: 3, photoUrl: 'https://yandex.by/images/search?from=tabbar&text=johnny%20cash&pos=27&img_url=https%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2Fs1080x1080%2F153766930_3731968010228492_5244246955663047709_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D108%26_nc_ohc%3Dm6D6grsGeSsAX8fGTov%26oh%3Db99a300169eb5a4ba63faba3f6a8f68a%26oe%3D60678954&rpt=simage&rlt_url=https%3A%2F%2Fcdn.fishki.net%2Fupload%2Fpost%2F2019%2F05%2F13%2F2976147%2F9b074d6874b45b7170a4e05fe5937bb3.jpg&ogl_url=https%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2Fs1080x1080%2F153766930_3731968010228492_5244246955663047709_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D108%26_nc_ohc%3Dm6D6grsGeSsAX8fGTov%26oh%3Db99a300169eb5a4ba63faba3f6a8f68a%26oe%3D60678954',
          //  followed: false, fullName: 'Jonny', status: 'IAMABOSS', location: { city: 'Los-Angeles', country: 'USA' }
        //},
    ],
    pageSize: 5,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage  }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount  }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, ifFetching: action.ifFetching  }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return { ...state, followingInProgress: action.ifFetching 
                ?  [ ...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter()   }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE , currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT , totalUsersCount })
export const setToggleIsFetching = (ifFetching) => ({ type: TOGGLE_IS_FETCHING , ifFetching })
export const toggleFollowingProgress = (ifFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS , ifFetching, userId })

export const getUsers = (currentPage, PageSize) =>{ 
    return (dispatch) => {
        dispatch(toggleIsFetching(true)); 
        dispatch(setCurrentPage(currentPage));
        
        usersAPI.getUsers(currentPage, PageSize).then(data => {
                dispatch(toggleIsFetching(false);
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId) =>{ 
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
        .then(response => {
            if (response.data.ruseltCode === 0) {
                dispatch(followSuccess(userId))
            };
            dispatch(toggleFollowingProgress(false, userId))
        });
}
export const unfollow = (userId) =>{ 
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
        .then(response => {
            if (response.data.ruseltCode === 0) {
                dispatch(unfollowSuccess(userId))
            };
            dispatch(toggleFollowingProgress(false, userId))
        });
}




export default usersReducer;
