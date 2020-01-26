const functions = require('firebase-functions');
const nodemailer = require("nodemailer");

const gmailEmail = functions.config().gmail.email;
const gmailClientId = functions.config().gmail.clientId;
const gmailClientSecret = functions.config().gmail.clientsecret;
const gmailRefreshToken = functions.config().gmail.refreshtoken;
const adminEmail = functions.config().admin.email;


// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      type         : 'OAuth2',
      user         : gmailEmail,
      clientId     : gmailClientId,
      clientSecret : gmailClientSecret,
      refreshToken : gmailRefreshToken
    }
  });

// 管理者用のメールテンプレート
const adminContents = data => {
  return `以下内容でホームページよりお問い合わせを受けました。

お名前：
${data.name}

メールアドレス：
${data.email}

内容：
${data.message}
`;
};

exports.sendMail = functions.https.onCall((data, context) => {
  // メール設定
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "ホームページお問い合わせ",
    text: adminContents(data)
  };

  // 管理者へのメール送信
  mailTransport.sendMail(adminMail, (err, info) => {
    if (err) {
      return console.error(`send failed. ${err}`);
    }
    return console.log("send success.");
  });
});