"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[815],{"./src/stories/Alert.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Info:()=>Info,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Alert_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Button=__webpack_require__("./src/atoms/Button/index.ts"),Icon=__webpack_require__("./src/atoms/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Alert=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/Alert.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Alert.A,options);Alert.A&&Alert.A.locals&&Alert.A.locals;var classNames=__webpack_require__("./src/utils/classNames.ts"),_excluded=["id","variant","className","fitContent","text","button"],__jsx=react.createElement,IconVariant=function(IconVariant){return IconVariant.info="Info",IconVariant.success="Check",IconVariant.warning="Warning",IconVariant.error="Error",IconVariant}({});function Alert_Alert(_ref){var id=_ref.id,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"success":_ref$variant,className=_ref.className,_ref$fitContent=_ref.fitContent,fitContent=void 0!==_ref$fitContent&&_ref$fitContent,text=_ref.text,button=_ref.button,props=(0,objectWithoutProperties.A)(_ref,_excluded),cssClasses=(0,classNames.x)("alert",variant,className,{"fit-content":fitContent});return __jsx("div",(0,esm_extends.A)({role:"alert","aria-labelledby":"".concat(id,"-text"),className:cssClasses},props),__jsx("div",{className:"information-container"},__jsx(Icon.I,{name:IconVariant[variant],className:variant}),__jsx("span",{id:"".concat(id,"-text"),className:"text"},text)),button&&__jsx(Button.K0,(0,esm_extends.A)({},button,{variant:"primary"})))}Alert_Alert.displayName="Alert";try{Alert_Alert.displayName="Alert",Alert_Alert.__docgenInfo={description:"",displayName:"Alert",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"IconButtonProps"}},fitContent:{defaultValue:{value:"false"},description:"",name:"fitContent",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Alert.tsx#Alert"]={docgenInfo:Alert_Alert.__docgenInfo,name:"Alert",path:"src/atoms/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}var figmaPrimaryDesign={design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=570-118&mode=dev"}};const Alert_stories={title:"Design System/Atoms/Alert",component:Alert_Alert,tags:["autodocs"],argTypes:{id:{description:"Id for aria purposes"},text:{description:"Text to be shown on the component."},variant:{description:"Variant used."},button:{description:"Add an IconButton component to have the close button."}}};var Info={args:{id:"info-alert",variant:"info",text:"Thank you! But our princess is in another castle!"},parameters:figmaPrimaryDesign},Success={args:{id:"success-alert",variant:"success",text:"Thank you! But our princess is in another castle!"},parameters:figmaPrimaryDesign},Warning={args:{id:"warning-alert",variant:"warning",text:"Thank you! But our princess is in another castle!",button:{accessibilityLabel:"Close alert",onClick:function onClick(){return alert("click")},icon:"Close"}},parameters:figmaPrimaryDesign},Error={args:{id:"error-alert",variant:"error",text:"Thank you! But our princess is in another castle!",button:{accessibilityLabel:"Close alert",onClick:function onClick(){return alert("click")},icon:"Close"}},parameters:figmaPrimaryDesign};Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'info-alert',\n    variant: 'info',\n    text: 'Thank you! But our princess is in another castle!'\n  },\n  parameters: figmaPrimaryDesign\n}",...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'success-alert',\n    variant: 'success',\n    text: 'Thank you! But our princess is in another castle!'\n  },\n  parameters: figmaPrimaryDesign\n}",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'warning-alert',\n    variant: 'warning',\n    text: 'Thank you! But our princess is in another castle!',\n    button: {\n      accessibilityLabel: 'Close alert',\n      onClick: () => alert('click'),\n      icon: 'Close'\n    }\n  },\n  parameters: figmaPrimaryDesign\n}",...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'error-alert',\n    variant: 'error',\n    text: 'Thank you! But our princess is in another castle!',\n    button: {\n      accessibilityLabel: 'Close alert',\n      onClick: () => alert('click'),\n      icon: 'Close'\n    }\n  },\n  parameters: figmaPrimaryDesign\n}",...Error.parameters?.docs?.source}}};const __namedExportsOrder=["Info","Success","Warning","Error"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/Alert.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import'https://fonts.googleapis.com/css2?family=Noto+Sans:wdth,wght@87.5,100..600';.alert{display:flex;justify-content:space-between;padding:8px 12px;align-items:center;gap:8px;border-radius:2px;pointer-events:none}.alert.fit-content{width:fit-content}.alert .information-container{display:flex;justify-content:flex-start;align-items:center;gap:8px}.alert .text{font-style:1rem;font-variant:normal;font-weight:400;font-family:Noto Sans,sans-serif;color:#444;font-size:1rem;line-height:normal;font-weight:400;color:#444;font-size:1rem;line-height:1.5rem}.alert .icon{width:20px;height:20px}.alert .icon>svg{width:100%;height:100%}.alert .icon-button .icon{width:8px;height:8px}.alert .icon-button .icon>svg{fill:#9b9b9b}.alert .icon-button .icon>svg path{fill:#9b9b9b}.alert .icon-button:hover .icon>svg{fill:#9b9b9b}.alert .icon-button:hover .icon>svg path{fill:#9b9b9b}.alert.info{border:1px solid #0074de;background:#eef3ff}.alert.info .information-container .icon>svg{fill:#1890ff}.alert.info .information-container .icon>svg path{fill:#1890ff}.alert.success{border:1px solid #8cbf5b;background:#eff6e5}.alert.success .information-container .icon>svg{fill:#6fb62e}.alert.success .information-container .icon>svg path{fill:#6fb62e}.alert.warning{border:1px solid #e7a255;background:#fff1e4}.alert.warning .information-container .icon>svg{fill:#ffa940}.alert.warning .information-container .icon>svg path{fill:#ffa940}.alert.error{border:1px solid #e01a27;background:#ffede9}.alert.error .information-container .icon>svg{fill:#ec2a2f}.alert.error .information-container .icon>svg path{fill:#ec2a2f}","",{version:3,sources:["webpack://./src/settings/typography/_content.scss","webpack://./src/atoms/Alert.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/_colors.scss"],names:[],mappings:"AAEQ,mFAAA,CCGR,OACE,YAAA,CACA,6BAAA,CACA,gBAAA,CACA,kBAAA,CACA,OCPS,CDQT,iBCKkB,CDJlB,mBAAA,CAEA,mBACE,iBAAA,CAGF,8BACE,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,OCnBO,CDsBT,aDpBA,eAAA,CACA,mBAAA,CACA,eAAA,CACA,gCACE,CAEF,UGiDW,CHhDX,cAAA,CACA,kBAAA,CAyCA,eAAA,CACA,UGKW,CHJX,cAAA,CACA,kBAAA,CC5BA,aACE,UCTW,CDUX,WCVW,CDWX,iBACE,UAAA,CACA,WAAA,CAKF,0BACE,SChBS,CDiBT,UCjBS,CDmBT,8BACE,YEsBI,CFrBJ,mCACE,YEoBE,CFdJ,oCACE,YEaE,CFZF,yCACE,YEWA,CFJV,YACE,wBAAA,CACA,kBEhBc,CFmBV,6CACE,YE/BU,CFgCV,kDACE,YEjCQ,CFwClB,eACE,wBAAA,CACA,kBE3CQ,CF8CJ,gDACE,YEzDI,CF0DJ,qDACE,YE3DE,CFkEZ,eACE,wBAAA,CACA,kBEpCS,CFuCL,gDACE,YE5DK,CF6DL,qDACE,YE9DG,CFqEb,aACE,wBAAA,CACA,kBExGM,CF2GF,8CACE,YE7GE,CF8GF,mDACE,YE/GA",sourcesContent:["@use '../color_alias';\n// 87.5 = SemiCondensed , 400..600 normal, medium, semibold\n@import 'https://fonts.googleapis.com/css2?family=Noto+Sans:wdth,wght@87.5,100..600';\n\n@mixin base {\n  font-style: 1rem;\n  font-variant: normal;\n  font-weight: 400;\n  font-family:\n    Noto Sans,\n    sans-serif;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: normal;\n}\n\n@mixin h1 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 2.375rem;\n  line-height: 2.875rem;\n  margin: 0;\n}\n\n@mixin h2 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1.875rem;\n  line-height: 2.375rem;\n  margin: 0;\n}\n\n@mixin h3 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  margin: 0;\n}\n\n@mixin h4 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-secondary {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-disabled {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-400;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-error {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$error-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-regular-warning {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$warning-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-medium {\n  @include base;\n  font-weight: 600;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-bold {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin body-underline {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-1000;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$primary-color-600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n@mixin footnote-primary {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$neutral-color-600;\n  font-size: 0.875rem;\n  line-height: 1.375rem;\n}\n\n@mixin footnote-error {\n  @include base;\n  font-weight: 400;\n  color: color_alias.$error-color-1000;\n  font-size: 0.875rem;\n  line-height: 1.375rem;\n}\n","@use '../settings/color_alias';\n@use '../settings/typography/content' as typography;\n@use '../settings/config';\n@use '../settings/depth';\n\n.alert {\n  display: flex;\n  justify-content: space-between;\n  padding: config.$space-2x config.$space-3x;\n  align-items: center;\n  gap: config.$space-2x;\n  border-radius: config.$corner-radius-xxs;\n  pointer-events: none;\n\n  &.fit-content {\n    width: fit-content;\n  }\n\n  .information-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: config.$space-2x;\n  }\n\n  .text {\n    @include typography.body-regular-primary;\n  }\n\n  .icon {\n    width: config.$icon-size-5x;\n    height: config.$icon-size-5x;\n    > svg {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .icon-button {\n    .icon {\n      width: config.$icon-size-2x;\n      height: config.$icon-size-2x;\n\n      > svg {\n        fill: color_alias.$neutral-color-400;\n        path {\n          fill: color_alias.$neutral-color-400;\n        }\n      }\n    }\n    &:hover {\n      .icon {\n        > svg {\n          fill: color_alias.$neutral-color-400;\n          path {\n            fill: color_alias.$neutral-color-400;\n          }\n        }\n      }\n    }\n  }\n\n  &.info {\n    border: 1px solid color_alias.$info-color-600;\n    background: color_alias.$info-color-50;\n    .information-container {\n      .icon {\n        > svg {\n          fill: color_alias.$info-color-1000;\n          path {\n            fill: color_alias.$info-color-1000;\n          }\n        }\n      }\n    }\n  }\n\n  &.success {\n    border: 1px solid color_alias.$success-color-300;\n    background: color_alias.$success-color-50;\n    .information-container {\n      .icon {\n        > svg {\n          fill: color_alias.$success-color-1000;\n          path {\n            fill: color_alias.$success-color-1000;\n          }\n        }\n      }\n    }\n  }\n\n  &.warning {\n    border: 1px solid color_alias.$warning-color-300;\n    background: color_alias.$warning-color-50;\n    .information-container {\n      .icon {\n        > svg {\n          fill: color_alias.$warning-color-1000;\n          path {\n            fill: color_alias.$warning-color-1000;\n          }\n        }\n      }\n    }\n  }\n\n  &.error {\n    border: 1px solid color_alias.$error-color-600;\n    background: color_alias.$error-color-50;\n    .information-container {\n      .icon {\n        > svg {\n          fill: color_alias.$error-color-1000;\n          path {\n            fill: color_alias.$error-color-1000;\n          }\n        }\n      }\n    }\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-halfx: 2px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n"," /* This file is exported like: $white-1000-bodegas -> we need to erase bodegas */\n \n /* Variables  */\n $white-1000: #FFFFFFFF;\n $red-1000: #EC2A2FFF;\n $red-50: #FFEDE9FF;\n $red-100: #FFCABDFF;\n $red-200: #FFA696FF;\n $red-300: #FF8372FF;\n $red-400: #FF6054FF;\n $red-500: #F93E3BFF;\n $red-600: #E01A27FF;\n $red-700: #C20019FF;\n $red-800: #A00010FF;\n $red-900: #7B000AFF;\n $purple-1000: #5F0F40FF;\n $purple-900: #5A2843FF;\n $purple-800: #763558FF;\n $purple-700: #90446DFF;\n $purple-600: #A95782FF;\n $purple-500: #BF6C97FF;\n $purple-400: #D183ABFF;\n $purple-300: #E19DBEFF;\n $purple-200: #EDB8D1FF;\n $purple-100: #F6D4E4FF;\n $purple-50: #FCF0F6FF;\n $green-1000: #6FB62EFF;\n $green-900: #154300FF;\n $green-800: #195800FF;\n $green-700: #246D00FF;\n $green-600: #388200FF;\n $green-500: #519708FF;\n $green-400: #6DAB34FF;\n $green-300: #8CBF5BFF;\n $green-200: #ACD285FF;\n $green-100: #CDE5B3FF;\n $green-50: #EFF6E5FF;\n $dodger-blue-1000: #1890FFFF;\n $orange-1000: #FFA940FF;\n $dodger-blue-900: #003A7BFF;\n $dodger-blue-800: #004DA1FF;\n $dodger-blue-700: #0060C2FF;\n $dodger-blue-600: #0074DEFF;\n $dodger-blue-500: #0087F3FF;\n $dodger-blue-400: #4F9CFFFF;\n $dodger-blue-300: #7DB1FFFF;\n $dodger-blue-200: #A6C6FFFF;\n $dodger-blue-100: #CBDCFFFF;\n $dodger-blue-50: #EEF3FFFF;\n $orange-900: #5A2E00FF;\n $orange-800: #753D00FF;\n $orange-700: #8F4E00FF;\n $orange-600: #A86100FF;\n $orange-500: #C07500FF;\n $orange-400: #D58B2EFF;\n $orange-300: #E7A255FF;\n $orange-200: #F5BB81FF;\n $orange-100: #FDD6B0FF;\n $orange-50: #FFF1E4FF;\n $black-1000: #000000FF;\n $grey-1000: #444444FF;\n $grey-900: #393939FF;\n $grey-800: #4B4B4BFF;\n $grey-700: #5E5E5EFF;\n $grey-600: #727272FF;\n $grey-500: #868686FF;\n $grey-400: #9B9B9BFF;\n $grey-300: #B0B0B0FF;\n $grey-200: #C6C6C6FF;\n $grey-100: #DDDDDDFF;\n $grey-50: #F3F3F3FF;\n\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);