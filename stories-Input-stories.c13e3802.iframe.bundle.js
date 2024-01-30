"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[437],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/stories/Input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Password:()=>Password,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Input=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/Input.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input.Z,options);Input.Z&&Input.Z.locals&&Input.Z.locals;var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Icon=__webpack_require__("./src/atoms/Icon.tsx"),_excluded=["label","hideLabel","icon","helpText","variant","disabled","type","name","id","invalid"],__jsx=react.createElement;function Input_Input(_ref){var label=_ref.label,_ref$hideLabel=_ref.hideLabel,hideLabel=void 0!==_ref$hideLabel&&_ref$hideLabel,icon=_ref.icon,helpText=_ref.helpText,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,disabled=_ref.disabled,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,name=_ref.name,id=_ref.id,invalid=_ref.invalid,props=(0,objectWithoutProperties.Z)(_ref,_excluded),_useState=(0,react.useState)(!1),showPassword=_useState[0],setShowPassword=_useState[1],cssClasses=["input",icon?"with-icon":"",invalid?"invalid":""].join(" ");return __jsx("div",{className:"input-group ".concat(variant)},!hideLabel&&__jsx("label",{className:"input-label",htmlFor:id},label),__jsx("div",{className:"input-container"},icon&&__jsx(Icon.J,{className:"left-icon",name:icon}),__jsx("input",(0,esm_extends.Z)({id,className:cssClasses,disabled,type:function handleInputType(){return"password"!==type?type:showPassword?"text":"password"}(),name,"aria-label":label},props)),"password"===type&&__jsx(Icon.J,{className:"password-icon",name:function handlePasswordIcon(){return showPassword?"ShowOff":"Show"}(),onClick:function handlePasswordVisibility(){setShowPassword(!showPassword)}})),helpText&&__jsx("span",{className:"input-help-text"},helpText))}Input_Input.displayName="Input";try{Input_Input.displayName="Input",Input_Input.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hideLabel:{defaultValue:{value:"false"},description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"Check"'},{value:'"Close"'},{value:'"Done"'},{value:'"EditColumns"'},{value:'"Error"'},{value:'"Export"'},{value:'"Info"'},{value:'"Loading"'},{value:'"Search"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Warning"'}]}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Input.tsx#Input"]={docgenInfo:Input_Input.__docgenInfo,name:"Input",path:"src/atoms/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}var figmaPrimaryDesign={design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=68-211&mode=dev"}};const Input_stories={title:"Design System/Atoms/Input",component:Input_Input,tags:["autodocs"],argTypes:{label:{description:"Label for the input"},placeholder:{description:"Optional input placeholder text"},variant:{description:"Input variant used"},disabled:{description:"Is the input in disabled state?"},helpText:{description:"Optional help text"},name:{description:"Input name property"},type:{description:"Input type property"},leftIcon:{description:"Input left icon from a list of values"},id:{description:"Value needed for the label relation"}}};var Primary={args:{label:"Email:",placeholder:"Email...",variant:"primary",disabled:!1,helpText:"This text can help you",name:"email",type:"email",id:"email_input"},parameters:figmaPrimaryDesign},Password={args:{label:"Password:",placeholder:"Password...",variant:"primary",disabled:!1,helpText:"This text can help you",name:"login_password",type:"password",id:"password_input"},parameters:figmaPrimaryDesign};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Email:',\n    placeholder: 'Email...',\n    variant: 'primary',\n    disabled: false,\n    helpText: 'This text can help you',\n    name: 'email',\n    type: 'email',\n    id: 'email_input'\n  },\n  parameters: figmaPrimaryDesign\n}",...Primary.parameters?.docs?.source}}},Password.parameters={...Password.parameters,docs:{...Password.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Password:',\n    placeholder: 'Password...',\n    variant: 'primary',\n    disabled: false,\n    helpText: 'This text can help you',\n    name: 'login_password',\n    type: 'password',\n    id: 'password_input'\n  },\n  parameters: figmaPrimaryDesign\n}",...Password.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Password"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./src/atoms/Input.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import'https://fonts.googleapis.com/css2?family=Noto+Sans:wdth,wght@87.5,100..600';.input-group{display:flex;flex-direction:column;gap:.625rem}.input-group .input{padding-left:12px}.input-group:has(.input.invalid) .input-help-text{color:#ec2a2f}.input-group.primary .input-container .icon>svg{fill:#b0b0b0}.input-group.primary .input-container .icon>svg path{fill:#b0b0b0}.input-group.primary .input{border-radius:8px;border:1px solid #b0b0b0;background:#fff;font-style:normal;font-variant:normal;font-weight:400;font-family:Noto Sans,sans-serif;color:#444}.input-group.primary .input::placeholder{font-style:normal;font-variant:normal;font-weight:400;font-family:Noto Sans,sans-serif;color:#b0b0b0}.input-group.primary .input:focus{outline:#5f0f40;border:1px solid #5f0f40}.input-group.primary .input.invalid{border:1px solid #ec2a2f}.input-group.primary .input:disabled{border:1px solid #c6c6c6;background:#f3f3f3;color:#c6c6c6}.input-group.primary .input:disabled::placeholder{color:#c6c6c6}.input-group.primary .input-help-text{font-style:normal;font-variant:normal;font-weight:300;font-family:Noto Sans,sans-serif;color:#9b9b9b;font-size:.75rem;line-height:.6875rem}.input-group.primary .input-label{font-style:normal;font-variant:normal;font-weight:300;font-family:Noto Sans,sans-serif;color:#444;font-size:.875rem;line-height:.775rem}.input-group .input-container{position:relative;display:flex;flex-direction:row}.input-group .input-container .icon{position:absolute;width:12px;height:12px}.input-group .input-container .icon>svg{width:100%;height:100%}.input-group .input-container .left-icon{top:.75rem;left:.7rem}.input-group .input-container .password-icon{top:.75rem;right:.7rem}.input-group .input{width:100%;padding:8px 12px 8px}.input-group .with-icon{padding-left:28px}","",{version:3,sources:["webpack://./src/settings/_typography.scss","webpack://./src/atoms/Input.scss","webpack://./src/settings/_colors.scss","webpack://./src/settings/_config.scss"],names:[],mappings:"AAEQ,mFAAA,CCER,aACE,YAAA,CACA,qBAAA,CACA,WAAA,CAEA,oBACE,iBAAA,CAIA,kDACE,aCXM,CDkBJ,gDACE,YC4CE,CD3CF,qDACE,YC0CA,CDpCR,4BACE,iBElBY,CFmBZ,wBAAA,CACA,eC/BQ,CFyBZ,iBApBgB,CAqBhB,mBArBgB,CAsBhB,eAAA,CACA,gCA1BA,CA2BA,UE4BW,CDtBP,yCDHJ,iBA3BgB,CA4BhB,mBA5BgB,CA6BhB,eAAA,CACA,gCAjCA,CAkCA,aE4BU,CDzBN,kCACE,eC5BO,CD6BP,wBAAA,CAGF,oCACE,wBAAA,CAGF,qCACE,wBAAA,CACA,kBCiBG,CDhBH,aCcI,CDZJ,kDACE,aCWE,CDNR,sCD7CF,iBATgB,CAUhB,mBAVgB,CAWhB,eAAA,CACA,gCAfA,CAgBA,aE6CU,CF1CV,gBAAA,CACA,oBAAA,CCyCE,kCDPF,iBAnDgB,CAoDhB,mBApDgB,CAqDhB,eAAA,CACA,gCAzDA,CA0DA,UEHW,CFIX,iBAAA,CACA,mBAAA,CCMA,8BACE,iBAAA,CACA,YAAA,CACA,kBAAA,CAEA,oCACE,iBAAA,CACA,UEvDS,CFwDT,WExDS,CFyDT,wCACE,UAAA,CACA,WAAA,CAIJ,yCACE,UAAA,CACA,UAAA,CAGF,6CACE,UAAA,CACA,WAAA,CAIJ,oBACE,UAAA,CACA,oBAAA,CAGF,wBACE,iBAAA",sourcesContent:["@use '../settings/color_alias';\n// 87.5 = SemiCondensed , 400..600 normal, medium, semibold\n@import 'https://fonts.googleapis.com/css2?family=Noto+Sans:wdth,wght@87.5,100..600';\n\n$font-base-family:\n  Noto Sans,\n  sans-serif;\n$text-base-size: 1rem;\n$text-base-style: normal;\n$font-base-weight: 600;\n$line-height-base: normal;\n$font-base-stretch: semi-condensed;\n\n$font-primary: $font-base-stretch $text-base-style $font-base-weight #{$text-base-size}/#{$line-height-base}\n  $font-base-family;\n\n@mixin form-help-text {\n  font-style: $text-base-style;\n  font-variant: $text-base-style;\n  font-weight: 300;\n  font-family: $font-base-family;\n  color: color_alias.$neutral-color-400;\n  // We need to apply a relation between font-size and line-height so the box envoloping the span\n  // is the most accurate in terms of top and bottom blank space.\n  font-size: 0.75rem;\n  line-height: 0.6875rem;\n}\n@mixin input-text {\n  font-style: $text-base-style;\n  font-variant: $text-base-style;\n  font-weight: 400;\n  font-family: $font-base-family;\n  color: color_alias.$neutral-color-1000;\n}\n@mixin input-placeholder-text {\n  font-style: $text-base-style;\n  font-variant: $text-base-style;\n  font-weight: 400;\n  font-family: $font-base-family;\n  color: color_alias.$neutral-color-300;\n  // We shouldn't define a font-size for the placeholder: https://stackoverflow.com/questions/30916387/placeholder-font-size-bigger-than-16px\n}\n@mixin select-text {\n  font-style: $text-base-style;\n  font-variant: $text-base-style;\n  font-weight: 400;\n  font-family: $font-base-family;\n  font-size: 1em;\n  color: color_alias.$neutral-color-300;\n}\n@mixin select-option-text {\n  font-style: $text-base-style;\n  font-variant: $text-base-style;\n  font-weight: 400;\n  font-family: $font-base-family;\n  font-size: 1em;\n  color: color_alias.$neutral-color-1000;\n}\n@mixin form-label {\n  font-style: $text-base-style;\n  font-variant: $text-base-style;\n  font-weight: 300;\n  font-family: $font-base-family;\n  color: color_alias.$neutral-color-1000;\n  font-size: 0.875rem;\n  line-height: 0.775rem;\n}\n","@use '../settings/color_alias';\n@use '../settings/typography';\n@use '../settings/config';\n\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n\n  .input {\n    padding-left: 12px;\n  }\n\n  &:has(.input.invalid) {\n    & .input-help-text {\n      color: color_alias.$error-color-1000;\n    }\n  }\n\n  &.primary {\n    .input-container {\n      .icon {\n        > svg {\n          fill: color_alias.$neutral-color-300;\n          path {\n            fill: color_alias.$neutral-color-300;\n          }\n        }\n      }\n    }\n\n    .input {\n      border-radius: config.$corner-radius-m;\n      border: 1px solid color_alias.$neutral-color-300;\n      background: color_alias.$neutral-white;\n\n      @include typography.input-text;\n\n      &::placeholder {\n        @include typography.input-placeholder-text;\n      }\n\n      &:focus {\n        outline: color_alias.$primary-color-1000;\n        border: 1px solid color_alias.$primary-color-1000;\n      }\n\n      &.invalid {\n        border: 1px solid color_alias.$error-color-1000;\n      }\n\n      &:disabled {\n        border: 1px solid color_alias.$neutral-color-200;\n        background: color_alias.$neutral-color-50;\n        color: color_alias.$neutral-color-200;\n\n        &::placeholder {\n          color: color_alias.$neutral-color-200;\n        }\n      }\n    }\n\n    .input-help-text {\n      @include typography.form-help-text;\n    }\n\n    .input-label {\n      @include typography.form-label;\n    }\n  }\n\n  .input-container {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n\n    .icon {\n      position: absolute;\n      width: config.$icon-size-3x;\n      height: config.$icon-size-3x;\n      > svg {\n        width: 100%;\n        height: 100%;\n      }\n    }\n\n    .left-icon {\n      top: 0.75rem;\n      left: 0.7rem;\n    }\n\n    .password-icon {\n      top: 0.75rem;\n      right: 0.7rem;\n    }\n  }\n\n  .input {\n    width: 100%;\n    padding: config.$space-2x config.$space-3x config.$space-2x;\n  }\n\n  .with-icon {\n    padding-left: 28px;\n  }\n}\n"," /* This file is exported like: $white-1000-bodegas -> we need to erase bodegas */\n \n /* Variables  */\n $white-1000: #FFFFFFFF;\n $red-1000: #EC2A2FFF;\n $red-50: #FFEDE9FF;\n $red-100: #FFCABDFF;\n $red-200: #FFA696FF;\n $red-300: #FF8372FF;\n $red-400: #FF6054FF;\n $red-500: #F93E3BFF;\n $red-600: #E01A27FF;\n $red-700: #C20019FF;\n $red-800: #A00010FF;\n $red-900: #7B000AFF;\n $purple-1000: #5F0F40FF;\n $purple-900: #5A2843FF;\n $purple-800: #763558FF;\n $purple-700: #90446DFF;\n $purple-600: #A95782FF;\n $purple-500: #BF6C97FF;\n $purple-400: #D183ABFF;\n $purple-300: #E19DBEFF;\n $purple-200: #EDB8D1FF;\n $purple-100: #F6D4E4FF;\n $purple-50: #FCF0F6FF;\n $green-1000: #6FB62EFF;\n $green-900: #154300FF;\n $green-800: #195800FF;\n $green-700: #246D00FF;\n $green-600: #388200FF;\n $green-500: #519708FF;\n $green-400: #6DAB34FF;\n $green-300: #8CBF5BFF;\n $green-200: #ACD285FF;\n $green-100: #CDE5B3FF;\n $green-50: #EFF6E5FF;\n $dodger-blue-1000: #1890FFFF;\n $orange-1000: #FFA940FF;\n $dodger-blue-900: #003A7BFF;\n $dodger-blue-800: #004DA1FF;\n $dodger-blue-700: #0060C2FF;\n $dodger-blue-600: #0074DEFF;\n $dodger-blue-500: #0087F3FF;\n $dodger-blue-400: #4F9CFFFF;\n $dodger-blue-300: #7DB1FFFF;\n $dodger-blue-200: #A6C6FFFF;\n $dodger-blue-100: #CBDCFFFF;\n $dodger-blue-50: #EEF3FFFF;\n $orange-900: #5A2E00FF;\n $orange-800: #753D00FF;\n $orange-700: #8F4E00FF;\n $orange-600: #A86100FF;\n $orange-500: #C07500FF;\n $orange-400: #D58B2EFF;\n $orange-300: #E7A255FF;\n $orange-200: #F5BB81FF;\n $orange-100: #FDD6B0FF;\n $orange-50: #FFF1E4FF;\n $black-1000: #000000FF;\n $grey-1000: #444444FF;\n $grey-900: #393939FF;\n $grey-800: #4B4B4BFF;\n $grey-700: #5E5E5EFF;\n $grey-600: #727272FF;\n $grey-500: #868686FF;\n $grey-400: #9B9B9BFF;\n $grey-300: #B0B0B0FF;\n $grey-200: #C6C6C6FF;\n $grey-100: #DDDDDDFF;\n $grey-50: #F3F3F3FF;\n\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-halfx: 2px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);