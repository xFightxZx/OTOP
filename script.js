// ตัวแปรเก็บจำนวนสินค้า
let cartCount = 0;
const cartElement = document.getElementById('cart-count');

// ฟังก์ชันเพิ่มสินค้า (เรียกใช้จากปุ่ม HTML)
function addToCart(buttonElement) {
    // 1. เพิ่มตัวเลข
    cartCount++;
    cartElement.innerText = cartCount;

    // 2. เอฟเฟกต์ปุ่มกด
    const originalText = buttonElement.innerText;
    buttonElement.innerText = "เรียบร้อย!";
    buttonElement.style.background = "#27ae60";
    buttonElement.style.color = "white";
    buttonElement.style.border = "2px solid #27ae60";

    // 3. แสดง Notification (Toast)
    showToast();

    // 4. คืนค่าปุ่มเดิมหลังจาก 1.5 วินาที
    setTimeout(() => {
        buttonElement.innerText = originalText;
        buttonElement.style.background = ""; // กลับไปใช้ CSS เดิม
        buttonElement.style.color = "";
        buttonElement.style.border = "";
    }, 1500);
}

// ฟังก์ชันแสดง Toast Notification
function showToast() {
    const toast = document.getElementById("toast");
    toast.className = "toast show";
    
    // ซ่อนหลังจาก 3 วินาที
    setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}
