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

const products = [
  {
    id: 1,
    name: "Essential Heavyweight Tee",
    category: "T-Shirts",
    price: 899,
    old: 1299,
    color: "Onyx",
    image: "photo-152 garment".replace(" garment", ""),
  },
  {
    id: 2,
    name: "Relaxed Fit Crew Tee",
    category: "T-Shirts",
    price: 999,
    old: 1499,
    color: "Bone",
    image: "photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 3,
    name: "Studio Oversized Hoodie",
    category: "Hoodies",
    price: 2199,
    old: 2799,
    color: "Black",
    image: "photo-1556821840-3a63f95609a7",
  },
  {
    id: 4,
    name: "Everyday Zip Hoodie",
    category: "Hoodies",
    price: 2499,
    old: 3299,
    color: "Stone",
    image: "photo-1556821840-3a63f95609a7",
  },
  {
    id: 5,
    name: "Utility Overshirt",
    category: "Shirts",
    price: 1999,
    old: 2599,
    color: "Olive",
    image: "photo-1598032895397-b9472444bf93",
  },
  {
    id: 6,
    name: "Oxford Button-Down",
    category: "Shirts",
    price: 1799,
    old: 2299,
    color: "Cloud",
    image: "photo-1598032895397-b9472444bf93",
  },
  {
    id: 7,
    name: "Everyday Cargo Pant",
    category: "Cargo",
    price: 2499,
    old: 3199,
    color: "Black",
    image: "photo-1542272604-787c3835535d",
  },
  {
    id: 8,
    name: "Relaxed Denim",
    category: "Jeans",
    price: 2299,
    old: 2999,
    color: "Indigo",
    image: "photo-1542272604-787c3835535d",
  },
  {
    id: 9,
    name: "Straight Fit Denim",
    category: "Jeans",
    price: 2399,
    old: 3199,
    color: "Washed Blue",
    image: "photo-1542272604-787c3835535d",
  },
  {
    id: 10,
    name: "Tapered Joggers",
    category: "Joggers",
    price: 1699,
    old: 2199,
    color: "Charcoal",
    image: "photo-1552902865-b72c031ac5ea",
  },
  {
    id: 11,
    name: "Track Pant 02",
    category: "Joggers",
    price: 1899,
    old: 2499,
    color: "Black",
    image: "photo-1552902865-b72c031ac5ea",
  },
  {
    id: 12,
    name: "Minimal Bomber",
    category: "Jackets",
    price: 3299,
    old: 4299,
    color: "Forest",
    image: "photo-1551028719-00167b16eac5",
  },
  {
    id: 13,
    name: "Everyday Coach Jacket",
    category: "Jackets",
    price: 2999,
    old: 3999,
    color: "Black",
    image: "photo-1551028719-00167b16eac5",
  },
  {
    id: 14,
    name: "Linen Blend Shirt",
    category: "Shirts",
    price: 1899,
    old: 2499,
    color: "Sand",
    image: "photo-1598032895397-b9472444bf93",
  },
  {
    id: 15,
    name: "Premium Polo",
    category: "T-Shirts",
    price: 1299,
    old: 1799,
    color: "Cream",
    image: "photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 16,
    name: "Ribbed Tank",
    category: "T-Shirts",
    price: 699,
    old: 999,
    color: "White",
    image: "photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 17,
    name: "Cargo Shorts",
    category: "Shorts",
    price: 1499,
    old: 1999,
    color: "Olive",
    image: "photo-1542272604-787c3835535d",
  },
  {
    id: 18,
    name: "Weekend Shorts",
    category: "Shorts",
    price: 1199,
    old: 1599,
    color: "Black",
    image: "photo-1542272604-787c3835535d",
  },
  {
    id: 19,
    name: "Co-ord Sweatshirt",
    category: "Hoodies",
    price: 2299,
    old: 2999,
    color: "Grey",
    image: "photo-1556821840-3a63f95609a7",
  },
  {
    id: 20,
    name: "Signature Cap",
    category: "Accessories",
    price: 699,
    old: 999,
    color: "Black",
    image: "photo-1588850561407-ed78c282e89b",
  },
];
// Use curated Unsplash source photo IDs for reliable image URLs.
const images = [
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-152550 данным?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1506629905607-d9c297d8c4e7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=85",
];

