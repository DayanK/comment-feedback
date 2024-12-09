export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <small>
          <p>&copy; {currentYear} Copyright by Admin. All rights reserved.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </small>
      </footer>
    );
  }
  