/* 1. ตั้งค่าพื้นฐาน */
:root {
    --primary: #0f5132; /* สีเขียวเข้ม OTOP */
    --accent: #d4a017;  /* สีทอง พรีเมียม */
    --bg: #f8f9fa;
    --text: #333;
}

body {
    font-family: 'Prompt', sans-serif;
    margin: 0;
    background-color: var(--bg);
    color: var(--text);
}

/* 2. Navbar สวยๆ */
.navbar {
    background: white;
    padding: 15px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 24px;
    font-weight: 600;
    color: var(--primary);
}

.cart-box {
    background: var(--primary);
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.cart-box:hover {
    transform: scale(1.05);
    background: #0a3622;
}

/* 3. Hero Banner (ภาพพื้นหลัง) */
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1600&q=80');
    background-size: cover;
    background-position: center;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero h1 { font-size: 3em; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
.hero p { font-size: 1.2em; margin-top: 10px; }
.btn-hero {
    margin-top: 20px;
    padding: 12px 30px;
    background: var(--accent);
    border: none;
    color: white;
    font-size: 18px;
    font-family: 'Prompt', sans-serif;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s;
}
.btn-hero:hover { background: #b8860b; transform: translateY(-3px); }

/* 4. Grid สินค้า */
.container { max-width: 1000px; margin: 40px auto; padding: 0 20px; }
.section-title { text-align: center; margin-bottom: 30px; color: var(--primary); }

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive */
    gap: 30px;
}

/* 5. การ์ดสินค้า (Card UI) */
.product-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
    position: relative;
}

.product-card:hover {
    transform: translateY(-10px); /* ลอยขึ้นเมื่อชี้ */
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.product-card img { width: 100%; height: 200px; object-fit: cover; }

.badge {
    position: absolute;
    top: 10px; right: 10px;
    background: #e74c3c;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 10px;
}

.details { padding: 20px; }
.details h3 { margin: 0 0 10px; font-size: 18px; }
.details .desc { color: #777; font-size: 14px; margin-bottom: 15px; }

.price-row { display: flex; justify-content: space-between; align-items: center; }
.price { font-size: 1.2em; color: var(--primary); font-weight: bold; }

.btn-add {
    background: white;
    border: 2px solid var(--primary);
    color: var(--primary);
    padding: 8px 15px;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Prompt', sans-serif;
    transition: 0.3s;
}

.btn-add:hover {
    background: var(--primary);
    color: white;
}

/* 6. แจ้งเตือน Toast Notification */
.toast {
    visibility: hidden;
    min-width: 250px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.toast.show {
    visibility: visible;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@keyframes fadein { from {bottom: 0; opacity: 0;} to {bottom: 30px; opacity: 1;} }
@keyframes fadeout { from {bottom: 30px; opacity: 1;} to {bottom: 0; opacity: 0;} }
