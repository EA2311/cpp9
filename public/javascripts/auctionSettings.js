!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=6)}({6:function(e,t){$(document).ready(function(){$("#save").click(function(){!function(e,t,n){$.ajax({url:e,type:n,data:t})}("/auctionSettings/rewrite",{dateBegin:$("#dateBegin").val(),timeBegin:$("#timeBegin").val(),timeout:$("#timeout").val(),interval:$("#interval").val(),pause:$("#pause").val(),picName:$("#addNewPic").val()},"put"),$("#td1").text($("#dateBegin").val()),$("#td2").text($("#timeBegin").val()),$("#td3").text($("#timeout").val()),$("#td4").text($("#interval").val()),$("#td5").text($("#pause").val()),$("#td6").text($("#addNewPic").val())})})}});