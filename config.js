// ค่าเชื่อมต่อ Supabase ที่เปิดเผยฝั่งเบราว์เซอร์ได้ (URL และ publishable key)
// ห้ามใส่ SECRET KEY ในไฟล์นี้ เพราะไฟล์นี้ถูกส่งไปที่มือถือของทุกคนที่เปิดเว็บ
window.SR_CONFIG = {
  SUPABASE_URL: "https://myigcograsrthcujjqta.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_CbWWCnlqjm9pJySMIE5HEg_Hl44yEMo",
  // (ไม่บังคับ) ส่งการแก้ไขจากเว็บไปที่ Google Sheet — ดูวิธีตั้งค่าใน apps_script.gs
  SHEET_WEBAPP_URL: "https://script.google.com/macros/s/AKfycby6nAwM5CNQexBVU9Y14k1t2mTBJyhdyNHGT8hoZO8umOUGuo1VW2XD1atpJ6ngNUrFAg/exec",
  SHEET_TOKEN: ""
};
