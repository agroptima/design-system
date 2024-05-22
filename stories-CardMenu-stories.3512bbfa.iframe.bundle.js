"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[872],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={};for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key)){if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./src/stories/CardMenu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisabledOption:()=>DisabledOption,Menu:()=>Menu,Option:()=>Option,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardMenu_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_excluded=["children"],__jsx=react.createElement;function CardMenu(_ref){var children=_ref.children,props=(0,objectWithoutProperties.A)(_ref,_excluded);return __jsx("div",(0,esm_extends.A)({role:"menu"},props),children)}CardMenu.displayName="CardMenu";try{CardMenu.displayName="CardMenu",CardMenu.__docgenInfo={description:"",displayName:"CardMenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/CardMenu/CardMenu.tsx#CardMenu"]={docgenInfo:CardMenu.__docgenInfo,name:"CardMenu",path:"src/atoms/CardMenu/CardMenu.tsx#CardMenu"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/atoms/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CardMenu_CardMenu=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/CardMenu/CardMenu.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CardMenu_CardMenu.A,options);CardMenu_CardMenu.A&&CardMenu_CardMenu.A.locals&&CardMenu_CardMenu.A.locals;var classNames=__webpack_require__("./src/utils/classNames.ts"),CardMenuOption_excluded=["id","variant","className","icon","title","description","disabled"],CardMenuOption_jsx=react.createElement;function CardMenuOption(_ref){_ref.id;var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,className=_ref.className,icon=_ref.icon,title=_ref.title,description=_ref.description,disabled=_ref.disabled,props=(0,objectWithoutProperties.A)(_ref,CardMenuOption_excluded),cssClasses=(0,classNames.x)("card-menu-option",variant,className,{disabled});return CardMenuOption_jsx("div",(0,esm_extends.A)({role:"menuitem",className:cssClasses},props,{"aria-disabled":disabled}),CardMenuOption_jsx("div",{className:"left"},CardMenuOption_jsx("div",{className:"title-container"},CardMenuOption_jsx(Icon.I,{name:icon,className:variant}),CardMenuOption_jsx("span",{className:"title"},title)),CardMenuOption_jsx("p",{className:"content"},description)),CardMenuOption_jsx("div",{className:"right"},CardMenuOption_jsx(Icon.I,{name:"AngleRight",className:variant})))}CardMenuOption.displayName="CardMenuOption";try{CardMenuOption.displayName="CardMenuOption",CardMenuOption.__docgenInfo={description:"",displayName:"CardMenuOption",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"Close"'},{value:'"Delete"'},{value:'"Done"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Info"'},{value:'"Loading"'},{value:'"Search"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Warning"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/CardMenu/CardMenuOption.tsx#CardMenuOption"]={docgenInfo:CardMenuOption.__docgenInfo,name:"CardMenuOption",path:"src/atoms/CardMenu/CardMenuOption.tsx#CardMenuOption"})}catch(__react_docgen_typescript_loader_error){}var CardMenu_stories_jsx=react.createElement;const CardMenu_stories={title:"Design System/Atoms/CardMenu",component:CardMenuOption,tags:["autodocs"],argTypes:{id:{description:"Id for aria purposes"},icon:{description:"Component icon used"},variant:{description:"Component variant used"},title:{description:"Component title text"},description:{description:"Component description text"},isDisabled:{description:"Is the component disabled?"},onClick:{description:"Event triggered when the component is clicked"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2285-1811&m=dev"}}};var Option={render:function render(){return CardMenu_stories_jsx(CardMenuOption,{id:"first-menu-option",icon:"Info",variant:"primary",title:"It's dangerous to go alone!",description:"Take this 🗡️ and this 🛡️ and this 💣 and this 🏹 and this 🔪 and this 🐴 and this 🔫 and this 🔪",isDisabled:!1,onClick:function onClick(){return alert("click")}})}},DisabledOption={render:function render(){return CardMenu_stories_jsx(CardMenuOption,{id:"first-menu-option",icon:"Info",variant:"primary",title:"It's dangerous to go alone!",description:"Take this 🗡️",disabled:!0})}},Menu={render:function render(){return CardMenu_stories_jsx(CardMenu,null,CardMenu_stories_jsx(CardMenuOption,{id:"first-menu-option",icon:"AddCircle",variant:"primary",title:"Title",description:"Name of the videogame",isDisabled:!1,onClick:function onClick(){return alert("click title")}}),CardMenu_stories_jsx(CardMenuOption,{id:"second-menu-option",icon:"Edit",variant:"primary",title:"Address",description:"Videogame company address",isDisabled:!1,onClick:function onClick(){return alert("click address")}}),CardMenu_stories_jsx(CardMenuOption,{id:"third-menu-option",icon:"Info",variant:"primary",title:"Email",description:"Videogame company email",isDisabled:!1,onClick:function onClick(){return alert("click email")}}))}};Option.parameters={...Option.parameters,docs:{...Option.parameters?.docs,source:{originalSource:'{\n  render: () => <CardMenuOption id="first-menu-option" icon="Info" variant="primary" title="It\'s dangerous to go alone!" description="Take this 🗡️ and this 🛡️ and this 💣 and this 🏹 and this 🔪 and this 🐴 and this 🔫 and this 🔪" isDisabled={false} onClick={() => alert(\'click\')} />\n}',...Option.parameters?.docs?.source}}},DisabledOption.parameters={...DisabledOption.parameters,docs:{...DisabledOption.parameters?.docs,source:{originalSource:'{\n  render: () => <CardMenuOption id="first-menu-option" icon="Info" variant="primary" title="It\'s dangerous to go alone!" description="Take this 🗡️" disabled />\n}',...DisabledOption.parameters?.docs?.source}}},Menu.parameters={...Menu.parameters,docs:{...Menu.parameters?.docs,source:{originalSource:'{\n  render: () => <CardMenu>\n      <CardMenuOption id="first-menu-option" icon="AddCircle" variant="primary" title="Title" description="Name of the videogame" isDisabled={false} onClick={() => alert(\'click title\')} />\n      <CardMenuOption id="second-menu-option" icon="Edit" variant="primary" title="Address" description="Videogame company address" isDisabled={false} onClick={() => alert(\'click address\')} />\n      <CardMenuOption id="third-menu-option" icon="Info" variant="primary" title="Email" description="Videogame company email" isDisabled={false} onClick={() => alert(\'click email\')} />\n    </CardMenu>\n}',...Menu.parameters?.docs?.source}}};const __namedExportsOrder=["Option","DisabledOption","Menu"]},"./src/atoms/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon_Icon});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.A,options);Icon.A&&Icon.A.locals&&Icon.A.locals;var icons=__webpack_require__("./src/icons/index.tsx"),classNames=__webpack_require__("./src/utils/classNames.ts"),_excluded=["name","className"],__jsx=react.createElement,Icon_Icon=function Icon(_ref){var name=_ref.name,className=_ref.className,props=(0,objectWithoutProperties.A)(_ref,_excluded),cssClasses=(0,classNames.x)("icon",className,{rotate:"Loading"===name});return __jsx("span",{role:"img",title:name,className:cssClasses},icons[name](props))};Icon_Icon.displayName="Icon";try{Icon_Icon.displayName="Icon",Icon_Icon.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"Close"'},{value:'"Delete"'},{value:'"Done"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Info"'},{value:'"Loading"'},{value:'"Search"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Warning"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Icon.tsx#Icon"]={docgenInfo:Icon_Icon.__docgenInfo,name:"Icon",path:"src/atoms/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>classNames});var classNames=function classNames(){for(var resultClasses=[],_len=arguments.length,classNames=new Array(_len),_key=0;_key<_len;_key++)classNames[_key]=arguments[_key];return classNames.forEach((function(className){if(void 0!==className)return"string"==typeof className?resultClasses.push(className):void Object.keys(className).forEach((function(key){Boolean(className[key])&&resultClasses.push(key)}))})),resultClasses.join(" ")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/CardMenu/CardMenu.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import'https://fonts.googleapis.com/css2?family=Noto+Sans:wdth,wght@87.5,100..600';.card-menu-option{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;width:100%;padding:12px;gap:12px;border-radius:2px;border-bottom:1px solid #c6c6c6;cursor:default;font-style:1rem;font-variant:normal;font-weight:400;font-family:Noto Sans,sans-serif;color:#444;font-size:1rem;line-height:normal;font-weight:400;color:#444;font-size:1rem;line-height:1.5rem}.card-menu-option .icon{width:16px;height:16px}.card-menu-option .icon>svg{width:100%;height:100%}.card-menu-option .left{display:flex;flex-direction:column;gap:8px}.card-menu-option .left .title-container{display:flex;width:100%;gap:8px;justify-content:flex-start;align-items:center;flex:1}.card-menu-option .left .content{margin:0;text-align:left}.card-menu-option .right{margin-top:auto;margin-bottom:auto}.card-menu-option.primary{background:#fff}.card-menu-option.primary .icon>svg{fill:#a95782}.card-menu-option.primary .icon>svg path{fill:#a95782}.card-menu-option.primary:not(.disabled):hover{background:#fcf0f6}.card-menu-option.primary.disabled{background:#f3f3f3;font-style:1rem;font-variant:normal;font-weight:400;font-family:Noto Sans,sans-serif;color:#444;font-size:1rem;line-height:normal;font-weight:400;color:#9b9b9b;font-size:1rem;line-height:1.5rem}.card-menu-option.primary.disabled .icon>svg{fill:#9b9b9b}.card-menu-option.primary.disabled .icon>svg path{fill:#9b9b9b}","",{version:3,sources:["webpack://./src/settings/typography/_content.scss","webpack://./src/atoms/CardMenu/CardMenu.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/_colors.scss"],names:[],mappings:"AAEQ,mFAAA,CCGR,kBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,6BAAA,CACA,UAAA,CACA,YCPS,CDQT,QCRS,CDST,iBCGkB,CDFlB,+BAAA,CACA,cAAA,CDVA,eAAA,CACA,mBAAA,CACA,eAAA,CACA,gCACE,CAEF,UGiDW,CHhDX,cAAA,CACA,kBAAA,CAyCA,eAAA,CACA,UGKW,CHJX,cAAA,CACA,kBAAA,CCtCA,wBACE,UAAA,CACA,WCDW,CDEX,4BACE,UAAA,CACA,WAAA,CAIJ,wBACE,YAAA,CACA,qBAAA,CACA,OC5BO,CD8BP,yCACE,YAAA,CACA,UAAA,CACA,OCjCK,CDkCL,0BAAA,CACA,kBAAA,CACA,MAAA,CAGF,iCACE,QAAA,CACA,eAAA,CAIJ,yBACE,eAAA,CACA,kBAAA,CAGF,0BACE,eEnDU,CFsDR,oCACE,YEvCM,CFwCN,yCACE,YEzCI,CF8CV,+CACE,kBEzCO,CF4CT,mCACE,kBAAA,CDjEJ,eAAA,CACA,mBAAA,CACA,eAAA,CACA,gCACE,CAEF,UGiDW,CHhDX,cAAA,CACA,kBAAA,CAyDA,eAAA,CACA,aGLU,CHMV,cAAA,CACA,kBAAA,CCCM,6CACE,YETE,CFUF,kDACE,YEXA",sourcesContent:["@use '../color_alias';\n// 87.5 = SemiCondensed , 400..600 normal, medium, semibold\n@import 'https://fonts.googleapis.com/css2?family=Noto+Sans:wdth,wght@87.5,100..600';\n\n@mixin base {\n  font-style: 1rem;\n  font-variant: normal;\n  font-weight: 400;\n  font-family:\n    Noto Sans,\n    sans-serif;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: normal;\n}\n\n@mixin h1 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 2.375rem;\n  line-height: 2.875rem;\n  margin: 0;\n}\n\n@mixin h2 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1.875rem;\n  line-height: 2.375rem;\n  margin: 0;\n}\n\n@mixin h3 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  margin: 0;\n}\n\n@mixin h4 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-secondary {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-disabled {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-400;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-error {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$error-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-warning {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$warning-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-medium {\n  @include base;\n  font-weight: 600;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-bold {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-underline {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$primary-color-600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin footnote-primary {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-600;\n  font-size: 0.875rem;\n  line-height: 1.375rem;\n}\n\n@mixin footnote-error {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$error-color-1000;\n  font-size: 0.875rem;\n  line-height: 1.375rem;\n}\n","@use '../../settings/color_alias';\n@use '../../settings/typography/content' as typography;\n@use '../../settings/config';\n@use '../../settings/depth';\n\n.card-menu-option {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: config.$space-3x;\n  gap: config.$space-3x;\n  border-radius: config.$corner-radius-xxs;\n  border-bottom: 1px solid color_alias.$neutral-color-200;\n  cursor: default;\n\n  @include typography.body-regular-primary;\n\n  .icon {\n    width: config.$icon-size-4x;\n    height: config.$icon-size-4x;\n    > svg {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .left {\n    display: flex;\n    flex-direction: column;\n    gap: config.$space-2x;\n\n    .title-container {\n      display: flex;\n      width: 100%;\n      gap: config.$space-2x;\n      justify-content: flex-start;\n      align-items: center;\n      flex: 1;\n    }\n\n    .content {\n      margin: 0;\n      text-align: left;\n    }\n  }\n\n  .right {\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n\n  &.primary {\n    background: color_alias.$neutral-white;\n\n    .icon {\n      > svg {\n        fill: color_alias.$primary-color-600;\n        path {\n          fill: color_alias.$primary-color-600;\n        }\n      }\n    }\n\n    &:not(.disabled):hover {\n      background: color_alias.$primary-color-50;\n    }\n\n    &.disabled {\n      background: color_alias.$neutral-color-50;\n      @include typography.body-regular-disabled;\n\n      .icon {\n        > svg {\n          fill: color_alias.$neutral-color-400;\n          path {\n            fill: color_alias.$neutral-color-400;\n          }\n        }\n      }\n    }\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-halfx: 2px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n"," /* This file is exported like: $white-1000-bodegas -> we need to erase bodegas */\n \n /* Variables  */\n $white-1000: #FFFFFFFF;\n $red-1000: #EC2A2FFF;\n $red-50: #FFEDE9FF;\n $red-100: #FFCABDFF;\n $red-200: #FFA696FF;\n $red-300: #FF8372FF;\n $red-400: #FF6054FF;\n $red-500: #F93E3BFF;\n $red-600: #E01A27FF;\n $red-700: #C20019FF;\n $red-800: #A00010FF;\n $red-900: #7B000AFF;\n $purple-1000: #5F0F40FF;\n $purple-900: #5A2843FF;\n $purple-800: #763558FF;\n $purple-700: #90446DFF;\n $purple-600: #A95782FF;\n $purple-500: #BF6C97FF;\n $purple-400: #D183ABFF;\n $purple-300: #E19DBEFF;\n $purple-200: #EDB8D1FF;\n $purple-100: #F6D4E4FF;\n $purple-50: #FCF0F6FF;\n $green-1000: #6FB62EFF;\n $green-900: #154300FF;\n $green-800: #195800FF;\n $green-700: #246D00FF;\n $green-600: #388200FF;\n $green-500: #519708FF;\n $green-400: #6DAB34FF;\n $green-300: #8CBF5BFF;\n $green-200: #ACD285FF;\n $green-100: #CDE5B3FF;\n $green-50: #EFF6E5FF;\n $dodger-blue-1000: #1890FFFF;\n $orange-1000: #FFA940FF;\n $dodger-blue-900: #003A7BFF;\n $dodger-blue-800: #004DA1FF;\n $dodger-blue-700: #0060C2FF;\n $dodger-blue-600: #0074DEFF;\n $dodger-blue-500: #0087F3FF;\n $dodger-blue-400: #4F9CFFFF;\n $dodger-blue-300: #7DB1FFFF;\n $dodger-blue-200: #A6C6FFFF;\n $dodger-blue-100: #CBDCFFFF;\n $dodger-blue-50: #EEF3FFFF;\n $orange-900: #5A2E00FF;\n $orange-800: #753D00FF;\n $orange-700: #8F4E00FF;\n $orange-600: #A86100FF;\n $orange-500: #C07500FF;\n $orange-400: #D58B2EFF;\n $orange-300: #E7A255FF;\n $orange-200: #F5BB81FF;\n $orange-100: #FDD6B0FF;\n $orange-50: #FFF1E4FF;\n $black-1000: #000000FF;\n $grey-1000: #444444FF;\n $grey-900: #393939FF;\n $grey-800: #4B4B4BFF;\n $grey-700: #5E5E5EFF;\n $grey-600: #727272FF;\n $grey-500: #868686FF;\n $grey-400: #9B9B9BFF;\n $grey-300: #B0B0B0FF;\n $grey-200: #C6C6C6FF;\n $grey-100: #DDDDDDFF;\n $grey-50: #F3F3F3FF;\n\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".icon{display:inline-flex;justify-content:center;align-items:center}@keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.icon.rotate{animation:rotate 2s linear infinite}","",{version:3,sources:["webpack://./src/atoms/Icon.scss"],names:[],mappings:"AAEA,MACE,mBAAA,CACA,sBAAA,CACA,kBAAA,CAEA,kBACE,KACE,sBAAA,CAEF,GACE,wBAAA,CAAA,CAGJ,aACE,mCAAA",sourcesContent:["@use '../settings/color_alias';\n\n.icon {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  @keyframes rotate {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  &.rotate {\n    animation: rotate 2s linear infinite;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);