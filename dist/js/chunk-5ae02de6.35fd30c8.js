(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ae02de6"],{3432:function(t,e,a){"use strict";a("3ff2")},"3ff2":function(t,e,a){},fc6e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"bg-atlas1 text-white pl-3 py-2 atlas-bold"},[t._t("default")],2)},n=[],r=a("2877"),i={},o=Object(r["a"])(i,s,n,!1,null,null,null);e["a"]=o.exports},fda7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5"},[t.getNotifications.length?a("div",[a("TitleAtlas",[t._v("As Minhas Notificações")]),t._l(t.getNotifications,(function(e){return a("NotificationCard",{key:e.eventId,staticClass:"mb-1",attrs:{event:t.getEventById(e.eventId)}})}))],2):a("div",[a("TitleAtlas",[t._v("As Minhas Notificações")]),[t._v("Não Tem Notificações Novas")]],2)])},n=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),i=a("fc6e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex event-list-item"},[a("router-link",{staticClass:"p-0 col-xl-3 col-lg-4 col-6",attrs:{to:{name:"eventsInfo",params:{id:t.event.id}}}},[a("img",{staticClass:"card-img-top",staticStyle:{height:"100%","border-radius":"0"},attrs:{src:t.event.picture.thumbnail}})]),a("div",{staticClass:"bg-atlas2 py-2 col-xl-9 col-lg-8 col-6"},[a("router-link",{staticClass:"router-link",attrs:{to:{name:"eventsInfo",params:{id:t.event.id}}}},[a("h5",{staticClass:"text-white atlas-bold"},[a("b",{staticClass:"text-atlas1"},[t._v("["+t._s(t.event.category)+"]")]),a("span",{staticClass:"atlas-semi-bold ml-1"},[t._v(t._s(t.event.name))])])]),a("div",{staticClass:"text-atlas3 event-card-body"},[a("div",{staticClass:"float-left mb-3"},[t._v(t._s(t.getEventShortDescription(t.event.id)))]),a("div",[a("div",{staticClass:"float-left"},t._l(t.event.tags,(function(e){return a("router-link",{key:"event_"+t.event.id+"tag_"+e,staticClass:"text-atlas3",attrs:{to:{name:"events",query:{tags:t.getTagById(e).name}}}},[t._v(t._s("#"+t.getTagById(e).name+" "))])})),1),a("div",{staticClass:"float-right row"},[a("div",{staticClass:"ml-3"},[a("i",{staticClass:"fa fa-map-marker-alt text-atlas1",attrs:{"aria-hidden":"true"}}),a("router-link",{staticClass:"text-atlas3 ml-1",attrs:{to:{name:"events",query:{sala:t.event.classroom}}}},[t._v(t._s(t.event.classroom))])],1),a("div",{staticClass:"ml-3"},[a("i",{staticClass:"fa fa-calendar-alt text-atlas1",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t._f("moment")(t.event.dateStart+" "+t.event.hourStart,"from","now"))+"\n          ")]),a("div",{staticClass:"ml-3"},[a("i",{staticClass:"fa fa-microphone-alt text-atlas1",attrs:{"aria-hidden":"true"}}),a("router-link",{staticClass:"text-atlas3",attrs:{to:{name:"profile",params:{username:t.getUserById(t.event.authorId).username}}}},[t._v(" @"+t._s(t.getUserById(t.event.authorId).username))])],1),a("div",{staticClass:"mx-3"},[a("i",{staticClass:"fa fa-users text-atlas1",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.event.enrollments.length)+" "+t._s(t.$moment(t.event.dateEnd+" "+t.event.hourEnd).isBefore(t.$moment())?"foram":1===t.event.enrollments.length?"vai":"vão")+"\n          ")])])])])],1)],1)},c=[],l=a("2f62");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={props:["event"],created:function(){},data:function(){return{someDate:"2019-01-13"}},computed:u({},Object(l["c"])(["getUserById","getTagById","getEventShortDescription"]))},v=f,m=(a("3432"),a("2877")),p=Object(m["a"])(v,o,c,!1,null,"fde4144e",null),g=p.exports;function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var y={components:{TitleAtlas:i["a"],NotificationCard:g},data:function(){return{}},methods:{handleResize:function(){this.windowWidth=window.innerWidth}},computed:h(h({},Object(l["c"])(["getNotificationsByUserId","getEventById","getLoggedUserId"])),{},{getNotifications:function(){return this.getNotificationsByUserId(this.getLoggedUserId)}}),created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},O=y,_=Object(m["a"])(O,s,n,!1,null,null,null);e["default"]=_.exports}}]);