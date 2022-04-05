const stack = []
let binary = ''
let item;
const conversion = (num) => {
	while (num > 0) {
		stack.push(num % 2)	
		num = Math.floor (num / 2)
	}
  const bits = stack.length
	for (let i = 0; i < bits; i++ ) { //注意，stack.length一直在变，要先储存起来
		item = stack.pop()
		binary = binary + item.toString ()
    console.log(binary)
    // 其实num.toString(2)可以直接获取num的2进制字符串
    // binary${item}写法也可
	}
	return binary
}
console.log (conversion(100))


