function formatReplyTime(val) {
    // console.log(val);
    var currentTime = new Date();
    // console.log(currentTime);
    var replyTime = new Date(val);
    // console.log(replyTime);
    temp = Math.round((currentTime - replyTime) / 1000);
    // console.log(temp);
    if (temp < 60) {
        return temp + '秒前';
    }
    var year = parseInt(temp / (365 * 24 * 3600));
    if (year > 0) {
        return year + '年前';
    }
    temp = temp % (365 * 24 * 3600);
    var month = parseInt(temp / (30 * 24 * 3600));
    if (month > 0) {
        return month + '月前';
    }
    temp = temp % (30 * 24 * 3600);
    var day = parseInt(temp / (24 * 3600));
    if (day > 0) {
        return day + '天前';
    }
    temp = temp % (24 * 3600);
    var hour = parseInt(temp / 3600);
    if (hour > 0) {
        return hour + '小时前';
    }
    temp = temp % 3600;
    var min = parseInt(temp / 60);
    return min + '分钟前';
}