(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(e,t,n){var content=n(428);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("514aa85d",content,!0,{sourceMap:!1})},427:function(e,t,n){"use strict";n(365)},428:function(e,t,n){(t=n(13)(!1)).push([e.i,'@font-face{font-family:"Milkstore";src:url(/fonts/Milkstore03-Clean.otf)}.use-text-title[data-v-e1ade3ba]{font-weight:var(--font-medium);line-height:1.1;font-family:"Milkstore";text-transform:uppercase;text-shadow:1px 1px 1px var(--v-tertiary-base);font-size:48px;margin-bottom:16px}@media(max-width:1279px){.use-text-title[data-v-e1ade3ba]{font-size:38px}}@media(max-width:599px){.use-text-title[data-v-e1ade3ba]{font-size:28px}}.use-text-title2[data-v-e1ade3ba]{font-size:32px;line-height:1.1;font-weight:var(--font-medium);font-family:"Milkstore";text-transform:uppercase;margin-bottom:16px}@media(max-width:1279px){.use-text-title2[data-v-e1ade3ba]{font-size:26px}}@media(max-width:599px){.use-text-title2[data-v-e1ade3ba]{font-size:22px}}.use-text-subtitle[data-v-e1ade3ba]{font-weight:var(--font-medium);line-height:1.1;font-family:"Milkstore";text-transform:uppercase;font-size:28px}@media(max-width:1279px){.use-text-subtitle[data-v-e1ade3ba]{font-size:24px}}@media(max-width:599px){.use-text-subtitle[data-v-e1ade3ba]{font-size:20px}}.use-text-subtitle2[data-v-e1ade3ba]{font-weight:var(--font-regular);line-height:1.1;font-family:"Milkstore";font-size:22px}@media(max-width:1279px){.use-text-subtitle2[data-v-e1ade3ba]{font-size:18px}}@media(max-width:599px){.use-text-subtitle2[data-v-e1ade3ba]{font-size:16px}}.use-text-paragraph[data-v-e1ade3ba]{font-weight:var(--font-regular)}.use-text-caption[data-v-e1ade3ba],.use-text-paragraph[data-v-e1ade3ba]{line-height:1.1;font-family:"Milkstore";font-size:18px}.use-text-caption[data-v-e1ade3ba]{font-weight:var(--font-bold);text-transform:uppercase;letter-spacing:2px}@media(max-width:599px){.use-text-caption[data-v-e1ade3ba]{font-size:16px}}.use-text-caption2[data-v-e1ade3ba]{font-weight:var(--font-bold);text-transform:uppercase;line-height:1.1;font-family:"Milkstore";font-size:18px}@media(max-width:599px){.use-text-caption2[data-v-e1ade3ba]{font-size:16px}}.remove-container-spacing[data-v-e1ade3ba]{position:relative}.remove-container-spacing-right[data-v-e1ade3ba]{position:relative;right:-16px}@media(min-width:600px){.remove-container-spacing-right[data-v-e1ade3ba]{right:-24px}}@media(min-width:960px){.remove-container-spacing-right[data-v-e1ade3ba]{right:-32px}}@media(min-width:1280px){.remove-container-spacing-right[data-v-e1ade3ba]{right:calc(-50vw + 608px)}}.remove-container-spacing-left[data-v-e1ade3ba]{position:relative;left:-16px}@media(min-width:600px){.remove-container-spacing-left[data-v-e1ade3ba]{left:-24px}}@media(min-width:960px){.remove-container-spacing-left[data-v-e1ade3ba]{left:-32px}}@media(min-width:1280px){.remove-container-spacing-left[data-v-e1ade3ba]{left:calc(-50vw + 608px)}}@media(max-width:1919px){.use-hidden-lg-down[data-v-e1ade3ba]{display:none}}@media(max-width:1279px){.use-hidden-md-down[data-v-e1ade3ba]{display:none}}@media(max-width:959px){.use-hidden-sm-down[data-v-e1ade3ba]{display:none}}@media(max-width:599px){.use-hidden-xs-down[data-v-e1ade3ba]{display:none}}@media(min-width:1280px){.use-hidden-lg-up[data-v-e1ade3ba]{display:none}}@media(min-width:960px){.use-hidden-md-up[data-v-e1ade3ba]{display:none}}@media(min-width:600px){.use-hidden-sm-up[data-v-e1ade3ba]{display:none}}.container-wrap[data-v-e1ade3ba]{padding:120px 0}@media(max-width:959px){.container-wrap[data-v-e1ade3ba]{padding:0;margin:80px 0}}.main-wrap[data-v-e1ade3ba]{position:relative;width:100%;overflow:hidden}.theme--dark .main-wrap[data-v-e1ade3ba]{background-color:var(--v-primary-base)}.theme--light .main-wrap[data-v-e1ade3ba]{background-color:#fff}',""]),e.exports=t},485:function(e,t,n){"use strict";n.r(t);n(22);var o=n(325),d=n.n(o),r=n(105),l=n(323),c=n(322),m=n(136),x={components:{"header-main":l.a,"footer-main":c.a,Title:m.a},data:function(){var e=this;return{loaded:!1,loading:!1,valid:!1,name:"",email:"",message:"",schema:"5fd9e8f053143d48c21d5559",rules:[function(t){return!!t||e.$t("ow.required")}],emailRules:[function(t){return!!t||e.$t("ow.required")},function(t){return/.+@.+\..+/.test(t)||e.$t("ow.email_invalid")}],snackbar:!1,postMessage:"",error:null}},mounted:function(){this.loaded=!0},methods:{submit:function(){var e=this;if(this.$refs.form.validate()){var body={email:this.email,name:this.name,message:this.message};this.loading=!0,this.error=null;var t="NL";"en"===this.$i18n.locale&&(t="EN"),d.a.post("https://api.betacore.nl/form/"+this.schema+"/"+t,body).then((function(){e.postMessage=e.$t("ow.contact_success"),e.snackbar=!0,e.loading=!1,e.email="",e.name="",e.message=""}),(function(t){e.error=t,e.postMessage=e.$t("ow.contact_error"),e.snackbar=!0,e.loading=!1}))}}},head:function(){return{title:r.a.ow.name+" - Contact"}}},v=(n(427),n(19)),f=n(49),h=n.n(f),w=n(319),k=n(314),_=n(320),y=n(479),z=n(310),$=n(315),M=n(317),C=n(471),V=n(480),component=Object(v.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-wrap"},[n("header-main",{attrs:{invert:""}}),e._v(" "),n("v-snackbar",{staticClass:"notification",attrs:{timeout:1e4,color:e.error?"error":"secondary",top:"",right:""},scopedSlots:e._u([{key:"action",fn:function(){return[n("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){e.snackbar=!1}}},[n("v-icon",[e._v("mdi-close")])],1)]},proxy:!0}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[n("div",[e._v("\n      "+e._s(e.postMessage)+"\n    ")])]),e._v(" "),n("main",{staticClass:"container-wrap"},[n("v-container",{class:{"fixed-width":e.isDesktop}},[n("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("Title",{attrs:{primary:e.$t("ow.contact")}}),e._v(" "),n("p",{staticClass:"use-text-paragraph"},[e._v(e._s(e.$t("ow.contact_text")))])],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{rules:e.rules,label:e.$t("ow.contact_name"),color:"tertiary"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{rules:e.emailRules,label:e.$t("ow.contact_email"),color:"tertiary"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{label:e.$t("ow.contact_message"),color:"tertiary"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),e._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[n("v-btn",{attrs:{loading:e.loading,color:"tertiary"},on:{click:e.submit}},[e._v(e._s(e.$t("ow.contact_submit")))])],1)],1)],1)],1)],1),e._v(" "),n("section",{staticClass:"space-top"},[n("footer-main")],1)],1)}),[],!1,null,"e1ade3ba",null);t.default=component.exports;h()(component,{VBtn:w.a,VCol:k.a,VContainer:_.a,VForm:y.a,VIcon:z.a,VRow:$.a,VSnackbar:M.a,VTextField:C.a,VTextarea:V.a})}}]);