import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
  return (
    <div className="headerDiv">
      <section>
        <ImageThumbnail />
      </section>
      <section className="headerTitle">
        <HeaderTitle />
        <HeaderContent />
      </section>
    </div>
  );
};

export default HeaderContainer;
