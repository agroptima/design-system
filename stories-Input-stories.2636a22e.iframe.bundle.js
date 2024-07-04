"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[669],{"./src/stories/Input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1,_Password_parameters,_Password_parameters_docs,_Password_parameters1,_WithErrors_parameters,_WithErrors_parameters_docs,_WithErrors_parameters1;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Password:()=>Password,Primary:()=>Primary,WithErrors:()=>WithErrors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const figmaPrimaryDesign={design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=68-211&mode=dev"}},__WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Input",component:__webpack_require__("./src/atoms/Input.tsx").p,tags:["autodocs"],argTypes:{label:{description:"Label for the input"},accessibilityLabel:{description:"Describes the input purpose. If empty, label content will be used"},placeholder:{description:"Optional input placeholder text"},variant:{description:"Input variant used"},disabled:{description:"Is the input in disabled state?"},helpText:{description:"Optional help text"},name:{description:"Input name property"},type:{description:"Input type property"},icon:{description:"Input left icon from a list of values"},id:{description:"Value needed for the label relation"},errors:{description:"Optional array of errors. If passed, the errors are listed and invalid style is applied."}}},Primary={args:{label:"Email",accessibilityLabel:"Fill the form email",placeholder:"Email...",variant:"primary",disabled:!1,helpText:"This text can help you",name:"email",type:"email",id:"email_input"},parameters:figmaPrimaryDesign},Password={args:{label:"Password",placeholder:"Password...",variant:"primary",disabled:!1,helpText:"This text can help you",name:"login_password",type:"password",id:"password_input"},parameters:figmaPrimaryDesign},WithErrors={args:{label:"Email",accessibilityLabel:"Fill the form email",placeholder:"Email...",variant:"primary",disabled:!1,helpText:"This text can help you",name:"email",type:"email",id:"email_input",errors:["error1","error2"]},parameters:figmaPrimaryDesign};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:"{\n  args: {\n    label: 'Email',\n    accessibilityLabel: 'Fill the form email',\n    placeholder: 'Email...',\n    variant: 'primary',\n    disabled: false,\n    helpText: 'This text can help you',\n    name: 'email',\n    type: 'email',\n    id: 'email_input'\n  },\n  parameters: figmaPrimaryDesign\n}",...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}},Password.parameters={...Password.parameters,docs:{...null===(_Password_parameters=Password.parameters)||void 0===_Password_parameters?void 0:_Password_parameters.docs,source:{originalSource:"{\n  args: {\n    label: 'Password',\n    placeholder: 'Password...',\n    variant: 'primary',\n    disabled: false,\n    helpText: 'This text can help you',\n    name: 'login_password',\n    type: 'password',\n    id: 'password_input'\n  },\n  parameters: figmaPrimaryDesign\n}",...null===(_Password_parameters1=Password.parameters)||void 0===_Password_parameters1||null===(_Password_parameters_docs=_Password_parameters1.docs)||void 0===_Password_parameters_docs?void 0:_Password_parameters_docs.source}}},WithErrors.parameters={...WithErrors.parameters,docs:{...null===(_WithErrors_parameters=WithErrors.parameters)||void 0===_WithErrors_parameters?void 0:_WithErrors_parameters.docs,source:{originalSource:"{\n  args: {\n    label: 'Email',\n    accessibilityLabel: 'Fill the form email',\n    placeholder: 'Email...',\n    variant: 'primary',\n    disabled: false,\n    helpText: 'This text can help you',\n    name: 'email',\n    type: 'email',\n    id: 'email_input',\n    errors: ['error1', 'error2']\n  },\n  parameters: figmaPrimaryDesign\n}",...null===(_WithErrors_parameters1=WithErrors.parameters)||void 0===_WithErrors_parameters1||null===(_WithErrors_parameters_docs=_WithErrors_parameters1.docs)||void 0===_WithErrors_parameters_docs?void 0:_WithErrors_parameters_docs.source}}};const __namedExportsOrder=["Primary","Password","WithErrors"]},"./src/atoms/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon_Icon});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Icon=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Icon.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Icon.A,options);Icon.A&&Icon.A.locals&&Icon.A.locals;var icons=__webpack_require__("./src/icons/index.tsx"),classNames=__webpack_require__("./src/utils/classNames.ts");const Icon_Icon=param=>{let{name,className,...props}=param;const cssClasses=(0,classNames.x)("icon",className,{rotate:"Loading"===name});return(0,jsx_runtime.jsx)("span",{role:"img",title:name,className:cssClasses,children:icons[name](props)})};Icon_Icon.__docgenInfo={description:"",methods:[],displayName:"Icon"}},"./src/atoms/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/atoms/Icon.tsx"),_utils_classNames__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/classNames.ts"),_utils_buildHelpText__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/buildHelpText.ts");__webpack_require__("./src/atoms/Input.scss");function Input(param){let{label,accessibilityLabel,className,hideLabel=!1,icon,helpText,variant="primary",disabled,type="text",name,id,errors,...props}=param;const identifier=id||name,[showPassword,setShowPassword]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),cssClasses=(0,_utils_classNames__WEBPACK_IMPORTED_MODULE_4__.x)("input",className,{"with-icon":icon,invalid:null==errors?void 0:errors.length}),helpTexts=(0,_utils_buildHelpText__WEBPACK_IMPORTED_MODULE_5__.N)(helpText,errors);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"input-group ".concat(variant),children:[!hideLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:"input-label",htmlFor:identifier,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"input-container",children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{className:"left-icon",name:icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:identifier,className:cssClasses,disabled,type:function handleInputType(){return"password"!==type?type:showPassword?"text":"password"}(),name,"aria-label":accessibilityLabel||label,...props}),"password"===type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{className:"password-icon",name:function handlePasswordIcon(){return showPassword?"ShowOff":"Show"}(),onClick:function handlePasswordVisibility(){setShowPassword(!showPassword)}})]}),helpTexts.map((helpText=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"input-help-text",children:helpText},"".concat(identifier,"-").concat(helpText))))]})}Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!0,tsType:{name:"string"},description:""},accessibilityLabel:{required:!1,tsType:{name:"string"},description:""},hideLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"unknown"},description:""},helpText:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"literal",value:"'primary'"},description:"",defaultValue:{value:"'primary'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},errors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1}}}},"./src/utils/buildHelpText.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function buildHelpText(helpText,errors){return Boolean(null==errors?void 0:errors.length)?errors||[]:helpText?[helpText]:[]}__webpack_require__.d(__webpack_exports__,{N:()=>buildHelpText})},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>classNames});const classNames=function(){for(var _len=arguments.length,classNames=new Array(_len),_key=0;_key<_len;_key++)classNames[_key]=arguments[_key];const resultClasses=[];return classNames.forEach((className=>{if(void 0!==className)return"string"==typeof className?resultClasses.push(className):void Object.keys(className).forEach((key=>{Boolean(className[key])&&resultClasses.push(key)}))})),resultClasses.join(" ")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Icon.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".icon{display:inline-flex;justify-content:center;align-items:center}@keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.icon.rotate{animation:rotate 2s linear infinite}","",{version:3,sources:["webpack://./src/atoms/Icon.scss"],names:[],mappings:"AAEA,MACE,mBAAA,CACA,sBAAA,CACA,kBAAA,CAEA,kBACE,KACE,sBAAA,CAEF,GACE,wBAAA,CAAA,CAGJ,aACE,mCAAA",sourcesContent:["@use '../settings/color_alias';\n\n.icon {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  @keyframes rotate {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  &.rotate {\n    animation: rotate 2s linear infinite;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Input.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import'https://fonts.googleapis.com/css2?family=Mulish:wght@200..1000&display=swap';.input-group{display:flex;flex-direction:column;gap:8px}.input-group .input{padding-left:12px}.input-group:has(.input.invalid) .input-help-text{font-variant:normal;font-weight:400;font-family:Mulish,sans-serif;color:#161c26;font-size:1rem;line-height:1.5rem;color:#ff4d4f;font-size:.875rem;line-height:1.375rem}.input-group.primary .input-container .icon>svg{fill:#959ba7}.input-group.primary .input-container .icon>svg path{fill:#959ba7}.input-group.primary .input-container .password-icon>svg{fill:#6c727f}.input-group.primary .input-container .password-icon>svg path{fill:#6c727f}.input-group.primary .input{border-radius:8px;border:1px solid #959ba7;background:#fff;font-variant:normal;font-weight:400;font-family:Mulish,sans-serif;color:#161c26;font-size:1rem;line-height:1.5rem;color:#161c26}.input-group.primary .input::placeholder{font-variant:normal;font-weight:400;font-family:Mulish,sans-serif;color:#161c26;font-size:1rem;line-height:1.5rem;color:#6c727f}.input-group.primary .input:focus{outline:#eb004d;border:1px solid #eb004d}.input-group.primary .input.invalid{border:1px solid #ff4d4f}.input-group.primary .input:disabled{border:1px solid #959ba7;background:#f3f3f5;color:#959ba7}.input-group.primary .input:disabled::placeholder{color:#959ba7}.input-group.primary .input-help-text{font-variant:normal;font-weight:400;font-family:Mulish,sans-serif;color:#161c26;font-size:1rem;line-height:1.5rem;color:#6c727f;font-size:.875rem;line-height:1.375rem}.input-group.primary .input-label{font-variant:normal;font-weight:400;font-family:Mulish,sans-serif;color:#161c26;font-size:1rem;line-height:1.5rem;color:#161c26}.input-group .input-container{position:relative;display:flex;flex-direction:row}.input-group .input-container .icon{position:absolute;width:12px;height:12px}.input-group .input-container .icon>svg{width:100%;height:100%}.input-group .input-container .left-icon{top:.9rem;left:.7rem}.input-group .input-container .password-icon{top:.9rem;right:.7rem}.input-group .input{width:100%;padding:8px 12px 8px}.input-group .with-icon{padding-left:28px}","",{version:3,sources:["webpack://./src/settings/typography/_content.scss","webpack://./src/atoms/Input.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/_colors.scss"],names:[],mappings:"AACQ,oFAAA,CCGR,aACE,YAAA,CACA,qBAAA,CACA,OCJS,CDMT,oBACE,iBAAA,CAIA,kDDGF,mBAAA,CACA,eAAA,CACA,6BAAA,CACA,aGsCU,CHrCV,cAjBe,CAkBf,kBAZsB,CAkHtB,aG1HS,CH2HT,iBA1HmB,CA2HnB,oBArH0B,CCapB,gDACE,YEyCC,CFxCD,qDACE,YEuCD,CFjCH,yDACE,YE8BC,CF7BD,8DACE,YE4BD,CFtBP,4BACE,iBC3BY,CD4BZ,wBAAA,CACA,eE1CO,CHgBX,mBAAA,CACA,eAAA,CACA,6BAAA,CACA,aGsCU,CHrCV,cAjBe,CAkBf,kBAZsB,CAqDtB,aGLU,CFXN,yCD9BJ,mBAAA,CACA,eAAA,CACA,6BAAA,CACA,aGsCU,CHrCV,cAjBe,CAkBf,kBAZsB,CA0DtB,aGNS,CFXL,kCACE,eEnCM,CFoCN,wBAAA,CAGF,oCACE,wBAAA,CAGF,qCACE,wBAAA,CACA,kBEME,CFLF,aECG,CFCH,kDACE,aEFC,CFOP,sCDtDF,mBAAA,CACA,eAAA,CACA,6BAAA,CACA,aGsCU,CHrCV,cAjBe,CAkBf,kBAZsB,CA2GtB,aGvDS,CHwDT,iBAnHmB,CAoHnB,oBA9G0B,CCkExB,kCD1DF,mBAAA,CACA,eAAA,CACA,6BAAA,CACA,aGsCU,CHrCV,cAjBe,CAkBf,kBAZsB,CAqDtB,aGLU,CFsBV,8BACE,iBAAA,CACA,YAAA,CACA,kBAAA,CAEA,oCACE,iBAAA,CACA,UChES,CDiET,WCjES,CDkET,wCACE,UAAA,CACA,WAAA,CAIJ,yCACE,SAAA,CACA,UAAA,CAGF,6CACE,SAAA,CACA,WAAA,CAIJ,oBACE,UAAA,CACA,oBAAA,CAGF,wBACE,iBAAA",sourcesContent:["@use '../color_alias';\n@import 'https://fonts.googleapis.com/css2?family=Mulish:wght@200..1000&display=swap';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin base {\n  font-variant: normal;\n  font-weight: 400;\n  font-family: Mulish, sans-serif;\n  color: color_alias.$neutral-color-1000;\n  font-size: $font-size-body;\n  line-height: $font-line-height-body;\n}\n\n@mixin h1 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: $font-size-h1;\n  line-height: $font-line-height-h1;\n  margin: 0;\n}\n\n@mixin h2 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: $font-size-h2;\n  line-height: $font-line-height-h2;\n  margin: 0;\n}\n\n@mixin h3 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: $font-size-h3;\n  line-height: $font-line-height-h3;\n  margin: 0;\n}\n\n@mixin h4 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: $font-size-h4;\n  line-height: $font-line-height-h4;\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include base;\n  color: color_alias.$neutral-color-1000;\n}\n\n@mixin body-regular-secondary {\n  @include base;\n  color: color_alias.$neutral-color-600;\n}\n\n@mixin body-regular-disabled {\n  @include base;\n  color: color_alias.$neutral-color-400;\n}\n\n@mixin body-regular-error {\n  @include base;\n  color: color_alias.$error-color-1000;\n}\n\n@mixin body-regular-warning {\n  @include base;\n  color: color_alias.$warning-color-1000;\n}\n\n@mixin body-underline {\n  @include base;\n  color: color_alias.$neutral-color-1000;\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include base;\n  color: color_alias.$primary-color-600;\n}\n\n@mixin body-medium {\n  @include base;\n  font-weight: 500;\n  color: color_alias.$neutral-color-1000;\n}\n\n@mixin body-bold {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n}\n\n@mixin body-extrabold {\n  @include base;\n  font-weight: 800;\n  color: color_alias.$neutral-color-1000;\n}\n\n@mixin footnote-primary {\n  @include base;\n  color: color_alias.$neutral-color-600;\n  font-size: $font-size-footnote;\n  line-height: $font-line-height-footnote;\n}\n\n@mixin footnote-error {\n  @include base;\n  color: color_alias.$error-color-1000;\n  font-size: $font-size-footnote;\n  line-height: $font-line-height-footnote;\n}\n","@use '../settings/color_alias';\n@use '../settings/typography/form' as typography;\n@use '../settings/config';\n\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: config.$space-2x;\n\n  .input {\n    padding-left: 12px;\n  }\n\n  &:has(.input.invalid) {\n    & .input-help-text {\n      @include typography.form-help-text-error;\n    }\n  }\n\n  &.primary {\n    .input-container {\n      .icon {\n        > svg {\n          fill: color_alias.$neutral-color-400;\n          path {\n            fill: color_alias.$neutral-color-400;\n          }\n        }\n      }\n\n      .password-icon {\n        > svg {\n          fill: color_alias.$neutral-color-600;\n          path {\n            fill: color_alias.$neutral-color-600;\n          }\n        }\n      }\n    }\n\n    .input {\n      border-radius: config.$corner-radius-m;\n      border: 1px solid color_alias.$neutral-color-400;\n      background: color_alias.$neutral-white;\n\n      @include typography.input-text;\n\n      &::placeholder {\n        @include typography.input-placeholder-text;\n      }\n\n      &:focus {\n        outline: color_alias.$primary-color-600;\n        border: 1px solid color_alias.$primary-color-600;\n      }\n\n      &.invalid {\n        border: 1px solid color_alias.$error-color-1000;\n      }\n\n      &:disabled {\n        border: 1px solid color_alias.$neutral-color-400;\n        background: color_alias.$neutral-color-50;\n        color: color_alias.$neutral-color-400;\n\n        &::placeholder {\n          color: color_alias.$neutral-color-400;\n        }\n      }\n    }\n\n    .input-help-text {\n      @include typography.form-help-text;\n    }\n\n    .input-label {\n      @include typography.form-label;\n    }\n  }\n\n  .input-container {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n\n    .icon {\n      position: absolute;\n      width: config.$icon-size-3x;\n      height: config.$icon-size-3x;\n      > svg {\n        width: 100%;\n        height: 100%;\n      }\n    }\n\n    .left-icon {\n      top: 0.9rem;\n      left: 0.7rem;\n    }\n\n    .password-icon {\n      top: 0.9rem;\n      right: 0.7rem;\n    }\n  }\n\n  .input {\n    width: 100%;\n    padding: config.$space-2x config.$space-3x config.$space-2x;\n  }\n\n  .with-icon {\n    padding-left: 28px;\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-halfx: 2px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./src/atoms/Input.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Input_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Input.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Input_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Input_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Input_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_Input_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);