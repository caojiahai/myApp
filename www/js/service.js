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
