(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8oDB":function(e,t,a){"use strict";var r=a("u/xb");a.n(r).a},AAfK:function(e,t,a){var r=a("kY03");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("SZ7m").default)("169bd46e",r,!1,{})},Iv2j:function(e,t,a){(e.exports=a("JPst")(!1)).push([e.i,"\n.key-dialog[data-v-3639a935] {\r\n    margin-top: 10px;\n}\n.dialog-footer[data-v-3639a935] {\r\n    text-align: right;\r\n    margin-right: -5px;\r\n    padding-bottom: 20px;\n}\n.radio-key[data-v-3639a935] {\r\n    cursor: context-menu;\r\n    font-size: 14px;\n}\n.base-span-key[data-v-3639a935] {\r\n    margin-left: 8px;\r\n    color: #00122c;\n}\n.pub-key[data-v-3639a935] {\r\n    margin-left: 30px;\n}\n.riv-key[data-v-3639a935] {\r\n    margin-left: 50px;\n}\n.divide-line[data-v-3639a935] {\r\n    border: 1px solid #e7ebf0;\r\n    margin-left: 30px;\r\n    width: 514px;\r\n    margin-top: 15px;\r\n    margin-bottom: 25px;\n}\r\n",""])},JZK7:function(e,t,a){"use strict";a.r(t);var r=a("s7y5"),n=a("uF/N");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("8oDB");var i=a("KHd+"),o=Object(i.a)(n.default,r.a,r.b,!1,null,"3639a935",null);o.options.__file="src/views/rivateKeyManagement/components/creatUser.vue",t.default=o.exports},LjWc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(a("qse9")),n=o(a("JZK7")),s=a("mHBk"),i=o(a("p5Bo"));function o(e){return e&&e.__esModule?e:{default:e}}t.default={name:"RivateKeyManagement",components:{"v-contentHead":r.default,"v-creatUser":n.default},data:function(){return{userName:this.$route.query.userName||"",loading:!1,currentPage:1,pageSize:10,total:0,rivateKeyList:[],rivateKeyHead:[{enName:"userName",name:"用户名称"},{enName:"userId",name:"用户ID"},{enName:"description",name:"用户描述"},{enName:"address",name:"用户公钥地址信息"},{enName:"userStatus",name:"用户状态"},{enName:"operate",name:"操作"}],tdWidth:{publicKey:450},disabled:!1}},mounted:function(){"admin"===localStorage.getItem("root")?this.disabled=!1:this.disabled=!0,this.getUserInfoData()},methods:{changGroup:function(){this.getUserInfoData()},getUserInfoData:function(){var e=this;this.loading=!0;var t={groupId:localStorage.getItem("groupId"),pageNumber:this.currentPage,pageSize:this.pageSize},a={userParam:this.userName.replace(/^\s+|\s+$/g,"")};(0,s.getUserList)(t,a).then(function(t){e.loading=!1,0===t.data.code?(e.rivateKeyList=t.data.data||[],e.total=t.data.totalCount):e.$message({type:"error",message:i.default.errCode[t.data.code].cn})}).catch(function(t){e.loading=!1,e.$message({type:"error",message:"系统错误！"})})},search:function(){this.getUserInfoData()},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getUserInfoData()},handleCurrentChange:function(e){this.currentPage=e,this.getUserInfoData()},creatUserInfo:function(){},creatUserClose:function(){this.getUserInfoData()},bindUserClose:function(){this.getUserInfoData()},handleClose:function(){this.$refs.creatUser.modelClose()},modifyDescription:function(e){var t=this;this.$prompt("请输入用户描述","",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(a){var r=a.value;t.userDescriptionInfo(r,e)}).catch(function(){t.$message({type:"info",message:"取消"})})},userDescriptionInfo:function(e,t){var a=this,r={userId:t.userId,description:e};(0,s.getUserDescription)(r).then(function(e){0==e.data.code?(a.getUserInfoData(),a.$message({type:"success",message:"修改用户成功"})):a.$message({type:"error",message:i.default.errCode[e.data.code].cn})}).catch(function(e){a.$message({type:"error",message:"修改失败！"})})},copyPubilcKey:function(e){var t=this;e?this.$copyText(e).then(function(e){t.$message({type:"success",showClose:!0,message:"复制成功",duration:2e3})}):this.$message({type:"fail",showClose:!0,message:"key为空，不复制。",duration:2e3})},userStatus:function(e){var t="";switch(e){case 1:t="正常";break;case 2:t="停用";break;default:t="正常"}return t},statusColor:function(e){var t="";switch(e){case 1:t="#58cb7d";break;case 2:t="#ed5454";break;default:t="#58cb7d"}return t}}}},Qxxu:function(e,t,a){"use strict";a.r(t);var r=a("LjWc"),n=a.n(r);for(var s in r)"default"!==s&&function(e){a.d(t,e,function(){return r[e]})}(s);t.default=n.a},YUMh:function(e,t,a){"use strict";a.r(t);var r=a("sxul"),n=a("Qxxu");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("rYv6");var i=a("KHd+"),o=Object(i.a)(n.default,r.a,r.b,!1,null,"117650a5",null);o.options.__file="src/views/rivateKeyManagement/rivateKeyManagement.vue",t.default=o.exports},kY03:function(e,t,a){(e.exports=a("JPst")(!1)).push([e.i,'/*\r\n * Copyright 2014-2019 the original author or authors.\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the "License");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *      http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an "AS IS" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\n.search-part[data-v-117650a5] {\r\n    padding: 30px 41px 18px 42px;\r\n    overflow: hidden;\n}\n.search-part[data-v-117650a5]::after {\r\n    display: block;\r\n    content: "";\r\n    clear: both;\n}\n.search-part-left[data-v-117650a5] {\r\n    float: left;\n}\n.search-part-left-btn[data-v-117650a5] {\r\n    border-radius: 20px;\n}\n.search-part-right[data-v-117650a5] {\r\n    float: right;\n}\n.input-with-select[data-v-117650a5] .el-input__inner {\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    border: 1px solid #eaedf3;\r\n    -webkit-box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\r\n            box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n}\n.input-with-select[data-v-117650a5] .el-input-group__append {\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    -webkit-box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\r\n            box-shadow: 0 3px 11px 0 rgba(159, 166, 189, 0.11);\n}\n.input-with-select[data-v-117650a5] .el-button {\r\n    border: 1px solid #20D4D9;\r\n    border-radius: inherit;\r\n    background: #20D4D9;\r\n    color: #fff;\n}\n.search-table[data-v-117650a5] {\r\n    padding: 0 40px 0 41px;\n}\n.copy-public-key[data-v-117650a5] {\r\n    margin-right: 5px;\n}\n.dialog-wrapper[data-v-117650a5] .el-dialog__title {\r\n    font-size: 18px;\r\n    color: #36393d;\r\n    font-weight: bold;\r\n    letter-spacing: 0.5px;\n}\n.dialog-wrapper[data-v-117650a5] .el-dialog__body {\r\n    padding-top: 10px;\r\n    padding-bottom: 0;\n}\n.dialog-wrapper[data-v-117650a5] .el-form-item__label {\r\n    font-size: 12px;\r\n    color: #00122c;\n}\n.dialog-wrapper[data-v-117650a5] .el-form-item {\r\n    margin-bottom: 20px;\n}\n.dialog-wrapper[data-v-117650a5] .el-dialog__footer {\r\n    padding-top: 0;\n}\n.dialog-wrapper[data-v-117650a5] .el-button {\r\n    padding: 10px 20px;\n}\n.dialog-wrapper[data-v-117650a5] .el-input__inner {\r\n    height: 36px;\r\n    line-height: 36px;\r\n    border-radius: 2px;\r\n    color: #00122c;\n}\n.dialog-wrapper[data-v-117650a5] .el-dialog__header {\r\n    padding-top: 30px;\r\n    padding-left: 50px;\n}\n.grayColor[data-v-117650a5]{\r\n    color: #666 !important\n}\r\n',""])},rYv6:function(e,t,a){"use strict";var r=a("AAfK");a.n(r).a},s7y5:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"key-dialog"},[a("div",{staticClass:"text-center"},[a("el-radio-group",{on:{change:e.changeKey},model:{value:e.timeGranularity,callback:function(t){e.timeGranularity=t},expression:"timeGranularity"}},[a("el-radio",{attrs:{label:"RIV"}},[e._v("私钥用户")]),e._v(" "),a("el-radio",{attrs:{label:"PUB"}},[e._v("公钥用户")])],1)],1),e._v(" "),a("div",{staticClass:"divide-line"}),e._v(" "),a("el-form",{ref:"userForm",staticClass:"demo-ruleForm",attrs:{model:e.userForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{staticStyle:{width:"546px"},attrs:{label:"用户名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入用户名称",maxlength:"12"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),e._v(" "),e.pubKey?a("el-form-item",{staticStyle:{width:"546px"},attrs:{label:"公钥信息",prop:"publicKey"}},[a("el-input",{attrs:{placeholder:"请输入公钥信息或公钥地址"},model:{value:e.userForm.publicKey,callback:function(t){e.$set(e.userForm,"publicKey",t)},expression:"userForm.publicKey"}})],1):e._e(),e._v(" "),a("el-form-item",{staticStyle:{width:"546px"},attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",maxlength:"120",placeholder:"120个字符以内"},model:{value:e.userForm.explain,callback:function(t){e.$set(e.userForm,"explain",t)},expression:"userForm.explain"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer"},[a("el-button",{on:{click:e.modelClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.submit("userForm")}}},[e._v("确 定")])],1)],1)},n=[];r._withStripped=!0,a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n})},sxul:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rivate-key-management-wrapper"},[a("v-contentHead",{attrs:{headTitle:"用户查看"},on:{changGroup:e.changGroup}}),e._v(" "),a("div",{staticClass:"module-wrapper"},[a("div",{staticClass:"search-part"},[e.disabled?e._e():a("div",{staticClass:"search-part-left"},[a("el-button",{staticClass:"search-part-left-btn",attrs:{type:"primary"},on:{click:function(t){return e.$store.dispatch("switch_creat_user_dialog")}}},[e._v("新增用户")])],1),e._v(" "),a("div",{staticClass:"search-part-right"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入用户名或公钥地址"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1)]),e._v(" "),a("div",{staticClass:"search-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.rivateKeyList,"tooltip-effect":"dark"}},e._l(e.rivateKeyHead,function(t){return a("el-table-column",{key:t.enName,attrs:{label:t.name,"show-overflow-tooltip":"",width:e.tdWidth[t.enName]||"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return["operate"!=t.enName?["userStatus"===t.enName?a("span",{style:{color:e.statusColor(r.row[t.enName])}},[e._v(e._s(e.userStatus(r.row[t.enName])))]):"address"===t.enName?a("span",[a("i",{staticClass:"wbs-icon-copy font-12 copy-public-key",attrs:{title:"复制公钥"},on:{click:function(a){return e.copyPubilcKey(r.row[t.enName])}}}),e._v("\n                                "+e._s(r.row[t.enName])+"\n                            ")]):"userId"===t.enName?a("span",[a("el-tooltip",{attrs:{content:1==r.row.hasPk?"私钥":"公钥",placement:"top",effect:"dark"}},[a("i",{staticClass:"wbs-icon-key-b font-12",style:{color:1==r.row.hasPk?"#FFC31F":"#4F9DFF"}})]),e._v("\n                                "+e._s(r.row[t.enName])+"\n                            ")],1):a("span",[e._v(e._s(r.row[t.enName]))])]:[a("el-button",{class:{grayColor:e.disabled},attrs:{disabled:e.disabled,type:"text",size:"small"},on:{click:function(t){return e.modifyDescription(r.row)}}},[e._v("修改")])]]}}],null,!0)})}),1),e._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]),e._v(" "),e.$store.state.creatUserVisible?a("el-dialog",{staticClass:"dialog-wrapper",attrs:{visible:e.$store.state.creatUserVisible,title:"新建用户",width:"621px","append-to-body":!0,center:""},on:{"update:visible":function(t){return e.$set(e.$store.state,"creatUserVisible",t)}}},[a("v-creatUser",{ref:"creatUser",on:{creatUserClose:e.creatUserClose,bindUserClose:e.bindUserClose}})],1):e._e()],1)},n=[];r._withStripped=!0,a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n})},"u/xb":function(e,t,a){var r=a("Iv2j");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a("SZ7m").default)("4901117c",r,!1,{})},"uF/N":function(e,t,a){"use strict";a.r(t);var r=a("yLdP"),n=a.n(r);for(var s in r)"default"!==s&&function(e){a.d(t,e,function(){return r[e]})}(s);t.default=n.a},yLdP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a("P2sY")),n=a("mHBk"),s=i(a("p5Bo"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"AddUser",data:function(){return{loading:!1,pubKey:!1,rivKey:!0,userForm:{name:"",explain:"",publicKey:""},timeGranularity:"RIV",rules:{name:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:1,max:12,message:"长度在 1 到 12 个字符",trigger:"blur"}],publicKey:[{required:!0,message:"请输入公钥信息",trigger:"blur"}]},groupId:localStorage.getItem("groupId")}},methods:{changeKey:function(){var e=this.timeGranularity;switch(this.userForm={name:"",explain:"",publicKey:""},e){case"PUB":this.pubKey=!0,this.rivKey=!1;break;case"RIV":this.pubKey=!1,this.rivKey=!0}},modelClose:function(){this.userForm=(0,r.default)({name:"",publicKey:"",explain:""}),this.pubKey=!0,this.loading=!1,this.$store.state.creatUserVisible=!1},submit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$confirm("确认提交？",{center:!0}).then(function(){t.loading=!0,t.pubKey?t.getBindUser():t.addUser()}).catch(function(){t.modelClose()})})},addUser:function(){var e=this,t={groupId:this.groupId,userName:this.userForm.name,description:this.userForm.explain||""};(0,n.getAddUser)(t).then(function(t){e.loading=!1,0===t.data.code?(e.$emit("success"),e.$message({type:"success",message:"添加用户成功"}),e.$emit("creatUserClose"),e.modelClose()):(e.modelClose(),e.$message({type:"error",message:s.default.errCode[t.data.code].cn}))}).catch(function(t){e.$message({type:"error",message:"添加用户失败！"}),e.modelClose()})},getBindUser:function(){var e=this,t={userName:this.userForm.name,publicKey:this.userForm.publicKey,groupId:this.groupId,description:this.userForm.explain||""};(0,n.bindUser)(t).then(function(t){e.loading=!1,0==t.data.code?(e.$message({type:"success",message:"添加用户成功"}),e.$emit("bindUserClose"),e.modelClose()):(e.modelClose(),e.$message({type:"error",message:s.default.errCode[t.data.code].cn}))}).catch(function(t){e.modelClose(),e.$message({type:"error",message:"添加用户失败！"})})}}}}}]);