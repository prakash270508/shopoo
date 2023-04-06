import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DropDownHover({ items, name }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div>
      <div className="nav-item dropdown mx-2">
        <div
          className="nav-link dropdown-toggle"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          style={{ cursor: "pointer" }}
        >
          {name}
        </div>
        {isDropdownOpen && (
          <div
            className="dropdown-menu show"
            style={{ marginLeft: "-2vw" }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {items.map((item, index) => (
              <Link key={index} className="dropdown-item text-uppercase" to={`/${item.toLowerCase()}`}>
                <p style={{fontSize:"15px"}}>{item}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
