import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  //   Instagram,
  ShoppingBag,
  Search,
  PackageCheck,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Plus,
  Minus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Trash2,
  Truck,
  ShieldCheck,
  RotateCcw,
  ArrowLeft,
} from "lucide-react";
import "./style.css";

const catalog = [
  { id: 1, name: "Essential Heavyweight Tee", category: "T-Shirts", price: 900, old: 1150, color: "Onyx", image: "https://image.made-in-china.com/318f0j00WtwRmMfFyvbJ/1-30-2-2-mp4.webp" },
  { id: 2, name: "Relaxed Fit Crew Tee", category: "T-Shirts", price: 1000, old: 1300, color: "Bone", image: "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lwgnjqjmx725ec" },
  { id: 3, name: "Studio Oversized Hoodie", category: "Hoodies", price: 1900, old: 2450, color: "Black", image: "https://royasports.com/pictures/products/385188520_40_pic_3.jpg" },
  { id: 4, name: "Everyday Zip Hoodie", category: "Hoodies", price: 2000, old: 2500, color: "Stone", image: "https://cdn11.bigcommerce.com/s-bwiuyvxp9w/images/stencil/1280x1280/products/122/1467/mens-classicfit-zipfronthoody-sweatshirt-brown_419ce09f-57e1-4181-9c21-0408d888cf85__42831.1757109522.jpg?c=1" },
  { id: 5, name: "Utility Overshirt", category: "Shirts", price: 1800, old: 2300, color: "Olive", image: "https://api.olymp.com/medias/85211401-model-pv-main.jpeg-olymp-706x700?context=bWFzdGVyfGltYWdlc3wzODE4NXxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJnMU5pOW9PRE12TVRBMU1UQTBPRGd6TXpnME5qSXVhbkJufDIwNjJmOWY1NDZkZDE1OGQ0MjJjMTQ0ZGE0OTY5MTJkZjcwNzY3ZWY5NmZmNzM0MTg4NzQ2YjZkMjE4YzBlMDg" },
  { id: 6, name: "Oxford Button-Down", category: "Shirts", price: 1700, old: 2150, color: "Cloud", image: "https://leftcoasttee.com/cdn/shop/files/LEFT-COAST-TEE_LONDON-OVERSHIRT-12-1_ALL-RIGHTS-RESERVED.jpg?v=1771825960&width=1500" },
  { id: 7, name: "Everyday Cargo Pant", category: "Cargo", price: 2000, old: 2500, color: "Black", image: "/product-images/everyday-cargo-pant.webp" },
  { id: 8, name: "Relaxed Denim", category: "Jeans", price: 1900, old: 2450, color: "Indigo", image: "https://www.buffalojeans.com/cdn/shop/files/BM20606-470-04_1024x.jpg?v=1753461297" },
  { id: 9, name: "Straight Fit Denim", category: "Jeans", price: 2000, old: 2500, color: "Washed Blue", image: "https://static.bergzeit.com/product_gallery_regular/1141949-001_pic5.jpg" },
  { id: 10, name: "Tapered Joggers", category: "Joggers", price: 1500, old: 1900, color: "Charcoal", image: "https://images.tcdn.com.br/img/img_prod/740108/calma_masculina_de_moletom_com_punhos_verde_militar_2563_5_f63096c09dc6d3a51dcf8af48c05aec0.jpg" },
  { id: 11, name: "Track Pant 02", category: "Joggers", price: 1600, old: 2050, color: "Black", image: "https://cdn.shoplightspeed.com/shops/636544/files/37284250/image.jpg" },
  { id: 12, name: "Minimal Bomber", category: "Jackets", price: 2000, old: 2500, color: "Forest", image: "https://i.ebayimg.com/images/g/oFQAAOSwUrlbXMZ1/s-l1200.jpg" },
  { id: 13, name: "Everyday Coach Jacket", category: "Jackets", price: 1900, old: 2450, color: "Black", image: "https://www.nationalhandloomcorp.com/cdn/shop/files/MENS-CASUALJACKET.png?v=1775303749" },
  { id: 14, name: "Linen Blend Shirt", category: "Shirts", price: 1800, old: 2300, color: "Sand", image: "https://www.peggsandson.com/cdn/shop/files/1K3C3304_e4708f42-298a-48ef-86a3-d21192eb028c.jpg?v=1773145489&width=2048" },
  { id: 15, name: "Premium Polo", category: "T-Shirts", price: 1300, old: 1650, color: "Cream", image: "https://kartmax-product-live-bucket.s3.ap-south-1.amazonaws.com/public/wink/images/AO1SxEjKvBoPo1urBh7GE8CSc1Ee4SbE2ICbyFAP.jpg" },
  { id: 16, name: "Ribbed Tank", category: "T-Shirts", price: 700, old: 950, color: "White", image: "https://pub-95ccf2d427eb4955a7de1c41d3fa57dd.r2.dev/blog-g3fashion-com/2022/01/black-t-shirt-1024x1024.jpg" },
  { id: 17, name: "Cargo Shorts", category: "Shorts", price: 1200, old: 1550, color: "Olive", image: "https://imgix.bustle.com/uploads/image/2021/7/28/cb2d786a-17d4-4254-ad3d-04a7c657a6a4-best-shorts-hot-weather.jpg?crop=faces&fit=crop&fm=jpg&h=630&w=1200" },
  { id: 18, name: "Weekend Shorts", category: "Shorts", price: 1000, old: 1300, color: "Black", image: "https://i5.walmartimages.com/seo/BiZtdJrK-Mens-Cargo-Jean-Shorts-Solid-Color-Vintage-Denim-Shorts-Loose-Wide-Leg-Casual-Multi-Pocket-Short-Pants-Light-Blue-S_cecc0639-27c6-4abb-89e0-e16492728f13.217f7eac6e4a99d5c27e0e057003ae17.jpeg?odnBg=FFFFFF&odnHeight=573&odnWidth=573" },
  { id: 19, name: "Co-ord Sweatshirt", category: "Hoodies", price: 1800, old: 2300, color: "Grey", image: "https://tallslimtees.com/cdn/shop/files/RedZipUpWeb.jpg?v=1744386897&width=1080" },
  { id: 20, name: "Signature Cap", category: "Accessories", price: 700, old: 950, color: "Black", image: "https://cdn.011st.com/11dims/resize/1000x1000/quality/75/11src/opt/3/6/5/0/2/8/1901365028/nSTpY/25759089245_B.jpg" },
  { id: 21, name: "Classic Crewneck Tee", category: "T-Shirts", price: 800, old: 1050, color: "White", image: "https://static.wixstatic.com/media/d34c72_2b78cae895c84aca86d7effca64207de~mv2.png/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/d34c72_2b78cae895c84aca86d7effca64207de~mv2.png" },
  { id: 22, name: "Boxy Essential Tee", category: "T-Shirts", price: 1100, old: 1400, color: "Slate", image: "/product-images/boxy-essential-tee.webp" },
  { id: 23, name: "Striped Cotton Tee", category: "T-Shirts", price: 900, old: 1150, color: "Navy", image: "https://image.spreadshirtmedia.net/image-server/v1/productTypes/963/views/1/appearances/320%2Cwidth%3D650%2Cheight%3D800%2CbackgroundColor%3Df2f2f2%2CmodelId%3D10749%2Ccrop%3Ddetail.png" },
  { id: 24, name: "Longline Basic Tee", category: "T-Shirts", price: 750, old: 1000, color: "Moss", image: "https://www.nimbus-b2b.com/cdn/shop/files/danbury_men_navy_front_1200x.jpg?v=1770225422" },
  { id: 25, name: "Pique Polo Shirt", category: "T-Shirts", price: 1400, old: 1800, color: "Navy", image: "https://img-lcwaikiki.mncdn.com/mnpadding/480/640/ffffff/pim/productimages/20261/8510808/v1/l_20261-s69236z8-hzz_u.jpg" },
  { id: 26, name: "French Terry Hoodie", category: "Hoodies", price: 1900, old: 2450, color: "Ash", image: "https://www.stokomani.fr/cdn/shop/files/optimized_68e1be519fd35_2025-10-05_00-39-45.jpg?v=1759624788" },
  { id: 27, name: "Minimal Pullover Hoodie", category: "Hoodies", price: 1800, old: 2300, color: "Oat", image: "https://www.drleonards.com/dw/image/v2/BBVM_PRD/on/demandware.static/-/Sites-colony-master-catalog/default/dw2ac9b4f3/DIS/SP26_HA_6326091_12729_WP001.png?sh=1500&sm=fit&sw=1500" },
  { id: 28, name: "Zip-Up Fleece Hoodie", category: "Hoodies", price: 2000, old: 2500, color: "Charcoal", image: "https://stancolor.su/thumb/2/d-0LsA1OxuAPMZ_AvcZWAQ/r/d/18_131_1.png" },
  { id: 29, name: "Textured Knit Shirt", category: "Shirts", price: 1700, old: 2150, color: "Ecru", image: "https://www.careofcarl.nl/bilder/artiklar/600x600_grey_4_5/31313011r.jpg" },
  { id: 30, name: "Casual Check Shirt", category: "Shirts", price: 1600, old: 2050, color: "Blue", image: "https://www.oliversweeney.com/cdn/shop/files/rauceby-mid-blue-sq2_1200x1200.jpg?v=1747152372" },
  { id: 31, name: "Mandarin Collar Shirt", category: "Shirts", price: 1500, old: 1900, color: "White", image: "https://twothirds.com/cdn/shop/files/walpole-camel-toast-868405_1200x1200.jpg?v=1731149421" },
  { id: 32, name: "Relaxed Linen Shirt", category: "Shirts", price: 1900, old: 2450, color: "Sage", image: "https://www.oliversweeney.com/cdn/shop/files/MicrosoftTeams-image_29.jpg?v=1761294613" },
  { id: 33, name: "Slim Taper Jeans", category: "Jeans", price: 2000, old: 2500, color: "Indigo", image: "https://image.hm.com/assets/hm/3b/98/3b9866665977c9bbda42f3f0048717b3392d0da5.jpg?imwidth=2160" },
  { id: 34, name: "Washed Denim Jeans", category: "Jeans", price: 1900, old: 2450, color: "Blue", image: "https://image.hm.com/assets/hm/ac/60/ac60e9909215ce2e1dbc165c08cae520320762a2.jpg" },
  { id: 35, name: "Classic Black Jeans", category: "Jeans", price: 2000, old: 2500, color: "Black", image: "https://www.trueclassictees.com/cdn/shop/files/4711_MEDIUMINDIGOWASH_1_5dc5036e-89d2-4172-a998-aa7a9ba8e811.jpg?v=1747836825&width=1420" },
  { id: 36, name: "Utility Cargo Trousers", category: "Cargo", price: 1900, old: 2450, color: "Khaki", image: "https://i5.walmartimages.com/seo/Timoontee-Pants-Mens-Cargo-Jogger-Pants-Elastic-Drawstring-Waist-Zipper-Thigh-Pockets-Tapered-Ankle-Cuffs-Casual-Work-Trousers-Daily-Outdoor-Street-B_645648fe-498d-4f85-ad73-9baf8b939b0e.c7a89240c727925d9766d744a1ff5263.jpeg" },
  { id: 37, name: "Tapered Cargo Pants", category: "Cargo", price: 1800, old: 2300, color: "Olive", image: "https://i5.walmartimages.com/seo/BELTNOV-Men-s-Lightweight-Cargo-Joggers-Soft-Poly-Gabardine-Track-Pants-with-Pockets-Elastic-Waist-Athletic-Sweatpants-for-Gym-Hiking-Casual-Khaki_f9c92dfc-6436-4016-b053-c7403ff47a37.2aaf115e5523ed1c677bd6769d4b11e0.jpeg" },
  { id: 38, name: "Everyday Cotton Joggers", category: "Joggers", price: 1300, old: 1650, color: "Grey", image: "/product-images/everyday-cotton-joggers.webp" },
  { id: 39, name: "Relaxed Lounge Joggers", category: "Joggers", price: 1200, old: 1550, color: "Black", image: "https://stormtechaustralia.com.au/cdn/shop/products/image_2_f8a925b4-084d-445c-b2a0-f8ed5c7df5cd.jpg?v=1631749481&width=640" },
  { id: 40, name: "Performance Track Pants", category: "Joggers", price: 1500, old: 1900, color: "Navy", image: "https://i5.walmartimages.com/seo/Men-s-Solid-Color-Athletic-Jogger-Pants-Drawstring-Waist-Cuffed-Ankle-Sports-Sweatpants-Casual-Comfortable-Street-Style-Trousers-Dark-Gray-L_b1afe9eb-38d7-4127-b537-5c42ff648346.346a85f41861f0180e1d855497e6c468.jpeg" },
  { id: 41, name: "Lightweight Windcheater", category: "Jackets", price: 2000, old: 2500, color: "Stone", image: "https://www.wearstylecorner.com/images/generated/where-to-buy-mens-casual-fall-jackets-trusted-stores-reviewed.png" },
  { id: 42, name: "Utility Zip Jacket", category: "Jackets", price: 2000, old: 2500, color: "Olive", image: "https://bizweb.dktcdn.net/100/399/392/files/coach-jacket.jpg?v=1671217919160" },
  { id: 43, name: "Denim Trucker Jacket", category: "Jackets", price: 2000, old: 2500, color: "Blue", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=90" },
  { id: 44, name: "Canvas Coach Jacket", category: "Jackets", price: 1900, old: 2450, color: "Tan", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=90" },
  { id: 45, name: "Relaxed Chino Shorts", category: "Shorts", price: 1100, old: 1400, color: "Sand", image: "https://down-id.img.susercontent.com/file/id-11134207-8224w-mk91kcz557up9a" },
  { id: 46, name: "Cotton Drawstring Shorts", category: "Shorts", price: 900, old: 1150, color: "Grey", image: "https://i.ebayimg.com/images/g/gS0AAOSwfSxguPR3/s-l1200.jpg" },
  { id: 47, name: "Utility Pocket Shorts", category: "Shorts", price: 1300, old: 1650, color: "Khaki", image: "https://avenue85.co.uk/cdn/shop/files/rmj221-0323joint3_1200x1200.jpg?v=1707399151" },
  { id: 48, name: "Everyday Baseball Cap", category: "Accessories", price: 600, old: 850, color: "Navy", image: "https://i5.walmartimages.com/dfw/4ff9c6c9-babe/k2-_b7775cf7-b3f0-4c10-a08f-9d7e2dc3750d.v1.webp" },
  { id: 49, name: "Minimal Canvas Tote", category: "Accessories", price: 800, old: 1050, color: "Natural", image: "https://cdn11.bigcommerce.com/s-xhsipki9fu/images/stencil/original/products/2381/66614/AW22.Grey.1__16067.1679303571.jpg" },
  { id: 50, name: "Classic Leather-Style Wallet", category: "Accessories", price: 900, old: 1150, color: "Brown", image: "https://i5.walmartimages.com/seo/BROSHOPP-Men-s-Full-Grain-Leather-Bifold-Wallet-with-RFID-Blocking-9-Card-Slots-ID-Window-Black_8f3a1a05-1b2c-492a-a5a9-0c1125807dc7.e9081d448eb1e6b349719c2b1ff3b2bb.jpeg" },
  { id: 51, name: "Compact Card Holder", category: "Accessories", price: 700, old: 950, color: "Black", image: "/product-images/compact-card-holder.webp" },
  { id: 52, name: "Everyday Crew Socks - 3 Pack", category: "Socks", price: 550, old: 800, color: "White", image: "/product-images/everyday-crew-socks-3-pack.webp" },
  { id: 53, name: "Ribbed Beanie", category: "Accessories", price: 700, old: 950, color: "Charcoal", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85" },
  { id: 54, name: "Minimal Crossbody Bag", category: "Accessories", price: 1500, old: 1900, color: "Black", image: "/product-images/minimal-crossbody-bag.webp" },
  { id: 55, name: "Canvas Low-Top Sneakers", category: "Footwear", price: 2000, old: 2500, color: "White", image: "https://modagoods.com/cdn/shop/files/53-yh-063233-GRN-PAIR_15.png?v=1748552985&width=1946" },
  { id: 56, name: "Classic Slide Sandals", category: "Footwear", price: 1000, old: 1300, color: "Black", image: "/product-images/classic-slide-sandals.webp" },
  { id: 57, name: "Textured Knit Polo", category: "T-Shirts", price: 1500, old: 1900, color: "Espresso", image: "https://mensbestbasics.com/cdn/shop/files/Frame39.png?v=1726880617" },
  { id: 58, name: "Raglan Sleeve Tee", category: "T-Shirts", price: 900, old: 1150, color: "Grey", image: "https://www.houseofblanks.com/cdn/shop/files/26.06.17_White-TShirt_01.jpg?v=1782140204&width=1445" },
  { id: 59, name: "Waffle Knit Sweatshirt", category: "Hoodies", price: 1800, old: 2300, color: "Cream", image: "https://cdn11.bigcommerce.com/s-rxzabllq/product_images/attribute_rule_images/19951882_source_1744734069.jpg" },
  { id: 60, name: "Flannel Overshirt", category: "Shirts", price: 1900, old: 2450, color: "Rust", image: "https://onia.com/cdn/shop/files/ONIA-SP25-M-ECOMM16890.jpg?v=1758756560" },
  { id: 61, name: "Pleated Relaxed Trousers", category: "Trousers", price: 1800, old: 2300, color: "Stone", image: "https://image.hm.com/assets/hm/7e/66/7e66e02b0b62868649722ba948c5ecd1718afbcd.jpg" },
  { id: 62, name: "Everyday Denim Shorts", category: "Shorts", price: 1200, old: 1550, color: "Indigo", image: "https://spaziouomotaglieforti.it/cdn/shop/collections/bermudacovcat.jpg?v=1758113225" }
];
const money = (n) => "₹" + n.toLocaleString("en-IN");
function App() {
  const [cart, setCart] = useState([]),
    [category, setCategory] = useState("All"),
    [search, setSearch] = useState(""),
    [searchOpen, setSearchOpen] = useState(false),
    [drawer, setDrawer] = useState(false),
    [page, setPage] = useState("home"),
    [notice, setNotice] = useState(""),
    [checkoutStep, setCheckoutStep] = useState(1),
    [order, setOrder] = useState(null);
  const [termsOpen, setTermsOpen] = useState(false);
  const [saved, setSaved] = useState([]);
  const total = cart.reduce((s, p) => s + p.price * p.qty, 0),
    ship = total >= 2500 ? 0 : 100,
    discount = cart.length ? Math.round(total * 0.08) : 0;
  const filtered = useMemo(
    () =>
      catalog.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          p.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [category, search],
  );
  const add = (p) => {
    setCart((c) => {
      const found = c.find((x) => x.id === p.id);
      return found
        ? c.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x))
        : [...c, { ...p, qty: 1 }];
    });
    setNotice("Added to bag");
    setTimeout(() => setNotice(""), 1800);
  };
  const change = (id, d) =>
    setCart((c) =>
      c
        .map((p) => (p.id === id ? { ...p, qty: p.qty + d } : p))
        .filter((p) => p.qty > 0),
    );
  const toggleSave = (id) =>
    setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const go = (p) => {
    setPage(p);
    setDrawer(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const checkout = () => {
    if (!cart.length) return;
    setCheckoutStep(1);
    go("checkout");
  };
  const placeOrder = () => {
    setOrder("SNP-" + Math.floor(100000 + Math.random() * 899999));
    setCart([]);
    go("success");
  };
  const categories = [
    "All",
    "T-Shirts",
    "Hoodies",
    "Shirts",
    "Jeans",
    "Cargo",
    "Joggers",
    "Jackets",
    "Shorts",
    "Accessories",
    "Footwear",
    "Trousers",
    "Socks",
  ];
  return (
    <div className="app">
      <div className="announcement">
        COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹2,500 <span>—</span> MADE FOR
        YOUR EVERYDAY
      </div>
      <header className="header">
        <button
          className="icon-btn mobile"
          onClick={() => setDrawer(true)}
          aria-label="Open menu"
        >
          <Menu />
        </button>
        <a className="brand" onClick={() => go("home")}>
          <span className="brand-mark">S</span>NAPSHOP
          <span className="brand-dot">.</span>
        </a>
        <nav>
          {[
            ["New In", "home"],
            ["Upper Wear", "shop"],
            ["Lower Wear", "shop"],
            ["Collections", "home"],
            ["Our Story", "story"],
          ].map(([t, p]) => (
            <a
              key={t}
              onClick={() => {
                setCategory(
                  t === "Upper Wear"
                    ? "T-Shirts"
                    : t === "Lower Wear"
                      ? "Jeans"
                      : "All",
                );
                go(p);
              }}
            >
              {t}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search />
          </button>
          <button
            className="icon-btn bag-button"
            onClick={() => go("cart")}
            aria-label="Cart"
          >
            <ShoppingBag />
            <i>{cart.reduce((n, p) => n + p.qty, 0)}</i>
          </button>
        </div>
      </header>
      {searchOpen && (
        <div className="searchbar">
          <Search size={18} />
          <input
            autoFocus
            placeholder="Search tees, cargos, essentials..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              go("shop");
            }}
          />
          <button
            onClick={() => {
              setSearch("");
              setSearchOpen(false);
            }}
          >
            <X size={18} />
          </button>
        </div>
      )}
      {drawer && (
        <div className="overlay" onClick={() => setDrawer(false)}>
          <aside className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-head">
              <b>SNAPSHOP.</b>
              <button onClick={() => setDrawer(false)}>
                <X />
              </button>
            </div>
            {[
              "Home",
              "Shop All",
              "Upper Wear",
              "Lower Wear",
              "Cart",
              "Our Story",
            ].map((t, i) => (
              <button
                key={t}
                onClick={() => {
                  setCategory(i === 2 ? "T-Shirts" : i === 3 ? "Jeans" : "All");
                  go(
                    i === 0
                      ? "home"
                      : i === 4
                        ? "cart"
                        : i === 5
                          ? "story"
                          : "shop",
                  );
                }}
              >
                {t}
                <ArrowRight size={17} />
              </button>
            ))}
          </aside>
        </div>
      )}
      <main>
        {page === "home" && (
          <>
            <section className="hero">
              <div className="hero-copy">
                <span className="eyebrow">THE NEW STANDARD</span>
                <h1>
                  Less noise.
                  <br />
                  <em>More</em> presence.
                </h1>
                <p>
                  Considered essentials. Exceptional fits.
                  <br />
                  Built for the way you move.
                </p>
                <button className="primary" onClick={() => go("shop")}>
                  Explore the collection <ArrowUpRight size={17} />
                </button>
                <div className="hero-meta">
                  <span>01 / 03</span>
                  <span className="line"></span>
                  <span>NEW SEASON — 2026</span>
                </div>
              </div>
              <div className="hero-image">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=90"
                  alt="Modern menswear editorial"
                />
              </div>
              <div className="hero-vertical">SNAPSHOP / EVERYDAY, ELEVATED</div>
            </section>
            <section className="benefits">
              {[
                ["01", "Premium materials", "Made to feel better"],
                ["02", "Easy returns", "7-day return window"],
                ["03", "Secure checkout", "Your data stays yours"],
                ["04", "Free shipping", "On orders above ₹2,500"],
              ].map(([n, t, s]) => (
                <div key={n}>
                  <span>{n}</span>
                  <b>{t}</b>
                  <small>{s}</small>
                </div>
              ))}
            </section>
            <section className="section">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">FIND YOUR UNIFORM</span>
                  <h2>
                    Shop by <em>category</em>
                  </h2>
                </div>
                <button className="text-link" onClick={() => go("shop")}>
                  View all categories <ArrowRight size={16} />
                </button>
              </div>
              <div className="category-grid">
                {[
                  [
                    "Upper Wear",
                    "Tees, shirts & layers",
                    "photo-1521572163474-6864f9cf17ab",
                    "T-Shirts",
                  ],
                  [
                    "Lower Wear",
                    "Denim, cargos & joggers",
                    "photo-1542272604-787c3835535d",
                    "Jeans",
                  ],
                  [
                    "Outerwear",
                    "The finishing layer",
                    "photo-1551028719-00167b16eac5",
                    "Jackets",
                  ],
                ].map(([t, s, img, c], i) => (
                  <button
                    className="category-card"
                    key={t}
                    onClick={() => {
                      setCategory(c);
                      go("shop");
                    }}
                  >
                    <img
                      src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=900&q=85`}
                      alt={t}
                    />
                    <div className="category-shade" />
                    <div className="category-copy">
                      <span>0{i + 1} / CATEGORY</span>
                      <h3>{t}</h3>
                      <p>{s}</p>
                      <b>
                        Explore <ArrowUpRight size={16} />
                      </b>
                    </div>
                  </button>
                ))}
              </div>
            </section>
            <section className="section products-section">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">THE CURRENT ROTATION</span>
                  <h2>
                    Best <em>sellers</em>
                  </h2>
                </div>
                <button className="text-link" onClick={() => go("shop")}>
                  Shop all <ArrowRight size={16} />
                </button>
              </div>
              <ProductGrid
                list={catalog.slice(0, 8)}
                add={add}
                saved={saved}
                toggleSave={toggleSave}
              />
            </section>
            <section className="editorial">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85"
                alt="Snapshop editorial campaign"
              />
              <div className="editorial-copy">
                <span className="eyebrow">THE EVERYDAY EDIT</span>
                <h2>
                  Made to be
                  <br />
                  <em>worn on repeat.</em>
                </h2>
                <p>
                  Quiet confidence in every detail. Find pieces that work
                  harder, so you don't have to.
                </p>
                <button className="light-btn" onClick={() => go("shop")}>
                  Discover the edit <ArrowRight size={17} />
                </button>
              </div>
            </section>
            <section className="section">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">JUST LANDED</span>
                  <h2>
                    Fresh <em>arrivals</em>
                  </h2>
                </div>
                <button className="text-link" onClick={() => go("shop")}>
                  See all new in <ArrowRight size={16} />
                </button>
              </div>
              <ProductGrid
                list={catalog.slice(8, 12)}
                add={add}
                saved={saved}
                toggleSave={toggleSave}
              />
            </section>
            <section className="newsletter">
              <span className="eyebrow">THE SNAPSHOP LIST</span>
              <h2>
                Good things.
                <br />
                <em>Occasionally.</em>
              </h2>
              <p>New drops, thoughtful notes, and 10% off your first order.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNotice("You’re on the list. Welcome to SNAPSHOP.");
                  setTimeout(() => setNotice(""), 2400);
                }}
              >
                <input type="email" required placeholder="Your email address" />
                <button aria-label="Subscribe">
                  <ArrowRight />
                </button>
              </form>
              <small>No noise. Unsubscribe whenever.</small>
            </section>
          </>
        )}
        {page === "shop" && (
          <section className="shop-page">
            <div className="shop-intro">
              <span className="eyebrow">THE SNAPSHOP COLLECTION</span>
              <h1>
                Built around <em>you.</em>
              </h1>
              <p>Elevated essentials for every version of your day.</p>
            </div>
            <div className="filter-row">
              {categories.map((c) => (
                <button
                  className={category === c ? "active" : ""}
                  key={c}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
              <span className="product-count">{filtered.length} pieces</span>
            </div>
            <ProductGrid
              list={filtered}
              add={add}
              saved={saved}
              toggleSave={toggleSave}
            />
          </section>
        )}
        {page === "cart" && (
          <section className="cart-page">
            <div className="page-title">
              <span className="eyebrow">YOUR SELECTION</span>
              <h1>
                Your bag <em>({cart.reduce((n, p) => n + p.qty, 0)})</em>
              </h1>
            </div>
            {!cart.length ? (
              <div className="empty">
                <ShoppingBag size={34} />
                <h2>Your bag is taking a breather.</h2>
                <p>Find something that feels like you.</p>
                <button className="primary" onClick={() => go("shop")}>
                  Explore menswear <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <div className="cart-layout">
                <div className="cart-items">
                  <div className="shipping-note">
                    <Truck size={18} />
                    <div>
                      <b>
                        {total >= 2500
                          ? "You unlocked free shipping"
                          : "You’re close to free shipping"}
                      </b>
                      <p>
                        {total >= 2500
                          ? "Your delivery is on us."
                          : `Add ${money(2500 - total)} more to get free shipping.`}
                      </p>
                      <div className="progress">
                        <i
                          style={{
                            width: Math.min((total / 2500) * 100, 100) + "%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {cart.map((p) => (
                    <div className="cart-item" key={p.id}>
                      <img src={p.image} alt={p.name} {...safeProductImage(p)} />
                      <div className="cart-item-info">
                        <span className="eyebrow">{p.category}</span>
                        <h3>{p.name}</h3>
                        <p>{p.color} · M</p>
                        <div className="qty">
                          <button onClick={() => change(p.id, -1)}>
                            <Minus size={13} />
                          </button>
                          <span>{p.qty}</span>
                          <button onClick={() => change(p.id, 1)}>
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-end">
                        <b>{money(p.price * p.qty)}</b>
                        <button
                          onClick={() => change(p.id, -p.qty)}
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <aside className="summary">
                  <span className="eyebrow">ORDER SUMMARY</span>
                  <h2>The details.</h2>
                  <div>
                    <span>Subtotal</span>
                    <b>{money(total)}</b>
                  </div>
                  <div>
                    <span>Shipping</span>
                    <b>{ship ? money(ship) : "Complimentary"}</b>
                  </div>
                  <div>
                    <span>Welcome discount</span>
                    <b className="discount">−{money(discount)}</b>
                  </div>
                  <div className="summary-total">
                    <span>Total</span>
                    <b>{money(total + ship - discount)}</b>
                  </div>
                  <button className="primary full" onClick={() => cart.length && setTermsOpen(true)}>
                    Continue to checkout <ArrowRight size={17} />
                  </button>
                  <p className="secure">
                    <ShieldCheck size={14} /> Secure checkout · Taxes included
                  </p>
                  <button
                    className="text-link centered"
                    onClick={() => go("shop")}
                  >
                    Continue shopping
                  </button>
                </aside>
              </div>
            )}
          </section>
        )}
        {page === "checkout" && (
          <section className="checkout-page">
            <div className="page-title">
              <span className="eyebrow">ALMOST YOURS</span>
              <h1>
                Checkout <em>with ease.</em>
              </h1>
            </div>
            <div className="checkout-steps">
              {["Delivery", "Payment", "Review"].map((s, i) => (
                <div
                  className={
                    checkoutStep === i + 1
                      ? "current"
                      : checkoutStep > i + 1
                        ? "done"
                        : ""
                  }
                  key={s}
                >
                  <span>
                    {checkoutStep > i + 1 ? <Check size={14} /> : `0${i + 1}`}
                  </span>
                  <b>{s}</b>
                </div>
              ))}
            </div>
            <div className="checkout-layout">
              <form
                className="checkout-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  checkoutStep < 3
                    ? setCheckoutStep(checkoutStep + 1)
                    : placeOrder();
                }}
              >
                {checkoutStep === 1 ? (
                  <>
                    <div className="form-heading">
                      <span>01</span>
                      <div>
                        <h2>Where should it go?</h2>
                        <p>Your delivery details</p>
                      </div>
                    </div>
                    <div className="form-grid">
                      <label>
                        Full name
                        <input required placeholder="Your full name" />
                      </label>
                      <label>
                        Phone number
                        <input
                          required
                          type="tel"
                          placeholder="+91 00000 00000"
                        />
                      </label>
                      <label className="wide">
                        Email address
                        <input
                          required
                          type="email"
                          placeholder="you@example.com"
                        />
                      </label>
                      <label className="wide">
                        Street address
                        <input required placeholder="House no., street, area" />
                      </label>
                      <label>
                        City
                        <input required placeholder="City" />
                      </label>
                      <label>
                        PIN code
                        <input
                          required
                          inputMode="numeric"
                          placeholder="6-digit PIN"
                        />
                      </label>
                      <label className="wide">
                        State
                        <select required defaultValue="">
                          <option value="" disabled>
                            Select state
                          </option>
                          {[
                            "Uttar Pradesh",
                            "Delhi",
                            "Uttarakhand",
                            "Haryana",
                            "Maharashtra",
                            "Karnataka",
                            "Tamil Nadu",
                            "West Bengal",
                            "Rajasthan",
                            "Other",
                          ].map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </>
                ) : checkoutStep === 2 ? (
                  <>
                    <div className="form-heading">
                      <span>02</span>
                      <div>
                        <h2>Choose how to pay.</h2>
                        <p>Safe, simple, secure</p>
                      </div>
                    </div>
                    <div className="payment-options">
                      {[
                        ["UPI", "Pay with any UPI app"],
                        ["Card", "Credit or debit card"],
                        ["COD", "Cash on delivery"],
                      ].map(([t, s], i) => (
                        <label key={t}>
                          <input
                            type="radio"
                            name="pay"
                            defaultChecked={i === 0}
                          />
                          <span>
                            <b>{t}</b>
                            <small>{s}</small>
                          </span>
                          <span className="radio-ui" />
                        </label>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-heading">
                      <span>03</span>
                      <div>
                        <h2>One last look.</h2>
                        <p>Review your order before placing it</p>
                      </div>
                    </div>
                    {cart.map((p) => (
                      <div className="review-line" key={p.id}>
                        <img src={p.image} />
                        <span>
                          {p.name}
                          <small>
                            Qty {p.qty} · {p.color}
                          </small>
                        </span>
                        <b>{money(p.price * p.qty)}</b>
                      </div>
                    ))}
                  </>
                )}
                <div className="form-actions">
                  {checkoutStep > 1 && (
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => setCheckoutStep(checkoutStep - 1)}
                    >
                      Back
                    </button>
                  )}
                  <button className="primary" type="submit">
                    {checkoutStep === 3 ? "Place order securely" : "Continue"}{" "}
                    <ArrowRight size={17} />
                  </button>
                </div>
              </form>
              <aside className="summary checkout-summary">
                <span className="eyebrow">YOUR ORDER</span>
                <h2>A good choice.</h2>
                {cart.map((p) => (
                  <div className="mini-item" key={p.id}>
                    <img src={p.image} />
                    <span>
                      {p.name}
                      <small>Qty {p.qty}</small>
                    </span>
                    <b>{money(p.price * p.qty)}</b>
                  </div>
                ))}
                <div>
                  <span>Subtotal</span>
                  <b>{money(total)}</b>
                </div>
                <div>
                  <span>Shipping</span>
                  <b>{ship ? money(ship) : "Free"}</b>
                </div>
                <div>
                  <span>Discount</span>
                  <b className="discount">−{money(discount)}</b>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <b>{money(total + ship - discount)}</b>
                </div>
                <p className="secure">
                  <ShieldCheck size={14} /> Encrypted and secure payment
                </p>
              </aside>
            </div>
          </section>
        )}
        {page === "success" && (
          <section className="success-page">
            <div className="success-mark">
              <span>✓</span>
            </div>
            <span className="eyebrow">ORDER CONFIRMED</span>
            <h1>
              That looks
              <br />
              <em>good on you.</em>
            </h1>
            <p>
              Your order is in. We’re getting your pieces ready, and you’ll hear
              from us as soon as they’re on the move.
            </p>
            <div className="order-ticket">
              <span>ORDER REFERENCE</span>
              <b>{order}</b>
              <small>Confirmation details will be sent to your email.</small>
            </div>
            <button className="primary" onClick={() => go("shop")}>
              Keep exploring <ArrowRight size={17} />
            </button>
          </section>
        )}
        {page === "story" && (
          <section className="story-page">
            <span className="eyebrow">OUR POINT OF VIEW</span>
            <h1>
              Less, but
              <br />
              <em>with intention.</em>
            </h1>
            <p>
              SNAPSHOP is built around the belief that what you wear should feel
              effortless. Thoughtful silhouettes, dependable materials, and
              everyday pieces designed to earn their place in your wardrobe.
            </p>
            <button className="primary" onClick={() => go("shop")}>
              Explore the collection <ArrowRight size={17} />
            </button>
          </section>
        )}
        {["terms", "privacy", "returns"].includes(page) && (
          <Policy page={page} />
        )}
      </main>
      <footer>
        <div className="footer-top">
          <div>
            <a className="brand" onClick={() => go("home")}>
              <span className="brand-mark">S</span>NAPSHOP
              <span className="brand-dot">.</span>
            </a>
            <p>
              Everyday, elevated.
              <br />
              Modern menswear with intention.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <b>Explore</b>
              <a onClick={() => go("shop")}>Shop all</a>
              <a onClick={() => go("shop")}>Upper wear</a>
              <a onClick={() => go("shop")}>Lower wear</a>
              <a onClick={() => go("story")}>Our story</a>
            </div>
            <div>
              <b>Help & policies</b>
              <a onClick={() => go("terms")}>Terms & conditions</a>
              <a onClick={() => go("privacy")}>Privacy policy</a>
              <a onClick={() => go("returns")}>Returns & refunds</a>
              <a onClick={() => go("cart")}>Your bag</a>
            </div>
            <div>
              <b>Visit us</b>
              <p>
                Office No. 101, First Floor,
                <br />
                Local Shopping Centre (approx. 292 sq. ft.),
                <br />
                Barodia Tower, Building No. D-12,
                <br />
                Central Market, D-Block, Prashant Vihar,
                <br />
                Rohini, Delhi - 110085, India
              </p>
              <a href="mailto:support@snapshop.in">support@snapshop.in</a>
              <a href="tel:9762387360">+91 97623 87360</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SNAPSHOP. All rights reserved.</span>
          <span>Made for the everyday.</span>
        </div>
      </footer>
      {termsOpen && (
        <TermsModal
          onClose={() => setTermsOpen(false)}
          onAgree={() => {
            setTermsOpen(false);
            checkout();
          }}
        />
      )}
      {notice && (
        <div className="toast">
          <Check size={16} />
          {notice}
        </div>
      )}
    </div>
  );
}

const categoryImageFallbacks = {"T-Shirts": ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90"], "Hoodies": ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=90"], "Shirts": ["https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1000&q=90"], "Jeans": ["https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=90"], "Cargo": ["https://images.unsplash.com/photo-1506629905607-d9c297d8c4e7?auto=format&fit=crop&w=1000&q=90"], "Joggers": ["https://images.unsplash.com/photo-1506629905607-d9c297d8c4e7?auto=format&fit=crop&w=1000&q=90"], "Jackets": ["https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=90"], "Shorts": ["https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=90"], "Accessories": ["https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=90"], "Footwear": ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"], "Trousers": ["https://images.unsplash.com/photo-1506629905607-d9c297d8c4e7?auto=format&fit=crop&w=1000&q=90"]};
const safeProductImage = (product) => {
  const fallbacks = categoryImageFallbacks[product.category] || [];
  let attempt = 0;
  return {
    onError: (event) => {
      if (attempt >= fallbacks.length) {
        event.currentTarget.onerror = null;
        return;
      }
      event.currentTarget.src = fallbacks[attempt++];
    }
  };
};

function ProductGrid({ list, add, saved, toggleSave }) {
  return (
    <div className="product-grid">
      {list.map((p, i) => (
        <article className="product-card" key={p.id}>
          <div className="product-image">
            <img loading="lazy" decoding="async" src={p.image} alt={p.name} {...safeProductImage(p)} />
            <span className="product-badge">
              {i % 3 === 0
                ? "BESTSELLER"
                : i % 3 === 1
                  ? "NEW IN"
                  : "ESSENTIAL"}
            </span>
            <button
              className={"wish " + (saved.includes(p.id) ? "saved" : "")}
              onClick={() => toggleSave(p.id)}
              aria-label="Save item"
            >
              <Heart
                size={17}
                fill={saved.includes(p.id) ? "currentColor" : "none"}
              />
            </button>
            <button className="quick-add" onClick={() => add(p)}>
              Add to bag <Plus size={15} />
            </button>
          </div>
          <div className="product-info">
            <div>
              <h3>{p.name}</h3>
              <p>
                {p.color} · {p.category}
              </p>
            </div>
            <div className="prices">
              <b>{money(p.price)}</b>
              <del>{money(p.old)}</del>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
function TermsModal({ onClose, onAgree }) {
  const [agreed, setAgreed] = useState(false);
  const [view, setView] = useState(null);
  const toggle = (v) => setView((cur) => (cur === v ? null : v));
  return (
    <div className="terms-overlay" onClick={onClose}>
      <div
        className="terms-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="terms-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <span className="eyebrow">BEFORE YOU CHECKOUT</span>
        <h2 id="terms-title">Please review & agree</h2>
        <p className="terms-lead">
          To continue to checkout, please confirm that you have read and agree
          to our policies.
        </p>
        <div className="terms-links">
          <button
            type="button"
            className={view === "terms" ? "on" : ""}
            onClick={() => toggle("terms")}
          >
            Terms & Conditions
          </button>
          <button
            type="button"
            className={view === "privacy" ? "on" : ""}
            onClick={() => toggle("privacy")}
          >
            Privacy Policy
          </button>
        </div>
        {view && (
          <div className="terms-scroll">
            <PolicyBody d={policyData[view]} />
          </div>
        )}
        <label className="terms-check">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span>I agree to the Terms & Conditions and Privacy Policy</span>
        </label>
        <div className="terms-actions">
          <button type="button" className="secondary" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="primary terms-agree"
            disabled={!agreed}
            onClick={onAgree}
          >
            I agree & continue <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

const policyData = {
    terms: [
      "Terms & Conditions",
      "These terms govern your use of the SNAPSHOP storefront and purchases from Snapshop. By browsing or placing an order, you agree to these terms.",
      "Orders & pricing",
      "Product availability, descriptions, and prices may change without notice. An order is confirmed after successful placement and confirmation. We may cancel an order if a listing or price contains an obvious error; any payment received will be refunded.",
      "Use of the website",
      "Use the website lawfully and do not attempt to disrupt, scrape, reverse engineer, or compromise its operation. Product images are illustrative; actual colors may vary by display.",
      "Limitation & updates",
      "To the extent permitted by applicable law, SNAPSHOP is not responsible for indirect losses arising from use of the website. These terms may be updated from time to time.",
    ],
    privacy: [
      "Privacy Policy",
      "Snapshop respects your privacy. This policy describes the information a storefront may collect to process orders and improve the shopping experience.",
      "Information we collect",
      "When you order, we may collect your name, contact details, delivery address, order contents, and payment status. Payment credentials should be handled by a secure payment provider and are not stored by this demo storefront.",
      "How we use information",
      "We use information to fulfil orders, communicate delivery updates, provide customer support, prevent fraud, and maintain the service. We do not sell personal information.",
      "Your choices & security",
      "You may request access, correction, or deletion of personal information where applicable. Contact us using the details below. We use reasonable safeguards, though no online system can guarantee absolute security.",
    ],
    returns: [
      "Returns, Exchanges & Refunds",
      "We want you to feel right in your SNAPSHOP pieces. This policy is a starter store policy and should be reviewed against your actual operations and applicable Indian consumer law before launch.",
      "Return window & condition",
      "You may request a return or size exchange within 7 days of delivery for eligible unworn, unwashed items with original tags and packaging. Items showing wear, damage, or missing tags may not qualify.",
      "How to request",
      "Contact support with your order reference and reason for return. We will share next steps and pickup or shipping instructions. Please wait for return approval before sending an item back.",
      "Refunds",
      "After inspection and approval, refunds are processed to the original payment method where possible. Processing time depends on the payment provider or bank. Shipping charges may be non-refundable except where required by law.",
    ],
};

function PolicyBody({ d }) {
  return (
    <>
      <h1>{d[0]}</h1>
      <p className="policy-intro">{d[1]}</p>
      {d
        .slice(2)
        .map((t, i) =>
          i % 2 === 0 ? <h2 key={i}>{t}</h2> : <p key={i}>{t}</p>,
        )}
    </>
  );
}

function Policy({ page }) {
  let d = policyData[page];
  return (
    <section className="policy">
      <span className="eyebrow">SNAPSHOP / CUSTOMER CARE</span>
      <h1>{d[0]}</h1>
      <p className="policy-intro">{d[1]}</p>
      {d
        .slice(2)
        .map((t, i) =>
          i % 2 === 0 ? <h2 key={i}>{t}</h2> : <p key={i}>{t}</p>,
        )}
      <div className="policy-contact">
        <b>Snapshop</b>
        <p>
          Office No. 101, First Floor, Local Shopping Centre (approx. 292 sq.
          ft.), Barodia Tower, Building No. D-12, Central Market, D-Block,
          Prashant Vihar, Rohini, Delhi - 110085, India
        </p>
        <p>Email: support@snapshop.in</p>
        <p>Phone: +91 97623 87360</p>
      </div>
    </section>
  );
}
createRoot(document.getElementById("root")).render(<App />);
