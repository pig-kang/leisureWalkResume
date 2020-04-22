<template>
  <div>
    <div class="registerCard card border-success border-right-0 border-left-0 border-bottom-0">
      <h5 class="card-header">邮箱注册</h5>
      <div class="card-body">
        <form class="mt-4" @submit="registerForm">
          <div class="form-group row">
            <label for="inputName" class="col-sm-3 col-form-label">昵称</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="inputName" placeholder="输入昵称" v-model="formData.name">
            </div>
          </div>
          <div class="form-group row mt-4">
            <label for="inputEmail" class="col-sm-3 col-form-label">邮箱</label>
            <div class="col-sm-8">
              <input type="email" class="form-control" id="inputEmail" placeholder="输入邮箱" v-model="formData.email">
              <small class="form-text text-muted">你可以使用该邮箱登陆和找回密码</small>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">密码</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="inputPassword" placeholder="输入密码" v-model="formData.password">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword2" class="col-sm-3 col-form-label">重复密码</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="inputPassword2" placeholder="再次输入密码" v-model="formData.confirePassword">
            </div>
          </div>
          <div class="form-group row pt-3">
            <div class="col-sm-6 offset-md-3">
              <button type="submit" class="btn btn-primary btn-block ">注册</button>
            </div>
          </div>
        </form>
      </div>
      <div class="footer-tip3" @click="toLogin">已有账号?直接登录👉</div>
    </div>
    <img class="bg_bottom" src="../assets/bg_bottom.png" />
    <img class="bg_bottom2" src="../assets/bg_bottom2.png" />
  </div>
</template>

<style>
  .choice p {
    display: inline-block;
    width: 173px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #5a5a5a;
  }

  .choice p:first-child {
    border-right: 1px solid #ededed;
    font-weight: 700;
  }

  .registerCard {
    background: #fff;
    border: 1px solid #ededed;
    width: 440px;
    height: 440px;
    margin: 150px auto 150px auto;
    box-shadow: 0px 5px 8px #888;
    border-radius: 8px;
    position: relative;
    text-align: center;
  }

  .el-form-item__content {
    margin-left: 0px !important;
  }

  .hrruleForm {
    width: 500px;
    position: relative;
    top: 14px;
    left: -14px;
    padding: 14px 14px 14px 100px;
  }

  .choose {
    width: 100%;
  }

  .footer-tip3 {
    position: absolute;
    bottom: 16px;
    right: 16px;
    cursor: pointer;
    color: #5a5a5a;
  }

  .registerBtn {
    width: 100%;
  }

  .tips {
    margin-top: -20px;
    text-align: left;
    cursor: pointer;
    color: red;
    font-size: 14px;
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

  .introduceCompany {
    width: 100px;
    height: 100px;

  }

  .introduceCompany img {
    width: 300px;
    height: 300px;
    ;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .companyForm {
    padding: 0 66px;
  }
</style>

<script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          password: '',
          confirePassword: '',
        }
      }
    },
    methods: {
      toLogin() {
        this.$router.push({
          name: "login"
        })
      },
      registerForm() {
        let _this = this;
        let url = 'http://127.0.0.1:8080/user/register'
        let param = new URLSearchParams();
        param.append('userName', this.formData.name);
        param.append('userEmail', this.formData.email);
        param.append('userPassword', this.formData.password);

        if (_this.formData.password == _this.formData.confirePassword) {
          this.$axios.post(url, param)
            .then(function(response) {
              alert("注册成功")
              _this.$router.push({
                name: "login"
              })
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          alert("两次密码不同！")
        }
      }
    }
  }
</script>
