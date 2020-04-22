<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-white" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../../../static/indexLogo3.png" class="indexLogo" @click="index" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="##" @click="isMyResume">我的简历<span class="sr-only">(curriculum vitae)</span></a>
            <a class="nav-item nav-link" href="http://127.0.0.1:3000/#/amendResume">简历修改</a>
            <a class="nav-item nav-link" href="http://127.0.0.1:3000/#/strategy">简历攻略</a>
          </div>
        </div>
        <div v-show="!isLogin()">
          <button class="btn btn-outline-success mr-2" type="submit" @click="register">注册</button>
          <button class="btn btn-outline-success" type="submit" id="btnLogin" @click="login">登录</button>
        </div>
        <div v-show="isLogin()" class="dropdown">
          <button class="btn btn-outline-success mr-2 dropdown-toggle" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">您好! {{userName}}</button>
          <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="http://127.0.0.1:3000/#/ploblemFeedback/">问题反馈</a>

            <a class="dropdown-item" href="http://127.0.0.1:3000/#/setting/">账号设置</a>
            <a class="dropdown-item" href="#" @click="logOut">登出</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
  .indexLogo {
    width: 150.5px;
    height: 35px;
  }

  .navbar-expand-lg {
    left: auto;
    right: auto;
  }

  #mainNav {
    border-bottom: 1px solid rgba(33, 37, 41, .1);
  }
</style>

<script>
  export default {
    data() {
      return {
        userName: '',
      }
    },
    methods: {
      login() {
        this.$router.push({
          name: 'login'
        })
      },
      register() {
        this.$router.push({
          name: 'register'
        })
      },
      index() {
        this.$router.push({
          name: 'index'
        })
      },
      logOut() {
        this.$store.commit('userStatus', null)
        this.$router.push({
          name: 'login'
        })
      },
      isLogin() {
        var isLogin = window.localStorage.getItem('userName')
        if (isLogin != "null") {
          this.$store.commit('userStatus', isLogin)
          this.userName = isLogin;
        } else {
          this.$store.commit('userStatus', null)
        }
        return this.$store.state.isLogin
      },
      isMyResume() {
        let isLogin = this.$store.state.isLogin
        if (isLogin) {
          this.$router.push({
            name: 'myResume'
          })
        } else {
          alert("请先登录")
          this.$router.push({
            name: 'login'
          })
        }
      }
    }
  }
</script>
