"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[336],{"./src/atoms/CardsTable/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U$:()=>CardsTable_CardsTable,uS:()=>CardsTableBody,K0:()=>CardsTableCell,Ic:()=>CardsTableHead,JU:()=>CardsTableHeader,wv:()=>CardsTableRow});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),classNames=__webpack_require__("./src/utils/classNames.ts");__webpack_require__("./src/atoms/CardsTable/CardsTable.scss");function CardsTable_CardsTable(param){let{className,summary,variant="primary",children,...props}=param;const cssClasses=(0,classNames.x)("cards-table-list",variant,className);return(0,jsx_runtime.jsx)("table",{summary,role:"table",className:cssClasses,...props,children})}CardsTable_CardsTable.__docgenInfo={description:"",methods:[],displayName:"CardsTable",props:{variant:{required:!1,tsType:{name:"literal",value:"'primary'"},description:"",defaultValue:{value:"'primary'",computed:!1}}}};var Alignment;__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function CardsTableHead(param){let{children,...props}=param;return(0,jsx_runtime.jsx)("thead",{role:"rowgroup",...props,children})}function CardsTableCell(param){let{noWrap=!1,actions=!1,titleWithActions=0,align="left",children,className,...props}=param;const titleActions=titleWithActions>0?"title-actions-".concat(titleWithActions):"",cssClasses=(0,classNames.x)("cell","alignment-".concat(align),titleActions,className,{"no-wrap":noWrap,actions});return(0,jsx_runtime.jsx)("td",{role:"cell",className:cssClasses,...props,children})}function CardsTableHeader(param){let{children,className,align=Alignment.Left,actions=!1,...props}=param;const cssClasses=(0,classNames.x)("header","alignment-".concat(align),className,{actions});return(0,jsx_runtime.jsx)("th",{scope:"col",role:"columnheader",className:cssClasses,...props,children})}function CardsTableRow(param){let{isDisabled:disabled=!1,isActive:active=!1,children,...props}=param;return(0,jsx_runtime.jsx)("tr",{role:"row",className:(0,classNames.x)("row",{disabled,active,action:Boolean(props.onClick)}),...props,children})}function CardsTableBody(param){let{children,...props}=param;return(0,jsx_runtime.jsx)("tbody",{role:"rowgroup",...props,children})}CardsTableHead.__docgenInfo={description:"",methods:[],displayName:"CardsTableHead"},function(Alignment){Alignment.Left="left",Alignment.Right="right",Alignment.Center="center"}(Alignment||(Alignment={})),CardsTableCell.__docgenInfo={description:"",methods:[],displayName:"CardsTableCell",props:{noWrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},align:{required:!1,tsType:{name:"Alignment"},description:"",defaultValue:{value:"Alignment.Left",computed:!0}},actions:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},titleWithActions:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}},CardsTableHeader.__docgenInfo={description:"",methods:[],displayName:"CardsTableHeader",props:{align:{required:!1,tsType:{name:"Alignment"},description:"",defaultValue:{value:"Alignment.Left",computed:!0}},actions:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}},CardsTableRow.__docgenInfo={description:"",methods:[],displayName:"CardsTableRow",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}},CardsTableBody.__docgenInfo={description:"",methods:[],displayName:"CardsTableBody"}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/CardsTable/CardsTable.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import'https://fonts.googleapis.com/css2?family=Mulish:wght@200..1000&display=swap';.cards-table-list{display:flex;flex-direction:column;gap:12px}.cards-table-list tbody{display:flex;flex-direction:column;gap:12px}.cards-table-list tbody tr{box-shadow:0px 0px 3px 0px rgba(0,0,0,.25)}.cards-table-list tr{display:flex;flex-grow:1}.cards-table-list .container{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%}.cards-table-list th{padding:8px 12px;text-align:left}.cards-table-list th.sortable{cursor:pointer}.cards-table-list th .icon{width:12px;height:12px;margin-left:4px}.cards-table-list th .icon>svg{width:100%;height:100%}.cards-table-list .no-wrap{white-space:nowrap}.cards-table-list .alignment-left{justify-content:flex-start}.cards-table-list .alignment-center{justify-content:center}.cards-table-list .actions{display:flex;gap:28px}.cards-table-list.primary thead>tr{font-variant:normal;font-weight:400;font-family:Mulish,sans-serif;color:#161c26;font-size:1rem;line-height:1.5rem;font-weight:500;color:#161c26;color:#fff}.cards-table-list.primary th{background:#353941}.cards-table-list.primary th .icon>svg{fill:#fff}.cards-table-list.primary th .icon>svg path{fill:#fff}.cards-table-list.primary th .icon.ascending>svg .sorter_svg__up{fill:#eb004d}.cards-table-list.primary th .icon.ascending>svg .sorter_svg__down{fill:#fff}.cards-table-list.primary th .icon.descending>svg .sorter_svg__up{fill:#fff}.cards-table-list.primary th .icon.descending>svg .sorter_svg__down{fill:#eb004d}.cards-table-list.primary th:first-child{border-radius:2px 0px 0px 2px}.cards-table-list.primary th:last-child{border-radius:0px 2px 2px 0px}.cards-table-list.primary tr{border:1px solid rgba(0,0,0,0)}.cards-table-list.primary tr td{font-variant:normal;font-weight:400;font-family:Mulish,sans-serif;color:#161c26;font-size:1rem;line-height:1.5rem;color:#161c26;overflow:hidden}.cards-table-list.primary tr:not(.disabled):hover{background:#ffedee}.cards-table-list.primary tr>td:first-child{font-variant:normal;font-weight:400;font-family:Mulish,sans-serif;color:#161c26;font-size:1rem;line-height:1.5rem;font-weight:700;color:#161c26}.cards-table-list.primary tr.disabled{background:#f3f3f5}.cards-table-list.primary tr.disabled td{font-variant:normal;font-weight:400;font-family:Mulish,sans-serif;color:#161c26;font-size:1rem;line-height:1.5rem;color:#959ba7}.cards-table-list.primary tr.active{border-color:#ff005b;box-shadow:none}.cards-table-list.primary tr.action{cursor:default}.cards-table-list thead{display:flex}.cards-table-list tr{flex-direction:row}.cards-table-list th,.cards-table-list td{display:flex;justify-content:flex-start;align-items:center;flex:2}.cards-table-list td{padding:8px 12px}.cards-table-list th.actions{justify-content:center;flex:1}.cards-table-list td.actions{order:0;justify-content:center;flex:1}.cards-table-list td:has(.badge){gap:8px}.cards-table-list .alignment-right{justify-content:flex-end}@media only screen and (max-width: 1200px){.cards-table-list thead{display:none}.cards-table-list tbody tr{flex-direction:row;flex-wrap:wrap;position:relative;gap:4px;padding:8px 12px}.cards-table-list td{width:100%;flex:inherit;padding:0px}.cards-table-list td:first-child{order:-2;margin-bottom:8px}.cards-table-list .title-actions-3{width:calc(100% - 60px - 56px - 8px)}.cards-table-list .title-actions-2{width:calc(100% - 40px - 28px - 8px)}.cards-table-list .title-actions-1{width:calc(100% - 20px - 8px)}.cards-table-list td.actions{order:-1;flex-grow:1;margin-bottom:8px;justify-content:flex-end;flex-basis:content}.cards-table-list .badge{position:absolute;inset:auto 12px 12px auto}.cards-table-list .alignment-right{justify-content:flex-start}}","",{version:3,sources:["webpack://./src/settings/typography/_content.scss","webpack://./src/atoms/CardsTable/CardsTable.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/_colors.scss","webpack://./src/settings/typography/_cards_table.scss"],names:[],mappings:"AACQ,oFAAA,CCIR,kBACE,YAAA,CACA,qBAAA,CACA,QCJS,CDMT,wBACE,YAAA,CACA,qBAAA,CACA,QCTO,CDWP,2BACE,0CAAA,CAIJ,qBACE,YAAA,CACA,WAAA,CAGF,6BACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,kBAAA,CACA,UAAA,CAGF,qBACE,gBAAA,CACA,eAAA,CAEA,8BACE,cAAA,CAGF,2BACE,UCnBS,CDoBT,WCpBS,CDqBT,eC1CK,CD2CL,+BACE,UAAA,CACA,WAAA,CAKN,2BACE,kBAAA,CAGF,kCACE,0BAAA,CAGF,oCACE,sBAAA,CAGF,2BACE,YAAA,CACA,QCzDO,CD6DP,mCDrDF,mBAAA,CACA,eAAA,CACA,6BAAA,CACA,aGsCU,CHrCV,cAjBe,CAkBf,kBAZsB,CAyFtB,eAAA,CACA,aG1CU,CCrDV,UDJW,CFyET,6BACE,kBEhBK,CFmBH,uCACE,SE9EG,CF+EH,4CACE,SEhFC,CFsFD,iEACE,YEvEA,CFyEF,mEACE,SE1FD,CFiGD,kEACE,SElGD,CFoGD,oEACE,YErFA,CF4FV,yCACE,6BAAA,CAGF,wCACE,6BAAA,CAGF,6BACE,8BAAA,CACA,gCDtGJ,mBAAA,CACA,eAAA,CACA,6BAAA,CACA,aGsCU,CHrCV,cAjBe,CAkBf,kBAZsB,CAqDtB,aGLU,CF+DJ,eAAA,CAIJ,kDACE,kBEvGO,CF0GT,4CDhHF,mBAAA,CACA,eAAA,CACA,6BAAA,CACA,aGsCU,CHrCV,cAjBe,CAkBf,kBAZsB,CA+FtB,eAAA,CACA,aGhDU,CF2ER,sCACE,kBElEI,CFoEJ,yCDvHJ,mBAAA,CACA,eAAA,CACA,6BAAA,CACA,aGsCU,CHrCV,cAjBe,CAkBf,kBAZsB,CA+DtB,aGTS,CF4EP,oCACE,oBEhIS,CFiIT,eAAA,CAEF,oCACE,cAAA,CAKJ,wBACE,YAAA,CAEF,qBACE,kBAAA,CAGF,0CAEE,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,MAAA,CAGF,qBACE,gBAAA,CAGF,6BACE,sBAAA,CACA,MAAA,CAGF,6BACE,OAAA,CACA,sBAAA,CACA,MAAA,CAGF,iCACE,OClLO,CDqLT,mCACE,wBAAA,CAKF,2CACE,wBACE,YAAA,CAIA,2BACE,kBAAA,CACA,cAAA,CACA,iBAAA,CACA,OCtMG,CDuMH,gBAAA,CAIJ,qBACE,UAAA,CACA,YAAA,CACA,WAAA,CAGF,iCACE,QAAA,CACA,iBClNK,CDqNP,mCACE,oCAAA,CAEF,mCACE,oCAAA,CAEF,mCACE,6BAAA,CAGF,6BACE,QAAA,CACA,WAAA,CACA,iBClOK,CDmOL,wBAAA,CACA,kBAAA,CAGF,yBACE,iBAAA,CACA,yBAAA,CAGF,mCACE,0BAAA,CAAA",sourcesContent:["@use '../color_alias';\n@import 'https://fonts.googleapis.com/css2?family=Mulish:wght@200..1000&display=swap';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin base {\n  font-variant: normal;\n  font-weight: 400;\n  font-family: Mulish, sans-serif;\n  color: color_alias.$neutral-color-1000;\n  font-size: $font-size-body;\n  line-height: $font-line-height-body;\n}\n\n@mixin h1 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: $font-size-h1;\n  line-height: $font-line-height-h1;\n  margin: 0;\n}\n\n@mixin h2 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: $font-size-h2;\n  line-height: $font-line-height-h2;\n  margin: 0;\n}\n\n@mixin h3 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: $font-size-h3;\n  line-height: $font-line-height-h3;\n  margin: 0;\n}\n\n@mixin h4 {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n  font-size: $font-size-h4;\n  line-height: $font-line-height-h4;\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include base;\n  color: color_alias.$neutral-color-1000;\n}\n\n@mixin body-regular-secondary {\n  @include base;\n  color: color_alias.$neutral-color-600;\n}\n\n@mixin body-regular-disabled {\n  @include base;\n  color: color_alias.$neutral-color-400;\n}\n\n@mixin body-regular-error {\n  @include base;\n  color: color_alias.$error-color-1000;\n}\n\n@mixin body-regular-warning {\n  @include base;\n  color: color_alias.$warning-color-1000;\n}\n\n@mixin body-underline {\n  @include base;\n  color: color_alias.$neutral-color-1000;\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include base;\n  color: color_alias.$primary-color-600;\n}\n\n@mixin body-medium {\n  @include base;\n  font-weight: 500;\n  color: color_alias.$neutral-color-1000;\n}\n\n@mixin body-bold {\n  @include base;\n  font-weight: 700;\n  color: color_alias.$neutral-color-1000;\n}\n\n@mixin body-extrabold {\n  @include base;\n  font-weight: 800;\n  color: color_alias.$neutral-color-1000;\n}\n\n@mixin footnote-primary {\n  @include base;\n  color: color_alias.$neutral-color-600;\n  font-size: $font-size-footnote;\n  line-height: $font-line-height-footnote;\n}\n\n@mixin footnote-error {\n  @include base;\n  color: color_alias.$error-color-1000;\n  font-size: $font-size-footnote;\n  line-height: $font-line-height-footnote;\n}\n","@use '../../settings/color_alias';\n@use '../../settings/typography/cards_table' as typography;\n@use '../../settings/config';\n@use '../../settings/breakpoints';\n\n.cards-table-list {\n  display: flex;\n  flex-direction: column;\n  gap: config.$space-3x;\n\n  tbody {\n    display: flex;\n    flex-direction: column;\n    gap: config.$space-3x;\n\n    tr {\n      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  tr {\n    display: flex;\n    flex-grow: 1;\n  }\n\n  .container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n\n  th {\n    padding: config.$space-2x config.$space-3x;\n    text-align: left;\n\n    &.sortable {\n      cursor: pointer;\n    }\n\n    .icon {\n      width: config.$icon-size-3x;\n      height: config.$icon-size-3x;\n      margin-left: config.$space-1x;\n      > svg {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n\n  .no-wrap {\n    white-space: nowrap;\n  }\n\n  .alignment-left {\n    justify-content: flex-start;\n  }\n\n  .alignment-center {\n    justify-content: center;\n  }\n\n  .actions {\n    display: flex;\n    gap: config.$space-7x;\n  }\n\n  &.primary {\n    thead > tr {\n      @include typography.cards-table-list-header;\n    }\n\n    th {\n      background: color_alias.$neutral-color-900;\n\n      .icon {\n        > svg {\n          fill: color_alias.$neutral-white;\n          path {\n            fill: color_alias.$neutral-white;\n          }\n        }\n\n        &.ascending {\n          > svg {\n            .sorter_svg__up {\n              fill: color_alias.$primary-color-600;\n            }\n            .sorter_svg__down {\n              fill: color_alias.$neutral-white;\n            }\n          }\n        }\n\n        &.descending {\n          > svg {\n            .sorter_svg__up {\n              fill: color_alias.$neutral-white;\n            }\n            .sorter_svg__down {\n              fill: color_alias.$primary-color-600;\n            }\n          }\n        }\n      }\n    }\n\n    th:first-child {\n      border-radius: config.$corner-radius-xxs 0px 0px config.$corner-radius-xxs;\n    }\n\n    th:last-child {\n      border-radius: 0px config.$corner-radius-xxs config.$corner-radius-xxs 0px;\n    }\n\n    tr {\n      border: 1px solid transparent;\n      td {\n        @include typography.cards-table-list-text;\n        overflow: hidden;\n      }\n    }\n\n    tr:not(.disabled):hover {\n      background: color_alias.$primary-color-50;\n    }\n\n    tr > td:first-child {\n      @include typography.cards-table-list-highlight-text;\n    }\n\n    tr.disabled {\n      background: color_alias.$neutral-color-50;\n\n      td {\n        @include typography.cards-table-list-disabled-text;\n      }\n    }\n    tr.active {\n      border-color: color_alias.$primary-color-1000;\n      box-shadow: none;\n    }\n    tr.action {\n      cursor: default;\n    }\n  }\n\n  // Desktop\n  thead {\n    display: flex;\n  }\n  tr {\n    flex-direction: row;\n  }\n\n  th,\n  td {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex: 2;\n  }\n\n  td {\n    padding: config.$space-2x config.$space-3x;\n  }\n\n  th.actions {\n    justify-content: center;\n    flex: 1;\n  }\n\n  td.actions {\n    order: 0;\n    justify-content: center;\n    flex: 1;\n  }\n\n  td:has(.badge) {\n    gap: config.$space-2x;\n  }\n\n  .alignment-right {\n    justify-content: flex-end;\n  }\n\n  // Media queries\n  // Mobile & tablet cases\n  @media only screen and (max-width: breakpoints.$large) {\n    thead {\n      display: none;\n    }\n\n    tbody {\n      tr {\n        flex-direction: row;\n        flex-wrap: wrap;\n        position: relative;\n        gap: config.$space-1x;\n        padding: config.$space-2x config.$space-3x;\n      }\n    }\n\n    td {\n      width: 100%;\n      flex: inherit;\n      padding: 0px;\n    }\n\n    td:first-child {\n      order: -2;\n      margin-bottom: config.$space-2x;\n    }\n\n    .title-actions-3 {\n      width: calc(100% - 3 * config.$icon-size-5x - 2 * config.$space-7x - 8px);\n    }\n    .title-actions-2 {\n      width: calc(100% - 2 * config.$icon-size-5x - 1 * config.$space-7x - 8px);\n    }\n    .title-actions-1 {\n      width: calc(100% - 1 * config.$icon-size-5x - 8px);\n    }\n\n    td.actions {\n      order: -1;\n      flex-grow: 1;\n      margin-bottom: config.$space-2x;\n      justify-content: flex-end;\n      flex-basis: content;\n    }\n\n    .badge {\n      position: absolute;\n      inset: auto config.$space-3x config.$space-3x auto;\n    }\n\n    .alignment-right {\n      justify-content: flex-start;\n    }\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-halfx: 2px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-3x: 12px;\n$icon-size-2x: 8px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n","@use '../color_alias';\n@use './content';\n\n@mixin cards-table-list-header {\n  @include content.body-medium;\n  color: color_alias.$neutral-white;\n}\n\n@mixin cards-table-list-highlight-text {\n  @include content.body-bold;\n}\n\n@mixin cards-table-list-text {\n  @include content.body-regular-primary;\n}\n\n@mixin cards-table-list-disabled-text {\n  @include content.body-regular-disabled;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/atoms/CardsTable/CardsTable.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_CardsTable_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/CardsTable/CardsTable.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_CardsTable_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_CardsTable_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_CardsTable_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_14_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_14_use_4_CardsTable_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);