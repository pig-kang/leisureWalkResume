<template>
  <div class="edit-image" :class="{'circle':isCircle}" :style="{ width: width + 'px', height: height + 'px'}">
    <div class="img-wrapper" :class="{'circle':isCircle}">
      <img :src="imgSrc" alt="image" :class="{ circle: isCircle }" class="img-avatar">
    </div>
    <input type="file" @change="changeImage" class="input-avatar">
  </div>
</template>

<script type="text/ecmascript-6" scoped>
  export default {
    name: 'editImg',
    props: {
      width: {
        type: String,
        default: '80'
      },
      height: {
        type: String,
        default: '96'
      },
      src: {
        type: String,
        default: require('@/assets/logo.png')
      },
      isCircle: {
        type: Boolean,
        default: true
      },
      imgSrc: {
        type: String,
        default: this.src
      }
    },
    data() {
      return {
        isActive: false
      };
    },
    methods: {
      changeImage: function(evt) {
        let _this = this;
        let resumeId = (this.$route.params.id)
        let reader = new FileReader();
        let file = evt.target.files[0];
        let param = new FormData() // 创建form对象
        param.append('file', file) // 通过append向form对象添加数据
        param.append('resumeId', resumeId)
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        let url = 'http://127.0.0.1:8080/uploadFile/uploadAvatar'
        this.$axios.post(url, param, config)
          .then(response => {
            if (response.data.success) {
              _this.imgSrc = response.data.detail

            }
          })
      },
      showDash() {
        this.isActive = true;
      },
      hideDash() {
        this.isActive = false;
      },
    }
  }
</script>

<style>
  .edit-image {
    position: relative;
    display: inline-block;
    background-color: #e5e5e5;
    box-sizing: border-box;
    padding: 3px;
  }

  .img-wrapper {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }

  .img-avatar {
    width: 100%;
    height: 100%;
  }

  .input-avatar {
    display: inline-block;
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .circle {
    border-radius: 100%;
  }
</style>
