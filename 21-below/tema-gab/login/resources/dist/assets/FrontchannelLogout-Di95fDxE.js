import{r as d,j as e}from"./index-CZQagKpW.js";function f(l){const{kcContext:s,i18n:r,doUseDefaultCss:i,Template:a,classes:c}=l,{logout:t}=s,{msg:o,msgStr:u}=r;return d.useEffect(()=>{t.logoutRedirectUri&&window.location.replace(t.logoutRedirectUri)},[]),e.jsxs(a,Object.assign({kcContext:s,i18n:r,doUseDefaultCss:i,classes:c,documentTitle:u("frontchannel-logout.title"),headerNode:o("frontchannel-logout.title")},{children:[e.jsx("p",{children:o("frontchannel-logout.message")}),e.jsx("ul",{children:t.clients.map(n=>e.jsxs("li",{children:[n.name,e.jsx("iframe",{src:n.frontChannelLogoutUrl,style:{display:"none"}})]},n.name))}),t.logoutRedirectUri&&e.jsx("a",Object.assign({id:"continue",className:"btn btn-primary",href:t.logoutRedirectUri},{children:o("doContinue")}))]}))}export{f as default};
