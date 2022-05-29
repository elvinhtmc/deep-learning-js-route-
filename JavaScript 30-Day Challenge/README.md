#### 交互
- 敲击键盘按键，触发对应声音，页面中的对应按钮被放大
- 事件结束后，按钮回复原状

#### 知识补充
- 不用`getElementbyXx`, 用`querySelector`和`querySelectorAll`:`element = document.querySelector(selectors)`.前者返回符合条件的第一个后代元素，后者返回`NodeList`对象实例，该实例包含属性和方法。
- `NodeList` 不是一个数组，是一个类似数组的对象(Like Array Object),可以使用 `forEach()` 来迭代。你还可以使用 `Array.from()` 将其转换为数组。
- `keydown`事件中的`kwycode`可以帮我们连接按键与对应事件，事件->触发音频+改变对应按钮样式。
- `<audio>` is used to embed sound content in documents. It may contain one or more audio sources(the browser will choose the most suitable one.), represented using the `src` attribute or the `<source>` element.It can also be the destination for streamed media, using a MediaStream.
- `audio.play`Playback has begun.;`audio.currentTime="seconds"`Indicates the position for the playback of the audio/video, in seconds
- 可以通过自定义的key值，使元素唯一，便于dom操作
- `event`相关方法:`addEventListener(type, listener)`,将方法注册到EventTarget上，当触发指定事件，就执行指定的回调函数。e.g.[`addEventListener(keydown, function)`]
- 文档对象模型Document引用的`querySelector()`方法返回文档中与指定选择器或选择器组匹配的第一个 Element对象。 如果找不到匹配项，则返回null。e.g.`element = document.querySelector(selectors)`
- 模板字面量:模板字符串使用反引号 ` `来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法`${expression}`的占位符。可以在其中插入变量,但
实际上可以使用任何类型的表达式进行插值，而不仅仅是变量。
- `scale(sx, sy)`参数是横坐标和纵坐标，原大小为1。e.g.`transform: scale(1.2)`
- `transitionend` 事件会在 CSS transition 结束后触发. 可作为监听css动画结束的事件。transitionend 事件双向触发，当完成到转换状态的过渡，以及完全恢复到默认或非转换状态时都会触发。e.g.:
  ------------------
  const transition = document.querySelector('.transition');
transition.addEventListener('transitionend', () => {
  console.log('Transition ended');
});
  ---------------
- `EventTarget` 是一个 DOM 接口，由可以接收事件、并且可以创建侦听器的对象实现。
`Element，document 和 window` 是最常见的 `event targets` 。可以视为触发事件的dom节点。
`forEach()` 方法用于调用数组的每个元素，并将参数传递给回调函数。e.g.`foreach(item of array, function(item))``forEach((element, index, array) => { /* ... */ })`
- `The Array.from()` static method creates a new, shallow-copied Array instance from an array-like or iterable object.