<template>
  <div class="myResume-wrapper container mt-5">
    <div class="modal fade" id="GPAModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title font-weight-bold" style="font-size: 19px;">GPA计算器</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body mx-4">
            <div>
              <div class="row gpa-text">
                <p>为了方便 HR 衡量候选人，推荐将成绩绩点转换为 4.0 国际标准。</p>
                <p>将你的绩点和学校的总分标准输入到下方框内。</p>
              </div>
              <div class="row pb-2 gpa-text">
                <b>案例：</b>
              </div>
              <div class="row gpa-text pb-4">
                <p>1. 满分为 5.0，绩点为 3.75，在绩点框内输入 3.75，在总分框内输入 5.0；</p>
                <p>2. 满分为 100分，绩点为 87 分，在绩点框内输入 87，在总分框内输入 100。</p>
              </div>
              <div class="row mb-3">
                <div class="col-5">
                  <input class="form-control" placeholder="绩点" />
                </div>
                <div class="col-5">
                  <input class="form-control" placeholder="总分" />
                </div>
                <div class="col-2">
                  <button class="btn btn-success" @click="showGPA">转换</button>
                </div>
              </div>
              <div v-show="isShowGPA">
                <span>你的GPA是：<strong style="font-size: 20px;">{{gpaScore}}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="card mb-4">
          <div class="card-body">
            <a data-target="#exampleModal" data-toggle="modal">新建简历</a>
            <!-- 新建简历modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog" role="document" id="createResumeModal">
                <div class="modal-content" id="createResumeContent">
                  <div class="modal-body">
                    <create-resume></create-resume>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-group" id="list-tab" role="tablist">
          <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home"
            role="tab" aria-controls="home">我的简历</a>
          <a class="list-group-item list-group-item-action" id="list-profile-list" href="" role="tab" aria-controls="profile">更多简历模板</a>
          <a class="list-group-item list-group-item-action" id="list-messages-list" href="https://www.jiandanxinli.com/activity/wonder_cv"
            role="tab" aria-controls="messages">职业测试</a>
          <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="modal" data-target="#GPAModal"
            role="tab">GPA 计算器</a>
        </div>
      </div>
      <div class="col-9">
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
            <div>
              <ul class="list-unstyled">
                <li v-for="(item) in data" @click="toMyresumeEdite(item.resumeId)" :class="[isActive?'alive':'']">
                  <div class="item-wrapper">
                    <div class="item-content">
                      <div class="file-icon">
                        <img src="../../static/icon.png" style="height: 46.4px; width: 44.8px;" />
                      </div>
                      <div class="ml-5">
                        <p class="item-resume-name">{{ item.resumeName }}</p>
                        <span class="resume-tag-lang">中</span>
                        <span class="resume-tag-category">零基础实习模板</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import createResume from '../components/createResume.vue'
  var userId = window.localStorage.getItem('userId')
  export default {
    components: {
      createResume
    },
    data() {
      return {
        data: [],
        resumeId: '',
        isActive: false,
        isShowGPA: false,
        gpaScore: '4.0'
      }
    },
    methods: {
      toMyresumeEdite(id) {
        this.$router.push({
          path: '/myResumeEdite/' + id + '/edite'
        })
      },
      resumeShadow() {
        this.isActive = true
      },
      showGPA() {
        this.isShowGPA = true
      }
    },
    mounted() {
      let _this = this
      let url = 'http://127.0.0.1:8080/resume/qryResumeInfo'
      let param = new URLSearchParams()
      param.append("userId", userId)
      this.$axios.post(url, param).then(function(response) {
        _this.data = response.data.data
        console.log(_this.data)
      })
    }
  }
</script>

<style>
  #createResumeModal {
    max-width: none;
    margin: 1.75rem auto;
  }
  #createResumeContent {
    background-color: transparent;
    border: inherit;
  }

  .item-wrapper {
    border-bottom: 1px solid #dedfe1;
    border-top: 1px solid #dedfe1;
    border-left: 1px solid #dedfe1;
    border-right: 1px solid #dedfe1;
  }

  .item-content {
    padding: 30px 20px;
    display: flex;

  }

  .file-icon {
    width: 120px;
    height: 120px;
    border: 1px solid #DEDFE1;
    border-radius: 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    font-size: 30px;
    color: #50a4ff;
  }

  .item-resume-name {
    font-size: 16px;
    font-weight: bold;
    color: #404040;
  }

  .resume-tag-lang {
    background: #D5E9FF;
    color: #398DEE;
  }

  .resume-tag-category {
    background: #F1F2F6;
  }

  .item-content span {
    height: 24px;
    text-align: center;
    line-height: 24px;
    display: inline-block;
    border-radius: 2px;
    padding: 0 10px;
    font-size: 13px;
  }

  .alive {
    -webkit-box-shadow: 0 0 20px #ddd;
  }

  #GPAModal .modal-dialog {
    max-width: 600px;
  }

  .gpa-text {
    font-size: 14px;
  }
</style>
