(this.webpackJsonpvotingapp=this.webpackJsonpvotingapp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),c=a(1),i=(a(11),function(e){var t=e.isDisabled,a=e.addVote,n=e.background,o=e.party,s=e.value,c=e.vote;return r.a.createElement("div",{className:"vote__container"},r.a.createElement("input",{className:"vote__input",disabled:t,type:"checkbox",name:o,onClick:a,style:{cursor:t?"":"pointer"}}),r.a.createElement("div",{className:"vote__value"},c),r.a.createElement("div",null,r.a.createElement("div",{className:"vote__party"},o),r.a.createElement("div",{className:"vote__bar",style:{background:n,width:s}})))}),l=(a(12),function(){var e="https://peoples-poll-2019.herokuapp.com/",t=encodeURI("Have your say on the People's Poll for the UK General Election 2019");return r.a.createElement("div",{className:"share-buttons"},r.a.createElement("a",{class:"resp-sharing-button__link",href:"https://facebook.com/sharer/sharer.php?u="+e,target:"_blank",rel:"noopener","aria-label":""},r.a.createElement("div",{class:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"},r.a.createElement("div",{"aria-hidden":"true",class:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}))))),r.a.createElement("a",{class:"resp-sharing-button__link",href:"https://twitter.com/intent/tweet/?text=".concat(t,"&url=").concat(e),target:"_blank",rel:"noopener","aria-label":""},r.a.createElement("div",{class:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"},r.a.createElement("div",{"aria-hidden":"true",class:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))))),r.a.createElement("a",{class:"resp-sharing-button__link",href:"mailto:?subject=".concat(t,"&body=").concat(e),target:"_self",rel:"noopener","aria-label":""},r.a.createElement("div",{class:"resp-sharing-button resp-sharing-button--email resp-sharing-button--small"},r.a.createElement("div",{"aria-hidden":"true",class:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"}))))),r.a.createElement("a",{class:"resp-sharing-button__link",href:"whatsapp://send?text=".concat(e),target:"_blank",rel:"noopener","aria-label":""},r.a.createElement("div",{class:"resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"},r.a.createElement("div",{"aria-hidden":"true",class:"resp-sharing-button__icon resp-sharing-button__icon--solid"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"}))))))}),u=a(2),p=a(5);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v="LOAD_DATA",d="ADD_VOTE",b={parties:[{name:"LABOUR",color:"#E4003B",votes:0},{name:"CONSERVATIVES",color:"#0066ff",votes:0},{name:"LIBDEMS",color:"#FFAE27",votes:0},{name:"GREEN",color:"green",votes:0},{name:"BREXIT",color:"purple",votes:0},{name:"OTHER",color:"black",votes:0}],totalVotes:1,isInitialised:!1},g=function(e,t){var a,n,r=m({},e);switch(t.type){case v:return a=Object(u.a)(r.parties),n=r.totalVotes,!0,a.forEach((function(e){var a=t.data.filter((function(t){return e.name===t.name})),r=Object(c.a)(a,1)[0];r&&(e.votes=r.votes,n+=r.votes)})),m({},r,{parties:a,totalVotes:n,isInitialised:!0});case d:return a=Object(u.a)(r.parties),n=r.totalVotes,a.forEach((function(e){e.name===t.party&&(e.votes+=1,n+=1)})),m({},r,{totalVotes:n,parties:a});default:return e}},f=(a(13),"/api");var E=function(){var e=r.a.useReducer(g,b),t=Object(c.a)(e,2),a=t[0],n=t[1];r.a.useEffect((function(){return window.addEventListener("resize",_),function(){return window.removeEventListener("resize",_)}})),r.a.useEffect((function(){fetch(f,{Accept:"application/json"}).then((function(e){e.json().then((function(e){n({type:v,data:e})})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}),[]);var o=r.a.useState(window.innerWidth),s=Object(c.a)(o,2),u=s[0],p=s[1],h=r.a.useState(!1),m=Object(c.a)(h,2),E=m[0],w=m[1],_=function(){return p(window.innerWidth)},y=function(e){var t=e.target,a=t.name;t.checked&&(n({type:d,party:a}),function(e){var t={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({party:e})};fetch(f,t).then((function(e){return e.ok})).catch((function(e){return console.log(e)}))}(a),w(!0))};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"content",style:{left:u<600?u/5:u/3}},r.a.createElement("div",{className:"title"},"The People's Poll",r.a.createElement("br",null),"UK General Election 2019"),a.isInitialised?r.a.createElement("div",{className:"bar-chart"},a.parties.map((function(e,t){return r.a.createElement(i,{isDisabled:E,addVote:y,party:e.name,vote:e.votes,background:e.color,value:e.votes/a.totalVotes*u,key:t})}))):"Loading..."),r.a.createElement(l,null))};s.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.52f7e1df.chunk.js.map