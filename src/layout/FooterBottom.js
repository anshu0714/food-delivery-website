const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="copyright">
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>{" "}
      </div>
      <div className="footer-items">
        <a href="">Privacy Policy</a>
        <a href="">Terms</a>
        <a href="">Pricing</a>
      </div>
    </div>
  );
};

export default FooterBottom;
