<template>
  <div>
    <h1 class="title border-bottom border-warning" contenteditable="true" :style="moduleTitleStyle">{{ title }}</h1>
    <slot>
      <div class="">
        <p class="edit-text" contenteditable="true" :class="[isActive?'borderAlive':'']" @mouseover="showc" @mouseleave="hidec">
        </p>
      </div>
    </slot>
  </div>
</template>

<script>
  import dashParent from './dashParent.vue';

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      moduleIconStyle: {
        type: Object
      },
      moduleTitleStyle: {
        type: Object
      },
      moduleIcon: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isActive: false
      }
    },
    components: {
      dashParent,
    },
    methods: {
      val(icon) {
        if (icon) {
          return require('./' + icon);
        }
      },
      showc() {
        this.isActive = true
      },
      hidec() {
        this.isActive = false
      }
    }
  };
</script>

<style>
  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .edit-text {
    width: 100%;

  }

  .borderAlive {
    background-color: #000000;
  }
</style>
