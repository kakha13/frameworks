(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{398:function(t,e,n){"use strict";n.r(e);var o={props:["blogs"],methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row gx-3"},t._l(t.blogs,(function(n){return e("article",{key:n.slug,staticClass:"col-12 mb-3"},[e("NuxtLink",{staticClass:"fs-4 text-dark text-decoration-none",attrs:{to:"/blog/".concat(n.slug,"/")}},[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v("\n      posted on\n      "),e("time",{staticClass:"fst-italic",attrs:{datetime:n.createdAt}},[t._v(t._s(t.formatDate(n.createdAt)))]),t._v(" by\n      "),e("span",{staticClass:"text-primary"},[t._v(t._s(n.author))])]),t._v(" "),e("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:"/blog/".concat(n.slug,"/")}},[t._v("Read more →")])],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);