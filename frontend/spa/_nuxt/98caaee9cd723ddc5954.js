(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{205:function(t,e,r){var content=r(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("5a849442",content,!1,{sourceMap:!1})},206:function(t,e,r){var content=r(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("797e11b0",content,!1,{sourceMap:!1})},217:function(t,e,r){"use strict";var n=r(205);r.n(n).a},218:function(t,e,r){(e=r(21)(!1)).push([t.i,".pagePostItem .overview{display:block;margin-top:20px}.pagePostItem h1{margin-bottom:20px}.pagePostItem h2{margin-bottom:30px}",""]),t.exports=e},219:function(t,e,r){"use strict";var n=r(206);r.n(n).a},220:function(t,e,r){(e=r(21)(!1)).push([t.i,"#pagePost h5{margin-bottom:20px}",""]),t.exports=e},229:function(t,e,r){"use strict";r.r(e);r(23),r(13),r(14),r(7),r(19),r(26);var n=r(2),o=r(6),c={props:["post","editable"]},l=(r(217),r(11)),v=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pagePostItem"},[t.post?r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"700"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[t._v(t._s(t.post.title))]),t._v(" "),r("v-list-item-subtitle",{staticClass:"mt-5 mb-5"},[t._v(t._s(t.post.description))])],1)],1),t._v(" "),t.post.image?r("v-img",{attrs:{src:t.post.image,"max-height":"300"}}):t._e(),t._v(" "),t.post&&t.post.tags?r("v-card-text",t._l(t.post.tags,(function(e){return r("v-chip",{key:e,staticClass:"ma-2",attrs:{color:"primary"}},[t._v("\n                "+t._s(e)+"\n            ")])})),1):t._e(),t._v(" "),r("v-card-text",{domProps:{innerHTML:t._s(t.post.text)}}),t._v(" "),t.editable?r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:"",to:"/post/edit/"+t.post.id,nuxt:""}},[r("v-icon",[t._v("mdi-lead-pencil")])],1)],1):t._e()],1):t._e()],1)}),[],!1,null,null,null).exports,m=r(69),d=r(10);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={components:{Post:v},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)(["logged"])),asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.prev=1,e.next=4,m.a.getPost(r.id);case 4:return n=e.sent,e.abrupt("return",{post:n,title:"".concat(n.title),description:"".concat(n.description)});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{post:!1,title:"Error",description:"Error"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}}},_=(r(219),Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"pagePost"}},[e("Post",{attrs:{post:this.post,editable:this.logged}})],1)}),[],!1,null,null,null));e.default=_.exports}}]);