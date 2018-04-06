<template>
  <div id="container">
    <div class="leftView" ref="leftView" @mouseover="showImg" @mouseout="hideImg" @mousemove="zoomImg($event)">
      <div class="mask" ref="mask" v-show="isShow"></div>
      <img ref="smallImg" src="@/assets/img.jpg" width="400">
    </div>
    <div class="rightView" ref="rightView" v-show="isShow">
      <img ref="bigImg" src="@/assets/img.jpg">
    </div>
  </div>
</template>
<script>
export default {
  name: 'zoomImg',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showImg () {
      this.isShow = true
    },
    hideImg () {
      this.isShow = false
    },
    zoomImg (evt) {
      // 获取当前鼠标的位置
      let currentMouseX = evt.pageX
      let currentMouseY = evt.pageY
      // console.log(currentMouseX, currentMouseY)
      // 获取容器左上侧偏移距离
      let offsetLeft = this.$el.offsetLeft
      let offsetTop = this.$el.offsetTop
      // console.log(offsetLeft, offsetTop)
      // 获取放大遮罩的大小
      let maskWidth = this.$refs.mask.getBoundingClientRect().width
      let maskHeiht = this.$refs.mask.getBoundingClientRect().height
      // 获取鼠标移动时遮罩的位置
      let zoomMaskX = currentMouseX - offsetLeft - maskWidth / 2
      let zoomMaskY = currentMouseY - offsetTop - maskHeiht / 2
      // 限制遮罩左上范围
      if (zoomMaskX <= 0) {
        zoomMaskX = 0
      }
      if (zoomMaskY <= 0) {
        zoomMaskY = 0
      }
      // 限制遮罩右下范围
      let maxScopeX = this.$refs.leftView.getBoundingClientRect().width - maskWidth
      if (zoomMaskX > maxScopeX) {
        zoomMaskX = maxScopeX
      }
      let maxScopeY = this.$refs.leftView.getBoundingClientRect().height - maskHeiht
      if (zoomMaskY > maxScopeY) {
        zoomMaskY = maxScopeY
      }
      this.$refs.mask.style.left = zoomMaskX + 'px'
      this.$refs.mask.style.top = zoomMaskY + 'px'
      // 计算放大比例
      let zoomProportion = (this.$refs.bigImg.width - this.$refs.rightView.getBoundingClientRect().width) / (this.$refs.leftView.getBoundingClientRect().width - maskWidth)
      this.$refs.bigImg.style.left = -zoomProportion * zoomMaskX + 'px'
      this.$refs.bigImg.style.top = -zoomProportion * zoomMaskY + 'px'
    }
  }
}
</script>

<style>
#container {
  position: relative;
  top: 60px;
  left: 200px;
}
#container .leftView {
  position: relative;
  width: 400px;
  height: 400px;
}
#container .leftView  .mask {
  background: rgba(50, 153, 248, 0.4);
  position: absolute;
  width: 160px;
  height: 160px;
  cursor: move;
}
#container .rightView {
  width: 400px;
  height: 400px;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 450px;
}
#container .rightView img {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
