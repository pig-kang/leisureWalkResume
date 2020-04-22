// 更改用户状态信息
export const userStatus = (state, user) => {
  if (user) {
    state.currentUser = user
    state.isLogin = true
  } else if (user == '') {
    // 登出的时候，清空sessionStorage里的东西
    sessionStorage.setItem('userName', '')
    state.currentUser = ''
    state.isLogin = false
    state.token = ''
  }
}
// 用户头像
// export const userImageGet = (state, imageUrl) => {
//   if (imageUrl) {
//     state.userImage = imageUrl
//   } else if (imageUrl == null) {
//     state.userImage = null
//   }
// }

// 用户token
// export const userToken = (state, userToken) => {
//   if (userToken) {
//     state.token = userToken
//   } else {
//     state.token = null
//   }
