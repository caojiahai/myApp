//图片选择器
app.directive('imageSelector', ['Toast', '$timeout', function (Toast, $timeout) {
    var tmp = '<input  ng-model="file" style="opacity: 0;position: absolute;top:0;left:0; z-index: 1000; width:100%;height:100%;" type="file" accept="image/*">'
    return {
        restrict: 'AE',
        template: tmp,
        replace: true,
        scope: {
            multiple: '@',//是否多选  true 多选 false 一张
            images: '=',//文件列表
            indent: '@',// 图片最多上传张数	不传默认为最多上传1张
            count: '@' //  同一界面，多个上传
        },
        link: function (scope, $element) {
            if (scope.multiple) {
                $element[0].multiple = true;
            } else {
                $element[0].multiple = false;
            }
            if (scope.indent == undefined) {
                scope.indent = 1;
            }
            if (scope.count) {
                scope.count = 1;
            }
            scope.sendImg = false;
            $element.bind('change', function (e) {
                var files = $element[0].files;
                if (!scope.sendImg) {
                    if (files.length > scope.indent) {
                        Toast.show('图片最多一次上传' + scope.indent + '张！');
                        return false;
                    }
                    scope.$emit('imageSelectorChange', files, scope.count);
                    //防止重复提交
                    scope.sendImg = true;
                    $timeout(function () {
                        scope.sendImg = false;
                    }, 100)
                }
            })
        }
    }
}])