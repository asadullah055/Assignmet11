import React from "react";

const Header = () => {
  const res = false;
  return (
    <header className="header">
      <h2>Welcome to My App</h2>
      {res ? (
        <p>This is the header component.</p>
      ) : (
        <p>
          There is some problem in your code. please write valid code and show
          the console for testing purpose
        </p>
      )}
    </header>
  );
};

export default Header;
