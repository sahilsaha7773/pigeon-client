(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){e.exports={card:"userInfo_card__3yXUO",id:"userInfo_id__QWgh4",pass:"userInfo_pass__1NyGe",cpbtn:"userInfo_cpbtn__2Nnbo",wpbtn:"userInfo_wpbtn__3jcQh",fbbtn:"userInfo_fbbtn__3BzG1",id2:"userInfo_id2__7zNM2"}},13:function(e,t,a){e.exports={nav:"navbar_nav__3PcoF",mobileContainer:"navbar_mobileContainer__2BksY",mnavitems:"navbar_mnavitems__1_BL6",navItems:"navbar_navItems__2g_Oo"}},17:function(e,t,a){e.exports={card:"messages_card__1xp6j",ref:"messages_ref__1nGFY"}},18:function(e,t,a){e.exports={form:"sendMsg_form__10qPu"}},21:function(e,t,a){e.exports={loginForm:"login_loginForm__X-YfN"}},23:function(e,t,a){e.exports={card:"create_card__3DlfQ"}},24:function(e,t,a){e.exports={footer:"footer_footer__15SXk"}},29:function(e,t,a){},30:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(20),r=a.n(o),i=(a(29),a(30),a(9)),c=a.n(i),l=a(12),d=a(3),u=a(21),b=a.n(u),h={url:"https://chill-jolly-skiff.glitch.me"},g=a(2),j=a(7),p=a.p+"static/media/loginillu3.cf3069e3.svg",f=a(11),m=a(8),x=a.n(m),y=a(0);var O=function(){var e=s.a.useState(-1),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(y.jsxs)("div",{className:x.a.card,children:[Object(y.jsx)("h2",{children:"FAQs"}),[{ques:"What is Pigeon?",ans:"Pigeon allows you to get anonymous feedback from your friends, co-workers and fans. Discover your strengths and areas of improvement by receiving feedbacks from everyone."},{ques:"Why I should use Pigeon?",ans:"Pigeon.rocks is an anonymous secret message platform which has many unique features. You can check out by using just once."},{ques:"Is this site safe?",ans:"Yes this site is safe. If you don\u2019t feel safe you can always delete your account and stop using the website. Once you delete your account, it\u2019s permanently deleted from our servers."},{ques:"I want to know who messaged me?",ans:"If you have used a service called anonymous messages, you must understand that the identity of users sending you messages are not stored. Hence, there are no ways to understand who sent you the messages."},{ques:"I forgot my Login password, how can I recover it?",ans:"If you forgot the Login password then please create a new account. Anyone who has only a User ID but not password is necessarily not the same person who has created the account. Therefore, we cannot provide password to anyone."},{ques:"I forgot to take the screenshot of the User ID and Password, how can I Login?",ans:"Try visiting the website with the same browser you used to create an account. If your account is still logged in, then take the screenshot for future use. You can use that User Id and Pin to Login from any other device or browser in future. But in case your account is not logged in, then there is no way to restore User Id and Password. To continue using, you need to create a new account and this time remember to take the screenshot."},{ques:"Someone is abusing or insulting me, how can I know who they are?",ans:"If someone is insulting you and you are bothered, please log out of your account and stop using our service. If someone is abusing you, there is no way from our side to understand who messaged you. I completely understand your concern but that's how our website works."},{ques:"People sending you anonymous messages but those messages are not appearing on my timeline, what can I do?",ans:"Try clicking on the refresh button or refreshing the page."},{ques:"How to create my account?",ans:"Go to the website(https://pigeon.rocks), Enter your name and then click the \u201cCreate your Link\u201d button. Your account is now created. Copy your link by clicking the \u201cCopy\u201d button and then share that link on all your Social Media Accounts."},{ques:"How to restore deleted messages?",ans:"Once you delete any message, it\u2019s permanently deleted from our servers. Therefore, there is no way you can restore deleted messages."}].map((function(e,t){return t===a?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"".concat(x.a.ques," ").concat(x.a.active),onClick:function(){return n(-1)},children:[Object(y.jsx)("p",{children:e.ques}),Object(y.jsx)("div",{children:Object(y.jsx)("i",{class:"fa fa-minus-circle"})})]}),Object(y.jsx)("div",{className:x.a.ans,children:Object(y.jsx)("p",{children:e.ans})})]}):Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:x.a.ques,onClick:function(){return n(t)},children:[Object(y.jsx)("p",{children:e.ques}),Object(y.jsx)("div",{children:Object(y.jsx)("i",{class:"fa fa-plus-circle"})})]})})}))]})};var w,v=function(){var e=Object(g.f)(),t=s.a.useState(""),a=Object(d.a)(t,2),n=a[0],o=a[1],r=s.a.useState(""),i=Object(d.a)(r,2),u=i[0],m=i[1],x=s.a.useState(!1),w=Object(d.a)(x,2),v=w[0],k=w[1];s.a.useEffect((function(){document.title="Login | Pigeon",(window.adsbygoogle=window.adsbygoogle||[]).push({}),localStorage.getItem("token")&&e("/")}),[e]);var S=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==n&&""!==u){e.next=4;break}return alert("Please fill in all fields"),e.abrupt("return");case 4:k(!0),fetch(h.url+"/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n,password:u})}).then((function(e){return e.json()})).then((function(e){e.success?(localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),window.location.reload()):(k(!1),alert(e.message))})).catch((function(e){}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"1367941501","data-ad-format":"auto","data-full-width-responsive":"true"}),Object(y.jsxs)("div",{className:b.a.loginForm,children:[Object(y.jsx)("img",{src:p,alt:"Illustration",style:{width:"50%",margin:"20px auto"}}),Object(y.jsx)("h2",{children:"Login to view your messages \ud83d\udcec"}),v?Object(y.jsx)("div",{style:{textAlign:"center",margin:"40px 0"},children:Object(y.jsx)(f.SyncLoader,{color:"rgb(22, 130, 202)"})}):Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return o(e.target.value)}}),Object(y.jsx)("input",{type:"password",placeholder:"Password",value:u,onChange:function(e){return m(e.target.value)}}),Object(y.jsx)("button",{onClick:S,children:"Login"}),Object(y.jsxs)("p",{children:["Don't have an account or forgot the credentials? ",Object(y.jsx)(j.b,{to:"/create",children:"Create one."})]})]})]}),Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"1367941501","data-ad-format":"auto","data-full-width-responsive":"true"}),Object(y.jsx)(O,{})]})},k=a(17),S=a.n(k),_="0123456789ABCDEF".split("");function I(e){w+=_[Math.round(Math.random()*e)]}function C(){w="#",I(5);for(var e=0;e<5;e++)I(10);return w}var N=function(){var e=s.a.useState([]),t=Object(d.a)(e,2),a=t[0],n=t[1],o=s.a.useState(!0),r=Object(d.a)(o,2),i=r[0],c=r[1],l=s.a.useState(!1),u=Object(d.a)(l,2),b=u[0],g=u[1];return s.a.useEffect((function(){c(!0),fetch(h.url+"/message/get",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){e.success?(n(e.data),c(!1)):"auth token is not valid"===e.message&&fetch(h.url+"/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:JSON.parse(localStorage.getItem("user"))._id,password:JSON.parse(localStorage.getItem("user")).password})}).then((function(e){return e.json()})).then((function(e){e.success?(localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),c(!1)):(c(!1),alert(e.message))})).catch((function(e){}))})).catch((function(e){c(!1)}))}),[b]),Object(y.jsxs)("div",{className:S.a.card,children:[Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(y.jsx)("h1",{style:{marginBottom:"0"},children:"Your Messages"}),Object(y.jsx)("i",{class:"fa fa-refresh ".concat(S.a.ref),style:{fontSize:"30px"},onClick:function(e){return g(!b)}})]}),Object(y.jsxs)("p",{children:[a.length," messages"]}),Object(y.jsx)("hr",{style:{marginBottom:"30px"}}),i?Object(y.jsx)("div",{style:{textAlign:"center",margin:"40px 0"},children:Object(y.jsx)(f.SyncLoader,{color:"rgb(22, 130, 202)"})}):Object(y.jsxs)("div",{children:[0===a.length&&Object(y.jsx)("p",{children:"Share the above link with your friends to receive messages \ud83d\ude80"}),null===a||void 0===a?void 0:a.map((function(e){var t=new Date(e.createdAt);return Object(y.jsxs)("div",{style:{backgroundColor:C(),padding:"20px",borderRadius:"10px",color:"white",margin:"20px 0"},children:[Object(y.jsx)("p",{style:{fontSize:"20px"},children:e.text}),Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(y.jsx)("div",{className:"grow",onClick:function(t){return a=e._id,void(window.confirm("Are you sure you want to delete this message?")&&(c(!0),fetch(h.url+"/message/delete/"+a,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(e){e.success?g(!b):c(!1)}))));var a},children:Object(y.jsx)("i",{class:"fa fa-trash-o",style:{fontSize:"20px"}})}),Object(y.jsxs)("p",{style:{textAlign:"right"},children:[t.getHours(),":",t.getMinutes(),Object(y.jsx)("br",{}),t.getDate(),"/",t.getMonth()+1,"/",t.getFullYear()]})]})]},e._id)}))]})]})},D=a(22),P=a(10),W=a.n(P);var A=function(e){var t=e.id,a=e.password,n=s.a.useState({}),o=Object(d.a)(n,2),r=o[0],i=o[1];return s.a.useEffect((function(){i(JSON.parse(localStorage.getItem("user")))}),[]),Object(y.jsxs)("div",{className:W.a.card,children:[Object(y.jsx)("h1",{children:"User Info \ud83d\udd37"}),Object(y.jsx)("h2",{children:r.name}),Object(y.jsx)("hr",{}),Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{className:"".concat(W.a.id," ").concat(W.a.id2),style:{marginRight:"8px"},children:"ID: "}),Object(y.jsx)("span",{className:"".concat(W.a.id),children:t})]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{className:W.a.pass,style:{marginRight:"8px"},children:"PASSWORD: "}),Object(y.jsx)("span",{className:W.a.pass,children:a})]}),Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[Object(y.jsxs)("p",{style:{margin:"0 20px 0 0",padding:"20px",border:"1px solid rgb(22, 130, 202)",borderRadius:"5px",width:"100%",overflow:"auto"},children:[window.location.origin,"/#/message/",t]}),Object(y.jsxs)("button",{style:{padding:"20px",backgroundColor:"rgb(22, 130, 202)",border:"none",borderRadius:"5px",color:"white",fontWeight:"bold",display:"flex"},className:W.a.cpbtn,onClick:function(e){Object(D.a)("".concat(window.location.origin,"/#/message/").concat(t)),alert("Link copied to clipboard!")},children:["Copy ",Object(y.jsx)("i",{class:"fa fa-copy",style:{marginLeft:"5px"}})]})]}),Object(y.jsxs)("button",{className:W.a.wpbtn,onClick:function(e){window.open("whatsapp://send?text=\u2709%EF%B8%8F\ud83d\udcac\ud83d\udc8c%0D%0ASend+secret+message+to+me+\ud83e\udd29!+I+will+never+know+who+is+the+sender.+%0D%0AIt%27s+fun!+Try+here+\ud83d\udc49+https://pigeon.rocks/%23/message/".concat(t))},children:["Share on WhatsApp ",Object(y.jsx)("i",{class:"fa fa-whatsapp",style:{fontSize:"24px",marginLeft:"5px"}})]})]})};var q=function(){var e=s.a.useState(),t=Object(d.a)(e,2),a=t[0],n=t[1],o=Object(g.f)();return s.a.useEffect((function(){document.title="Inbox | Pigeon",(window.adsbygoogle=window.adsbygoogle||[]).push({}),null===localStorage.getItem("token")?o("/create"):n(JSON.parse(localStorage.getItem("user")))}),[o]),Object(y.jsxs)("div",{children:[Object(y.jsx)(A,{id:null===a||void 0===a?void 0:a._id,password:null===a||void 0===a?void 0:a.password}),Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"9278221111","data-ad-format":"auto","data-full-width-responsive":"true"}),Object(y.jsx)(N,{}),Object(y.jsx)("ins",{className:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"7226772843","data-ad-format":"auto","data-full-width-responsive":"true"}),Object(y.jsx)(O,{})]})},L=a(18),T=a.n(L);var F=function(){var e=Object(g.f)(),t=s.a.useState(""),a=Object(d.a)(t,2),n=a[0],o=a[1],r=s.a.useState(!1),i=Object(d.a)(r,2),u=i[0],b=i[1],j=Object(g.g)().id;s.a.useEffect((function(){document.title="Send Message | Pigeon",(window.adsbygoogle=window.adsbygoogle||[]).push({}),localStorage.getItem("token")&&JSON.parse(localStorage.getItem("user"))._id===j&&e("/")}),[e,j]);var p=function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),0!==n.length){t.next=4;break}return alert("Please enter a message"),t.abrupt("return");case 4:b(!0),fetch(h.url+"/message/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:n,user:j})}).then((function(e){return e.json()})).then((function(t){b(!1),o(""),t.success?(alert("Message sent successfully"),e("/create")):alert(t.messsage)})).catch((function(e){b(!1),alert(e)}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"6272127289","data-ad-format":"auto","data-full-width-responsive":"true"}),Object(y.jsxs)("div",{className:T.a.form,children:[Object(y.jsx)("h2",{children:"Message your friend Secretly \ud83d\ude09, they will never know who messaged them.\ud83d\ude80"}),Object(y.jsx)("hr",{}),u?Object(y.jsx)("div",{style:{textAlign:"center",margin:"40px 0"},children:Object(y.jsx)(f.SyncLoader,{color:"rgb(22, 130, 202)"})}):Object(y.jsxs)("div",{children:[Object(y.jsx)("textarea",{type:"text",rows:4,placeholder:"Type your message here",value:n,onChange:function(e){return o(e.target.value)}}),Object(y.jsx)("button",{onClick:p,children:"Send Secret Message \ud83d\ude0e"})]})]}),Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"6272127289","data-ad-format":"auto","data-full-width-responsive":"true"}),Object(y.jsx)("div",{className:T.a.form,children:Object(y.jsx)("h2",{children:"This website is just for fun. Do not go out of your way to spread hate.\ud83d\ude45\u200d\u2642\ufe0f\ud83d\ude45\u200d\u2640\ufe0f"})}),Object(y.jsx)(O,{})]})},R=a(13),M=a.n(R);var E=function(){var e=Object(g.f)(),t=s.a.useState(!1),a=Object(d.a)(t,2),n=a[0],o=a[1];return s.a.useEffect((function(){localStorage.getItem("token")&&o(!0)}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",boxShadow:"2px 2px 10px rgb(0,0,0,0.1)",padding:"0 40px",alignItems:"center"},className:M.a.nav,children:[Object(y.jsx)("h1",{style:{borderRadius:"5px",padding:"10px",backgroundColor:"rgb(22 130 202)",color:"white"},onClick:function(){return e("/")},children:"Pigeon"}),Object(y.jsx)("i",{class:"fa fa-bars",onClick:function(e){var t=document.getElementById("mcontainer");"block"===t.style.display?t.style.display="none":t.style.display="block"}}),Object(y.jsx)("div",{className:M.a.navItems,children:n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("button",{style:{padding:"15px",borderRadius:"10px",border:"2px solid",background:"white",color:"rgb(22 130 202)",marginRight:"10px",fontWeight:"bold"},onClick:function(t){t.preventDefault(),e("/aboutme")},children:"About Me"}),Object(y.jsx)("button",{style:{padding:"15px",borderRadius:"10px",border:"2px solid",fontWeight:"bold",background:"white",color:"rgb(22 130 202)"},onClick:function(t){t.preventDefault(),window.confirm("Don't forget to take a note of your login credentials before logging out")&&(localStorage.removeItem("token"),localStorage.removeItem("user"),o(!1),e("/login"))},children:"Logout"})]}):Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{style:{padding:"15px",borderRadius:"10px",border:"2px solid",background:"white",color:"rgb(22 130 202)",marginRight:"10px",fontWeight:"bold"},onClick:function(t){t.preventDefault(),e("/aboutme")},children:"About Me"}),Object(y.jsx)("button",{style:{padding:"15px",borderRadius:"10px",border:"2px solid",background:"white",color:"rgb(22 130 202)",marginRight:"10px",fontWeight:"bold"},onClick:function(t){t.preventDefault(),e("/login")},children:"Login"}),Object(y.jsx)("button",{style:{padding:"15px",borderRadius:"10px",border:"2px solid",fontWeight:"bold",background:"white",color:"rgb(22 130 202)"},onClick:function(t){t.preventDefault(),e("/create")},children:"Sign Up"})]})})]}),Object(y.jsx)("div",{className:M.a.mobileContainer,id:"mcontainer",children:n?Object(y.jsxs)("div",{className:M.a.mnavitems,children:[Object(y.jsx)("button",{style:{padding:"15px",borderRadius:"10px",border:"2px solid",background:"white",color:"rgb(22 130 202)",fontWeight:"bold"},onClick:function(t){t.preventDefault(),e("/aboutme")},children:"About Me"}),Object(y.jsx)("button",{style:{padding:"15px",borderRadius:"10px",border:"2px solid",fontWeight:"bold",background:"white",color:"rgb(22 130 202)"},onClick:function(t){t.preventDefault(),window.confirm("Don't forget to take a note of your login credentials before logging out")&&(localStorage.removeItem("token"),localStorage.removeItem("user"),o(!1),e("/login"))},children:"Logout"})]}):Object(y.jsxs)("div",{className:M.a.mnavitems,children:[Object(y.jsx)("button",{style:{padding:"15px",borderRadius:"10px",border:"2px solid",background:"white",color:"rgb(22 130 202)",fontWeight:"bold"},onClick:function(t){t.preventDefault(),e("/aboutme")},children:"About Me"}),Object(y.jsx)("button",{style:{padding:"15px",borderRadius:"10px",border:"2px solid",background:"white",color:"rgb(22 130 202)",fontWeight:"bold"},onClick:function(t){t.preventDefault(),e("/login")},children:"Login"}),Object(y.jsx)("button",{style:{padding:"15px",borderRadius:"10px",border:"2px solid",fontWeight:"bold",background:"white",color:"rgb(22 130 202)"},onClick:function(t){t.preventDefault(),e("/create")},children:"Sign Up"})]})})]})},J=a(23),B=a.n(J);var Y=function(){var e=Object(g.f)(),t=s.a.useState(""),a=Object(d.a)(t,2),n=a[0],o=a[1],r=s.a.useState(!1),i=Object(d.a)(r,2),u=i[0],b=i[1];s.a.useEffect((function(){document.title="Create | Pigeon",(window.adsbygoogle=window.adsbygoogle||[]).push({}),localStorage.getItem("token")&&e("/")}),[e]);var m=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==n.length){e.next=4;break}return alert("Please enter a name"),e.abrupt("return");case 4:b(!0),fetch(h.url+"/user/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n})}).then((function(e){return e.json()})).then((function(e){e.success?(localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data)),window.location.reload()):alert(e.message),b(!1)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"1367941501","data-ad-format":"auto","data-full-width-responsive":"true"}),Object(y.jsxs)("div",{className:B.a.card,children:[Object(y.jsx)("img",{src:p,alt:"Illustration",style:{width:"50%",margin:"20px auto"}}),Object(y.jsx)("h2",{children:"Get anonymous messages from your friends and family"}),Object(y.jsx)("h3",{style:{fontWeight:"normal"},children:"You can never know who messaged you!\ud83d\udd2e"}),u?Object(y.jsx)("div",{style:{textAlign:"center",margin:"40px 0"},children:Object(y.jsx)(f.SyncLoader,{color:"rgb(22, 130, 202)"})}):Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"text",placeholder:"Your Name",value:n,onChange:function(e){return o(e.target.value)}}),Object(y.jsxs)("button",{onClick:m,children:["Create Your Link ",Object(y.jsx)("span",{style:{marginLeft:"5px"},children:"\ud83d\ude0e"})]}),Object(y.jsxs)("p",{children:["Already have a link?",Object(y.jsx)(j.b,{to:"/login",children:"Login here"})]})]})]}),Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"1367941501","data-ad-format":"auto","data-full-width-responsive":"true"}),Object(y.jsx)(O,{})]})},z=a(24),U=a.n(z);var G=function(){return Object(y.jsx)("div",{className:U.a.footer,children:Object(y.jsxs)("h3",{style:{margin:"0"},children:["Made with \ud83d\udc93 and \u2615 by ",Object(y.jsx)("a",{href:"https://sahilsaha.me",rel:"noreferrer",target:"_blank",children:"Sahil Saha"})]})})},H=a.p+"static/media/pigeonLogo.919fb056.png";var Q=function(){return s.a.useEffect((function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})})),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"1367941501","data-ad-format":"auto","data-full-width-responsive":"true"}),Object(y.jsxs)("div",{className:x.a.card,children:[Object(y.jsx)("img",{src:H,style:{objectFit:"contain"}}),Object(y.jsxs)("p",{style:{fontSize:"20px"},children:["Hi there! I am Sahil, your friendly neighbourhood Developer. I made this site for fun after seeing something similar on my friends' whatsapp stories. I never thought someone will actually visit and use this site, but thanks to my friends and seniors for promoting it on their social media handles which brought in 300+ users on the 1st day of its launch (11th December, 2021).",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"Currently pigeon.rocks has 10k+ daily users with 50k+ daily page views.",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"Checkout the site's disclaimer ",Object(y.jsx)(j.b,{to:"/disclaimer",children:"here"}),"."]})]}),Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"1367941501","data-ad-format":"auto","data-full-width-responsive":"true"})]})};var X=function(){return s.a.useEffect((function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})})),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"1367941501","data-ad-format":"auto","data-full-width-responsive":"true"}),Object(y.jsxs)("div",{className:x.a.card,children:[Object(y.jsx)("img",{src:H,style:{objectFit:"contain"}}),Object(y.jsx)("h2",{children:"Disclaimer"}),Object(y.jsxs)("p",{style:{fontSize:"20px"},children:["If you require any more information or have any questions about my site's disclaimer, please feel free to contact us by email at sahilsahacode@gmail.com",Object(y.jsx)("br",{}),"Disclaimers for Pigeon.rocks",Object(y.jsx)("br",{}),"All the information on this website - https://pigeon.rocks - is published in good faith and for general information purpose only. pigeon.rocks does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (pigeon.rocks), is strictly at your own risk. pigeon.rocks will not be liable for any losses and/or damages in connection with the use of our website.",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"The website is made for receiving feedbacks only, Please do not use it to spread hate, or to disgust someone.",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"pigeon.rocks will not be liable for any losses and/or damages in connection with the use of our website.",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),'Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.']})]}),Object(y.jsx)("ins",{class:"adsbygoogle",style:{display:"block",maxWidth:"700px",margin:"0 auto"},"data-ad-client":"ca-pub-9587469013682576","data-ad-slot":"1367941501","data-ad-format":"auto","data-full-width-responsive":"true"})]})};var V=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(E,{}),Object(y.jsxs)(g.c,{children:[Object(y.jsx)(g.a,{path:"/",element:Object(y.jsx)(q,{})}),Object(y.jsx)(g.a,{path:"/create",element:Object(y.jsx)(Y,{})}),Object(y.jsx)(g.a,{path:"/login",element:Object(y.jsx)(v,{})}),Object(y.jsx)(g.a,{path:"/message/:id",element:Object(y.jsx)(F,{})}),Object(y.jsx)(g.a,{path:"/aboutme",element:Object(y.jsx)(Q,{})}),Object(y.jsx)(g.a,{path:"/disclaimer",element:Object(y.jsx)(X,{})})]}),Object(y.jsx)(G,{})]})})};r.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(V,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={card:"faqs_card__3SRHA",ques:"faqs_ques__2cgVx",active:"faqs_active__IkOZi",ans:"faqs_ans__6W88S"}}},[[61,1,2]]]);
//# sourceMappingURL=main.cf2932fd.chunk.js.map