<template>
  <div class="faqPanel-wrapper shadow-sm">
    <div class="faqPanel-content">
      <div class="text-center mt-2">填写贴士</div>
      <div class="my-4">
        <select class="form-control" @change="changeFaqPanel($event)">
          <option value="baseInfo">基本信息</option>
          <option value="educationEx">教育经历</option>
          <option value="workEx">工作经历</option>
          <option value="项目经历">项目经历</option>
        </select>
      </div>
      <component :is="isFaq"></component>
    </div>
  </div>
</template>

<script>
  import baseInfo from './faqPanel/baseInfo.vue'
  import educationEx from './faqPanel/educationEx.vue'
  import workEx from './faqPanel/workEx.vue'

  export default {
    data() {
      return {
        educationEx: 'educationEx',
        workEx: 'workEx',
        baseInfo: 'baseInfo',
        isFaq: 'baseInfo'
      }
    },
    components: {
      baseInfo,
      educationEx,
      workEx
    },
    methods: {
      changeFaqPanel(e) {
        this.isFaq = e.target.value
      }
    }
  }
</script>

<style>
  .faqPanel-wrapper {
    background-color: white
  }

  .faqPanel-content {
    padding: 30px 20px;
    height: 100%;
    width: 100%;
  }
</style>
