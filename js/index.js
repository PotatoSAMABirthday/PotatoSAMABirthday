/*
 * @Author: your name
 * @Date: 2021-03-25 09:07:37
 * @LastEditTime: 2021-03-25 09:12:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiny-heart-master\birthday-mobile\js\index.js
 */
$("#login-button").click(function (event) {
    var userName = document.getElementById("userName").value;
    var pwd = document.getElementById("pwd").value;
    if (userName == "张家阳" && pwd == "0508") {
        event.preventDefault();
        $("form").fadeOut(500);
        $(".wrapper").addClass("form-success");
        document.getElementById("login-button").value=true;
    } else {
        alert("Wrong Password");
    }
});
