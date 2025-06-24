// استيراد Firestore و Auth من firebase.js
import { app, auth, onAuthStateChanged } from './firebase.js';

// استيراد مكتبات Firestore
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// تهيئة Firestore
const db = getFirestore(app);

// دالة لإضافة مستخدم
export async function addUser(userId, name, email) {
  try {
    await setDoc(doc(db, "users", userId), {
      name: name || "بدون اسم",
      email: email || "مافي إيميل",
      createdAt: new Date()
    });
    console.log("✅ تم إضافة المستخدم");
  } catch (error) {
    console.error("❌ خطأ في الإضافة:", error);
  }
}

// دالة لقراءة بيانات مستخدم
export async function readUser(userId) {
  try {
    const ref = doc(db, "users", userId);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      console.log("📄 بيانات المستخدم:", snap.data());
      return snap.data();
    } else {
      console.log("❌ المستخدم غير موجود");
      return null;
    }
  } catch (error) {
    console.error("❌ خطأ في القراءة:", error);
    return null;
  }
}

// التعامل مع حالة المستخدم
onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("✅ مستخدم مسجل دخول:", user.email);
    await addUser(user.uid, user.displayName, user.email);
    await readUser(user.uid);
  } else {
    console.log("⚠️ ما في مستخدم مسجل دخول");
  }
});