var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

console.log(foo.bar()); // 2
console.log((foo.bar)()); // 2
// 取值操作影响this指向
console.log((foo.bar = foo.bar)()); // 1
console.log((false || foo.bar)()); // 1
console.log((foo.bar, foo.bar)()); // 1
// 参考 https://github.com/mqyqingfeng/Blog/issues/7
