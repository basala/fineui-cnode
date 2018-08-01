// !(function() {

//     var Store = BI.inherit(Fix.Model, {
//         _init: function() {
//             this.platform = Dec.platformModel;
//         },
//         childContext: ["testContext", "$selector"],
//         state: function() {
//             return {
//                 testContext: "",
//                 config: {
//                     widgets: {},
//                     style: {}
//                 }
//             };
//         },
//         watch: {
//             "config.**": {
//                 sync: true,
//                 handler: function(newValue, oldValue, options) {
//                     var ob = options.observer;
//                     var keys = [];
//                     while (ob.parent) {
//                         keys.unshift(ob.parentKey);
//                         ob = ob.parent;
//                     }
//                     keys = keys.slice(1);
//                     var json = {};
//                     json[options.key] = Fix.toJSON(options.observer.value[options.key]);
//                     var immutable = BI.Record.latest.mergeDeepIn(keys, json);
//                     BI.Record.modify(immutable);
//                 }
//             },
//             "config.**||1": function() {
//                 BI.Record.record();
//             },
//             selectedHash: function() {}
//         },
//         created: function() {
//             var immutable = Immutable.fromJS(this.model.config);
//             BI.Record.modify(immutable);
//         },
//         computed: {
//             selectedHash: function() {
//                 return this.platform.selectedHash;
//             },
//             $selector: function() {
//                 this.selector = BI.createSelector(this.model.config);
//                 this.selector.fill();
//                 return this.selector;
//             }
//         }
//     });
//     BI.model("dec.model.main", Store);
// })();
