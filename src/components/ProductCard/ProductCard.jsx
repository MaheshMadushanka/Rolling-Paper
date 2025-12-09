// ProductCard.jsx - Change this line
const ProductCard = ({ product, index }) => {
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
        overflow: 'hidden',
      }}>
        <img 
          src={product.img} 
          alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
        {product.name}
      </h3>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>
        {product.size || 'Standard size'}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '24px', fontWeight: '700', color: '#667eea' }}>
          Rs {product.price}
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

export default ProductCard;