import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ArrowLeft from "../../icons/ArrowLeft.icon";
import ArrowRight from "../../icons/ArrowRight";
import Button from "../Button";

import "./Footer.styles.scss";

type FooterProps = {
  className?: string;
  pageChanged: (page: number) => void;
};

const Footer: React.FC<FooterProps> = (props) => {
  const { className, pageChanged } = props;
  const classes = classNames("footer", className);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    pageChanged(currentPage);
  }, [currentPage]);

  return (
    <div className={classes}>
      <div className="footer__pagination">
        <Button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
          styleType="transparent-duke"
          icon={<ArrowLeft />}
          className="footer__button"
        />
        <div className="footer__pagination__page">
          <p>{currentPage}</p>
        </div>
        <Button
          icon={<ArrowRight />}
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          styleType="transparent-duke"
          className="footer__button"
        />
      </div>
    </div>
  );
};

export default Footer;
