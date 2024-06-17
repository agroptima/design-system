"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[190],{"./src/stories/Menu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MenuWithLinks:()=>MenuWithLinks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Menu_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Menu=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/Menu/Menu.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Menu.A,options);Menu.A&&Menu.A.locals&&Menu.A.locals;var classNames=__webpack_require__("./src/utils/classNames.ts"),_excluded=["variant","className","children"],__jsx=react.createElement;function Menu_Menu_Menu(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,className=_ref.className,children=_ref.children,props=(0,objectWithoutProperties.A)(_ref,_excluded),cssClasses=(0,classNames.x)("menu",variant,className);return __jsx("ul",(0,esm_extends.A)({className:cssClasses,role:"menu"},props),children)}Menu_Menu_Menu.displayName="Menu";try{Menu_Menu_Menu.displayName="Menu",Menu_Menu_Menu.__docgenInfo={description:"",displayName:"Menu",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Menu/Menu.tsx#Menu"]={docgenInfo:Menu_Menu_Menu.__docgenInfo,name:"Menu",path:"src/atoms/Menu/Menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/atoms/Icon.tsx"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),MenuLink_excluded=["variant","isActive","className","icon","title","href"],MenuLink_jsx=react.createElement;function MenuLink(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,_ref$isActive=_ref.isActive,isActive=void 0!==_ref$isActive&&_ref$isActive,className=_ref.className,icon=_ref.icon,title=_ref.title,href=_ref.href,props=(0,objectWithoutProperties.A)(_ref,MenuLink_excluded),cssClasses=(0,classNames.x)("menu-item",variant,className,{active:isActive});return MenuLink_jsx("li",{tabIndex:0,role:"menuitem"},MenuLink_jsx(link_default(),(0,esm_extends.A)({href},props,{className:cssClasses}),icon&&MenuLink_jsx(Icon.I,{name:icon}),MenuLink_jsx("span",{className:"title"},title)))}MenuLink.displayName="MenuLink";try{MenuLink.displayName="MenuLink",MenuLink.__docgenInfo={description:"",displayName:"MenuLink",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Import"'},{value:'"Info"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Product"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Warning"'}]}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Menu/MenuLink.tsx#MenuLink"]={docgenInfo:MenuLink.__docgenInfo,name:"MenuLink",path:"src/atoms/Menu/MenuLink.tsx#MenuLink"})}catch(__react_docgen_typescript_loader_error){}var MenuDropdown_excluded=["variant","className","icon","title","children","isOpen","name"],MenuDropdown_jsx=react.createElement;function MenuDropdown(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,className=_ref.className,icon=_ref.icon,title=_ref.title,children=_ref.children,isOpen=_ref.isOpen,name=_ref.name,props=(0,objectWithoutProperties.A)(_ref,MenuDropdown_excluded),cssClasses=(0,classNames.x)("menu-item",variant,className);return MenuDropdown_jsx("li",(0,esm_extends.A)({tabIndex:0,role:"menuitem",className:"menu-dropdown"},props),MenuDropdown_jsx("details",{open:isOpen,name},MenuDropdown_jsx("summary",{className:cssClasses},icon&&MenuDropdown_jsx(Icon.I,{name:icon}),MenuDropdown_jsx("span",{className:"title"},title),MenuDropdown_jsx(Icon.I,{className:"arrow",name:"AngleDown"})),MenuDropdown_jsx("ul",{className:"menu",role:"menu"},children)))}MenuDropdown.displayName="MenuDropdown";try{MenuDropdown.displayName="MenuDropdown",MenuDropdown.__docgenInfo={description:"",displayName:"MenuDropdown",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Import"'},{value:'"Info"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Product"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Warning"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Menu/MenuDropdown.tsx#MenuDropdown"]={docgenInfo:MenuDropdown.__docgenInfo,name:"MenuDropdown",path:"src/atoms/Menu/MenuDropdown.tsx#MenuDropdown"})}catch(__react_docgen_typescript_loader_error){}var Menu_stories_jsx=react.createElement;const Menu_stories={title:"Design System/Atoms/Menu",component:Menu_Menu_Menu,tags:["autodocs"],argTypes:{icon:{description:"Component icon used"},variant:{description:"Component variant used"},title:{description:"Component title text"},isActive:{description:"Is the element active?"},href:{description:"link to the page"},isOpen:{description:"Is the dropdown open?"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2464-3456&m=dev"}}};var MenuWithLinks={render:function render(){return Menu_stories_jsx(Menu_Menu_Menu,null,Menu_stories_jsx(MenuLink,{title:"Tekken 8",href:"some-link"}),Menu_stories_jsx(MenuLink,{title:"The Legend of Zelda: Tears of the Kingdom",icon:"Delete",href:"some-link",isActive:!0}),Menu_stories_jsx(MenuLink,{title:"Metal Gear Solid 5: Ground Zeroes + The Phantom Pain",icon:"Show",href:"some-link"}),Menu_stories_jsx(MenuDropdown,{title:"Open",icon:"AddCircle",name:"menu",isOpen:!0},Menu_stories_jsx(MenuLink,{title:"Stray",href:"some-link",isActive:!0}),Menu_stories_jsx(MenuLink,{title:"Fallout 3",href:"some-link"})),Menu_stories_jsx(MenuDropdown,{title:"Close",name:"menu"},Menu_stories_jsx(MenuLink,{title:"Dark souls",href:"some-link"}),Menu_stories_jsx(MenuLink,{title:"Elder ring",href:"some-link"})))}};MenuWithLinks.parameters={...MenuWithLinks.parameters,docs:{...MenuWithLinks.parameters?.docs,source:{originalSource:'{\n  render: () => <Menu>\n      <MenuLink title="Tekken 8" href="some-link" />\n      <MenuLink title="The Legend of Zelda: Tears of the Kingdom" icon="Delete" href="some-link" isActive />\n      <MenuLink title="Metal Gear Solid 5: Ground Zeroes + The Phantom Pain" icon="Show" href="some-link" />\n      <MenuDropdown title="Open" icon="AddCircle" name="menu" isOpen>\n        <MenuLink title="Stray" href="some-link" isActive />\n        <MenuLink title="Fallout 3" href="some-link" />\n      </MenuDropdown>\n      <MenuDropdown title="Close" name="menu">\n        <MenuLink title="Dark souls" href="some-link" />\n        <MenuLink title="Elder ring" href="some-link" />\n      </MenuDropdown>\n    </Menu>\n}',...MenuWithLinks.parameters?.docs?.source}}};const __namedExportsOrder=["MenuWithLinks"]},"./src/atoms/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon_Icon});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.A,options);Icon.A&&Icon.A.locals&&Icon.A.locals;var icons=__webpack_require__("./src/icons/index.tsx"),classNames=__webpack_require__("./src/utils/classNames.ts"),_excluded=["name","className"],__jsx=react.createElement,Icon_Icon=function Icon(_ref){var name=_ref.name,className=_ref.className,props=(0,objectWithoutProperties.A)(_ref,_excluded),cssClasses=(0,classNames.x)("icon",className,{rotate:"Loading"===name});return __jsx("span",{role:"img",title:name,className:cssClasses},icons[name](props))};Icon_Icon.displayName="Icon";try{Icon_Icon.displayName="Icon",Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Import"'},{value:'"Info"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Product"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Warning"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Icon.tsx#Icon"]={docgenInfo:Icon_Icon.__docgenInfo,name:"Icon",path:"src/atoms/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>classNames});var classNames=function classNames(){for(var resultClasses=[],_len=arguments.length,classNames=new Array(_len),_key=0;_key<_len;_key++)classNames[_key]=arguments[_key];return classNames.forEach((function(className){if(void 0!==className)return"string"==typeof className?resultClasses.push(className):void Object.keys(className).forEach((function(key){Boolean(className[key])&&resultClasses.push(key)}))})),resultClasses.join(" ")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".icon{display:inline-flex;justify-content:center;align-items:center}@keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.icon.rotate{animation:rotate 2s linear infinite}","",{version:3,sources:["webpack://./src/atoms/Icon.scss"],names:[],mappings:"AAEA,MACE,mBAAA,CACA,sBAAA,CACA,kBAAA,CAEA,kBACE,KACE,sBAAA,CAEF,GACE,wBAAA,CAAA,CAGJ,aACE,mCAAA",sourcesContent:["@use '../settings/color_alias';\n\n.icon {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  @keyframes rotate {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  &.rotate {\n    animation: rotate 2s linear infinite;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/Menu/Menu.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import'https://fonts.googleapis.com/css2?family=Noto+Sans:wdth,wght@87.5,100..600';.menu{font-style:1rem;font-variant:normal;font-weight:400;font-family:Noto Sans,sans-serif;color:#444;font-size:1rem;line-height:normal;font-weight:400;color:#444;font-size:1rem;line-height:1.5rem;list-style-type:none;display:flex;flex-direction:column;padding:0}.menu-item{display:flex;gap:8px;padding:12px;text-decoration:none;color:inherit;align-items:center;cursor:default}.menu-item .icon{width:12px;height:12px}.menu-item .icon>svg{width:100%;height:100%}.menu-item .title{flex:1}.menu-item.primary{color:#fff;background:#393939}.menu-item.primary .icon>svg{fill:#fff}.menu-item.primary .icon>svg path{fill:#fff}.menu-item.primary:hover{background:#a95782}.menu-item.primary.active{background:#a95782}.menu details[open] .arrow{transform:rotate(180deg)}.menu .menu-dropdown .menu .menu-item{padding-left:32px;background:#ddd;color:#444}.menu .menu-dropdown .menu .menu-item:hover{background:#f6d4e4}.menu .menu-dropdown .menu .active{background:#f6d4e4;box-shadow:inset -3px 0px 0px 0px #a95782}","",{version:3,sources:["webpack://./src/settings/typography/_content.scss","webpack://./src/atoms/Menu/Menu.scss","webpack://./src/settings/_colors.scss","webpack://./src/settings/_config.scss"],names:[],mappings:"AAEQ,mFAAA,CCGR,MAAA,eAAA,CDCE,mBAAA,CACA,eAAA,CACA,gCACE,CAEF,UEiDW,CFhDX,cAAA,CACA,kBAAA,CAyCA,eAAA,CACA,UEKW,CFJX,cAAA,CACA,kBAAA,CClDA,oBAAA,CACA,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,WACE,YAAA,CACA,OEXO,CFYP,YEXO,CFYP,oBAAA,CACA,aAAA,CACA,kBAAA,CACA,cAAA,CAEA,iBACE,UECS,CAAA,WAAA,CFCT,qBACE,UAAA,CACA,WAAA,CAIJ,kBACE,MAAA,CAGF,mBACE,UChCQ,CDiCR,kBCyBM,CDtBJ,6BACE,SCrCI,CDsCJ,kCACE,SCvCE,CD4CR,yBACE,kBC7BM,CDgCR,0BACE,kBCjCM,CDuCV,2BACE,wBAAA,CAIF,sCACE,iBEtDK,CFuDL,eCIM,CDHN,UCNO,CDQP,4CACE,kBC7CM,CDgDV,mCACE,kBCjDQ,CDkDR,yCAAA",sourcesContent:["@use '../color_alias';\n// 87.5 = SemiCondensed , 400..600 normal, medium, semibold\n@import 'https://fonts.googleapis.com/css2?family=Noto+Sans:wdth,wght@87.5,100..600';\n\n@mixin base {\n  font-style: 1rem;\n  font-variant: normal;\n  font-weight: 400;\n  font-family:\n    Noto Sans,\n    sans-serif;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: normal;\n}\n\n@mixin h1 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 2.375rem;\n  line-height: 2.875rem;\n  margin: 0;\n}\n\n@mixin h2 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1.875rem;\n  line-height: 2.375rem;\n  margin: 0;\n}\n\n@mixin h3 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  margin: 0;\n}\n\n@mixin h4 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-secondary {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-disabled {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-400;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-error {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$error-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-warning {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$warning-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-medium {\n  @include base;\n  font-weight: 600;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-bold {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-underline {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$primary-color-600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin footnote-primary {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-600;\n  font-size: 0.875rem;\n  line-height: 1.375rem;\n}\n\n@mixin footnote-error {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$error-color-1000;\n  font-size: 0.875rem;\n  line-height: 1.375rem;\n}\n","@use '../../settings/color_alias';\n@use '../../settings/typography/content' as typography;\n@use '../../settings/config';\n@use '../../settings/depth';\n\n.menu {\n  @include typography.body-regular-primary;\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n\n  &-item {\n    display: flex;\n    gap: config.$space-2x;\n    padding: config.$space-3x;\n    text-decoration: none;\n    color: inherit;\n    align-items: center;\n    cursor: default;\n\n    .icon {\n      width: config.$icon-size-3x;\n      height: config.$icon-size-3x;\n      > svg {\n        width: 100%;\n        height: 100%;\n      }\n    }\n\n    .title {\n      flex: 1;\n    }\n\n    &.primary {\n      color: color_alias.$neutral-white;\n      background: color_alias.$neutral-color-900;\n\n      .icon {\n        > svg {\n          fill: color_alias.$neutral-white;\n          path {\n            fill: color_alias.$neutral-white;\n          }\n        }\n      }\n\n      &:hover {\n        background: color_alias.$primary-color-600;\n      }\n\n      &.active {\n        background: color_alias.$primary-color-600;\n      }\n    }\n  }\n\n  details[open] {\n    .arrow {\n      transform: rotate(180deg);\n    }\n  }\n  .menu-dropdown .menu {\n    .menu-item {\n      padding-left: config.$space-8x;\n      background: color_alias.$neutral-color-100;\n      color: color_alias.$neutral-color-1000;\n\n      &:hover {\n        background: color_alias.$primary-color-100;\n      }\n    }\n    .active {\n      background: color_alias.$primary-color-100;\n      box-shadow: inset -3px 0px 0px 0px color_alias.$primary-color-600;\n    }\n  }\n}\n"," /* This file is exported like: $white-1000-bodegas -> we need to erase bodegas */\n \n /* Variables  */\n $white-1000: #FFFFFFFF;\n $red-1000: #EC2A2FFF;\n $red-50: #FFEDE9FF;\n $red-100: #FFCABDFF;\n $red-200: #FFA696FF;\n $red-300: #FF8372FF;\n $red-400: #FF6054FF;\n $red-500: #F93E3BFF;\n $red-600: #E01A27FF;\n $red-700: #C20019FF;\n $red-800: #A00010FF;\n $red-900: #7B000AFF;\n $purple-1000: #5F0F40FF;\n $purple-900: #5A2843FF;\n $purple-800: #763558FF;\n $purple-700: #90446DFF;\n $purple-600: #A95782FF;\n $purple-500: #BF6C97FF;\n $purple-400: #D183ABFF;\n $purple-300: #E19DBEFF;\n $purple-200: #EDB8D1FF;\n $purple-100: #F6D4E4FF;\n $purple-50: #FCF0F6FF;\n $green-1000: #6FB62EFF;\n $green-900: #154300FF;\n $green-800: #195800FF;\n $green-700: #246D00FF;\n $green-600: #388200FF;\n $green-500: #519708FF;\n $green-400: #6DAB34FF;\n $green-300: #8CBF5BFF;\n $green-200: #ACD285FF;\n $green-100: #CDE5B3FF;\n $green-50: #EFF6E5FF;\n $dodger-blue-1000: #1890FFFF;\n $orange-1000: #FFA940FF;\n $dodger-blue-900: #003A7BFF;\n $dodger-blue-800: #004DA1FF;\n $dodger-blue-700: #0060C2FF;\n $dodger-blue-600: #0074DEFF;\n $dodger-blue-500: #0087F3FF;\n $dodger-blue-400: #4F9CFFFF;\n $dodger-blue-300: #7DB1FFFF;\n $dodger-blue-200: #A6C6FFFF;\n $dodger-blue-100: #CBDCFFFF;\n $dodger-blue-50: #EEF3FFFF;\n $orange-900: #5A2E00FF;\n $orange-800: #753D00FF;\n $orange-700: #8F4E00FF;\n $orange-600: #A86100FF;\n $orange-500: #C07500FF;\n $orange-400: #D58B2EFF;\n $orange-300: #E7A255FF;\n $orange-200: #F5BB81FF;\n $orange-100: #FDD6B0FF;\n $orange-50: #FFF1E4FF;\n $black-1000: #000000FF;\n $grey-1000: #444444FF;\n $grey-900: #393939FF;\n $grey-800: #4B4B4BFF;\n $grey-700: #5E5E5EFF;\n $grey-600: #727272FF;\n $grey-500: #868686FF;\n $grey-400: #9B9B9BFF;\n $grey-300: #B0B0B0FF;\n $grey-200: #C6C6C6FF;\n $grey-100: #DDDDDDFF;\n $grey-50: #F3F3F3FF;\n\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-halfx: 2px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);