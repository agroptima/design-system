"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[190],{"./src/stories/Menu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MenuWithLinks:()=>MenuWithLinks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Menu_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Menu=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Menu/Menu.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Menu.A,options);Menu.A&&Menu.A.locals&&Menu.A.locals;var classNames=__webpack_require__("./src/utils/classNames.ts");function Menu_Menu_Menu({variant="primary",className,children,...props}){const cssClasses=(0,classNames.x)("menu",variant,className);return(0,jsx_runtime.jsx)("ul",{className:cssClasses,role:"menu",...props,children})}try{Menu_Menu_Menu.displayName="Menu",Menu_Menu_Menu.__docgenInfo={description:"",displayName:"Menu",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Menu/Menu.tsx#Menu"]={docgenInfo:Menu_Menu_Menu.__docgenInfo,name:"Menu",path:"src/atoms/Menu/Menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/atoms/Icon.tsx"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);function MenuLink({variant="primary",isActive=!1,className,icon,title,href,...props}){const cssClasses=(0,classNames.x)("menu-item",variant,className,{active:isActive});return(0,jsx_runtime.jsx)("li",{tabIndex:0,role:"menuitem",children:(0,jsx_runtime.jsxs)(link_default(),{href,...props,className:cssClasses,children:[icon&&(0,jsx_runtime.jsx)(Icon.I,{name:icon}),(0,jsx_runtime.jsx)("span",{className:"title",children:title})]})})}try{MenuLink.displayName="MenuLink",MenuLink.__docgenInfo={description:"",displayName:"MenuLink",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"ArrowBack"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"DeliveryNote"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Import"'},{value:'"Info"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Minus"'},{value:'"Product"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Series"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Warning"'}]}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Menu/MenuLink.tsx#MenuLink"]={docgenInfo:MenuLink.__docgenInfo,name:"MenuLink",path:"src/atoms/Menu/MenuLink.tsx#MenuLink"})}catch(__react_docgen_typescript_loader_error){}function MenuDropdown({variant="primary",className,icon,title,children,isOpen,name,...props}){return(0,jsx_runtime.jsx)("li",{tabIndex:0,role:"menuitem",className:"menu-dropdown",...props,children:(0,jsx_runtime.jsxs)("details",{open:isOpen,name,children:[(0,jsx_runtime.jsxs)("summary",{className:(0,classNames.x)("menu-item",variant,className),children:[icon&&(0,jsx_runtime.jsx)(Icon.I,{name:icon}),(0,jsx_runtime.jsx)("span",{className:"title",children:title}),(0,jsx_runtime.jsx)(Icon.I,{className:"arrow",name:"AngleDown"})]}),(0,jsx_runtime.jsx)("ul",{className:"menu",role:"menu",children})]})})}try{MenuDropdown.displayName="MenuDropdown",MenuDropdown.__docgenInfo={description:"",displayName:"MenuDropdown",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"ArrowBack"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"DeliveryNote"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Import"'},{value:'"Info"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Minus"'},{value:'"Product"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Series"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Warning"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Menu/MenuDropdown.tsx#MenuDropdown"]={docgenInfo:MenuDropdown.__docgenInfo,name:"MenuDropdown",path:"src/atoms/Menu/MenuDropdown.tsx#MenuDropdown"})}catch(__react_docgen_typescript_loader_error){}const Menu_stories={title:"Design System/Atoms/Menu",component:Menu_Menu_Menu,tags:["autodocs"],argTypes:{icon:{description:"Component icon used"},variant:{description:"Component variant used"},title:{description:"Component title text"},isActive:{description:"Is the element active?"},href:{description:"link to the page"},isOpen:{description:"Is the dropdown open?"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2464-3456&m=dev"}}},MenuWithLinks={render:()=>(0,jsx_runtime.jsxs)(Menu_Menu_Menu,{children:[(0,jsx_runtime.jsx)(MenuLink,{title:"Tekken 8",href:"some-link"}),(0,jsx_runtime.jsx)(MenuLink,{title:"The Legend of Zelda: Tears of the Kingdom",icon:"Delete",href:"some-link",isActive:!0}),(0,jsx_runtime.jsx)(MenuLink,{title:"Metal Gear Solid 5: Ground Zeroes + The Phantom Pain",icon:"Show",href:"some-link"}),(0,jsx_runtime.jsxs)(MenuDropdown,{title:"Open",icon:"AddCircle",name:"menu",isOpen:!0,children:[(0,jsx_runtime.jsx)(MenuLink,{title:"Stray",href:"some-link",isActive:!0}),(0,jsx_runtime.jsx)(MenuLink,{title:"Fallout 3",href:"some-link"})]}),(0,jsx_runtime.jsxs)(MenuDropdown,{title:"Close",name:"menu",children:[(0,jsx_runtime.jsx)(MenuLink,{title:"Dark souls",href:"some-link"}),(0,jsx_runtime.jsx)(MenuLink,{title:"Elder ring",href:"some-link"})]})]})},__namedExportsOrder=["MenuWithLinks"];MenuWithLinks.parameters={...MenuWithLinks.parameters,docs:{...MenuWithLinks.parameters?.docs,source:{originalSource:'{\n  render: () => <Menu>\n      <MenuLink title="Tekken 8" href="some-link" />\n      <MenuLink title="The Legend of Zelda: Tears of the Kingdom" icon="Delete" href="some-link" isActive />\n      <MenuLink title="Metal Gear Solid 5: Ground Zeroes + The Phantom Pain" icon="Show" href="some-link" />\n      <MenuDropdown title="Open" icon="AddCircle" name="menu" isOpen>\n        <MenuLink title="Stray" href="some-link" isActive />\n        <MenuLink title="Fallout 3" href="some-link" />\n      </MenuDropdown>\n      <MenuDropdown title="Close" name="menu">\n        <MenuLink title="Dark souls" href="some-link" />\n        <MenuLink title="Elder ring" href="some-link" />\n      </MenuDropdown>\n    </Menu>\n}',...MenuWithLinks.parameters?.docs?.source}}}},"./src/atoms/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon_Icon});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.A,options);Icon.A&&Icon.A.locals&&Icon.A.locals;var icons=__webpack_require__("./src/icons/index.tsx"),classNames=__webpack_require__("./src/utils/classNames.ts");const Icon_Icon=({name,className,...props})=>{const cssClasses=(0,classNames.x)("icon",className,{rotate:"Loading"===name});return(0,jsx_runtime.jsx)("span",{role:"img",title:name,className:cssClasses,children:icons[name](props)})};try{Icon_Icon.displayName="Icon",Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"ArrowBack"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"DeliveryNote"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Import"'},{value:'"Info"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Minus"'},{value:'"Product"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Series"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Warning"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Icon.tsx#Icon"]={docgenInfo:Icon_Icon.__docgenInfo,name:"Icon",path:"src/atoms/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>classNames});const classNames=(...classNames)=>{const resultClasses=[];return classNames.forEach((className=>{if(void 0!==className)return"string"==typeof className?resultClasses.push(className):void Object.keys(className).forEach((key=>{Boolean(className[key])&&resultClasses.push(key)}))})),resultClasses.join(" ")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".icon{display:inline-flex;justify-content:center;align-items:center}@keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.icon.rotate{animation:rotate 2s linear infinite}","",{version:3,sources:["webpack://./src/atoms/Icon.scss"],names:[],mappings:"AAEA,MACE,mBAAA,CACA,sBAAA,CACA,kBAAA,CAEA,kBACE,KACE,sBAAA,CAEF,GACE,wBAAA,CAAA,CAGJ,aACE,mCAAA",sourcesContent:["@use '../settings/color_alias';\n\n.icon {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  @keyframes rotate {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  &.rotate {\n    animation: rotate 2s linear infinite;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Menu/Menu.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".menu{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26;list-style-type:none;display:flex;flex-direction:column;padding:0}.menu-item{display:flex;gap:8px;padding:12px;text-decoration:none;color:inherit;align-items:center;cursor:default}.menu-item .icon{width:12px;height:12px}.menu-item .icon>svg{width:100%;height:100%}.menu-item .title{flex:1}.menu-item.primary{color:#fff;background:#353941}.menu-item.primary .icon>svg{fill:#fff}.menu-item.primary .icon>svg path{fill:#fff}.menu-item.primary:hover{background:#eb004d}.menu-item.primary.active{background:#eb004d}.menu details[open] .arrow{transform:rotate(180deg)}.menu .menu-dropdown .menu .menu-item{padding-left:32px;background:#dadde2;color:#161c26}.menu .menu-dropdown .menu .menu-item:hover{background:#ffc7cc}.menu .menu-dropdown .menu .active{background:#ffc7cc;box-shadow:inset -3px 0px 0px 0px #eb004d}.menu .menu-item::-webkit-details-marker{display:none}","",{version:3,sources:["webpack://./src/atoms/Menu/Menu.scss","webpack://./src/settings/typography/_content.scss","webpack://./src/settings/_colors.scss","webpack://./src/settings/_config.scss"],names:[],mappings:"AAKA,MCWE,mBAAA,CACA,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aCqCU,CFnDV,oBAAA,CACA,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,WACE,YAAA,CACA,OGVO,CHWP,YGVO,CHWP,oBAAA,CACA,aAAA,CACA,kBAAA,CACA,cAAA,CAEA,iBACE,UGCS,CAAA,WAAA,CHCT,qBACE,UAAA,CACA,WAAA,CAIJ,kBACE,MAAA,CAGF,mBACE,UElCO,CFmCP,kBEuBK,CFpBH,6BACE,SEvCG,CFwCH,kCACE,SEzCC,CF8CP,yBACE,kBE/BM,CFkCR,0BACE,kBEnCM,CFyCV,2BACE,wBAAA,CAIF,sCACE,iBGtDK,CHuDL,kBEEK,CFDL,aERM,CFUN,4CACE,kBE/CM,CFkDV,mCACE,kBEnDQ,CFoDR,yCAAA,CAIJ,yCACE,YAAA",sourcesContent:["@use '../../settings/color_alias';\n@use '../../settings/typography/content' as typography;\n@use '../../settings/config';\n@use '../../settings/depth';\n\n.menu {\n  @include typography.body-regular-primary;\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n\n  &-item {\n    display: flex;\n    gap: config.$space-2x;\n    padding: config.$space-3x;\n    text-decoration: none;\n    color: inherit;\n    align-items: center;\n    cursor: default;\n\n    .icon {\n      width: config.$icon-size-3x;\n      height: config.$icon-size-3x;\n      > svg {\n        width: 100%;\n        height: 100%;\n      }\n    }\n\n    .title {\n      flex: 1;\n    }\n\n    &.primary {\n      color: color_alias.$neutral-white;\n      background: color_alias.$neutral-color-900;\n\n      .icon {\n        > svg {\n          fill: color_alias.$neutral-white;\n          path {\n            fill: color_alias.$neutral-white;\n          }\n        }\n      }\n\n      &:hover {\n        background: color_alias.$primary-color-600;\n      }\n\n      &.active {\n        background: color_alias.$primary-color-600;\n      }\n    }\n  }\n\n  details[open] {\n    .arrow {\n      transform: rotate(180deg);\n    }\n  }\n  .menu-dropdown .menu {\n    .menu-item {\n      padding-left: config.$space-8x;\n      background: color_alias.$neutral-color-100;\n      color: color_alias.$neutral-color-1000;\n\n      &:hover {\n        background: color_alias.$primary-color-100;\n      }\n    }\n    .active {\n      background: color_alias.$primary-color-100;\n      box-shadow: inset -3px 0px 0px 0px color_alias.$primary-color-600;\n    }\n  }\n\n  .menu-item::-webkit-details-marker {\n    display: none;\n  }\n}\n","@use '../color_alias';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin typography-style($font-weight, $font-size, $line-height, $color) {\n  font-variant: normal;\n  font-family: Mulish, sans-serif;\n  font-weight: $font-weight;\n  font-size: $font-size;\n  line-height: $line-height;\n  color: $color;\n}\n\n@mixin h1 {\n  @include typography-style(\n    700,\n    $font-size-h1,\n    $font-line-height-h1,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h2 {\n  @include typography-style(\n    700,\n    $font-size-h2,\n    $font-line-height-h2,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h3 {\n  @include typography-style(\n    700,\n    $font-size-h3,\n    $font-line-height-h3,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h4 {\n  @include typography-style(\n    700,\n    $font-size-h4,\n    $font-line-height-h4,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-regular-secondary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin body-regular-disabled {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-400\n  );\n}\n\n@mixin body-regular-error {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$error-color-1000\n  );\n}\n\n@mixin body-regular-warning {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$warning-color-1000\n  );\n}\n\n@mixin body-underline {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$primary-color-600\n  );\n}\n\n@mixin body-medium {\n  @include typography-style(\n    500,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-bold {\n  @include typography-style(\n    700,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-extrabold {\n  @include typography-style(\n    800,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin footnote-primary {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin footnote-error {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$error-color-1000\n  );\n}\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-halfx: 2px;\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);