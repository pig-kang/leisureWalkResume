<template>
  <div class="mb-2" :class="[isActive? 'borderActive':'']" @mouseover="showDash" @mouseleave="hideDash" v-if="isModuleShow">
    <span class="dash-icon icon-edit" v-if="isActive" :style="{'background-color':editBgColor}" @click="showEditDialog"></span>
    <span class="dash-icon icon-add" v-if="isActive" :style="{'background-color':addBgColor}" @click="childAdd"></span>
    <span class="dash-icon icon-delete" v-if="isActive" @click="childDelete"></span>
    <slot></slot>
    <!-- 删除按钮弹窗 -->
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">删除提醒</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            确定删除此模块吗？
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" @click="confirmDelete(event)">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var _this;
  export default {
    props: {
      editBgColor: {
        type: String,
        default: '#666'
      },
      addBgColor: {
        type: String,
        default: '#666'
      }
    },
    data() {
      return {
        isActive: false,
        isModuleShow: true,
        isDelete: false,
      };
    },
    methods: {
      showDash() {
        this.isActive = true;
      },
      hideDash() {
        this.isActive = false;
      },
      childAdd() {
        this.$emit('eventAdd', 'add');
      },
      childDelete() {
        _this = this;
        $('#deleteModal').modal('show');
      },
      showEditDialog() {
        this.$emit('eventShowDialog', 'dialog');
      },
      confirmDelete() {
        _this.isModuleShow = false;
        $('#deleteModal').modal('hide');
      }
    }
  };
</script>

<style>
  .borderActive {
    border: 2px solid #6090ff;
  }

  .dash-icon {
    float: right;
    width: 24px;
    height: 24px;
  }

  .icon-delete {
    background: #00c091 url(../../../static/toolbar.png) no-repeat 0 0;
    background-position: -154px 3px;
    margin-right: 2px;
  }

  .icon-add {
    background: #00c091 url(../../../static/toolbar.png) no-repeat 0 0;
    background-position: -125px 3px;
    margin-right: 2px;
  }

  .icon-edit {
    background: #00c091 url(../../../static/toolbar.png) no-repeat 0 0;
    background-position: -210px 2px;
  }
</style>
