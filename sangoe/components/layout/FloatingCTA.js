'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';

const PHONE = '+919876543210';
const WHATSAPP_MSG = encodeURIComponent(`Hi Sangoe! I'd like to know more about your Business Growth OS.`);

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-cta-container">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}
          >
            {/* Call button */}
            <a
              href={`tel:${PHONE}`}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: '#1c1c2e', color: '#edeaf8',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50px', padding: '11px 20px 11px 14px',
                fontSize: '0.88rem', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(12px)',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{
                width: '34px', height: '34px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #7C3AED, #4f46e5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Phone size={16} color="#fff" />
              </span>
              Call Us Now
            </a>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: '#1c1c2e', color: '#edeaf8',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50px', padding: '11px 20px 11px 14px',
                fontSize: '0.88rem', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(12px)',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{
                width: '34px', height: '34px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <MessageCircle size={16} color="#fff" />
              </span>
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        style={{
          width: '58px', height: '58px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #7C3AED 0%, #4f46e5 100%)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(124,58,237,0.45), 0 2px 8px rgba(0,0,0,0.3)',
          position: 'relative',
        }}
      >
        {/* Pulse ring */}
        {!open && (
          <span style={{
            position: 'absolute', inset: '-6px', borderRadius: '50%',
            border: '2px solid rgba(124,58,237,0.4)',
            animation: 'floatPulse 2s ease-in-out infinite',
          }} />
        )}
        <motion.div animate={{ rotate: open ? 135 : 0 }} transition={{ duration: 0.22 }}>
          {open ? <X size={22} color="#fff" /> : <Phone size={22} color="#fff" />}
        </motion.div>
      </motion.button>

      <style>{`
        .floating-cta-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }
        @media (max-width: 768px) {
          .floating-cta-container {
            bottom: 84px;
            right: 16px;
          }
        }
        @keyframes floatPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.25); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
