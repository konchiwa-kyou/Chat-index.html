importScripts('https://gstatic.com');
importScripts('https://gstatic.com');

// ⚠️ ここにもあなた自身の本物のConfigを貼り付けます
const firebaseConfig = {
  apiKey: "AIzaSyAIxoojCu0bUXoW8e6-rjR0UvTNjdRmM3I",
  authDomain: "://firebaseapp.com",
  projectId: "my-chatkdn",
  storageBucket: "my-chatkdn.firebasestorage.app",
  messagingSenderId: "407770418634",
  appId: "1:1234567890:web:abcdef..." // スクショの最下部が見切れていたため、ご自身のappIdを入れてください
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// バックグラウンド・スリープ中に通知を受け取った時の処理
messaging.onBackgroundMessage((payload) => {
  console.log('バックグラウンドでメッセージを受信: ', payload);

  // Cloud Functions側から高優先度で送られてきた通知データを展開
  const notificationTitle = payload.notification?.title || "新着メッセージ";
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.text || "",
    icon: '/icon.png', // 必要に応じてアイコン画像パスを指定
    badge: '/badge.png',
    vibrate:, // Android用のバイブレーションパターン
    tag: 'chat-notification',  // 通知をまとめて上書きするタグ
    renotify: true,
    data: {
      click_action: '/' // 通知をタップしたときに開くURL
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
