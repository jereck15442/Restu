export default function Card({ children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
}

Card.Image = ({ src, alt, className = '' }) => (
  <img src={src} alt={alt} className={`card-image ${className}`} />
);

Card.Content = ({ children, className = '' }) => (
  <div className={`card-content ${className}`}>{children}</div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`card-footer ${className}`}>{children}</div>
);