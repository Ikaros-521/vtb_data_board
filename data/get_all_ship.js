// 程序功能：获取主播所有大航海用户的 uid 和 username
// 复制所有代码 打开直播间，按F12打开开发者工具，在console（控制台）贴入代码回车即可。
// 还没测试过小于3舰的直播间，可能会有bug，不过3舰也没必要用脚本了www

// 获取相关id
var roomid = (window.location.pathname).toString().substr(1);
var arr_uid = document.getElementsByClassName("header-info-ctnr")[0].getElementsByTagName("a")[0].getAttribute("href").split("/");
var ruid = arr_uid[3];

var all_num = 0;

// 存储舰长信息的集合
var user_name = new Set();
var user_id = new Set();

// 数据获取
async function get_data() {
    var url;

    url = "https://api.live.bilibili.com/xlive/app-room/v2/guardTab/topList?roomid=" +
        roomid + "&page=1&ruid=" + ruid + "&page_size=28";
    console.log(url);
    // 获取舰长总数和第一页的舰长信息
    get_json1(url);

    // 睡眠1000毫秒 1秒
    await sleep(1000);

    // 大于单页的数据量
    if(all_num > (28 + 3)) {
        var time = parseInt((all_num - 31 - 1) / 28) + 1;
        //console.log("time:" + time);
        for(var i = 0; i < time; i++) {
            url = "https://api.live.bilibili.com/xlive/app-room/v2/guardTab/topList?roomid=" +
                roomid + "&page=" + (2 + i).toString() + "&ruid=" + ruid + "&page_size=28";

            if(i == (time - 1)) get_json2(url, 1);
            else get_json2(url, 0);

            // 睡眠500毫秒 0.5秒
            await sleep(500);
        }
    } else {
        show_data();
    }
    
}

// 显示舰长数据
function show_data() {
    console.log(user_id);
    console.log(user_name);

    var json = [];
    var data;

    for(var i = 0; i < user_id.size; i++) {
        data = { 
            "uid" : Array.from(user_id)[i],
            "username" : Array.from(user_name)[i]
        };

        json.push(data);
    }

    console.log(json);
}

// 睡眠多少毫秒
function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 获取舰长总数和第一页的舰长信息
function get_json1(url) {
    var xmlhttp;
    if(window.XMLHttpRequest)
    {
        //code for IE7+,Firefox,Chrome,Opera,Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        //code for IE6,IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4)
        {
            if(xmlhttp.status == 200)
            {
                //将接收到的字符串存入str
                var str = xmlhttp.responseText;
                if(str.length == 0)
                {
                    return "";
                }

                //console.log(str);

                // 转为JSON对象
                var json = JSON.parse(str);
                console.log(json);

                // 解析json对象获取对应值
                all_num = json["data"]["info"]["num"];
                console.log("舰长总数为" + all_num);

                for(var i = 0; i < 3; i++) {
                    user_id.add(json["data"]["top3"][i.toString()]["uid"]);
                    user_name.add(json["data"]["top3"][i.toString()]["username"]);
                }

                for(var i = 0; i < json["data"]["list"].length; i++) {
                    user_id.add(json["data"]["list"][i.toString()]["uid"]);
                    user_name.add(json["data"]["list"][i.toString()]["username"]);
                }
            }
            else
            {
                //console.log(xmlhttp.status);
            }

        }
        else
        {
            //console.log(xmlhttp.readyState);
        }
    }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// 获取每页的舰长
function get_json2(url, end) {
    var xmlhttp;
    if(window.XMLHttpRequest)
    {
        //code for IE7+,Firefox,Chrome,Opera,Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        //code for IE6,IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4)
        {
            if(xmlhttp.status == 200)
            {
                //将接收到的字符串存入str
                var str = xmlhttp.responseText;
                if(str.length == 0)
                {
                    return "";
                }

                //console.log(str);

                // 转为JSON对象
                var json = JSON.parse(str);
                console.log(json);

                // 解析json对象获取对应值
                for(var i = 0; i < json["data"]["list"].length; i++) {
                    user_id.add(json["data"]["list"][i.toString()]["uid"]);
                    user_name.add(json["data"]["list"][i.toString()]["username"]);
                }

                // 结束标志
                if(end == 1) {
                    show_data();
                }
            }
            else
            {
                //alert(xmlhttp.status);
            }

        }
        else
        {
            //alert(xmlhttp.readyState);
        }
    }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

get_data();