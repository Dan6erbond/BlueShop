(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5eb92657","chunk-2d0ba514":"b402b6ea","chunk-2d0c1d78":"1f1c257c","chunk-2d0c9708":"9f2a8b53","chunk-2d0d6d35":"b1fc8318","chunk-2d2086b7":"d3b7b3f2","chunk-2d217357":"b8208ef7","chunk-2d21de4f":"20d67208"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"213f":function(e,t,n){},3774:function(e,t,n){"use strict";var a=n("213f"),r=n.n(a);r.a},"49f8":function(e,t,n){var a={"./de.json":"6ce2","./en.json":"edd4"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("ac1f"),n("5319"),n("5530")),c=n("2f62"),s={name:"app",computed:Object(c["e"])(["locale"]),watch:{locale:function(){this.$router.replace({params:{lang:this.locale}}).catch((function(){}))}},methods:Object(i["a"])({},Object(c["b"])(["changeLocale"])),created:function(){this.changeLocale(this.locale)}},u=s,l=(n("034f"),n("2877")),d=Object(l["a"])(u,r,o,!1,null,null,null),f=d.exports,g=(n("d3b7"),n("bc3a")),p=n.n(g),h={},m=p.a.create(h);m.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),m.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=m,window.axios=m,Object.defineProperties(e.prototype,{axios:{get:function(){return m}},$axios:{get:function(){return m}}})},a["default"].use(Plugin);Plugin;var b=n("5f5b"),v=n("b1e0");n("5df9"),n("2dd8"),n("ab8b");a["default"].use(b["a"]),a["default"].use(v["a"]);var y=n("1a1c"),P=n.n(y),w=new P.a({url:"https://directus.ravianand.bluemouse.ch/directus/public",project:"directusapp",storage:window.localStorage});Object.defineProperties(a["default"].prototype,{$client:{value:w}});n("4160"),n("7039"),n("466d"),n("1276"),n("159b"),n("ddb0");var L=n("a925");function k(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];t[r]=e(n)}})),t}function O(){var e=null,t=Object.getOwnPropertyNames(k());return t.forEach((function(t){t===navigator.language&&(e=t)})),e||t.forEach((function(t){var n=navigator.language.split("-")[0];t===n&&(e=t)})),e||t.forEach((function(t){var n=navigator.language.split("-")[0];t.split("-")[0]===n&&(e=t)})),e}a["default"].use(L["a"]);var j=O()||"de",C=Object.getOwnPropertyNames(k()),_=new L["a"]({locale:j,fallbackLocale:"en",messages:k()}),N=(n("2ba8"),n("4193"));a["default"].use(N["a"]);n("caad"),n("2532");var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header-nav"),n("b-container",{attrs:{id:"content",fluid:""}},[n("b-row",[n("b-col",{attrs:{lg:"3",md:"12"}},[n("category-nav",{staticClass:"w-100",attrs:{id:"category-nav"}})],1),n("b-col",{attrs:{lg:"9",md:"12"}},[n("div",[n("router-view")],1)])],1)],1)],1)},x=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{variant:"faded",type:"light",id:"nav"}},[n("b-navbar-brand",{staticClass:"mb-0",attrs:{tag:"h1",to:{name:"home"}}},[e._v("BlueShop")]),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"categories"}}},[e._v(e._s(e.$t("categories")))])],1)],1),n("b-navbar-nav",{staticClass:"ml-auto d-flex align-items-center w-100"},[n("div",{staticClass:"ml-auto"}),n("b-nav-form",{staticClass:"w-100 px-4",on:{submit:function(t){return t.preventDefault(),e.searchProduct(t)}}},[n("vue-bootstrap-typeahead",{attrs:{data:e.products,serializer:e.getProductName,placeholder:e.$t("findAProduct")},on:{hit:e.selectProduct},scopedSlots:e._u([{key:"suggestion",fn:function(t){var a=t.data,r=t.htmlText;return[n("div",{staticClass:"d-flex align-items-center"},[n("img",{staticClass:"rounded-circle",staticStyle:{width:"40px",height:"40px"},attrs:{src:e.getProductThumbnail(a)}}),n("div",{staticClass:"ml-4"},[n("strong",[n("span",{domProps:{innerHTML:e._s(r)}})]),n("br"),n("span",[e._v(e._s(e._f("medium")(e._f("striphtml")(e.getProductDescription(a)))))])])])]}}]),model:{value:e.query,callback:function(t){e.query=t},expression:"query"}},[n("template",{slot:"append"},[n("b-button",{staticClass:"my-2 my-sm-0",attrs:{type:"submit"}},[e._v(e._s(e.$t("search")))])],1)],2)],1),n("b-nav-item-dropdown",{attrs:{text:e._f("capitalize")(e.lang),right:""}},e._l(e.languageArray,(function(t,a){return n("b-dropdown-item",{key:"lang"+a,on:{click:function(n){return e.selectLang(t)}}},[e._v(e._s(e._f("capitalize")(t)))])})),1),e.user?n("b-nav-item-dropdown",{staticClass:"ml-2 h3"},[n("template",{slot:"button-content"},[n("router-link",{attrs:{to:{name:"profile"}}},[n("b-icon-person-fill")],1)],1),n("b-dropdown-item",{on:{click:e.clickLogout}},[e._v("Log Out")])],2):n("b-nav-item",{staticClass:"ml-2 h3",attrs:{to:{name:"login"}},on:{click:e.clickLogin}},[n("b-icon-door-closed-fill")],1)],1)],1)},$=[],A=(n("a4d3"),n("e01a"),n("7db0"),n("b0c0"),n("b047")),H=n.n(A),T=n("d45f"),D={components:{VueBootstrapTypeahead:T["a"]},data:function(){return{languageArray:C,query:"",products:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(c["e"])(["user","locale"])),{},{lang:function(){return this.locale}}),watch:{query:H()((function(e){this.searchProducts(e)}),250)},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["d"])(["setRedirectPath"])),Object(c["b"])(["logout","changeLocale"])),{},{selectLang:function(e){this.changeLocale(e)},clickLogin:function(){this.setRedirectPath({path:this.$route.path})},clickLogout:function(){this.logout({vue:this})},getProductName:function(e){var t=this;return(e.translations.find((function(e){return e.language==t.locale}))||e.translations[0]).name},getProductDescription:function(e){var t=this;return(e.translations.find((function(e){return e.language==t.locale}))||e.translations[0]).description},getProductThumbnail:function(e){return e.image.data.thumbnails[5].url},searchProducts:function(e){var t=this;this.$client.getItems("products",{fields:["*","image.*","category.*.*","translations.*"],filter:{"translations.name":{logical:"or",contains:e},"translations.description":{logical:"or",contains:e}}}).then((function(e){t.products=e.data}))},searchProduct:function(){this.$router.push({name:"search",query:{q:this.query}})},selectProduct:function(e){this.$router.push({name:"product",params:{id:e.id,name:this.getProductName(e)}})}})},F=D,q=(n("3774"),Object(l["a"])(F,E,$,!1,null,"f7fa738a",null)),R=q.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg"}},[n("b-navbar-toggle",{attrs:{target:"category-nav-collapse"}}),n("b-collapse",{attrs:{id:"category-nav-collapse","is-nav":""}},[n("b-nav",{staticClass:"d-block"},e._l(e.categories,(function(t){return n("b-nav-item",{key:t.id,attrs:{to:{name:"category",params:{id:t.id,name:e.getCategoryName(t)}}}},[e._v(e._s(e.getCategoryName(t)))])})),1)],1)],1)],1)},U=[],I={name:"Categories",methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["fetchCategories"])),{},{getCategoryName:function(e){var t=this;return(e.translations.find((function(e){return e.language==t.locale}))||e.translations[0]).name}}),computed:Object(i["a"])({},Object(c["e"])(["categories","locale"])),mounted:function(){this.categories.length||this.fetchCategories(this)}},B=I,z=(n("7dbf"),Object(l["a"])(B,M,U,!1,null,"6398952c",null)),J=z.exports,K={components:{HeaderNav:R,CategoryNav:J}},V=K,W=(n("7c9e"),Object(l["a"])(V,S,x,!1,null,null,null)),Z=W.exports,G=(n("4de4"),n("2909")),Q=n("0e44");a["default"].use(c["a"]);var X=new c["a"].Store({state:{categories:[],products:[],loading:!1,locale:j,user:null,redirectPath:null,homepage:null},mutations:{setLoading:function(e,t){var n=t.loading;e.loading=n},setCategories:function(e,t){var n=t.categories;e.categories=n},addProducts:function(e,t){var n,a=t.products;(n=e.products).push.apply(n,Object(G["a"])(a))},updateLocale:function(e,t){e.locale=t},setUser:function(e,t){var n=t.user;e.user=n},setRedirectPath:function(e,t){var n=t.path;e.redirectPath=n},setHomepage:function(e,t){var n=t.homepage;e.homepage=n}},actions:{fetchCategories:function(e,t){var n=e.commit;n("setLoading",{loading:!0}),t.$client.api.get("/custom/categories").then((function(e){n("setCategories",{categories:e.data}),n("setLoading",{loading:!1})}))},fetchProducts:function(e,t){var n=e.commit,a=t.vue,r=t.categoryId;n("setLoading",{loading:!0}),a.$client.getItems("products",{fields:["*","image.*","category.*.*","translations.*"],filter:{"category.id":{eq:r}}}).then((function(e){n("addProducts",{products:e.data}),n("setLoading",{loading:!1})}))},fetchProduct:function(e,t){var n=e.commit,a=t.vue,r=t.id;n("setLoading",{loading:!0}),a.$client.getItem("products",r,{fields:["*","image.*","category.*.*","translations.*"]}).then((function(e){n("addProducts",{products:[e.data]}),n("setLoading",{loading:!1})})).catch((function(e){203==e.code&&n("setLoading",{loading:!1})}))},fetchHomepage:function(e,t){var n=e.commit,a=t.vue;n("setLoading",{loading:!0}),a.$client.getItem("homepage",1,{fields:["*","translations.*"]}).then((function(e){n("setHomepage",{homepage:e.data}),n("setLoading",{loading:!1})})).catch((function(e){203==e.code&&n("setLoading",{loading:!1})}))},changeLocale:function(e,t){var n=e.commit;_.locale=t,n("updateLocale",t)},login:function(e,t){var n=e.commit,a=t.vue,r=t.email,o=t.password,i=t.persist;n("setLoading",{loading:!0}),a.$client.login({email:r,password:o,persist:i}).then((function(e){n("setLoading",{loading:!1}),n("setUser",{user:e.data.user})}))},logout:function(e,t){var n=e.commit,a=t.vue;n("setLoading",{loading:!0}),a.$client.logout().then((function(){n("setLoading",{loading:!1}),n("setUser",{user:null})}))},signUp:function(e,t){var n=e.commit,a=t.vue,r=t.firstName,o=t.lastName,i=t.password,c=t.email;n("setLoading",{loading:!0}),a.$client.api.post("/custom/user/register",{email:c,password:i,firstName:r,lastName:o}).then((function(e){n("setLoading",{loading:!1}),n("setUser",{user:e.data.user})}))}},getters:{getCategory:function(e){return function(t){return e.categories.find((function(e){return e.id==t}))}},getProduct:function(e){return function(t){return e.products.find((function(e){return e.id==t}))}},getProductsByCategory:function(e){return function(t){return e.products.filter((function(e){return e.category.id==t}))}}},plugins:[Object(Q["a"])({paths:["locale"]})]}),Y=n("8c4f");a["default"].use(Y["a"]);var ee=[{path:"/",name:"root",beforeEnter:function(e,t,n){n(X.state.locale)}},{path:"/:lang",component:Z,beforeEnter:function(e,t,n){var a=e.params.lang;return C.includes(a)?(X.state.locale!==a&&X.dispatch("changeLocale",a),n()):n({path:X.state.locale})},children:[{path:"",name:"home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"login",name:"login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"register",name:"register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{path:"profile",name:"profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}},{path:"categories",name:"categories",component:function(){return n.e("chunk-2d0c9708").then(n.bind(null,"58c2"))}},{path:"categories/:id-:name?",name:"category",component:function(){return n.e("chunk-2d0c1d78").then(n.bind(null,"4886"))}},{path:"products/:id-:name?",name:"product",component:function(){return n.e("chunk-2d21de4f").then(n.bind(null,"d2f1"))}},{path:"search",name:"search",component:function(){return n.e("chunk-2d0ba514").then(n.bind(null,"3760"))}}]}],te=new Y["a"]({mode:"history",base:"/",routes:ee}),ne=te;n("7086"),n("fb6a"),n("a9e3");a["default"].filter("chf",(function(e){return e?new Number(e).toLocaleString("de-CH",{minimumFractionDigits:2})+" CHF":""})),a["default"].filter("medium",(function(e){if(!e)return"";var t=35;return e.slice(0,t)+(e.length>t?"...":"")})),a["default"].filter("striphtml",(function(e){if(!e)return"";var t=document.createElement("div");t.innerHTML=e;var n=t.textContent||t.innerText||"";return n})),a["default"].filter("capitalize",(function(e){return e?e.toUpperCase():""})),a["default"].config.productionTip=!1,new a["default"]({router:ne,store:X,i18n:_,render:function(e){return e(f)}}).$mount("#app")},"6ce2":function(e){e.exports=JSON.parse('{"productCategories":"Produktkategorien","categories":"Kategorien","home":"Startseite","productNotFound":"Dieses Produkt wurde nicht gefunden.","categoryNotFound":"Diese Kategorie wurde nicht gefunden.","returnTo":"Zurück zur","price":"Preis","priceLow":"Preis (tiefste)","priceHigh":"Preis (höchste)","name":"Name","sortBy":"Sortieren nach","redirecting":"Sie werden bald weitergeleitet...","email":"E-Mail","noAccount":"Sie haben kein Konto?","register":"Registrieren","emailFieldDescription":"Ihre E-Mail wird nicht mit Dritten geteilt.","address":"Adresse","enter":"{field} eingeben","password":"Passwort","rememberLabel":"Daten speichern","logIn":"Anmelden","alreadyHaveAccount":"Ich habe bereits ein Konto.","confirmation":"{field} Bestätigung","confirm":"{field} bestätigen","firstName":"Vorname","lastName":"Nachname","errorLoadingHomepage":"Ein Fehler ist aufgetreten und die Startseite konnte nicht geladen werden. Bitte kontaktieren Sie einen Administrator.","search":"Suchen","findAProduct":"Ein Produkt finden","yourSearchResults":"Suchresultate für \'{search}\':","noSearchResults":"Leider wurden keine Werte für die Suche \'{search}\' gefunden!"}')},7086:function(e,t,n){},"7c9e":function(e,t,n){"use strict";var a=n("b182"),r=n.n(a);r.a},"7dbf":function(e,t,n){"use strict";var a=n("f490"),r=n.n(a);r.a},"85ec":function(e,t,n){},b182:function(e,t,n){},edd4:function(e){e.exports=JSON.parse('{"productCategories":"Product Categories","categories":"Categories","home":"Home","productNotFound":"Product not found.","categoryNotFound":"Category not found.","returnTo":"Return to","price":"Price","priceLow":"Price (lowest)","priceHigh":"Price (highest)","name":"Name","sortBy":"Sort by","redirecting":"Please wait a moment, you are being redirect...","email":"Email","noAccount":"Don\'t have an account?","register":"Register","emailFieldDescription":"We\'ll never share your email with anyone else.","address":"Address","enter":"Enter {field}","password":"Password","rememberLabel":"Remember Me","logIn":"Log in","alreadyHaveAccount":"Already have an account?","confirmation":"{field} Confirmation","confirm":"Confirm {field}","firstName":"First Name","lastName":"Surname","errorLoadingHomepage":"Uh oh! An error occured loading the homepage, please contact a site administrator.","search":"Search","findAProduct":"Find a product","yourSearchResults":"Search results for \'{search}\':","noSearchResults":"Unfortunately your search \'{search}\' yielded no items."}')},f490:function(e,t,n){}});
//# sourceMappingURL=app.e7d10434.js.map