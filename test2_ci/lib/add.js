function add(a,b) {
			  // 实现该函数
			  var max = Math.max(+a,+b)+'',
			  		min = Math.min(+a,+b)+'',
			  		maxArr = max.split('').reverse(),
			  		minArr = min.split('').reverse(),
			  		arr=[],
			  		num1=0;
			 	for(let a=0;a<max.length;a++){
			 		
			 		var num =(+maxArr[a]||0)+(+minArr[a]||0)+num1;
			 		if(num>9){
			 			num=num-10;
						num1=1;
						if(a===max.length-1){
			 				num=num+10
			 			}
				 		}else{
				 			num1=0;
				 		}
				 		arr.push(num);
				 		num=0;
			 		}
			 		return arr.reverse().join('');
			}
module.exports = add