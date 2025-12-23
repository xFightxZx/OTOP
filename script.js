// 1. อ้างอิง Element จากหน้า HTML
const addBtn = document.getElementById('add-btn');
const cartCountElement = document.getElementById('cart-count');

// สร้างตัวแปรเก็บจำนวนสินค้า
let count = 0;

// 2. สร้างฟังก์ชันเมื่อมีการ "คลิก"
addBtn.addEventListener('click', function() {
    
    // เพิ่มจำนวนสินค้า
    count = count + 1;
    
    // อัปเดตตัวเลขบนหน้าจอ
    cartCountElement.innerText = count;
    
    // แจ้งเตือนลูกค้า (Alert)
    alert("✅ ใส่ตะกร้าเรียบร้อย! (จำนวนตอนนี้: " + count + " ชิ้น)");
    
    // (ลูกเล่นเสริม) เปลี่ยนข้อความปุ่มชั่วคราว
    addBtn.innerText = "ใส่แล้ว!";
    addBtn.style.backgroundColor = "#95a5a6"; // เปลี่ยนเป็นสีเทา
    
    // คืนค่าปุ่มเดิมหลังจาก 1 วินาที
    setTimeout(function() {
        addBtn.innerText = "หยิบลงตะกร้า";
        addBtn.style.backgroundColor = "#27ae60"; // กลับเป็นสีเขียว
    }, 1000);
});
