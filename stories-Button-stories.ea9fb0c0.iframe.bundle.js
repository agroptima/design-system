"use strict";(self.webpackChunkagroptima_design_system=self.webpackChunkagroptima_design_system||[]).push([[791],{"./src/stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Info:()=>Info,Link:()=>Link,Neutral:()=>Neutral,Primary:()=>Primary,PrimaryGhost:()=>PrimaryGhost,PrimaryOutlined:()=>PrimaryOutlined,PrimaryWithLeftIcon:()=>PrimaryWithLeftIcon,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const figmaPrimaryDesign={design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=3-2&mode=design&t=uwWgYrzYS3TAXDOH-4"}},__WEBPACK_DEFAULT_EXPORT__={title:"Design System/Atoms/Button",component:__webpack_require__("./src/atoms/Button/index.ts").$n,tags:["autodocs"],args:{label:"Button"},argTypes:{label:{description:"Button text content"},accessibilityLabel:{description:"Describes the button action. If empty, label content will be used"},variant:{description:"Button variant used from a list of values"},disabled:{description:"Is the button in disabled state?"},loading:{description:"Is the button in loading state?"},leftIcon:{description:"Button left icon from a list of values",control:{type:"select"}},rightIcon:{description:"Button right icon from a list of values",control:{type:"select"}},href:{description:"If a link is provided, the component will be rendered as NextLink, otherwise as button"},visible:{description:"Is the button visible?",control:{type:"boolean",default:!0}}}},Link={args:{variant:"primary",disabled:!1,loading:!1,href:"link.com"},parameters:figmaPrimaryDesign},Primary={args:{variant:"primary",disabled:!1,loading:!1,accessibilityLabel:"Triggers a custom action"},parameters:figmaPrimaryDesign},PrimaryWithLeftIcon={args:{variant:"primary",disabled:!1,leftIcon:"AngleLeft"},parameters:figmaPrimaryDesign},PrimaryOutlined={args:{variant:"primary-outlined",disabled:!1},parameters:figmaPrimaryDesign},PrimaryGhost={args:{variant:"primary-ghost",disabled:!1},parameters:figmaPrimaryDesign},Neutral={args:{variant:"neutral",disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=778-2737&mode=dev"}}},Error={args:{variant:"error",disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=778-1787&mode=dev"}}},Success={args:{variant:"success",disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=778-1466&mode=dev"}}},Warning={args:{variant:"warning",disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=778-2527&mode=dev"}}},Info={args:{variant:"info",disabled:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=778-2206&mode=dev"}}},__namedExportsOrder=["Link","Primary","PrimaryWithLeftIcon","PrimaryOutlined","PrimaryGhost","Neutral","Error","Success","Warning","Info"];Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    disabled: false,\n    loading: false,\n    href: 'link.com'\n  },\n  parameters: figmaPrimaryDesign\n}",...Link.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    disabled: false,\n    loading: false,\n    accessibilityLabel: 'Triggers a custom action'\n  },\n  parameters: figmaPrimaryDesign\n}",...Primary.parameters?.docs?.source}}},PrimaryWithLeftIcon.parameters={...PrimaryWithLeftIcon.parameters,docs:{...PrimaryWithLeftIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    disabled: false,\n    leftIcon: 'AngleLeft'\n  },\n  parameters: figmaPrimaryDesign\n}",...PrimaryWithLeftIcon.parameters?.docs?.source}}},PrimaryOutlined.parameters={...PrimaryOutlined.parameters,docs:{...PrimaryOutlined.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary-outlined',\n    disabled: false\n  },\n  parameters: figmaPrimaryDesign\n}",...PrimaryOutlined.parameters?.docs?.source}}},PrimaryGhost.parameters={...PrimaryGhost.parameters,docs:{...PrimaryGhost.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary-ghost',\n    disabled: false\n  },\n  parameters: figmaPrimaryDesign\n}",...PrimaryGhost.parameters?.docs?.source}}},Neutral.parameters={...Neutral.parameters,docs:{...Neutral.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'neutral',\n    disabled: false\n  },\n  parameters: figmaNeutralDesign\n}",...Neutral.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'error',\n    disabled: false\n  },\n  parameters: figmaErrorDesign\n}",...Error.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'success',\n    disabled: false\n  },\n  parameters: figmaSuccessDesign\n}",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'warning',\n    disabled: false\n  },\n  parameters: figmaWarningDesign\n}",...Warning.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'info',\n    disabled: false\n  },\n  parameters: figmaInfoDesign\n}",...Info.parameters?.docs?.source}}}}}]);