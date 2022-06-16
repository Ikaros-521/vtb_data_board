// 程序试用于大部分新版的PC浏览器 ps：如果没有生效请刷新页面重试
// 使用说明：打开直播页面，按F12或鼠标右击打开开发者工具，复制代码，粘贴到“Console”或“控制台”，然后“回车”即可。
// 程序功能：输入回车后，会自动为弹幕发送框填充“【】”，F1-4,7-8一键发送常用语

// 版本2.1
var shurukuang = document.getElementsByClassName("chat-input")[1];
shurukuang.onkeydown = function(e) {
	var event = e ? e : window.event;
	var currKey = event.keyCode || event.which || event.charCode;
	// console.log(currKey);
	let dom_input = document.getElementsByClassName('chat-input')[1];
	let evt = document.createEvent('HTMLEvents');
	evt.initEvent('input', true, true);
	if(currKey == 13) {
		dom_input.value = '【】';
		dom_input.dispatchEvent(evt);
		var inpObj = document.getElementsByClassName("chat-input")[1];
		if (inpObj.setSelectionRange) {
			inpObj.setSelectionRange(1, 1);
		} else {
			console.log('不兼容setSelectionRange方法');
		}
	} else if(currKey == 112) {
		dom_input.value = '【晚上好】';
		dom_input.dispatchEvent(evt);
		setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
	} else if(currKey == 113) {
		dom_input.value = '【晚安】';
		dom_input.dispatchEvent(evt);
		setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
	} else if(currKey == 114) {
		dom_input.value = '【感谢礼物】';
		dom_input.dispatchEvent(evt);
		setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
	} else if(currKey == 115) {
		dom_input.value = '【感谢sc】';
		dom_input.dispatchEvent(evt);
		setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
	} else if(currKey == 118) {
		dom_input.value = '【感谢上船】';
		dom_input.dispatchEvent(evt);
		setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
	} else if(currKey == 119) {
		dom_input.value = '【老板大气】';
		dom_input.dispatchEvent(evt);
		setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
	}
};

// 游猴 贴入以下代码2.1
// ==UserScript==
// @name         b站直播弹幕自动补中括号、一键常用语脚本
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  try to take over the world!
// @author       You
// @match        https://live.bilibili.com/*
// @grant        none
// ==/UserScript==

window.onload = function() {
    var t1 = window.setTimeout(function() {
        var shurukuang = document.getElementsByClassName("chat-input")[1];
        if(shurukuang != null) {
            shurukuang.onkeydown = function(e) {
			var event = e ? e : window.event;
			var currKey = event.keyCode || event.which || event.charCode;
			// console.log(currKey);
			let dom_input = document.getElementsByClassName('chat-input')[1];
			let evt = document.createEvent('HTMLEvents');
			evt.initEvent('input', true, true);
			if(currKey == 13) {
				dom_input.value = '【】';
				dom_input.dispatchEvent(evt);
				var inpObj = document.getElementsByClassName("chat-input")[1];
				if (inpObj.setSelectionRange) {
					inpObj.setSelectionRange(1, 1);
				} else {
					console.log('不兼容setSelectionRange方法');
				}
			} else if(currKey == 112) {
				dom_input.value = '【晚上好】';
				dom_input.dispatchEvent(evt);
				setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
			} else if(currKey == 113) {
				dom_input.value = '【晚安】';
				dom_input.dispatchEvent(evt);
				setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
			} else if(currKey == 114) {
				dom_input.value = '【感谢礼物】';
				dom_input.dispatchEvent(evt);
				setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
			} else if(currKey == 115) {
				dom_input.value = '【感谢sc】';
				dom_input.dispatchEvent(evt);
				setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
			} else if(currKey == 118) {
				dom_input.value = '【感谢上船】';
				dom_input.dispatchEvent(evt);
				setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
			} else if(currKey == 119) {
				dom_input.value = '【老板大气】';
				dom_input.dispatchEvent(evt);
				setTimeout(function(){ document.getElementsByClassName("bl-button")[0].click(); }, 50);
			}
		};
            // 去除定时器
            window.clearTimeout(t1);
        }
    }, 1000);
}


// 版本1.0
// 键盘按键监听
document.onkeydown = function(event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode==13) {
		// console.log("enter click");
		// 手动触发事件
		document.getElementsByClassName("chat-input")[1].value = "【";
	}
};
