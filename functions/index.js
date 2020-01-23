const functions = require('firebase-functions');
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const hotmailEmail = functions.config().hotmail.email;
const hotmailPassword = functions.config().hotmail.password;
const adminEmail = functions.config().admin.email;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// // exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      type         : 'OAuth2',
      user         : 'ydaydada@gmail.com',
      clientId     : '831567689940-qnq0tnsmchvk4bm517uiak8bvnsphrsg.apps.googleusercontent.com',
      clientSecret : 'syyPdqO-L4_waT9VVJqf4z0S',
      refreshToken : '1//04Yl0XlRot-fxCgYIARAAGAQSNwF-L9IrLIYvKEUvyCNfWE4ab3-jcr9s4e4XlJnRnC1CHAqd0rZYnYwaDq3X5kQvDP6RBoVezqg'
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
  ${data.contents}
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