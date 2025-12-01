import React, { useState, useMemo } from "react";
import { Grid, List, SlidersHorizontal, Search, X, ChevronDown } from "lucide-react";

// Mock ProductCard Component (replace with your actual one)
const ProductCard = ({ item, index }) => {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        padding: '16px',
        transition: 'all 0.3s ease',
        animation: `fadeInUp 0.5s ease ${index * 0.1}s backwards`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
      }}
    >
      <div style={{
        width: '100%',
        height: '200px',
        background: '#f3f4f6',
        borderRadius: '12px',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px',
      }}>
        📦
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
        {item.name}
      </h3>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>
        {item.size || 'Standard size'}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '24px', fontWeight: '700', color: '#667eea' }}>
          Rs {item.price}
        </span>
        <button style={{
          padding: '8px 16px',
          background: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '600',
        }}>
          Add
        </button>
      </div>
    </div>
  );
};

export default function ProductGrid({ limit }) {
  // Sample products data (replace with your actual data)
  const products = [
    { id: 1, name: "Classic Rolling Papers", size: "King Size", price: 299, category: "classic" },
    { id: 2, name: "Black Edition", size: "Regular", price: 349, category: "premium" },
    { id: 3, name: "Organic Hemp Papers", size: "King Size", price: 399, category: "organic" },
    { id: 4, name: "Pre-Rolled Cones", size: "Pack of 6", price: 249, category: "cones" },
    { id: 5, name: "RAW Classic", size: "King Slim", price: 329, category: "classic" },
    { id: 6, name: "RAW Black", size: "King Slim", price: 379, category: "premium" },
    { id: 7, name: "Elements Rice Papers", size: "Regular", price: 289, category: "organic" },
    { id: 8, name: "Cone Loader Kit", size: "Complete Set", price: 499, category: "accessories" },
  ];

  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = limit ? products.slice(0, limit) : products;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Sort
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [products, searchTerm, selectedCategory, sortBy, limit]);

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'classic', label: 'Classic' },
    { value: 'premium', label: 'Premium' },
    { value: 'organic', label: 'Organic' },
    { value: 'cones', label: 'Pre-Rolled' },
    { value: 'accessories', label: 'Accessories' },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.headerTop}>
            <div>
              <h2 style={styles.title}>Our Products</h2>
              <p style={styles.subtitle}>
                Discover our premium collection of rolling papers
              </p>
            </div>
            <div style={styles.resultCount}>
              <span style={styles.countBadge}>
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>
            </div>
          </div>

          {/* Search and Filters Bar */}
          <div style={styles.controlsBar}>
            {/* Search */}
            <div style={styles.searchWrapper}>
              <Search size={20} style={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={styles.clearButton}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                ...styles.filterButton,
                background: showFilters ? '#667eea' : 'white',
                color: showFilters ? 'white' : '#4b5563',
              }}
            >
              <SlidersHorizontal size={18} />
              <span>Filters</span>
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={styles.sortSelect}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>

            {/* View Mode Toggle */}
            <div style={styles.viewToggle}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  ...styles.viewButton,
                  background: viewMode === 'grid' ? '#667eea' : 'transparent',
                  color: viewMode === 'grid' ? 'white' : '#6b7280',
                }}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  ...styles.viewButton,
                  background: viewMode === 'list' ? '#667eea' : 'transparent',
                  color: viewMode === 'list' ? 'white' : '#6b7280',
                }}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          {showFilters && (
            <div style={styles.categoryFilters}>
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  style={{
                    ...styles.categoryPill,
                    background: selectedCategory === cat.value
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'white',
                    color: selectedCategory === cat.value ? 'white' : '#4b5563',
                    border: selectedCategory === cat.value
                      ? 'none'
                      : '2px solid #e5e7eb',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>🔍</div>
            <h3 style={styles.emptyTitle}>No products found</h3>
            <p style={styles.emptyText}>
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              style={styles.resetButton}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div
            style={{
              ...styles.grid,
              gridTemplateColumns: viewMode === 'grid'
                ? 'repeat(auto-fill, minmax(280px, 1fr))'
                : '1fr',
            }}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} item={product} index={index} />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    background: 'linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%)',
    padding: '3rem 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    marginBottom: '3rem',
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: '0.5rem',
    background: 'linear-gradient(135deg, #1f2937 0%, #4b5563 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
  },
  resultCount: {
    display: 'flex',
    alignItems: 'center',
  },
  countBadge: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '600',
  },
  controlsBar: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  searchWrapper: {
    position: 'relative',
    flex: '1',
    minWidth: '250px',
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
  },
  searchInput: {
    width: '100%',
    padding: '0.75rem 2.5rem',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  clearButton: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#9ca3af',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.25rem',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  sortSelect: {
    padding: '0.75rem 1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    outline: 'none',
    background: 'white',
    color: '#4b5563',
  },
  viewToggle: {
    display: 'flex',
    gap: '0.5rem',
    background: 'white',
    padding: '4px',
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
  },
  viewButton: {
    padding: '0.5rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryFilters: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    padding: '1.5rem',
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    animation: 'fadeInUp 0.3s ease',
  },
  categoryPill: {
    padding: '0.5rem 1.25rem',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  grid: {
    display: 'grid',
    gap: '2rem',
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem 2rem',
  },
  emptyIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },
  emptyTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '0.5rem',
  },
  emptyText: {
    fontSize: '1rem',
    color: '#6b7280',
    marginBottom: '2rem',
  },
  resetButton: {
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};