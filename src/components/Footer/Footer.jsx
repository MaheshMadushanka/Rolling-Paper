import React from "react";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      {/* Main Footer Content */}
      <div style={styles.mainFooter}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {/* Company Info */}
            <div style={styles.column}>
              <div style={styles.logo}>
                <span style={styles.logoIcon}>✨</span>
                <span style={styles.logoText}>PureWrap</span>
              </div>
              <p style={styles.tagline}>
                Premium natural rolling papers crafted for the perfect experience. 
                Ultra-thin, slow-burning, and environmentally conscious.
              </p>
              
              {/* Social Links */}
              <div style={styles.socialLinks}>
                <a href="#" style={styles.socialIcon} aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" style={styles.socialIcon} aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" style={styles.socialIcon} aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" style={styles.socialIcon} aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div style={styles.column}>
              <h3 style={styles.columnTitle}>Quick Links</h3>
              <ul style={styles.linkList}>
                <li><a href="/" style={styles.link}>Home</a></li>
                <li><a href="/products" style={styles.link}>Products</a></li>
                <li><a href="/about" style={styles.link}>About Us</a></li>
                <li><a href="/wholesale" style={styles.link}>Wholesale</a></li>
                <li><a href="/contact" style={styles.link}>Contact</a></li>
              </ul>
            </div>

            {/* Products */}
            <div style={styles.column}>
              <h3 style={styles.columnTitle}>Products</h3>
              <ul style={styles.linkList}>
                <li><a href="/products/classic" style={styles.link}>Classic Papers</a></li>
                <li><a href="/products/black" style={styles.link}>Black Edition</a></li>
                <li><a href="/products/organic" style={styles.link}>Organic Hemp</a></li>
                <li><a href="/products/kingsize" style={styles.link}>King Size</a></li>
                <li><a href="/products/cones" style={styles.link}>Pre-Rolled Cones</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div style={styles.column}>
              <h3 style={styles.columnTitle}>Contact Us</h3>
              <ul style={styles.contactList}>
                <li style={styles.contactItem}>
                  <MapPin size={16} style={styles.contactIcon} />
                  <span>123 Hemp Street, Green City, GC 12345</span>
                </li>
                <li style={styles.contactItem}>
                  <Phone size={16} style={styles.contactIcon} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li style={styles.contactItem}>
                  <Mail size={16} style={styles.contactIcon} />
                  <span>info@purewrap.com</span>
                </li>
              </ul>

              {/* Newsletter */}
              <div style={styles.newsletter}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={styles.newsletterInput}
                />
                <button style={styles.newsletterButton}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <div style={styles.container}>
          <div style={styles.bottomContent}>
            <p style={styles.copyright}>
              © {currentYear} PureWrap — Premium Natural Rolling Papers. All rights reserved.
            </p>
            <div style={styles.bottomLinks}>
              <a href="/privacy" style={styles.bottomLink}>Privacy Policy</a>
              <span style={styles.separator}>•</span>
              <a href="/terms" style={styles.bottomLink}>Terms of Service</a>
              <span style={styles.separator}>•</span>
              <a href="/cookies" style={styles.bottomLink}>Cookie Policy</a>
            </div>
            <p style={styles.madeWith}>
              Made with <Heart size={14} fill="#ef4444" color="#ef4444" style={{display: 'inline', verticalAlign: 'middle'}} /> for quality
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        footer a:hover {
          color: #fbbf24 !important;
          transform: translateX(4px);
        }

        footer a[aria-label]:hover {
          background: rgba(251, 191, 36, 0.1) !important;
          border-color: #fbbf24 !important;
          transform: translateY(-2px) !important;
        }

        footer input:focus {
          border-color: #fbbf24 !important;
          background: rgba(255, 255, 255, 0.08) !important;
        }

        footer button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(251, 191, 36, 0.3);
        }

        footer button:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          footer > div:first-child > div > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          footer > div:last-child > div > div {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
    color: '#e5e7eb',
    width: '100%',
    marginTop: '30rem', // Changed from fixed 6rem
  },
  mainFooter: {
    padding: '4rem 0 2rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  logoIcon: {
    fontSize: '1.5rem',
    animation: 'sparkle 2s ease-in-out infinite',
  },
  logoText: {
    fontSize: '1.75rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  tagline: {
    fontSize: '0.875rem',
    lineHeight: '1.6',
    color: '#9ca3af',
    margin: 0,
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#e5e7eb',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  columnTitle: {
    fontSize: '1.125rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '0.5rem',
    paddingBottom: '0.75rem',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  link: {
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'all 0.3s ease',
    display: 'inline-block',
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    color: '#9ca3af',
    fontSize: '0.875rem',
    lineHeight: '1.6',
  },
  contactIcon: {
    color: '#fbbf24',
    flexShrink: 0,
    marginTop: '2px',
  },
  newsletter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  newsletterInput: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#ffffff',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  newsletterButton: {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    color: '#1a1a1a',
    fontWeight: '600',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '1.5rem 0',
    background: 'rgba(0, 0, 0, 0.3)',
  },
  bottomContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  copyright: {
    margin: 0,
  },
  bottomLinks: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bottomLink: {
    color: '#6b7280',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  separator: {
    color: '#4b5563',
  },
  madeWith: {
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
};