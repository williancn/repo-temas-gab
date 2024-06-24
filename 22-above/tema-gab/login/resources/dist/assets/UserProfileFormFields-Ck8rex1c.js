import{r as $,j as a}from"./index-CZQagKpW.js";import{a as F,u as _,i as S}from"./KcPage-Br_yE9qQ.js";Array.prototype.every||(Array.prototype.every=function(i,n){var s,e;if(this==null)throw new TypeError("this is null or not defined");var r=Object(this),p=r.length>>>0;if(typeof i!="function"&&Object.prototype.toString.call(i)!=="[object Function]")throw new TypeError;for(arguments.length>1&&(s=n),e=0;e<p;){var o;if(e in r){var b;if(o=r[e],s?b=i.call(s,o,e,r):b=i(o,e,r),!b)return!1}e++}return!0});function E(i){return!(i instanceof Object)||typeof i=="function"?i:i instanceof Array?i.map(E):Object.fromEntries(Object.entries(i).map(([n,s])=>[n,E(s)]))}function D(i){const n=$.useRef(null);return n.current=i,$.useState(()=>(...s)=>n.current(...s))[0]}const R=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,V=(i,n)=>{if(!i)return"";const s=n.match(/{\d+}/g);if(!s)return"";const e=s.reduce((y,v)=>y+parseInt(v.replace("{","").replace("}","")),0);let r=i.replace(/\D+/g,"");if(parseInt(r)!=r)return"";r.length>e&&(r=r.substring(0,e));const p=s.reduce((y,v)=>y+`(\\d${v})`,"^");let o=new RegExp(p).exec(r);if(!o)return i;let b=n;for(let y=0;y<s.length;y++)b=b.replace(s[y],o[y+1]);return b};var U=function(i,n){var s={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&n.indexOf(e)<0&&(s[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(i);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(i,e[r])&&(s[e[r]]=i[e[r]]);return s};F.assert();function B(i){var n,s;const{kcContext:e,i18n:r,doMakeUserConfirmPassword:p}=i,{insertScriptTags:o}=_({componentOrHookName:"useUserProfileForm",scriptTags:Object.keys((s=(n=e.profile)===null||n===void 0?void 0:n.html5DataAnnotations)!==null&&s!==void 0?s:{}).filter(O=>O!=="kcMultivalued"&&O!=="kcNumberFormat").map(O=>({type:"module",src:`${e.url.resourcesPath}/js/${O}.js`}))});$.useEffect(()=>{o()},[]);const{getErrors:b}=q({kcContext:e,i18n:r}),y=$.useMemo(()=>{var O,u;const k=(()=>{var l;e:{if("profile"in e&&"attributesByName"in e.profile&&Object.keys(e.profile.attributesByName).length!==0)break e;if("register"in e&&e.register instanceof Object&&"formData"in e.register)return["firstName","lastName","email","username"].filter(t=>t!=="username"?!0:!e.realm.registrationEmailAsUsername).map(t=>{var m;return S({name:t,displayName:S(`\${${t}}`),required:!0,value:(m=e.register.formData[t])!==null&&m!==void 0?m:"",html5DataAnnotations:{},readOnly:!1,validators:{},annotations:{},autocomplete:(()=>{switch(t){case"email":return"email";case"username":return"username";default:return}})()})});if("user"in e&&e.user instanceof Object)return["username","email","firstName","lastName"].filter(t=>t!=="username"?!0:e.user.editUsernameAllowed).map(t=>{var m;return S({name:t,displayName:S(`\${${t}}`),required:!0,value:(m=e.user[t])!==null&&m!==void 0?m:"",html5DataAnnotations:{},readOnly:!1,validators:{},annotations:{},autocomplete:(()=>{switch(t){case"email":return"email";case"username":return"username";default:return}})()})});if("email"in e&&e.email instanceof Object)return[S({name:"email",displayName:S("${email}"),required:!0,value:(l=e.email.value)!==null&&l!==void 0?l:"",html5DataAnnotations:{},readOnly:!1,validators:{},annotations:{},autocomplete:"email"})];F.assert(!1,"Unable to mock user profile from the current kcContext")}return Object.values(e.profile.attributesByName).map(E)})();k.forEach(l=>{var t,m,N;e:{if(typeof l.group!="string")break e;const{group:d,groupDisplayHeader:f,groupDisplayDescription:c}=l;if(delete l.group,delete l.groupDisplayHeader,delete l.groupDisplayDescription,delete l.groupAnnotations,d==="")break e;l.group={name:d,displayHeader:f,displayDescription:c,html5DataAnnotations:{}}}l.validators.options!==void 0&&l.annotations.inputType===void 0&&(l.annotations.inputType="select"),T({attribute:l})&&(l.multivalued=!0),l.multivalued?((t=l.values)!==null&&t!==void 0||(l.values=l.value!==void 0?[l.value]:[]),delete l.value):((m=l.value)!==null&&m!==void 0||(l.value=(N=l.values)===null||N===void 0?void 0:N[0]),delete l.values)});e:{if(!e.passwordRequired)break e;k.forEach((l,t)=>{l.name===(e.realm.registrationEmailAsUsername?"email":"username")&&k.splice(t+1,0,{name:"password",displayName:S("${password}"),required:!0,readOnly:!1,validators:{},annotations:{},autocomplete:"new-password",html5DataAnnotations:{}},{name:"password-confirm",displayName:S("${passwordConfirm}"),required:!0,readOnly:!1,validators:{},annotations:{},html5DataAnnotations:{},autocomplete:"new-password"})})}const C=[];for(const l of k){e:{if(!l.multivalued)break e;const t=!((O=l.values)===null||O===void 0)&&O.length?l.values:[""];n:{if(T({attribute:l}))break n;const m=l.validators.multivalued;if(m===void 0)break n;const{min:N}=m;if(!N)break n;const d=parseInt(`${N}`);for(let f=t.length;f<d;f++)t.push("")}C.push({attribute:l,valueOrValues:t});continue}C.push({attribute:l,valueOrValues:(u=l.value)!==null&&u!==void 0?u:""})}return{formFieldStates:C.map(({attribute:l,valueOrValues:t})=>({attribute:l,errors:b({attributeName:l.name,formFieldStates:C}),hasLostFocusAtLeastOnce:t instanceof Array&&!T({attribute:l})?t.map(()=>!1):!1,valueOrValues:t}))}},[]),[v,j]=$.useReducer(function O(u,k){const C=u.formFieldStates.find(({attribute:I})=>I.name===k.name);return F.assert(C!==void 0),(()=>{var I;switch(k.action){case"update":C.valueOrValues=k.valueOrValues;e:{const{attribute:l}=C,{kcNumberFormat:t}=(I=l.html5DataAnnotations)!==null&&I!==void 0?I:{};if(!t)break e;C.valueOrValues instanceof Array?C.valueOrValues=C.valueOrValues.map(m=>V(m,t)):C.valueOrValues=V(C.valueOrValues,t)}C.errors=b({attributeName:k.name,formFieldStates:u.formFieldStates});e:{if(p||k.name!=="password")break e;u=O(u,{action:"update",name:"password-confirm",valueOrValues:k.valueOrValues})}return;case"focus lost":if(C.hasLostFocusAtLeastOnce instanceof Array){const{fieldIndex:l}=k;F.assert(l!==void 0),C.hasLostFocusAtLeastOnce[l]=!0;return}C.hasLostFocusAtLeastOnce=!0;return}F.assert(!1)})(),Object.assign({},u)},y);return{formState:$.useMemo(()=>({formFieldStates:v.formFieldStates.map(O=>{var{errors:u,hasLostFocusAtLeastOnce:k,attribute:C}=O,I=U(O,["errors","hasLostFocusAtLeastOnce","attribute"]);return Object.assign({displayableErrors:u.filter(l=>{const t=typeof k=="boolean"?k:l.fieldIndex!==void 0?k[l.fieldIndex]:k[k.length-1];switch(l.source.type){case"server":return!0;case"other":switch(l.source.rule){case"requiredField":return t;case"passwordConfirmMatchesPassword":return t}F.assert(!1);case"passwordPolicy":switch(l.source.name){case"length":return t;case"digits":return t;case"lowerCase":return t;case"upperCase":return t;case"specialChars":return t;case"notUsername":return!0;case"notEmail":return!0}F.assert(!1);case"validator":switch(l.source.name){case"length":return t;case"pattern":return t;case"email":return t;case"integer":return t;case"multivalued":return t;case"options":return t}F.assert(!1)}}),attribute:C},I)}),isFormSubmittable:v.formFieldStates.every(({errors:O})=>O.length===0)}),[v]),dispatchFormAction:j}}F.assert();function q(i){const{kcContext:n,i18n:s}=i,{messagesPerField:e,passwordPolicies:r}=n,{msg:p,msgStr:o,advancedMsg:b,advancedMsgStr:y}=s,v=D(j=>{var x,O;const{attributeName:u,formFieldStates:k}=j,C=k.find(({attribute:d})=>d.name===u);F.assert(C!==void 0);const{attribute:I}=C,l=(()=>{var d;let{valueOrValues:f}=C;e:{const{kcNumberUnFormat:c}=(d=I.html5DataAnnotations)!==null&&d!==void 0?d:{};if(!c)break e;f instanceof Array?f=f.map(h=>V(h,c)):f=V(f,c)}return f})();F.assert(I!==void 0);e:{if(I.multivalued){const c=!((x=I.values)===null||x===void 0)&&x.length?I.values:[""];F.assert(l instanceof Array);const h=l;if(JSON.stringify(c)!==JSON.stringify(h.slice(0,c.length)))break e}else{const c=(O=I.value)!==null&&O!==void 0?O:"";if(F.assert(typeof l=="string"),c!==l)break e}let d;try{d=e.existsError(u)}catch{break e}if(!d)break e;const f=e.get(u);return[{errorMessageStr:f,errorMessage:a.jsx("span",{children:f},0),fieldIndex:void 0,source:{type:"server"}}]}e:{if(!I.multivalued||T({attribute:I}))break e;F.assert(l instanceof Array);const d=l,f=d.map((...[,c])=>v({attributeName:u,formFieldStates:k.map(g=>g.attribute.name===u?(F.assert(g.valueOrValues instanceof Array),{attribute:Object.assign(Object.assign({},I),{annotations:Object.assign(Object.assign({},I.annotations),{inputType:void 0}),multivalued:!1}),valueOrValues:g.valueOrValues[c]}):g)}).filter(g=>!(g.source.type==="other"&&g.source.rule==="requiredField")).map(g=>Object.assign(Object.assign({},g),{fieldIndex:c}))).reduce((c,h)=>[...c,...h],[]);n:{if(!I.required||d.every(h=>h!==""))break n;const c=["error-user-attribute-required"];f.push({errorMessage:a.jsx($.Fragment,{children:p(...c)},`${u}-${f.length}`),errorMessageStr:o(...c),fieldIndex:void 0,source:{type:"other",rule:"requiredField"}})}return f}e:{if(!I.multivalued||!T({attribute:I}))break e;const d="multivalued",f=I.validators[d];if(f===void 0)return[];const{min:c}=f,h=c?parseInt(`${c}`):I.required?1:0;F.assert(!isNaN(h));const{max:g}=f,w=g?parseInt(`${g}`):1/0;F.assert(!isNaN(w)),F.assert(l instanceof Array);const A=l;if(h<=A.length&&A.length<=w)return[];const M=["error-invalid-multivalued-size",`${h}`,`${w}`];return[{errorMessage:a.jsx($.Fragment,{children:p(...M)},0),errorMessageStr:o(...M),fieldIndex:void 0,source:{type:"validator",name:d}}]}F.assert(typeof l=="string");const t=l,m=[];e:{if(u!=="password"||r===void 0)break e;n:{const d="length",f=r[d];if(!f)break n;const c=f;if(t.length>=c)break n;const h=["invalidPasswordMinLengthMessage",`${c}`];m.push({errorMessage:a.jsx($.Fragment,{children:p(...h)},`${u}-${m.length}`),errorMessageStr:o(...h),fieldIndex:void 0,source:{type:"passwordPolicy",name:d}})}n:{const d="digits",f=r[d];if(!f)break n;const c=f;if(t.split("").filter(g=>!isNaN(parseInt(g))).length>=c)break n;const h=["invalidPasswordMinDigitsMessage",`${c}`];m.push({errorMessage:a.jsx($.Fragment,{children:p(...h)},`${u}-${m.length}`),errorMessageStr:o(...h),fieldIndex:void 0,source:{type:"passwordPolicy",name:d}})}n:{const d="lowerCase",f=r[d];if(!f)break n;const c=f;if(t.split("").filter(g=>g===g.toLowerCase()&&g!==g.toUpperCase()).length>=c)break n;const h=["invalidPasswordMinLowerCaseCharsMessage",`${c}`];m.push({errorMessage:a.jsx($.Fragment,{children:p(...h)},`${u}-${m.length}`),errorMessageStr:o(...h),fieldIndex:void 0,source:{type:"passwordPolicy",name:d}})}n:{const d="upperCase",f=r[d];if(!f)break n;const c=f;if(t.split("").filter(g=>g===g.toUpperCase()&&g!==g.toLowerCase()).length>=c)break n;const h=["invalidPasswordMinUpperCaseCharsMessage",`${c}`];m.push({errorMessage:a.jsx($.Fragment,{children:p(...h)},`${u}-${m.length}`),errorMessageStr:o(...h),fieldIndex:void 0,source:{type:"passwordPolicy",name:d}})}n:{const d="specialChars",f=r[d];if(!f)break n;const c=f;if(t.split("").filter(g=>!g.match(/[a-zA-Z0-9]/)).length>=c)break n;const h=["invalidPasswordMinSpecialCharsMessage",`${c}`];m.push({errorMessage:a.jsx($.Fragment,{children:p(...h)},`${u}-${m.length}`),errorMessageStr:o(...h),fieldIndex:void 0,source:{type:"passwordPolicy",name:d}})}n:{const d="notUsername";if(!r[d])break n;const c=k.find(w=>w.attribute.name==="username");if(!c)break n;const h=(()=>{var w;let{valueOrValues:A}=c;F.assert(typeof A=="string");s:{const{kcNumberUnFormat:M}=(w=I.html5DataAnnotations)!==null&&w!==void 0?w:{};if(!M)break s;A=V(A,M)}return A})();if(h===""||t!==h)break n;const g=["invalidPasswordNotUsernameMessage"];m.push({errorMessage:a.jsx($.Fragment,{children:p(...g)},`${u}-${m.length}`),errorMessageStr:o(...g),fieldIndex:void 0,source:{type:"passwordPolicy",name:d}})}n:{const d="notEmail";if(!r[d])break n;const c=k.find(g=>g.attribute.name==="email");if(!c)break n;F.assert(typeof c.valueOrValues=="string");{const g=c.valueOrValues;if(g===""||t!==g)break n}const h=["invalidPasswordNotEmailMessage"];m.push({errorMessage:a.jsx($.Fragment,{children:p(...h)},`${u}-${m.length}`),errorMessageStr:o(...h),fieldIndex:void 0,source:{type:"passwordPolicy",name:d}})}}e:{if(u!=="password-confirm")break e;const d=k.find(c=>c.attribute.name==="password");F.assert(d!==void 0),F.assert(typeof d.valueOrValues=="string");{const c=d.valueOrValues;if(t===c)break e}const f=["invalidPasswordConfirmMessage"];m.push({errorMessage:a.jsx($.Fragment,{children:p(...f)},`${u}-${m.length}`),errorMessageStr:o(...f),fieldIndex:void 0,source:{type:"other",rule:"passwordConfirmMatchesPassword"}})}const{validators:N}=I;e:{if(!I.required||t!=="")break e;const d=["error-user-attribute-required"];m.push({errorMessage:a.jsx($.Fragment,{children:p(...d)},`${u}-${m.length}`),errorMessageStr:o(...d),fieldIndex:void 0,source:{type:"other",rule:"requiredField"}})}e:{const d="length",f=N[d];if(!f)break e;const{"ignore.empty.value":c=!1,max:h,min:g}=f;if(c&&t==="")break e;const w={type:"validator",name:d};if(h&&t.length>parseInt(`${h}`)){const A=["error-invalid-length-too-long",`${h}`];m.push({errorMessage:a.jsx($.Fragment,{children:p(...A)},`${u}-${m.length}`),errorMessageStr:o(...A),fieldIndex:void 0,source:w})}if(g&&t.length<parseInt(`${g}`)){const A=["error-invalid-length-too-short",`${g}`];m.push({errorMessage:a.jsx($.Fragment,{children:p(...A)},`${u}-${m.length}`),errorMessageStr:o(...A),fieldIndex:void 0,source:w})}}e:{const d="pattern",f=N[d];if(f===void 0)break e;const{"ignore.empty.value":c=!1,pattern:h,"error-message":g}=f;if(c&&t===""||new RegExp(h).test(t))break e;const w=[g??S("shouldMatchPattern"),h];m.push({errorMessage:a.jsx($.Fragment,{children:b(...w)},`${u}-${m.length}`),errorMessageStr:y(...w),fieldIndex:void 0,source:{type:"validator",name:d}})}e:{{const g=m[m.length-1];if(g!==void 0&&g.source.type==="validator"&&g.source.name==="pattern")break e}const d="email",f=N[d];if(f===void 0)break e;const{"ignore.empty.value":c=!1}=f;if(c&&t===""||R.test(t))break e;const h=[S("invalidEmailMessage")];m.push({errorMessage:a.jsx($.Fragment,{children:p(...h)},`${u}-${m.length}`),errorMessageStr:o(...h),fieldIndex:void 0,source:{type:"validator",name:d}})}e:{const d="integer",f=N[d];if(f===void 0)break e;const{"ignore.empty.value":c=!1,max:h,min:g}=f;if(c&&t==="")break e;const w=parseInt(t),A={type:"validator",name:d};if(isNaN(w)){const M=["mustBeAnInteger"];m.push({errorMessage:a.jsx($.Fragment,{children:p(...M)},`${u}-${m.length}`),errorMessageStr:o(...M),fieldIndex:void 0,source:A});break e}if(h&&w>parseInt(`${h}`)){const M=["error-number-out-of-range-too-big",`${h}`];m.push({errorMessage:a.jsx($.Fragment,{children:p(...M)},`${u}-${m.length}`),errorMessageStr:o(...M),fieldIndex:void 0,source:A});break e}if(g&&w<parseInt(`${g}`)){const M=["error-number-out-of-range-too-small",`${g}`];m.push({errorMessage:a.jsx($.Fragment,{children:p(...M)},`${u}-${m.length}`),errorMessageStr:o(...M),fieldIndex:void 0,source:A});break e}}e:{const d="options",f=N[d];if(f===void 0||t===""||f.options.indexOf(t)>=0)break e;const c=[S("notAValidOption")];m.push({errorMessage:a.jsx($.Fragment,{children:b(...c)},`${u}-${m.length}`),errorMessageStr:y(...c),fieldIndex:void 0,source:{type:"validator",name:d}})}return m});return{getErrors:v}}function T(i){var n,s;const{attribute:e}=i;return(s=(n=e.annotations.inputType)===null||n===void 0?void 0:n.startsWith("multiselect"))!==null&&s!==void 0?s:!1}function H(i){const{attribute:n,values:s,fieldIndex:e}=i,r=(()=>{if(s.length===1)return!1;const o=(()=>{const{multivalued:b}=n.validators;if(b===void 0)return;const y=b.min;if(y!==void 0)return parseInt(`${y}`)})();return o===void 0?!0:s.length!==o})(),p=(()=>{if(e+1!==s.length)return!1;const o=(()=>{const{multivalued:b}=n.validators;if(b===void 0)return;const y=b.max;if(y!==void 0)return parseInt(`${y}`)})();return!(o===void 0||s.length===o)})();return{hasRemove:r,hasAdd:p}}function ee(i){const{kcContext:n,i18n:s,kcClsx:e,onIsFormSubmittableValueChange:r,doMakeUserConfirmPassword:p,BeforeField:o,AfterField:b}=i,{advancedMsg:y}=s,{formState:{formFieldStates:v,isFormSubmittable:j},dispatchFormAction:x}=B({kcContext:n,i18n:s,doMakeUserConfirmPassword:p});$.useEffect(()=>{r(j)},[j]);const O={current:""};return a.jsx(a.Fragment,{children:v.map(({attribute:u,displayableErrors:k,valueOrValues:C})=>{var I;return a.jsxs($.Fragment,{children:[a.jsx(z,{attribute:u,groupNameRef:O,i18n:s,kcClsx:e}),o!==void 0&&a.jsx(o,{attribute:u,dispatchFormAction:x,displayableErrors:k,valueOrValues:C,kcClsx:e,i18n:s}),a.jsxs("div",Object.assign({className:e("kcFormGroupClass"),style:{display:u.name==="password-confirm"&&!p?"none":void 0}},{children:[a.jsxs("div",Object.assign({className:e("kcLabelWrapperClass")},{children:[a.jsx("label",Object.assign({htmlFor:u.name,className:e("kcLabelClass")},{children:y((I=u.displayName)!==null&&I!==void 0?I:"")})),u.required&&a.jsx(a.Fragment,{children:"*"})]})),a.jsxs("div",Object.assign({className:e("kcInputWrapperClass")},{children:[u.annotations.inputHelperTextBefore!==void 0&&a.jsx("div",Object.assign({className:e("kcInputHelperTextBeforeClass"),id:`form-help-text-before-${u.name}`,"aria-live":"polite"},{children:y(u.annotations.inputHelperTextBefore)})),a.jsx(W,{attribute:u,valueOrValues:C,displayableErrors:k,dispatchFormAction:x,kcClsx:e,i18n:s}),a.jsx(L,{attribute:u,displayableErrors:k,kcClsx:e,fieldIndex:void 0}),u.annotations.inputHelperTextAfter!==void 0&&a.jsx("div",Object.assign({className:e("kcInputHelperTextAfterClass"),id:`form-help-text-after-${u.name}`,"aria-live":"polite"},{children:y(u.annotations.inputHelperTextAfter)})),b!==void 0&&a.jsx(b,{attribute:u,dispatchFormAction:x,displayableErrors:k,valueOrValues:C,kcClsx:e,i18n:s})]}))]}))]},u.name)})})}function z(i){var n,s,e;const{attribute:r,groupNameRef:p,i18n:o,kcClsx:b}=i,{advancedMsg:y}=o;return((n=r.group)===null||n===void 0?void 0:n.name)!==p.current&&(p.current=(e=(s=r.group)===null||s===void 0?void 0:s.name)!==null&&e!==void 0?e:"",p.current!=="")?(F.assert(r.group!==void 0),a.jsxs("div",Object.assign({className:b("kcFormGroupClass")},Object.fromEntries(Object.entries(r.group.html5DataAnnotations).map(([v,j])=>[`data-${v}`,j])),{children:[(()=>{var v;const j=(v=r.group.displayHeader)!==null&&v!==void 0?v:"",x=j!==""?y(j):r.group.name;return a.jsx("div",Object.assign({className:b("kcContentWrapperClass")},{children:a.jsx("label",Object.assign({id:`header-${r.group.name}`,className:b("kcFormGroupHeader")},{children:x}))}))})(),(()=>{var v;const j=(v=r.group.displayDescription)!==null&&v!==void 0?v:"";if(j!==""){const x=y(j);return a.jsx("div",Object.assign({className:b("kcLabelWrapperClass")},{children:a.jsx("label",Object.assign({id:`description-${r.group.name}`,className:b("kcLabelClass")},{children:x}))}))}return null})()]}))):null}function L(i){const{attribute:n,fieldIndex:s,kcClsx:e}=i,r=i.displayableErrors.filter(p=>p.fieldIndex===s);return r.length===0?null:a.jsx("span",Object.assign({id:`input-error-${n.name}${s===void 0?"":`-${s}`}`,className:e("kcInputErrorMessageClass"),"aria-live":"polite"},{children:r.filter(p=>p.fieldIndex===s).map(({errorMessage:p},o,b)=>a.jsxs($.Fragment,{children:[a.jsx("span",{children:p},o),b.length-1!==o&&a.jsx("br",{})]},o))}))}function W(i){const{attribute:n,valueOrValues:s}=i;switch(n.annotations.inputType){case"textarea":return a.jsx(K,Object.assign({},i));case"select":case"multiselect":return a.jsx(Q,Object.assign({},i));case"select-radiobuttons":case"multiselect-checkboxes":return a.jsx(J,Object.assign({},i));default:{if(s instanceof Array)return a.jsx(a.Fragment,{children:s.map((...[,r])=>a.jsx(P,Object.assign({},i,{fieldIndex:r}),r))});const e=a.jsx(P,Object.assign({},i,{fieldIndex:void 0}));return n.name==="password"||n.name==="password-confirm"?a.jsx(G,Object.assign({kcClsx:i.kcClsx,i18n:i.i18n,passwordInputId:n.name},{children:e})):e}}}function G(i){const{kcClsx:n,i18n:s,passwordInputId:e,children:r}=i,{msgStr:p}=s,[o,b]=$.useReducer(y=>!y,!1);return $.useEffect(()=>{const y=document.getElementById(e);F.assert(y instanceof HTMLInputElement),y.type=o?"text":"password"},[o]),a.jsxs("div",Object.assign({className:n("kcInputGroup")},{children:[r,a.jsx("button",Object.assign({type:"button",className:n("kcFormPasswordVisibilityButtonClass"),"aria-label":p(o?"hidePassword":"showPassword"),"aria-controls":e,onClick:b},{children:a.jsx("i",{className:n(o?"kcFormPasswordVisibilityIconHide":"kcFormPasswordVisibilityIconShow"),"aria-hidden":!0})}))]}))}function P(i){var n;const{attribute:s,fieldIndex:e,kcClsx:r,dispatchFormAction:p,valueOrValues:o,i18n:b,displayableErrors:y}=i;return a.jsxs(a.Fragment,{children:[a.jsx("input",Object.assign({type:(()=>{const{inputType:v}=s.annotations;return v!=null&&v.startsWith("html5-")?v.slice(6):v??"text"})(),id:s.name,name:s.name,value:e!==void 0?(F.assert(o instanceof Array),o[e]):(F.assert(typeof o=="string"),o),className:r("kcInputClass"),"aria-invalid":y.find(v=>v.fieldIndex===e)!==void 0,disabled:s.readOnly,autoComplete:s.autocomplete,placeholder:s.annotations.inputTypePlaceholder,pattern:s.annotations.inputTypePattern,size:s.annotations.inputTypeSize===void 0?void 0:parseInt(`${s.annotations.inputTypeSize}`),maxLength:s.annotations.inputTypeMaxlength===void 0?void 0:parseInt(`${s.annotations.inputTypeMaxlength}`),minLength:s.annotations.inputTypeMinlength===void 0?void 0:parseInt(`${s.annotations.inputTypeMinlength}`),max:s.annotations.inputTypeMax,min:s.annotations.inputTypeMin,step:s.annotations.inputTypeStep},Object.fromEntries(Object.entries((n=s.html5DataAnnotations)!==null&&n!==void 0?n:{}).map(([v,j])=>[`data-${v}`,j])),{onChange:v=>p({action:"update",name:s.name,valueOrValues:e!==void 0?(F.assert(o instanceof Array),o.map((j,x)=>x===e?v.target.value:j)):v.target.value}),onBlur:()=>p({action:"focus lost",name:s.name,fieldIndex:e})})),(()=>{if(e===void 0)return null;F.assert(o instanceof Array);const v=o;return a.jsxs(a.Fragment,{children:[a.jsx(L,{attribute:s,kcClsx:r,displayableErrors:y,fieldIndex:e}),a.jsx(Z,{attribute:s,values:v,fieldIndex:e,dispatchFormAction:p,i18n:b})]})})()]})}function Z(i){const{attribute:n,values:s,fieldIndex:e,dispatchFormAction:r,i18n:p}=i,{msg:o}=p,{hasAdd:b,hasRemove:y}=H({attribute:n,values:s,fieldIndex:e}),v=`-${n.name}-${e+1}`;return a.jsxs(a.Fragment,{children:[y&&a.jsxs(a.Fragment,{children:[a.jsx("button",Object.assign({id:`kc-remove${v}`,type:"button",className:"pf-c-button pf-m-inline pf-m-link",onClick:()=>r({action:"update",name:n.name,valueOrValues:s.filter((j,x)=>x!==e)})},{children:o("remove")})),b?a.jsx(a.Fragment,{children:" | "}):null]}),b&&a.jsx("button",Object.assign({id:`kc-add${v}`,type:"button",className:"pf-c-button pf-m-inline pf-m-link",onClick:()=>r({action:"update",name:n.name,valueOrValues:[...s,""]})},{children:o("addValue")}))]})}function J(i){const{attribute:n,dispatchFormAction:s,kcClsx:e,valueOrValues:r}=i,{advancedMsg:p}=i.i18n,{classDiv:o,classInput:b,classLabel:y,inputType:v}=(()=>{const{inputType:x}=n.annotations;switch(F.assert(x==="select-radiobuttons"||x==="multiselect-checkboxes"),x){case"select-radiobuttons":return{inputType:"radio",classDiv:e("kcInputClassRadio"),classInput:e("kcInputClassRadioInput"),classLabel:e("kcInputClassRadioLabel")};case"multiselect-checkboxes":return{inputType:"checkbox",classDiv:e("kcInputClassCheckbox"),classInput:e("kcInputClassCheckboxInput"),classLabel:e("kcInputClassCheckboxLabel")}}})(),j=(()=>{var x,O;e:{const{inputOptionsFromValidation:u}=n.annotations;if(u===void 0)break e;const k=n.validators[u];if(k===void 0||k.options===void 0)break e;return k.options}return(O=(x=n.validators.options)===null||x===void 0?void 0:x.options)!==null&&O!==void 0?O:[]})();return a.jsx(a.Fragment,{children:j.map(x=>a.jsxs("div",Object.assign({className:o},{children:[a.jsx("input",{type:v,id:`${n.name}-${x}`,name:n.name,value:x,className:b,"aria-invalid":i.displayableErrors.length!==0,disabled:n.readOnly,checked:r instanceof Array?r.includes(x):r===x,onChange:O=>s({action:"update",name:n.name,valueOrValues:(()=>{const u=O.target.checked;if(r instanceof Array){const k=[...r];return u?k.push(x):k.splice(k.indexOf(x),1),k}return O.target.checked?x:""})()}),onBlur:()=>s({action:"focus lost",name:n.name,fieldIndex:void 0})}),a.jsx("label",Object.assign({htmlFor:`${n.name}-${x}`,className:`${y}${n.readOnly?` ${e("kcInputClassRadioCheckboxLabelDisabled")}`:""}`},{children:p(x)}))]}),x))})}function K(i){const{attribute:n,dispatchFormAction:s,kcClsx:e,displayableErrors:r,valueOrValues:p}=i;F.assert(typeof p=="string");const o=p;return a.jsx("textarea",{id:n.name,name:n.name,className:e("kcInputClass"),"aria-invalid":r.length!==0,disabled:n.readOnly,cols:n.annotations.inputTypeCols===void 0?void 0:parseInt(`${n.annotations.inputTypeCols}`),rows:n.annotations.inputTypeRows===void 0?void 0:parseInt(`${n.annotations.inputTypeRows}`),maxLength:n.annotations.inputTypeMaxlength===void 0?void 0:parseInt(`${n.annotations.inputTypeMaxlength}`),value:o,onChange:b=>s({action:"update",name:n.name,valueOrValues:b.target.value}),onBlur:()=>s({action:"focus lost",name:n.name,fieldIndex:void 0})})}function Q(i){const{attribute:n,dispatchFormAction:s,kcClsx:e,displayableErrors:r,i18n:p,valueOrValues:o}=i,{advancedMsg:b}=p,y=n.annotations.inputType==="multiselect";return a.jsxs("select",Object.assign({id:n.name,name:n.name,className:e("kcInputClass"),"aria-invalid":r.length!==0,disabled:n.readOnly,multiple:y,size:n.annotations.inputTypeSize===void 0?void 0:parseInt(`${n.annotations.inputTypeSize}`),value:o,onChange:v=>s({action:"update",name:n.name,valueOrValues:y?Array.from(v.target.selectedOptions).map(j=>j.value):v.target.value}),onBlur:()=>s({action:"focus lost",name:n.name,fieldIndex:void 0})},{children:[!y&&a.jsx("option",{value:""}),(()=>{var j,x;e:{const{inputOptionsFromValidation:O}=n.annotations;if(O===void 0)break e;F.assert(typeof O=="string");const u=n.validators[O];if(u===void 0||u.options===void 0)break e;return u.options}return(x=(j=n.validators.options)===null||j===void 0?void 0:j.options)!==null&&x!==void 0?x:[]})().map(j=>a.jsx("option",Object.assign({value:j},{children:(()=>{var x;if(n.annotations.inputOptionLabels!==void 0){const{inputOptionLabels:O}=n.annotations;return b((x=O[j])!==null&&x!==void 0?x:j)}return n.annotations.inputOptionLabelsI18nPrefix!==void 0?b(`${n.annotations.inputOptionLabelsI18nPrefix}.${j}`):j})()}),j))]}))}export{ee as default};
