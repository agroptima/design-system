"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[850],{"./src/stories/Modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DeleteOrDiscard:()=>DeleteOrDiscard,Details:()=>Details,Error:()=>Error,Info:()=>Info,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classNames=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/utils/classNames.ts")),Button=__webpack_require__("./src/atoms/Button/index.ts"),Icon=__webpack_require__("./src/atoms/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Modal.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal.A,options);Modal.A&&Modal.A.locals&&Modal.A.locals;var IconVariant;function Modal_Modal({id,className,variant="info",title,buttons,children,...props}){const cssClasses=(0,classNames.x)("modal",variant,className);return(0,jsx_runtime.jsxs)("div",{className:"modal-container",children:[(0,jsx_runtime.jsx)("div",{className:"backdrop"}),(0,jsx_runtime.jsxs)("div",{role:"dialog","aria-labelledby":`${id}-title`,"aria-describedby":`${id}-body`,className:cssClasses,...props,children:[(0,jsx_runtime.jsxs)("div",{className:"header",children:["details"!==variant&&(0,jsx_runtime.jsx)(Icon.I,{name:IconVariant[variant],className:variant}),(0,jsx_runtime.jsx)("h4",{id:`${id}-title`,className:"title",children:title})]}),"details"===variant&&(0,jsx_runtime.jsx)("div",{className:"divider"}),(0,jsx_runtime.jsx)("div",{id:`${id}-body`,className:"body",children}),(0,jsx_runtime.jsx)("div",{className:"footer",children:buttons.map((({...button})=>(0,jsx_runtime.jsx)(Button.$n,{...button},button.label)))})]})]})}!function(IconVariant){IconVariant.info="Info",IconVariant.success="Check",IconVariant.warning="Warning",IconVariant.error="Error",IconVariant.discard="Warning"}(IconVariant||(IconVariant={}));try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"details"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"discard"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!0,type:{name:"ButtonProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/atoms/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var DetailItem=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/DetailItem.scss"),DetailItem_options={};DetailItem_options.styleTagTransform=styleTagTransform_default(),DetailItem_options.setAttributes=setAttributesWithoutAttributes_default(),DetailItem_options.insert=insertBySelector_default().bind(null,"head"),DetailItem_options.domAPI=styleDomAPI_default(),DetailItem_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DetailItem.A,DetailItem_options);DetailItem.A&&DetailItem.A.locals&&DetailItem.A.locals;function DetailItem_DetailItem({id,className,variant="primary",title,children,...props}){return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.x)("detail-item",variant,className),...props,children:[(0,jsx_runtime.jsx)("div",{className:"title",children:title}),(0,jsx_runtime.jsx)("div",{className:"information",children})]})}try{DetailItem_DetailItem.displayName="DetailItem",DetailItem_DetailItem.__docgenInfo={description:"",displayName:"DetailItem",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/DetailItem.tsx#DetailItem"]={docgenInfo:DetailItem_DetailItem.__docgenInfo,name:"DetailItem",path:"src/atoms/DetailItem.tsx#DetailItem"})}catch(__react_docgen_typescript_loader_error){}const Modal_stories={title:"Design System/Atoms/Modal",component:Modal_Modal,tags:["autodocs"],argTypes:{id:{description:"Id for aria purposes"},variant:{description:"Component variant used"},title:{description:"Component title text"},buttons:{description:"Array of button to be shown on the footer"}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1992-142&mode=dev"}}},Info={render:()=>(0,jsx_runtime.jsx)(Modal_Modal,{id:"info-dangerous-alone",variant:"info",title:"It's dangerous to go alone!",buttons:[{label:"Done",onClick:()=>alert("click")}],children:"Take this 🗡️"})},Success={render:()=>(0,jsx_runtime.jsx)(Modal_Modal,{id:"success-dangerous-alone",variant:"success",title:"It's dangerous to go alone!",buttons:[{label:"Done",onClick:()=>alert("click")}],children:"Take this 🗡️"})},Warning={render:()=>(0,jsx_runtime.jsx)(Modal_Modal,{id:"warning-dangerous-alone",variant:"warning",title:"It's dangerous to go alone!",buttons:[{label:"Done",onClick:()=>alert("click")}],children:"Take this 🗡️"})},Error={render:()=>(0,jsx_runtime.jsx)(Modal_Modal,{id:"error-dangerous-alone",variant:"error",title:"It's dangerous to go alone!",buttons:[{label:"Done",onClick:()=>alert("click")}],children:"Take this 🗡️"})},DeleteOrDiscard={render:()=>(0,jsx_runtime.jsx)(Modal_Modal,{id:"discard-dangerous-alone",variant:"discard",title:"The far horizon was always steamy and indistinct",buttons:[{label:"Cancel",variant:"neutral",onClick:()=>alert("click")},{label:"Delete",variant:"error",onClick:()=>alert("click")}],children:"But I could see that great jungles of unknown tree-ferns, calamites, lepidodendra, and sigillaria lay outside the city, their fantastic frondage waving mockingly in the shifting vapours. Now and then there would be suggestions of motion in the sky, but these my early visions never resolved."})},Details={render:()=>(0,jsx_runtime.jsxs)(Modal_Modal,{id:"details-dangerous-alone",variant:"details",title:"Game details",buttons:[{label:"Done",onClick:()=>alert("click")}],children:[(0,jsx_runtime.jsx)(DetailItem_DetailItem,{title:"Title",children:"Final Fantasy VIII"}),(0,jsx_runtime.jsx)(DetailItem_DetailItem,{title:"Release date",children:"11/02/1999"}),(0,jsx_runtime.jsx)(DetailItem_DetailItem,{title:"Publisher",children:(0,jsx_runtime.jsx)("a",{href:"#",children:"Squaresoft"})}),(0,jsx_runtime.jsx)(DetailItem_DetailItem,{title:"Price",children:"59,95 €"})]})},__namedExportsOrder=["Info","Success","Warning","Error","DeleteOrDiscard","Details"];Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:'{\n  render: () => <Modal id="info-dangerous-alone" variant="info" title="It\'s dangerous to go alone!" buttons={[{\n    label: \'Done\',\n    onClick: () => alert(\'click\')\n  }]}>\n      Take this 🗡️\n    </Modal>\n}',...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  render: () => <Modal id="success-dangerous-alone" variant="success" title="It\'s dangerous to go alone!" buttons={[{\n    label: \'Done\',\n    onClick: () => alert(\'click\')\n  }]}>\n      Take this 🗡️\n    </Modal>\n}',...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  render: () => <Modal id="warning-dangerous-alone" variant="warning" title="It\'s dangerous to go alone!" buttons={[{\n    label: \'Done\',\n    onClick: () => alert(\'click\')\n  }]}>\n      Take this 🗡️\n    </Modal>\n}',...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'{\n  render: () => <Modal id="error-dangerous-alone" variant="error" title="It\'s dangerous to go alone!" buttons={[{\n    label: \'Done\',\n    onClick: () => alert(\'click\')\n  }]}>\n      Take this 🗡️\n    </Modal>\n}',...Error.parameters?.docs?.source}}},DeleteOrDiscard.parameters={...DeleteOrDiscard.parameters,docs:{...DeleteOrDiscard.parameters?.docs,source:{originalSource:"{\n  render: () => <Modal id=\"discard-dangerous-alone\" variant=\"discard\" title=\"The far horizon was always steamy and indistinct\" buttons={[{\n    label: 'Cancel',\n    variant: 'neutral',\n    onClick: () => alert('click')\n  }, {\n    label: 'Delete',\n    variant: 'error',\n    onClick: () => alert('click')\n  }]}>\n      But I could see that great jungles of unknown tree-ferns, calamites,\n      lepidodendra, and sigillaria lay outside the city, their fantastic\n      frondage waving mockingly in the shifting vapours. Now and then there\n      would be suggestions of motion in the sky, but these my early visions\n      never resolved.\n    </Modal>\n}",...DeleteOrDiscard.parameters?.docs?.source}}},Details.parameters={...Details.parameters,docs:{...Details.parameters?.docs,source:{originalSource:'{\n  render: () => <Modal id="details-dangerous-alone" variant="details" title="Game details" buttons={[{\n    label: \'Done\',\n    onClick: () => alert(\'click\')\n  }]}>\n      <DetailItem title="Title">Final Fantasy VIII</DetailItem>\n      <DetailItem title="Release date">11/02/1999</DetailItem>\n      <DetailItem title="Publisher">\n        <a href="#">Squaresoft</a>\n      </DetailItem>\n      <DetailItem title="Price">59,95 €</DetailItem>\n    </Modal>\n}',...Details.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/DetailItem.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".detail-item{display:flex;flex-direction:column;margin-bottom:12px}.detail-item .title{font-variant:normal;font-family:Mulish,sans-serif;font-weight:700;font-size:1rem;line-height:1.5rem;color:#161c26;color:#161c26}.detail-item .information{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26;color:#161c26}","",{version:3,sources:["webpack://./src/atoms/DetailItem.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/typography/_content.scss","webpack://./src/settings/_colors.scss"],names:[],mappings:"AAKA,aACE,YAAA,CACA,qBAAA,CACA,kBCHS,CDKT,oBEMA,mBAAA,CACA,6BAAA,CACA,eAyHE,CAxHF,cAhBe,CAiBf,kBAXsB,CAYtB,aCqCU,CH9CR,aG8CQ,CH3CV,0BECA,mBAAA,CACA,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aCqCU,CHzCR,aGyCQ",sourcesContent:["@use '../settings/color_alias';\n@use '../settings/typography/content' as typography;\n@use '../settings/config';\n@use '../settings/depth';\n\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: config.$space-3x;\n\n  .title {\n    @include typography.body-bold;\n    color: color_alias.$neutral-color-1000;\n  }\n\n  .information {\n    @include typography.body-regular-primary;\n    color: color_alias.$neutral-color-1000;\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-halfx: 2px;\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n","@use '../color_alias';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin typography-style($font-weight, $font-size, $line-height, $color) {\n  font-variant: normal;\n  font-family: Mulish, sans-serif;\n  font-weight: $font-weight;\n  font-size: $font-size;\n  line-height: $line-height;\n  color: $color;\n}\n\n@mixin h1 {\n  @include typography-style(\n    700,\n    $font-size-h1,\n    $font-line-height-h1,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h2 {\n  @include typography-style(\n    700,\n    $font-size-h2,\n    $font-line-height-h2,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h3 {\n  @include typography-style(\n    700,\n    $font-size-h3,\n    $font-line-height-h3,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h4 {\n  @include typography-style(\n    700,\n    $font-size-h4,\n    $font-line-height-h4,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-regular-secondary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin body-regular-disabled {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-400\n  );\n}\n\n@mixin body-regular-error {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$error-color-1000\n  );\n}\n\n@mixin body-regular-warning {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$warning-color-1000\n  );\n}\n\n@mixin body-underline {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$primary-color-600\n  );\n}\n\n@mixin body-medium {\n  @include typography-style(\n    500,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-bold {\n  @include typography-style(\n    700,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-extrabold {\n  @include typography-style(\n    800,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin footnote-primary {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin footnote-error {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$error-color-1000\n  );\n}\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Modal.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".modal-container{position:fixed;inset:0;z-index:2;margin:16px}.modal-container .backdrop{position:fixed;height:100%;opacity:.4;background:#353941;inset:0}.modal-container .modal{top:6.25rem;margin:auto;display:flex;position:relative;padding:20px;flex-direction:column;align-items:flex-start;gap:8px;flex-grow:1;border-radius:2px;background:#fff;max-width:34.5rem;box-shadow:0px 3px 6px -4px rgba(0,0,0,.12),0px 6px 16px 0px rgba(0,0,0,.08),0px 9px 28px 8px rgba(0,0,0,.05)}.modal-container .modal .header{display:flex;gap:8px;align-items:flex-start}.modal-container .modal .header .icon{margin-top:4px;min-width:20px;width:20px;height:20px}.modal-container .modal .header .icon>svg{width:100%;height:100%}.modal-container .modal .header .title{font-variant:normal;font-family:Mulish,sans-serif;font-weight:700;font-size:1.25rem;line-height:1.75rem;color:#161c26;margin:0}.modal-container .modal .divider{width:100%;height:1px;background:#c3c7cf;margin-bottom:8px}.modal-container .modal .body{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26}.modal-container .modal .footer{display:flex;align-self:flex-end;gap:12px;margin-top:8px}.modal-container .modal.info .header .icon>svg{fill:#1890ff}.modal-container .modal.info .header .icon>svg path{fill:#1890ff}.modal-container .modal.success .header .icon>svg{fill:#6fb62e}.modal-container .modal.success .header .icon>svg path{fill:#6fb62e}.modal-container .modal.warning .header .icon>svg{fill:#ffa940}.modal-container .modal.warning .header .icon>svg path{fill:#ffa940}.modal-container .modal.discard .header .icon>svg{fill:#ffa940}.modal-container .modal.discard .header .icon>svg path{fill:#ffa940}.modal-container .modal.error .header .icon>svg{fill:#ff4d4f}.modal-container .modal.error .header .icon>svg path{fill:#ff4d4f}","",{version:3,sources:["webpack://./src/atoms/Modal.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/_colors.scss","webpack://./src/settings/typography/_content.scss"],names:[],mappings:"AAKA,iBACE,cAAA,CACA,OAAA,CACA,SAAA,CACA,WCHS,CDKT,2BACE,cAAA,CACA,WAAA,CACA,UAAA,CACA,kBE4CO,CF3CP,OAAA,CAGF,wBACE,WAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,YCjBO,CDkBP,qBAAA,CACA,sBAAA,CACA,OCvBO,CDwBP,WAAA,CACA,iBCbgB,CDchB,eE7BS,CF8BT,iBAAA,CACA,6GACE,CAIF,gCACE,YAAA,CACA,OCnCK,CDoCL,sBAAA,CAEA,sCACE,cAAA,CACA,cCvBO,CDwBP,UCxBO,CDyBP,WCzBO,CD0BP,0CACE,UAAA,CACA,WAAA,CAIJ,uCGrCJ,mBAAA,CACA,6BAAA,CACA,eAsCE,CArCF,iBAfa,CAgBb,mBAVoB,CAWpB,aDqCU,CCGV,QAAA,CHHE,iCACE,UAAA,CACA,UAAA,CACA,kBEKK,CFJL,iBC1DK,CD6DP,8BGjDF,mBAAA,CACA,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aDqCU,CFWR,gCACE,YAAA,CACA,mBAAA,CACA,QCnEK,CDoEL,cCrEK,CD2ED,+CACE,YE7CO,CF8CP,oDACE,YE/CK,CFyDT,kDACE,YErEC,CFsED,uDACE,YEvED,CFiFH,kDACE,YEtEE,CFuEF,uDACE,YExEA,CFkFJ,kDACE,YEnFE,CFoFF,uDACE,YErFA,CF+FJ,gDACE,YElID,CFmIC,qDACE,YEpIH",sourcesContent:["@use '../settings/color_alias';\n@use '../settings/typography/content' as typography;\n@use '../settings/config';\n@use '../settings/depth';\n\n.modal-container {\n  position: fixed;\n  inset: 0;\n  z-index: depth.$z-modal;\n  margin: config.$space-4x;\n\n  .backdrop {\n    position: fixed;\n    height: 100%;\n    opacity: 0.4;\n    background: color_alias.$neutral-color-900;\n    inset: 0;\n  }\n\n  .modal {\n    top: 6.25rem;\n    margin: auto;\n    display: flex;\n    position: relative;\n    padding: config.$space-5x;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: config.$space-2x;\n    flex-grow: 1;\n    border-radius: config.$corner-radius-xxs;\n    background: color_alias.$neutral-white;\n    max-width: 34.5rem;\n    box-shadow:\n      0px 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0px 6px 16px 0px rgba(0, 0, 0, 0.08),\n      0px 9px 28px 8px rgba(0, 0, 0, 0.05);\n\n    .header {\n      display: flex;\n      gap: config.$space-2x;\n      align-items: flex-start;\n\n      .icon {\n        margin-top: 4px;\n        min-width: config.$icon-size-5x;\n        width: config.$icon-size-5x;\n        height: config.$icon-size-5x;\n        > svg {\n          width: 100%;\n          height: 100%;\n        }\n      }\n\n      .title {\n        @include typography.h4;\n      }\n    }\n\n    .divider {\n      width: 100%;\n      height: 1px;\n      background: color_alias.$neutral-color-200;\n      margin-bottom: config.$space-2x;\n    }\n\n    .body {\n      @include typography.body-regular-primary;\n    }\n\n    .footer {\n      display: flex;\n      align-self: flex-end;\n      gap: config.$space-3x;\n      margin-top: config.$space-2x;\n    }\n\n    &.info {\n      .header {\n        .icon {\n          > svg {\n            fill: color_alias.$info-color-1000;\n            path {\n              fill: color_alias.$info-color-1000;\n            }\n          }\n        }\n      }\n    }\n\n    &.success {\n      .header {\n        .icon {\n          > svg {\n            fill: color_alias.$success-color-1000;\n            path {\n              fill: color_alias.$success-color-1000;\n            }\n          }\n        }\n      }\n    }\n\n    &.warning {\n      .header {\n        .icon {\n          > svg {\n            fill: color_alias.$warning-color-1000;\n            path {\n              fill: color_alias.$warning-color-1000;\n            }\n          }\n        }\n      }\n    }\n\n    &.discard {\n      .header {\n        .icon {\n          > svg {\n            fill: color_alias.$warning-color-1000;\n            path {\n              fill: color_alias.$warning-color-1000;\n            }\n          }\n        }\n      }\n    }\n\n    &.error {\n      .header {\n        .icon {\n          > svg {\n            fill: color_alias.$error-color-1000;\n            path {\n              fill: color_alias.$error-color-1000;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-halfx: 2px;\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n","@use '../color_alias';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin typography-style($font-weight, $font-size, $line-height, $color) {\n  font-variant: normal;\n  font-family: Mulish, sans-serif;\n  font-weight: $font-weight;\n  font-size: $font-size;\n  line-height: $line-height;\n  color: $color;\n}\n\n@mixin h1 {\n  @include typography-style(\n    700,\n    $font-size-h1,\n    $font-line-height-h1,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h2 {\n  @include typography-style(\n    700,\n    $font-size-h2,\n    $font-line-height-h2,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h3 {\n  @include typography-style(\n    700,\n    $font-size-h3,\n    $font-line-height-h3,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h4 {\n  @include typography-style(\n    700,\n    $font-size-h4,\n    $font-line-height-h4,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-regular-secondary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin body-regular-disabled {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-400\n  );\n}\n\n@mixin body-regular-error {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$error-color-1000\n  );\n}\n\n@mixin body-regular-warning {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$warning-color-1000\n  );\n}\n\n@mixin body-underline {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$primary-color-600\n  );\n}\n\n@mixin body-medium {\n  @include typography-style(\n    500,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-bold {\n  @include typography-style(\n    700,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-extrabold {\n  @include typography-style(\n    800,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin footnote-primary {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin footnote-error {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$error-color-1000\n  );\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);