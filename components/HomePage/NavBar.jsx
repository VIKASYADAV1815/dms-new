'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Ticket, ShieldCheck } from 'lucide-react';
import { Logo } from '../shared';

const navConfig = [
  { label: 'Home', href: '/' },
  { 
    label: 'Company', 
    dropdown: [
      { label: 'What We Do', href: '/company/what-we-do' },
      { label: 'Mission & Vision', href: '/company/mission-vision' },
      { label: 'Team', href: '/company/team' }
    ] 
  },
  { 
    label: 'Solutions', 
    dropdown: [
      { label: 'Our Associates', href: '/solutions/associates' },
      { label: 'Product Offering', href: '/solutions/products' },
      { label: 'Distribution Products', href: '/solutions/distribution' },
      { label: 'Product Brochures', href: '/solutions/brochures' }
    ] 
  },
  { 
    label: 'Credentials', 
    dropdown: [
      { label: 'Awards', href: '/credentials/awards' },
      { label: 'Client Speaks', href: '/credentials/testimonials' }
    ] 
  },
  { label: 'Training', href: '/training' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' }
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'white',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      padding: '12px 0'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* BRANDING */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Logo />
          <div className="desktop-only">
            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#0f172a' }}>D M SYSTEMS</div>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          {navConfig.map(item => (
            <div
              key={item.label}
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
              style={{ position: 'relative' }}
            >
              <a href={item.href || '#'} style={{
                display: 'flex', alignItems: 'center', gap: '4px', padding: '10px 15px',
                fontSize: '0.95rem', fontWeight: 600, color: '#475569', textDecoration: 'none'
              }}>
                {item.label}
                {item.dropdown && <ChevronDown size={14} style={{ opacity: 0.5 }} />}
              </a>

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: 'white',
                      borderRadius: '12px',
                      padding: '10px',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      marginTop: '10px',
                      minWidth: '220px'
                    }}
                  >
                    {item.dropdown.map(sub => (
                      <a key={sub.label} href={sub.href} className="dropdown-link-item">{sub.label}</a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* ACTIONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            style={{
              background: '#2563eb', color: 'white', border: 'none', padding: '10px 22px',
              borderRadius: '99px', fontSize: '0.85rem', fontWeight: 700, display: 'flex',
              alignItems: 'center', gap: '8px', cursor: 'pointer'
            }}
          >
            <Ticket size={18} />
            <span className="desktop-only">Ticket Generate</span>
          </motion.button>

          {/* HAMBURGER */}
          <button className="mobile-only" onClick={() => setIsOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <Menu size={30} color="#0f172a" />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, background: 'white', zIndex: 2000,
              padding: '24px', overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <ShieldCheck size={32} color="#2563eb" />
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={35} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navConfig.map(item => (
                <div key={item.label} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <button
                    onClick={() => item.dropdown ? setMobileExpanded(mobileExpanded === item.label ? null : item.label) : null}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px 0',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: '#0f172a',
                      background: 'none',
                      border: 'none',
                      width: '100%',
                      cursor: item.dropdown ? 'pointer' : 'default'
                    }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={20}
                        style={{
                          transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: '0.3s ease'
                        }}
                      />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {item.dropdown && mobileExpanded === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '20px' }}
                      >
                        {item.dropdown.map(sub => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            style={{
                              textDecoration: 'none',
                              color: '#64748b',
                              fontSize: '1.05rem',
                              padding: '10px 15px',
                              background: '#f8fafc',
                              borderRadius: '8px'
                            }}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .dropdown-link-item {
          padding: 10px 15px;
          font-size: 0.9rem;
          color: #64748b;
          text-decoration: none;
          border-radius: 8px;
          transition: 0.2s;
        }
        .dropdown-link-item:hover { background: #eff6ff; color: #2563eb; }

        @media (min-width: 1024px) { .mobile-only { display: none !important; } }
        @media (max-width: 1023px) { .desktop-only { display: none !important; } }
      `}</style>
    </header>
  );
}