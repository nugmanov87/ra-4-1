(this["webpackJsonpra-4-1"]=this["webpackJsonpra-4-1"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=(n(12),n(3)),s=n(4),l=n(5),u=n(6),h=function(e){return r.a.createElement("input",{value:e.value,onChange:function(t){e.onChange(t.currentTarget.value)},maxLength:7,type:"text",className:"hex-field js-hex-field",placeholder:"#000000"})},f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={isWarning:!1,color:e.color,result:a.convert(e.color)},a}return Object(s.a)(n,[{key:"convert",value:function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?(t.shift(),t?"rgb(".concat(t.map((function(e){return parseInt(e,16)})).join(", "),")"):null):null}},{key:"checkColor",value:function(e){return/^#?([\da-f]{6})$/i.test(e)}},{key:"fixColor",value:function(e){return"#"===e[0]?e.slice(0,7):"#".concat(e.slice(0,6))}},{key:"change",value:function(e){7!==e.length?this.setState((function(t){return{color:e,isWarning:t.isWarning,result:t.result}})):this.checkColor(e)?(e=this.fixColor(e),this.setState({color:e,isWarning:!1,result:this.convert(e)})):this.setState({isWarning:!0,color:this.fixColor(e),result:"\u041e\u0448\u0438\u0431\u043a\u0430!"})}},{key:"render",value:function(){var e={};return this.state.isWarning?e.className="warning":e.style={backgroundColor:this.state.result},r.a.createElement("figure",e,r.a.createElement(h,{value:this.state.color,onChange:this.change.bind(this)}),r.a.createElement("div",{className:"message js-message"},this.state.result))}}]),n}(r.a.Component);n(13);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{color:"#129067"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.98fffde9.chunk.js.map