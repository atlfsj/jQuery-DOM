//    /*const api =*/ jQuery('.test')  // 不返回元素们，返回api对象
//    /*api*/ .addClass('red')         // 遍历所有刚才获取的元素，添加 .red
//       .addClass('blue')        // 链式操作
//       .addClass('green')       // this 就是 api

//Object.fn(p1)             函数里 this 就是 obj
//Obj.fn.call(obj.p1)

/* 
const api1 = jQuery('test')
const api2 = api1.find('.child') .addClass('red') .addClass('blue').addClass('green')
const oldApi = api2.end().addClass('yellow')
简写如下*/

/*
jQuery('.test')
   .find('child')
   .addClass('red')
   .addClass('blue')
   .addClass('green')
   .end()
   .addClass('yellow')*/

/******************获取爸爸等**********************/
const x = jQuery('.test')

x.parent().print()
x.children().print()