(window.webpackJsonp=window.webpackJsonp||[]).push([[10,8],{395:function(t,e,n){"use strict";n.r(e);var r={computed:{reviews:function(){return this.$store.state.list}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"numeric",day:"numeric"})}}},l=n(19),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.reviews.length,expression:"reviews.length"}],staticClass:"col-xl-12 col-12"},[e("div",{staticClass:"card-fill card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"list-group-flush list-group-activity my-n3 list-group"},t._l(t.reviews,(function(n){return e("div",{key:n.star,staticClass:"list-group-item"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1 ms-n2 text-center fs-3 align-self-center"},[t._v("\n               ⭐"),e("strong",[t._v(t._s(n.star))]),e("br")]),t._v(" "),e("div",{staticClass:"col"},[e("p",{staticClass:"text-gray-900 fs-3 mb-0"},[t._v("\n                  "+t._s(n.content)+"\n                ")]),t._v(" "),e("time",{staticClass:"fs-6 fst-italic text-gray-400"},[t._v(t._s(t.formatDate(n.updated_at)))])])])])})),0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header border-0 p-0"},[t("h4",{staticClass:"card-header-title"},[this._v("Reviews")])])}],!1,null,null,null);e.default=component.exports},419:function(t,e,n){"use strict";n.r(e);n(16),n(36);var r=n(13),l=n(6),c=(n(41),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,article,c,o,d,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.params,e.next=3,n("blogs",l.slug).fetch();case 3:return article=e.sent,e.next=6,n("blogs").only(["title","slug"]).sortBy("createdAt","asc").surround(l.slug).fetch();case 6:return c=e.sent,o=Object(r.a)(c,2),d=o[0],v=o[1],e.next=12,n("blogs").only(["title","slug"]).sortBy("date","desc").limit(5).fetch();case 12:return m=e.sent,e.abrupt("return",{article:article,blogs:m,prev:d,next:v});case 14:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},head:function(){return{titleTemplate:this.article.title+" - %s",meta:[{hid:"description",name:"description",content:this.article.description}]}}}),o=n(19),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container my-2 my-lg-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-9"},[e("article",[e("h1",[t._v(t._s(t.article.title))]),t._v(" "),e("p",[t._v(t._s(t.article.description))]),t._v(" "),e("img",{staticClass:"img-fluid",attrs:{src:t.article.img,alt:t.article.alt}}),t._v(" "),e("div",{staticClass:"mb-3"},[e("time",{staticClass:"text-muted"},[t._v("updated: "+t._s(t.formatDate(t.article.updatedAt)))])]),t._v(" "),e("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),e("div",{staticClass:"d-flex justify-content-center"},[t.prev?e("NuxtLink",{staticClass:"fw-bold text-primary text-decoration-none",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n            ← "+t._s(t.prev.title)+"\n            ")]):e("span",[t._v(" ")]),t._v(" "),t.next?e("NuxtLink",{staticClass:"fw-bold text-primary text-decoration-none",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n            "+t._s(t.next.title)+" →\n            ")]):e("span",[t._v(" ")])],1),t._v(" "),e("div",{staticClass:"comments mt-5"},[e("Reviews")],1)]),t._v(" "),e("div",{staticClass:"col-12 col-lg-3"},[e("h5",{staticClass:"text-secondary py-2"},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"list-group"},t._l(t.blogs,(function(n){return e("li",{key:n.title,staticClass:"list-group-item"},[e("NuxtLink",{staticClass:"text-decoration-none text-dark",attrs:{to:"/blog/".concat(n.slug,"/")}},[t._v(t._s(n.title))])],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Reviews:n(395).default})}}]);