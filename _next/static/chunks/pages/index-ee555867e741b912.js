(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3971)}])},4944:function(e,t,a){"use strict";var l=a(5893),r=a(9008),i=a.n(r),s=a(9690);t.Z=function(e){var t=e.meta,a=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i(),{children:(0,l.jsx)("title",{children:t.title})}),(0,l.jsx)(s.JL,{}),(0,l.jsx)(s.pE,{}),a,(0,l.jsx)(s.$_,{})]})}},3971:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var l=a(5893),r=a(1664),i=a.n(r),s=a(7294),n=a(9690),m=a(7852),c=JSON.parse('[{"title":"Membuat pnpm workspace","thumbnail":"https://miro.medium.com/fit/c/224/224/1*Llzyz7QvwoWasbQ6AbFbSg.png","desc":"Install pnpm Sebelum membuat workspace dengan pnpm, mari kita install pnpm terlebih dahulu. Untuk menginstall pnpm, kita dapat menggunakan npm atau npx. Berikut ini cara install pnpm dengan npm.","repository_url":"https://irvanahmadp.medium.com/membuat-pnpm-workspace-2c24c581edc0","tags":["NodeJS","Package Manager"]},{"title":"Belajar Sass","thumbnail":"https://miro.medium.com/fit/c/224/224/1*ZPaLIi9dj0Db9dzwRB4FnA.png","desc":"Pada artikel ini, kita akan mempelajari dasar-dasar Sass yang akan memudahkan kita dalam menulis CSS. Artikel ini dibuat berdasarkan tutorial dari Progate. Untuk teman-teman yang ingin mempelajari Sass.","repository_url":"https://irvanahmadp.medium.com/belajar-sass-a9044bea9bc4","tags":["Sass","CSS","Style"]},{"title":"Belajar Golang","thumbnail":"https://miro.medium.com/fit/c/224/224/1*Z3W3s5QYNg9fRwL5TjgRPA.png","desc":"Pengenalan Golang atau biasa disebut Go adalah bahasa pemrograman yang dikembangkan di Google oleh Robert Griesemer, Rob Pike, dan Ken Thompson pada tahun 2007 dan mulai diperkenalkan ke publik tahun.","repository_url":"https://irvanahmadp.medium.com/belajar-golang-85c6aca406e","tags":["Golang","Programming Language"]}]'),d=JSON.parse('[{"alt":"Linkedin","img-url":"/icons/linkedin.svg","url":"https://www.linkedin.com/in/irvan-ahmad-prasetya-6306a8115/"},{"alt":"Medium","img-url":"/icons/medium.svg","url":"https://irvanahmadp.medium.com/"},{"alt":"Dribbble","img-url":"/icons/dribbble.svg","url":"https://dribbble.com/irvan_ahmad_p"},{"alt":"Github","img-url":"/icons/github.svg","url":"https://github.com/IrvanAhmadP/"},{"alt":"Telegram","img-url":"/icons/telegram.svg","url":"https://t.me/IrvanAhmadP"}]'),o=a(2551),u=a(4944),h=o.slice(0,6),p=function(){var e=(0,s.useState)(!1),t=e[0],a=e[1],r=(0,s.useState)({title:"",slug:"/",tags:[]}),i=r[0],m=r[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{}),(0,l.jsx)(g,{}),(0,l.jsx)(b,{handleClick:function(e){a(!0),m(e)}}),(0,l.jsx)(j,{}),(0,l.jsx)(n.FA,{isOpen:t,setIsOpen:a,data:i})]})},x=function(){var e=(0,m.xk)();return(0,l.jsx)("section",{id:"home",className:"scroll-m-14 bg-gradient-to-b from-violet-400 via-fuchsia-400 to-purple-400 dark:from-violet-500 dark:via-fuchsia-500 dark:to-purple-500 md:scroll-mt-20 md:bg-gradient-to-r",children:(0,l.jsx)(n.W2,{className:"h-full-content-md py-20 md:h-full-content-md",children:(0,l.jsx)("div",{className:"flex min-h-full w-full items-center justify-center rounded-xl bg-gradient-to-b from-white/75 to-white/10 p-8 dark:from-black/75 dark:to-black/10",children:(0,l.jsxs)("div",{className:"text-center text-3xl md:text-5xl md:leading-tight",children:[(0,l.jsx)("p",{className:"font-bold",children:e.home.greeting}),(0,l.jsx)("p",{className:"font-light md:font-extralight",children:e.home.message})]})})})})},g=function(){var e=(0,m.xk)();return(0,l.jsx)("section",{id:"articles",className:"scroll-mt-14 dark:bg-slate-900 md:scroll-mt-20",children:(0,l.jsxs)(n.W2,{className:"py-8",children:[(0,l.jsx)("div",{className:"mb-8 text-center text-4xl font-light",children:e.article.title}),c.map((function(t,a){return(0,l.jsxs)("div",{className:"my-8 flex",children:[(0,l.jsx)("img",{alt:t.title,src:t.thumbnail,className:"mr-4 h-20 w-20 rounded border border-slate-200 object-cover md:h-28 md:w-28",placeholder:"blur"}),(0,l.jsxs)("div",{className:"flex flex-col justify-between",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)(i(),{href:t.repository_url,children:(0,l.jsx)("a",{className:"text-xl hover:text-purple-500 dark:hover:text-purple-300 md:text-2xl",children:t.title})})}),(0,l.jsx)("p",{className:"hidden text-justify text-lg md:inline",children:t.desc}),(0,l.jsx)(n.$G,{variant:"box",data:t.tags,className:"cursor-default"}),(0,l.jsx)(i(),{href:t.repository_url,children:(0,l.jsxs)("a",{className:"text-slate-600 hover:text-purple-500 dark:text-slate-300 dark:hover:text-purple-300 md:text-lg",children:[e.article.read_article," \u2192"]})})]})]},a)}))]})})},b=function(e){var t=e.handleClick,a=(0,m.xk)();return(0,l.jsx)("section",{id:"projects",className:"scroll-mt-14 bg-slate-100 dark:bg-slate-700 md:scroll-mt-20",children:(0,l.jsxs)(n.W2,{className:"flex flex-col py-8",children:[(0,l.jsx)("div",{className:"mb-8 text-center text-4xl font-light",children:a.project.title}),(0,l.jsx)(n.oR,{children:h.map((function(e,r){return(0,l.jsx)(n.Zb,{onClick:function(){return t(e)},title:e.title,bgColor:e["bg-color"],thumbnail:e.thumbnail,tags:e.tags,placeholderText:a.project.view_project},r)}))}),(0,l.jsx)("div",{className:"m-auto mt-8 mb-2",children:(0,l.jsx)(i(),{href:"/projects#",children:(0,l.jsx)("a",{children:(0,l.jsx)(n.zx,{children:"See All Projects"})})})})]})})},j=function(){var e=(0,m.xk)();return(0,l.jsx)("section",{id:"about",className:"scroll-mt-14 bg-white bg-gradient-to-tl from-violet-400 via-fuchsia-400 to-purple-400 dark:bg-slate-900 dark:from-violet-500 dark:via-fuchsia-500 dark:to-purple-500 md:scroll-mt-20",children:(0,l.jsxs)(n.W2,{className:"flex min-h-last-content flex-col py-8 md:min-h-last-content-md",children:[(0,l.jsx)("div",{className:"text-center text-4xl font-light",children:e.about.title}),(0,l.jsxs)("div",{className:"m-auto rounded-lg bg-white/75 py-4 px-8 dark:bg-slate-900/75 md:w-[28rem]",children:[(0,l.jsx)("p",{className:"text-3xl font-light leading-snug dark:font-normal",children:e.about.greeting}),(0,l.jsxs)("p",{className:"text-3xl font-light leading-snug dark:font-normal",children:[e.about.i_am," ",(0,l.jsx)("span",{className:"text-purple-700 dark:text-purple-300",children:e.about.job_title})]}),(0,l.jsx)("p",{className:"mt-0.5 text-lg md:text-justify md:text-xl",children:e.about.description}),(0,l.jsx)("div",{className:"my-3 grid grid-flow-col justify-center gap-3 md:gap-6",children:d.map((function(e,t){return(0,l.jsx)("a",{href:e.url,children:(0,l.jsx)("img",{className:"h-10 w-10 duration-300 hover:scale-125",alt:e.alt,src:e["img-url"]})},t)}))})]})]})})},f={title:"Irvan Ahmad P"};p.getLayout=function(e){return(0,l.jsx)(u.Z,{meta:f,children:e})};var k=p}},function(e){e.O(0,[863,875,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);