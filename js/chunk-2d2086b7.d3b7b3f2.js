(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"login"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("b-form-group",{attrs:{id:"input-group-1",label:t.$t("email")+" "+t.$t("address")+":","label-for":"input-1",description:t.$t("emailFieldDescription")}},[r("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:t.$t("enter",{field:t.$t("email")})},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:t.$t("password")+":","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:t.$t("enter",{field:t.$t("password")})},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-form-group",{attrs:{id:"input-group-4"}},[r("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0",model:{value:t.form.persist,callback:function(e){t.$set(t.form,"persist",e)},expression:"form.persist"}},[t._v(t._s(t.$t("rememberLabel")))])],1),r("span",[t._v(" "+t._s(t.$t("noAccount"))+" "),r("router-link",{attrs:{to:{name:"register"}}},[t._v(t._s(t.$t("register"))+".")])],1),r("br"),r("br"),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.$t("logIn")))])],1)],1)},i=[],a=r("5530"),o=r("2f62"),n={data:function(){return{form:{email:"",password:"",persist:""}}},computed:Object(a["a"])({},Object(o["e"])(["user","redirectPath"])),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(o["d"])(["setRedirectPath"])),Object(o["b"])(["login"])),{},{submit:function(){this.login(Object(a["a"])({vue:this},this.form))}}),watch:{user:{immediate:!0,handler:function(){if(this.user){var t=this.redirectPath;this.setRedirectPath({path:null}),this.$router.push(t||{name:"home"})}}}}},l=n,u=r("2877"),m=Object(u["a"])(l,s,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.d3b7b3f2.js.map