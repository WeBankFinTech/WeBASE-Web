(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3xwS":function(t,a,e){"use strict";var s=e("WxMk");e.n(s).a},WxMk:function(t,a,e){},d7gD:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"over-view-wrapper"},[e("v-content-head",{attrs:{headTitle:"数据概览"}}),t._v(" "),e("div",{staticStyle:{"margin-bottom":"12px"}},[e("el-row",[e("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingNumber,expression:"loadingNumber"}],attrs:{xs:24,sm:24,md:11,lg:10,xl:8}},[e("el-row",{staticClass:"module-box-shadow bg-fff",staticStyle:{padding:"0 20px 20px 0",margin:"8px"}},t._l(t.detailsList,function(a,s){return e("el-col",{key:s,attrs:{xs:12,sm:12,md:12,lg:12,xl:12}},[e("div",{staticClass:"overview-number cursor-pointer",style:{background:""+a.color},on:{click:function(e){return t.goDetailRouter(a)}}},[e("div",{staticClass:"part1-content-amount"},[e("span",{staticClass:"font-14"},[t._v(t._s(a.label))])]),t._v(" "),e("div",{staticClass:"font-color-8798ad text-right",staticStyle:{"margin-top":"10px"}},[e("span",{staticClass:"font-color-2e384d font-24"},[t._v(t._s(t.numberFormat(a.value,0,".",",")))])])])])}),1)],1),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,md:13,lg:14,xl:16}},[e("div",{staticClass:"module-box-shadow bg-fff",staticStyle:{margin:"8px 8px 0 8px"}},[e("div",{staticClass:"part2-title"},[e("span",{staticClass:"part2-title-left"},[t._v("关键监控指标")]),t._v(" "),e("span",{staticClass:"part2-title-right"},[t._v("最近有交易的7天交易量（笔）")])]),t._v(" "),e("div",{ref:"chart",staticClass:"chart"},[t.chartStatistics.show?e("v-chart",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingCharts,expression:"loadingCharts"}],ref:"linechart",attrs:{id:"homeId",data:t.chartStatistics.date,transactionDataArr:t.chartStatistics.dataArr,size:t.chartStatistics.chartSize}}):t._e()],1)])])],1)],1),t._v(" "),e("div",{staticClass:"module-wrapper-small",staticStyle:{padding:"30px 31px 26px 32px"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingNodes,expression:"loadingNodes"}],staticClass:"search-table-content",attrs:{data:t.nodeData}},t._l(t.nodeHead,function(a){return e("el-table-column",{key:a.enName,attrs:{label:a.name,"show-overflow-tooltip":"",align:""},scopedSlots:t._u([{key:"default",fn:function(s){return[["nodeActive"===a.enName?e("span",[e("i",{staticClass:"wbs-icon-radio font-6",style:{color:t.textColor(s.row[a.enName])}}),t._v(" "+t._s(t.nodesStatus(s.row[a.enName]))+"\n                        ")]):"nodeIp"===a.enName?e("span",[e("router-link",{staticClass:"node-ip",attrs:{to:{path:"hostDetail",query:{nodeIp:s.row.nodeIp,nodeId:s.row.nodeId}}}},[t._v(t._s(s.row[a.enName]))])],1):e("span",[t._v(t._s(s.row[a.enName]))])]]}}],null,!0)})}),1)],1),t._v(" "),e("div",{staticStyle:{"min-width":"540px",margin:"8px 8px 0px 9px"}},[e("el-row",{attrs:{gutter:16}},[e("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[e("div",{staticClass:"overview-wrapper"},[e("p",[e("span",{staticClass:"overview-title"},[t._v("区块")]),t._v(" "),e("span",{staticClass:"overview-more cursor-pointer",on:{click:function(a){return t.goRouter("blocks")}}},[t._v("更多")])]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingBlock,expression:"loadingBlock"}],staticClass:"overview-item-base"},t._l(t.blockData,function(a){return e("div",{staticClass:"block-item font-color-2e384d"},[e("div",{staticClass:"block-amount"},[e("span",[e("router-link",{staticClass:"node-ip",attrs:{to:{path:"transactionInfo",query:{blockNumber:a.blockNumber}}}},[t._v("块高 "+t._s(a.blockNumber))])],1),t._v(" "),e("span",{staticClass:"font-color-8798ad"},[t._v(t._s(a.blockTimestamp))])]),t._v(" "),e("div",[e("div",{staticClass:"block-miner"},[e("span",[t._v("出块者")]),t._v(" "),e("p",{attrs:{title:""+a.miner}},[t._v(t._s(a.miner))])])])])}),0)])]),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[e("div",{staticClass:"overview-wrapper"},[e("p",[e("span",{staticClass:"overview-title"},[t._v("交易")]),t._v(" "),e("span",{staticClass:"overview-more cursor-pointer",on:{click:function(a){return t.goRouter("transactions")}}},[t._v("更多")])]),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingTransaction,expression:"loadingTransaction"}],staticClass:"overview-item-base"},t._l(t.transactionList,function(a){return e("div",{staticClass:"block-item font-color-2e384d"},[e("div",{staticClass:"block-amount"},[e("p",{staticClass:"trans-hash",attrs:{title:""+a.transHash}},[e("router-link",{staticClass:"node-ip",attrs:{to:{path:"transactionInfo",query:{blockNumber:a.transHash}}}},[t._v(t._s(a.transHash))])],1),t._v(" "),e("span",{staticClass:"font-color-8798ad"},[t._v(t._s(a.blockTimestamp))])])])}),0)])])],1)],1)],1)};s._withStripped=!0;var o=e("qse9"),i=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticStyle:{"padding-left":"30px","padding-bottom":"2px","marin-bottom":"12px"}},[a("div",{staticStyle:{height:"200px",margin:"0 auto"},attrs:{id:this.chartId}})])};i._withStripped=!0;var n=e("YEIV"),r=e.n(n),c=e("ProS");e("75ce"),e("Ynxi"),e("AH3D"),e("zRKj"),e("0o9m"),e("Cm0C");var l={name:"charts",props:["type","id","data","transactionDataArr","size"],data:function(){return{chartId:this.id,chartData:this.data,chartTransactionDataArr:this.transactionDataArr,chartSize:this.size,chart:""}},watch:{data:function(){this.chartId=this.id,this.chartData=this.data,this.chartTransactionDataArr=this.transactionDataArr,this.chartSize=this.size,this.chartShow()}},mounted:function(){this.$nextTick(function(){this.chartShow()})},beforeDestroy:function(){window.onresize=null,this.chart&&this.chart.dispose()},methods:{chartShow:function(){var t,a=this;this.chart=c.init(document.getElementById(this.chartId));this.chartData.length;var e={legend:{height:this.chartSize.height,width:this.chartSize.width},tooltip:{show:!0,trigger:"axis",formatter:function(t){return'<span style="font-size:10px">'+t[0].name+'</span><br><table ><tr><td style="padding:0"><span style="font-size:10px;color:white">交易量：'+t[0].value+"笔</a></span><br></td></tr></table>"}},grid:{left:43,right:33,top:7,bottom:40},series:[(t={type:"line",symbolSize:1,itemStyle:{normal:{color:"#2878ff",lineStyle:{color:"#2878ff"}}}},r()(t,"symbolSize",5),r()(t,"data",this.chartTransactionDataArr),t)],xAxis:{data:this.chartData,axisLine:{lineStyle:{color:"#e9e9e9",width:2}},axisLabel:{interval:1,textStyle:{color:"rgba(0,14,31,0.62)"}}},yAxis:{axisLine:{show:!1,lineStyle:{color:"#333"}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#e9e9e9"}},axisTick:{show:!1},axisLabel:{formatter:function(t,a){return t>1e3&&t<1e6?t/1e3+"K":t>1e6||1e6===t?t/1e6+"M":t+""},textStyle:{color:"rgba(0,14,31,0.62)"}}}};this.chart.setOption(e,!0),window.onresize=function(){a.chart.resize()}}}},d=e("KHd+"),h=Object(d.a)(l,i,[],!1,null,null,null);h.options.__file="src/views/home/components/chart.vue";var u=h.exports,m=e("mHBk"),p=e("DgvE"),v=e("oYx3"),g=e("p5Bo"),f={name:"home",components:{"v-content-head":o.a,"v-chart":u},data:function(){return{loadingNumber:!1,loadingCharts:!1,loadingNodes:!1,loadingBlock:!1,loadingTransaction:!1,numberFormat:p.g,detailsList:[{label:"节点个数",name:"nodeCount",value:0,color:"#8693f3"},{label:"已部署的智能合约",name:"contractCount",value:0,color:"#bc8dee"},{label:"区块数量",name:"latestBlock",value:0,color:"#ffa897"},{label:"交易数量",name:"transactionCount",value:0,color:"#89c3f8"}],networkDetails:null,chartStatistics:{show:!1,date:[],dataArr:[],chartSize:{width:0,height:0}},reloadNumber:!0,networkId:localStorage.getItem("networkId"),nodeHead:[{enName:"orgName",name:"机构名称"},{enName:"nodeName",name:"节点名称"},{enName:"blockNumber",name:"块高"},{enName:"pbftView",name:"pbftView"},{enName:"nodeIp",name:"ip"},{enName:"p2pPort",name:"p2p端口"},{enName:"rpcPort",name:"rpc端口"},{enName:"nodeActive",name:"状态"}],nodeData:[],blockData:[],transactionList:[]}},mounted:function(){this.networkId=localStorage.getItem("networkId"),this.getNetworkDetails(),this.getNodeTable(),this.getBlockList(),this.getTransaction(),this.$nextTick(function(){this.chartStatistics.chartSize.width=this.$refs.chart.offsetWidth,this.chartStatistics.chartSize.height=this.$refs.chart.offsetHeight,this.getChart()})},destroyed:function(){},methods:{getNetworkDetails:function(){var t=this;this.loadingNumber=!0;var a=this.networkId;Object(m.s)(a).then(function(a){t.loadingNumber=!1,0===a.data.code?t.detailsList.forEach(function(t,e){for(var s in a.data.data)t.name===s&&(t.value=a.data.data[s])}):t.$message({type:"error",message:g.a.errCode[a.data.code].cn})}).catch(function(a){t.$message({type:"error",message:"系统错误！"})})},getChart:function(){var t=this;this.loadingCharts=!0,this.chartStatistics.show=!1,this.chartStatistics.date=[],this.chartStatistics.dataArr=[];var a=localStorage.getItem("networkId");Object(m.o)(a).then(function(a){if(t.loadingCharts=!1,0===a.data.code){for(var e=Object(p.a)(a.data.data),s=0;s<e.length;s++)t.chartStatistics.date.push(e[s].day),t.chartStatistics.dataArr.push(e[s].transCount);t.$set(t.chartStatistics,"show",!0)}else t.$message({type:"error",message:g.a.errCode[a.data.code].cn})}).catch(function(a){t.$message({type:"error",message:"系统错误！"})})},getNodeTable:function(){var t=this;this.loadingNodes=!0;var a=localStorage.getItem("networkId"),e={networkId:a,pageNumber:1,pageSize:4};Object(m.t)(e,{}).then(function(a){t.loadingNodes=!1,0===a.data.code?(t.total=a.data.totalCount,t.nodeData=a.data.data||[],t.nodeData.forEach(function(t,a){0===t.status?t.value="运行":1===t.status&&(t.value="停止")})):t.$message({message:g.a.errCode[a.data.code].cn,type:"error",duration:2e3})}).catch(function(a){t.$message({message:"查询失败！",type:"error",duration:2e3})})},getBlockList:function(){var t=this;this.loadingBlock=!0;var a={networkId:localStorage.getItem("networkId"),pageNumber:1,pageSize:6};Object(m.m)(a,{}).then(function(a){t.loadingBlock=!1,0===a.data.code?t.blockData=a.data.data:t.$message({message:g.a.errCode[a.data.code].cn,type:"error",duration:2e3})}).catch(function(a){t.$message({message:"系统错误！",type:"error",duration:2e3})})},getTransaction:function(){var t=this;this.loadingTransaction=!0;var a={networkId:localStorage.getItem("networkId"),pageNumber:1,pageSize:6};Object(m.u)(a,{}).then(function(a){t.loadingTransaction=!1,0===a.data.code?t.transactionList=a.data.data:t.$message({message:g.a.errCode[a.data.code].cn,type:"error",duration:2e3})}).catch(function(a){t.$message.error("系统错误")})},goDetailRouter:function(t){switch(t.name){case"latestBlock":v.a.push("blockInfo");break;case"transactionCount":v.a.push("transactionInfo");break;case"nodeCount":v.a.push({path:"group",query:{from:"home"}});break;case"contractCount":v.a.push({path:"contract",query:{from:"home"}})}},bindSvg:function(t){var a="";switch(t.name){case"orgCount":a="#wbs-icon-h-group";break;case"nodeCount":a="#wbs-icon-h-nodes";break;case"contractCount":a="#wbs-icon-h-deploy";break;case"latestBlock":a="#wbs-icon-h-block";break;case"transactionCount":a="#wbs-icon-transaction"}return a},textColor:function(t){var a="";switch(t){case 1:a="#58cb7d";break;case 2:a="#ed5454"}return a},nodesStatus:function(t){var a="";switch(t){case 1:a="运行";break;case 2:a="停止"}return a},goRouter:function(t){switch(t){case"blocks":v.a.push("blockInfo");break;case"transactions":v.a.push("transactionInfo")}}}},b=(e("3xwS"),Object(d.a)(f,s,[],!1,null,"39f87be5",null));b.options.__file="src/views/home/home.vue";a.default=b.exports}}]);