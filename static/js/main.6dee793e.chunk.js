(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(2),o=n.n(a),c=n(3),i=n(4),s=n(6),u=n(9),d=n(7),E=n(10),l=n(0),v=n.n(l),p=n(8),w=n.n(p),m=n(1),f=n.n(m),S=function e(){var t=this;Object(i.a)(this,e),this.donate=function(){var e=Object(c.a)(o.a.mark(function e(n){var r,a,c,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),r=m.IconBuilder.IcxTransactionBuilder,a=m.IconConverter.toBigNumber(1),c=(new r).from(n.address).to(t.scoreAddress).value(m.IconAmount.of(10,m.IconAmount.Unit.ICX).toLoop()).stepLimit(m.IconConverter.toHex(1e6)).timestamp(1e3*(new Date).getTime()).nid(a).version(m.IconConverter.toHex(3)).build(),i=m.IconConverter.toRawTransaction(c),e.abrupt("return",i);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.checkTransaction=function(e){return new Promise(function(n){var r;r=setInterval(function(){!function(e){var a=t.iconService.getTransactionResult(e);a?(clearInterval(r),n(a.execute())):(clearInterval(r),alert(a.failure.message))}(e)},5e3)})},this.requestAddress=function(){return new Promise(function(e,t){var n=setTimeout(function(){window.removeEventListener("ICONEX_RELAY_RESPONSE",r,!1),t("timeout")},1e4);function r(t){var a=t.detail,o=a.type,c=a.payload;"RESPONSE_ADDRESS"===o&&(window.removeEventListener("ICONEX_RELAY_RESPONSE",r,!1),clearTimeout(n),e(c),console.log(c))}window.addEventListener("ICONEX_RELAY_RESPONSE",r,!1),window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST",{detail:{type:"REQUEST_ADDRESS"}}))})},this.requestJsonRpc=function(e){return new Promise(function(t){function n(e){var r=e.detail,a=r.type,o=r.payload;"RESPONSE_JSON-RPC"===a&&(window.removeEventListener("ICONEX_RELAY_RESPONSE",n,!1),t(o))}window.removeEventListener("ICONEX_RELAY_RESPONSE",n,!1),window.addEventListener("ICONEX_RELAY_RESPONSE",n,!1),window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST",{detail:{type:"REQUEST_JSON-RPC",payload:{jsonrpc:"2.0",method:"icx_sendTransaction",params:e,id:(new Date).getTime()}}}))})};var n=f.a.HttpProvider;this.provider=new n("https://wallet.icon.foundation/api/v3"),this.scoreAddress="cx4dd21c1429a616e47940583a1287d5c0e424efbb",this.nid="0x1",this.iconService=new f.a(this.provider)};n(19);n.d(t,"default",function(){return h});var h=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).onClick=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.connect.requestAddress();case 2:(t=e.sent)&&n.setState({address:t});case 4:case"end":return e.stop()}},e)})),n.onChange=function(e){n.setState({message:e.target.value})},n.onClickSet=Object(c.a)(o.a.mark(function e(){var t,a,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.connect.donate(Object(r.a)({},n.state));case 2:return t=e.sent,e.next=5,n.connect.requestJsonRpc(t);case 5:return a=e.sent,e.next=8,n.connect.checkTransaction(a.result);case 8:1===(c=e.sent).status&&c.txHash&&(n.ref.innerHTML=c.txHash);case 10:case"end":return e.stop()}},e)})),n.state={address:""},n.connect=new S,n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return v.a.createElement(l.Fragment,null,v.a.createElement("div",null,v.a.createElement("p",null,"\uc5b4\ub9b0\uc774\uac00 \uc0b4\uae30 \uc88b\uc740 \uc138\uc0c1\uc740 \ubaa8\ub450\uac00 \uc0b4\uae30 \uc88b\uc740 \uc138\uc0c1\uc785\ub2c8\ub2e4")," ",v.a.createElement("p",null,"\ub2f9\uc2e0\uc758 \uc544\uc774\ucf58\uc73c\ub85c \uc0b4\uae30 \uc88b\uc740 \uc138\uc0c1\uc744 \ub9cc\ub4e4\uc5b4\uc8fc\uc138\uc694"),v.a.createElement("div",null,v.a.createElement("button",{onClick:this.onClick},"\uc9c0\uac11\uc120\ud0dd"),v.a.createElement("button",{onClick:this.onClickSet},"10ICX \uae30\ubd80\ud558\uae30"))))}}]),t}(l.Component);w.a.render(v.a.createElement(h,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.6dee793e.chunk.js.map