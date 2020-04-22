<template>
  <div>
    <my-menu class="myMenu"></my-menu>
    <form class="mb-5" @submit="feedbackForm">
      <div class="feedback-wrapper">
        <div class="feedback-content">
          <div class="form-group mb-5">
            <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="请留下您的联系邮箱">
          </div>
          <div class="form-group mb-5">
            <select class="form-control">
              <option>请选择反馈类型</option>
              <option>BUG反馈</option>
              <option>简历功能</option>
              <option>其他功能</option>
            </select>
          </div>
          <div class="form-group mb-5">
            <textarea class="form-control" style="height: 300px;" placeholder="请详细描述您的具体问题或建议"></textarea>
          </div>
          <div class="form-group d-flex justify-content-center">
            <button type="submit" class="btn btn-success" style="width: 200px;height: 50px;">提交问题</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import menu from '../components/common/menu.vue'
  export default {
    components: {
      'my-menu': menu
    },
    methods: {
      feedbackForm() {
        alert('提交成功')
      }
    }
  }
</script>

<style>
  .feedback-wrapper {
    margin: 60px 400px auto 400px;
    box-shadow: 0px 5px 8px #888;
  }

  .feedback-content {
    padding: 80px 60px;
  }

  .feedback-bg {
    background: ;
  }
</style>
