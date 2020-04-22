<template>
  <div class="examplePanel shadow-sm">
    <div class="cases-title">
      <div class="cases-title-text">查看案例</div>
      <a href="#collapseExample" data-toggle="collapse"><span>👉</span></a>
    </div>
    <div class="collapse" id="collapseExample">
      <div>
        <div class="dropdown">
          <button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            教育经历
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="list-example">
            <a class="dropdown-item" href="#" @click="changeExample(eduExample)">教育经历</a>
            <a class="dropdown-item" href="#">全职工作经历</a>
            <a class="dropdown-item" href="#" @click="changeExample(practiceExample)">实习经历</a>
          </div>
        </div>
        <!-- 滑动案例内容 -->
        <div class="scroll-wrapper">
          <div data-spy="scroll" data-offset="0" class="scrollspy-example">
            <component :is="isExample"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import eduExample from '../example/eduExample.vue'
  import practiceExample from '../example/practiceExample.vue'

  export default {
    components: {
      eduExample,
      practiceExample
    },
    data() {
      return {
        eduExample: 'eduExample',
        practiceExample: 'practiceExample',
        isExample: 'eduExample'
      }
    },
    methods: {
      changeExample(exampleName) {
        this.isExample = exampleName
      }
    }
  }
</script>

<style>
  .examplePanel {
    background-color: white;
  }

  .cases-title {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .cases-title-text {
    font-size: 14px;
  }

  .scroll-wrapper {
    margin: 20px 10px 20px 10px;
    width: 325px;
    height: 400px;
    position: relative;
    overflow-y: scroll;
  }
</style>
