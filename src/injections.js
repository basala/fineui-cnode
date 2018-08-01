// !(function () {
//     Dec.injection.injectLayoutStrategy({
//         layout: function (header, nav, body) {
//             return {
//                 type: "bi.border",
//                 ref: function (_ref) {
//                     window.root = _ref;
//                 },
//                 items: {
//                     north: {
//                         el: header,
//                         height: 120
//                     },
//                     west: {
//                         el: nav,
//                         width: 230
//                     },
//                     center: {
//                         el: body
//                     }
//                 }
//             };
//         }
//     });

//     Dec.injection.injectHeader({
//         widget: function () {
//             return {
//                 type: "dec.header"
//             };
//         }
//     });
//     Dec.injection.injectNav({
//         widget: function () {
//             return {
//                 type: "dec.nav",
//                 cls: "bi-border-top bi-border-bottom bi-border-right"
//             };
//         }
//     });
//     Dec.injection.injectBody({
//         widget: function () {
//             return {
//                 type: "dec.body",
//                 cls: "bi-border-top bi-border-bottom"
//             };
//         }
//     });
// })();
