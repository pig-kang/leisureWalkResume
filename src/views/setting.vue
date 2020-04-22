<template>
  <div>
    <my-menu class="myMenu"></my-menu>
    <!-- 修改密码模态框 -->
    <form @submit="changePassword">
      <div class="modal fade" aria-labelledby="exampleModalLabel" id="passwordModal" aria-hidden="true" tabindex="-1"
        role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">修改密码</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label class="col-form-label">
                  原密码:
                </label>
                <input type="password" class="form-control" />
              </div>
              <div class="form-group">
                <label class="col-form-label">
                  新密码：
                </label>
                <input type="password" class="form-control" v-model="newPassword" />
              </div>
              <div class="form-group">
                <label class="col-form-label">
                  重复新密码：
                </label>
                <input type="password" class="form-control" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
              <button type="submit" class="btn btn-primary">保存</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="myResume-wrapper container mt-5">
      <div class="row">
        <div class="col-3">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-setting-list" data-toggle="list" href="#list-setting"
              role="tab" aria-controls="setting">账号设置</a>
            <a class="list-group-item list-group-item-action" id="list-more-list" data-toggle="list" href="#list-more"
              role="tab" aria-controls="more">更多内容待开发</a>
          </div>
        </div>
        <div class="col-9">
          <div class="tab-content mb-5" id="nav-tabContent">
            <div class="tab-pane fade show active" id="list-setting" role="tabpanel" aria-labelledby="list-setting-list">
              <!-- 基本信息 -->
              <div class="user-info-wrapper shadow">
                <div class="user-info-content px-5 py-5" v-show="isInfo">
                  <div class="row">
                    <div class="col-9 mb-5">
                      <h3 class="mt-1">基本信息</h3>
                    </div>
                    <div class="col-3 text-right">
                      <button class="btn btn-success" @click="EditerInfo">编辑</button>
                    </div>
                  </div>
                  <div class="row mb-5" style="height: 38px;">
                    <div class="col-2">昵称</div>
                    <div class="col-10">{{name}}</div>
                  </div>
                  <div class="row mt-4" style="height: 38px;">
                    <div class="col-2">用户邮箱</div>
                    <div class="col-10">{{email}}</div>
                  </div>
                </div>

                <form v-show="!isInfo" @submit="savaInfo">
                  <div class="user-info-content px-5 py-5 shadow">
                    <div class="row">
                      <div class="col-9 mb-5">
                        <h3 class="mt-1">基本信息</h3>
                      </div>
                      <div class="col-3 text-right">
                        <button class="btn btn-success">保存</button>
                      </div>
                    </div>
                    <div class="row mb-5">
                      <div class="col-2">昵称</div>
                      <div class="col-10">
                        <input class="form-control w-50" v-model="name" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2">用户邮箱</div>
                      <div class="col-10">
                        {{email}}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!-- 修改密码 -->
              <div class="user-password-wrapper mt-3 ">
                <div class="user-password-content  px-5 py-5 shadow">
                  <div class="row">
                    <div class="col-9 mb-5">
                      <h3>账户安全</h3>
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-10">
                      <p class="mt-1">密码安全</p>
                    </div>
                    <div class="col-2">
                      <button class="btn btn-success" data-toggle="modal" data-target="#passwordModal">修改密码</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="list-more" role="tabpanel" aria-labelledby="list-more-list">
              更多菜单开发ing.....
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import menu from '../components/common/menu.vue'
  var userId = window.localStorage.getItem('userId')
  export default {
    components: {
      'my-menu': menu
    },
    methods: {
      EditerInfo() {
        this.isInfo = false
      },
      // 修改用户密码
      changePassword() {
        let _this = this
        let url = 'http://127.0.0.1:8080/user/updateUserInfo'
        let param = new URLSearchParams()
        param.append("userId", userId)
        param.append("userPassword", this.newPassword)
        this.$axios.post(url, param).then(function(response) {
          _this.data = response.data.data
          // window.localStorage.setItem('userName',response.)
          alert("修改成功")
          _this.$router.push({
            name: 'login'
          })
        })
        $('#passwordModal').modal('hide')

      },
      // 更新用户基本信息
      savaInfo() {
        let _this = this
        let url = 'http://127.0.0.1:8080/user/updateUserInfo'
        let param = new URLSearchParams()
        param.append("userId", userId)
        param.append("userName", this.name)
        this.$axios.post(url, param).then(function(response) {
          _this.data = response.data.data
          // window.localStorage.setItem('userName',response.)
          alert("保存成功")
        })
        this.isInfo = true
      }
    },
    data() {
      return {
        isInfo: true,
        realName: '朱名康',
        name: 'pigkang',
        email: '1085426636@qq.com',
        newPassword: ''
      }
    },
    mounted() {
      let _this = this
      let url = 'http://127.0.0.1:8080/user/qryUserInfo'
      let param = new URLSearchParams()
      param.append("userId", userId)
      this.$axios.post(url, param).then(function(response) {
        _this.name = response.data.detail.userName
        _this.email = response.data.detail.userEmail
      })
    }
  }
</script>

<style>
  .user-info-wrapper {}

  .user-password-wrapper {
    height: 300px;
  }

  .user-info-content {
    height: 100%;
  }

  .user-password-content {
    height: 100%;
  }
</style>
