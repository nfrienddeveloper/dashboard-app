import{_ as V}from"./Breadcrumbs-a900477d.js";import{C as B}from"./index-c534a797.js";import{F}from"./index-c5c18b9b.js";import{I as C}from"./index-0dbc22a4.js";import{T as O}from"./index-9d722d0d.js";import{P as z}from"./index-30e9d127.js";import{a as E}from"./basic-tablle-data-1df3619b.js";import{_ as D,r as l,o as r,c,b as t,w as a,a as e,t as i,g,f,d as j,V as R,W as A,F as k,p as w}from"./index-bfbdc443.js";import{y as G,z as N,A as L,B as M}from"./data-5e46ba22.js";import{D as q,_ as W}from"./SelectMonth-a3e725b9.js";import{s as Q,a as U,b as H,c as J}from"./shade-4-25a832d6.js";import"./index-07db7ef0.js";import"./vue-tailwind-datepicker-159bc403.js";import"./index-8f9ef5d2.js";import"./user-1-6dc19296.js";import"./user-4-bcaadb45.js";import"./user-6-ccd18a32.js";import"./index-479eaba9.js";import"./menu-60f67901.js";import"./keyboard-16767ccf.js";import"./use-outside-click-10b1ef55.js";import"./focus-management-2ab41560.js";import"./use-resolve-button-type-fb66ebe2.js";import"./open-closed-84e398ab.js";import"./listbox-7cc6c78b.js";import"./hidden-c8eb4dfd.js";const K={components:{Pagination:z,Icon:C,Tooltip:O},data(){return{advancedTable:E,current:1,perpage:10,pageRange:5,searchTerm:"",options:[{value:"1",label:"1"},{value:"3",label:"3"},{value:"5",label:"5"}],columns:[{label:"Id",field:"id"},{label:"Order",field:"order"},{label:"Customer",field:"customer"},{label:"Date",field:"date"},{label:"Quantity",field:"quantity"},{label:"Amount",field:"amount"},{label:"Status",field:"status"},{label:"Action",field:"action"}]}}},v=p=>(R("data-v-0e6e3520"),p=p(),A(),p),X={key:0,class:"flex items-center"},Y={class:"w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none"},Z=["src","alt"],ee={class:"text-sm text-slate-600 dark:text-slate-300 capitalize font-normal"},te={key:1,class:"font-medium"},se={key:2,class:"text-slate-500 dark:text-slate-400"},oe={key:3,class:"block w-full"},ae={key:4},ne={class:"flex space-x-3 justify-center rtl:space-x-reverse"},le={class:"action-btn"},re=v(()=>e("span",null," View",-1)),ce={class:"action-btn"},ie=v(()=>e("span",null," Edit",-1)),de={class:"action-btn"},pe=v(()=>e("span",null,"Delete",-1)),me={class:"py-4 px-3 flex justify-center"};function ue(p,m,$,S,o,I){const u=l("Icon"),_=l("Tooltip"),d=l("Pagination"),x=l("vue-good-table");return r(),c("div",null,[t(x,{columns:o.columns,styleClass:" vgt-table  lesspadding2 centered ",rows:o.advancedTable,"pagination-options":{enabled:!0,perPage:o.perpage},"sort-options":{enabled:!1},"select-options":{enabled:!0,selectOnCheckboxOnly:!0,selectioninfoClass:"custom-class",selectionText:"rows selected",clearSelectionText:"clear",disableSelectinfo:!0,selectAllByGroup:!0}},{"table-row":a(s=>[s.column.field=="customer"?(r(),c("span",X,[e("span",Y,[e("img",{src:s.row.customer.image,alt:s.row.customer.name,class:"object-cover w-full h-full rounded-full"},null,8,Z)]),e("span",ee,i(s.row.customer.name),1)])):g("",!0),s.column.field=="order"?(r(),c("span",te,i("#"+s.row.order),1)):g("",!0),s.column.field=="date"?(r(),c("span",se,i(s.row.date),1)):g("",!0),s.column.field=="status"?(r(),c("span",oe,[e("span",{class:f(["inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25",`${s.row.status==="paid"?"text-success-500 bg-success-500":""} 
            ${s.row.status==="due"?"text-warning-500 bg-warning-500":""}
            ${s.row.status==="cancled"?"text-danger-500 bg-danger-500":""}
            
             `])},i(s.row.status),3)])):g("",!0),s.column.field=="action"?(r(),c("span",ae,[e("div",ne,[t(_,{placement:"top",arrow:"",theme:"dark"},{button:a(()=>[e("div",le,[t(u,{icon:"heroicons:eye"})])]),default:a(()=>[re]),_:1}),t(_,{placement:"top",arrow:"",theme:"dark"},{button:a(()=>[e("div",ce,[t(u,{icon:"heroicons:pencil-square"})])]),default:a(()=>[ie]),_:1}),t(_,{placement:"top",arrow:"",theme:"danger-500"},{button:a(()=>[e("div",de,[t(u,{icon:"heroicons:trash"})])]),default:a(()=>[pe]),_:1})])])):g("",!0)]),"pagination-bottom":a(s=>[e("div",me,[t(d,{total:50,current:o.current,"per-page":o.perpage,pageRange:o.pageRange,onPageChanged:m[0]||(m[0]=h=>o.current=h),pageChanged:s.pageChanged,perPageChanged:s.perPageChanged},{default:a(()=>[j(" > ")]),_:2},1032,["current","per-page","pageRange","pageChanged","perPageChanged"])])]),_:1},8,["columns","rows","pagination-options"])])}const _e=D(K,[["render",ue],["__scopeId","data-v-0e6e3520"]]),ge={components:{Card:B,Icon:C,CrmTable:_e,DropEvent:q,FromGroup:F,SelectMonth:W,Breadcrumb:V},data(){return{stacked:G,stackedDark:N,rangeDate:null,pieChart:L,pieChartDark:M,statistics:[{title:"Sales",count:"354",bg:"bg-warning-500",text:"text-primary-500",percent:"25.67% ",icon:"heroicons:arrow-trending-up",img:Q,percentClass:"text-primary-500"},{title:"Revenue ",count:"$86,954",bg:"bg-info-500",text:"text-primary-500",percent:"8.67%",icon:"heroicons:arrow-trending-up",img:U,percentClass:"text-primary-500"},{title:"Conversion",count:"15%",bg:"bg-primary-500",text:"text-danger-500",percent:"1.67%  ",icon:"heroicons:arrow-trending-down",img:H,percentClass:"text-danger-500"},{title:"Leads",count:"654",bg:"bg-success-500",text:"text-primary-500",percent:"11.67%  ",icon:"heroicons:arrow-trending-up",img:J,percentClass:"text-primary-500"}],Campaigns:[{name:"Channel",value:"roi"},{name:"Email",value:"40%"},{name:"Website",value:"28%"},{name:"Facebook",value:"34%"},{name:"Offline",value:"17%"}]}}},he={class:"card-auto space-y-5"},fe={class:"grid grid-cols-12 gap-5"},xe={class:"lg:col-span-8 col-span-12 space-y-5"},be={class:"grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3"},ve={class:"overlay absolute left-0 top-0 w-full h-full z-[-1]"},ye=["src"],ke={class:"block mb-6 text-sm text-slate-900 dark:text-white font-medium"},we={class:"block mb- text-2xl text-slate-900 dark:text-white font-medium mb-6"},Ce={class:"flex space-x-2 rtl:space-x-reverse"},De={class:"flex-1 text-sm"},$e=e("span",{class:"block mb-1 text-slate-600 dark:text-slate-300"},"From last week",-1),Se={class:"md:flex md:space-y-0 space-y-4"},Ie=e("h6",{class:"flex-1 text-slate-900 dark:text-white capitalize"}," Deal distribution by stage ",-1),Te={class:"flex-none"},Pe={class:"legend-ring"},Ve={class:"lg:col-span-4 col-span-12 space-y-5"},Be={class:"divide-y divide-slate-100 dark:divide-slate-700"},Fe={class:"flex justify-between"},Oe={class:"legend-ring3"},ze={class:"-mx-6"};function Ee(p,m,$,S,o,I){const u=l("Breadcrumb"),_=l("Icon"),d=l("Card"),x=l("flat-pickr"),s=l("FromGroup"),h=l("apexchart"),y=l("DropEvent"),T=l("SelectMonth"),P=l("CrmTable");return r(),c("div",null,[t(u),e("div",he,[e("div",fe,[e("div",xe,[t(d,null,{default:a(()=>[e("div",be,[(r(!0),c(k,null,w(o.statistics,(n,b)=>(r(),c("div",{key:b,class:f([n.bg,"rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-25 relative z-[1]"])},[e("div",ve,[e("img",{src:n.img,alt:"",draggable:"false",class:"w-full h-full object-contain"},null,8,ye)]),e("span",ke,i(n.title),1),e("span",we,i(n.count),1),e("div",Ce,[e("div",{class:f(["flex-none text-xl",n.text])},[t(_,{icon:n.icon},null,8,["icon"])],2),e("div",De,[e("span",{class:f(["block mb-[2px]",n.percentClass])},i(n.percent),3),$e])])],2))),128))])]),_:1}),t(d,null,{default:a(()=>[e("header",Se,[Ie,e("div",Te,[t(s,null,{default:a(()=>[t(x,{class:"form-control bg-white",placeholder:"Select date range",modelValue:o.rangeDate,"onUpdate:modelValue":m[0]||(m[0]=n=>o.rangeDate=n),config:{mode:"range"}},null,8,["modelValue"])]),_:1})])]),e("div",Pe,[t(h,{type:"bar",height:"410",options:this.$store.themeSettingsStore.isDark?o.stackedDark.chartOptions:o.stacked.chartOptions,series:o.stacked.series},null,8,["options","series"])])]),_:1})]),e("div",Ve,[t(d,{title:"Campaigns"},{header:a(()=>[t(y)]),default:a(()=>[e("ul",Be,[(r(!0),c(k,null,w(o.Campaigns,(n,b)=>(r(),c("li",{key:b,class:"first:text-xs text-sm first:text-slate-600 text-slate-600 dark:text-slate-300 py-2 first:uppercase"},[e("div",Fe,[e("span",null,i(n.name),1),e("span",null,i(n.value),1)])]))),128))])]),_:1}),t(d,{title:"trends calcultation"},{header:a(()=>[t(T)]),default:a(()=>[e("div",Oe,[t(h,{type:"pie",height:"335",options:this.$store.themeSettingsStore.isDark?o.pieChartDark.chartOptions:o.pieChart.chartOptions,series:o.pieChart.series},null,8,["options","series"])])]),_:1})])]),t(d,{title:"Latest Transaction",noborder:""},{header:a(()=>[t(y)]),default:a(()=>[e("div",ze,[t(P)])]),_:1})])])}const it=D(ge,[["render",Ee]]);export{it as default};
