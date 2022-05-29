const a = {val: 'a'}
const b = {val: 'b'}
const c = {val: 'c'}
const insert = {val: 'insert'}
a.next = b
b.next = c //用next
// val 是当前节点的值，next 是指向下一个节点的指针/引用。
b.next = insert
insert.next = c // 插入节点
let p = a
// 遍历链表
while (p) {
  console.log(p.val)
  p = p.next
} 
// 删除节点
b.next = c 
while (p) {
  console.log(p.val)
  p = p.next
}