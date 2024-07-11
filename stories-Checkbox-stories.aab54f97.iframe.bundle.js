"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[208],{"./src/stories/Checkbox.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,PrimaryWithoutLabel:()=>PrimaryWithoutLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Checkbox=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Checkbox.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Checkbox.A,options);Checkbox.A&&Checkbox.A.locals&&Checkbox.A.locals;function Checkbox_Checkbox({accessibilityLabel,label,hideLabel,disabled,variant="primary",id,name,...props}){const identifier=id||name,inputCss=(0,classNames.x)("checkbox",variant),labelCss=(0,classNames.x)("checkbox-label-container",{disabled});return(0,jsx_runtime.jsxs)("div",{className:`checkbox-group ${variant}`,children:[(0,jsx_runtime.jsx)("input",{id:identifier,name,type:"checkbox",className:inputCss,disabled,"aria-label":accessibilityLabel,...props}),(0,jsx_runtime.jsxs)("label",{className:labelCss,htmlFor:identifier,children:[(0,jsx_runtime.jsx)("span",{className:"background-icon"}),!hideLabel&&(0,jsx_runtime.jsx)("span",{className:"label",children:label})]})]})}Checkbox_Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"literal",value:"'primary'"},description:"",defaultValue:{value:"'primary'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},accessibilityLabel:{required:!0,tsType:{name:"string"},description:""}}};const figmaPrimaryDesign={design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=521-104&mode=dev"}},Checkbox_stories={title:"Design System/Atoms/Checkbox",component:Checkbox_Checkbox,tags:["autodocs"],argTypes:{accessibilityLabel:{description:"Accessible name & description of the element"},variant:{description:"Variant used from a list of values"},disabled:{description:"Is the component in disabled state?"},label:{description:"Label for the component"},id:{description:"Value needed for the label relation"}}},Primary={args:{accessibilityLabel:"Marks if the user likes videogames",variant:"primary",disabled:!1,label:"Do you like videogames?",id:"checkbox-videogames-preference"},parameters:figmaPrimaryDesign},PrimaryWithoutLabel={args:{accessibilityLabel:"Marks if the user likes videogames",variant:"primary",disabled:!1,label:"Do you like videogames?",id:"checkbox-videogames-preference",hideLabel:!0},parameters:figmaPrimaryDesign},__namedExportsOrder=["Primary","PrimaryWithoutLabel"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    accessibilityLabel: 'Marks if the user likes videogames',\n    variant: 'primary',\n    disabled: false,\n    label: 'Do you like videogames?',\n    id: 'checkbox-videogames-preference'\n  },\n  parameters: figmaPrimaryDesign\n}",...Primary.parameters?.docs?.source}}},PrimaryWithoutLabel.parameters={...PrimaryWithoutLabel.parameters,docs:{...PrimaryWithoutLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    accessibilityLabel: 'Marks if the user likes videogames',\n    variant: 'primary',\n    disabled: false,\n    label: 'Do you like videogames?',\n    id: 'checkbox-videogames-preference',\n    hideLabel: true\n  },\n  parameters: figmaPrimaryDesign\n}",...PrimaryWithoutLabel.parameters?.docs?.source}}}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>classNames});const classNames=(...classNames)=>{const resultClasses=[];return classNames.forEach((className=>{if(void 0!==className)return"string"==typeof className?resultClasses.push(className):void Object.keys(className).forEach((key=>{Boolean(className[key])&&resultClasses.push(key)}))})),resultClasses.join(" ")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Checkbox.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/icons/checkbox-primary-inactive.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./src/icons/checkbox-primary-active.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_2___=new URL(__webpack_require__("./src/icons/checkbox-disabled-inactive.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_3___=new URL(__webpack_require__("./src/icons/checkbox-disabled-active.svg"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_4___=new URL(__webpack_require__("./src/icons/checkbox-primary-hover-inactive.svg"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___),___CSS_LOADER_URL_REPLACEMENT_4___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);___CSS_LOADER_EXPORT___.push([module.id,`.checkbox-group .checkbox-label-container{display:flex;justify-content:flex-start;align-items:center;gap:4px}.checkbox-group .checkbox-label-container .background-icon{width:16px;height:16px}.checkbox-group .checkbox-label-container .label{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26}.checkbox-group.primary input[type=checkbox]{display:none}.checkbox-group.primary input[type=checkbox]+.checkbox-label-container .background-icon{background:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) left top no-repeat}.checkbox-group.primary input[type=checkbox]:checked+.checkbox-label-container .background-icon{background:url(${___CSS_LOADER_URL_REPLACEMENT_1___}) left top no-repeat}.checkbox-group.primary input[type=checkbox]+.checkbox-label-container.disabled .background-icon{background:url(${___CSS_LOADER_URL_REPLACEMENT_2___}) left top no-repeat}.checkbox-group.primary input[type=checkbox]:checked+.checkbox-label-container.disabled .background-icon{background:url(${___CSS_LOADER_URL_REPLACEMENT_3___}) left top no-repeat}.checkbox-group.primary .checkbox-label-container.disabled .label{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#959ba7}.checkbox-group.primary:hover input[type=checkbox]:not(:checked)+.checkbox-label-container:not(.disabled) .background-icon{background:url(${___CSS_LOADER_URL_REPLACEMENT_4___}) left top no-repeat}`,"",{version:3,sources:["webpack://./src/atoms/Checkbox.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/typography/_content.scss","webpack://./src/settings/_colors.scss"],names:[],mappings:"AAKE,0CACE,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,OCPO,CDSP,2DACE,UCQS,CDPT,WCOS,CDJX,iDAAA,mBAAA,CECF,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aCqCU,CHpCR,6CACE,YAAA,CAGF,wFACE,qEAAA,CAIF,gGAGE,qEAAA,CAIF,iGAGE,qEAAA,CAIF,yGAGE,qEAAA,CAME,kEEtCN,mBAAA,CACA,6BAAA,CACA,eAkEE,CAjEF,cAhBe,CAiBf,kBAXsB,CAYtB,aC2CS,CHFL,2HAGE,qEAAA",sourcesContent:["@use '../settings/color_alias';\n@use '../settings/typography/form' as typography;\n@use '../settings/config';\n\n.checkbox-group {\n  .checkbox-label-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: config.$space-1x;\n\n    .background-icon {\n      width: config.$icon-size-4x;\n      height: config.$icon-size-4x;\n    }\n\n    .label {\n      @include typography.checkbox-label;\n    }\n  }\n\n  &.primary {\n    input[type='checkbox'] {\n      display: none;\n    }\n\n    input[type='checkbox'] + .checkbox-label-container .background-icon {\n      background: url('../icons/checkbox-primary-inactive.svg') left top\n        no-repeat;\n    }\n\n    input[type='checkbox']:checked\n      + .checkbox-label-container\n      .background-icon {\n      background: url('../icons/checkbox-primary-active.svg') left top no-repeat;\n    }\n\n    // Disabled\n    input[type='checkbox']\n      + .checkbox-label-container.disabled\n      .background-icon {\n      background: url('../icons/checkbox-disabled-inactive.svg') left top\n        no-repeat;\n    }\n\n    input[type='checkbox']:checked\n      + .checkbox-label-container.disabled\n      .background-icon {\n      background: url('../icons/checkbox-disabled-active.svg') left top\n        no-repeat;\n    }\n\n    .checkbox-label-container {\n      &.disabled {\n        .label {\n          @include typography.checkbox-disabled-label;\n        }\n      }\n    }\n\n    // Hover\n    &:hover {\n      input[type='checkbox']:not(:checked)\n        + .checkbox-label-container:not(.disabled)\n        .background-icon {\n        background: url('../icons/checkbox-primary-hover-inactive.svg') left top\n          no-repeat;\n      }\n    }\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-halfx: 2px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n","@use '../color_alias';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin typography-style($font-weight, $font-size, $line-height, $color) {\n  font-variant: normal;\n  font-family: Mulish, sans-serif;\n  font-weight: $font-weight;\n  font-size: $font-size;\n  line-height: $line-height;\n  color: $color;\n}\n\n@mixin h1 {\n  @include typography-style(\n    700,\n    $font-size-h1,\n    $font-line-height-h1,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h2 {\n  @include typography-style(\n    700,\n    $font-size-h2,\n    $font-line-height-h2,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h3 {\n  @include typography-style(\n    700,\n    $font-size-h3,\n    $font-line-height-h3,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h4 {\n  @include typography-style(\n    700,\n    $font-size-h4,\n    $font-line-height-h4,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-regular-secondary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin body-regular-disabled {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-400\n  );\n}\n\n@mixin body-regular-error {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$error-color-1000\n  );\n}\n\n@mixin body-regular-warning {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$warning-color-1000\n  );\n}\n\n@mixin body-underline {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$primary-color-600\n  );\n}\n\n@mixin body-medium {\n  @include typography-style(\n    500,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-bold {\n  @include typography-style(\n    700,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-extrabold {\n  @include typography-style(\n    800,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin footnote-primary {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin footnote-error {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$error-color-1000\n  );\n}\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/getUrl.js":module=>{module.exports=function(url,options){return options||(options={}),url?(url=String(url.__esModule?url.default:url),/^['"].*['"]$/.test(url)&&(url=url.slice(1,-1)),options.hash&&(url+=options.hash),/["'() \t\n]|(%20)/.test(url)||options.needQuotes?'"'.concat(url.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):url):url}},"./src/icons/checkbox-disabled-active.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/checkbox-disabled-active.e67d299f.svg"},"./src/icons/checkbox-disabled-inactive.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/checkbox-disabled-inactive.00aa825c.svg"},"./src/icons/checkbox-primary-active.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/checkbox-primary-active.7f0dbcbf.svg"},"./src/icons/checkbox-primary-hover-inactive.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/checkbox-primary-hover-inactive.e34a859b.svg"},"./src/icons/checkbox-primary-inactive.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/checkbox-primary-inactive.489bbd48.svg"}}]);