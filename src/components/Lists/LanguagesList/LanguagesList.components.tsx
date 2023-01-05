import classNames from "classnames";
import React from "react";

import "../List.styles.scss";
import "./LanguagesList.styles.scss";

type LanguagesListProps = {
  className?: string;
  data?: Object;
};

type LanguageElementProps = {
  name: string;
};

const LanguageElement: React.FC<LanguageElementProps> = (props) => {
  const { name } = props;
  return (
    <div className="language-element">
      <div className="language-element__dot"></div>
      <p>{name}</p>
    </div>
  );
};

const LanguagesList: React.FC<LanguagesListProps> = (props) => {
  const { className, data } = props;
  console.log(data);
  const classes = classNames("list language-list", className);
  return (
    <div className={classes}>
      <div className="list__header">
        <p>Languages</p>
      </div>
      <div className="list__main">
        {data &&
          Object.keys(data).map((e) => {
            return <LanguageElement name={e} />;
          })}
      </div>
    </div>
  );
};

export default LanguagesList;
