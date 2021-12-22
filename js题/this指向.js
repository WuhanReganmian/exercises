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


function Foo(){
	getName = function(){
		console.log(1);					
  };
	return this
}
			
function getName(){
	console.log(5);
}

Foo().getName(); // 1


function Foo(){
  getName = function(){
    console.log(1);					
  };
  return this;
}

Foo.prototype.getName = function(){
  console.log(3);
};

function getName(){
  console.log(5);
};
new Foo().getName() // 3



function Foo() {
  getName = function () { console.log(1) }
  return this
}
Foo.getName = function () { console.log(2) }
Foo.prototype.getName = function () { console.log(3) }
var getName = function () { console.log(4) }
function getName() { console.log(5) }

//请写出以下输出结果：
Foo.getName() // 2
getName() // 4
Foo().getName() // 1
getName() // 1
new Foo.getName() // 2
new Foo().getName() // 3
new new Foo().getName() // 3
