<template>
  <div class="main-content-control-bar mb-3">
    <div class="control-bar-color d-flex justify-content-center align-content-center">
      <button class="btn btn-success mr-2" @click="savePDF">打印简历</button>
      <button class="btn btn-success mr-2" @click="handleWindowPrint( '#resume-edite', '电子合同')">自带打印简历</button>
      <button class="btn btn-success" @click="saveResume">保存简历</button>
    </div>
  </div>
</template>

<script>
  import htmlToPdf from '../../../static/js/htmlToPdf.js'
  export default {
    methods: {
      savePDF() {
        htmlToPdf.downloadPDF(document.querySelector('#resume-edite'), '我的简历')
      },
      handleWindowPrint(ele, fileName) {
        console.log(666);
        //去除页面不必要的 head 标签内  内容， 避免影响打印页 ， title 为保存为 pdf 的文件时的 文件名
        document.head.innerHTML = '<meta charset="utf-8">\n' +
          ' <title> ' + fileName + '</title>\n' +
          ' <link rel="shortcut icon" href="http://192.168.29.50:8081/favicon.ico" type="image/x-icon" />\n' +
          ' <meta name="format-detection" content="telephone=no">\n' +
          ' <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n' +
          ' <meta name="viewport" content="width=device-width,initial-scale=1.0">\n' +
          ' <link rel="stylesheet" href="./static/css/contract.css"/>'; //生成pdf的外部css样式
        document.body.innerHTML = document.querySelector(ele).outerHTML;
        //转异步 等待dom元素渲染（样式）完毕在打印
        setTimeout(() => {
          //打印
          window.print();
          //刷新页面
          window.location.reload();
        }, 20)
      },
    },
  }
</script>

<style>
  .main-content-control-bar {
    background-color: white;
    height: 60px;
  }

  .control-bar-color {
    padding-top: 10px;
  }
</style>
