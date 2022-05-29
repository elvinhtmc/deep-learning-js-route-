//按键，播放音乐转换样式
console.log('ss')
function playSound(event){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`) //keyCode大小写不能错
  if(!audio) return // 处理无效的按键事件
  audio.play()
  audio.currentTime = 0 //清空播放进度条，按键被按住不放时，可以马上响起连续鼓点声
  key.classList.add('playing')
}
//样式还原
function removeTransition(event){
  if(event.propertyName!=='transform') return
  event.target.classList.remove('playing')
  console.log('remove')
}
const keys = Array.from(document.querySelectorAll('.key')); // 获取页面所有按钮元素
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // 添加 transition 事件监听
window.addEventListener('keydown', playSound);

/* es6箭头函数写法 
window.addEventListener('transitionend', (event)=>{})*/
