//toast
app.factory('Toast', function () {
    return {
        show: function (text, time, width) {
            var time = time || 1000;
            var width = width || '160';
            var toast = '<p id="myToast" style="text-align: center;position: absolute;z-index: 1000000;background-color: #000;opacity: 0.7;' +
                'color: #fff;left: 50%;margin-left: -' + width / 2 + 'px;width: ' + width + 'px;border-radius: 10px;padding: 10px;top:50%;margin-top: -25px;">' + text + '</p>'
            var body = angular.element(document.querySelector('body'))
            body.append(toast);
            setTimeout(function () {
                angular.element(document.querySelector('#myToast')).remove()
            }, time)
        }
    }
})
//loading
app.factory('loading', ['$ionicLoading', '$timeout', 'Toast',
    function ($ionicLoading, $timeout, Toast) {
        var to,
            tmp1 = '<ion-spinner icon="ios" class="customLoading"></ion-spinner>',
            tmp2 = '<p style="background-color: #000;padding: 10px 20px;color: #fff;border-radius: 10px;" class="text-center">';
        var show = function (prompt) {
            $ionicLoading.show({
                template: prompt ? tmp2 + prompt + '</p>' : tmp1
            });
            if (!prompt) {
                to = $timeout(function () {
                    $ionicLoading.hide();
                }, 15000)
            }
        }
        var hide = function () {
            $ionicLoading.hide();
            $timeout.cancel(to);
        }

        var prompt = function (template, time) {
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
    }]);
