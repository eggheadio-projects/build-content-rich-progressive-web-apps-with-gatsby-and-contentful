import PropTypes from "prop-types";
import React from "react";
import SubscribeForm from "../components/subscribe-form"

const Header = ({ siteTitle }) => (
  <div className="bg-blue-darkest">
    <div className="container lg:max-w-screen-lg mx-auto px-6 py-8 sm:py-16 md:py-24 text-white">
      <img
        src="/logo.svg"
        className="mb-12 block"
        width="200"
        alt="A JAM sandiwch wearing glasses"
      />
      <div className="mb-12">
        <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl md:text-6xl mb-4 leading-none">
          Static sites can do so much more!
        </h1>
        <p className="text-m sm:text-xl leading-normal max-w-lg">
          Learn how build apps that combine the performance and workflow
          benefits of static sites with the flexibility and power of
          server-driven sites.
        </p>
        <SubscribeForm />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
