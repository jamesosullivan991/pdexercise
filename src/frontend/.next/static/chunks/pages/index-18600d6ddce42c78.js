(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2775)}])},2775:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var o=t(2322),i=t(2784),r=t(162),d=t(3235),a=t(9821);function l(){let e=(0,d._)(["\n  max-width: 32rem; /* equivalent to max-w-lg */\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 1rem; /* equivalent to py-4 */\n  padding-bottom: 1rem;\n  padding-left: 0.5rem; /* equivalent to px-2 */\n  padding-right: 0.5rem;\n"]);return l=function(){return e},e}function c(){let e=(0,d._)(["\n  list-style-type: none;\n  padding: 0;\n"]);return c=function(){return e},e}function u(){let e=(0,d._)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: white;\n  padding-left: 1rem; /* equivalent to px-4 */\n  padding-right: 1rem;\n  padding-top: 0.5rem; /* equivalent to py-2 */\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #e2e8f0; /* border-gray-200 */\n"]);return u=function(){return e},e}function p(){let e=(0,d._)(["\n  color: white;\n  background-color: #4299e1; /* bg-blue-500 */\n  &:hover {\n    background-color: #2b6cb0; /* hover:bg-blue-700 */\n  }\n  font-weight: 500; /* font-medium */\n  padding-top: 0.5rem; /* py-2 */\n  padding-bottom: 0.5rem;\n  padding-left: 1rem; /* px-4 */\n  padding-right: 1rem;\n  border-radius: 0.25rem; /* rounded */\n"]);return p=function(){return e},e}function s(){let e=(0,d._)(["\n  border: 1px solid #e2e8f0; /* border */\n  border-radius: 0.25rem; /* rounded */\n  padding-top: 0.5rem; /* py-2 */\n  padding-bottom: 0.5rem;\n  padding-left: 1rem; /* px-4 */\n  padding-right: 1rem;\n  width: 100%; /* block w-full */\n  margin-bottom: 1rem; /* mb-4 */\n"]);return s=function(){return e},e}let m=a.ZP.div(l()),g=a.ZP.ul(c()),f=a.ZP.li(u()),h=a.ZP.button(p()),b=a.ZP.input(s());var x=t(3542);let w=r.Z.create({baseURL:x.env.API_URL||"http://localhost:3001"});var _=()=>{let[e,n]=(0,i.useState)([]),[t,r]=(0,i.useState)("all"),[d,a]=(0,i.useState)("");(0,i.useEffect)(()=>{l()},[t]);let l=async()=>{n((await w.get("/api/todos?filter=".concat(t))).data)},c=async()=>{await w.post("/api/todos",{description:d}),a(""),l()},u=async e=>{await w.put("/api/todos/".concat(e.id),{isCompleted:!e.isCompleted}),l()},p=async e=>{await w.delete("/api/todos/".concat(e)),l()},s=async()=>{await w.delete("/api/todos?filter=completed"),l()};return(0,o.jsxs)(m,{children:[(0,o.jsx)(b,{type:"text",value:d,onChange:e=>a(e.target.value),placeholder:"Add new todo"}),(0,o.jsx)(h,{onClick:c,children:"Add Todo"}),(0,o.jsx)(g,{children:e.map((e,n)=>(0,o.jsxs)(f,{children:[(0,o.jsx)("input",{type:"checkbox",checked:e.completed,onChange:()=>u(e)}),e.description,(0,o.jsx)(h,{onClick:()=>p(e.id),children:"Delete"})]},e.id))}),(0,o.jsx)(h,{onClick:()=>r("all"),children:"All"}),(0,o.jsx)(h,{onClick:()=>r("active"),children:"Active"}),(0,o.jsx)(h,{onClick:()=>r("completed"),children:"Completed"}),(0,o.jsx)(h,{onClick:s,children:"Clear Completed"})]})},v=function(){return(0,o.jsx)("div",{"data-test-id":"welcome-message",children:(0,o.jsx)(_,{})})}}},function(e){e.O(0,[647,774,888,179],function(){return e(e.s=7314)}),_N_E=e.O()}]);