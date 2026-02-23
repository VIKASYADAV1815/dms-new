'use client';

import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={16} />, label: 'LinkedIn', href: '#' },
    { icon: <Twitter size={16} />, label: 'Twitter', href: '#' },
    { icon: <Facebook size={16} />, label: 'Facebook', href: '#' },
    { icon: <Instagram size={16} />, label: 'Instagram', href: '#' },
    { icon: <Youtube size={16} />, label: 'YouTube', href: '#' },
  ];

  return (
    <footer style={{ 
      // Merging Gradient: Deep Midnight to Obsidian
      background: 'radial-gradient(circle at top right, #0f172a, #020617)', 
      color: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 0 40px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      {/* Custom Cyber-Grid Background */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
        zIndex: 0
      }} />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '40px',
          marginBottom: '80px'
        }}>
          
          {/* Column 1: Company Profile */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: '#fff' }}>
              <ShieldCheck className="text-blue-500" size={24} />
              D M SYSTEMS
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Pioneering internet security and network infrastructure since 1999. Delivering vendor-neutral, pragmatic security audits.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
               {socialLinks.map((social, idx) => (
                 <motion.a
                   key={idx}
                   href={social.href}
                   whileHover={{ y: -3, backgroundColor: 'rgba(56, 189, 248, 0.1)' }}
                   style={{ 
                     width: 36, 
                     height: 36, 
                     borderRadius: '10px', 
                     background: 'rgba(255,255,255,0.03)', 
                     border: '1px solid rgba(255,255,255,0.08)', 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center', 
                     color: '#94a3b8',
                     transition: 'all 0.2s ease'
                   }}
                 >
                   {social.icon}
                 </motion.a>
               ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 style={{ color: '#38bdf8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px', fontWeight: 700 }}>Company</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>What We Do</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Mission & Vision</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Team</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Other Associates</a>
            </nav>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 style={{ color: '#38bdf8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px', fontWeight: 700 }}>Solutions</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Distribution Products</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Client Speaks</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Training</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Ticket Generation</a>
            </nav>
          </div>

          {/* Column 4: Detailed Contact */}
          <div>
            <h4 style={{ color: '#38bdf8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '24px', fontWeight: 700 }}>New Delhi Office</h4>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6 }}>
              <address style={{ fontStyle: 'normal', marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>E-2/7 & 8, 2nd Floor, Malviya Nagar,<br /> New Delhi — 110017</span>
              </address>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={14} className="text-blue-500" />
                  <span style={{ color: '#f8fafc' }}>+91.011.26691429</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748b', width: '60px' }}>PALLAVI B:</span>
                  <span style={{ color: '#f8fafc' }}>+91-99990-35340</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                  <Mail size={14} className="text-blue-500" />
                  <span style={{ color: '#38bdf8', fontWeight: 600 }}>channels@dmsystems.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '32px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
            © {currentYear} D M Systems Pvt Ltd. Engineered for resilience.
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '0.8rem', fontWeight: 500 }}>
            <span style={{ color: '#64748b', cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ color: '#64748b', cursor: 'pointer' }}>Terms</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e80' }} />
              <span style={{ color: '#94a3b8' }}>Network Optimal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}