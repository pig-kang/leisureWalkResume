<template>
  <div class="checkPanel-wrapper">
    <div class="checkPanel-centent">
      <div class="row">
        <div class="col-6">
          <p class="font-weight-bold mt-1" style="font-size: 15px;">简历专业评分: {{score}}分</p>
        </div>
        <div class="clo-4 ml-5">
          <button class="btn btn-success" style="font-size: 14px;width: 100px;">检查</button>
        </div>
      </div>
      <div class="progress mt-3" style="height: 10px;">
        <div class="progress-bar bg-success" role="progressbar" :style="{width:length}" aria-valuenow="25"
          aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="mt-4 text-left">
        <p style="font-size: 15px;">Hi 朱名康,你的简历已经较为完善，可以继续智能优化，或使用导师辅导，定制匹配岗位要求的满分简历！</p>
        <button class="btn btn-outline-success">使用导师辅导</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        score: '80',
        length: "80%"
      }
    },
    methods: {}
  }
</script>

<style>
  .checkPanel-wrapper {
    background-color: white;
  }

  .checkPanel-centent {
    padding: 30px 20px;
  }
</style>
