import React from "react";


import ProductCard from "../ProductCard/ProductCard";
const ProductGridLayout = () => {
  const products = [
    {
      id: 1,
      name: "Classic Rolling Papers",
      size: "King Size, 32 leaves",
      price: 299,
      originalPrice: 399,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      badge: "20% OFF"
    },
    {
      id: 2,
      name: "Black Edition Papers",
      size: "King Slim, 50 leaves",
      price: 349,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      badge: "NEW"
    },
    {
      id: 3,
      name: "Organic Hemp Papers",
      size: "Regular, 100 leaves",
      price: 399,
      originalPrice: 499,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      badge: "25% OFF"
    },
    {
      id: 4,
      name: "Pre-Rolled Cones",
      size: "Pack of 6",
      price: 249,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
      badge: "POPULAR"
    },
  ];

    return (
    <div style={styles.pageWrapper}>
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.headerSection}>
            <h1 style={styles.mainTitle}>Featured Products</h1>
            <p style={styles.mainSubtitle}>
              Discover our premium collection of natural rolling papers
            </p>
          </div>

          <div style={styles.productsGrid}>
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  // Page Layout
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '1vh',
    background: '#f9fafb',
  },
  main: {
    flex: 1,
    padding: '5rem 0',
  },


  // Header
  headerSection: {
    textAlign: 'center',
    marginBottom: '0rem',
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: '15rem',
    background: 'linear-gradient(135deg, #1f2937 0%, #4b5563 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  mainSubtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
  },

  // Products Grid - RESPONSIVE
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns on desktop
    gap: '2rem',
  },

  // Product Card
  productCard: {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid #e5e7eb',
    padding: '1rem',
    transition: 'all 0.3s ease',
  },

  // Image
  imageContainer: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    marginBottom: '1rem',
    background: '#f3f4f6',
    aspectRatio: '4/3',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  favoriteBtn: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'white',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  badge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '16px',
    fontSize: '11px',
    fontWeight: '700',
  },

  // Product Info
  productInfo: {
    padding: '0.5rem',
  },
  productName: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem',
    lineHeight: '1.4',
  },
  productSize: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '0.75rem',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '1rem',
  },
  ratingText: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginLeft: '4px',
  },

  // Price Section
  priceSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: '0.875rem',
    color: '#9ca3af',
    textDecoration: 'line-through',
    display: 'block',
    marginBottom: '2px',
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  
};

// CSS for responsive behavior
const styleSheet = `
  /* Desktop: 4 cards */
  @media (min-width: 1024px) {
    .products-grid {
      grid-template-columns: repeat(4, 1fr) !important;
    }
  }

  /* Tablet: 2 cards */
  @media (min-width: 768px) and (max-width: 1023px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }

  /* Mobile: 1 card */
  @media (max-width: 767px) {
    .products-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }

    .nav-links {
      display: none !important;
    }

    .mobile-menu-btn {
      display: block !important;
    }

    .footer-content {
      grid-template-columns: 1fr !important;
    }

    .main-title {
      font-size: 2rem !important;
    }
  }

  /* Hover effects */
  .add-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  .nav-link:hover {
    color: #667eea !important;
  }

  .footer-link:hover {
    color: #fbbf24 !important;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = styleSheet;
  document.head.appendChild(style);
}

export default ProductGridLayout;