<template>
<div>
  <my-menu class="myMenu"></my-menu>
  <router-view></router-view>
  <footer-cv></footer-cv>
</div>
</template>

<script>
import menu from './menu'
import cvFooter from './cvFooter.vue'
export default {
  components: {
    'my-menu': menu,
	'footer-cv':cvFooter,
  }
}
</script>
