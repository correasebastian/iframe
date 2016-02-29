var vmD, ele, cele;

(function() {
    'use strict';

    angular
        .module('starter')
        .filter('trusted', trusted);

    trusted.$inject = ['$sce']

    function trusted($sce) {
        return filterFilter;

        ////////////////

        function filterFilter(url) {
            return $sce.trustAsResourceUrl(url);
        };
    }

})();

(function() {
    'use strict';

    angular
        .module('starter.directives', [])
        .directive('esportudoIframe', esportudoIframe);

    esportudoIframe.$inject = [];

    /* @ngInject */
    function esportudoIframe() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
                articleUrl: '@'
            },
            templateUrl: 'templates/iframe-esportudo.html'
        };
        return directive;

        function link(scope, element, attrs, ctrl) {
            ele = element;
            console.log(scope, element, attrs, ctrl);
            ctrl.calculateHeight();
            var jIframe = element.find('iframe');
            jIframe.on('load', ctrl.hideSpinner)

            /*     jIframe[0].onload = function() {
                     // onSuccessLoad
                     console.log('iframe loaded');
                     ctrl.hideSpinner();
                     scope.$apply();
                     // $ionicLoading.hide();

                     // $timeout(function() {
                     //     $rootScope.global.spinner = false;

                     // }, 10);

                 };*/
        }
    }

    Controller.$inject = ['$window', '$element', '$timeout']
        /* @ngInject */
    function Controller($window, $element, $timeout) {
        var vm = this;
        vmD = vm;
        // var _hide = null;
        vm.hide = false
        console.log('controller', vm);
        // var tabs in px
        var tabsHeight = 50;
        //var headers in px
        var headersHeight = 45;

        vm.hideSpinner = hideSpinner;
        vm.calculateHeight = calculateHeight;

        function hideSpinner() {
            console.log('hidding spinner');
            /*   if (_hide === null)
                   return false;
               if (_hide === false)
                   return true;*/
            // vm.hide = true;

            ////con el timeout funciona bien, desde el controlador, o puedo usar el scope.apply desde la funcion link, ambos funcionan bien,seria bueno saber cual es una mejor practiva
            $timeout(function() {
                vm.hide = true;
            }, 0);
        }

        function calculateHeight() {
            var iframeHeight = $window.screen.height - tabsHeight - headersHeight;
            var iframeHeightPx = iframeHeight + 'px';
            console.log(iframeHeightPx);
            cele = $element;
            $element.find('iframe').css({ 'min-height': iframeHeightPx, 'min-width': '100%' })
                // return iframeHeightPx;
        }

    }
})();


// var vmD, ele, cele;

// (function() {
//     'use strict';

//     angular
//         .module('starter.directives', [])
//         .directive('scmesportudo', iframeEsportudo);
//     iframeEsportudo.$inject = [];

//     /* @ngInject */
//     function iframeEsportudo() {
//         // Usage:
//         //
//         // Creates:
//         //
//         var directive = {
//             bindToController: true,
//             controller: Controller,
//             controllerAs: 'vm',
//             link: link,
//             restrict: 'E',
//             scope: {
//                 // url: '@'
//             },
//             templateUrl: 'templates/iframe-esportudo.html'
//         };
//         return directive;

//         function link(scope, element, attrs, Ctrl) {
//             console.log(scope, element, attrs, Ctrl);
//             ele = element;
//             // ele.addClass('after');
//             // ele.addClass('iframe-esportudo');
//             Ctrl.hideSpinner();
//             Ctrl.calculateHeight()
//             console.log()

//         }
//     }

//     Controller.$inject = ['$window', '$element']

//     /* @ngInject */
//     function Controller($window, $element) {
//         var vm = this;
//         //var tabs in px
//         var tabsHeight = 50;

//         //var headers in px
//         var headersHeight = 45;
//         vm.name = "iframe-esportudo controller";
//         vmD = vm;
//         vm.hideSpinner = hideSpinner;
//         vm.calculateHeight = calculateHeight;

//         function hideSpinner() {
//             console.log('hidding spinner')
//         }

//         function calculateHeight() {
//             var iframeHeight = $window.screen.height - tabsHeight - headersHeight;
//             var iframeHeightPx = iframeHeight + 'px';
//             console.log(iframeHeightPx);
//             cele = $element;
//             $element.find('iframe').css({ "min-height": iframeHeightPx })
//                 // return iframeHeightPx;
//         }



//     }
// })();

// // (function() {
// //     'use strict';

// //     angular
// //         .module('starter.directives', [])
// //         .directive('iframeContainer', iframeContainer);

// //     iframeContainer.$inject = [];

// //     /* @ngInject */
// //     function iframeContainer() {
// //         // Usage:
// //         //
// //         // Creates:
// //         //
// //         var directive = {
// //             bindToController: true,
// //             controller: Controller,
// //             controllerAs: 'vm',
// //             link: link,
// //             restrict: 'A',
// //             scope: {},
// //             // template: '<span>{{vm.state}}</span>'
// //             templateUrl: 'templates/iframe-container.html',
// //             transclude: true
// //         };
// //         return directive;

// //         function link(scope, element, attrs, Ctrl) {
// //             console.log(scope, element, attrs, Ctrl);
// //             // ele = element;
// //             // ele.addClass('after');
// //             ele.addClass('esportudo-iframe');
// //             Ctrl.hideSpinner();
// //             Ctrl.calculateHeight()
// //             console.log()

// //         }
// //     }

// //     Controller.$inject = ['$window', '$element']

// //     /* @ngInject */
// //     function Controller($window, $element) {
// //         var vm = this;
// //         //var tabs in px
// //         var tabsHeight = 50;

// //         //var headers in px
// //         var headersHeight = 45;
// //         vm.name = "iframe-container controller";
// //         vmD = vm;
// //         vm.hideSpinner = hideSpinner;
// //         vm.calculateHeight = calculateHeight;

// //         function hideSpinner() {
// //             console.log('hidding spinner')
// //         }

// //         function calculateHeight() {
// //             var iframeHeight = $window.screen.height - tabsHeight - headersHeight;
// //             var iframeHeightPx = iframeHeight + 'px';
// //             console.log(iframeHeightPx);
// //             cele = $element;
// //             $element.css({ "min-height": iframeHeightPx })
// //                 // return iframeHeightPx;
// //         }



// //     }
// // })();


// // (function() {
// //     'use strict';

// //     angular
// //         .module('starter')
// //         .directive('testTransclude', testTransclude);

// //     testTransclude.$inject = [];

// //     /* @ngInject */
// //     function testTransclude() {
// //         // Usage:
// //         //
// //         // Creates:
// //         //
// //         var directive = {
// //             bindToController: true,
// //             controller: Controller,
// //             controllerAs: 'vm',
// //             link: link,
// //             restrict: 'A',
// //             transclude: true,
// //             templateUrl: 'templates/test-transclude.html',

// //         };
// //         return directive;

// //         function link(scope, element, attrs) {}
// //     }

// //     /* @ngInject */
// //     function Controller() {

// //     }
// // })();
