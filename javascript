importScripts('https://gstatic.com');
importScripts('https://gstatic.com');

const firebaseConfig = {
  apiKey: "AIzaSyAIxoojCu0bUXoW8e6-rjR0UvTNjdRmM3I",
  authDomain: "my-chatkdn.firebaseapp.com",
  projectId: "my-chatkdn",
  storageBucket: "my-chatkdn.firebasestorage.app",
  messagingSenderId: "407770418634",
  appId: "1:407770418634:web:faf7202d5f02677bc5d333"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('バックグラウンドでメッセージを受信: ', payload);

  const notificationTitle = payload.notification?.title || "新着メッセージ";
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.text || "",
    icon: '/icon.png',
    badge: '/badge.png',
    vibrate:,
    tag: 'chat-notification',
    renotify: true,
    data: {
      click_action: '/'
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
