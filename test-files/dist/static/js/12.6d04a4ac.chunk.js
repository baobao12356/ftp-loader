(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1021:function(e,t,a){},1023:function(e,t,a){},1160:function(e,t,a){"use strict";a.r(t);a(285);var n=a(71),r=(a(212),a(53)),i=(a(89),a(14)),o=(a(109),a(42)),c=(a(421),a(280)),s=a(70),l=a(15),u=a(16),p=a(17),d=a(13),m=a(35),f=a(18),h=(a(282),a(136)),v=a(0),y=a.n(v),b=(a(134),a(48)),E=a(41),k=b.a.Column,g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={tableData:[]},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return y.a.createElement(b.a,{size:"small",bordered:!0,dataSource:this.props.data,pagination:!1},y.a.createElement(k,{title:"\u6587\u6863\u540d\u79f0",dataIndex:"docName",key:"docName"}),y.a.createElement(k,{title:"\u5907\u6ce8",dataIndex:"remark",key:"remark"}),y.a.createElement(k,{title:"\u4e0a\u4f20\u65f6\u95f4",dataIndex:"uploadTime",key:"uploadTime"}),y.a.createElement(k,{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updateDate",key:"updateDate"}),y.a.createElement(k,{title:"\u64cd\u4f5c",key:"downloadUrl",render:function(e){return y.a.createElement("span",null,y.a.createElement("a",{href:e.downloadUrl},"\u4e0b\u8f7d"),"\xa0",y.a.createElement("a",null,"\u67e5\u770b"))}}))}}]),t}(v.Component),x=b.a.Column,j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return y.a.createElement(b.a,{size:"small",bordered:!0,dataSource:this.props.data,pagination:!1},y.a.createElement(x,{title:"\u9519\u8bef\u4ee3\u7801",dataIndex:"value",key:"value"}),y.a.createElement(x,{title:"\u8bf4\u660e",dataIndex:"name",key:"name"}))}}]),t}(v.Component),O=a(293),I=(a(1021),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"tab-box"},y.a.createElement("div",{className:"header"},this.props.title),y.a.createElement("div",{className:"content"},this.props.children))}},{key:"componentDidMount",value:function(){}}]),t}(v.Component)),S=b.a.Column,C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={tableData:[]},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log(11111,this.props)}},{key:"render",value:function(){return y.a.createElement("div",{className:"father-height"},y.a.createElement("div",{style:{lineHeight:"30px"}},y.a.createElement("div",null," \u63a5\u53e3\u5730\u5740\uff1a",this.props.serviceAPI," "),y.a.createElement("div",null," \u63a5\u53e3\u793a\u4f8b\uff1a",this.props.example," ")),y.a.createElement("div",{style:{borderBottom:"1px solid #ccc",margin:"10px 0"}}),y.a.createElement("div",{className:"father-height","data-space":"63px"},y.a.createElement(I,{title:"\u8bf7\u6c42\u53c2\u6570"},y.a.createElement(b.a,{dataSource:this.props.inputParams,bordered:!0,pagination:!1},y.a.createElement(S,{title:"\u540d\u79f0",dataIndex:"paraName",key:"paraName"}),y.a.createElement(S,{title:"\u53c2\u6570\u7c7b\u578b",dataIndex:"paraType",key:"paraType"}),y.a.createElement(S,{title:"\u662f\u5426\u5fc5\u586b",dataIndex:"paraRequire",key:"paraRequire",render:function(e){return 1===e?"\u5fc5\u586b":"\u975e\u5fc5\u586b"}}),y.a.createElement(S,{title:"\u8bf4\u660e",dataIndex:"paraDesc",key:"paraDesc"}),y.a.createElement(S,{title:"\u5907\u6ce8",dataIndex:"remark",key:"remark"}))),y.a.createElement(I,{title:"\u8f93\u51fa\u53c2\u6570"},y.a.createElement(b.a,{bordered:!0,dataSource:this.props.outputParams,pagination:!1},y.a.createElement(S,{title:"\u540d\u79f0",dataIndex:"paraName",key:"paraName"}),y.a.createElement(S,{title:"\u53c2\u6570\u7c7b\u578b",dataIndex:"paraType",key:"paraType"}),y.a.createElement(S,{title:"\u8bf4\u660e",dataIndex:"paraDesc",key:"paraDesc"}),y.a.createElement(S,{title:"\u5907\u6ce8",dataIndex:"remark",key:"remark"}))),y.a.createElement(I,{title:"JSON\u8fd4\u56de\u5b57\u6bb5"},y.a.createElement("div",{className:"pre scroll-y",style:{background:"#eef7ff",color:"rgba(0, 0, 0, 0.85)"}},Object(O.a)(this.props.json)))))}}]),t}(v.Component),D=b.a.Column,w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return y.a.createElement(b.a,{size:"small",bordered:!0,dataSource:this.props.data,pagination:!1},y.a.createElement(D,{title:"\u7248\u672c",dataIndex:"version",key:"version"}),y.a.createElement(D,{title:"\u5185\u5bb9",dataIndex:"content",key:"content"}),y.a.createElement(D,{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createDate",key:"createDate"}),y.a.createElement(D,{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updateDate",key:"updateDate"}),y.a.createElement(D,{title:"\u5907\u6ce8",dataIndex:"remark",key:"remark"}))}}]),t}(v.Component),N=a(108),R=a(64),T=a(162),B=(a(1023),h.a.confirm),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={jumpVisible:!1,waitingSeconds:3,timer:null,currentRadio:"interface",json:{},indexInfo:{subServiceDetail:{}},approve_id:"",approve_name:"",auditDisabled:!1,userInfo:{},from:"",applied:!0,subServiceName:""},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(m.a)(Object(d.a)(t.prototype),"ready",this).call(this).then(function(t){e.setState({userInfo:t},function(){e.getMainData()})})}},{key:"showConfirm",value:function(e){var t=this,a="\u4f60\u786e\u5b9a\u540c\u610f\u8be5\u7533\u8bf7\u5417?";3==e&&(a="\u4f60\u786e\u5b9a\u62d2\u7edd\u8be5\u7533\u8bf7\u5417?"),B({title:a,content:"\u5982\u679c\u786e\u5b9a,\u8bf7\u70b9\u51fb\u786e\u8ba4\u6309\u94ae",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){console.log(e),t.approveService(e)},onCancel:function(){}})}},{key:"getQuery",value:function(){return this.props.location.search.substring(1).split("&").reduce(function(e,t){var a=t.split("="),n=Object(s.a)({},a[0],a[1]);return Object.assign(e,n)},{})}},{key:"getMainData",value:function(){var e=this,t=this.getQuery();2!=t.status&&3!=t.status||this.setState({auditDisabled:!0}),E.b.getServiceDetail({subServId:t.interfaceId}).then(function(t){1===t.res&&e.setState({indexInfo:t.obj.subService,json:t.obj.subService.returnExample,applied:t.obj.subService.applied,subServiceName:t.obj.subService.subServiceDesc})})}},{key:"regisService",value:function(){var e=this,t=this;E.b.regisService({subServiceId:this.getQuery().interfaceId}).then(function(a){e.setState({jumpVisible:!0}),1===a.res&&(e.setState({approve_id:a.obj.approveUser.userId,approve_name:a.obj.approveUser.userName}),function(e,a){var n=parseInt(e),r=setInterval(function(){var e=--n;a(e),e<=0&&clearInterval(r)},1e3);t.setState({timer:r})}(3,function(t){e.setState({waitingSeconds:t}),0===t&&e.props.history.push("/main/audit-service")}))})}},{key:"approveService",value:function(e){var t=this;E.b.auditService({id:this.getQuery().sid,approveStatus:e}).then(function(e){1===e.res?(c.a.success(e.resMsg),t.setState({disabled:!0}),t.props.history.push("/main/audit-service")):c.a.error(e.resMsg)})}},{key:"backToRegis",value:function(){"audit"===this.getQuery().type?this.props.history.push("/main/audit-service"):this.props.history.push("/main/regis-service")}},{key:"goBack",value:function(){Object(m.a)(Object(d.a)(t.prototype),"goBack",this).call(this)}},{key:"backToAudit",value:function(){this.props.history.push("/main/audit-service")}},{key:"componentWillUnmount",value:function(){this.state.timer&&clearInterval(this.state.timer)}},{key:"handleRadioChange",value:function(e){this.setState({currentRadio:e.target.value})}},{key:"buttonGroupCompo",value:function(){var e=this;return"/main/audit-service"===this.getQuery().from&&"admin"===this.state.userInfo.roleType?y.a.createElement("span",null,y.a.createElement(o.a,{type:"default",onClick:function(){e.goBack()}},"\u8fd4\u56de"),y.a.createElement(o.a,{disabled:this.state.auditDisabled,type:"primary",onClick:function(){e.showConfirm(2)},style:{marginLeft:"10px"}},"\u540c\u610f"),y.a.createElement(o.a,{disabled:this.state.auditDisabled,type:"default",onClick:function(){e.showConfirm(3)},style:{marginLeft:"10px"}},"\u62d2\u7edd")):y.a.createElement("span",null,y.a.createElement(o.a,{type:"default",onClick:function(){e.goBack()}},"\u8fd4\u56de"),y.a.createElement(o.a,{type:"default",disabled:this.state.applied,onClick:function(){e.regisService()},style:{marginLeft:"10px"}},this.state.applied?"\u5df2\u7533\u8bf7":"\u7533\u8bf7"))}},{key:"render",value:function(){var e=this;return y.a.createElement("div",{className:"father-height"},y.a.createElement(r.a,{separator:">"},y.a.createElement(i.a,{type:"pushpin"}),y.a.createElement(r.a.Item,null,y.a.createElement(R.a,{to:"/main"},"\u670d\u52a1\u4e2d\u5fc3")),y.a.createElement(r.a.Item,null,"/main/interface-market"===this.getQuery().from?y.a.createElement(R.a,{to:"/main/interface-market"},"\u63a5\u53e3\u8d85\u5e02"):"/main/audit-service"===this.getQuery().from?y.a.createElement(R.a,{to:"/main/audit-service"},"\u5ba1\u6838\u670d\u52a1"):"/main/collect-service"===this.getQuery().from?y.a.createElement(R.a,{to:"/main/collect-service"},"\u6211\u7684\u5173\u6ce8"):"/main/my-service"===this.getQuery().from?y.a.createElement(R.a,{to:"/main/my-service"},"\u6211\u7684\u670d\u52a1"):""),y.a.createElement(r.a.Item,null,"\u8be6\u60c5")),y.a.createElement("div",{className:"content-box"},y.a.createElement(N.a,{title:this.state.subServiceName,right:this.buttonGroupCompo()},y.a.createElement("div",null,y.a.createElement("div",{className:"autofit-box",style:{display:"flex",justifyContent:"space-between"}},y.a.createElement("div",{className:"item"},"\u8fde\u63a5\u6570\uff1a",this.state.indexInfo.subServiceDetail.connCount),y.a.createElement("div",{className:"item"},"\u6d4f\u89c8\u6570\uff1a",this.state.indexInfo.subServiceDetail.viewCount),y.a.createElement("div",{className:"item"},"\u63a5\u53e3\u72b6\u6001\uff1a",1===this.state.indexInfo.subServiceStatus?"\u6b63\u5e38":"\u7ef4\u62a4\u4e2d"),y.a.createElement("div",{className:"item"},"\u670d\u52a1\u5546\uff1a",this.state.indexInfo.subServiceDetail.supplier)),y.a.createElement("div",{style:{borderBottom:"1px solid #ccc",margin:"10px 0"}}),y.a.createElement(n.a.Group,{size:"middle",onChange:function(t){return e.handleRadioChange(t)},defaultValue:this.state.currentRadio,buttonStyle:"solid",className:"radioTitle"},y.a.createElement(n.a.Button,{value:"interface",className:"radioBtn"},"\u63a5\u53e3\u4fe1\u606f"),y.a.createElement(n.a.Button,{value:"doc",className:"radioBtn"},"\u63a5\u53e3\u6587\u6863"),y.a.createElement(n.a.Button,{value:"error",className:"radioBtn"},"\u8fd4\u56de\u4ee3\u7801"),y.a.createElement(n.a.Button,{value:"update",className:"radioBtn"},"\u66f4\u65b0\u8bb0\u5f55")),y.a.createElement("div",{className:"father-height scroll-y","data-space":"62px",style:{paddingTop:"10px"}},"interface"===this.state.currentRadio?y.a.createElement(C,{serviceAPI:this.state.indexInfo.subServiceDetail.serviceUrl,example:this.state.indexInfo.subServiceDetail.example,inputParams:this.state.indexInfo.inputParams,json:this.state.json,outputParams:this.state.indexInfo.outputParams,serviceEgg:this.state.indexInfo.subServiceDetail.example}):"doc"===this.state.currentRadio?y.a.createElement(g,{data:this.state.indexInfo.docs}):"error"===this.state.currentRadio?y.a.createElement(j,{data:this.state.indexInfo.errorCodes}):"update"===this.state.currentRadio?y.a.createElement(w,{data:this.state.indexInfo.versions}):"")))),y.a.createElement(h.a,{title:"\u8df3\u8f6c\u63d0\u793a",closable:!1,visible:this.state.jumpVisible,footer:y.a.createElement(o.a,{type:"primary",onClick:function(){e.backToAudit()}},"\u786e\u8ba4")},y.a.createElement("div",{style:{textAlign:"center"}},y.a.createElement("div",null,"\u60a8\u7684\u7533\u8bf7\u7531\u7ba1\u7406\u5458"),y.a.createElement("h4",null,"\uff08",y.a.createElement("span",{style:{color:"red"}},"".concat(this.state.approve_id,"-").concat(this.state.approve_name)),"\uff09\u6765\u5ba1\u6838"),y.a.createElement("div",null,"\u9875\u9762",y.a.createElement("span",{style:{fontWeight:"bold"}},this.state.waitingSeconds),"\u79d2\u540e\u81ea\u52a8\u8c03\u8f6c\u5230\u6211\u7684\u5ba1\u6838\u5217\u8868"))))}}]),t}(T.a);t.default=P},64:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),c=a(49),s=a.n(c),l=a(110),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return a=n=p(this,e.call.apply(e,[this].concat(i))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!d(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,i=a.to;r?t.replace(i):t.push(i)}},p(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var i=this.context.router.history,o="string"===typeof t?Object(l.b)(t,null,null,i.location):t,c=i.createHref(o);return r.a.createElement("a",u({},n,{onClick:this.handleClick,href:c,ref:a}))},t}(r.a.Component);m.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=m}}]);
//# sourceMappingURL=12.6d04a4ac.chunk.js.map