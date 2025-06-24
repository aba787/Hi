// استيراد مكتبات Firebase الأساسية
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// إعدادات Firebase (حطي مفتاحك هنا)
const firebaseConfig = {
  apiKey: "🔑 حطي المفتاح الحقيقي هنا",
  authDomain: "momaken-45ba9.firebaseapp.com",
  projectId: "momaken-45ba9",
  storageBucket: "momaken-45ba9.appspot.com",
  messagingSenderId: "638133555280",
  appId: "1:638133555280:web:c84bd87c15cabe55d30155"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// تهيئة المصادقة
const auth = getAuth(app);

// تصديرهم عشان تستخدمهم في ملفات ثانية
export { app, auth, onAuthStateChanged };