(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e0bdfac"],{"0849":function(t,e,s){},"2a37":function(t,e,s){"use strict";s("0849")},3019:function(t,e,s){"use strict";s("5ee7")},3152:function(t,e,s){"use strict";s("a2c0")},"5ee7":function(t,e,s){},a2c0:function(t,e,s){},a481:function(t,e,s){"use strict";var a=s("cb7c"),r=s("4bf8"),n=s("9def"),i=s("4588"),o=s("0390"),l=s("5f1b"),c=Math.max,d=Math.min,u=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};s("214f")("replace",2,(function(t,e,s,f){return[function(a,r){var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n,r):s.call(String(n),a,r)},function(t,e){var r=f(s,t,this,e);if(r.done)return r.value;var u=a(t),v=String(this),m="function"===typeof e;m||(e=String(e));var p=u.global;if(p){var b=u.unicode;u.lastIndex=0}var _=[];while(1){var C=l(u,v);if(null===C)break;if(_.push(C),!p)break;var P=String(C[0]);""===P&&(u.lastIndex=o(v,n(u.lastIndex),b))}for(var w="",y=0,x=0;x<_.length;x++){C=_[x];for(var O=String(C[0]),E=c(d(i(C.index),v.length),0),k=[],I=1;I<C.length;I++)k.push(h(C[I]));var j=C.groups;if(m){var S=[O].concat(k,E,v);void 0!==j&&S.push(j);var $=String(e.apply(void 0,S))}else $=g(O,v,E,k,j,e);E>=y&&(w+=v.slice(y,E)+$,y=E+O.length)}return w+v.slice(y)}];function g(t,e,a,n,i,o){var l=a+t.length,c=n.length,d=m;return void 0!==i&&(i=r(i),d=v),s.call(o,d,(function(s,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(l);case"<":o=i[r.slice(1,-1)];break;default:var d=+r;if(0===d)return s;if(d>c){var v=u(d/10);return 0===v?s:v<=c?void 0===n[v-1]?r.charAt(1):n[v-1]+r.charAt(1):s}o=n[d-1]}return void 0===o?"":o}))}}))},a69d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card"},[s("router-link",{attrs:{to:{name:"eventsInfo",params:{id:t.event._id}}}},[s("img",{staticClass:"card-img-top",attrs:{src:t.event.picture.thumbnail}})]),s("div",{staticClass:"bg-atlas2 px-3 py-2 body-card",style:t.windowWidth>=768&&t.windowWidth<=991?"min-height: 150px":""},[s("router-link",{staticClass:"router-link",attrs:{to:{name:"eventsInfo",params:{id:t.event._id}}}},[s("h5",{staticClass:"text-white m-0"},[s("b",{staticClass:"text-atlas1"},[t._v("["+t._s(t.event.category)+"]")]),t._v("\n\t\t\t\t\t"+t._s(t.event.name)+"\n\t\t\t\t")])]),s("div",{staticClass:"text-atlas3 event-card-body"},[s("div",{staticClass:"mb-2"},[t._l(t.event.tags,(function(e,a){return[a<=2?s("router-link",{key:"event_"+t.event._id+"tag_"+e._id,staticClass:"text-atlas3",attrs:{to:{name:"events",query:{tags:e.name}}}},[t._v(t._s("#"+e.name+" "))]):3===a?s("span",{key:a},[t._v("e mais "+t._s(t.event.tags.length-3)+" [...]")]):t._e()]})),t.ended?s("div",[t._v(t._s(t.getShortDescription()))]):t._e()],2),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("i",{staticClass:"fa fa-map-marker-alt text-atlas1",attrs:{"aria-hidden":"true"}}),s("router-link",{staticClass:"text-atlas3 ml-1",attrs:{to:{name:"events",query:{sala:t.event.classroom}}}},[t._v(t._s(t.event.classroom))])],1),s("div",{staticClass:"col-6"},[s("i",{staticClass:"fa fa-calendar-alt text-atlas1",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\t"+t._s(t._f("moment")(t.$moment(t.event.dateStart).format("YYYY-MM-DD")+"T"+t.event.hourStart,"from","now"))+"\n\t\t\t\t\t")])]),s("div",[s("i",{staticClass:"fa fa-microphone-alt text-atlas1",attrs:{"aria-hidden":"true"}}),s("router-link",{staticClass:"text-atlas3",attrs:{to:{name:"profile",params:{username:t.event.author.username}}}},[t._v(" @"+t._s(t.event.author.username))])],1),s("div",[s("i",{staticClass:"fa fa-users text-atlas1",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t"+t._s(t.event.enrollments.length)+" "+t._s(t.$moment(t.event.dateEnd.substr(0,10)+" "+t.event.hourEnd).isBefore(t.$moment())?1===t.event.enrollments.length?"foi":"foram":1===t.event.enrollments.length?"vai":"vão")+"\n\t\t\t\t")])])],1)],1)])},r=[],n={props:["event","ended"],created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},data:function(){return{windowWidth:0}},methods:{handleResize:function(){this.windowWidth=window.innerWidth},getShortDescription:function(){return this.event.description.length<=100?this.event.description:this.event.description.substr(0,this.event.description.indexOf(" ",250))+"..."}}},i=n,o=(s("3152"),s("2877")),l=Object(o["a"])(i,a,r,!1,null,"4579369a",null);e["a"]=l.exports},c66d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.loading?s("div",{staticClass:"text-center"},[s("p",{staticClass:"mb-5"},[t._v(" ")]),s("b-spinner",{staticClass:"mt-5",staticStyle:{width:"8rem",height:"8rem"},attrs:{variant:"atlas",label:"A carregar..."}})],1):s("div",[s("div",[s("TitleAtlas",[t._v("\n\t\t\t\tPerfil\n\t\t\t\t"),t.btnConditions()?s("button",{staticClass:"btn btn-atlas2",on:{click:function(e){t.modalProfile=!0}}},[s("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"}})]):t._e(),t.getLoggedUser.username?[3===t.getLoggedUser.profileId&&t.user._id!==t.getLoggedUser._id?s("button",{staticClass:"btn btn-danger ml-2",on:{click:function(e){return t.btnRemoveClicked()}}},[s("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})]):t._e()]:t._e()],2),s("div",{staticClass:"row"},[s("div",{staticClass:"ml-auto mr-auto mb-2 col-lg-3 col-md-4 col-6 text-center"},[s("img",{staticClass:"img-fluid img-thumbnail rounded-circle",attrs:{src:t.user.picture}}),s("button",{staticClass:"btn btn-atlas1 mt-2 col-12",class:1===t.user.profileId?"btn-atlas3":2===t.user.profileId?"btn-atlas2":"btn-atlas1",attrs:{id:"profile-name"}},[t._v(t._s(t.getProfileName()))])]),s("div",{staticClass:"col-lg-9 col-md-8 col-12"},[s("vs-list",[s("vs-list-item",{attrs:{icon:"person",title:"Nome",subtitle:t.user.firstName+" "+t.user.lastName}}),s("vs-list-item",{attrs:{icon:"email",title:"Email",subtitle:t.user.email}}),s("vs-list-item",{attrs:{icon:"public",title:"Nome de utilizador",subtitle:"@"+t.user.username}}),s("vs-list-item",{attrs:{icon:"date_range",title:"Registo",subtitle:t._f("moment")(t.$moment(t.user.createdAt),"from","now")}})],1)],1)])],1),3===t.user.profileId||3!==t.user.profileId&&!(t.user.interests.tags.length||t.user.interests.courses.length||t.user.interests.proponents.length)?t._e():s("div",{staticClass:"mt-5"},[s("TitleAtlas",[t._v("\n\t\t\t\tInteresses\n\t\t\t\t"),t.btnConditions()?s("button",{staticClass:"btn btn-atlas2",on:{click:function(e){t.modalInterests=!0}}},[s("i",{staticClass:"fa fa-edit",attrs:{"aria-hidden":"true"}})]):t._e()]),t.user.interests.tags.length||t.user.interests.courses.length||t.user.interests.proponents.length||t.getLoggedUser.username?s("vs-list",[t.user.interests.tags.length?s("vs-list-item",{attrs:{icon:"local_offer",title:"Tags",subtitle:"#"+t.user.interests.tags.map((function(t){return t.name})).join(" #")}}):t._e(),t.user.interests.courses.length?s("vs-list-item",{attrs:{icon:"school",title:"Cursos",subtitle:t.user.interests.courses.map((function(t){return t.name+" ("+t.abbreviation+")"})).join(", ")}}):t._e(),t.user.interests.proponents.length?s("vs-list-item",{attrs:{icon:"person",title:"Proponentes",subtitle:"@"+t.user.interests.proponents.map((function(t){return t.username})).join(" @")}}):t._e()],1):s("p",[t._v("Nenhum interesse selecionado.")])],1),1!==t.user.profileId?s("div",{staticClass:"mt-5"},[s("TitleAtlas",[t._v("Eventos criados - "+t._s(t.events.created.length))]),t.windowWidth>=768?t._l(t.getCreatedEventsBySelectedPage,(function(t){return s("EventListItem",{key:"event_"+t._id,staticClass:"mb-1",attrs:{event:t}})})):t._l(t.getCreatedEventsBySelectedPage,(function(t){return s("EventCard",{key:"event_"+t._id,staticClass:"mb-1",attrs:{event:t}})})),t.events.created.length>t.eventsPerPage?s("div",{staticClass:"mt-3"},[s("vs-pagination",{attrs:{total:t.totalPagesCreated},model:{value:t.currentPageCreated,callback:function(e){t.currentPageCreated=e},expression:"currentPageCreated"}})],1):t._e()],2):t._e(),3!==t.user.profileId&&t.events.enrolled.length?s("div",{staticClass:"mt-5"},[s("TitleAtlas",[t._v("Eventos inscrito - "+t._s(t.events.enrolled.length))]),t.windowWidth>=768?t._l(t.getEnrolledEventsBySelectedPage,(function(t){return s("EventListItem",{key:t._id,staticClass:"mb-1",attrs:{event:t}})})):t._l(t.getEnrolledEventsBySelectedPage,(function(t){return s("EventCard",{key:t._id,staticClass:"mb-1",attrs:{event:t}})})),t.events.enrolled.length>t.eventsPerPage?s("div",{staticClass:"mt-3"},[s("vs-pagination",{attrs:{total:t.totalPagesEnrolled},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()],2):t._e(),3!==t.user.profileId?s("b-modal",{attrs:{title:"Editar interesses","header-bg-variant":"atlas1","header-text-variant":"white",centered:!0,"hide-footer":!0},model:{value:t.modalInterests,callback:function(e){t.modalInterests=e},expression:"modalInterests"}},[s("FormCreateAccount",{attrs:{editInterests:t.user}})],1):t._e(),s("b-modal",{attrs:{title:"Editar perfil","header-bg-variant":"atlas1","header-text-variant":"white",centered:!0,"hide-footer":!0},model:{value:t.modalProfile,callback:function(e){t.modalProfile=e},expression:"modalProfile"}},[s("FormCreateAccount",{attrs:{editProfile:t.user}})],1)],1)])},r=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("ade3")),i=(s("7f7f"),s("96cf"),s("1da1")),o=(s("a481"),s("2f62")),l=s("fc6e"),c=s("f71c"),d=s("d85a"),u=s("a69d");function v(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var h={components:{TitleAtlas:l["a"],FormCreateAccount:c["a"],EventListItem:d["a"],EventCard:u["a"]},created:function(){var t=this;this.$store.subscribe((function(e){switch(e.type){case"EDIT_USER":t.user=e.payload,t.getLoggedUser._id===t.user._id&&t.$store.commit("UPDATE_LOGGED_USER",{_id:t.user._id,picture:t.user.picture,profileId:t.user.profileId,username:t.user.username}),t.$router.replace({name:"profile",params:{username:e.payload.username}}),t.modalProfile=!1;break;case"EDIT_USER_INTERESTS_BY_ID":t.modalInterests=!1;break}})),window.addEventListener("resize",this.handleResize),this.handleResize(),this.loadPage()},data:function(){return{loading:!1,modalProfile:!1,modalInterests:!1,windowWidth:0,eventsPerPage:5,currentPage:1,currentPageCreated:1,user:[],events:{created:[],enrolled:[]}}},watch:{$route:function(){this.currentPage=1,this.currentPageCreated=1,this.loadPage()}},methods:{loadPage:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$store.commit("RESET_STATE"),e=this.$route.params.username,t.prev=2,this.loading=!0,t.next=6,this.$http.get("/users/profile/".concat(e));case 6:s=t.sent,200===s.status&&(this.user=s.data.content.user,this.events.enrolled=s.data.content.events.enrolled,1!==this.user.profileId&&s.data.content.events.created&&(this.events.created=s.data.content.events.created)),this.loading=!1,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0.response);case 14:case"end":return t.stop()}}),t,this,[[2,11]])})));function e(){return t.apply(this,arguments)}return e}(),handleResize:function(){this.windowWidth=window.innerWidth},getProfileName:function(){switch(this.user.profileId){case 1:return"Aluno";case 2:return"Proponente de evento";case 3:return"Administrador"}},btnConditions:function(){return!(!this.getLoggedUser.username||3!==this.getLoggedUser.profileId&&this.getLoggedUser._id!==this.user._id)},btnRemoveClicked:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get("/events/authors/".concat(this.user._id));case 3:e=t.sent,this.$vs.dialog({type:"confirm",color:"danger",title:"Impossível remover utilizador",acceptText:"Entendido",cancelText:"",text:"O utilizador ".concat(this.user.username," não pode ser removido, uma vez que tem ").concat(e.data.content.events.length," ").concat(1===e.data.content.events.length?"evento criado":"eventos criados",": ").concat(e.data.content.events.map((function(t){return t.name})).join(", "),". Deve primeiro remover ").concat(1===e.data.content.events.length?"o evento":"os eventos"," em questão.")}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),"eventNotFound"===t.t0.response.data.name?this.$vs.dialog({type:"confirm",color:"danger",title:"Remover utilizador?",acceptText:"Remover",cancelText:"Cancelar",text:"O utilizador ".concat(this.user.username," será removido para sempre, assim como todos os dados associados a este (discussões em eventos, respostas em discussões e participações em eventos)."),accept:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s.loading=!0,t.prev=1,t.next=4,s.$http.delete("/users/".concat(s.user._id));case 4:e=t.sent,e.data.success&&(s.$router.replace({name:"home"}),s.$snotify.success("Utilizador removido","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0})),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),s.$snotify.error("Erro ao remover utilizador","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),s.loading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));function e(){return t.apply(this,arguments)}return e}()}):this.$snotify.error("Erro ao remover utilizador","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0});case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()},computed:m(m({},Object(o["c"])(["getLoggedUser"])),{},{totalPagesCreated:function(){return Math.ceil(this.events.created.length/this.eventsPerPage)},getCreatedEventsBySelectedPage:function(){return this.events.created.length>this.eventsPerPage?this.events.created.slice((this.currentPageCreated-1)*this.eventsPerPage,(this.currentPageCreated-1)*this.eventsPerPage+this.eventsPerPage):this.events.created},totalPagesEnrolled:function(){return Math.ceil(this.events.enrolled.length/this.eventsPerPage)},getEnrolledEventsBySelectedPage:function(){return this.events.enrolled.length>this.eventsPerPage?this.events.enrolled.slice((this.currentPage-1)*this.eventsPerPage,(this.currentPage-1)*this.eventsPerPage+this.eventsPerPage):this.events.enrolled}})},f=h,g=(s("2a37"),s("2877")),p=Object(g["a"])(f,a,r,!1,null,null,null);e["default"]=p.exports},d85a:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex event-list-item"},[s("router-link",{staticClass:"p-0 col-xl-3 col-lg-4 col-6",attrs:{to:{name:"eventsInfo",params:{id:t.event._id}}}},[s("img",{staticClass:"card-img-top",staticStyle:{height:"100%","border-radius":"0"},attrs:{src:t.event.picture.thumbnail}})]),s("div",{staticClass:"bg-atlas2 py-2 col-xl-9 col-lg-8 col-6"},[s("router-link",{staticClass:"router-link",attrs:{to:{name:"eventsInfo",params:{id:t.event._id}}}},[s("h5",{staticClass:"text-white atlas-bold"},[s("b",{staticClass:"text-atlas1"},[t._v("["+t._s(t.event.category)+"]")]),s("span",{staticClass:"atlas-semi-bold ml-1"},[t._v(t._s(t.event.name))])])]),s("div",{staticClass:"text-atlas3 event-card-body"},[s("div",{staticClass:"float-left mb-3"},[t._v(t._s(t.getShortDescription()))]),s("div",[s("div",{staticClass:"float-left"},t._l(t.event.tags,(function(e){return s("router-link",{key:"event_"+t.event._id+"tag_"+e._id,staticClass:"text-atlas3",attrs:{to:{name:"events",query:{tags:e.name}}}},[t._v(t._s("#"+e.name+" "))])})),1),s("div",{staticClass:"float-right row"},[s("div",{staticClass:"ml-3"},[s("i",{staticClass:"fa fa-map-marker-alt text-atlas1",attrs:{"aria-hidden":"true"}}),s("router-link",{staticClass:"text-atlas3 ml-1",attrs:{to:{name:"events",query:{sala:t.event.classroom}}}},[t._v(t._s(t.event.classroom))])],1),s("div",{staticClass:"ml-3"},[s("i",{staticClass:"fa fa-calendar-alt text-atlas1",attrs:{"aria-hidden":"true"}}),t._v("\n\t\t\t\t\t\t"+t._s(t._f("moment")(t.$moment(t.event.dateStart).format("YYYY-MM-DD")+"T"+t.event.hourStart,"from","now"))+"\n\t\t\t\t\t")]),s("div",{staticClass:"ml-3"},[s("i",{staticClass:"fa fa-microphone-alt text-atlas1",attrs:{"aria-hidden":"true"}}),s("router-link",{staticClass:"text-atlas3",attrs:{to:{name:"profile",params:{username:t.event.author.username}}}},[t._v(" @"+t._s(t.event.author.username))])],1),s("div",{staticClass:"mx-3"},[s("i",{staticClass:"fa fa-users text-atlas1",attrs:{"aria-hidden":"true"}}),t._v(" \n\t\t\t\t\t\t"),t.event.enrollments.length?[t._v(t._s(t.event.enrollments.length)+" "+t._s(t.$moment(t.event.dateEnd.substr(0,10)+" "+t.event.hourEnd).isBefore(t.$moment())?1===t.event.enrollments.length?"foi":"foram":1===t.event.enrollments.length?"vai":"vão"))]:[t._v(t._s(t.$moment(t.event.dateEnd.substr(0,10)+" "+t.event.hourEnd).isBefore(t.$moment())?"Sem inscrições":"Ainda sem inscrições"))]],2)])])])],1)],1)},r=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("ade3")),i=s("2f62");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var c={props:["event"],data:function(){return{someDate:"2019-01-13",loading:!1}},methods:{getShortDescription:function(){return this.event.description.length<=100?this.event.description:this.event.description.substr(0,this.event.description.indexOf(" ",250))+"..."}},computed:l({},Object(i["c"])(["getUserById","getTagById"]))},d=c,u=(s("3019"),s("2877")),v=Object(u["a"])(d,a,r,!1,null,"71144de0",null);e["a"]=v.exports},fc6e:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",{staticClass:"bg-atlas1 text-white pl-3 py-2 atlas-bold"},[t._t("default")],2)},r=[],n=s("2877"),i={},o=Object(n["a"])(i,a,r,!1,null,null,null);e["a"]=o.exports}}]);