// auth-service.js
import { db } from "./firebase-config.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

let isUnlocked = false;

// ฟังก์ชันแปลงข้อความธรรมดาเป็น SHA-256 Hash
async function hashPIN(pin) {
    const msgBuffer = new TextEncoder().encode(pin);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ตรวจสอบ PIN กับข้อมูลใน Firebase Firestore
export async function verifyAdminPIN(inputPin) {
    if (!inputPin) return false;

    try {
        // อ่านค่า Hash จาก Collection 'settings' Document 'admin'
        const docRef = doc(db, "settings", "admin");
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            console.error("❌ ไม่พบข้อมูล PIN ใน Firestore");
            return false;
        }

        const remoteHash = docSnap.data().pinHash;
        const hashedInput = await hashPIN(inputPin);

        if (hashedInput === remoteHash) {
            isUnlocked = true;
            return true;
        }
        return false;
    } catch (err) {
        console.error("Error verifying PIN:", err);
        return false;
    }
}

export function checkAdminStatus() {
    return isUnlocked;
}