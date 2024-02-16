import{I as D}from"./index-0dbc22a4.js";import{C as T}from"./index-c534a797.js";import{C,D as j}from"./data-5e46ba22.js";import{_ as S,N as M,a0 as B,$ as V,c as o,a as t,b as s,w as l,r,o as a,F as p,p as _,f as m,t as i,d as E,g as h}from"./index-bfbdc443.js";import{D as N,_ as q}from"./SelectMonth-a3e725b9.js";import{T as A,s as J,p as z,f as P,a as I,z as O,b as F,c as L}from"./scr-1-f281951c.js";import{C as $}from"./index-e2e49b53.js";import"./index-479eaba9.js";import"./menu-60f67901.js";import"./keyboard-16767ccf.js";import"./use-outside-click-10b1ef55.js";import"./focus-management-2ab41560.js";import"./use-resolve-button-type-fb66ebe2.js";import"./open-closed-84e398ab.js";import"./listbox-7cc6c78b.js";import"./hidden-c8eb4dfd.js";import"./index-30e9d127.js";import"./index-8f9ef5d2.js";import"./user-1-6dc19296.js";import"./user-4-bcaadb45.js";import"./ck-white-c040c98a.js";const U={components:{Icon:D,Card:T,Checkbox:$,DropEvent:N,SelectMonth:q,Teamtable:A},data(){return{donutTwo:C,donutTwoDark:j,message:M,TodoList:B,trackingParcel:V,statistics:[{title:"Total Task",count:"64",bg:"bg-info-500",text:"text-info-500",percent:"25.67% ",icon:"heroicons-outline:menu-alt-1"},{title:"Completed ",count:"45",bg:"bg-warning-500",text:"text-warning-500",percent:"8.67%",icon:"heroicons-outline:chart-pie"},{title:"Hours",count:"190",bg:"bg-primary-500",text:"text-primary-500",percent:"1.67%  ",icon:"heroicons-outline:clock"},{title:"Spendings",count:"$3,564",bg:"bg-success-500",text:"text-success-500",percent:"11.67%  ",icon:"heroicons-outline:calculator"}],meets:[{img:J,title:"Meeting with client",date:"01 Nov 2021",meet:"Zoom meeting"},{img:z,title:"Design meeting (team)",date:"01 Nov 2021",meet:"Skyp meeting"}],files:[{img:P,title:"Dashboard.fig",date:"06 June 2021 / 155MB"},{img:I,title:"Ecommerce.pdf",date:"06 June 2021 / 155MB"},{img:O,title:"Job portal_app.zip",date:"06 June 2021 / 155MB"},{img:F,title:"Ecommerce.pdf",date:"06 June 2021 / 155MB"},{img:L,title:"Screenshot.jpg",date:"06 June 2021 / 155MB"}]}}},W={class:"space-y-5"},H={class:"grid grid-cols-12 gap-5"},Z={class:"xl:col-span-3 col-span-12 lg:col-span-5"},G={class:"grid md:grid-cols-2 grid-cols-1 gap-4"},K={class:"block text-sm text-slate-600 font-medium dark:text-white mb-1"},Q={class:"block mb- text-2xl text-slate-900 dark:text-white font-medium"},R={class:"bg-slate-50 dark:bg-slate-900 rounded-md p-4 mt-4"},X=t("span",{class:"block dark:text-slate-400 text-sm text-slate-600"},"Progress",-1),Y={class:"xl:col-span-5 col-span-12 lg:col-span-7"},tt=t("div",{class:"text-base font-medium text-slate-800 dark:text-slate-100 mb-3"}," Background information ",-1),et=t("p",{class:"text-sm text-slate-600 dark:text-slate-300"}," The Optimistic Website Company - Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercita -tion veniam consequat sunt nostrud amet. ",-1),st=t("br",null,null,-1),ot=t("p",{class:"text-sm text-slate-600 dark:text-slate-300"}," Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.The Optimistic Website Company - Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercita -tion veniam consequat sunt nostrud amet. ",-1),lt={class:"flex flex-wrap mt-8"},at={class:"xl:mr-8 mr-4 mb-3 space-y-1"},it=t("div",{class:"font-semibold text-slate-500 dark:text-slate-400"}," Existing website ",-1),nt={class:"flex items-center space-x-2 text-xs font-normal text-primary-600 dark:text-slate-300 rtl:space-x-reverse"},ct=t("a",{href:"#"},"www.example.com",-1),rt={class:"xl:mr-8 mr-4 mb-3 space-y-1"},dt=t("div",{class:"font-semibold text-slate-500 dark:text-slate-400"}," Project brief ",-1),xt={class:"flex items-center space-x-2 text-xs font-normal text-primary-600 dark:text-slate-300 rtl:space-x-reverse"},pt=t("a",{href:"#"},"www.example.com",-1),_t=t("div",{class:"bg-slate-100 dark:bg-slate-700 rounded px-4 pt-4 pb-1 flex flex-wrap justify-between mt-6"},[t("div",{class:"mr-3 mb-3 space-y-2"},[t("div",{class:"text-xs font-medium text-slate-600 dark:text-slate-300"}," Project owner "),t("div",{class:"text-xs text-slate-600 dark:text-slate-300"}," John Doe ")]),t("div",{class:"mr-3 mb-3 space-y-2"},[t("div",{class:"text-xs font-medium text-slate-600 dark:text-slate-300"}," Budget "),t("div",{class:"text-xs text-slate-600 dark:text-slate-300"}," $75,800 ")]),t("div",{class:"mr-3 mb-3 space-y-2"},[t("div",{class:"text-xs font-medium text-slate-600 dark:text-slate-300"}," Start date "),t("div",{class:"text-xs text-slate-600 dark:text-slate-300"}," 01/11/2021 ")]),t("div",{class:"mr-3 mb-3 space-y-2"},[t("div",{class:"text-xs font-medium text-slate-600 dark:text-slate-300"}," Deadline "),t("div",{class:"text-xs text-warning-500"},"01/11/2021")])],-1),mt={class:"xl:col-span-4 col-span-12"},ut=t("button",{type:"button",class:"btn btn-dark btn-sm"},"Add More",-1),ht={class:"-mx-6 custom-calender"},bt={class:"divide-y divide-slate-100 dark:divide-slate-700"},ft={class:"flex space-x-2 rtl:space-x-reverse"},vt={class:"flex-1 flex space-x-2 rtl:space-x-reverse"},gt={class:"flex-none"},kt={class:"h-8 w-8"},yt=["src"],wt={class:"flex-1"},Dt={class:"block text-slate-600 text-sm dark:text-slate-300 mb-1 font-medium"},Tt={class:"flex font-normal text-xs dark:text-slate-400 text-slate-500"},Ct={class:"text-base inline-block mr-1"},jt={class:"flex-none"},St={class:"block text-xs text-slate-600 dark:text-slate-400"},Mt={class:"grid xl:grid-cols-3 grid-cols-1 gap-5"},Bt={class:"divide-y divide-slate-100 dark:divide-slate-700 -mx-6 -mb-6"},Vt={class:"flex-none flex space-x-2 items-center rtl:space-x-reverse"},Et=["src"],Nt={class:"flex-1 text-sm text-slate-600 dark:text-slate-300"},qt={class:"flex-none space-x-2 text-base text-secondary-500 rtl:space-x-reverse"},At={key:0,type:"button"},Jt=["onClick"],zt={class:"divide-y divide-slate-100 dark:divide-slate-700 -mx-6 -mb-6"},Pt={class:"flex ltr:text-left rtl:text-right"},It={class:"flex-none ltr:mr-3 rtl:ml-3"},Ot={class:"h-8 w-8 bg-white dark:bg-slate-700 rounded-full relative"},Ft=["src"],Lt={class:"flex-1"},$t={class:"text-slate-800 dark:text-slate-300 text-sm font-medium mb-1`"},Ut={class:"text-xs hover:text-[#68768A] font-normal text-slate-600 dark:text-slate-300"},Wt=t("div",{class:"text-slate-400 dark:text-slate-400 text-xs mt-1"}," 3 min ago ",-1),Ht={key:0,class:"flex-0"},Zt={class:"h-4 w-4 bg-danger-500 border border-white rounded-full text-[10px] flex items-center justify-center text-white"},Gt={class:"relative ltr:pl-2 rtl:pr-2"},Kt={class:"p-[10px] relative top-[-20px]"},Qt={class:"text-sm font-medium dark:text-slate-400-900 mb-1 text-slate-600"},Rt={class:"text-xs capitalize dark:text-slate-400"},Xt={class:"grid grid-cols-12 gap-5"},Yt={class:"xl:col-span-8 lg:col-span-7 col-span-12"},te={class:"xl:col-span-4 lg:col-span-5 col-span-12"},ee={class:"divide-y divide-slate-100 dark:divide-slate-700"},se={class:"flex space-x-2 rtl:space-x-reverse"},oe={class:"flex-1 flex space-x-2 rtl:space-x-reverse"},le={class:"flex-none"},ae={class:"h-8 w-8"},ie=["src"],ne={class:"flex-1"},ce={class:"block text-slate-600 text-sm dark:text-slate-300"},re={class:"block font-normal text-xs text-slate-500 mt-1"},de=t("div",{class:"flex-none"},[t("button",{type:"button",class:"text-xs text-slate-900 dark:text-white"}," Download ")],-1);function xe(b,pe,_e,me,c,ue){const x=r("Icon"),f=r("apexchart"),d=r("Card"),v=r("v-calendar"),u=r("DropEvent"),g=r("Checkbox"),k=r("router-link"),y=r("SelectMonth"),w=r("Teamtable");return a(),o("div",W,[t("div",H,[t("div",Z,[s(d,null,{default:l(()=>[t("div",G,[(a(!0),o(p,null,_(c.statistics,(e,n)=>(a(),o("div",{key:n,class:m([e.bg,"rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-50 text-center"])},[t("div",{class:m(["mx-auto h-10 w-10 flex flex-col items-center justify-center rounded-full bg-white text-2xl mb-4",e.text])},[s(x,{icon:e.icon},null,8,["icon"])],2),t("span",K,i(e.title),1),t("span",Q,i(e.count),1)],2))),128))]),t("div",R,[X,s(f,{type:"donut",height:"113",options:this.$store.themeSettingsStore.isDark?c.donutTwoDark.chartOptions:c.donutTwo.chartOptions,series:c.donutTwo.series},null,8,["options","series"])])]),_:1})]),t("div",Y,[s(d,{title:"About project"},{default:l(()=>[t("div",null,[tt,et,st,ot,t("div",lt,[t("div",at,[it,t("div",nt,[s(x,{icon:"heroicons:link"}),ct])]),t("div",rt,[dt,t("div",xt,[s(x,{icon:"heroicons:link"}),pt])])]),_t])]),_:1})]),t("div",mt,[s(d,{title:"Notes"},{header:l(()=>[ut]),default:l(()=>[t("div",ht,[s(v,{"is-expanded":"","is-dark":this.$store.themeSettingsStore.isDark},null,8,["is-dark"])]),t("ul",bt,[(a(!0),o(p,null,_(c.meets,(e,n)=>(a(),o("li",{key:n,class:"block py-[10px]"},[t("div",ft,[t("div",vt,[t("div",gt,[t("div",kt,[t("img",{src:e.img,alt:"",class:"block w-full h-full object-cover rounded-full border hover:border-white border-transparent"},null,8,yt)])]),t("div",wt,[t("span",Dt,i(e.title),1),t("span",Tt,[t("span",Ct,[s(x,{icon:"heroicons-outline:video-camera"})]),E(" "+i(e.meet),1)])])]),t("div",jt,[t("span",St,i(e.date),1)])])]))),128))])]),_:1})])]),t("div",Mt,[s(d,{title:"Task list"},{header:l(()=>[s(u)]),default:l(()=>[t("ul",Bt,[(a(!0),o(p,null,_(c.TodoList,e=>(a(),o("li",{class:"flex items-center px-6 space-x-4 py-4 rtl:space-x-reverse",key:e.id},[t("div",Vt,[s(g,{modelValue:e.isDone,"onUpdate:modelValue":n=>e.isDone=n},null,8,["modelValue","onUpdate:modelValue"]),t("div",{class:m(["h-8 w-8 rounded-full text-white",e.isDone?" opacity-20":" opacity-100"])},[t("img",{src:e.image,alt:"",class:"block w-full h-full object-cover rounded-full"},null,8,Et)],2)]),t("div",{class:m(["flex-1 flex",e.isDone?"line-through dark:text-white":""])},[t("span",Nt,i(e.title.slice(0,20)+"..."),1),t("span",qt,[e.isDone===!1?(a(),o("button",At,[s(x,{icon:"heroicons-outline:pencil-alt"})])):h("",!0),t("button",{type:"button",onClick:n=>b.removeTodo(e.id),class:"transition duration-150 hover:text-danger-500"},[s(x,{icon:"heroicons-outline:trash"})],8,Jt)])],2)]))),128))])]),_:1}),s(d,{title:"Messages"},{header:l(()=>[s(u)]),default:l(()=>[t("ul",zt,[(a(!0),o(p,null,_(c.message.slice(0,5),(e,n)=>(a(),o("li",{key:n},[s(k,{to:"chat",class:"hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-slate-800 text-slate-600 dark:text-slate-300 block w-full px-4 py-3 text-sm mb-2 last:mb-0 cursor-pointer"},{default:l(()=>[t("div",Pt,[t("div",It,[t("div",Ot,[t("span",{class:m(`${e.active?"bg-secondary-500":"bg-success-500"} w-[10px] h-[10px] rounded-full border border-white dark:border-slate-700  inline-block absolute right-0 top-0`)},null,2),t("img",{src:e.image,alt:"",class:"block w-full h-full object-cover rounded-full border hover:border-white border-transparent"},null,8,Ft)])]),t("div",Lt,[t("div",$t,i(e.title),1),t("div",Ut,i(e.desc),1),Wt]),e.hasnotifaction?(a(),o("div",Ht,[t("span",Zt,i(e.notification_count),1)])):h("",!0)])]),_:2},1024)]))),128))])]),_:1}),s(d,{title:"Activity"},{header:l(()=>[s(u)]),default:l(()=>[t("ul",Gt,[(a(!0),o(p,null,_(c.trackingParcel.slice(0,5),(e,n)=>(a(),o("li",{key:n,class:m([e.status==="ok"?"before:opacity-100":" before:opacity-50","ltr:border-l-2 rtl:border-r-2 border-slate-100 dark:border-slate-700 pb-4 last:border-none ltr:pl-[22px] rtl:pr-[22px] relative before:absolute ltr:before:left-[-8px] rtl:before:-right-2 before:top-[0px] before:rounded-full before:w-4 before:h-4 before:bg-slate-900 dark:before:bg-slate-600 before:leading-[2px] before:content-[url('@/assets/images/all-img/ck.svg')]"])},[t("div",Kt,[t("h2",Qt,i(e.title),1),t("p",Rt,i(e.date),1)])],2))),128))])]),_:1})]),t("div",Xt,[t("div",Yt,[s(d,{title:"Team members",noborder:""},{header:l(()=>[s(y)]),default:l(()=>[s(w)]),_:1})]),t("div",te,[s(d,{title:"Files"},{header:l(()=>[s(u)]),default:l(()=>[t("ul",ee,[(a(!0),o(p,null,_(c.files,(e,n)=>(a(),o("li",{key:n,class:"block py-[8px]"},[t("div",se,[t("div",oe,[t("div",le,[t("div",ae,[t("img",{src:e.img,alt:"",class:"block w-full h-full object-cover rounded-full border hover:border-white border-transparent"},null,8,ie)])]),t("div",ne,[t("span",ce,i(e.title),1),t("span",re,i(e.date),1)])]),de])]))),128))])]),_:1})])])])}const ze=S(U,[["render",xe]]);export{ze as default};
