import React, { useEffect, useState } from "react";
import classNames from "classnames";

import Button from "../../components/Button";
import { ButtonProps } from "../Button/Button.component";
import { SearchOptions } from "../../types/services";

import "./ReposNavigation.styles.scss";

type ReposNavigationProps = {
  className?: string;
  topics: string[];
  onChange: (values: SearchOptions) => void;
};

const ReposNavigation: React.FC<ReposNavigationProps> = (props) => {
  const { className, topics, onChange } = props;
  const classes = classNames("repos-navigation", className);

  const [sort, setSort] = useState<"stars" | "forks">("stars");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [seachTopic, setSearchTopic] = useState<string>("react");

  useEffect(() => {
    onChange({ order: order, sort: sort, page: 1, search: seachTopic });
  }, [sort, order, seachTopic]);

  return (
    <div className={classes}>
      <div className="repos-navigation__topics">
        {topics.map((el, id) => {
          return (
            <Button
              styleType="transparent-duke"
              key={id}
              onClick={() => {
                setSearchTopic(el);
              }}
            >
              {el}
            </Button>
          );
        })}
      </div>
      <div className="repos-navigation__sorting">
        <Button
          onClick={() => {
            setSort("stars");
          }}
        >
          sort by stars
        </Button>
        <Button
          onClick={() => {
            setSort("forks");
          }}
        >
          sort by forks
        </Button>
      </div>
    </div>
  );
};

export default ReposNavigation;
