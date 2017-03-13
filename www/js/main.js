var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var log = "";
db.transaction(function(response){
	response.executeSql('create table if not exists user (tel,pwd,nickName,age,sex,headUrl)');
//	response.executeSql('create table if not exists log (type,result)');
//	response.executeSql('insert into user (tel,pwd) values ("15151618771","123456")');
});

////获取星期
//function getWeek(){
//	return "星期"+"日一二三四五六".charAt(new Date().getDay());
//}
//
////login
//function login(){
//	var name = document.getElementById("user_realName").value;
//	var pwd = document.getElementById("user_pwd").value;
//	if(name == undefined || name == ""){
//		log = "用户名不能为空!"
//		console.log(log)
//		return false;
//	}else if(pwd == undefined || pwd == ""){
//		log = "密码不能为空!"
//		console.log(log)
//		return false;
//	}else{
//		db.transaction(function (tx) {
//		    tx.executeSql('select * from user where realName="'+name+'"', [], function (tx, results) {			    	
//			    var len = results.rows.length,i;
//			    if(len == 0){
//			    	log = "该用户不存在!";
//			    }else{
//			    	var arr = [];
//			    	for(i=0;i<len;i++){
//			    		arr.push(results.rows.item(i).pwd)
//			    	}						    	
//			    	if(arr.indexOf(pwd) != -1){			    		
//			    		log = "登录成功!";
//			    		sessionStorage.setItem('isLogin',true)
//			    		var data = {
//			    			"name":name,
//			    			"pwd":pwd
//			    		}
//			    		localStorage.setItem('userInfo',JSON.stringify(data))
//			    	}else{
//			    		log = "密码有误!";
//			    	}
//			    	tx.executeSql('insert into log (type,result) values ("登录","'+log+'")');
//			    }
//			    console.log(log)
//		    }, null);
//		});					
//	}
//} 
//
//function add(){
//	var name = document.getElementById("user_realName").value;
//	var pwd = document.getElementById("user_pwd").value;
//	var nickName = document.getElementById("user_nickName").value;
//	var age = document.getElementById("user_age").value;
//	if(nickName == undefined || nickName == ""){
//		nickName = "";
//	}
//	if(age == undefined || age == ""){
//		age = "";
//	}
//	if(name == undefined || name == ""){
//		log = "用户名不能为空!"
//		console.log(log)
//		return false;
//	}else if(pwd == undefined || pwd == ""){
//		log = "密码不能为空!"
//		console.log(log)
//		return false;
//	}else{
//		db.transaction(function (tx) {
//			tx.executeSql('select * from user where realName="'+name+'"', [], function (tx, results) {			    	
//			    var len = results.rows.length,i;
//			    if(len == 0){
//			    	tx.executeSql('insert into user (realName,pwd,nickName,age) values ("'+name+'","'+pwd+'","'+nickName+'","'+age+'")');
//			    	log = "添加成功!";
//			    }else{
//			    	log = "该用户已存在!";						    	
//			    }
//			    tx.executeSql('insert into log (type,result) values ("添加","'+log+'")');
//			    console.log(log)
//		    }, null);			
//		});
//	}
//}
//
//function edit(){
//	var name = document.getElementById("user_realName").value;
//	var pwd = document.getElementById("user_pwd").value;
//	var nickName = document.getElementById("user_nickName").value;
//	var age = document.getElementById("user_age").value;
//	if(nickName == undefined || nickName == ""){
//		nickName = "";
//	}
//	if(age == undefined || age == ""){
//		age = "";
//	}
//	if(name == undefined || name == ""){
//		log = "用户名不能为空!"
//		console.log(log)
//		return false;
//	}else if(pwd == undefined || pwd == ""){
//		log = "密码不能为空!"
//		console.log(log)
//		return false;
//	}else{
//		db.transaction(function (tx) {
//			tx.executeSql('select * from user where realName="'+name+'" and pwd="'+pwd+'"', [], function (tx, results) {			    	
//			    var len = results.rows.length,i;
//			    if(len == 0){
//					log = "该用户不存在!";
//			    }else{
//			    	tx.executeSql('update user set nickName="'+nickName+'",age="'+age+'" WHERE realName="'+name+'"');	
//			    	log = "修改成功!";
//			    }
//			    tx.executeSql('insert into log (type,result) values ("修改","'+log+'")');
//			    console.log(log)
//		    }, null);
//		});		
//	}
//
//}
//
//function del(){
//	var name = document.getElementById("user_realName").value;
//	var pwd = document.getElementById("user_pwd").value;
//	if(name == undefined || name == ""){
//		log = "用户名不能为空!"
//		console.log(log)
//		return false;
//	}else if(pwd == undefined || pwd == ""){
//		log = "密码不能为空!"
//		console.log(log)
//		return false;
//	}else{
//		db.transaction(function (tx) {
//			tx.executeSql('select * from user where realName="'+name+'" and pwd="'+pwd+'"', [], function (tx, results) {			    	
//			    var len = results.rows.length,i;
//			    if(len == 0){
//					log = "该用户不存在!";
//			    }else{
//			    	tx.executeSql('delete from user where realName="'+name+'"');	
//			    	log = "删除成功!";
//			    }
//			    tx.executeSql('insert into log (type,result) values ("删除","'+log+'")');
//			    console.log(log)
//		    }, null);
//		});			
//	}
//}

