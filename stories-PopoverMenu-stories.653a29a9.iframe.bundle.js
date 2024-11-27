"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[355],{"./src/stories/PopoverMenu.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Menu:()=>Menu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_atoms_Popover__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/atoms/Popover/index.ts"));const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/PopoverMenu",component:_atoms_Popover__WEBPACK_IMPORTED_MODULE_2__.yA,tags:["autodocs"],argTypes:{variant:{description:"Component variant used"},title:{description:"Component title text"},disabled:{description:"Is the component disabled?"},active:{description:"Is the component active?"}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=3200-3749&m=dev"}}},Menu={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_atoms_Popover__WEBPACK_IMPORTED_MODULE_2__.Ni,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms_Popover__WEBPACK_IMPORTED_MODULE_2__.yA,{active:!0,href:"#",variant:"primary",title:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms_Popover__WEBPACK_IMPORTED_MODULE_2__.yA,{href:"#",variant:"primary",title:"Change password"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_atoms_Popover__WEBPACK_IMPORTED_MODULE_2__.yA,{disabled:!0,href:"#",variant:"primary",title:"Logout"})]})},__namedExportsOrder=["Menu"];Menu.parameters={...Menu.parameters,docs:{...Menu.parameters?.docs,source:{originalSource:'{\n  render: () => <PopoverMenu>\n      <PopoverMenuOption active href="#" variant="primary" title="Profile" />\n      <PopoverMenuOption href="#" variant="primary" title="Change password" />\n      <PopoverMenuOption disabled href="#" variant="primary" title="Logout" />\n    </PopoverMenu>\n}',...Menu.parameters?.docs?.source}}}},"./src/atoms/Popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AM:()=>Popover_Popover_Popover,Ni:()=>PopoverMenu,yA:()=>PopoverMenuOption});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),useOutsideClick=__webpack_require__("./src/utils/useOutsideClick.ts"),classNames=__webpack_require__("./src/utils/classNames.ts"),useOpen=__webpack_require__("./src/utils/useOpen.ts"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Popover=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Popover/Popover.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Popover.A,options);Popover.A&&Popover.A.locals&&Popover.A.locals;function Popover_Popover_Popover({renderButton,position="left",children}){const{isOpen,close,open,toggle}=(0,useOpen.i)(),popoverRef=(0,react.useRef)(null);return(0,useOutsideClick.j)(popoverRef,close),(0,jsx_runtime.jsxs)("div",{className:"popover-container",ref:popoverRef,children:[renderButton({isOpen,close,open,toggle}),isOpen&&(0,jsx_runtime.jsx)("div",{className:(0,classNames.x)("popover-menu-container",position),onClick:close,children})]})}try{Popover_Popover_Popover.displayName="Popover",Popover_Popover_Popover.__docgenInfo={description:"",displayName:"Popover",props:{renderButton:{defaultValue:null,description:"",name:"renderButton",required:!0,type:{name:"(props: { isOpen: boolean; close: () => void; open: () => void; toggle: () => void; }) => ReactNode"}},position:{defaultValue:{value:"left"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Popover/Popover.tsx#Popover"]={docgenInfo:Popover_Popover_Popover.__docgenInfo,name:"Popover",path:"src/atoms/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}function PopoverMenu({children,className,...props}){const cssClasses=(0,classNames.x)("popover-menu",className);return(0,jsx_runtime.jsx)("div",{role:"menu",className:cssClasses,...props,children})}try{PopoverMenu.displayName="PopoverMenu",PopoverMenu.__docgenInfo={description:"",displayName:"PopoverMenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Popover/PopoverMenu.tsx#PopoverMenu"]={docgenInfo:PopoverMenu.__docgenInfo,name:"PopoverMenu",path:"src/atoms/Popover/PopoverMenu.tsx#PopoverMenu"})}catch(__react_docgen_typescript_loader_error){}var next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);function PopoverMenuOption({variant="primary",className,title,disabled,href,active,...props}){const cssClasses=(0,classNames.x)("popover-menu-option",variant,className,{disabled,active});return(0,jsx_runtime.jsx)(link_default(),{role:"menuitem",className:cssClasses,href:disabled?"#":href,"aria-disabled":disabled,...props,children:(0,jsx_runtime.jsx)("span",{className:"title",children:title})})}try{PopoverMenuOption.displayName="PopoverMenuOption",PopoverMenuOption.__docgenInfo={description:"",displayName:"PopoverMenuOption",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.",name:"href",required:!0,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).",name:"as",required:!1,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props), [`getServerSideProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props) or [`getInitialProps`](/docs/pages/api-reference/functions/get-initial-props).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean"}},passHref:{defaultValue:null,description:"Forces `Link` to send the `href` property to its child.\n@defaultValue `false`",name:"passHref",required:!1,type:{name:"boolean"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be prefetched.\nPrefetch can be disabled by passing `prefetch={false}`. Prefetching is only enabled in production.\n\nIn App Router:\n- `null` (default): For statically generated pages, this will prefetch the full React Server Component data. For dynamic pages, this will prefetch up to the nearest route segment with a [`loading.js`](https://nextjs.org/docs/app/api-reference/file-conventions/loading) file. If there is no loading file, it will not fetch the full tree to avoid fetching too much data.\n- `true`: This will prefetch the full React Server Component data for all route segments, regardless of whether they contain a segment with `loading.js`.\n- `false`: This will not prefetch any data, even on hover.\n\nIn Pages Router:\n- `true` (default): The full route & its data will be prefetched.\n- `false`: Prefetching will not happen when entering the viewport, but will still happen on hover.\n@defaultValue `true` (pages router) or `null` (app router)",name:"prefetch",required:!1,type:{name:"boolean | null"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false"}},legacyBehavior:{defaultValue:null,description:"Enable legacy link behavior.\n@defaultValue `false`\n@see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7",name:"legacyBehavior",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement>"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/Popover/PopoverMenuOption.tsx#PopoverMenuOption"]={docgenInfo:PopoverMenuOption.__docgenInfo,name:"PopoverMenuOption",path:"src/atoms/Popover/PopoverMenuOption.tsx#PopoverMenuOption"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>classNames});const classNames=(...classNames)=>{const resultClasses=[];return classNames.forEach((className=>{if(void 0!==className)return"string"==typeof className?resultClasses.push(className):void Object.keys(className).forEach((key=>{Boolean(className[key])&&resultClasses.push(key)}))})),resultClasses.join(" ")}},"./src/utils/useOpen.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useOpen});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useOpen(){const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return{isOpen,open:()=>setIsOpen(!0),close:()=>setIsOpen(!1),toggle:()=>setIsOpen(!isOpen)}}},"./src/utils/useOutsideClick.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useOutsideClick(ref,callback){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{function handleClickOutside(event){const target=event.target;if(!target||!target.isConnected)return;ref.current&&!ref.current.contains(target)&&callback()}return document.addEventListener("mousedown",handleClickOutside,!0),()=>{document.removeEventListener("mousedown",handleClickOutside,!0)}}),[ref,callback])}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[4]!./src/atoms/Popover/Popover.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".popover-container{pointer-events:none;position:relative}.popover-container>*{pointer-events:auto}.popover-container .popover-menu-container{position:absolute;white-space:nowrap;margin-top:8px;z-index:1}.popover-container .popover-menu-container.left{left:0}.popover-container .popover-menu-container.right{right:0}.popover-container .popover-menu-container.center{left:50%;transform:translateX(-50%)}.popover-menu{display:flex;flex-direction:column;justify-content:flex-start;box-shadow:0px 3px 6px -4px rgba(0,0,0,.12),0px 6px 16px 0px rgba(0,0,0,.08),0px 9px 28px 8px rgba(0,0,0,.05)}.popover-menu .popover-menu-option{font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#161c26;display:flex;width:100%;padding:8px 12px 8px 12px;border-radius:2px;text-decoration:none;cursor:default}.popover-menu .popover-menu-option:hover{text-decoration:none}.popover-menu .popover-menu-option.primary{background:#fff}.popover-menu .popover-menu-option.primary.active{background-color:rgba(0,0,0,0)}.popover-menu .popover-menu-option.primary:not(.disabled):hover{background:#ffedee}.popover-menu .popover-menu-option.primary.disabled{background:#f3f3f5;font-variant:normal;font-family:Mulish,sans-serif;font-weight:400;font-size:1rem;line-height:1.5rem;color:#959ba7}","",{version:3,sources:["webpack://./src/atoms/Popover/Popover.scss","webpack://./src/settings/_config.scss","webpack://./src/settings/_depth.scss","webpack://./src/settings/typography/_content.scss","webpack://./src/settings/_colors.scss"],names:[],mappings:"AAKA,mBACE,mBAAA,CACA,iBAAA,CACA,qBACE,mBAAA,CAEF,2CACE,iBAAA,CACA,kBAAA,CACA,cCVO,CDWP,SERiB,CFSjB,gDACE,MAAA,CAEF,iDACE,OAAA,CAEF,kDACE,QAAA,CACA,0BAAA,CAKN,cACE,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,6GACE,CAIF,mCGtBA,mBAAA,CACA,6BAAA,CACA,eAgDE,CA/CF,cAhBe,CAiBf,kBAXsB,CAYtB,aCqCU,CJlBR,YAAA,CACA,UAAA,CACA,yBAAA,CACA,iBC3BgB,CD4BhB,oBAAA,CACA,cAAA,CAEA,yCACE,oBAAA,CAGF,2CACE,eInDO,CJqDP,kDACE,8BAAA,CAGF,gEACE,kBIpCK,CJuCP,oDACE,kBIKE,CDpDR,mBAAA,CACA,6BAAA,CACA,eAkEE,CAjEF,cAhBe,CAiBf,kBAXsB,CAYtB,aC2CS",sourcesContent:["@use '../../settings/color_alias';\n@use '../../settings/typography/content' as typography;\n@use '../../settings/config';\n@use '../../settings/depth';\n\n.popover-container {\n  pointer-events: none;\n  position: relative;\n  > * {\n    pointer-events: auto;\n  }\n  .popover-menu-container {\n    position: absolute;\n    white-space: nowrap;\n    margin-top: config.$space-2x;\n    z-index: depth.$z-popover;\n    &.left {\n      left: 0;\n    }\n    &.right {\n      right: 0;\n    }\n    &.center {\n      left: 50%;\n      transform: translateX(-50%);\n    }\n  }\n}\n\n.popover-menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  box-shadow:\n    0px 3px 6px -4px rgba(0, 0, 0, 0.12),\n    0px 6px 16px 0px rgba(0, 0, 0, 0.08),\n    0px 9px 28px 8px rgba(0, 0, 0, 0.05);\n\n  .popover-menu-option {\n    @include typography.body-regular-primary;\n    display: flex;\n    width: 100%;\n    padding: config.$space-2x config.$space-3x config.$space-2x config.$space-3x;\n    border-radius: config.$corner-radius-xxs;\n    text-decoration: none;\n    cursor: default;\n\n    &:hover {\n      text-decoration: none;\n    }\n\n    &.primary {\n      background: color_alias.$neutral-white;\n\n      &.active {\n        background-color: transparent;\n      }\n\n      &:not(.disabled):hover {\n        background: color_alias.$primary-color-50;\n      }\n\n      &.disabled {\n        background: color_alias.$neutral-color-50;\n        @include typography.body-regular-disabled;\n      }\n    }\n  }\n}\n","// Pending to clean the non-used agroptima variables and -bodegas from the name\n/* Variables  */\n$space-halfx: 2px;\n$space-1x: 4px;\n$space-2x: 8px;\n$space-3x: 12px;\n$space-4x: 16px;\n$space-5x: 20px;\n$space-6x: 24px;\n$space-7x: 28px;\n$space-8x: 32px;\n$space-9x: 36px;\n$space-10x: 40px;\n\n$corner-radius-m: 8px;\n$corner-radius-xxl: 100px;\n$corner-radius-xxs: 2px;\n\n$icon-size-1x: 4px;\n$icon-size-2x: 8px;\n$icon-size-3x: 12px;\n$icon-size-4x: 16px;\n$icon-size-5x: 20px;\n$icon-size-6x: 24px;\n$icon-size-7x: 28px;\n$icon-size-8x: 32px;\n\n$breakpoints-small: 375px;\n$breakpoints-medium: 900px;\n$breakpoints-large: 1200px;\n","// Source: https://www.smashingmagazine.com/2021/02/css-z-index-large-projects/\n\n// Utils\n$base: 0;\n$above: 1; // use this for all values above the base\n$below: -1; // and this for all values below the base\n\n$z-dropdown-options: $base + $above;\n$z-popover: $z-dropdown-options;\n$z-alert-container: $z-dropdown-options + $above;\n$z-modal: $z-alert-container + $above;\n$z-aside-desktop: $base + $above;\n$z-aside-mobile: $z-modal + $above;\n","@use '../color_alias';\n\n$font-size-footnote: 0.875rem;\n$font-size-body: 1rem;\n$font-size-h4: 1.25rem;\n$font-size-h3: 1.5rem;\n$font-size-h2: 2rem;\n$font-size-h1: 2.5rem;\n$font-line-height-footnote: 1.375rem;\n$font-line-height-body: 1.5rem;\n$font-line-height-h4: 1.75rem;\n$font-line-height-h3: 2rem;\n$font-line-height-h2: 2.375rem;\n$font-line-height-h1: 3rem;\n\n@mixin typography-style($font-weight, $font-size, $line-height, $color) {\n  font-variant: normal;\n  font-family: Mulish, sans-serif;\n  font-weight: $font-weight;\n  font-size: $font-size;\n  line-height: $line-height;\n  color: $color;\n}\n\n@mixin h1 {\n  @include typography-style(\n    700,\n    $font-size-h1,\n    $font-line-height-h1,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h2 {\n  @include typography-style(\n    700,\n    $font-size-h2,\n    $font-line-height-h2,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h3 {\n  @include typography-style(\n    700,\n    $font-size-h3,\n    $font-line-height-h3,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin h4 {\n  @include typography-style(\n    700,\n    $font-size-h4,\n    $font-line-height-h4,\n    color_alias.$neutral-color-1000\n  );\n  margin: 0;\n}\n\n@mixin body-regular-primary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-regular-secondary {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin body-regular-disabled {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-400\n  );\n}\n\n@mixin body-regular-error {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$error-color-1000\n  );\n}\n\n@mixin body-regular-warning {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$warning-color-1000\n  );\n}\n\n@mixin body-underline {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n  text-decoration-line: underline;\n}\n\n@mixin body-link {\n  @include typography-style(\n    400,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$primary-color-600\n  );\n}\n\n@mixin body-medium {\n  @include typography-style(\n    500,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-bold {\n  @include typography-style(\n    700,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin body-extrabold {\n  @include typography-style(\n    800,\n    $font-size-body,\n    $font-line-height-body,\n    color_alias.$neutral-color-1000\n  );\n}\n\n@mixin footnote-primary {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$neutral-color-600\n  );\n}\n\n@mixin footnote-error {\n  @include typography-style(\n    400,\n    $font-size-footnote,\n    $font-line-height-footnote,\n    color_alias.$error-color-1000\n  );\n}\n","/* Variables  */\n$white-1000: #ffffffff;\n$red-1000: #ff4d4fff;\n$red-50: #ffeeebff;\n$red-100: #ffcbc3ff;\n$red-200: #ffa99eff;\n$red-300: #ff867dff;\n$red-400: #ff6561ff;\n$red-500: #f34549ff;\n$red-600: #db2836ff;\n$red-700: #bd0b27ff;\n$red-800: #9c001cff;\n$red-900: #780314ff;\n$magenta-1000: #ff005bff;\n$magenta-900: #820023ff;\n$magenta-800: #a9002fff;\n$magenta-700: #cc003cff;\n$magenta-600: #eb004dff;\n$magenta-500: #ff1e60ff;\n$magenta-400: #ff5077ff;\n$magenta-300: #ff7990ff;\n$magenta-200: #ffa1adff;\n$magenta-100: #ffc7ccff;\n$magenta-50: #ffedeeff;\n$green-1000: #6fb62eff;\n$green-900: #154300ff;\n$green-800: #195800ff;\n$green-700: #246d00ff;\n$green-600: #388200ff;\n$green-500: #519708ff;\n$green-400: #6dab34ff;\n$green-300: #8cbf5bff;\n$green-200: #acd285ff;\n$green-100: #cde5b3ff;\n$green-50: #eff6e5ff;\n$dodger-blue-1000: #1890ffff;\n$orange-1000: #ffa940ff;\n$dodger-blue-900: #003a7bff;\n$dodger-blue-800: #004da1ff;\n$dodger-blue-700: #0060c2ff;\n$dodger-blue-600: #0074deff;\n$dodger-blue-500: #0087f3ff;\n$dodger-blue-400: #4f9cffff;\n$dodger-blue-300: #7db1ffff;\n$dodger-blue-200: #a6c6ffff;\n$dodger-blue-100: #cbdcffff;\n$dodger-blue-50: #eef3ffff;\n$orange-900: #5a2e00ff;\n$orange-800: #753d00ff;\n$orange-700: #8f4e00ff;\n$orange-600: #a86100ff;\n$orange-500: #c07500ff;\n$orange-400: #d58b2eff;\n$orange-300: #e7a255ff;\n$orange-200: #f5bb81ff;\n$orange-100: #fdd6b0ff;\n$orange-50: #fff1e4ff;\n$black-1000: #000000ff;\n$grey-1000: #161c26ff;\n$grey-900: #353941ff;\n$grey-800: #464c55ff;\n$grey-700: #595f6aff;\n$grey-600: #6c727fff;\n$grey-500: #808793ff;\n$grey-400: #959ba7ff;\n$grey-300: #acb1bbff;\n$grey-200: #c3c7cfff;\n$grey-100: #dadde2ff;\n$grey-50: #f3f3f5ff;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);