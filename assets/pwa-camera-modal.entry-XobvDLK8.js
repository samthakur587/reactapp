import{h as m,r as v,c as p}from"./index-czegoUsS.js";var f=function(c,o,n,u){function r(e){return e instanceof n?e:new n(function(i){i(e)})}return new(n||(n=Promise))(function(e,i){function l(a){try{t(u.next(a))}catch(s){i(s)}}function h(a){try{t(u.throw(a))}catch(s){i(s)}}function t(a){a.done?e(a.value):r(a.value).then(l,h)}t((u=u.apply(c,o||[])).next())})},d=function(c,o){var n={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,r,e,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(t){return function(a){return h([t,a])}}function h(t){if(u)throw new TypeError("Generator is already executing.");for(;i&&(i=0,t[0]&&(n=0)),n;)try{if(u=1,r&&(e=t[0]&2?r.return:t[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,t[1])).done)return e;switch(r=0,e&&(t=[t[0]&2,e.value]),t[0]){case 0:case 1:e=t;break;case 4:return n.label++,{value:t[1],done:!1};case 5:n.label++,r=t[1],t=[0];continue;case 7:t=n.ops.pop(),n.trys.pop();continue;default:if(e=n.trys,!(e=e.length>0&&e[e.length-1])&&(t[0]===6||t[0]===2)){n=0;continue}if(t[0]===3&&(!e||t[1]>e[0]&&t[1]<e[3])){n.label=t[1];break}if(t[0]===6&&n.label<e[1]){n.label=e[1],e=t;break}if(e&&n.label<e[2]){n.label=e[2],n.ops.push(t);break}e[2]&&n.ops.pop(),n.trys.pop();continue}t=o.call(c,n)}catch(a){t=[6,a],r=0}finally{u=e=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}},x=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}",b=function(){function c(o){v(this,o),this.onPhoto=p(this,"onPhoto",7),this.noDeviceError=p(this,"noDeviceError",7),this.facingMode="user"}return c.prototype.present=function(){return f(this,void 0,void 0,function(){var o,n=this;return d(this,function(u){return o=document.createElement("pwa-camera-modal-instance"),o.facingMode=this.facingMode,o.addEventListener("onPhoto",function(r){return f(n,void 0,void 0,function(){var e;return d(this,function(i){return this._modal?(e=r.detail,this.onPhoto.emit(e),[2]):[2]})})}),o.addEventListener("noDeviceError",function(r){return f(n,void 0,void 0,function(){return d(this,function(e){return this.noDeviceError.emit(r),[2]})})}),document.body.append(o),this._modal=o,[2]})})},c.prototype.dismiss=function(){return f(this,void 0,void 0,function(){return d(this,function(o){return this._modal?(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null,[2]):[2]})})},c.prototype.render=function(){return m("div",null)},c}();b.style=x;export{b as pwa_camera_modal};
