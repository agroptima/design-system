(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[792],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var dist=__webpack_require__("./node_modules/@storybook/addon-viewport/dist/index.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),cjs_ruleSet_1_rules_14_use_4_src=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(cjs_ruleSet_1_rules_14_use_4_src.A,options);cjs_ruleSet_1_rules_14_use_4_src.A&&cjs_ruleSet_1_rules_14_use_4_src.A.locals&&cjs_ruleSet_1_rules_14_use_4_src.A.locals;const _storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i},expanded:!0},options:{storySort:{order:["Welcome","Changelog","Component creation workflow","Programmers start guide","*"]}},viewport:{viewports:dist.Lq}},tags:["autodocs"]}},"./node_modules/@storybook/nextjs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/nextjs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'*,*::before,*::after{box-sizing:border-box}*{margin:0}html,body{height:100%}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{max-width:100%;height:auto}video{display:block}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}@font-face{font-weight:400;font-family:Mulish;font-display:swap;src:url("/fonts/Mulish-Regular.woff2") format("woff2")}@font-face{font-weight:500;font-family:Mulish;font-display:swap;src:url("/fonts/Mulish-Medium.woff2") format("woff2")}@font-face{font-weight:700;font-family:Mulish;font-display:swap;src:url("/fonts/Mulish-Bold.woff2") format("woff2")}@font-face{font-weight:800;font-family:Mulish;font-display:swap;src:url("/fonts/Mulish-ExtraBold.woff2") format("woff2")}.uppercase{text-transform:uppercase}.lowercase{text-transform:lowercase}.no-margin{margin:0}.no-padding{padding:0}.has-text-left{text-align:left}.has-text-center{text-align:center}.has-text-right{text-align:right}.full-width{width:100%}@media only screen and (max-width: 1200px){.only-desktop{display:none !important}}@media only screen and (min-width: 1201px){.only-mobile{display:none !important}}html{scroll-behavior:smooth;max-width:100%;overflow-x:hidden}body{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26}body *{scrollbar-width:thin}a{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#eb004d;cursor:default}h1{font-variant:normal;font-family:Mulish,sans-serif;font-weight:700;font-size:2.5rem;line-height:3rem;color:#161c26;margin:0}@media only screen and (max-width: 1200px){h1{font-variant:normal;font-family:Mulish,sans-serif;font-weight:700;font-size:2rem;line-height:2.375rem;color:#161c26;margin:0}}h2{font-variant:normal;font-family:Mulish,sans-serif;font-weight:700;font-size:2rem;line-height:2.375rem;color:#161c26;margin:0}h3{font-variant:normal;font-family:Mulish,sans-serif;font-weight:700;font-size:1.5rem;line-height:2rem;color:#161c26;margin:0}h4{font-variant:normal;font-family:Mulish,sans-serif;font-weight:700;font-size:1.25rem;line-height:1.75rem;color:#161c26;margin:0}',"",{version:3,sources:["webpack://./src/generic/_reset.scss","webpack://./src/generic/_fonts.scss","webpack://./src/generic/_helpers.scss","webpack://./src/generic/_base.scss","webpack://./src/settings/typography/_content.scss","webpack://./src/settings/_colors.scss"],names:[],mappings:"AAKA,qBAGE,qBAAA,CAMF,EACE,QAAA,CAMF,UAEE,WAAA,CAQF,KACE,eAAA,CACA,kCAAA,CAMF,6BAKE,cAAA,CACA,WAAA,CAGF,MACE,aAAA,CAMF,6BAIE,YAAA,CAMF,oBAOE,wBAAA,CAMF,cAEE,iBAAA,CChFF,WACE,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,sDAAA,CAGF,WACE,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,qDAAA,CAGF,WACE,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,mDAAA,CAGF,WACE,eAAA,CACA,kBAAA,CACA,iBAAA,CACA,wDAAA,CCtBF,WACE,wBAAA,CAGF,WACE,wBAAA,CAGF,WACE,QAAA,CAGF,YACE,SAAA,CAGF,eACE,eAAA,CAGF,iBACE,iBAAA,CAGF,gBACE,gBAAA,CAGF,YACE,UAAA,CAIA,2CADF,cAEI,uBAAA,CAAA,CAKF,2CADF,aAEI,uBAAA,CAAA,CCxCJ,KACE,sBAAA,CACA,cAAA,CACA,iBAAA,CAGF,KCOE,mBAAA,CACA,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aCqCU,CF/CV,OACE,oBAAA,CAIJ,EAAA,mBAAA,CCCE,6BAAA,CACA,eAuGE,CAtGF,cAhBe,CAiBf,kBAXsB,CAYtB,aCJY,CFCZ,cAAA,CAGF,GCLE,mBAAA,CACA,6BAAA,CACA,eAQE,CAPF,gBAZa,CAab,gBAPoB,CAQpB,aCqCU,CD3BV,QAAA,CDPA,2CAHF,GCLE,mBAAA,CACA,6BAAA,CACA,eAkBE,CAjBF,cAba,CAcb,oBARoB,CASpB,aCqCU,CDjBV,QAAA,CAAA,CDZF,GCbE,mBAAA,CACA,6BAAA,CACA,eAkBE,CAjBF,cAba,CAcb,oBARoB,CASpB,aCqCU,CDjBV,QAAA,CDRF,GCjBE,mBAAA,CACA,6BAAA,CACA,eA4BE,CA3BF,gBAda,CAeb,gBAToB,CAUpB,aCqCU,CDPV,QAAA,CDdF,GCrBE,mBAAA,CACA,6BAAA,CACA,eAsCE,CArCF,iBAfa,CAgBb,mBAVoB,CAWpB,aCqCU,CDGV,QAAA",sourcesContent:["// https://www.joshwcomeau.com/css/custom-css-reset/\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  max-width: 100%;\n  height: auto;\n}\n\nvideo {\n  display: block;\n}\n\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n","@font-face {\n  font-weight: 400;\n  font-family: Mulish;\n  font-display: swap;\n  src: url('/fonts/Mulish-Regular.woff2') format('woff2');\n}\n\n@font-face {\n  font-weight: 500;\n  font-family: Mulish;\n  font-display: swap;\n  src: url('/fonts/Mulish-Medium.woff2') format('woff2');\n}\n\n@font-face {\n  font-weight: 700;\n  font-family: Mulish;\n  font-display: swap;\n  src: url('/fonts/Mulish-Bold.woff2') format('woff2');\n}\n\n@font-face {\n  font-weight: 800;\n  font-family: Mulish;\n  font-display: swap;\n  src: url('/fonts/Mulish-ExtraBold.woff2') format('woff2');\n}\n","@use '../settings/typography/content' as typography;\n@use '../settings/breakpoints';\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.lowercase {\n  text-transform: lowercase;\n}\n\n.no-margin {\n  margin: 0;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.has-text-left {\n  text-align: left;\n}\n\n.has-text-center {\n  text-align: center;\n}\n\n.has-text-right {\n  text-align: right;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.only-desktop {\n  @media only screen and (max-width: breakpoints.$large) {\n    display: none !important;\n  }\n}\n\n.only-mobile {\n  @media only screen and (min-width: calc(breakpoints.$large + 1px)) {\n    display: none !important;\n  }\n}\n","@use '../settings/typography/content' as typography;\n@use '../settings/breakpoints';\n\nhtml {\n  scroll-behavior: smooth;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n\nbody {\n  @include typography.body-regular-primary;\n  * {\n    scrollbar-width: thin;\n  }\n}\n\na {\n  @include typography.body-link;\n  cursor: default;\n}\n\nh1 {\n  @include typography.h1;\n\n  @media only screen and (max-width: breakpoints.$large) {\n    @include typography.h2;\n  }\n}\n\nh2 {\n  @include typography.h2;\n}\n\nh3 {\n  @include typography.h3;\n}\n\nh4 {\n  @include typography.h4;\n}\n","@use '../color_alias';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin typography-style($font-weight, $font-size, $line-height, $color) {\n  font-variant: normal;\n  font-family: Mulish, sans-serif;\n  font-weight: $font-weight;\n  font-size: $font-size;\n  line-height: $line-height;\n  color: $color;\n}\n\n@mixin h1 {\n  @include typography-style(\n    700,\n    $font-size-h1,\n    $font-line-height-h1,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h2 {\n  @include typography-style(\n    700,\n    $font-size-h2,\n    $font-line-height-h2,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h3 {\n  @include typography-style(\n    700,\n    $font-size-h3,\n    $font-line-height-h3,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h4 {\n  @include typography-style(\n    700,\n    $font-size-h4,\n    $font-line-height-h4,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-regular-secondary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin body-regular-disabled {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-400\n  );\n}\n\n@mixin body-regular-error {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$error-color-1000\n  );\n}\n\n@mixin body-regular-warning {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$warning-color-1000\n  );\n}\n\n@mixin body-underline {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$primary-color-600\n  );\n}\n\n@mixin body-medium {\n  @include typography-style(\n    500,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-bold {\n  @include typography-style(\n    700,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-extrabold {\n  @include typography-style(\n    800,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin footnote-primary {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin footnote-error {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$error-color-1000\n  );\n}\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/Changelog.mdx":["./src/stories/Changelog.mdx",126,741],"./stories/Colors.mdx":["./src/stories/Colors.mdx",126,237],"./stories/Icons.mdx":["./src/stories/Icons.mdx",126,368,565],"./stories/ProgrammersStartingGuide.mdx":["./src/stories/ProgrammersStartingGuide.mdx",126,864],"./stories/Welcome.mdx":["./src/stories/Welcome.mdx",126,419],"./stories/Workflow.mdx":["./src/stories/Workflow.mdx",126,574]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/Alert.stories":["./src/stories/Alert.stories.ts",106,368,11,815],"./stories/Alert.stories.ts":["./src/stories/Alert.stories.ts",106,368,11,815],"./stories/Badge.stories":["./src/stories/Badge.stories.ts",544],"./stories/Badge.stories.ts":["./src/stories/Badge.stories.ts",544],"./stories/Button.stories":["./src/stories/Button.stories.ts",106,368,11,791],"./stories/Button.stories.ts":["./src/stories/Button.stories.ts",106,368,11,791],"./stories/Card.stories":["./src/stories/Card.stories.js",106,368,11,561],"./stories/Card.stories.js":["./src/stories/Card.stories.js",106,368,11,561],"./stories/CardMenu.stories":["./src/stories/CardMenu.stories.js",106,368,872],"./stories/CardMenu.stories.js":["./src/stories/CardMenu.stories.js",106,368,872],"./stories/CardsTable.stories":["./src/stories/CardsTable.stories.js",106,368,11,411,760],"./stories/CardsTable.stories.js":["./src/stories/CardsTable.stories.js",106,368,11,411,760],"./stories/CardsTableList.stories":["./src/stories/CardsTableList.stories.ts",368,411,312],"./stories/CardsTableList.stories.ts":["./src/stories/CardsTableList.stories.ts",368,411,312],"./stories/Checkbox.stories":["./src/stories/Checkbox.stories.ts",208],"./stories/Checkbox.stories.ts":["./src/stories/Checkbox.stories.ts",208],"./stories/Collapsible.stories":["./src/stories/Collapsible.stories.js",368,722,29],"./stories/Collapsible.stories.js":["./src/stories/Collapsible.stories.js",368,722,29],"./stories/EmptyState.stories":["./src/stories/EmptyState.stories.js",106,368,11,285],"./stories/EmptyState.stories.js":["./src/stories/EmptyState.stories.js",106,368,11,285],"./stories/FloatingButton.stories":["./src/stories/FloatingButton.stories.ts",106,368,11,341],"./stories/FloatingButton.stories.ts":["./src/stories/FloatingButton.stories.ts",106,368,11,341],"./stories/IconButton.stories":["./src/stories/IconButton.stories.ts",106,368,11,404],"./stories/IconButton.stories.ts":["./src/stories/IconButton.stories.ts",106,368,11,404],"./stories/Input.stories":["./src/stories/Input.stories.ts",368,669],"./stories/Input.stories.ts":["./src/stories/Input.stories.ts",368,669],"./stories/Menu.stories":["./src/stories/Menu.stories.js",106,368,190],"./stories/Menu.stories.js":["./src/stories/Menu.stories.js",106,368,190],"./stories/Modal.stories":["./src/stories/Modal.stories.js",106,368,11,850],"./stories/Modal.stories.js":["./src/stories/Modal.stories.js",106,368,11,850],"./stories/Multiselect.stories":["./src/stories/Multiselect.stories.ts",368,638],"./stories/Multiselect.stories.ts":["./src/stories/Multiselect.stories.ts",368,638],"./stories/Pagination.stories":["./src/stories/Pagination.stories.js",106,368,11,311],"./stories/Pagination.stories.js":["./src/stories/Pagination.stories.js",106,368,11,311],"./stories/QuantitySelector.stories":["./src/stories/QuantitySelector.stories.ts",106,368,11,995],"./stories/QuantitySelector.stories.ts":["./src/stories/QuantitySelector.stories.ts",106,368,11,995],"./stories/Select.stories":["./src/stories/Select.stories.ts",368,722,707],"./stories/Select.stories.ts":["./src/stories/Select.stories.ts",368,722,707],"./stories/TextArea.stories":["./src/stories/TextArea.stories.ts",373],"./stories/TextArea.stories.ts":["./src/stories/TextArea.stories.ts",373],"./stories/Typography.stories":["./src/stories/Typography.stories.js",244],"./stories/Typography.stories.js":["./src/stories/Typography.stories.js",244]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__},"?c969":()=>{},"?3e83":()=>{},"?19e6":()=>{}},__webpack_require__=>{__webpack_require__.O(0,[122],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);