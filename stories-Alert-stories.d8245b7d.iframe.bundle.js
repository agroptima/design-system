"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[3815],{"./src/stories/Alert.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Info:()=>Info,Success:()=>Success,SuccessWithFadeOut:()=>SuccessWithFadeOut,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const figmaPrimaryDesign={design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=570-118&mode=dev"}},__WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Alert",component:__webpack_require__("./src/atoms/Alert/index.ts").F,tags:["autodocs"],argTypes:{id:{description:"Id for aria purposes"},text:{description:"Text to be shown on the component."},variant:{description:"Variant used."},button:{description:"Add an IconButton component to have the close button."},fadeOut:{description:"Add fade out animation.",control:"boolean"}}},Info={args:{id:"info-alert",variant:"info",text:"Thank you! But our princess is in another castle!"},parameters:figmaPrimaryDesign},Success={args:{id:"success-alert",variant:"success",text:"Thank you! But our princess is in another castle!"},parameters:figmaPrimaryDesign},SuccessWithFadeOut={args:{id:"success-alert",variant:"success",text:"Thank you! But our princess is in another castle!",fadeOut:!0},parameters:figmaPrimaryDesign},Warning={args:{id:"warning-alert",variant:"warning",text:"Thank you! But our princess is in another castle!",button:{accessibilityLabel:"Close alert",onClick:()=>alert("click"),icon:"Close"}},parameters:figmaPrimaryDesign},Error={args:{id:"error-alert",variant:"error",text:"Thank you! But our princess is in another castle!",button:{accessibilityLabel:"Close alert",onClick:()=>alert("click"),icon:"Close"}},parameters:figmaPrimaryDesign},__namedExportsOrder=["Info","Success","SuccessWithFadeOut","Warning","Error"];Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'info-alert',\n    variant: 'info',\n    text: 'Thank you! But our princess is in another castle!'\n  },\n  parameters: figmaPrimaryDesign\n}",...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'success-alert',\n    variant: 'success',\n    text: 'Thank you! But our princess is in another castle!'\n  },\n  parameters: figmaPrimaryDesign\n}",...Success.parameters?.docs?.source}}},SuccessWithFadeOut.parameters={...SuccessWithFadeOut.parameters,docs:{...SuccessWithFadeOut.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'success-alert',\n    variant: 'success',\n    text: 'Thank you! But our princess is in another castle!',\n    fadeOut: true\n  },\n  parameters: figmaPrimaryDesign\n}",...SuccessWithFadeOut.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'warning-alert',\n    variant: 'warning',\n    text: 'Thank you! But our princess is in another castle!',\n    button: {\n      accessibilityLabel: 'Close alert',\n      onClick: () => alert('click'),\n      icon: 'Close'\n    }\n  },\n  parameters: figmaPrimaryDesign\n}",...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'error-alert',\n    variant: 'error',\n    text: 'Thank you! But our princess is in another castle!',\n    button: {\n      accessibilityLabel: 'Close alert',\n      onClick: () => alert('click'),\n      icon: 'Close'\n    }\n  },\n  parameters: figmaPrimaryDesign\n}",...Error.parameters?.docs?.source}}}},"./src/atoms/Alert/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Alert_Alert_Alert,i:()=>AlertContainer_AlertContainer});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Alert=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Alert/Alert.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Alert.A,options);Alert.A&&Alert.A.locals&&Alert.A.locals;var classNames=__webpack_require__("./src/utils/classNames.ts"),Button=__webpack_require__("./src/atoms/Button/index.ts"),Icon=__webpack_require__("./src/atoms/Icon.tsx"),IconVariant=function(IconVariant){return IconVariant.info="Info",IconVariant.success="Check",IconVariant.warning="Warning",IconVariant.error="Error",IconVariant}({});function Alert_Alert_Alert({id,variant="success",className,fitContent=!1,fadeOut=!1,text,button,...props}){const cssClasses=(0,classNames.x)("alert",variant,className,{"fit-content":fitContent,"fade-out":fadeOut});return(0,jsx_runtime.jsxs)("div",{role:"alert","aria-labelledby":`${id}-text`,className:cssClasses,...props,children:[(0,jsx_runtime.jsxs)("div",{className:"information-container",children:[(0,jsx_runtime.jsx)(Icon.I,{name:IconVariant[variant],variant}),(0,jsx_runtime.jsx)("span",{id:`${id}-text`,className:"text",children:text})]}),button&&(0,jsx_runtime.jsx)(Button.K0,{...button,variant:"tertiary"})]})}try{Alert_Alert_Alert.displayName="Alert",Alert_Alert_Alert.__docgenInfo={description:"",displayName:"Alert",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>>"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"IconButtonProps"}},fadeOut:{defaultValue:{value:"false"},description:"",name:"fadeOut",required:!1,type:{name:"boolean"}},fitContent:{defaultValue:{value:"false"},description:"",name:"fitContent",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Alert/Alert.tsx#Alert"]={docgenInfo:Alert_Alert_Alert.__docgenInfo,name:"Alert",path:"src/atoms/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}var AlertContainer=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Alert/AlertContainer.scss"),AlertContainer_options={};AlertContainer_options.styleTagTransform=styleTagTransform_default(),AlertContainer_options.setAttributes=setAttributesWithoutAttributes_default(),AlertContainer_options.insert=insertBySelector_default().bind(null,"head"),AlertContainer_options.domAPI=styleDomAPI_default(),AlertContainer_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AlertContainer.A,AlertContainer_options);AlertContainer.A&&AlertContainer.A.locals&&AlertContainer.A.locals;function AlertContainer_AlertContainer({className,...props}){return(0,jsx_runtime.jsx)("section",{className:(0,classNames.x)("alert-container",className),...props})}try{AlertContainer_AlertContainer.displayName="AlertContainer",AlertContainer_AlertContainer.__docgenInfo={description:"",displayName:"AlertContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Alert/AlertContainer.tsx#AlertContainer"]={docgenInfo:AlertContainer_AlertContainer.__docgenInfo,name:"AlertContainer",path:"src/atoms/Alert/AlertContainer.tsx#AlertContainer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Alert/Alert.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".alert{display:flex;justify-content:space-between;padding:8px 12px;gap:8px;align-items:flex-start;border-radius:2px;pointer-events:auto;margin:0}.alert.fit-content{width:fit-content}.alert .information-container{display:flex;justify-content:flex-start;align-items:flex-start;gap:8px}.alert .text{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26}.alert .icon{margin-top:2px;width:20px;height:20px;min-width:20px}.alert .icon>svg{width:100%;height:100%}.alert button{pointer-events:auto}.alert .icon-button{margin-top:5px}.alert .icon-button .icon{width:12px;height:12px}.alert .icon-button .icon>svg{fill:#959ba7}.alert .icon-button .icon>svg path{fill:#959ba7}.alert .icon-button:hover .icon>svg{fill:#959ba7}.alert .icon-button:hover .icon>svg path{fill:#959ba7}.alert.fade-out{animation:fadeOut 3s ease-out forwards}.alert.info{border:1px solid #0074de;background:#eef3ff}.alert.success{border:1px solid #8cbf5b;background:#eff6e5}.alert.warning{border:1px solid #e7a255;background:#fff1e4}.alert.error{border:1px solid #ff4d4f;background:#ffeeeb}@keyframes fadeOut{0%{opacity:1}75%{opacity:1}100%{opacity:0;display:none}}","",{version:3,sources:["webpack://./src/atoms/Alert/Alert.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/typography/_content.scss","webpack://./src/settings/_colors.scss"],names:[],mappings:"AAKA,OACE,YAAA,CACA,6BAAA,CACA,gBAAA,CACA,OCLS,CDMT,sBAAA,CACA,iBCKkB,CDJlB,mBAAA,CACA,QAAA,CAEA,mBACE,iBAAA,CAGF,8BACE,YAAA,CACA,0BAAA,CACA,sBAAA,CACA,OCnBO,CDsBT,aEVA,mBAAA,CACA,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aCqCU,CH5BV,aACE,cAAA,CACA,UCVW,CDWX,WCXW,CDYX,cCZW,CDaX,iBACE,UAAA,CACA,WAAA,CAGJ,cACE,mBAAA,CAEF,oBACE,cAAA,CACA,0BACE,UC1BS,CD2BT,WC3BS,CD4BT,8BACE,YGeG,CHdH,mCACE,YGaC,CHPH,oCACE,YGMC,CHLD,yCACE,YGID,CHGT,gBACE,sCAAA,CAGF,YACE,wBAAA,CACA,kBG3Ba,CH8Bf,eACE,wBAAA,CACA,kBG5CO,CH+CT,eACE,wBAAA,CACA,kBG3BQ,CH8BV,aACE,wBAAA,CACA,kBGrFK,CHwFP,mBACE,GACE,SAAA,CAEF,IACE,SAAA,CAEF,KACE,SAAA,CACA,YAAA,CAAA",sourcesContent:["@use '../../settings/color_alias';\n@use '../../settings/typography/content' as typography;\n@use '../../settings/config';\n@use '../../settings/depth';\n\n.alert {\n  display: flex;\n  justify-content: space-between;\n  padding: config.$space-2x config.$space-3x;\n  gap: config.$space-2x;\n  align-items: flex-start;\n  border-radius: config.$corner-radius-xxs;\n  pointer-events: auto;\n  margin: 0;\n\n  &.fit-content {\n    width: fit-content;\n  }\n\n  .information-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: config.$space-2x;\n  }\n\n  .text {\n    @include typography.body-regular-primary;\n  }\n\n  .icon {\n    margin-top: 2px;\n    width: config.$icon-size-5x;\n    height: config.$icon-size-5x;\n    min-width: config.$icon-size-5x;\n    > svg {\n      width: 100%;\n      height: 100%;\n    }\n  }\n  button {\n    pointer-events: auto;\n  }\n  .icon-button {\n    margin-top: 5px;\n    .icon {\n      width: config.$icon-size-3x;\n      height: config.$icon-size-3x;\n      > svg {\n        fill: color_alias.$neutral-color-400;\n        path {\n          fill: color_alias.$neutral-color-400;\n        }\n      }\n    }\n    &:hover {\n      .icon {\n        > svg {\n          fill: color_alias.$neutral-color-400;\n          path {\n            fill: color_alias.$neutral-color-400;\n          }\n        }\n      }\n    }\n  }\n\n  &.fade-out {\n    animation: fadeOut 3s ease-out forwards;\n  }\n\n  &.info {\n    border: 1px solid color_alias.$info-color-600;\n    background: color_alias.$info-color-50;\n  }\n\n  &.success {\n    border: 1px solid color_alias.$success-color-300;\n    background: color_alias.$success-color-50;\n  }\n\n  &.warning {\n    border: 1px solid color_alias.$warning-color-300;\n    background: color_alias.$warning-color-50;\n  }\n\n  &.error {\n    border: 1px solid color_alias.$error-color-1000;\n    background: color_alias.$error-color-50;\n  }\n\n  @keyframes fadeOut {\n    0% {\n      opacity: 1;\n    }\n    75% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      display: none;\n    }\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-halfx: 2px;\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-2x: 8px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n","@use '../color_alias';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin typography-style($font-weight, $font-size, $line-height, $color) {\n  font-variant: normal;\n  font-family: Mulish, sans-serif;\n  font-weight: $font-weight;\n  font-size: $font-size;\n  line-height: $line-height;\n  color: $color;\n}\n\n@mixin h1 {\n  @include typography-style(\n    700,\n    $font-size-h1,\n    $font-line-height-h1,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h2 {\n  @include typography-style(\n    700,\n    $font-size-h2,\n    $font-line-height-h2,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h3 {\n  @include typography-style(\n    700,\n    $font-size-h3,\n    $font-line-height-h3,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h4 {\n  @include typography-style(\n    700,\n    $font-size-h4,\n    $font-line-height-h4,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-regular-secondary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin body-regular-disabled {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-400\n  );\n}\n\n@mixin body-regular-error {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$error-color-1000\n  );\n}\n\n@mixin body-regular-warning {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$warning-color-1000\n  );\n}\n\n@mixin body-underline {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$primary-color-600\n  );\n}\n\n@mixin body-medium {\n  @include typography-style(\n    500,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-bold {\n  @include typography-style(\n    700,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-extrabold {\n  @include typography-style(\n    800,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin footnote-primary {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin footnote-error {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$error-color-1000\n  );\n}\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Alert/AlertContainer.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".alert-container{display:flex;flex-direction:column;gap:8px;pointer-events:none;position:fixed;top:73px;left:0;width:100%;z-index:2;align-items:center}","",{version:3,sources:["webpack://./src/atoms/Alert/AlertContainer.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/_depth.scss"],names:[],mappings:"AAGA,iBACE,YAAA,CACA,qBAAA,CACA,OCFS,CDGT,mBAAA,CACA,cAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,SEHkB,CFIlB,kBAAA",sourcesContent:["@use '../../settings/depth';\n@use '../../settings/config';\n\n.alert-container {\n  display: flex;\n  flex-direction: column;\n  gap: config.$space-2x;\n  pointer-events: none;\n  position: fixed;\n  top: 73px;\n  left: 0;\n  width: 100%;\n  z-index: depth.$z-alert-container;\n  align-items: center;\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-halfx: 2px;\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-2x: 8px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n","// Source: https://www.smashingmagazine.com/2021/02/css-z-index-large-projects/\n\n// Utils\n$base: 0;\n$above: 1; // use this for all values above the base\n$below: -1; // and this for all values below the base\n\n$z-dropdown-options: $base + $above;\n$z-popover: $z-dropdown-options;\n$z-alert-container: $z-dropdown-options + $above;\n$z-modal: $z-alert-container + $above;\n$z-aside-desktop: $base + $above;\n$z-aside-mobile: $z-modal + $above;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);