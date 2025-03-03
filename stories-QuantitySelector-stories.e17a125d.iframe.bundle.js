"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[6995],{"./src/stories/QuantitySelector.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const figmaPrimaryDesign={design:{type:"figma",url:"https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2701-275&m=dev"}},__WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/QuantitySelector",component:__webpack_require__("./src/atoms/QuantitySelector.tsx").R,parameters:{docs:{description:{component:"<h2>Usage guidelines</h2><p>Quantity Selector component is similar to text inputs, but is used to specify only a numeric value. Quantity Selector incrementally increases or decreases the value with a two-segment control.</p><p>When using keyboard controls, increment and decrement buttons are ignored so the user is taken to the quantity input.</p>"}}},tags:["autodocs"],argTypes:{label:{description:"Label for the component"},accessibilityLabel:{description:"Describes the component purpose. If empty, label content will be used"},variant:{description:"Component variant used"},disabled:{description:"Is the input in disabled state?"},name:{description:"Component name property"},id:{description:"Value needed for the label relation"},decrementButton:{description:"Button component props for decrementButton"},incrementButton:{description:"Button component props for incrementButton"},quantityInput:{description:"Input component props for quantityInput"}}},Primary={args:{label:"Quantity",accessibilityLabel:"Quantity of items to wishlist",id:"quantity",hideLabel:!0,name:"quantity",max:10,step:1e-4,min:1,required:!0,defaultValue:1},parameters:figmaPrimaryDesign},Disabled={args:{label:"Quantity",accessibilityLabel:"Quantity of items to wishlist",id:"quantity",name:"quantity",defaultValue:1,onChange:()=>alert("onChange"),max:10,step:1e-4,min:1,required:!0,disabled:!0},parameters:figmaPrimaryDesign},__namedExportsOrder=["Primary","Disabled"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Quantity',\n    accessibilityLabel: 'Quantity of items to wishlist',\n    id: 'quantity',\n    hideLabel: true,\n    name: 'quantity',\n    max: 10,\n    step: 0.0001,\n    min: 1,\n    required: true,\n    defaultValue: 1\n  },\n  parameters: figmaPrimaryDesign\n}",...Primary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Quantity',\n    accessibilityLabel: 'Quantity of items to wishlist',\n    id: 'quantity',\n    name: 'quantity',\n    defaultValue: 1,\n    onChange: () => alert('onChange'),\n    max: 10,\n    step: 0.0001,\n    min: 1,\n    required: true,\n    disabled: true\n  },\n  parameters: figmaPrimaryDesign\n}",...Disabled.parameters?.docs?.source}}}},"./src/atoms/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/atoms/Input.scss"),__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_utils_buildHelpText__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/buildHelpText.ts"),_utils_classNames__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/classNames.ts"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/atoms/Button/index.ts"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/atoms/Icon.tsx");function Input({label,accessibilityLabel,className,hideLabel=!1,icon,helpText,variant="primary",disabled,type="text",suffix,name,id,errors,required=!1,...props}){const identifier=id||name,[showPassword,setShowPassword]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),helpTexts=(0,_utils_buildHelpText__WEBPACK_IMPORTED_MODULE_5__.N)(helpText,errors);function handlePasswordIcon(){return showPassword?"ShowOff":"Show"}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:(0,_utils_classNames__WEBPACK_IMPORTED_MODULE_6__.x)("input-group",variant,className,{file:"file"===type,invalid:null==errors?void 0:errors.length}),children:[!hideLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:(0,_utils_classNames__WEBPACK_IMPORTED_MODULE_6__.x)("input-label",{"is-required":required}),htmlFor:identifier,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"input-container",children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.I,{className:"left-icon",name:icon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{id:identifier,disabled,type:function handleInputType(){return"password"!==type?type:showPassword?"text":"password"}(),name,"aria-label":accessibilityLabel||label,required,className:(0,_utils_classNames__WEBPACK_IMPORTED_MODULE_6__.x)({"primary-outlined":"file"===type}),...props}),suffix&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"input-suffix",children:suffix}),"password"===type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.K0,{type:"button",accessibilityLabel:handlePasswordIcon(),className:"password-icon",icon:handlePasswordIcon(),onClick:function handlePasswordVisibility(){setShowPassword(!showPassword)}})]}),helpTexts.map((helpText=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"input-help-text",children:helpText},`${identifier}-${helpText}`)))]})}try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},accessibilityLabel:{defaultValue:null,description:"",name:"accessibilityLabel",required:!1,type:{name:"string"}},hideLabel:{defaultValue:{value:"false"},description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"ArrowBack"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"CheckboxIndeterminate"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"Delivery"'},{value:'"DeliveryNote"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Download"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"ElectronicInvoice"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Filter"'},{value:'"Import"'},{value:'"Info"'},{value:'"Invoice"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Minus"'},{value:'"PDF"'},{value:'"Product"'},{value:'"ReturnDeliveryNote"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Series"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Upload"'},{value:'"UserMenu"'},{value:'"Warning"'}]}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},errors:{defaultValue:null,description:"",name:"errors",required:!1,type:{name:"string[]"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/atoms/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/atoms/QuantitySelector.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>QuantitySelector_QuantitySelector});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),QuantitySelector=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/QuantitySelector.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(QuantitySelector.A,options);QuantitySelector.A&&QuantitySelector.A.locals&&QuantitySelector.A.locals;var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),Button=__webpack_require__("./src/atoms/Button/index.ts"),Input=__webpack_require__("./src/atoms/Input.tsx");function QuantitySelector_QuantitySelector({id,label,accessibilityLabel,className,disabled,hideLabel=!1,variant="primary",...props}){const inputRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.x)("quantity-selector-group",variant,className),children:[!hideLabel&&(0,jsx_runtime.jsx)("label",{className:(0,classNames.x)("quantity-selector-label",{"is-required":props.required}),htmlFor:id,children:label}),(0,jsx_runtime.jsxs)("div",{className:"quantity-selector",children:[(0,jsx_runtime.jsx)(Button.$n,{label:"",accessibilityLabel:"-",type:"button",leftIcon:"Minus",className:"decrement-button",disabled,onClick:()=>{inputRef.current&&(inputRef.current.stepDown(),inputRef.current.dispatchEvent(new Event("input",{bubbles:!0})))},tabIndex:-1}),(0,jsx_runtime.jsx)(Input.p,{id,ref:inputRef,label,accessibilityLabel,disabled,type:"number",...props,hideLabel:!0}),(0,jsx_runtime.jsx)(Button.$n,{label:"",accessibilityLabel:"+",leftIcon:"Add",type:"button",className:"increment-button",disabled,onClick:()=>{inputRef.current&&(inputRef.current.stepUp(),inputRef.current.dispatchEvent(new Event("input",{bubbles:!0})))},tabIndex:-1})]})]})}try{QuantitySelector_QuantitySelector.displayName="QuantitySelector",QuantitySelector_QuantitySelector.__docgenInfo={description:"",displayName:"QuantitySelector",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},accessibilityLabel:{defaultValue:null,description:"",name:"accessibilityLabel",required:!1,type:{name:"string"}},hideLabel:{defaultValue:{value:"false"},description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"ArrowBack"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"CheckboxIndeterminate"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"Delivery"'},{value:'"DeliveryNote"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Download"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"ElectronicInvoice"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Filter"'},{value:'"Import"'},{value:'"Info"'},{value:'"Invoice"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Minus"'},{value:'"PDF"'},{value:'"Product"'},{value:'"ReturnDeliveryNote"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Series"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Upload"'},{value:'"UserMenu"'},{value:'"Warning"'}]}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},errors:{defaultValue:null,description:"",name:"errors",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/QuantitySelector.tsx#QuantitySelector"]={docgenInfo:QuantitySelector_QuantitySelector.__docgenInfo,name:"QuantitySelector",path:"src/atoms/QuantitySelector.tsx#QuantitySelector"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/QuantitySelector.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.quantity-selector-group{display:flex;flex-direction:column;gap:8px}.quantity-selector-group .quantity-selector{display:flex;align-items:flex-start}.quantity-selector-group .quantity-selector .input-group{width:100%}.quantity-selector-group.primary .quantity-selector .input-container{border-radius:0;border-right:0;border-left:0;background:#fff;text-align:center}.quantity-selector-group.primary .quantity-selector .input-container input::-webkit-outer-spin-button,.quantity-selector-group.primary .quantity-selector .input-container input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.quantity-selector-group.primary .quantity-selector .input-container input[type=number]{appearance:textfield;text-align:center}.quantity-selector-group.primary .quantity-selector .button{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26;color:#fff;height:42px}.quantity-selector-group.primary .quantity-selector .button:disabled{border:1px solid #959ba7;color:#959ba7}.quantity-selector-group.primary .quantity-selector .decrement-button{border-top-right-radius:0;border-bottom-right-radius:0}.quantity-selector-group.primary .quantity-selector .decrement-button:disabled{border-right:0}.quantity-selector-group.primary .quantity-selector .increment-button{border-top-left-radius:0;border-bottom-left-radius:0}.quantity-selector-group.primary .quantity-selector .increment-button:disabled{border-left:0}.quantity-selector-group.primary .quantity-selector-label{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26}.quantity-selector-group.primary .quantity-selector-label.is-required::after{content:"*";color:#eb004d}',"",{version:3,sources:["webpack://./src/atoms/QuantitySelector.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/_colors.scss","webpack://./src/settings/typography/_content.scss"],names:[],mappings:"AAKA,yBACE,YAAA,CACA,qBAAA,CACA,OCJS,CDMT,4CACE,YAAA,CACA,sBAAA,CAEA,yDACE,UAAA,CAMA,qEACE,eAAA,CACA,cAAA,CACA,aAAA,CACA,eExBK,CFyBL,iBAAA,CAGA,4MAEE,uBAAA,CACA,QAAA,CAEF,wFACE,oBAAA,CACA,iBAAA,CAGJ,4DGvBJ,mBAAA,CACA,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aDqCU,CFjBJ,UExCK,CFyCL,WAAA,CAEA,qEACE,wBAAA,CACA,aEkBC,CFfL,sEACE,yBAAA,CACA,4BAAA,CAEA,+EACE,cAAA,CAIJ,sEACE,wBAAA,CACA,2BAAA,CAEA,+EACE,aAAA,CAKN,0DGpDF,mBAAA,CACA,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aDqCU,CFYN,6EACE,WAAA,CACA,aEvDM",sourcesContent:["@use '../settings/color_alias';\n@use '../settings/typography/form' as form-typography;\n@use '../settings/typography/content' as typography;\n@use '../settings/config';\n\n.quantity-selector-group {\n  display: flex;\n  flex-direction: column;\n  gap: config.$space-2x;\n\n  .quantity-selector {\n    display: flex;\n    align-items: flex-start;\n\n    .input-group {\n      width: 100%;\n    }\n  }\n\n  &.primary {\n    .quantity-selector {\n      .input-container {\n        border-radius: 0;\n        border-right: 0;\n        border-left: 0;\n        background: color_alias.$neutral-white;\n        text-align: center;\n        // Remove default arrows\n        /* Chrome, Safari, Edge, Opera */\n        input::-webkit-outer-spin-button,\n        input::-webkit-inner-spin-button {\n          -webkit-appearance: none;\n          margin: 0;\n        }\n        input[type='number'] {\n          appearance: textfield;\n          text-align: center;\n        }\n      }\n      .button {\n        @include typography.body-regular-primary;\n        color: color_alias.$neutral-white;\n        height: 42px;\n\n        &:disabled {\n          border: 1px solid color_alias.$neutral-color-400;\n          color: color_alias.$neutral-color-400;\n        }\n      }\n      .decrement-button {\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n\n        &:disabled {\n          border-right: 0;\n        }\n      }\n\n      .increment-button {\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n\n        &:disabled {\n          border-left: 0;\n        }\n      }\n    }\n\n    .quantity-selector-label {\n      @include form-typography.form-label;\n      &.is-required::after {\n        content: '*';\n        color: color_alias.$primary-color-600;\n      }\n    }\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-halfx: 2px;\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-2x: 8px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n","@use '../color_alias';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin typography-style($font-weight, $font-size, $line-height, $color) {\n  font-variant: normal;\n  font-family: Mulish, sans-serif;\n  font-weight: $font-weight;\n  font-size: $font-size;\n  line-height: $line-height;\n  color: $color;\n}\n\n@mixin h1 {\n  @include typography-style(\n    700,\n    $font-size-h1,\n    $font-line-height-h1,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h2 {\n  @include typography-style(\n    700,\n    $font-size-h2,\n    $font-line-height-h2,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h3 {\n  @include typography-style(\n    700,\n    $font-size-h3,\n    $font-line-height-h3,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h4 {\n  @include typography-style(\n    700,\n    $font-size-h4,\n    $font-line-height-h4,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-regular-secondary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin body-regular-disabled {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-400\n  );\n}\n\n@mixin body-regular-error {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$error-color-1000\n  );\n}\n\n@mixin body-regular-warning {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$warning-color-1000\n  );\n}\n\n@mixin body-underline {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$primary-color-600\n  );\n}\n\n@mixin body-medium {\n  @include typography-style(\n    500,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-bold {\n  @include typography-style(\n    700,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-extrabold {\n  @include typography-style(\n    800,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin footnote-primary {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin footnote-error {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$error-color-1000\n  );\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);