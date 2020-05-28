(this["webpackJsonpsql-injection"]=this["webpackJsonpsql-injection"]||[]).push([[0],{14:function(e,n,t){e.exports=t(23)},19:function(e,n,t){},20:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(10),c=t.n(l),i=(t(19),t(20),t(1)),o=t(2);t(3);function u(){var e=Object(i.a)(["\n  padding: 20px;\n"]);return u=function(){return e},e}function s(){var e=Object(i.a)(["\n  opacity: 0.8;\n  margin: 0px;\n  width: 33%;\n"]);return s=function(){return e},e}function d(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  padding: 5vh 0;\n"]);return d=function(){return e},e}function m(){var e=Object(i.a)(["\n  font-size: 72px;\n"]);return m=function(){return e},e}function h(){var e=Object(i.a)(["\n  padding: 15vh 0 5vh;\n"]);return h=function(){return e},e}function p(){var e=Object(i.a)(["\n  font-family: Consolas, 'Courier New', Courier, monospace;\n  color: #00c000;\n  width: 100vw;\n  min-height: 100vh;\n  background-color: #202020;\n  overflow-x: hidden;\n  justify-content: center;\n  flex: 1;\n"]);return p=function(){return e},e}var f=o.a.div(p()),E=o.a.div(h()),v=o.a.h1(m()),w=o.a.div(d()),b=o.a.h2(s()),g=o.a.h1(u()),y=function(e){return r.a.createElement(f,null,r.a.createElement(E,null,r.a.createElement(v,null,"SQL Injection")),r.a.createElement(w,null,r.a.createElement(b,null,"What it is"),r.a.createElement(b,null,"Why it happens"),r.a.createElement(b,null,"How to stop it")),r.a.createElement(g,null,"Bradon Zhang"),r.a.createElement("p",null,"ENC3254: ECO Visualizing Failure"))},j=t(4),x=t(6);function k(){var e=Object(i.a)(["\n  height: 20vh;\n  overflow-y: scroll;\n"]);return k=function(){return e},e}function O(){var e=Object(i.a)(["\n  width: 40%;\n  padding-left: 10%;\n"]);return O=function(){return e},e}function S(){var e=Object(i.a)(["\n  /* font-family: Consolas, 'Courier New', Courier, monospace; */\n  color: #00c000;\n  width: 100vw;\n  min-height: 100vh;\n  background-color: #202020;\n  overflow-x: hidden;\n  justify-content: center;\n  flex: 1;\n  text-align: left;\n"]);return S=function(){return e},e}var C=o.a.div(S()),_=o.a.div(O()),L=o.a.div(k()),Q=function(e){var n=Object(a.useState)([]),t=Object(j.a)(n,2),l=t[0],c=t[1],i=Object(a.useState)("SmartUser"),o=Object(j.a)(i,2),u=o[0],s=o[1],d=Object(a.useState)("abcxyz123"),m=Object(j.a)(d,2),h=m[0],p=m[1];return r.a.createElement(C,null,r.a.createElement(_,null,r.a.createElement("h1",null,"What is SQL?"),r.a.createElement("p",null,r.a.createElement("strong",null,"SQL")," (",r.a.createElement("strong",null,"S"),"tructured ",r.a.createElement("strong",null,"Q"),"uery ",r.a.createElement("strong",null,"L"),"anguage) is a text language used to execute queries on databases. A query is a request to retrieve or modify the data in a database."),r.a.createElement("p",null,"In web applications that use SQL, a user sends a request to the server through a user-friendly interface. The server then processes the request, tells the database to run a SQL query, and returns the corresponding data back to the user."),r.a.createElement("br",null),r.a.createElement("p",null,"For example, let's say we have a simple ",r.a.createElement("code",null,"users")," table in our database. This table will contain the ",r.a.createElement("code",null,"username"),", ",r.a.createElement("code",null,"password"),", and ",r.a.createElement("code",null,"credit_card")," of all our users."),r.a.createElement("p",null,"Click the button to run the following query, and see what happens!"),r.a.createElement("p",null,r.a.createElement("code",null,"SELECT * FROM users WHERE username = '",r.a.createElement("input",{type:"textbox",value:u,onChange:function(e){return s(e.target.value)}}),"' AND password = '",r.a.createElement("input",{type:"textbox",value:h,onChange:function(e){return p(e.target.value)}}),"';")),r.a.createElement("p",null,"(You can edit the textboxes to try searching for different usernames and passwords. It won't work unless you know them, though!)"),r.a.createElement("button",{onClick:function(){return c(x.a.filter((function(e){return e.username===u&&e.password===h})))}},"Run Query"),r.a.createElement(L,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"username"),r.a.createElement("th",null,"password"),r.a.createElement("th",null,"credit_card"))),r.a.createElement("tbody",null,l.map((function(e){var n=e.username,t=e.password,a=e.credit_card;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,n),r.a.createElement("td",null,t),r.a.createElement("td",null,a))})))))))};function q(){var e=Object(i.a)(["\n  color: #e00000;\n"]);return q=function(){return e},e}function R(){var e=Object(i.a)(["\n  height: 20vh;\n  overflow-y: scroll;\n"]);return R=function(){return e},e}function I(){var e=Object(i.a)(["\n  width: 40%;\n  padding-left: 10%;\n"]);return I=function(){return e},e}function T(){var e=Object(i.a)(["\n  color: #00c000;\n  width: 100vw;\n  min-height: 100vh;\n  background-color: #202020;\n  overflow-x: hidden;\n  justify-content: center;\n  flex: 1;\n  text-align: left;\n"]);return T=function(){return e},e}var W=o.a.div(T()),z=o.a.div(I()),A=o.a.div(R()),H=o.a.span(q()),N=function(e){var n=Object(a.useState)(!1),t=Object(j.a)(n,2),l=t[0],c=t[1];return r.a.createElement(W,null,r.a.createElement(z,null,r.a.createElement("h1",null,"SQL Injection: An Overview"),r.a.createElement("p",null,r.a.createElement("strong",null,"SQL injection")," is a cyberattack technique in which a user tricks a database into changing the SQL queries it's supposed to run."),r.a.createElement("p",null,"This is done by disguising fragments of SQL code as normal user input."),r.a.createElement("br",null),r.a.createElement("p",null,"Returning to the previous example, let's say the user inputted their password as ",r.a.createElement("code",null,r.a.createElement(H,null,"' OR 1=1;--")),"."),r.a.createElement("p",null,"Click the button to run the following query, and notice what changed from the last demo."),r.a.createElement("p",null,r.a.createElement("code",null,"SELECT * FROM users WHERE username = '","SmartUser","' AND password = '",r.a.createElement(H,null,"' OR 1=1;--"),"';")),r.a.createElement("button",{onClick:function(){return c(!0)}},"Run Query"),r.a.createElement(A,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"username"),r.a.createElement("th",null,"password"),r.a.createElement("th",null,"credit_card"))),r.a.createElement("tbody",null,l&&x.a.map((function(e){var n=e.username,t=e.password,a=e.credit_card;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,n),r.a.createElement("td",null,t),r.a.createElement("td",null,a))})))))))};function F(){var e=Object(i.a)(["\n  width: 40%;\n  padding-left: 10%;\n"]);return F=function(){return e},e}function B(){var e=Object(i.a)(["\n  color: #00c000;\n  width: 100vw;\n  min-height: 100vh;\n  background-color: #202020;\n  overflow-x: hidden;\n  justify-content: center;\n  flex: 1;\n  text-align: left;\n"]);return B=function(){return e},e}var M=o.a.div(B()),P=o.a.div(F()),U=function(e){return r.a.createElement(M,null,r.a.createElement(P,null,r.a.createElement("h1",null,"What Happened?"),r.a.createElement("p",null,"The software engineers for our example application did not sanitize user inputs."),r.a.createElement("p",null,"In other words, the application does not check if the user's input would alter the SQL query; user input is directly inserted into the query, which is interpreted by the database as something else entirely."),r.a.createElement("p",null,"In this particular case, ",r.a.createElement("code",null,"OR 1=1")," is always true (1 always equals 1), so all users in the database satisfy the query. Hence, all users show up in the final result, and the attacker has access to all users' private information."),r.a.createElement("br",null),r.a.createElement("p",null,"SQL injection attacks can be very costly and can put millions of people's privacy at risk."),r.a.createElement("p",null,"In 2009, Albert Gonzalez stole 130-140 million credit and debit card numbers using SQL injection attacks against 7-Eleven, Heartland Payment Systems, and Hannaford Brothers."),r.a.createElement("p",null,"As of 2017, injection attacks remain the most common type of cyberattack.")))};function J(){var e=Object(i.a)(["\n  width: 40%;\n  padding-left: 10%;\n"]);return J=function(){return e},e}function D(){var e=Object(i.a)(["\n  color: #00c000;\n  width: 100vw;\n  min-height: 100vh;\n  background-color: #202020;\n  overflow-x: hidden;\n  justify-content: center;\n  flex: 1;\n  text-align: left;\n"]);return D=function(){return e},e}var $=o.a.div(D()),G=o.a.div(J()),V=function(e){return r.a.createElement($,null,r.a.createElement(G,null,r.a.createElement("h1",null,"Analysis Method: Penetration Testing"),r.a.createElement("p",null,r.a.createElement("strong",null,"Penetration testing")," (pen-testing) is a preventative destructive method of failure analysis which aims to find holes in an application's security."),r.a.createElement("p",null,"Testers attack a version of the application to try to find weaknesses or security flaws; testing often includes SQL injection attacks."),r.a.createElement("p",null,"If penetration testers can access information they're not supposed to, developers can change their code to eliminate the security flaws before shipping an application to production."),r.a.createElement("p",null,"Cybersecurity is important! It's best to hire professionals to test an application's security.")))};function Y(){var e=Object(i.a)(["\n  width: 40%;\n  padding-left: 10%;\n"]);return Y=function(){return e},e}function Z(){var e=Object(i.a)(["\n  color: #00c000;\n  width: 100vw;\n  min-height: 100vh;\n  background-color: #202020;\n  overflow-x: hidden;\n  justify-content: center;\n  flex: 1;\n  text-align: left;\n"]);return Z=function(){return e},e}var K=o.a.div(Z()),X=o.a.div(Y()),ee=[y,Q,N,U,V,function(e){return r.a.createElement(K,null,r.a.createElement(X,null,r.a.createElement("h1",null,"Takeaways"),r.a.createElement("p",null,"Clearly, the example given is a simplification. Real applications have database schemas that are much more complicated, and real applications (hopefully) don't store passwords in plain text."),r.a.createElement("p",null,"However, the takeaway for developers is the same: user input should ",r.a.createElement("strong",null,"not")," be trusted. Sanitize all user input!"),r.a.createElement("p",null,"Fortunately, many resources are available to responsible software engineers to make sanitation easy. SQL libraries in many different languages, such as Python, have user input sanitation built in."),r.a.createElement("p",null,"With just some simple integration of mindful coding practices and preventative methods such as penetration testing, web applications become that much more secure.")))},function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"References"))}];var ne=function(){return r.a.createElement("div",{className:"App"},ee.map((function(e,n){return r.a.createElement(e,{key:n})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,n,t){},6:function(e){e.exports=JSON.parse('{"a":[{"username":"admin","password":"i_am_admin","credit_card":"1234 5678"},{"username":"SmartUser","password":"abcxyz123","credit_card":"3246 3246"},{"username":"SomeUser","password":"password987","credit_card":"9876 5432"},{"username":"bs2020","password":"n0t_m3_u$","credit_card":"2016 2020"},{"username":"kpop_stan","password":"jungkook4lyfe","credit_card":"2222 2222"},{"username":"CheeseFan3","password":"provolone","credit_card":"0000 0000"},{"username":"ball4life","password":"ripkobe","credit_card":"0824 0126"},{"username":"catlover17","password":"nyanyanya","credit_card":"3333 3333"}]}')}},[[14,1,2]]]);
//# sourceMappingURL=main.fedb6269.chunk.js.map