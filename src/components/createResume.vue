<template>
  <div class="list-tempalte">
    <ul class="d-flex justify-content-center row list-unstyled">
      
      <!-- 学生求职模板 -->
      <li>
        <div class="card h-100 father">
          <div class="child1">
            <span class="d-flex justify-content-center pt-5">
              <img class="card-img-top list-tempalte-img" src="https://files.wondercv.com/tpl-college.png" alt="Card image cap">
            </span>
            <div class="card-body">
              <p class="card-title text-center">学生求职模板</p>
              <p class="card-text">此模板适用于学生找实习或全职工作，有一定实习经历的同学</p>
            </div>
          </div>
          <div class="child2">
            <div class="d-flex justify-content-center ">
              <button class="btn btn-danger" @click="resumeModel">中文模板</button>
            </div>
          </div>
        </div>
      </li>
      
      <!-- 零经验实习 -->
      <li>
        <div class="card h-100 father">
          <div class="child1">
            <span class="d-flex justify-content-center pt-5">
              <img class="card-img-top list-tempalte-img" src="https://files.wondercv.com/zero-exp-icon.png" alt="Card image cap">
            </span>
            <div class="card-body">
              <p class="card-title text-center">零经验实习模板</p>
              <p class="card-text">此模板适用于学生找实习，第一次工作，没有实习经验的同学</p>
            </div>
          </div>
          <div class="child2">
            <div class="d-flex justify-content-center ">
              <button class="btn btn-danger">中文模板</button>
            </div>
          </div>
        </div>
      </li>
      
      <!-- 申请研究生模板 -->
      <li>
        <div class="card h-100 father">
          <div class="child1">
            <span class="d-flex justify-content-center pt-5">
              <img class="card-img-top list-tempalte-img" src="https://files.wondercv.com/grad-temp-cn-icon@2x.png" alt="Card image cap">
            </span>
            <div class="card-body">
              <p class="card-title text-center">申请研究生模板</p>
              <p class="card-text">此模板适用于学生申请国内及海外的研究生，或考研复试时使用</p>
            </div>
          </div>
          <div class="child2">
            <div class="d-flex justify-content-center ">
              <button class="btn btn-danger">中文模板</button>
            </div>
          </div>
        </div>
      </li>
      
      <!-- 本科留学模板 -->
      <li>
        <div class="card h-100 father">
          <div class="child1">
            <span class="d-flex justify-content-center pt-5">
              <img class="card-img-top list-tempalte-img" src="https://files.wondercv.com/tpl-plane.png" alt="Card image cap">
            </span>
            <div class="card-body">
              <p class="card-title text-center">本科留学模板</p>
              <p class="card-text">此模板仅适用于高中生，申请国外本科留学，有针对性的英文案例和引导</p>
            </div>
          </div>
          <div class="child2">
            <div class="d-flex justify-content-center ">
              <button class="btn btn-danger">中文模板</button>
            </div>
          </div>
        </div>
      </li>
      
      <!-- 经典工作模板 -->
      <li>
        <div class="card h-100 father">
          <div class="child1">
            <span class="d-flex justify-content-center pt-5">
              <img class="card-img-top list-tempalte-img" src="https://files.wondercv.com/tpl-classic.png" alt="Card image cap">
            </span>
            <div class="card-body">
              <p class="card-title text-center">经典工作模板</p>
              <p class="card-text">此模板适用于工作经验一年以上，想要变动工作的人士，适用于全行业</p>
            </div>
          </div>
          <div class="child2">
            <div class="d-flex justify-content-center ">
              <button class="btn btn-danger">中文模板</button>
            </div>
          </div>
        </div>
      </li>
      
      <!-- 投行咨询模板 -->
      <li>
        <div class="card h-100 father">
          <div class="child1">
            <span class="d-flex justify-content-center pt-5">
              <img class="card-img-top list-tempalte-img" src="https://files.wondercv.com/tpl-investment.png" alt="Card image cap">
            </span>
            <div class="card-body">
              <p class="card-title text-center">投行咨询模板</p>
              <p class="card-text">此模板适用于寻求投行，咨询，四大或外企工作岗位的人士</p>
            </div>
          </div>
          <div class="child2">
            <div class="d-flex justify-content-center ">
              <button class="btn btn-danger">中文模板</button>
            </div>
          </div>
        </div>
      </li>
      
      <!-- 产品经理模板 -->
      <li>
        <div class="card h-100 father">
          <div class="child1">
            <span class="d-flex justify-content-center pt-5">
              <img class="card-img-top list-tempalte-img" src="https://files.wondercv.com/tpl-pm.png" alt="Card image cap">
            </span>
            <div class="card-body">
              <p class="card-title text-center">产品经理模板</p>
              <p class="card-text">此模板适用于申请互联网行业的产品相关岗位，有针对性的模块和引导</p>
            </div>
          </div>
          <div class="child2">
            <div class="d-flex justify-content-center ">
              <button class="btn btn-danger">中文模板</button>
            </div>
          </div>
        </div>
      </li>
      
      <!-- 程序员模板 -->
      <li>
        <div class="card h-100 father">
          <div class="child1">
            <span class="d-flex justify-content-center pt-5">
              <img class="card-img-top list-tempalte-img" src="https://files.wondercv.com/tpl-programmer.png" alt="Card image cap">
            </span>
            <div class="card-body">
              <p class="card-title text-center">程序员模板</p>
              <p class="card-text">此模板适用于互联网行业的程序员和技术求职者找全职工作、跳槽时使用</p>
            </div>
          </div>
          <div class="child2">
            <div class="d-flex justify-content-center ">
              <button class="btn btn-danger">中文模板</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  var userId = window.localStorage.getItem('userId')
  export default {
    props: {
      listTempalte: {
        type: String
      }
    },
    data() {
      return {
        resumeId: ''
      }
    },
    methods: {
      resumeModel() {
        let _this = this
        let url = 'http://127.0.0.1:8080/resume/insertResumeData'
        let param = new URLSearchParams()
        param.append("userId", userId)
        this.$axios.post(url, param).then(function(response) {
          _this.resumeId = response.data.detail
          $('#exampleModal').modal('hide')
          _this.$router.push({
            path: '/myResumeEdite/' + _this.resumeId + '/edite'
          })
        })
      }
    }
  }
</script>

<style>
  .father:hover .child2 {
    display: block;
  }

  .father:hover .child1 {
    display: none;
  }

  .fater {
    width: 240px;
    height: 240px;
  }

  .child2 {
    display: none;
    margin-top: 100px;
  }

  .list-tempalte {
    margin: auto 13rem;
  }

  .list-tempalte-img {
    width: 71px;
    height: 60px;
  }

  .card-text {
    margin-top: 14px;
    font-size: 14px;
    color: #9c9c9c;
  }

  .list-tempalte ul li {
    margin-right: 28px;
    margin-top: 30px;
    width: 240px;
    height: 240px;
    box-shadow: 0px 0px 8px #ddd;
    border-radius: 10px;
    background: #fff;
    margin-left: 10px;
    padding: 0;
  }
</style>
