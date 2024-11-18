"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[872],{"./src/stories/CardMenu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActiveOption:()=>ActiveOption,DisabledOption:()=>DisabledOption,ErrorOption:()=>ErrorOption,Menu:()=>Menu,Option:()=>Option,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardMenu_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function CardMenu({children,...props}){return(0,jsx_runtime.jsx)("div",{role:"menu",...props,children})}try{CardMenu.displayName="CardMenu",CardMenu.__docgenInfo={description:"",displayName:"CardMenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/CardMenu/CardMenu.tsx#CardMenu"]={docgenInfo:CardMenu.__docgenInfo,name:"CardMenu",path:"src/atoms/CardMenu/CardMenu.tsx#CardMenu"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/atoms/Icon.tsx"),classNames=__webpack_require__("./src/utils/classNames.ts"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CardMenu_CardMenu=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/CardMenu/CardMenu.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CardMenu_CardMenu.A,options);CardMenu_CardMenu.A&&CardMenu_CardMenu.A.locals&&CardMenu_CardMenu.A.locals;function CardMenuOption({id,variant="primary",className,icon,title,description,disabled,href,active,error,...props}){const cssClasses=(0,classNames.x)("card-menu-option",variant,className,{disabled,active,error});return(0,jsx_runtime.jsxs)(link_default(),{role:"menuitem",className:cssClasses,href:disabled?"#":href,"aria-disabled":disabled,...props,children:[(0,jsx_runtime.jsxs)("div",{className:"left",children:[(0,jsx_runtime.jsxs)("div",{className:"title-container",children:[(0,jsx_runtime.jsx)(Icon.I,{name:icon,className:variant}),(0,jsx_runtime.jsx)("span",{className:"title",children:title})]}),description&&(0,jsx_runtime.jsx)("p",{className:"content",children:description})]}),(0,jsx_runtime.jsx)("div",{className:"right",children:(0,jsx_runtime.jsx)(Icon.I,{name:"AngleRight",className:variant})})]})}try{CardMenuOption.displayName="CardMenuOption",CardMenuOption.__docgenInfo={description:"",displayName:"CardMenuOption",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"ArrowBack"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"CheckboxIndeterminate"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"Delivery"'},{value:'"DeliveryNote"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Download"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Filter"'},{value:'"Import"'},{value:'"Info"'},{value:'"Invoice"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Minus"'},{value:'"PDF"'},{value:'"Product"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Series"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Upload"'},{value:'"UserMenu"'},{value:'"Warning"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.",name:"href",required:!0,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).",name:"as",required:!1,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props), [`getServerSideProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props) or [`getInitialProps`](/docs/pages/api-reference/functions/get-initial-props).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean"}},passHref:{defaultValue:null,description:"Forces `Link` to send the `href` property to its child.\n@defaultValue `false`",name:"passHref",required:!1,type:{name:"boolean"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be prefetched.\nPrefetch can be disabled by passing `prefetch={false}`. Prefetching is only enabled in production.\n\nIn App Router:\n- `null` (default): For statically generated pages, this will prefetch the full React Server Component data. For dynamic pages, this will prefetch up to the nearest route segment with a [`loading.js`](https://nextjs.org/docs/app/api-reference/file-conventions/loading) file. If there is no loading file, it will not fetch the full tree to avoid fetching too much data.\n- `true`: This will prefetch the full React Server Component data for all route segments, regardless of whether they contain a segment with `loading.js`.\n- `false`: This will not prefetch any data, even on hover.\n\nIn Pages Router:\n- `true` (default): The full route & its data will be prefetched.\n- `false`: Prefetching will not happen when entering the viewport, but will still happen on hover.\n@defaultValue `true` (pages router) or `null` (app router)",name:"prefetch",required:!1,type:{name:"boolean | null"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false"}},legacyBehavior:{defaultValue:null,description:"Enable legacy link behavior.\n@defaultValue `false`\n@see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7",name:"legacyBehavior",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement>"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/CardMenu/CardMenuOption.tsx#CardMenuOption"]={docgenInfo:CardMenuOption.__docgenInfo,name:"CardMenuOption",path:"src/atoms/CardMenu/CardMenuOption.tsx#CardMenuOption"})}catch(__react_docgen_typescript_loader_error){}const CardMenu_stories={title:"Design System/Atoms/CardMenu",component:CardMenuOption,tags:["autodocs"],argTypes:{id:{description:"Id for aria purposes"},icon:{description:"Component icon used"},variant:{description:"Component variant used"},title:{description:"Component title text"},description:{description:"Component description text"},disabled:{description:"Is the component disabled?"},active:{description:"Is the component active?"},error:{description:"Is the component marked as error?"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2285-1811&m=dev"}}},Option={render:()=>(0,jsx_runtime.jsx)(CardMenuOption,{id:"first-menu-option",href:"#",icon:"Info",variant:"primary",title:"It's dangerous to go alone!",description:"Take this 🗡️ and this 🛡️ and this 💣 and this 🏹 and this 🔪 and this 🐴 and this 🔫 and this 🔪"})},DisabledOption={render:()=>(0,jsx_runtime.jsx)(CardMenuOption,{id:"first-menu-option",href:"#",icon:"Info",variant:"primary",title:"It's dangerous to go alone!",description:"Take this 🗡️",disabled:!0})},ActiveOption={render:()=>(0,jsx_runtime.jsx)(CardMenuOption,{id:"first-menu-option",href:"#",icon:"Info",variant:"primary",title:"It's dangerous to go alone!",description:"Take this 🗡️",active:!0})},ErrorOption={render:()=>(0,jsx_runtime.jsx)(CardMenuOption,{id:"first-menu-option",href:"#",icon:"Info",variant:"primary",title:"It's dangerous to go alone!",description:"Take this 🗡️",error:!0})},Menu={render:()=>(0,jsx_runtime.jsxs)(CardMenu,{children:[(0,jsx_runtime.jsx)(CardMenuOption,{active:!0,id:"first-menu-option",href:"#",icon:"AddCircle",variant:"primary",title:"Title",description:"Name of the videogame"}),(0,jsx_runtime.jsx)(CardMenuOption,{id:"second-menu-option",href:"#",icon:"Edit",variant:"primary",title:"Address",description:"Videogame company address"}),(0,jsx_runtime.jsx)(CardMenuOption,{id:"third-menu-option",href:"#",icon:"Info",variant:"primary",title:"Email",description:"Videogame company email"})]})},__namedExportsOrder=["Option","DisabledOption","ActiveOption","ErrorOption","Menu"];Option.parameters={...Option.parameters,docs:{...Option.parameters?.docs,source:{originalSource:'{\n  render: () => <CardMenuOption id="first-menu-option" href="#" icon="Info" variant="primary" title="It\'s dangerous to go alone!" description="Take this 🗡️ and this 🛡️ and this 💣 and this 🏹 and this 🔪 and this 🐴 and this 🔫 and this 🔪" />\n}',...Option.parameters?.docs?.source}}},DisabledOption.parameters={...DisabledOption.parameters,docs:{...DisabledOption.parameters?.docs,source:{originalSource:'{\n  render: () => <CardMenuOption id="first-menu-option" href="#" icon="Info" variant="primary" title="It\'s dangerous to go alone!" description="Take this 🗡️" disabled />\n}',...DisabledOption.parameters?.docs?.source}}},ActiveOption.parameters={...ActiveOption.parameters,docs:{...ActiveOption.parameters?.docs,source:{originalSource:'{\n  render: () => <CardMenuOption id="first-menu-option" href="#" icon="Info" variant="primary" title="It\'s dangerous to go alone!" description="Take this 🗡️" active />\n}',...ActiveOption.parameters?.docs?.source}}},ErrorOption.parameters={...ErrorOption.parameters,docs:{...ErrorOption.parameters?.docs,source:{originalSource:'{\n  render: () => <CardMenuOption id="first-menu-option" href="#" icon="Info" variant="primary" title="It\'s dangerous to go alone!" description="Take this 🗡️" error />\n}',...ErrorOption.parameters?.docs?.source}}},Menu.parameters={...Menu.parameters,docs:{...Menu.parameters?.docs,source:{originalSource:'{\n  render: () => <CardMenu>\n      <CardMenuOption active id="first-menu-option" href="#" icon="AddCircle" variant="primary" title="Title" description="Name of the videogame" />\n      <CardMenuOption id="second-menu-option" href="#" icon="Edit" variant="primary" title="Address" description="Videogame company address" />\n      <CardMenuOption id="third-menu-option" href="#" icon="Info" variant="primary" title="Email" description="Videogame company email" />\n    </CardMenu>\n}',...Menu.parameters?.docs?.source}}}},"./src/atoms/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon_Icon});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.A,options);Icon.A&&Icon.A.locals&&Icon.A.locals;var icons=__webpack_require__("./src/icons/index.tsx"),classNames=__webpack_require__("./src/utils/classNames.ts");const Icon_Icon=({name,className,visible=!0,...props})=>{if(!visible)return null;const cssClasses=(0,classNames.x)("icon",className,{rotate:"Loading"===name});return(0,jsx_runtime.jsx)("span",{role:"img",title:props.title||name,className:cssClasses,children:icons[name](props)})};try{Icon_Icon.displayName="Icon",Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"ArrowBack"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"CheckboxIndeterminate"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"Delivery"'},{value:'"DeliveryNote"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Download"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Filter"'},{value:'"Import"'},{value:'"Info"'},{value:'"Invoice"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Minus"'},{value:'"PDF"'},{value:'"Product"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Series"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Upload"'},{value:'"UserMenu"'},{value:'"Warning"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Icon.tsx#Icon"]={docgenInfo:Icon_Icon.__docgenInfo,name:"Icon",path:"src/atoms/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>classNames});const classNames=(...classNames)=>{const resultClasses=[];return classNames.forEach((className=>{if(void 0!==className)return"string"==typeof className?resultClasses.push(className):void Object.keys(className).forEach((key=>{Boolean(className[key])&&resultClasses.push(key)}))})),resultClasses.join(" ")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/CardMenu/CardMenu.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".card-menu-option{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;width:100%;padding:12px;gap:12px;border-radius:2px;text-decoration:none;cursor:default}.card-menu-option:hover{text-decoration:none}.card-menu-option .icon{width:16px;min-width:16px;height:16px}.card-menu-option .icon>svg{width:100%;height:100%}.card-menu-option .left{display:flex;flex-direction:column;gap:8px}.card-menu-option .left .title-container{display:flex;width:100%;gap:8px;justify-content:flex-start;align-items:center;flex:1}.card-menu-option .left .content{margin:0;text-align:left}.card-menu-option .right{margin-top:auto;margin-bottom:auto}.card-menu-option.primary{background:#fff;border-top:1px solid rgba(0,0,0,0);border-bottom:1px solid #c3c7cf}.card-menu-option.primary:first-child{border-top:1px solid #c3c7cf}.card-menu-option.primary:has(+.active){border-bottom:1px solid rgba(0,0,0,0)}.card-menu-option.primary.active{background-color:rgba(0,0,0,0);border-top:1px solid #eb004d;border-bottom:1px solid #eb004d}.card-menu-option.primary.error{border:1px solid #ff4d4f;background-color:#ffeeeb}.card-menu-option.primary .icon>svg{fill:#eb004d}.card-menu-option.primary .icon>svg path{fill:#eb004d}.card-menu-option.primary:not(.disabled):hover{background:#ffedee}.card-menu-option.primary.disabled{background:#f3f3f5;font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#959ba7}.card-menu-option.primary.disabled .icon>svg{fill:#959ba7}.card-menu-option.primary.disabled .icon>svg path{fill:#959ba7}","",{version:3,sources:["webpack://./src/atoms/CardMenu/CardMenu.scss","webpack://./src/settings/typography/_content.scss","webpack://./src/settings/_colors.scss","webpack://./src/settings/_config.scss"],names:[],mappings:"AAKA,kBCWE,mBAAA,CACA,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aCqCU,CFnDV,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,6BAAA,CACA,UAAA,CACA,YGPS,CHQT,QGRS,CHST,iBGEkB,CHDlB,oBAAA,CACA,cAAA,CACA,wBACE,oBAAA,CAEF,wBACE,UGDW,CHEX,cGFW,CHGX,WGHW,CHIX,4BACE,UAAA,CACA,WAAA,CAIJ,wBACE,YAAA,CACA,qBAAA,CACA,OG7BO,CH+BP,yCACE,YAAA,CACA,UAAA,CACA,OGlCK,CHmCL,0BAAA,CACA,kBAAA,CACA,MAAA,CAGF,iCACE,QAAA,CACA,eAAA,CAIJ,yBACE,eAAA,CACA,kBAAA,CAGF,0BACE,eEvDS,CFwDT,kCAAA,CACA,+BAAA,CACA,sCACE,4BAAA,CAEF,wCAEE,qCAAA,CAEF,iCACE,8BAAA,CACA,4BAAA,CACA,+BAAA,CAGF,gCACE,wBAAA,CACA,wBEvEG,CF2EH,oCACE,YE9DM,CF+DN,yCACE,YEhEI,CFqEV,+CACE,kBEhEO,CFmET,mCACE,kBEvBI,CDpDR,mBAAA,CACA,6BAAA,CACA,eAkEE,CAjEF,cAhBe,CAiBf,kBAXsB,CAYtB,aC2CS,CF+BH,6CACE,YEhCC,CFiCD,kDACE,YElCD",sourcesContent:["@use '../../settings/color_alias';\n@use '../../settings/typography/content' as typography;\n@use '../../settings/config';\n@use '../../settings/depth';\n\n.card-menu-option {\n  @include typography.body-regular-primary;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: config.$space-3x;\n  gap: config.$space-3x;\n  border-radius: config.$corner-radius-xxs;\n  text-decoration: none;\n  cursor: default;\n  &:hover {\n    text-decoration: none;\n  }\n  .icon {\n    width: config.$icon-size-4x;\n    min-width: config.$icon-size-4x;\n    height: config.$icon-size-4x;\n    > svg {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .left {\n    display: flex;\n    flex-direction: column;\n    gap: config.$space-2x;\n\n    .title-container {\n      display: flex;\n      width: 100%;\n      gap: config.$space-2x;\n      justify-content: flex-start;\n      align-items: center;\n      flex: 1;\n    }\n\n    .content {\n      margin: 0;\n      text-align: left;\n    }\n  }\n\n  .right {\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  &.primary {\n    background: color_alias.$neutral-white;\n    border-top: 1px solid transparent;\n    border-bottom: 1px solid color_alias.$neutral-color-200;\n    &:first-child {\n      border-top: 1px solid color_alias.$neutral-color-200;\n    }\n    &:has(+ .active) {\n      // Remove border-bottom if next sibling is active\n      border-bottom: 1px solid transparent;\n    }\n    &.active {\n      background-color: transparent;\n      border-top: 1px solid color_alias.$primary-color-600;\n      border-bottom: 1px solid color_alias.$primary-color-600;\n    }\n\n    &.error {\n      border: 1px solid color_alias.$error-color-1000;\n      background-color: color_alias.$error-color-50;\n    }\n\n    .icon {\n      > svg {\n        fill: color_alias.$primary-color-600;\n        path {\n          fill: color_alias.$primary-color-600;\n        }\n      }\n    }\n\n    &:not(.disabled):hover {\n      background: color_alias.$primary-color-50;\n    }\n\n    &.disabled {\n      background: color_alias.$neutral-color-50;\n      @include typography.body-regular-disabled;\n\n      .icon {\n        > svg {\n          fill: color_alias.$neutral-color-400;\n          path {\n            fill: color_alias.$neutral-color-400;\n          }\n        }\n      }\n    }\n  }\n}\n","@use '../color_alias';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin typography-style($font-weight, $font-size, $line-height, $color) {\n  font-variant: normal;\n  font-family: Mulish, sans-serif;\n  font-weight: $font-weight;\n  font-size: $font-size;\n  line-height: $line-height;\n  color: $color;\n}\n\n@mixin h1 {\n  @include typography-style(\n    700,\n    $font-size-h1,\n    $font-line-height-h1,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h2 {\n  @include typography-style(\n    700,\n    $font-size-h2,\n    $font-line-height-h2,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h3 {\n  @include typography-style(\n    700,\n    $font-size-h3,\n    $font-line-height-h3,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h4 {\n  @include typography-style(\n    700,\n    $font-size-h4,\n    $font-line-height-h4,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-regular-secondary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin body-regular-disabled {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-400\n  );\n}\n\n@mixin body-regular-error {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$error-color-1000\n  );\n}\n\n@mixin body-regular-warning {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$warning-color-1000\n  );\n}\n\n@mixin body-underline {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$primary-color-600\n  );\n}\n\n@mixin body-medium {\n  @include typography-style(\n    500,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-bold {\n  @include typography-style(\n    700,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-extrabold {\n  @include typography-style(\n    800,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin footnote-primary {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin footnote-error {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$error-color-1000\n  );\n}\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-halfx: 2px;\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".icon{display:inline-flex;justify-content:center;align-items:center}@keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.icon.rotate{animation:rotate 2s linear infinite}","",{version:3,sources:["webpack://./src/atoms/Icon.scss"],names:[],mappings:"AAEA,MACE,mBAAA,CACA,sBAAA,CACA,kBAAA,CAEA,kBACE,KACE,sBAAA,CAEF,GACE,wBAAA,CAAA,CAGJ,aACE,mCAAA",sourcesContent:["@use '../settings/color_alias';\n\n.icon {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  @keyframes rotate {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  &.rotate {\n    animation: rotate 2s linear infinite;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);