const catalog = products.map((p, i) => ({
  ...p,
  image: images[i],
}));
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
  const [saved, setSaved] = useState([]);
  const total = cart.reduce((s, p) => s + p.price * p.qty, 0),
    ship = total >= 2499 ? 0 : 99,
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
    setOrder("VVR-" + Math.floor(100000 + Math.random() * 899999));
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
  ];
  return (
    <div className="app">
      <div className="announcement">
        COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹2,499 <span>—</span> MADE FOR
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
          <span className="brand-mark">V</span>AVRA
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
              <b>VAVRA.</b>
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
              <div className="hero-vertical">VAVRA / EVERYDAY, ELEVATED</div>
            </section>
            <section className="benefits">
              {[
                ["01", "Premium materials", "Made to feel better"],
                ["02", "Easy returns", "7-day return window"],
                ["03", "Secure checkout", "Your data stays yours"],
                ["04", "Free shipping", "On orders above ₹2,499"],
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
                alt="Vavra editorial campaign"
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
              <span className="eyebrow">THE VAVRA LIST</span>
              <h2>
                Good things.
                <br />
                <em>Occasionally.</em>
              </h2>
              <p>New drops, thoughtful notes, and 10% off your first order.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setNotice("You’re on the list. Welcome to VAVRA.");
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
              <span className="eyebrow">THE VAVRA COLLECTION</span>
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
                        {total >= 2499
                          ? "You unlocked free shipping"
                          : "You’re close to free shipping"}
                      </b>
                      <p>
                        {total >= 2499
                          ? "Your delivery is on us."
                          : `Add ${money(2499 - total)} more to get free shipping.`}
                      </p>
                      <div className="progress">
                        <i
                          style={{
                            width: Math.min((total / 2499) * 100, 100) + "%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {cart.map((p) => (
                    <div className="cart-item" key={p.id}>
                      <img src={p.image} alt={p.name} />
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
                  <button className="primary full" onClick={checkout}>
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
              VAVRA is built around the belief that what you wear should feel
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
              <span className="brand-mark">V</span>AVRA
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
                Second Floor, SF-149,
                <br />
                Gaur City Center (GCC), Sector 4,
                <br />
                Gautam Budh Nagar, Greater Noida,
                <br />
                Uttar Pradesh 201318, India
              </p>
              <a href="tel:9762387360">+91 97623 87360</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 VAVRA. A Vavora Mart Private Limited brand.</span>
          <span>Made for the everyday.</span>
        </div>
      </footer>
      {notice && (
        <div className="toast">
          <Check size={16} />
          {notice}
        </div>
      )}
    </div>
  );
}
function ProductGrid({ list, add, saved, toggleSave }) {
  return (
    <div className="product-grid">
      {list.map((p, i) => (
        <article className="product-card" key={p.id}>
          <div className="product-image">
            <img loading="lazy" src={p.image} alt={p.name} />
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
function Policy({ page }) {
  const data = {
    terms: [
      "Terms & Conditions",
      "These terms govern your use of the VAVRA storefront and purchases from Vavora Mart Private Limited. By browsing or placing an order, you agree to these terms.",
      "Orders & pricing",
      "Product availability, descriptions, and prices may change without notice. An order is confirmed after successful placement and confirmation. We may cancel an order if a listing or price contains an obvious error; any payment received will be refunded.",
      "Use of the website",
      "Use the website lawfully and do not attempt to disrupt, scrape, reverse engineer, or compromise its operation. Product images are illustrative; actual colors may vary by display.",
      "Limitation & updates",
      "To the extent permitted by applicable law, VAVRA is not responsible for indirect losses arising from use of the website. These terms may be updated from time to time.",
    ],
    privacy: [
      "Privacy Policy",
      "Vavora Mart Private Limited respects your privacy. This policy describes the information a storefront may collect to process orders and improve the shopping experience.",
      "Information we collect",
      "When you order, we may collect your name, contact details, delivery address, order contents, and payment status. Payment credentials should be handled by a secure payment provider and are not stored by this demo storefront.",
      "How we use information",
      "We use information to fulfil orders, communicate delivery updates, provide customer support, prevent fraud, and maintain the service. We do not sell personal information.",
      "Your choices & security",
      "You may request access, correction, or deletion of personal information where applicable. Contact us using the details below. We use reasonable safeguards, though no online system can guarantee absolute security.",
    ],
    returns: [
      "Returns, Exchanges & Refunds",
      "We want you to feel right in your VAVRA pieces. This policy is a starter store policy and should be reviewed against your actual operations and applicable Indian consumer law before launch.",
      "Return window & condition",
      "You may request a return or size exchange within 7 days of delivery for eligible unworn, unwashed items with original tags and packaging. Items showing wear, damage, or missing tags may not qualify.",
      "How to request",
      "Contact support with your order reference and reason for return. We will share next steps and pickup or shipping instructions. Please wait for return approval before sending an item back.",
      "Refunds",
      "After inspection and approval, refunds are processed to the original payment method where possible. Processing time depends on the payment provider or bank. Shipping charges may be non-refundable except where required by law.",
    ],
  };
  let d = data[page];
  return (
    <section className="policy">
      <span className="eyebrow">VAVRA / CUSTOMER CARE</span>
      <h1>{d[0]}</h1>
      <p className="policy-intro">{d[1]}</p>
      {d
        .slice(2)
        .map((t, i) =>
          i % 2 === 0 ? <h2 key={i}>{t}</h2> : <p key={i}>{t}</p>,
        )}
      <div className="policy-contact">
        <b>Vavora Mart Private Limited</b>
        <p>
          Second Floor, SF-149, Gaur City Center (GCC), Sector 4, Gautam Budh
          Nagar, Greater Noida, Uttar Pradesh 201318, India
        </p>
        <p>Phone: +91 97623 87360</p>
      </div>
    </section>
  );
}
createRoot(document.getElementById("root")).render(<App />);
