/**
 * 开始触摸
 */
function handleTouchStart (e) {
  this.oTouch.initiated = true
  this.oTouch.moved = false
  let touch = e.touches[0]
  this.oTouch.startX = touch.pageX
  this.oTouch.startY = touch.pageY
}
 /**
 * 触摸过程
 */
function handleTouchMove (e) {
  if (!this.oTouch.initiated) {
    return
  }
  let touch = e.touches[0]
  this.oTouch.deltaX = touch.pageX - this.oTouch.startX
  this.oTouch.deltaY = touch.pageY - this.oTouch.startY
  if (Math.abs(this.oTouch.deltaY) > Math.abs(this.oTouch.deltaX)) {
    return
  }
  if (!this.oTouch.moved) {
    this.oTouch.moved = true
  }
}
/**
 * 触摸结束
 */
function handleTouchEnd (e) {
  if (!this.oTouch.moved) {
    return
  }
  if (this.oTouch.deltaX > 30) {
    this.$refs.classDetails.style.webkitTransform = 'translate3d(0,0,0)'
    this.$refs.classDetails.style.transform = 'translate3d(0,0,0)'
  } else if (this.oTouch.deltaX < -30) {
    this.$refs.classDetails.style.webkitTransform = 'translate3d(-1.1rem,0,0)'
    this.$refs.classDetails.style.transform = 'translate3d(-1.1rem,0,0)'
  }
  this.oTouch.initiated = false
}
export {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd
}
