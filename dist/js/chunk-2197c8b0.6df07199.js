(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2197c8b0"],{"2fdb":function(e,t,s){"use strict";var r=s("5ca1"),a=s("d2c8"),i="includes";r(r.P+r.F*s("5147")(i),"String",{includes:function(e){return!!~a(this,e,i).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,s){var r=s("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},6762:function(e,t,s){"use strict";var r=s("5ca1"),a=s("c366")(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},d2c8:function(e,t,s){var r=s("aae3"),a=s("be13");e.exports=function(e,t,s){if(r(t))throw TypeError("String#"+s+" doesn't accept regex!");return String(a(e))}},f71c:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-form",{on:{submit:function(t){return t.preventDefault(),e.submitForm()}}},[e.editInterests?e._e():[s("b-form-group",{class:e.editProfile?"":"mt-4",attrs:{label:"Nome próprio","label-for":"firstName","invalid-feedback":e.firstNameInvalidFeedback,state:e.firstNameState}},[s("b-form-input",{attrs:{id:"firstName",state:e.firstNameState,type:"text",maxlength:"20"},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),s("b-form-group",{attrs:{label:"Apelido","label-for":"lastName","invalid-feedback":e.lastNameInvalidFeedback,state:e.lastNameState}},[s("b-form-input",{attrs:{id:"lastName",state:e.lastNameState,type:"text",maxlength:"20"},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),e.editProfile&&3!==e.getLoggedUser.profileId?e._e():s("b-form-group",{staticClass:"mt-4",attrs:{label:"Utilizador","label-for":"username","invalid-feedback":e.usernameInvalidFeedback,"valid-feedback":e.usernameValidFeedback,state:e.usernameState}},[s("b-form-input",{ref:"username",attrs:{id:"username",state:e.usernameState,type:"text",maxlength:"15"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e.editProfile?e._e():s("b-form-group",{staticClass:"mt-4",attrs:{label:"Palavra-passe","label-for":"password","invalid-feedback":e.passwordInvalidFeedback,state:e.passwordState}},[s("b-form-input",{attrs:{id:"password",state:e.passwordState,type:"password",maxlength:"15"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e.backoffice||e.editProfile?e._e():s("b-form-group",{staticClass:"mt-4",attrs:{label:"Confirmar palavra-passe","label-for":"confirmPassword","invalid-feedback":e.confirmPasswordInvalidFeedback,state:e.confirmPasswordState}},[s("b-form-input",{attrs:{id:"confirmPassword",state:e.confirmPasswordState,type:"password",maxlength:"15"},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1),e.editProfile&&3!==e.getLoggedUser.profileId?e._e():s("b-form-group",{staticClass:"mt-4",attrs:{label:"Email","label-for":"email","invalid-feedback":e.emailInvalidFeedback,state:e.emailState}},[s("b-form-input",{ref:"password",attrs:{id:"email",state:e.emailState,type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("b-form-group",{staticClass:"mt-4",attrs:{"label-for":"picture",state:e.pictureState}},[s("template",{slot:"label"},[s("span",[e._v("URL foto - ")]),s("span",{staticStyle:{"font-style":"italic",color:"rgb(80, 80, 80)"}},[e._v("opcional")])]),s("b-form-input",{attrs:{id:"picture",state:e.pictureState,type:"url"},model:{value:e.picture,callback:function(t){e.picture=t},expression:"picture"}})],2),s("b-form-group",{staticClass:"mt-4",attrs:{label:"Género"}},[s("b-form-radio-group",{attrs:{buttons:"","button-variant":"outline-atlas2",options:e.genders,name:"genders"},model:{value:e.selectedGender,callback:function(t){e.selectedGender=t},expression:"selectedGender"}})],1),e.backoffice||e.editProfile&&3===e.getLoggedUser.profileId?[3===e.getLoggedUser.profileId?s("b-form-group",{staticClass:"mt-4",attrs:{label:"Tipo de utilizador"}},[s("b-form-radio-group",{attrs:{buttons:"",stacked:e.windowWidth<595,"button-variant":"outline-atlas2",options:e.userTypes,name:"userTypes"},model:{value:e.profileId,callback:function(t){e.profileId=t},expression:"profileId"}})],1):e._e()]:e._e()],e.editProfile?e._e():[e.editProfile||e.editInterests?e._e():[s("hr"),s("h5",[e._v("\n\t\t\t\t\tInteresses -\n\t\t\t\t\t"),s("span",{staticStyle:{"font-style":"italic",color:"rgb(80, 80, 80)"}},[e._v("opcional")])])],e.loading.tags&&e.loading.courses?[s("div",{staticClass:"text-center"},[s("b-spinner",{attrs:{variant:"atlas",label:"A carregar..."}})],1)]:[s("b-form-group",{attrs:{label:"Tags","label-for":"filterTag"}},[s("b-form-input",{attrs:{id:"filterTag",type:"text",maxlength:"50",placeholder:"Filtrar tags..."},model:{value:e.filterTags,callback:function(t){e.filterTags=t},expression:"filterTags"}}),s("b-form-checkbox-group",{staticClass:"mt-2 px-1",staticStyle:{"overflow-y":"scroll","max-height":"200px"},attrs:{name:"tags",options:e.getFilteredTags,stacked:!0},model:{value:e.selectedTags,callback:function(t){e.selectedTags=t},expression:"selectedTags"}})],1),s("b-form-group",{staticClass:"mt-4",attrs:{label:"Cursos"}},[s("b-form-checkbox-group",{staticClass:"px-1",attrs:{name:"courses",options:e.courses,stacked:!0},model:{value:e.selectedCourses,callback:function(t){e.selectedCourses=t},expression:"selectedCourses"}})],1)]],s("button",{staticClass:"btn btn-atlas1 col-12 mt-2",attrs:{type:"submit"}},[e.loading.submit?[s("b-spinner",{attrs:{variant:"atlas",small:"",label:"A carregar..."}})]:[e._v(e._s(e.editInterests?"Editar interesses":e.editProfile?"Editar perfil":e.backoffice&&!e.editProfile?"Adicionar utilizador":"Criar conta"))]],2)],2),s("vue-snotify")],1)},a=[],i=(s("8e6e"),s("456d"),s("6762"),s("2fdb"),s("a481"),s("ade3")),n=(s("ac6a"),s("96cf"),s("1da1")),o=(s("7f7f"),s("2f62"));function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var u={name:"FormCreateAccount",props:["backoffice","editProfile","editInterests"],watch:{editProfile:function(e,t){this.firstName=e.name,this.lastName=e.lastName,this.username=e.username,this.password=e.password,this.confirmPassword=e.password,this.email=e.email,this.picture=e.picture,this.selectedGender=e.gender,this.profileId=e.profileId},editInterests:function(e,t){this.filterTags="",this.selectedTags=e.interests.tags,this.selectedCourses=e.interests.courses}},data:function(){return{errors:{username:{value:"",error:!1},email:{value:"",error:!1}},loading:{tags:!1,courses:!1,submit:!1},firstName:"",username:"",lastName:"",password:"",confirmPassword:"",email:"",picture:"",genders:[{text:"Masculino",value:1},{text:"Feminino",value:2}],selectedGender:1,userTypes:[{text:"Aluno",value:1},{text:"Proponente de evento",value:2},{text:"Administrador",value:3}],profileId:1,tags:[],filterTags:"",selectedTags:[],selectedCourses:[],courses:[],attemptSubmit:!1,windowWidth:0}},created:function(){this.backoffice&&(window.addEventListener("resize",this.handleResize),this.handleResize()),this.loadTags(),this.loadCourses(),this.editProfile&&(this.firstName=this.editProfile.firstName,this.lastName=this.editProfile.lastName,this.username=this.editProfile.username,this.email=this.editProfile.email,this.picture=this.editProfile.picture,this.selectedGender=this.editProfile.gender,this.profileId=this.editProfile.profileId),this.editInterests&&(this.filterTags="",this.selectedTags=this.editInterests.interests.tags.map((function(e){return e.name})),this.selectedCourses=this.editInterests.interests.courses.map((function(e){return"".concat(e.name," (").concat(e.abbreviation,")")})))},methods:{loadTags:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loading.tags=!0,e.next=4,this.$http.get("/tags");case 4:t=e.sent,this.tags=t.data.content.tags.map((function(e){return e.name})),this.loading.tags=!1,e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),loadCourses:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loading.courses=!0,e.next=4,this.$http.get("/courses");case 4:t=e.sent,this.courses=t.data.content.courses.map((function(e){return"".concat(e.name," (").concat(e.abbreviation,")")})),this.loading.courses=!1,e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),submitForm:function(){this.attemptSubmit=!0,this.backoffice||this.editProfile||this.editInterests?this.editProfile||this.editInterests?this.editInterests?this.methodEditInterests():this.editAccount():this.createAccount():this.signUp()},signUp:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.firstNameState&&this.lastNameState&&this.usernameState&&this.passwordState&&this.confirmPasswordState&&this.emailState)){e.next=17;break}return this.loading.submit=!0,e.prev=2,e.next=5,this.$http.post("/auth/sign-up",{username:this.username,password:this.password,email:this.email,firstName:this.firstName,lastName:this.lastName,picture:this.picture,gender:this.selectedGender,interests:{tags:this.selectedTags,courses:this.selectedCourses,proponents:[]}});case 5:t=e.sent,this.$snotify.success(t.data.message.pt,"",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),this.$router.push({name:"login"}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](2),s=e.t0.response.data.content.error,s.length?(s.forEach((function(e){"username"===e.type&&(r.errors.username.error=!0,r.errors.username.value=e.value,r.$refs.username.$el.focus()),"email"===e.type&&(r.errors.email.error=!0,r.errors.email.value=e.value,r.errors.username||r.$refs.email.$el.focus())})),this.$snotify.error(e.t0.response.data.message.pt,"",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0})):this.$router.push({name:"home"});case 14:this.loading.submit=!1,e.next=18;break;case 17:this.notifyError();case 18:case"end":return e.stop()}}),e,this,[[2,10]])})));function t(){return e.apply(this,arguments)}return t}(),createAccount:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.firstNameState&&this.lastNameState&&this.usernameState&&this.passwordState&&this.emailState)){e.next=18;break}return this.loading.submit=!0,e.prev=2,e.next=5,this.$http.post("/users",{username:this.username,password:this.password,email:this.email,firstName:this.firstName,lastName:this.lastName,picture:this.picture,gender:this.selectedGender,profileId:this.profileId,interests:{tags:this.selectedTags,courses:this.selectedCourses,proponents:[]}});case 5:t=e.sent,this.$store.commit("CREATED_USER",t.data.content.user),this.$snotify.success("Conta criada com sucesso","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),this.clearForm(),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](2),s=e.t0.response.data.content.error,s.length?(s.forEach((function(e){"username"===e.type&&(r.errors.username.error=!0,r.errors.username.value=e.value,r.$refs.username.$el.focus()),"email"===e.type&&(r.errors.email.error=!0,r.errors.email.value=e.value,r.errors.username||r.$refs.email.$el.focus())})),this.$snotify.error(e.t0.response.data.message.pt,"",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0})):this.$router.push({name:"home"});case 15:this.loading.submit=!1,e.next=19;break;case 18:this.notifyError();case 19:case"end":return e.stop()}}),e,this,[[2,11]])})));function t(){return e.apply(this,arguments)}return t}(),editAccount:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,s,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(3===this.getLoggedUser.profileId){e.next=19;break}if(!this.firstNameState||!this.lastNameState){e.next=16;break}return e.prev=2,this.loading.submit=!0,e.next=6,this.$http.put("/users/".concat(this.editProfile._id),{firstName:this.firstName,lastName:this.lastName,picture:this.picture,gender:this.gender});case 6:t=e.sent,this.$store.commit("EDIT_USER",t.data.content.user),this.$snotify.success("Perfil editado","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),this.loading.submit=!1,e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](2);case 14:e.next=17;break;case 16:this.notifyError();case 17:e.next=34;break;case 19:if(!(this.firstNameState&&this.lastNameState&&this.usernameState&&this.emailState)){e.next=33;break}return e.prev=20,this.loading.submit=!0,e.next=24,this.$http.put("/users/".concat(this.editProfile._id),{firstName:this.firstName,lastName:this.lastName,username:this.username,email:this.email,picture:this.picture,gender:this.gender,profileId:this.profileId});case 24:s=e.sent,s.data.success?(this.$snotify.success("Perfil editado","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),this.$store.commit("EDIT_USER",s.data.content.user)):s.data.errors.forEach((function(e){"username"===e.type&&(r.errors.username.error=!0,r.errors.username.value=e.value,r.$refs.username.$el.focus()),"email"===e.type&&(r.errors.email.error=!0,r.errors.email.value=e.value,r.errors.username||r.$refs.email.$el.focus()),r.$snotify.error(s.data.message.pt,"",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0})})),this.loading.submit=!1,e.next=31;break;case 29:e.prev=29,e.t1=e["catch"](20);case 31:e.next=34;break;case 33:this.notifyError();case 34:case"end":return e.stop()}}),e,this,[[2,12],[20,29]])})));function t(){return e.apply(this,arguments)}return t}(),methodEditInterests:function(){this.$store.dispatch("editUserInterestsById",{id:this.editInterests.id,interests:{tags:this.selectedTags,courses:this.selectedCourses}}),this.$snotify.success("Interesses editados","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),this.filterTags=""},notifyError:function(){this.$snotify.error("Preencha todos os campos corretamente","",{timeout:2e3,showProgressBar:!1,closeOnClick:!0,pauseOnHover:!0})},clearForm:function(){this.attemptSubmit=!1,this.firstName="",this.lastName="",this.username="",this.password="",this.confirmPassword="",this.email="",this.picture="",this.selectedGender=1,this.profileId=1,this.attemptSubmit=!1,this.filterTags="",this.selectedTags=[],this.selectedCourses=[]},handleResize:function(){this.windowWidth=window.innerWidth}},computed:c(c({},Object(o["c"])(["getApiUrl","getLastUserId","getLoggedUser"])),{},{firstNameState:function(){return this.firstName||this.attemptSubmit?!(!this.firstName&&this.attemptSubmit):null},firstNameInvalidFeedback:function(){return!this.firstName&&this.attemptSubmit?"Introduza o nome próprio":null},lastNameState:function(){return this.lastName||this.attemptSubmit?!(!this.lastName&&this.attemptSubmit):null},lastNameInvalidFeedback:function(){return!this.lastName&&this.attemptSubmit?"Introduza o apelido":null},usernameState:function(){return this.username||this.attemptSubmit?!(!this.username&&this.attemptSubmit)&&(this.username===this.username.replace(/[^a-z0-9]/gi,"")&&(!this.errors.username.error||this.username!==this.errors.username.value)):null},usernameInvalidFeedback:function(){return this.username!==this.username.replace(/[^a-z0-9]/gi,"")?"Introduza apenas letras e/ou números":this.errors.username&&this.username===this.errors.username.value?"Nome de utilizador em uso":"Introduza o nome de utilizador"},usernameValidFeedback:function(){return 15===this.username.length?"Máximo 15 caracteres":null},passwordState:function(){return this.password||this.attemptSubmit?!(!this.password&&this.attemptSubmit):null},passwordInvalidFeedback:function(){return this.passwordState?null:"Introduza a palavra-passe"},confirmPasswordState:function(){return(this.confirmPassword||this.attemptSubmit)&&(this.confirmPassword||!this.attemptSubmit||this.password)?this.confirmPassword===this.password:null},confirmPasswordInvalidFeedback:function(){return!this.confirmPassword&&this.attemptSubmit&&this.password||this.confirmPassword!==this.password?"As passwords devem ser iguais":null},emailState:function(){return this.editProfile,this.email||this.attemptSubmit?!(!this.email&&this.attemptSubmit)&&(!this.errors.email.error||this.email!==this.errors.email.value):null},emailInvalidFeedback:function(){return!this.email&&this.attemptSubmit?"Introduza o email":this.errors.email&&this.email===this.errors.email.value?"Email em uso":null},pictureState:function(){return!!this.picture||null},getFilteredTags:function(){var e=this;return this.filterTags?this.tags.filter((function(t){return t.toLowerCase().includes(e.filterTags.toLowerCase())})):this.tags}})},m=u,d=s("2877"),h=Object(d["a"])(m,r,a,!1,null,null,null);t["a"]=h.exports}}]);