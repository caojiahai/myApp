//toast
app.factory('Toast', function() {
		return {
			show: function(text, time, width) {
				var time = time || 1000;
				var width = width || '160';
				var toast = '<p id="myToast" style="text-align: center;position: absolute;z-index: 1000000;background-color: #000;opacity: 0.7;' +
					'color: #fff;left: 50%;margin-left: -' + width / 2 + 'px;width: ' + width + 'px;border-radius: 10px;padding: 10px;top:50%;margin-top: -25px;">' + text + '</p>'
				var body = angular.element(document.querySelector('body'))
				body.append(toast);
				setTimeout(function() {
					angular.element(document.querySelector('#myToast')).remove()
				}, time)
			}
		}
	})
//loading
app.factory('loading', ['$ionicLoading', '$timeout', 'Toast',
	function($ionicLoading, $timeout, Toast) {
		var to,
			tmp1 = '<ion-spinner icon="ios" class="customLoading"></ion-spinner>',
			tmp2 = '<p style="background-color: #000;padding: 10px 20px;color: #fff;border-radius: 10px;" class="text-center">';
		var show = function(prompt) {
			$ionicLoading.show({
				template: prompt ? tmp2 + prompt + '</p>' : tmp1
			});
			if(!prompt) {
				to = $timeout(function() {
					$ionicLoading.hide();
				}, 15000)
			}
		}
		var hide = function() {
			$ionicLoading.hide();
			$timeout.cancel(to);
		}

		var prompt = function(template, time) {
			$ionicLoading.hide();
			time = time || 1000;
			$ionicLoading.show({
				template: template,
				noBackdrop: true,
				duration: time
			});
		};
		return {
			show: show,
			hide: hide,
			prompt: prompt
		}
	}
])

app.factory('qiniuFact', ['$http', '$q', function($http, $q) {
	var up2QiNiuFile = function(pathName, file) {
		var def = $q.defer();
		var fd = new FormData(); //新建一个formData用来上传
		fd.append('key', pathName); //七牛要求的key字段,实际上包含路径和名字
		fd.append('file', file); //要上传的文件,file格式
		var keyInfo = {
			form: {
				'upKey': pathName
			}
		}
		$http.post(API_URL + 'qiniu/getToken.do', keyInfo)
			.success(function(data) {
				console.log(data)
				if(data.code == 99) {
					//已获得服务器给的上传秘钥token
					fd.append('token', data.data.resultUrl);
					$http({
						method: 'POST',
						url: 'http://up.qiniu.com',
						data: fd,
						pathName: pathName,
						headers: {
							'Content-Type': undefined
						},
						transformRequest: angular.identity,
						withCredentials: false
					}).success(function(d) {
						def.resolve('http://cdn.900etrip.com/' + d.key);
					}).error(function(err, status) {
						def.reject(err);
					});
				} else {
					def.reject('获取token失败');
				}

			}).error(function(err) {
				console.log(err)
				def.reject('获取token失败');
			});
		return def.promise;
	};
	return {
		up2QiNiuFile: up2QiNiuFile
	};
}])