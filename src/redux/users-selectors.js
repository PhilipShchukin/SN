import { createSelector } from "reselect"

const gettUsersSelector = (state) => {
    return state.usersPage.users 
}

export const gettUsers = createSelector (gettUsersSelector,(users) => {
    return users.filtet(u=> true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}


export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}


export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}


export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.userPage.followingInProgress
}

export const countSomethingDifficult = (state) => {
    let count = 23
    return count
}