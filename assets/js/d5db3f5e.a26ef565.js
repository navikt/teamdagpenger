(self.webpackChunkteamdagpenger=self.webpackChunkteamdagpenger||[]).push([[3042],{8468:(e,r,n)=>{"use strict";n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=n(5893),l=n(1151),i=n(7589);const o={},s="Meldeplikt",d={id:"innbyggerflate/l\xf8sninger/meldeplikt",title:"Meldeplikt",description:"Kort om meldekort",source:"@site/docs/innbyggerflate/l\xf8sninger/meldeplikt.mdx",sourceDirName:"innbyggerflate/l\xf8sninger",slug:"/innbyggerflate/l\xf8sninger/meldeplikt",permalink:"/teamdagpenger/docs/innbyggerflate/l\xf8sninger/meldeplikt",draft:!1,unlisted:!1,editUrl:"https://github.com/navikt/teamdagpenger/docs/innbyggerflate/l\xf8sninger/meldeplikt.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rapportering",permalink:"/teamdagpenger/docs/innbyggerflate/l\xf8sninger/Rapportering"},next:{title:"Nav.no",permalink:"/teamdagpenger/docs/innbyggerflate/l\xf8sninger/nav.no"}},a={},c=[{value:"Kort om meldekort",id:"kort-om-meldekort",level:2},{value:"Arkitektur",id:"arkitektur",level:2},{value:"Applikasjoner",id:"applikasjoner",level:2},{value:"Utvikling",id:"utvikling",level:2},{value:"N\xe5r er det smartest \xe5 release til prod?",id:"n\xe5r-er-det-smartest-\xe5-release-til-prod",level:3},{value:"Overv\xe5kning",id:"overv\xe5kning",level:2}];function p(e){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"meldeplikt",children:"Meldeplikt"}),"\n",(0,t.jsx)(r.h2,{id:"kort-om-meldekort",children:"Kort om meldekort"}),"\n",(0,t.jsxs)(r.p,{children:["N\xe5r man f\xe5r ",(0,t.jsx)(r.a,{href:"https://www.nav.no/dagpenger",children:"Dagpenger"})," (DP), ",(0,t.jsx)(r.a,{href:"https://www.nav.no/aap",children:"Arbeidsavklaringspenger"})," (AAP) eller ",(0,t.jsx)(r.a,{href:"https://www.nav.no/tiltakspenger",children:"Tiltakspenger"})," (TP) har man meldeplikt. Dvs. man m\xe5 sende meldekort hver fjortende dag.\nMeldekortet er et skjema man fyller ut, der man gir NAV opplysninger om blant annet jobb, aktiviteter og frav\xe6r de siste 14 dagene."]}),"\n",(0,t.jsxs)(r.p,{children:['Team Dagpenger "arvet" ansvaret for \xe5 gj\xf8re endringer og oppgraderinger i meldekort-l\xf8sningen fordi alle fra Team Meldekort ble flyttet til Team Dagpenger. Dagpenger-delen i meldekort-l\xf8sningen skal erstattes med ',(0,t.jsx)(r.code,{children:"dp-rapportering-frontend"}),". Team Dagpenger tenkte \xe5 pr\xf8ve den nye l\xf8sningen med begrenset antall brukere f\xf8rst. For \xe5 velge brukere som skulle sendes til den nye l\xf8sningen, ble opprettet en mekanisme som sjekker hvem som skal sendes:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Det finnes en tabell i meldkort-api sin database som inneholder f\xf8dselsnummer"}),"\n",(0,t.jsx)(r.li,{children:"Hvis f\xf8dselsnumeret til bruker er i denne tabellen, sendes brukeren til den nye l\xf8sningen"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"arkitektur",children:"Arkitektur"}),"\n",(0,t.jsx)(i.F,{filename:"meldeplikt"}),"\n",(0,t.jsx)(r.h2,{id:"applikasjoner",children:"Applikasjoner"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekort frontend"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekort mikrofrontend"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekort API"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekortservice"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/navikt/meldekortkontroll-api",children:"Meldekortkontroll API "})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"VIKTIG!"}),(0,t.jsx)(r.br,{}),"\n","Tekster som vises i meldekort-frontend kommer fra ",(0,t.jsx)(r.code,{children:"meldekort-api"}),". Vi m\xe5 vise de tekstene som var gyldige for det valgte meldekortet (for den meldeperioden). Det finnes fortsatt 2 filer med tekster i meldekort (",(0,t.jsx)(r.code,{children:"src\\app\\mock\\responses\\tekster_nb.json og src\\app\\mock\\responses\\tekster_en.json"}),"), men disse er ment for lokalkj\xf8ring/testing og inneholder ikke alle/siste versjoner av tekstene.",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.code,{children:"meldekort-api"})," har en tabell med tekstene i sin database. Denne tabellen er fylt ut ved hjelp av ",(0,t.jsx)(r.code,{children:"R__recreate_texts-migrasjonen"})," og har disse kolonnene:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"kode"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"verdi"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"sprak"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.code,{children:"fra_dato"})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["For \xe5 opprette en tekst i denne tabellen m\xe5 man skrive i ",(0,t.jsx)(r.code,{children:"R__recreate_texts"}),", f.eks:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"INSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('overskrift.bruttoBelop', 'Brutto bel\xf8p ', 'nb',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('overskrift.bruttoBelop', 'Gross amount ', 'en',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Dato ",(0,t.jsx)(r.code,{children:"1000-01-01"})," betyr at denne teksten skal i praksis gjelde for alle meldekort"]}),"\n",(0,t.jsx)(r.p,{children:"For \xe5 ha forskjellige versjoner av samme tekst:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"INSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Tekst v1 ', 'nb',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Text v1 ',  'en',  TO_DATE('1000-01-01', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Tekst v2 ', 'nb',  TO_DATE('2023-10-29', 'YYYY-MM-DD'));\nINSERT INTO tekst (kode, verdi, sprak,  fra_dato) VALUES ('textKode', 'Text v2 ',  'en',  TO_DATE('2023-10-29', 'YYYY-MM-DD'));\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Da skal v1 vises n\xe5r man har en aktiv meldeperiode som er f\xf8r ",(0,t.jsx)(r.code,{children:"2023-10-29"})," og ",(0,t.jsx)(r.code,{children:"v2"})," skal vises for meldeperioder etter ",(0,t.jsx)(r.code,{children:"2023-10-29"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"utvikling",children:"Utvikling"}),"\n",(0,t.jsx)(r.p,{children:"###Vanlig utviklingsprosess"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Opprett en ny branch"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Gj\xf8r n\xf8dvendige endringer i denne branchen"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Deploy branchen til Q1 og/eller Q2. For \xe5 gj\xf8re dette:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\xc5pne GitHub repo > Actions > Build and Deploy to dev > Run workflow > Velg riktig branch"}),"\n",(0,t.jsx)(r.li,{children:"Velg milj\xf8 Q1 eller Q2 > Run workflow"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Sjekk endringene i Q1 og/eller Q2"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Opprett en pull request"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"N\xe5r PRen er sjekket, merge branchen til master"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Bygg release. For \xe5 gj\xf8re dette:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\xc5pne GitHub repo > Actions > Build and Deploy to dev > Run workflow > Velg master branch"}),"\n",(0,t.jsx)(r.li,{children:"velg milj\xf8 Q1 eller Q2, velg bump > Run workflow"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Deploy release til prod (",(0,t.jsx)(r.a,{href:"#n%C3%A5r-er-det-smartest-%C3%A5-release-til-prod",children:"N\xe5r er det smartest \xe5 release til prod?"}),"). For \xe5 gj\xf8re dette:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\xc5pne GitHub repo > Actions > Deploy release to dev or prod > Run workflow > Velg master branch"}),"\n",(0,t.jsx)(r.li,{children:'skriv inn "p" som Milj\xf8, skriv inn den versjonen som skal deployes > Run workflow'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Sjekk at alt fungerer (",(0,t.jsx)(r.a,{href:"#overv%C3%A5kning",children:"Overv\xe5kning"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Oppdater ",(0,t.jsx)(r.a,{href:"https://confluence.adeo.no/display/TMP/Versjonsoversikt",children:"Confluence"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"n\xe5r-er-det-smartest-\xe5-release-til-prod",children:"N\xe5r er det smartest \xe5 release til prod?"}),"\n",(0,t.jsx)(r.p,{children:"Flertallet sender meldekortene sine fra fredag til mandag.\nDet betyr at det ikke er veldig smart \xe5 deploye noe til prod i disse dagene med mindre det er en prodfeil fiks.\nDet er bedre \xe5 deploye til prod fra tirsdag til torsdag."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{src:n(3744).Z+"",width:"847",height:"206"}),"\n",(0,t.jsx)(r.em,{children:"Antall REST-kall for \xe5 kontrollere meldekort per ukedag fra mandag til s\xf8ndag"})]}),"\n",(0,t.jsx)(r.h2,{id:"overv\xe5kning",children:"Overv\xe5kning"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://grafana.nais.io/d/rPG4uUC7k/meldekort-api?orgId=1&refresh=30s",children:"Nyttig Grafana dashboard for \xe5 sjekke at alt fungerer og meldekort kommer inn"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://grafana.nais.io/d/h_LlxHcVz/team-meldeplikt-nais-app-dashbord?from=now%2Fd&to=now&orgId=1&refresh=1m",children:"meldekort-api dashboard"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://grafana.nais.io/d/531ynU5Vz/meldekortservice?orgId=1",children:"meldekortservice dashboard"})}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Man kan ogs\xe5 sjekke ",(0,t.jsx)(r.code,{children:"kall_logg-tabellene"})," i ",(0,t.jsx)(r.code,{children:"meldekort-api"}),", ",(0,t.jsx)(r.code,{children:"meldekorservice"})," og ",(0,t.jsx)(r.code,{children:"meldekortkontroll-api"}),".\nDisse applikasjonene logger alle requeste'er som kommer inn og alle request'er de sender ut og alle respons'er.\nLogg slettes etter 30 dager i meldekorservice, 90 dager i ",(0,t.jsx)(r.code,{children:"meldekort-api"}),", 120 dager i ",(0,t.jsx)(r.code,{children:"meldekortkontroll-api"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1262:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>i});n(7294);var t=n(2389),l=n(5893);function i(e){let{children:r,fallback:n}=e;return(0,t.Z)()?(0,l.jsx)(l.Fragment,{children:r?.()}):n??null}},3973:(e,r,n)=>{"use strict";var t=n(1262),l=n(7294);function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(t),s=i(l),d=function(){return d=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var l in r=arguments[n])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},d.apply(this,arguments)};!function(e,r){void 0===r&&(r={});var n=r.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===n&&t.firstChild?t.insertBefore(l,t.firstChild):t.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}(".docusaurus-plugin-drawio {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: center;\n  overflow-x: auto;\n}\n\nhtml[data-theme='dark'] .docusaurus-plugin-drawio {\n  background-color: #333;\n  color: #fff;\n}\n\n.docusaurus-plugin-drawio > div {\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid transparent;\n  min-width: 180px;\n}\n");var a=function(e){var r=e.content,n=e.maxHeight,t=e.autoFit,i=e.autoCrop,o=e.autoOrigin,a=e.allowZoomOut,c=e.allowZoomIn,p=e.checkVisibleState,h=e.toolbarPosition,k=e.toolbarNohide,m=e.toolbarButtons,g=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]])}return n}(e,["content","maxHeight","autoFit","autoCrop","autoOrigin","allowZoomOut","allowZoomIn","checkVisibleState","toolbarPosition","toolbarNohide","toolbarButtons"]),u=l.useState("loading..."),f=u[0],j=u[1],x=l.useRef(null),v=window.GraphViewer;return l.useEffect((function(){if(v)if(r){var e=d({editable:"_blank",highlight:"#0000ff",nav:!0,resize:!0,toolbar:"zoom lightbox",xml:r,"max-height":n,"auto-fit":t,"auto-crop":i,"auto-origin":o,"allow-zoom-out":a,"allow-zoom-in":c,"check-visible-state":p,"toolbar-position":h,"toolbar-nohide":k,"toolbar-buttons":m},g),l=JSON.stringify(e);x.current.dataset.mxgraph=l,j(""),setTimeout((function(){v.createViewerForElement(x.current)}),0)}else j("drawio file is empty");else j("GraphViewer is not loaded")}),[]),s.default.createElement("div",{className:"docusaurus-plugin-drawio"},s.default.createElement("div",{className:"docusaurus-plugin-drawio__content",ref:x},f))},c=l.memo((function(e){return s.default.createElement(o.default,{fallback:s.default.createElement(s.default.Fragment,null,"loading...")},(function(){return s.default.createElement(a,d({},e))}))}));e.exports=c},7589:(e,r,n)=>{"use strict";n.d(r,{F:()=>s});var t=n(7294),l=n(3973),i=n.n(l),o=n(5893);const s=t.memo((e=>{let{filename:r}=e;const[l,s]=(0,t.useState)(null);return(0,t.useEffect)((()=>{(async()=>{try{const e=await n(9731)(`./${r}.drawio`);s(e.default)}catch(e){console.error(`Error loading drawio file: ${e}`)}})()}),[r]),l?(0,o.jsx)(i(),{content:l}):(0,o.jsx)("div",{children:"Loading..."})}))},3744:(e,r,n)=>{"use strict";n.d(r,{Z:()=>t});const t=n.p+"assets/images/meldeplikt-innsendte-8b5fe680074562298e43d3e9d640a74d.png"},9731:(e,r,n)=>{var t={"./dp-quiz-hendelser-abonnement.drawio":[2022,2022],"./dp-quiz-publiserer-hendelser.drawio":[8168,8168],"./meldeplikt.drawio":[7999,7999],"./overordnet-arkitektur copy.drawio":[9728,9728],"./overordnet-arkitektur.drawio":[889,889],"./rapportering.drawio":[306,306],"./simple.drawio":[7830,7830],"./soknad.drawio":[1473,1473]};function l(e){if(!n.o(t,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=t[e],l=r[0];return n.e(r[1]).then((()=>n(l)))}l.keys=()=>Object.keys(t),l.id=9731,e.exports=l}}]);