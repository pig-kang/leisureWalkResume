<template>
  <div class="item-list">
    <slot>
      <div class="desc" contenteditable="true">
        就是这里... <br>
        写下你牛逼的过往..... <br>
        那是你逝去的青春.....
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
  };
</script>

<style>
  .item-list {}

  .tips {
    display: flex;
  }

  .input-item {
    flex: 1;
    color: #222;
    outline: none;
    font-size: 16px;
    line-height: 20px;
  }


  .desc {
    margin-top: 10px;
    background: none;
    line-height: 23px;
    color: #111;
    border: 1px dashed transparent;
    margin-bottom: 5px;
    font-size: 16px;
  }
</style>
