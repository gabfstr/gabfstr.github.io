"use strict";(self.webpackChunkmyfirstpage=self.webpackChunkmyfirstpage||[]).push([[678],{5704:function(e,t,a){a.r(t),a.d(t,{default:function(){return ne}});var l=a(7294),n=a(5524),o=a(8589),r=a(8032),s=a(7124),c=a(1883);const i=e=>{const t=null==e?void 0:e.username;return(0,l.useEffect)((()=>{t&&setTimeout((()=>{var t,a,l,n;null===(t=Calendly)||void 0===t||t.initBadgeWidget({url:`https://calendly.com/${null==e?void 0:e.username}`,text:null!==(a=null==e?void 0:e.label)&&void 0!==a?a:"Schedule time with me",color:null!==(l=null==e?void 0:e.colorButton)&&void 0!==l?l:"#0069ff",textColor:null!==(n=null==e?void 0:e.colorText)&&void 0!==n?n:"#ffffff"})}),1e3)}),[]),t?l.createElement(l.Fragment,null,l.createElement("link",{href:"https://assets.calendly.com/assets/external/widget.css",rel:"stylesheet"}),l.createElement(c.Script,{id:"calendlyScript",src:"https://assets.calendly.com/assets/external/widget.js",type:"text/javascript",async:!0})):l.createElement(l.Fragment,null)};var d=a(4739),m=a(6620),u=a(3565),h="style-module--SlideContainer--1953a";function f(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(h).join(" "):h,l.createElement("div",{className:t,style:e.style},e.children)}const g={behance:"Behance",github:"GitHub",medium:"Medium",linkedin:"LinkedIn",mail:"Mail",twitter:"Twitter",mastodon:"Mastodon",hashnode:"Hashnode",devto:"Dev.to",instagram:"Instagram",youtube:"YouTube",twitch:"Twitch",gitlab:"GitLab",stackoverflow:"StackOverflow",buymeacoffee:"BuyMeACoffee",discord:"Discord",dribble:"Dribble",goodreads:"Goodreads",patreon:"Patreon",reddit:"Reddit",untappd:"Untappd",facebook:"Facebook",googlescholar:"Scholar"};var y="style-module--Profile--89881",p="style-module--iconOnly--586b3",b="style-module--profileLabel--90289",E="style-module--profileLink--a0677";let v=function(e){return e.Behance="behance",e.GitHub="github",e.Medium="medium",e.Mail="mail",e.LinkedIn="linkedin",e.Twitter="twitter",e.Mastodon="mastodon",e.Hashnode="hashnode",e.DevTo="devto",e.Instagram="instagram",e.YouTube="youtube",e.Twitch="twitch",e.Dribble="dribble",e.GitLab="gitlab",e.StackOverflow="stackoverflow",e.BuyMeACoffee="buymeacoffee",e.Discord="discord",e.Goodreads="goodreads",e.Patreon="patreon",e.Reddit="reddit",e.Untappd="untappd",e.Facebook="facebook",e.GoogleScholar="googlescholar",e}({});function I(e){const t=(0,m.$)(),a=e.from.map((e=>{const a=e.toLowerCase();if(Object.values(v).includes(a))return{id:a,label:g[a],url:t.social[a]};throw new Error(`Unknown social profile ${e}.`)}));return l.createElement(f,null,a.map(((t,a)=>t.label&&t.url?l.createElement("a",{key:a,className:`${y} ${e.showIcon?p:""} ${E}`,href:t.url,target:"_blank",rel:"noopener noreferrer","aria-label":t.label,style:e.showIcon?{padding:"0.5rem 1.25rem"}:void 0},e.showIcon?l.createElement(u.J,{name:t.id}):void 0,l.createElement("span",{className:b},t.label)):null)))}const w=()=>(0,c.useStaticQuery)("3584947626");var k="style-module--Hero--ad03a",N="style-module--HeroContainer--c34b7",S="style-module--Image--85f93",T="style-module--ImagePrefix--5a25a",_="style-module--Intro--85d79",C="style-module--Subtitle--5185b",$="style-module--Title--92dfe",x="style-module--heroImage--ad516",M="style-module--heroImageCont--5b34e",L="style-module--wavingHand--2db99";function D(e){var t,a;const n=w().allHeroJson.sections[0],o=i(n.calendly);return l.createElement(s.f,{type:"fadeUp",delay:400},o,l.createElement(d.$,{anchor:e.sectionId,additionalClasses:[N]},(null===(t=n.heroPhoto)||void 0===t?void 0:t.src)&&l.createElement("div",{className:M},l.createElement(r.G,{className:x,image:n.heroPhoto.src.childImageSharp.gatsbyImageData,alt:n.heroPhoto.alt||"Profile Image",loading:"eager"})),l.createElement("div",{className:k},l.createElement("div",{className:_},n.intro&&l.createElement("span",{className:T},n.intro),(null===(a=n.image)||void 0===a?void 0:a.src)&&l.createElement(s.f,{className:`${S} ${L}`,type:"waving-hand",duration:2500,iterationCount:3,restartOnClick:!0},l.createElement(r.G,{image:n.image.src.childImageSharp.gatsbyImageData,alt:n.image.alt||"Intro Image",loading:"eager"}))),l.createElement("h1",{className:$},n.title),l.createElement("h2",{className:C},n.subtitle.prefix,l.createElement("u",{dangerouslySetInnerHTML:{__html:n.subtitle.highlight}}),n.subtitle.suffix),l.createElement("p",{dangerouslySetInnerHTML:{__html:n.description}}),l.createElement(s.f,{type:"fadeLeft",delay:600},n.socialProfiles&&l.createElement(I,{from:n.socialProfiles.from,showIcon:n.socialProfiles.showIcons})))))}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');a(3426);const H=()=>(0,c.useStaticQuery)("680993469");var G="style-module--About--9efb7",P="style-module--Description--9abc9",A="style-module--Image--8362a",U="style-module--ImageWrapper--27039";function B(e){const t=H().allAboutMarkdown.sections[0];return l.createElement(s.f,{type:"fadeUp"},l.createElement(d.$,{anchor:e.sectionId,heading:e.heading},l.createElement("div",{className:G},l.createElement("div",{className:P,dangerouslySetInnerHTML:{__html:t.html}}),t.frontmatter.imagetop&&l.createElement(s.f,{type:"fadeLeft",delay:200},l.createElement("div",{className:U},l.createElement(r.G,{image:t.frontmatter.imagetop.childImageSharp.gatsbyImageData,className:A,alt:t.frontmatter.imagetopAlt||"About Image"}),l.createElement(r.G,{image:t.frontmatter.imagebot.childImageSharp.gatsbyImageData,className:A,alt:t.frontmatter.imagebotAlt||"About Image"}))))))}var F="style-module--col--e4c61",R="style-module--col-content--6570c",O="style-module--col-date--1566f",Q="style-module--label--326f2",j="style-module--row--97046";function z(e){return l.createElement(s.f,{type:"fadeUp"},l.createElement("div",{className:j},l.createElement("div",{className:`${F} ${O}`},l.createElement("span",{className:Q,style:{backgroundColor:e.data.color}},e.data.date)),l.createElement("div",{className:`${F} ${R}`},l.createElement("p",{dangerouslySetInnerHTML:{__html:e.data.content}}))))}const J=()=>(0,c.useStaticQuery)("651341739");var W="style-module--News--790cf",Y="style-module--row--0bb30";function q(e){const t=J().allNewsJson.nodes[0].news;return t.length?l.createElement(s.f,{type:"fadeUp"},l.createElement(d.$,{anchor:e.sectionId,heading:e.heading},l.createElement("div",{className:W}," ",t.map(((e,t)=>l.createElement("div",{className:Y,key:t}," ",l.createElement(z,{data:e}))))))):l.createElement("p",null,"No news found.")}const K=()=>(0,c.useStaticQuery)("2316124344");var V="style-module--Teaching--4c18c",X="style-module--row--78639";function Z(e){const t=K().allTeachingJson.nodes[0].teaching;return t.length?l.createElement(s.f,{type:"fadeUp"},l.createElement(d.$,{anchor:e.sectionId,heading:e.heading},l.createElement("div",{className:V}," ",t.map(((e,t)=>l.createElement("div",{className:X,key:t}," ",l.createElement(z,{data:e}))))))):l.createElement("p",null,"No teaching found.")}a(5707);const ee=()=>(0,c.useStaticQuery)("3022431531");var te="style-module--col--2709f",ae="style-module--row--3d925";function le(e){const t=ee().allResearchMarkdown.sections[0].html;return l.createElement(s.f,{type:"fadeUp"},l.createElement(d.$,{anchor:e.sectionId,heading:e.heading},l.createElement("div",{className:ae},l.createElement("div",{className:te},l.createElement("div",{className:"research-content",dangerouslySetInnerHTML:{__html:t||""}})))))}function ne(){return l.createElement(l.Fragment,null,l.createElement(o.p,{title:"Gabriel Fiastre"}),l.createElement(n.T,null,l.createElement(D,{sectionId:"hero"}),l.createElement("div",{style:{marginTop:"-100px"}}),l.createElement(B,{sectionId:"aboutme",heading:"About me"}),l.createElement(q,{sectionId:"news",heading:"News"}),l.createElement(le,{sectionId:"research",heading:"Research"}),l.createElement(Z,{sectionId:"teaching",heading:"Teaching"})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9944502a9a8a09d550fa.js.map