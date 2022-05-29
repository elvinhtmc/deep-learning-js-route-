const list = [1,2]
const head = {val:list[0]}
const end = {val:list[1]}
head.next = end
let p = head
while (p) {
  console.log(p.val)
  p = p.next
} 
var reverseList = function() {
  p1 = head
  p2 = null
  while (p1) {
    console.log(p1.val,p2&&p2.val)
    p2 = p1
    p1 = p1.next
  } 
  console.log('execute')
}

reverseList();