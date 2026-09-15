importScripts('https://gstatic.com');
importScripts('https://gstatic.com');

// ⚠️ あなたのFirebaseの情報をここに貼り付けてください（前回のものと同じ）
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// バックグラウンド（スリープ中など）で通知を受け取った時の処理
messaging.onBackgroundMessage((payload) => {
    console.log('バックグラウンドでメッセージを受信: ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://fav.farm💬',
        // バイブレーション（Androidなど対応機器のみ）
        vibrate:,
        // 通知の優先度を最大にしてスリープから起こす
        renotify: true,
        tag: 'chat-notification'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
