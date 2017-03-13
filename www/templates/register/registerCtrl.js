/**
 * Created by cjh on 2017/3/10.
 */
appCtrl.controller('RegisterCtrl', function($scope,Toast) {
	$scope.user = {
		tel:'',
		pwd:''
	}
	
	//sub
	$scope.sub = function(){
		if($scope.user.tel == undefined || $scope.user.tel == ""){
			log = "手机号不能为空!"
			Toast.show(log)
			return false;
		}else if($scope.user.pwd == undefined || $scope.user.pwd == ""){
			log = "密码不能为空!"
			Toast.show(log)
			return false;
		}else{
			db.transaction(function (tx) {
				tx.executeSql('select * from user where tel="'+$scope.user.tel+'"', [], function (tx, results) {	
				    var len = results.rows.length,i;
				    if(len == 0){
				    	tx.executeSql('insert into user (tel,pwd) values ("'+$scope.user.tel+'","'+$scope.user.pwd+'")');
				    	log = "添加成功!";			    
				    }else{
				    	log = "该用户已存在!";						    	
				    }
				    tx.executeSql('insert into log (type,result) values ("注册","'+log+'")');
				    Toast.show(log)
			    }, null);			
			});
		}
		
	}
})
