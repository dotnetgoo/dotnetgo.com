import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  React.useLayoutEffect(
    function () {
      if (hash === "") {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      }
      else {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        } else {
          navigate("404", { replace: false });
        }
      }
    },
    [pathname, hash, navigate]
  );

  return null;
}
