import classNames from "classnames";
import React from "react";

import "../List.styles.scss";
import "./ContributorList.styles.scss";

type ContributorListProps = {
  className?: string;
  data?: any[];
};

type ContributorElementProps = {
  name: string;
  img: string;
};

const ContributorElement: React.FC<ContributorElementProps> = (props) => {
  const { name, img } = props;
  return (
    <div className="contrubitor-element">
      <img src={img}></img>
      <p>{name}</p>
    </div>
  );
};

const ContributorList: React.FC<ContributorListProps> = (props) => {
  const { className, data } = props;
  const classes = classNames("list contributor-list", className);
  return (
    <div className={classes}>
      <div className="list__header">
        <p>Contributors</p>
      </div>
      <div className="list__main">
        {data &&
          data
            .filter((e, id) => id < 10)
            .map((e) => {
              return <ContributorElement name={e.login} img={e.avatar_url} />;
            })}
      </div>
    </div>
  );
};

export default ContributorList;
