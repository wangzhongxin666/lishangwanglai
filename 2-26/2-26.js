第一题 null和undefined有什么区别
		null表示没有对象  默认转成0
		nudefined表示缺少值  默认转成 NaN
第二题 对象和字符串互相转换用那些方法
		对象转字符串json.stringify 
		字符串转对象 json.parse
第三题 js对象深拷贝有哪些方法
		jq使用  $.extend({},obj)
		Object.assign({},obj)
第四题  js中==和===有什么区别		 
		==是判断值是否相等
		===是判断值及类型时候完全相等
第五题 下面这串代码想要循环延时输出0，1，2，3，4，请问输出结果是否正确，如果不正确说明为什么？
		并修改输出正确的结果。
    for(var i=0;i<5;i++){
    	setTimeout(function(){
    		console.log(i)
    	},100*i)
    }
   不正确，因为for循环是一次性执行完，走到定时器的时候i已经走到了5，所以会输出5个5。
   解决：var改成let。

第六题 javascript实现ajax的原理（实现过程）？
	// 1.创建请求对象
		let xhr = new XMLHttpRequest();
		// console.log(xhr)
		// 2.设置 :open(get/post, url, 是否异步(给true))
		xhr.open('post', `post.php`, true);
		// 3.设置请求头:post请求中放置参数
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		// 4.发送请求:send()
		// post:请求的参数通过 send传递
		xhr.send(`a=${a.value}&b=${b.value}`);
		// 5.监听ajax状态码的变化
		xhr.onreadystatechange = function () {
			// console.log(this.readyState);
			// 服务器接收到了请求
			if (xhr.readyState == 4) {
				if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
					// xhr.response: 服务器返回的数据  默认类型是字符串 
					// json解析:
					// console.log(JSON.parse(xhr.response));
					// console.log(eval(`(${xhr.response})`));
					console.log(xhr.response)

				}
			}
		}
第七题 下面的程序输出结果是什么？
	function doSomething(){
		for(var i=0;4>i;i++){
			var k=100
			aMrg+=','+(k+i)
		}
	}
	var k=1,aMrg=k
	doSomething()
	aMrg+=k

	console.log(aMrg)

	1,100,101,102,1031

第八题 使用reduce将多维数据转换为一维数据？
	function fn(arr) { 
           return arr.reduce((a,b)=>{
               console.log(a)
               console.log(b)

               if(Array.isArray(b)){
                   return a.concat(fn(b))
               }else{
                   return a.concat(b)
               }
           },[])
       }
       var arr = [[1,2],[1,2,[3,4,5]],[5,6]]
       console.log(fn(arr))		