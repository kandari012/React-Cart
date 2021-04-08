import React from "react";

function Navbar(props) {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/3144/3144456.svg?token=exp=1617888255~hmac=a54fd8112ab22dabb89bb9ce18b2c2cb"
          alt=""
          style={styles.cartIcon}
        />
        <span style={styles.cartCount}>{props.count()}</span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
