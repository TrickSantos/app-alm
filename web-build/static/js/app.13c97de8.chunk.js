(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return he}));var o=n(10),r=n.n(o),i=n(63),a=n(184),c=n(0),s=n(259),l=n(181),d=n(59),u=n(180),f=n(5),b=localStorage.getItem("TOKEN_API"),j=localStorage.getItem("STORAGE_USER"),g=Object(c.createContext)({}),h=function(e){var t=e.children,n=Object(c.useState)(j?JSON.parse(j):null),o=r()(n,2),i=o[0],a=o[1],s=Object(c.useState)(b),l=r()(s,2),d=l[0],h=l[1],m=Object(u.io)("wss://api-alm.server.sysirius.com",{autoConnect:!1,auth:{token:d},extraHeaders:{Authorization:"Bearer "+d},transportOptions:{polling:{extraHeaders:{Authorization:"Bearer "+d}}}});Object(c.useEffect)((function(){return m.connect(),m.on("exception",(function(e){"Forbidden resource"===e.message&&(localStorage.clear(),h(null),a(null))})),function(){m&&m.disconnect()}}),[m]),Object(c.useEffect)((function(){var e=localStorage.getItem("STORAGE_USER"),t=localStorage.getItem("TOKEN_API");t&&e&&(m.disconnect(),m.auth={token:t},m.connect())}),[m,d]);return Object(f.jsx)(g.Provider,{value:{signed:!!i,usuario:i,setUsuario:a,login:function(e,t){return new Promise((function(n,o){m.emit("login",{email:e,password:t},(function(e){"error"===e.status&&o(e),localStorage.setItem("STORAGE_USER",JSON.stringify(e.usuario)),localStorage.setItem("TOKEN_API",e.token),h(e.token),a(e.usuario),n(e)}))}))},socket:m},children:t})};function m(){return Object(c.useContext)(g)}var O=n(257),x=n(110),p=n(7),C=n(23),y=n(100),v=n(109),w=n(35),F=n(99),R=n.n(F),S=n(256),k=n(262),I=n(9),T=I.default.create({container:{flex:1},imageBg:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},title:{width:"100%",padding:20,alignItems:"center",justifyContent:"center"},titleText:{color:"#FFFFFF",fontFamily:"RobotoCondensed_400Regular",fontSize:28},main:{flex:1,width:"100%",backgroundColor:"#EDEDED"},item:{width:"100%",backgroundColor:"#FFFFFF",flexDirection:"row",alignItems:"center",padding:15,borderBottomColor:"#ABA7A7",borderBottomWidth:1,marginBottom:2},itemText:{width:"100%",fontFamily:"RobotoCondensed_400Regular",fontSize:28,color:"#ABA7A7"}}),B=function(e){var t=e.item,n=e.onPress;return Object(f.jsxs)(w.default,{style:T.item,onPress:n,children:[Object(f.jsx)(C.default,{style:T.itemText,children:t.nome}),t.ativo?Object(f.jsx)(S.default,{name:"right",size:24,color:"#CCCCCC"}):Object(f.jsx)(k.default,{name:"lock",size:24,color:"#CCCCCC"})]})},P=function(e){var t=e.navigation,n=m().socket,o=Object(c.useState)([]),i=r()(o,2),a=i[0],s=i[1];return Object(c.useEffect)((function(){n.emit("evento:index",(function(e){return s(e)})),n.on("evento:created",(function(){n.emit("evento:index",(function(e){return s(e)}))})),n.on("evento:destroyed",(function(){return n.emit("evento:index",(function(e){return s(e)}))})),n.on("evento:updated",(function(){n.emit("evento:index",(function(e){return s(e)}))}))}),[]),Object(f.jsx)(p.default,{style:T.container,children:Object(f.jsx)(x.LinearGradient,{style:T.container,colors:["#f2621a","#f2621b","#f3621a","#000000"],children:Object(f.jsxs)(y.default,{style:T.imageBg,source:R.a,children:[Object(f.jsx)(p.default,{style:T.title,children:Object(f.jsx)(C.default,{style:T.titleText,children:"Check-In"})}),Object(f.jsx)(p.default,{style:T.main,children:Object(f.jsx)(v.default,{data:a,renderItem:function(e){var n=e.item;return Object(f.jsx)(B,{item:n,onPress:function(){return t.navigate("Scanner",n)}})},keyExtractor:function(e){return e.id.toString()}})})]})})})},E=n(8),_=n.n(E),A=n(163),z=n(183),D=I.default.create({container:{flex:1,flexDirection:"column"},main:{flex:1,backgroundColor:"#F2621A",paddingHorizontal:"10%",paddingBottom:"20%",paddingTop:"5%"},camera:{borderRadius:50,flex:1,overflow:"hidden"},bottomBar:{width:"100%",height:"8%",alignItems:"center",justifyContent:"center",backgroundColor:"#FFFFFF"},button:{height:50,width:50,backgroundColor:"#189EF1",alignItems:"center",justifyContent:"center",borderRadius:50}}),L=n(260),N=I.default.create({headerBar:{alignItems:"flex-start",justifyContent:"center",backgroundColor:"#F2621A",width:"100%",padding:20}}),W=n(32),U=function(){var e=Object(W.useNavigation)();return Object(f.jsx)(p.default,{style:N.headerBar,children:Object(f.jsx)(w.default,{onPress:e.goBack,children:Object(f.jsx)(S.default,{name:"arrowleft",size:24,color:"#fff"})})})},G=function(e){var t=e.navigation,n=e.route.params,o=m().socket,i=Object(d.useToast)(),a=L.default.useCameraPermissions(),s=r()(a,2),l=s[0],u=s[1];return Object(c.useEffect)((function(){(function(){var e=_()((function*(){null!=l&&l.granted||(yield u())}));return function(){return e.apply(this,arguments)}})()()}),[]),l?l.granted?Object(f.jsxs)(p.default,{style:D.container,children:[Object(f.jsx)(U,{}),Object(f.jsx)(p.default,{style:D.main,children:Object(f.jsx)(p.default,{style:D.camera,children:Object(f.jsx)(L.default,{onBarCodeScanned:function(e){console.log("escaneado"),console.log(e.data),o.emit("usuario:find",e.data,(function(e){"error"===e.status?(e.message.forEach((function(e){return i.show(e,{type:"danger"})})),t.goBack()):t.navigate("CheckIn",{eventoId:n.id,clubeId:e.clubeId,usuario:e})}))},barCodeScannerSettings:{barCodeTypes:[z.Constants.BarCodeType.qr]}})})}),Object(f.jsx)(p.default,{style:D.bottomBar,children:Object(f.jsx)(w.default,{style:D.button,onPress:function(){return t.navigate("Codigo",{eventoId:n.id})},children:Object(f.jsx)(S.default,{name:"scan1",size:24,color:"#ffffff"})})})]}):Object(f.jsxs)(p.default,{style:D.container,children:[Object(f.jsx)(C.default,{style:{textAlign:"center"},children:"Precisamos de sua permiss\xe3o para mostrar a camera"}),Object(f.jsx)(A.default,{onPress:u,title:"grant permission"})]}):Object(f.jsx)(C.default,{children:"Requesting for camera permission"})},H=I.default.create({container:{flex:1,flexDirection:"column",paddingHorizontal:"5%",paddingVertical:"20%",backgroundColor:"#F2621A"},main:{flex:1,backgroundColor:"#ffffff",borderRadius:50,overflow:"hidden",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},card:{justifyContent:"center",alignItems:"center",height:"60%",width:"100%",backgroundColor:"#0DBA3E",borderBottomRightRadius:150,borderBottomLeftRadius:150},cardText:{color:"#ffffff",fontFamily:"RobotoCondensed_400Regular",fontSize:36},buttonContainer:{width:"100%",height:"40%",justifyContent:"flex-end",alignItems:"center"},nameText:{margin:5},button:{height:50,width:150,backgroundColor:"#189EF1",alignItems:"center",justifyContent:"center",borderRadius:50,marginBottom:50,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},buttonText:{color:"#ffffff",fontFamily:"RobotoCondensed_400Regular",fontSize:16}}),K=function(e){var t=e.navigation,n=e.route.params,o=n.clubeId,r=n.eventoId,i=n.usuario,a=m().socket,c=Object(d.useToast)();return Object(f.jsxs)(p.default,{style:H.container,children:[Object(f.jsx)(U,{}),Object(f.jsxs)(p.default,{style:H.main,children:[Object(f.jsxs)(p.default,{style:H.card,children:[Object(f.jsx)(S.default,{name:"checkcircleo",size:60,color:"#FFFFFF"}),Object(f.jsx)(C.default,{style:H.cardText,children:"Check-In"}),Object(f.jsx)(C.default,{style:H.cardText,children:"Confirmado"})]}),Object(f.jsxs)(p.default,{style:H.buttonContainer,children:[Object(f.jsx)(C.default,{style:H.nameText,children:i.nome}),Object(f.jsx)(C.default,{style:H.nameText,children:i.clube.nome}),Object(f.jsx)(w.default,{style:H.button,onPress:function(){a.emit("presenca:create",{clubeId:o,eventoId:r,usuarioId:i.id},(function(e){"error"===e.status?(c.show("Erro ao confirmar presen\xe7a",{type:"danger"}),t.popToTop()):(c.show("Erro ao confirmar presen\xe7a",{type:"sucess"}),t.popToTop())}))},children:Object(f.jsx)(C.default,{style:H.buttonText,children:"OK"})})]})]})]})},J=n(2),V=n.n(J),q=n(164),$=n(86),M=n(90),Q=I.default.create({container:{flex:1,backgroundColor:"#F2621A",alignItems:"center"},title:{marginTop:50,textAlign:"center",fontSize:30,color:"#ffffff",fontFamily:"RobotoCondensed_400Regular"},codeFiledRoot:{marginTop:20,width:280,marginLeft:"auto",marginRight:"auto"},cellRoot:{width:30,height:60,justifyContent:"center",alignItems:"center",borderBottomColor:"#FFFFFF",borderBottomWidth:2},cellText:{color:"#FFFFFF",fontSize:32,textAlign:"center",fontFamily:"RobotoCondensed_400Regular"},focusCell:{borderBottomColor:"#189EF1",borderBottomWidth:2},button:{height:50,width:150,backgroundColor:"#189EF1",alignItems:"center",justifyContent:"center",borderRadius:50,marginTop:50,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.23,shadowRadius:2.62,elevation:4},buttonText:{color:"#ffffff",fontFamily:"RobotoCondensed_400Regular",fontSize:16}});function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){V()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t=e.navigation,n=e.route.params,o=m().socket,i=Object(d.useToast)(),a=Object(c.useState)(""),s=r()(a,2),l=s[0],u=s[1],b=Object(M.useBlurOnFulfill)({value:l,cellCount:7}),j=Object(M.useClearByFocusCell)({value:l,setValue:u}),g=r()(j,2),h=g[0],O=g[1],x=function(){return t.goBack(),!0};return Object(c.useEffect)((function(){return $.default.addEventListener("hardwareBackPress",x),function(){return $.default.removeEventListener("hardwareBackPress",x)}}),[]),Object(f.jsxs)(q.default,{style:Q.container,children:[Object(f.jsx)(U,{}),Object(f.jsx)(C.default,{style:Q.title,children:"Digite o c\xf3digo"}),Object(f.jsx)(M.CodeField,Y(Y({ref:b},h),{},{value:l,onChangeText:u,cellCount:7,rootStyle:Q.codeFiledRoot,keyboardType:"number-pad",textContentType:"oneTimeCode",renderCell:function(e){var t=e.index,n=e.symbol,o=e.isFocused;return Object(f.jsx)(p.default,{onLayout:O(t),style:[Q.cellRoot,o&&Q.focusCell],children:Object(f.jsx)(C.default,{style:Q.cellText,children:n||o&&Object(f.jsx)(M.Cursor,{})})},t)}})),Object(f.jsx)(w.default,{style:Q.button,onPress:function(){o.emit("usuario:find",l,(function(e){"error"===e.status?(e.message.forEach((function(e){return i.show(e,{type:"danger"})})),t.goBack()):t.navigate("CheckIn",{eventoId:n.eventoId,clubeId:e.clubeId,usuario:e})}))},children:Object(f.jsx)(C.default,{style:Q.buttonText,children:"OK"})})]})},ee=Object(O.default)(),te=function(){return Object(f.jsxs)(ee.Navigator,{children:[Object(f.jsx)(ee.Screen,{name:"Eventos",component:P,options:{headerShown:!1}}),Object(f.jsx)(ee.Screen,{name:"Scanner",component:G,options:{headerShown:!1}}),Object(f.jsx)(ee.Screen,{name:"Codigo",component:Z,options:{headerShown:!1}}),Object(f.jsx)(ee.Screen,{name:"CheckIn",component:K,options:{headerShown:!1}})]})},ne=n(103),oe=I.default.create({container:{backgroundColor:"#ffffff",opacity:.9,marginTop:5,marginBottom:5,borderRadius:10,flexDirection:"row",alignItems:"center",paddingHorizontal:"5%"},input:{fontFamily:"RobotoCondensed_400Regular",paddingVertical:15,paddingLeft:15,fontSize:16,width:"100%"}});function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){V()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e){return Object(f.jsxs)(p.default,{style:oe.container,children:[e.iconPrefix&&e.iconPrefix,Object(f.jsx)(ne.default,ie({style:oe.input},e)),e.iconSuffix&&e.iconSuffix]})},ce=I.default.create({container:{flex:1},imageBg:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"},mainForm:{width:"100%",padding:20},button:{backgroundColor:"#189EF1",alignItems:"center",justifyContent:"center",alignSelf:"center",width:"50%",padding:10,borderRadius:10,marginTop:50},buttonText:{color:"#ffffff",fontFamily:"RobotoCondensed_400Regular",fontSize:16}}),se=n(258),le=function(e){e.navigation;var t=m().login,n=function(){var e=_()((function*(){yield t("patrick.tafa@gmail.com","trick123")}));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(p.default,{style:ce.container,children:Object(f.jsx)(x.LinearGradient,{style:ce.container,colors:["#f2621a","#f2621b","#f3621a","#000000"],children:Object(f.jsx)(y.default,{style:ce.imageBg,source:R.a,children:Object(f.jsxs)(p.default,{style:ce.mainForm,children:[Object(f.jsx)(ae,{iconPrefix:Object(f.jsx)(k.default,{name:"user-alt",size:18,color:"#CCCCCC"}),value:"email"}),Object(f.jsx)(ae,{value:"email",secureTextEntry:!0,iconPrefix:Object(f.jsx)(k.default,{name:"lock",size:18,color:"#CCCCCC"}),iconSuffix:Object(f.jsx)(se.default,{name:"ios-eye-sharp",size:18,color:"#CCCCCC"})}),Object(f.jsx)(w.default,{style:ce.button,onPress:n,children:Object(f.jsx)(C.default,{style:ce.buttonText,children:"Entrar"})})]})})})})},de=Object(O.default)(),ue=function(){return Object(f.jsxs)(de.Navigator,{initialRouteName:"Login",children:[Object(f.jsx)(de.Screen,{name:"Login",component:le,options:{headerShown:!1}}),Object(f.jsx)(de.Screen,{name:"App",component:te,options:{headerShown:!1}})]})},fe=function(){return m().signed?Object(f.jsx)(te,{}):Object(f.jsx)(ue,{})},be=function(){return Object(f.jsx)(s.default,{children:Object(f.jsxs)(d.ToastProvider,{children:[Object(f.jsx)(l.StatusBar,{backgroundColor:"#f2621a"}),Object(f.jsx)(h,{children:Object(f.jsx)(fe,{})})]})})},je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function he(){var e=Object(i.useFonts)({RobotoCondensed_300Light:i.RobotoCondensed_300Light,RobotoCondensed_300Light_Italic:i.RobotoCondensed_300Light_Italic,RobotoCondensed_400Regular:i.RobotoCondensed_400Regular,RobotoCondensed_400Regular_Italic:i.RobotoCondensed_400Regular_Italic,RobotoCondensed_700Bold:i.RobotoCondensed_700Bold,RobotoCondensed_700Bold_Italic:i.RobotoCondensed_700Bold_Italic});return r()(e,1)[0]?Object(f.jsx)(be,{}):Object(f.jsx)(a.default,{})}!function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="/service-worker.js";je?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ge(t,e)}))}}()},193:function(e,t,n){e.exports=n(245)},99:function(e,t,n){e.exports=n.p+"static/media/logo.27ca7d3d.png"}},[[193,1,2]]]);
//# sourceMappingURL=app.13c97de8.chunk.js.map