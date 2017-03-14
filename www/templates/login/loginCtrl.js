/**
 * Created by cjh on 2017/3/10.
 */
appCtrl.controller('LoginCtrl', function($scope,Toast,$state,$localStorage) {
	$scope.user = {
		tel:'',
		pwd:''
	}
	
	//sub
	$scope.sub = function(){
		if($scope.user.tel == undefined || $scope.user.tel == ""){
			log = "手机号不能为空!"
			Toast.show(log);
			return false;
		}else if($scope.user.pwd == undefined || $scope.user.pwd == ""){
			log = "密码不能为空!"
			Toast.show(log);
			return false;
		}else{
			db.transaction(function (tx) {
			    tx.executeSql('select * from user where tel="'+$scope.user.tel+'"', [], function (tx, results) {			    	
				    var len = results.rows.length,i;
				    if(len == 0){
				    	log = "该用户不存在!";
				    }else{
				    	var arr = [];
				    	for(i=0;i<len;i++){
				    		arr.push(results.rows.item(i).pwd)
				    	}						    	
				    	if(arr.indexOf($scope.user.pwd) != -1){			    		
				    		log = "登录成功!";
				    		var data = {
				    			"tel":$scope.user.tel,
				    			"pwd":$scope.user.pwd
				    		}
				    		$localStorage.setObject('userInfo',JSON.stringify(data))
				    		$localStorage.set('isLogin',true)
				    		goBack()
				    	}else{
				    		log = "密码有误!";
				    	}
//				    	tx.executeSql('insert into log (type,result) values ("登录","'+log+'")');
				    }
				    Toast.show(log);
			    }, null);
			});					
		}

	}
})
