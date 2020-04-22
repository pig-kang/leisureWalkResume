// quill功能按钮鼠标停留提示
const titleConfig = {
  'ql-bold': '加粗',
  'ql-color': '颜色',
  'ql-font': '字体',
  'ql-code': '插入代码',
  'ql-italic': '斜体',
  'ql-link': '添加链接',
  'ql-background': '背景颜色',
  'ql-size': '字体大小',
  'ql-strike': '删除线',
  'ql-script': '上标/下标',
  'ql-underline': '下划线',
  'ql-blockquote': '引用',
  'ql-header': '标题',
  'ql-indent': '缩进',
  'ql-list': '列表',
  'ql-align': '文本对齐',
  'ql-direction': '文本方向',
  'ql-code-block': '代码块',
  'ql-formula': '公式',
  'ql-image': '图片',
  'ql-video': '视频',
  'ql-clean': '清除字体样式'
}
export function addQuillTitle () {
  const oToolBar = document.querySelector('.ql-toolbar'),
    aButton = oToolBar.querySelectorAll('button'),
    aSelect = oToolBar.querySelectorAll('select')
  aButton.forEach(function (item) {
    if (item.className === 'ql-script') {
      item.value === 'sub' ? item.title = '下标' : item.title = '上标'
    } else if (item.className === 'ql-indent') {
      item.value === '+1' ? item.title = '向右缩进' : item.title = '向左缩进'
    } else {
      item.title = titleConfig[item.classList[0]]
    }
  })
  aSelect.forEach(function (item) {
    item.parentNode.title = titleConfig[item.classList[0]]
  })
}

