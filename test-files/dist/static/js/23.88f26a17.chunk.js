(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1150:function(e,t,a){"use strict";a.r(t);a(282);var n=a(136),r=(a(1135),a(1133)),s=(a(991),a(989)),l=(a(214),a(111)),i=(a(109),a(42)),c=(a(212),a(53)),o=(a(89),a(14)),u=(a(422),a(135)),d=(a(421),a(280)),m=a(118),p=a(15),g=a(16),h=a(17),b=a(13),f=a(18),v=a(33),E=(a(133),a(91)),S=(a(423),a(160)),y=(a(134),a(48)),j=a(0),O=a.n(j),w=a(41),x=a(108),k=a(64),L=a(114),D=y.a.Column,M=S.a.Item,q=E.a.TextArea,C=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).openModal=a.openModal.bind(Object(v.a)(Object(v.a)(a))),a.closeModal=a.closeModal.bind(Object(v.a)(Object(v.a)(a))),a.registRoleBtn=a.registRoleBtn.bind(Object(v.a)(Object(v.a)(a))),a.state={tableData:[],newServiceModalVisible:!1,currentPage:1,pageSize:10,total:0,serviceTypeData:[],requestTypeData:[],fileList:[],docList:[],subServName:"",loading:!1},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.getServiceType(),this.getrequestType(),this.getRegSerList()}},{key:"handleSerarch",value:function(){this.getRegSerList()}},{key:"getRegSerList",value:function(){var e=this;this.setState({loading:!0}),w.c.regServiceList({currentPage:this.state.currentPage,pageSize:this.state.pageSize,subServName:this.state.subServName}).then(function(t){e.setState({loading:!1}),1===t.res&&e.setState({tableData:t.obj.page.list,total:t.obj.page.total,loading:!1})})}},{key:"getServiceType",value:function(){var e=this;w.c.serviceType().then(function(t){1===t.res&&e.setState({serviceTypeData:t.obj.servs})})}},{key:"getrequestType",value:function(){var e=this;w.c.requestType({type:3}).then(function(t){console.log(t),1===t.res&&e.setState({requestTypeData:t.obj.options})})}},{key:"sendAjaxRequest",value:function(e){var t=this;return new Promise(function(a,n){var r=new XMLHttpRequest;r.withCredentials=!0;var s=new FormData;for(var l in t.state.fileList.forEach(function(e){s.append("paramFile",e)}),t.state.docList.forEach(function(e){s.append("docFile",e)}),e)s.append(l,e[l]);r.onload=function(e){a(JSON.parse(e.target.responseText))},r.onerror=function(e){n(e)},r.open("post","http://172.17.1.58:8088/regist/regist"),r.send(s)})}},{key:"registRoleBtn",value:function(){var e=this;(0,this.props.form.validateFields)(function(t,a){var n=Object(m.a)({},a,{startDate:a.startDate?a.startDate.format("YYYY-MM-DD"):null,json:a.json?a.startDate:null});t||(e.sendAjaxRequest(Object(L.d)(n)).then(function(t){console.log(t),1===t.res?(d.a.success("\u6ce8\u518c\u6210\u529f\uff0c\u8bf7\u7b49\u5f85\u7ba1\u7406\u5458"+t.obj.approver.userName+"\u5ba1\u6838"),e.getRegSerList()):d.a.error(t.resMsg)}),e.closeModal())})}},{key:"openModal",value:function(){this.setState({newServiceModalVisible:!0})}},{key:"closeModal",value:function(){var e=this.props.form.resetFields;this.setState({newServiceModalVisible:!1,fileList:[],docList:[]}),e()}},{key:"beforeUpload",value:function(e,t){return"file"===e?this.setState({fileList:[t]}):"doc"===e&&this.setState({docList:[t]}),!1}},{key:"downloadModal",value:function(){window.location.href="http://172.17.1.58:8088/regist/download?type=1"}},{key:"onPageChange",value:function(e,t){var a=this;this.setState({pageSize:t,currentPage:e},function(){a.getRegSerList()})}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=u.a.Option,d={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16}}};return O.a.createElement("div",{className:"father-height"},O.a.createElement(c.a,{separator:">"},O.a.createElement(o.a,{type:"pushpin"}),O.a.createElement(c.a.Item,null,O.a.createElement(k.a,{to:"/main"},"\u670d\u52a1\u4e2d\u5fc3")),O.a.createElement(c.a.Item,null,"\u6ce8\u518c\u670d\u52a1")),O.a.createElement("div",{className:"content-box"},O.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"10px"}},O.a.createElement(E.a,{onChange:function(t){return e.setState({subServName:t.target.value})},onPressEnter:function(){return e.handleSerarch()},value:this.state.subServName,placeholder:"\u8bf7\u8f93\u5165\u670d\u52a1\u7684\u540d\u79f0",style:{width:"calc(100% - 110px)"}}),O.a.createElement(i.a,{onClick:function(){e.handleSerarch()},icon:"search",className:"gradient-btn"},"\u641c\u7d22"),O.a.createElement(i.a,{type:"default",icon:"plus",onClick:this.openModal},"\u6ce8\u518c\u670d\u52a1")),O.a.createElement(x.a,{className:"father-height","data-space":"42px"},O.a.createElement(y.a,{bordered:!0,rowKey:"subServiceId",dataSource:this.state.tableData,pagination:!1,loading:this.state.loading},O.a.createElement(D,{title:"\u670d\u52a1\u540d\u79f0",dataIndex:"subServiceName"}),O.a.createElement(D,{title:"\u670d\u52a1\u7c7b\u578b",dataIndex:"serviceName"}),O.a.createElement(D,{title:"\u670d\u52a1\u72b6\u6001",dataIndex:"subServiceStatus",render:function(e){return 1===e?"\u6b63\u5e38":2===e?"\u7ef4\u62a4\u4e2d":3===e?"\u5f85\u5ba1\u6279":""}}),O.a.createElement(D,{title:"\u670d\u52a1\u521b\u5efa\u4eba",dataIndex:"applyUserName"}),O.a.createElement(D,{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createDate"}),O.a.createElement(D,{title:"\u8c03\u7528URL",dataIndex:"url"})),O.a.createElement(l.a,{showSizeChanger:!0,pageSizeOptions:[1,10,20,50,100].map(function(e){return""+e}),onChange:function(t,a){e.onPageChange(t,a)},onShowSizeChange:function(t,a){e.onPageChange(t,a)},defaultCurrent:this.state.currentPage,total:this.state.total,style:{marginTop:"10px"}}))),O.a.createElement(n.a,{title:"\u6ce8\u518c\u670d\u52a1",centered:!0,visible:this.state.newServiceModalVisible,onOk:this.registRoleBtn,onCancel:this.closeModal,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88"},O.a.createElement(S.a,null,O.a.createElement(M,Object.assign({label:"\u670d\u52a1\u540d\u79f0"},d),t("subServName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u670d\u52a1\u540d\u79f0!"},{max:20,message:"\u6700\u591a\u53ea\u80fd\u8f93\u516520\u4e2a\u5b57\u7b26!"}]})(O.a.createElement(E.a,null))),O.a.createElement(M,Object.assign({label:"\u670d\u52a1\u7c7b\u578b"},d),t("servId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u670d\u52a1\u7c7b\u578b!"}]})(O.a.createElement(u.a,null,this.state.serviceTypeData.map(function(e){return O.a.createElement(a,{value:e.serviceId,key:e.serviceId},e.serviceName)})))),O.a.createElement(M,Object.assign({label:"\u670d\u52a1\u63cf\u8ff0"},d),t("desc",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u670d\u52a1\u63cf\u8ff0!"}]})(O.a.createElement(q,null))),O.a.createElement(M,Object.assign({label:"\u670d\u52a1\u63d0\u4f9b\u4eba"},d),t("auth",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u670d\u52a1\u63cf\u8ff0!"}]})(O.a.createElement(E.a,null))),O.a.createElement(M,Object.assign({label:"\u8c03\u7528URL"},d),t("url",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u670d\u52a1Url!"},{message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684Url\u683c\u5f0f!",type:"url"}]})(O.a.createElement(q,null))),O.a.createElement(M,Object.assign({label:"\u8bf7\u6c42\u65b9\u5f0f"},d),t("requestType",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u670d\u52a1\u7c7b\u578b!"}]})(O.a.createElement(u.a,null,this.state.requestTypeData.map(function(e){return O.a.createElement(a,{value:e.value,key:e.id},e.name)})))),O.a.createElement(M,Object.assign({label:"\u8bf7\u6c42\u793a\u4f8b"},d),t("example",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165\u8bf7\u6c42\u793a\u4f8b!"}]})(O.a.createElement(q,null))),O.a.createElement(M,Object.assign({label:"\u751f\u6548\u65e5\u671f"},d),t("startDate",{rules:[{required:!1,message:"\u8bf7\u9009\u62e9\u751f\u6548\u65e5\u671f!"}]})(O.a.createElement(s.a,null))),O.a.createElement(M,Object.assign({label:"\u53c2\u6570\u4e0a\u4f20"},d),O.a.createElement(i.a,{type:"primary",style:{marginRight:"10px"},onClick:function(){e.downloadModal()}},"\u4e0b\u8f7d\u53c2\u6570\u6a21\u677f"),O.a.createElement(r.a,{fileList:this.state.fileList,beforeUpload:function(t){return e.beforeUpload("file",t),!1},accept:".xlsx"},O.a.createElement(i.a,null,O.a.createElement(o.a,{type:"upload"}),"\u4e0a\u4f20\u53c2\u6570\u6587\u4ef6"))),O.a.createElement(M,Object.assign({label:"\u63a5\u53e3\u6587\u6863\u4e0a\u4f20"},d),O.a.createElement(r.a,{docList:this.state.docList,beforeUpload:function(t){return e.beforeUpload("doc",t),!1}},O.a.createElement(i.a,null,O.a.createElement(o.a,{type:"upload"}),"\u4e0a\u4f20\u63a5\u53e3\u6587\u6863"))),O.a.createElement(M,Object.assign({label:"json\u793a\u4f8b"},d),t("json",{rules:[{message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684json\u683c\u5f0f\u793a\u4f8b",validator:function(e,t,a){try{t&&""!==t?(JSON.parse(t),a()):a()}catch(n){a("\u8bf7\u8f93\u5165\u6b63\u786e\u7684JSON\u683c\u5f0f\u5b9e\u4f8b")}}}]})(O.a.createElement(q,null))))))}}]),t}(j.Component);t.default=S.a.create()(C)}}]);
//# sourceMappingURL=23.88f26a17.chunk.js.map