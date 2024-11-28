"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[285],{"./src/stories/EmptyState.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PrimaryBasic:()=>PrimaryBasic,PrimaryCustom:()=>PrimaryCustom,__namedExportsOrder:()=>__namedExportsOrder,default:()=>EmptyState_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Button=__webpack_require__("./src/atoms/Button/index.ts"),classNames=__webpack_require__("./src/utils/classNames.ts"),Icon=__webpack_require__("./src/atoms/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),EmptyState=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/EmptyState.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(EmptyState.A,options);EmptyState.A&&EmptyState.A.locals&&EmptyState.A.locals;function EmptyState_EmptyState({className,icon="EmptyState",variant="primary",children}){const cssClasses=(0,classNames.x)("empty-state",variant,className);return(0,jsx_runtime.jsxs)("div",{className:cssClasses,children:[(0,jsx_runtime.jsx)(Icon.I,{name:icon}),children]})}try{EmptyState_EmptyState.displayName="EmptyState",EmptyState_EmptyState.__docgenInfo={description:"",displayName:"EmptyState",props:{icon:{defaultValue:{value:"EmptyState"},description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AngleDown"'},{value:'"AngleLeft"'},{value:'"AngleRight"'},{value:'"AngleUp"'},{value:'"ArrowBack"'},{value:'"Calendar"'},{value:'"ChangePassword"'},{value:'"Check"'},{value:'"CheckboxActive"'},{value:'"CheckboxInactive"'},{value:'"CheckboxIndeterminate"'},{value:'"Client"'},{value:'"Close"'},{value:'"Comment"'},{value:'"Delete"'},{value:'"Delivery"'},{value:'"DeliveryNote"'},{value:'"Done"'},{value:'"DoubleArrowLeft"'},{value:'"DoubleArrowRight"'},{value:'"Download"'},{value:'"Edit"'},{value:'"EditColumns"'},{value:'"ElectronicInvoice"'},{value:'"EmptyState"'},{value:'"Error"'},{value:'"Export"'},{value:'"Filter"'},{value:'"Import"'},{value:'"Info"'},{value:'"Invoice"'},{value:'"Loading"'},{value:'"Logout"'},{value:'"Minus"'},{value:'"PDF"'},{value:'"Product"'},{value:'"ReturnDeliveryNote"'},{value:'"Salesman"'},{value:'"Search"'},{value:'"Series"'},{value:'"Settings"'},{value:'"Show"'},{value:'"ShowOff"'},{value:'"Sorter"'},{value:'"Upload"'},{value:'"UserMenu"'},{value:'"Warning"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/EmptyState.tsx#EmptyState"]={docgenInfo:EmptyState_EmptyState.__docgenInfo,name:"EmptyState",path:"src/atoms/EmptyState.tsx#EmptyState"})}catch(__react_docgen_typescript_loader_error){}const EmptyState_stories={title:"Design System/Atoms/EmptyState",component:EmptyState_EmptyState,tags:["autodocs"],argTypes:{icon:{description:"A default icon is set for the empty state."},variant:{description:"Variant used."}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1719-258&mode=dev"}}},PrimaryCustom={render:()=>(0,jsx_runtime.jsxs)(EmptyState_EmptyState,{variant:"primary",children:[(0,jsx_runtime.jsxs)("p",{children:["There are no videogames yet. You can import videogames to your"," ",(0,jsx_runtime.jsx)("a",{href:"#",children:"list"}),"."]}),(0,jsx_runtime.jsx)(Button.$n,{label:"Import videogames",onClick:()=>alert("click")})]})},PrimaryBasic={render:()=>(0,jsx_runtime.jsx)(EmptyState_EmptyState,{variant:"primary",children:(0,jsx_runtime.jsx)("p",{children:"No data"})})},__namedExportsOrder=["PrimaryCustom","PrimaryBasic"];PrimaryCustom.parameters={...PrimaryCustom.parameters,docs:{...PrimaryCustom.parameters?.docs,source:{originalSource:'{\n  render: () => <EmptyState variant="primary">\n      <p>\n        There are no videogames yet. You can import videogames to your{\' \'}\n        <a href="#">list</a>.\n      </p>\n      <Button label="Import videogames" onClick={() => alert(\'click\')}></Button>\n    </EmptyState>\n}',...PrimaryCustom.parameters?.docs?.source}}},PrimaryBasic.parameters={...PrimaryBasic.parameters,docs:{...PrimaryBasic.parameters?.docs,source:{originalSource:'{\n  render: () => <EmptyState variant="primary">\n      <p>No data</p>\n    </EmptyState>\n}',...PrimaryBasic.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/EmptyState.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".empty-state{display:flex;flex-direction:column;align-items:center;width:100%}.empty-state>p{margin-top:8px;margin-bottom:16px}.empty-state:not(:has(>.button))>p{margin-top:0}.empty-state.primary>.icon{width:4.25rem;height:4.25rem}.empty-state.primary>.icon>svg{width:100%;height:100%}.empty-state.primary>p{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26;text-align:center}","",{version:3,sources:["webpack://./src/atoms/EmptyState.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/typography/_content.scss","webpack://./src/settings/_colors.scss"],names:[],mappings:"AAKA,aACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,UAAA,CAEA,eACE,cCRO,CDSP,kBCPO,CDWP,mCACE,YAAA,CAKF,2BACE,aAAA,CACA,cAAA,CACA,+BACE,UAAA,CACA,WAAA,CAIJ,uBEhBF,mBAAA,CACA,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aCqCU,CHxBN,iBAAA",sourcesContent:["@use '../settings/color_alias';\n@use '../settings/typography/content' as typography;\n@use '../settings/config';\n@use '../settings/depth';\n\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  > p {\n    margin-top: config.$space-2x;\n    margin-bottom: config.$space-4x;\n  }\n\n  &:not(:has(> .button)) {\n    > p {\n      margin-top: 0;\n    }\n  }\n\n  &.primary {\n    > .icon {\n      width: 4.25rem;\n      height: 4.25rem;\n      > svg {\n        width: 100%;\n        height: 100%;\n      }\n    }\n\n    > p {\n      @include typography.body-regular-primary;\n      text-align: center;\n    }\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-halfx: 2px;\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-2x: 8px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n","@use '../color_alias';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin typography-style($font-weight, $font-size, $line-height, $color) {\n  font-variant: normal;\n  font-family: Mulish, sans-serif;\n  font-weight: $font-weight;\n  font-size: $font-size;\n  line-height: $line-height;\n  color: $color;\n}\n\n@mixin h1 {\n  @include typography-style(\n    700,\n    $font-size-h1,\n    $font-line-height-h1,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h2 {\n  @include typography-style(\n    700,\n    $font-size-h2,\n    $font-line-height-h2,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h3 {\n  @include typography-style(\n    700,\n    $font-size-h3,\n    $font-line-height-h3,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h4 {\n  @include typography-style(\n    700,\n    $font-size-h4,\n    $font-line-height-h4,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-regular-secondary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin body-regular-disabled {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-400\n  );\n}\n\n@mixin body-regular-error {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$error-color-1000\n  );\n}\n\n@mixin body-regular-warning {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$warning-color-1000\n  );\n}\n\n@mixin body-underline {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$primary-color-600\n  );\n}\n\n@mixin body-medium {\n  @include typography-style(\n    500,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-bold {\n  @include typography-style(\n    700,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-extrabold {\n  @include typography-style(\n    800,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin footnote-primary {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin footnote-error {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$error-color-1000\n  );\n}\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);