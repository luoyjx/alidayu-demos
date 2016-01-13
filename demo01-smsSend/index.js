/*！
 * 发送短信demo
 * https://www.npmjs.com/package/alidayu-node
 *
 * Copyright(c) 2016 yanjixiong <yjk99@qq.com>
 */

var App = require('alidayu-node');
var config = require('../config');
var app = new App(config.appKey, config.appSecret);

app.smsSend({
  sms_free_sign_name: '注册验证',
  sms_param: JSON.stringify({"code": "520520", "product": "大脸熊"}),
  rec_num: 'xxxxx',
  sms_template_code: 'SMS_4426115'
});