import React, { useState } from 'react';
import { ShoppingCart, Search, User, Heart, Home, Package, Star, Upload, X, Menu, Plus, Edit, Trash2 } from 'lucide-react';

export default function OTOPMarketplace() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [userRole, setUserRole] = useState('buyer'); // 'buyer' or 'seller'
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');

  // ข้อมูลสินค้าตัวอย่าง
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'ผ้าไหมมัดหมี่',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400',
      seller: 'ป้าแจ่ม - กลุ่มทอผ้า',
      category: 'ผ้าไทย',
      stock: 5,
      rating: 4.8
    },
    {
      id: 2,
      name: 'ผ้าขาวม้า',
      price: 350,
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400',
      seller: 'ป้าแจ่ม - กลุ่มทอผ้า',
      category: 'ผ้าไทย',
      stock: 15,
      rating: 4.6
    },
    {
      id: 3,
      name: 'ผ้าบาติก',
      price: 450,
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400',
      seller: 'น้าศรี - หัตถกรรม',
      category: 'ผ้าไทย',
      stock: 8,
      rating: 4.7
    },
    {
      id: 4,
      name: 'ผ้าทอมือลายดอก',
      price: 890,
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400',
      seller: 'ป้าแจ่ม - กลุ่มทอผ้า',
      category: 'ผ้าไทย',
      stock: 6,
      rating: 4.9
    },
    {
      id: 5,
      name: 'กระเป๋าจักสาน',
      price: 450,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
      seller: 'น้าสมหมาย - หัตถกรรม',
      category: 'ของใช้',
      stock: 10,
      rating: 4.5
    },
    {
      id: 6,
      name: 'กระเป๋าสานย้อมสี',
      price: 380,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
      seller: 'น้าสมหมาย - หัตถกรรม',
      category: 'ของใช้',
      stock: 12,
      rating: 4.6
    },
    {
      id: 7,
      name: 'ตะกร้าหวายใส่ของ',
      price: 280,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
      seller: 'ลุงบุญ - หัตถกรรม',
      category: 'ของใช้',
      stock: 20,
      rating: 4.4
    },
    {
      id: 8,
      name: 'พวงกุญแจไม้แกะสลัก',
      price: 60,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
      seller: 'ลุงสมชาย - หัตถกรรม',
      category: 'ของใช้',
      stock: 50,
      rating: 4.8
    },
    {
      id: 9,
      name: 'กระเป๋าผ้าปักลาย',
      price: 320,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400',
      seller: 'น้าศรี - หัตถกรรม',
      category: 'ของใช้',
      stock: 15,
      rating: 4.7
    },
    {
      id: 10,
      name: 'น้ำพริกหนุ่ม',
      price: 120,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
      seller: 'ป้าจันทร์ - อาหารแปรรูป',
      category: 'อาหาร',
      stock: 20,
      rating: 5.0
    },
    {
      id: 11,
      name: 'น้ำพริกเผา',
      price: 100,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
      seller: 'ป้าจันทร์ - อาหารแปรรูป',
      category: 'อาหาร',
      stock: 25,
      rating: 4.9
    },
    {
      id: 12,
      name: 'น้ำพริกปลาร้า',
      price: 90,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
      seller: 'ป้าจันทร์ - อาหารแปรรูป',
      category: 'อาหาร',
      stock: 18,
      rating: 4.8
    },
    {
      id: 13,
      name: 'ข้าวเกรียบกุ้ง',
      price: 80,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
      seller: 'ป้าวัลย์ - ขนมไทย',
      category: 'อาหาร',
      stock: 30,
      rating: 4.7
    },
    {
      id: 14,
      name: 'ข้าวเกรียบปลา',
      price: 70,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
      seller: 'ป้าวัลย์ - ขนมไทย',
      category: 'อาหาร',
      stock: 35,
      rating: 4.6
    },
    {
      id: 15,
      name: 'ขนมครกโบราณ',
      price: 150,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
      seller: 'ป้าวัลย์ - ขนมไทย',
      category: 'อาหาร',
      stock: 10,
      rating: 5.0
    },
    {
      id: 16,
      name: 'น้ำผึ้งป่าแท้',
      price: 350,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
      seller: 'ลุงเจริญ - ของป่า',
      category: 'อาหาร',
      stock: 8,
      rating: 5.0
    },
    {
      id: 17,
      name: 'กาแฟคั่วมือ',
      price: 180,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
      seller: 'ลุงสมพร - กาแฟชุมชน',
      category: 'อาหาร',
      stock: 22,
      rating: 4.9
    },
    {
      id: 18,
      name: 'ชาสมุนไพร',
      price: 120,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
      seller: 'ลุงสมพร - กาแฟชุมชน',
      category: 'อาหาร',
      stock: 15,
      rating: 4.8
    },
    {
      id: 19,
      name: 'เครื่องปั้นดินเผา',
      price: 680,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400',
      seller: 'ลุงสมชาย - หัตถกรรม',
      category: 'ของตั้ง',
      stock: 8,
      rating: 4.7
    },
    {
      id: 20,
      name: 'แจกันดินเผาวาดลาย',
      price: 450,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400',
      seller: 'ลุงสมชาย - หัตถกรรม',
      category: 'ของตั้ง',
      stock: 6,
      rating: 4.6
    },
    {
      id: 21,
      name: 'โคมไฟไม้สานโบราณ',
      price: 890,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400',
      seller: 'ลุงบุญ - หัตถกรรม',
      category: 'ของตั้ง',
      stock: 5,
      rating: 4.9
    },
    {
      id: 22,
      name: 'ตุ๊กตาผ้าทำมือ',
      price: 250,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400',
      seller: 'น้าศรี - หัตถกรรม',
      category: 'ของตั้ง',
      stock: 12,
      rating: 4.8
    },
    {
      id: 23,
      name: 'กรอบรูปไม้แกะสลัก',
      price: 380,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400',
      seller: 'ลุงสมชาย - หัตถกรรม',
      category: 'ของตั้ง',
      stock: 10,
      rating: 4.7
    },
    {
      id: 24,
      name: 'ช้างไม้แกะสลัก',
      price: 550,
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400',
      seller: 'ลุงสมชาย - หัตถกรรม',
      category: 'ของตั้ง',
      stock: 7,
      rating: 4.9
    }
  ]);

  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      items: [{name: 'ผ้าไหมมัดหมี่', price: 1200, quantity: 1}],
      total: 1200,
      status: 'รอตรวจสอบ',
      slip: null,
      date: '23/12/2025'
    }
  ]);

  // ฟังก์ชันเพิ่มสินค้าลงตะกร้า
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1}
          : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  // ฟังก์ชันลบสินค้าจากตะกร้า
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // คำนวณราคารวม
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // กรองสินค้าตามการค้นหาและหมวดหมู่
  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'ทั้งหมด' || p.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  // หน้า Home
  const HomePage = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">🏪 OTOP Community Connect</h1>
        <p className="text-xl">ตลาดออนไลน์เพื่อวิสาหกิจชุมชน</p>
        <p className="mt-2 opacity-90">สินค้าคุณภาพจากชุมชน ส่งตรงถึงมือคุณ</p>
      </div>

      <div className="flex gap-4 flex-wrap">
        {['ทั้งหมด', 'ผ้าไทย', 'อาหาร', 'ของใช้', 'ของตั้ง'].map(cat => (
          <button 
            key={cat} 
            onClick={() => {
              setSelectedCategory(cat);
              console.log('เลือกหมวด:', cat);
            }}
            className={`px-6 py-2 rounded-full transition ${
              selectedCategory === cat 
                ? 'bg-amber-500 text-white shadow-lg' 
                : 'bg-gray-200 hover:bg-amber-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-2xl text-gray-400">😢 ไม่พบสินค้าในหมวดนี้</p>
            <button 
              onClick={() => setSelectedCategory('ทั้งหมด')}
              className="mt-4 bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600"
            >
              ดูสินค้าทั้งหมด
            </button>
          </div>
        ) : (
          filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.seller}</p>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">{product.rating}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">฿{product.price}</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
                >
                  ใส่ตะกร้า
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">คงเหลือ: {product.stock} ชิ้น</p>
            </div>
          </div>
        ))
        )}
      </div>
    </div>
  );

  // หน้าตะกร้า
  const CartPage = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">🛒 ตะกร้าสินค้า</h2>
      
      {cart.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center">
          <ShoppingCart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <p className="text-xl text-gray-500">ตะกร้าว่างเปล่า</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-xl p-4 flex gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-600">{item.seller}</p>
                <p className="text-xl font-bold text-amber-600 mt-2">฿{item.price}</p>
              </div>
              <div className="flex flex-col justify-between items-end">
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                  <Trash2 className="w-5 h-5" />
                </button>
                <div className="text-lg">จำนวน: {item.quantity}</div>
              </div>
            </div>
          ))}

          <div className="bg-amber-50 rounded-xl p-6">
            <div className="flex justify-between text-xl font-bold mb-4">
              <span>ราคารวมทั้งหมด:</span>
              <span className="text-amber-600">฿{totalPrice}</span>
            </div>
            <button 
              onClick={() => setCurrentPage('checkout')}
              className="w-full bg-amber-500 text-white py-3 rounded-lg text-lg font-bold hover:bg-amber-600 transition"
            >
              ดำเนินการสั่งซื้อ
            </button>
          </div>
        </div>
      )}
    </div>
  );

  // หน้า Checkout
  const CheckoutPage = () => {
    const [slipFile, setSlipFile] = useState(null);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    
    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">💳 ชำระเงิน</h2>
        
        <div className="bg-white rounded-xl p-6 mb-6">
          <h3 className="font-bold text-lg mb-4">📍 ข้อมูลการจัดส่ง</h3>
          <input 
            type="text" 
            placeholder="ชื่อ-นามสกุล" 
            className="w-full p-3 border rounded-lg mb-3 text-lg"
          />
          <input 
            type="text" 
            placeholder="เบอร์โทรศัพท์" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded-lg mb-3 text-lg"
          />
          <textarea 
            placeholder="ที่อยู่สำหรับจัดส่ง" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border rounded-lg mb-3 text-lg h-24"
          />
        </div>

        <div className="bg-white rounded-xl p-6 mb-6">
          <h3 className="font-bold text-xl mb-4">รายการสั่งซื้อ</h3>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between py-2 border-b">
              <span>{item.name} x {item.quantity}</span>
              <span className="font-semibold">฿{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between py-4 text-xl font-bold">
            <span>รวมทั้งสิ้น:</span>
            <span className="text-amber-600">฿{totalPrice}</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-lg mb-3">📱 ข้อมูลการโอนเงิน</h3>
          <p className="mb-1">ธนาคาร: กรุงไทย</p>
          <p className="mb-1">ชื่อบัญชี: กลุ่มวิสาหกิจชุมชน OTOP</p>
          <p className="text-xl font-bold text-blue-600">เลขที่บัญชี: 123-4-56789-0</p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4">📎 แนบสลิปการโอนเงิน</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
            <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
            <p className="text-gray-600 mb-4">คลิกเพื่ออัปโหลดสลิป</p>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setSlipFile(e.target.files[0])}
              className="block mx-auto"
            />
            {slipFile && (
              <p className="mt-4 text-green-600 font-semibold">✓ ไฟล์: {slipFile.name}</p>
            )}
          </div>
          
          <button 
            onClick={() => {
              if (!phone || !address) {
                alert('⚠️ กรุณากรอกข้อมูลการจัดส่งให้ครบถ้วน');
                return;
              }
              if (!slipFile) {
                alert('⚠️ กรุณาแนบสลิปการโอนเงิน');
                return;
              }
              alert('✅ ยืนยันการสั่งซื้อสำเร็จ!\n\nรอการตรวจสอบจากผู้ขาย\nคำสั่งซื้อของคุณจะถูกจัดส่งภายใน 2-3 วัน');
              setCart([]);
              setCurrentPage('home');
            }}
            disabled={!phone || !address || !slipFile}
            className={`w-full py-3 rounded-lg text-lg font-bold mt-6 transition ${
              !phone || !address || !slipFile 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {!phone || !address || !slipFile ? '⚠️ กรุณากรอกข้อมูลให้ครบ' : '✅ ยืนยันการสั่งซื้อ'}
          </button>
        </div>
      </div>
    );
  };

  // หน้าผู้ขาย
  const SellerPage = () => {
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [newProduct, setNewProduct] = useState({
      name: '',
      price: '',
      stock: '',
      category: 'ผ้าไทย'
    });
    
    const handleAddProduct = () => {
      if (!newProduct.name || !newProduct.price || !newProduct.stock) {
        alert('⚠️ กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
      }
      
      const product = {
        id: products.length + 1,
        name: newProduct.name,
        price: parseInt(newProduct.price),
        stock: parseInt(newProduct.stock),
        category: newProduct.category,
        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400',
        seller: 'ร้านของฉัน',
        rating: 5.0
      };
      
      setProducts([...products, product]);
      setShowAddProduct(false);
      setNewProduct({ name: '', price: '', stock: '', category: 'ผ้าไทย' });
      alert('✅ เพิ่มสินค้าสำเร็จ!');
    };
    
    const handleDeleteProduct = (id) => {
      if (confirm('⚠️ คุณต้องการลบสินค้านี้ใช่หรือไม่?')) {
        setProducts(products.filter(p => p.id !== id));
        alert('✅ ลบสินค้าสำเร็จ!');
      }
    };
    
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">📦 จัดการสินค้า</h2>
          <button 
            onClick={() => setShowAddProduct(true)}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition flex items-center gap-2"
          >
            <Plus className="w-5 h-5" /> เพิ่มสินค้าใหม่
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex gap-4">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-1">ราคา: ฿{product.price}</p>
                  <p className="text-gray-600 mb-1">คงเหลือ: {product.stock} ชิ้น</p>
                  <p className="text-gray-600">หมวด: {product.category}</p>
                  <div className="flex gap-2 mt-4">
                    <button 
                      onClick={() => alert('🔧 ฟีเจอร์แก้ไขกำลังพัฒนา')}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex items-center gap-1"
                    >
                      <Edit className="w-4 h-4" /> แก้ไข
                    </button>
                    <button 
                      onClick={() => handleDeleteProduct(product.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" /> ลบ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="font-bold text-xl mb-4">📋 รายการคำสั่งซื้อ</h3>
          {orders.map(order => (
            <div key={order.id} className="border-b py-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold">คำสั่งซื้อ #{order.id}</p>
                  <p className="text-sm text-gray-600">วันที่: {order.date}</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {order.status}
                </span>
              </div>
              {order.items.map((item, i) => (
                <p key={i} className="text-gray-700">{item.name} x{item.quantity} - ฿{item.price}</p>
              ))}
              <p className="font-bold mt-2">รวม: ฿{order.total}</p>
              <button 
                onClick={() => alert('✅ ยืนยันคำสั่งซื้อแล้ว!\n\nกรุณาจัดส่งสินค้าภายใน 2 วัน')}
                className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                ดูสลิปและยืนยัน
              </button>
            </div>
          ))}
        </div>

        {showAddProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">เพิ่มสินค้าใหม่</h3>
                <button onClick={() => setShowAddProduct(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="ชื่อสินค้า (เช่น ผ้าไหมมัดหมี่)" 
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="w-full p-3 border rounded-lg text-lg" 
                />
                <input 
                  type="number" 
                  placeholder="ราคา (บาท)" 
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                  className="w-full p-3 border rounded-lg text-lg" 
                />
                <input 
                  type="number" 
                  placeholder="จำนวนสต็อก" 
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                  className="w-full p-3 border rounded-lg text-lg" 
                />
                <select 
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  className="w-full p-3 border rounded-lg text-lg"
                >
                  <option>เลือกหมวดหมู่</option>
                  <option value="ผ้าไทย">ผ้าไทย</option>
                  <option value="อาหาร">อาหาร</option>
                  <option value="ของใช้">ของใช้</option>
                  <option value="ของตั้ง">ของตั้ง</option>
                </select>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 p-6 text-center rounded-lg">
                  <p className="text-gray-500">📷 รูปสินค้าจะใช้รูปตัวอย่างไปก่อน</p>
                  <p className="text-sm text-gray-400 mt-2">(สามารถเพิ่มระบบอัปโหลดรูปได้ในภายหลัง)</p>
                </div>
                <button 
                  onClick={handleAddProduct}
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
                >
                  ✅ บันทึกสินค้า
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🏪</div>
              <h1 className="text-2xl font-bold text-amber-600">OTOP Connect</h1>
            </div>

            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text"
                  placeholder="ค้นหาสินค้า OTOP..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setUserRole(userRole === 'buyer' ? 'seller' : 'buyer')}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
              >
                {userRole === 'buyer' ? '🛍️ ผู้ซื้อ' : '🏪 ผู้ขาย'}
              </button>
              
              <button 
                onClick={() => setShowCart(!showCart)}
                className="relative p-3 hover:bg-gray-100 rounded-full transition"
              >
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
              
              <button className="p-3 hover:bg-gray-100 rounded-full transition">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 py-3">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${currentPage === 'home' ? 'bg-amber-500 text-white' : 'hover:bg-gray-100'}`}
            >
              <Home className="w-5 h-5" /> หน้าแรก
            </button>
            {userRole === 'seller' && (
              <button 
                onClick={() => setCurrentPage('seller')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${currentPage === 'seller' ? 'bg-amber-500 text-white' : 'hover:bg-gray-100'}`}
              >
                <Package className="w-5 h-5" /> จัดการสินค้า
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'cart' && <CartPage />}
        {currentPage === 'checkout' && <CheckoutPage />}
        {currentPage === 'seller' && userRole === 'seller' && <SellerPage />}
      </main>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowCart(false)}>
          <div 
            className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">ตะกร้าสินค้า</h2>
              <button onClick={() => setShowCart(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-12">ตะกร้าว่างเปล่า</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-3 bg-gray-50 rounded-lg p-3">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-amber-600 font-bold">฿{item.price}</p>
                        <p className="text-sm text-gray-600">จำนวน: {item.quantity}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold mb-4">
                    <span>รวม:</span>
                    <span className="text-amber-600">฿{totalPrice}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setShowCart(false);
                      setCurrentPage('checkout');
                    }}
                    className="w-full bg-amber-500 text-white py-3 rounded-lg font-bold hover:bg-amber-600 transition"
                  >
                    ชำระเงิน
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}