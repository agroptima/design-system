"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[312],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={};for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key)){if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./src/stories/CardsTableList.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NoSorting:()=>NoSorting,WithSorting:()=>WithSorting,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardsTableList_stories});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.A)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__("./src/atoms/CardsTable/CardsTable.scss");var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var atoms_CardsTable=__webpack_require__("./src/atoms/CardsTable/index.ts"),Icon=__webpack_require__("./src/atoms/Icon.tsx"),__jsx=react.createElement,Order=function(Order){return Order.Ascending="ascending",Order.Descending="descending",Order.None="none",Order}({});function CardsTableList(_ref){var headers=_ref.headers,rows=_ref.rows,summary=_ref.summary,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,_useState=(0,react.useState)((function(){var _headers$;return null!==(_headers$=headers[0])&&void 0!==_headers$&&_headers$.isSortable?{columnId:headers[0].columnId,order:Order.Ascending}:null})),sortState=_useState[0],setSortState=_useState[1];function checkColumnOrder(columnId){return(null==sortState?void 0:sortState.columnId)===columnId?sortState.order:Order.None}var sortedRows=null!=sortState&&sortState.columnId?function sortBy(_ref){var rows=_ref.rows,prop=_ref.prop,_ref$order=_ref.order,order=void 0===_ref$order?Order.Ascending:_ref$order,_ref$parse=_ref.parse,parse=void 0===_ref$parse?function(x){return x}:_ref$parse,sortOrder=order===Order.Descending?-1:1;return rows.sort((function(a,b){var result=0;return parse(a.columns[prop])<parse(b.columns[prop])&&(result=-1),parse(a.columns[prop])>parse(b.columns[prop])&&(result=1),result*sortOrder}))}({rows,prop:null==sortState?void 0:sortState.columnId,order:null==sortState?void 0:sortState.order}):rows;return __jsx(atoms_CardsTable.U$,{summary,variant},__jsx(atoms_CardsTable.Ic,null,__jsx(atoms_CardsTable.wv,null,headers.map((function(header){return __jsx(atoms_CardsTable.JU,{key:header.columnId,"aria-sort":checkColumnOrder(header.columnId),className:header.isSortable?"sortable":"",onClick:function onClick(){return function applySort(columnId){var _headers$find;null!==(_headers$find=headers.find((function(header){return header.columnId===columnId})))&&void 0!==_headers$find&&_headers$find.isSortable&&setSortState({columnId,order:checkColumnOrder(columnId)===Order.Ascending?Order.Descending:Order.Ascending})}(header.columnId)}},__jsx("div",{className:"container"},__jsx("div",null,__jsx("span",null,header.label),header.icon&&__jsx(Icon.I,{name:header.icon})),header.isSortable&&__jsx(Icon.I,{name:"Sorter",className:checkColumnOrder(header.columnId)})))})))),__jsx(atoms_CardsTable.uS,null,sortedRows.map((function(row){var cells=Object.entries(row.columns);return __jsx(atoms_CardsTable.wv,{key:row.id,isDisabled:row.isDisabled},cells.map((function(_ref2){var _ref3=_slicedToArray(_ref2,2),columnId=_ref3[0],value=_ref3[1];return __jsx(atoms_CardsTable.K0,{key:"".concat(row.id).concat(columnId)},value)})))}))))}CardsTableList.displayName="CardsTableList";try{CardsTableList.displayName="CardsTableList",CardsTableList.__docgenInfo={description:"",displayName:"CardsTableList",props:{headers:{defaultValue:null,description:"",name:"headers",required:!0,type:{name:"Header[]"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"Row[]"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/atoms/CardsTableList.tsx#CardsTableList"]={docgenInfo:CardsTableList.__docgenInfo,name:"CardsTableList",path:"src/atoms/CardsTableList.tsx#CardsTableList"})}catch(__react_docgen_typescript_loader_error){}var figmaPrimaryDesign={design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=2331-990&mode=dev"}};const CardsTableList_stories={title:"Design System/Atoms/Cards Table List",component:CardsTableList,tags:["autodocs"],argTypes:{variant:{description:"Select variant used"},summary:{description:"Summary of the table purpose and structure for assistive technologies"},headers:{description:"Array of values to be displayed on the headers. columnId value must match with rows columns ids."},rows:{description:"Array of values to be displayed as the data"}}};var WithSorting={args:{variant:"primary",summary:"Videogames companies contact information",headers:[{label:"Game title",icon:"Info",columnId:"name",isSortable:!0},{label:"Company address",icon:"Info",columnId:"address",isSortable:!1},{label:"Customer service email",columnId:"email",icon:"Info",isSortable:!0}],rows:[{id:"1",columns:{name:"Metal Gear Solid 5: The Phantom Pain",address:"Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku, Tokyo, 104-0061 Japan",email:"konami@fakemail.com"}},{id:"2",columns:{name:"The Witcher 3",address:"CD PROJEKT S.A. ul. Jagiellońska 74 03-301 Warszawa Poland",email:"cdprojekt@fakemail.com"}},{id:"3",isDisabled:!0,columns:{name:"Tekken 8",address:"Bandai Namco Studios Inc. ; Address: 2-37-25 Eitai, Koto-ku, Tokyo 135-0034, Japan",email:"namco@fakemail.com"}}]},parameters:figmaPrimaryDesign},NoSorting={args:{variant:"primary",summary:"Videogames companies contact information",headers:[{label:"Game title",icon:"Info",columnId:"name"},{label:"Company address",icon:"Info",columnId:"address"},{label:"Customer service email",columnId:"email",icon:"Info"}],rows:[{id:"1",columns:{name:"Metal Gear Solid 5: The Phantom Pain",address:"Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku, Tokyo, 104-0061 Japan",email:"konami@fakemail.com"}},{id:"2",columns:{name:"The Witcher 3",address:"CD PROJEKT S.A. ul. Jagiellońska 74 03-301 Warszawa Poland",email:"cdprojekt@fakemail.com"}},{id:"3",isDisabled:!0,columns:{name:"Tekken 8",address:"Bandai Namco Studios Inc. ; Address: 2-37-25 Eitai, Koto-ku, Tokyo 135-0034, Japan",email:"namco@fakemail.com"}}]},parameters:figmaPrimaryDesign};WithSorting.parameters={...WithSorting.parameters,docs:{...WithSorting.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    summary: 'Videogames companies contact information',\n    headers: [{\n      label: 'Game title',\n      icon: 'Info',\n      columnId: 'name',\n      isSortable: true\n    }, {\n      label: 'Company address',\n      icon: 'Info',\n      columnId: 'address',\n      isSortable: false\n    }, {\n      label: 'Customer service email',\n      columnId: 'email',\n      icon: 'Info',\n      isSortable: true\n    }],\n    rows: [{\n      id: '1',\n      columns: {\n        name: 'Metal Gear Solid 5: The Phantom Pain',\n        address: 'Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku, Tokyo, 104-0061 Japan',\n        email: 'konami@fakemail.com'\n      }\n    }, {\n      id: '2',\n      columns: {\n        name: 'The Witcher 3',\n        address: 'CD PROJEKT S.A. ul. Jagiellońska 74 03-301 Warszawa Poland',\n        email: 'cdprojekt@fakemail.com'\n      }\n    }, {\n      id: '3',\n      isDisabled: true,\n      columns: {\n        name: 'Tekken 8',\n        address: 'Bandai Namco Studios Inc. ; Address: 2-37-25 Eitai, Koto-ku, Tokyo 135-0034, Japan',\n        email: 'namco@fakemail.com'\n      }\n    }]\n  },\n  parameters: figmaPrimaryDesign\n}",...WithSorting.parameters?.docs?.source}}},NoSorting.parameters={...NoSorting.parameters,docs:{...NoSorting.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    summary: 'Videogames companies contact information',\n    headers: [{\n      label: 'Game title',\n      icon: 'Info',\n      columnId: 'name'\n    }, {\n      label: 'Company address',\n      icon: 'Info',\n      columnId: 'address'\n    }, {\n      label: 'Customer service email',\n      columnId: 'email',\n      icon: 'Info'\n    }],\n    rows: [{\n      id: '1',\n      columns: {\n        name: 'Metal Gear Solid 5: The Phantom Pain',\n        address: 'Konami Digital Entertainment Co., Ltd. 1-11-1, Ginza, Chuo-ku, Tokyo, 104-0061 Japan',\n        email: 'konami@fakemail.com'\n      }\n    }, {\n      id: '2',\n      columns: {\n        name: 'The Witcher 3',\n        address: 'CD PROJEKT S.A. ul. Jagiellońska 74 03-301 Warszawa Poland',\n        email: 'cdprojekt@fakemail.com'\n      }\n    }, {\n      id: '3',\n      isDisabled: true,\n      columns: {\n        name: 'Tekken 8',\n        address: 'Bandai Namco Studios Inc. ; Address: 2-37-25 Eitai, Koto-ku, Tokyo 135-0034, Japan',\n        email: 'namco@fakemail.com'\n      }\n    }]\n  },\n  parameters: figmaPrimaryDesign\n}",...NoSorting.parameters?.docs?.source}}};const __namedExportsOrder=["WithSorting","NoSorting"]},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);