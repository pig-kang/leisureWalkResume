<template>
  <div>
    <transition name="fade">
      <div v-if="alertLogin" class="alert alert-success text-center" style="width: 10rem;" role="alert">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        账号密码错误</div>
    </transition>
    <div class="registerForm ">
      <img src="../../static/indexLogo3.png" class="logo mt-4 mb-2" @click="backIndex" />
      <form class="mt-4" @submit.prevent="loginForm">
        <div class="form-group row">
          <label for="inputEmail" class="col-sm-3 col-form-label ">邮箱</label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="inputEmail" placeholder="输入邮箱" v-model="formData.email">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label">密码</label>
          <div class="col-sm-8">
            <input type="password" class="form-control" id="inputPassword" placeholder="输入密码" v-model="formData.password">
          </div>
        </div>
        <div class="form-group row pt-3">
          <div class="col-sm-6 offset-md-3">
            <button type="submit" class="btn btn-primary btn-block">登陆</button>
          </div>
        </div>
      </form>
      <div class="footer-tip active" @click="toRegister">没有账号？直接注册👉</div>
    </div>
    <img class="bg_bottom" src="../assets/bg_bottom.png" />
    <img class="bg_bottom2" src="../assets/bg_bottom2.png" />
  </div>
</template>

<style>
  .registerForm {
    background: #fff;
    border: 1px solid #ededed;
    width: 450px;
    height: 320px;
    margin: 200px auto auto auto;
    box-shadow: 0px 5px 8px #888;
    border-radius: 8px;
    position: relative;
    text-align: center;
  }
  
  .loginForm {
    padding: 0 36px;
  }
  
  .el-form-item__content {
    margin-left: 0px !important;
  }
  
  .loginInput {
    width: 100%;
  }
  
  .bg_bottom {
    position: fixed;
    bottom: 0;
    right: 0;
  }
  
  .bg_bottom2 {
    position: fixed;
    bottom: 0;
    left: 0;
  }
  
  .logo {
    width: 150.5px;
    height: 35px;
  }
  
  .loginBtn {
    width: 100%;
  }
</style>

<script>
  export default {
    data() {
      return {
        formData: {
          email: "",
          password: "",
        },
        alertLogin: false,
      };

    },
    methods: {
      backIndex() {
        this.$router.push({
          name: 'index'
        });
      },
      toRegister() {
        this.$router.push({
          name: 'register'
        });
      },
      loginForm() {
        let param = new URLSearchParams()
        let url = 'http://127.0.0.1:8080/user/login'
        let _this = this
        param.append('userEmail', this.formData.email)
        param.append('userPassword', this.formData.password)
        this.$axios.post(url, param)
          .then(function(response) {
            let userinfo = response.data.detail;
            if (response.data.success) {
              window.localStorage.setItem('userName', userinfo.userName)
              window.localStorage.setItem('userId', userinfo.userId)
              _this.$store.dispatch('setUser', userinfo)
              window.localStorage.setItem('isLogin', _this.$store.state.isLogin)
              _this.$router.push({
                name: 'index'
              });
            } else {
              _this.alertLogin = true;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
</script>
