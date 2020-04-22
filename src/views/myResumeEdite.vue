<template>
  <div class="main-content d-flex justify-content-start">
    <div class="left-panel">
      <div class="view-cases">
        <nav class="navbar nav-bar navbar-light bg-white navbar-expand-lg shadow-sm">
          <div class="collapse navbar-collapse d-flex justify-content-center">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="###" @click="changeComponent(checkPanel)">智能检查</a>
              <a class="nav-item nav-link" href="###" @click="changeComponent(faqPanel)">填写贴士</a>
              <a class="nav-item nav-link" href="###" @click="changeComponent(examplePanel)">查看案例</a>
            </div>
          </div>
        </nav>
      </div>
      <component :is="leftPanelComponent" class="mt-3"></component>
    </div>
    <div class="right-panel">
      <resume></resume>
    </div>
  </div>
</template>

<script>
  import resume from '../components/resume/resume.vue'
  import controlBar from '../components/resume/controlBar.vue'
  import examplePanel from '../components/resume/examplePanel.vue'
  import faqPanel from '../components/resume/faqPanel.vue'
  import checkPanel from '../components/resume/checkPanel.vue'

  export default {
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'background:rgb(244, 244, 244);')
    },
    beforeDestroy() {
      document.querySelector('body').removeAttribute('style')
    },
    components: {
      resume,
      controlBar,
      examplePanel,
      faqPanel,
      checkPanel
    },
    data() {
      return {
        checkPanel: 'checkPanel',
        faqPanel: 'faqPanel',
        examplePanel: 'examplePanel',
        leftPanelComponent: 'examplePanel',
      }
    },
    methods: {
      changeComponent(componentId) {
        this.leftPanelComponent = componentId;
      }
    }
  }
</script>

<style>
  .main-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
  }

  .right-panel {
    padding-left: 20px;
    width: 70%;
  }

  .view-cases {}

  .left-panel {
    width: 346px;

  }

  .nav-bar {
    height: 60px;
  }
</style>
