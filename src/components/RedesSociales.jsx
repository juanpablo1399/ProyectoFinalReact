import React from 'react';
import { Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const RedesSociales = () => {
  return (
    <div className="footer" style={{ textAlign: "center", padding: "20px", backgroundColor: "#4169E1" , borderRadius: "15px"}}>
      <Button variant="solid" style={{ marginRight: "15px", fontSize: "0.5em", color: "#fff", backgroundColor: "#55acee", border: "none", borderRadius: "8px", padding: "10px 20px" }} size="md">
        <i className="fab fa-twitter"></i> Twitter
      </Button>
      <Button variant="solid" style={{ marginRight: "15px", fontSize: "0.5em", color: "#fff", backgroundColor: "#cb2027", border: "none", borderRadius: "8px", padding: "10px 20px" }} size="md">
        <i className="fab fa-pinterest"></i> Pinterest
      </Button>
      <Button variant="solid" style={{ marginRight: "15px", fontSize: "0.5em", color: "#fff", backgroundColor: "#d14836", border: "none", borderRadius: "8px", padding: "10px 20px" }} size="md">
        <i className="fas fa-envelope"></i> Email
      </Button>
      <Button variant="solid" style={{ marginRight: "15px", fontSize: "0.5em", color: "#fff", backgroundColor: "#ff5700", border: "none", borderRadius: "8px", padding: "10px 20px" }} size="md">
        <i className="fab fa-reddit"></i> Reddit
      </Button>
      <Button variant="solid" style={{ fontSize: "0.5em", color: "#fff", backgroundColor: "#0088cc", border: "none", borderRadius: "8px", padding: "10px 20px" }} size="md">
        <i className="fab fa-telegram"></i> Telegram
      </Button>
    </div>
  );
}

export default RedesSociales;
