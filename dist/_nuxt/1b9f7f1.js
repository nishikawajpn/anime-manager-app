(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{421:function(t,e,r){"use strict";var o=r(201);e.a=o.a},422:function(t,e,r){var content=r(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("5db1c400",content,!0,{sourceMap:!1})},423:function(t,e,r){var o=r(20)(!1);o.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=o},425:function(t,e,r){"use strict";r.r(e);var o={name:"FlashMessage",props:{flashMessage:{type:Object,default:function(){},required:!0}}},n=r(63),l=r(70),c=r.n(l),d=r(432),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-alert",{attrs:{dense:"",outlined:"",type:t.flashMessage.type}},[t._v("\n  "+t._s(t.flashMessage.content)+"\n")])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a})},432:function(t,e,r){"use strict";r(13),r(10),r(12),r(6),r(18),r(11),r(19);var o=r(3),n=(r(61),r(422),r(202)),l=r(421),c=r(118),d=r(67),h=r(37),v=r(2).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(15),m=r(14);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(n.a,d.a,v).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},436:function(t,e,r){"use strict";var o=r(3),n=(r(61),r(81),r(203),r(12),r(6),r(11),r(72),r(173),r(13),r(10),r(18),r(19),r(15)),l=r(102),c=r(141);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},444:function(t,e,r){var content=r(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("01f22d7a",content,!0,{sourceMap:!1})},464:function(t,e,r){"use strict";r(444)},465:function(t,e,r){var o=r(20)(!1);o.push([t.i,'.account-form__avatar[data-v-33d7a9dc]{cursor:pointer}.account-form__avatar-wrapper[data-v-33d7a9dc]{position:relative;display:block;margin:10px auto 15px;width:70px;height:70px}.account-form__avator-input[data-v-33d7a9dc]{display:none}.account-form__avator-plus[data-v-33d7a9dc]{content:"";display:block;width:20px;height:20px;border-radius:50%;background-color:#333;border:2px solid #fff;position:absolute;bottom:-1px;right:-1px;z-index:1;cursor:pointer}.account-form__avator-plus[data-v-33d7a9dc]:after,.account-form__avator-plus[data-v-33d7a9dc]:before{content:"";display:block;width:8px;height:2px;background-color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.account-form__avator-plus[data-v-33d7a9dc]:after{transform:translate(-50%,-50%) rotate(90deg)}@media only screen and (min-width:600px){.account-form__avatar-wrapper[data-v-33d7a9dc]{margin-left:0}}',""]),t.exports=o},501:function(t,e,r){"use strict";r.r(e);var o={beforeRouteLeave:function(t,e,r){this.isChanged&&!confirm("変更を保存せずに移動しますか？")||r()},data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"名前は必須です。"},function(t){return t&&t.length<=10||"名前は10文字以内で入力してください。"}],isChanged:!1,email:"",userName:"",userEmail:""}},computed:{userPhotoURL:function(){return this.$store.getters["auth/getUserPhotoURL"]},flashMessage:function(){return this.$store.getters["auth/getFlashMessage"]}},created:function(){var t=JSON.parse(sessionStorage.getItem("userInfo"));this.userName=this.$store.getters["auth/getUserName"]||t.userName,this.userEmail=this.$store.getters["auth/getUserEmail"]||t.userEmail,t={userName:this.userName,userEmail:this.userEmail},sessionStorage.setItem("userInfo",JSON.stringify(t))},destroyed:function(){sessionStorage.setItem("userInfo",""),sessionStorage.removeItem("userInfo"),this.$store.dispatch("auth/resetFlashMessage")},methods:{save:function(){this.$store.dispatch("auth/updateProfile",{userName:this.userName,userPhotoURL:this.userPhotoURL}),this.isChanged=!1},destroy:function(){this.$store.dispatch("auth/destroy")},nameInput:function(){this.isChanged=!0}}},n=(r(464),r(63)),l=r(70),c=r.n(l),d=r(201),h=r(436),v=r(494),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-area"},[r("FlashMessage",{directives:[{name:"show",rawName:"v-show",value:t.flashMessage.content,expression:"flashMessage.content"}],attrs:{"flash-message":t.flashMessage}}),t._v(" "),r("h1",{staticClass:"heading--large"},[t._v("アカウント情報")]),t._v(" "),r("v-form",{ref:"form",staticClass:"account-form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{rules:t.nameRules,label:"名前",required:""},on:{change:t.nameInput},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),r("v-text-field",{attrs:{label:"メールアドレス",required:"",disabled:""},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}}),t._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.save}},[t._v("\n      保存\n    ")]),t._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.destroy}},[t._v("\n      アカウント削除\n    ")])],1)],1)}),[],!1,null,"33d7a9dc",null);e.default=component.exports;c()(component,{FlashMessage:r(425).default}),c()(component,{VBtn:d.a,VForm:h.a,VTextField:v.a})}}]);