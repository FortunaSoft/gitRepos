import React, { ReactNode, useEffect, useState } from "react";
import classNames from "classnames";

import Button from "../../components/Button";
import RepoElement from "../RepoElement";
import EyeIcon from "../../icons/EyeIcon.icon";

import { searchRepos } from "../../util/searchRepos";
import { SearchOptions } from "../../types/services";
import { useNavigate } from "react-router-dom";

import "./ReposList.styles.scss";

type ReposListProps = {
  className?: string;
  options: SearchOptions | undefined;
};

const ReposList: React.FC<ReposListProps> = (props) => {
  const { className, options } = props;
  const classes = classNames("repos-list", className);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [repos, setRepos]: any = useState([]);

  useEffect(() => {
    setLoading(true);
    searchRepos(
      options?.search,
      options?.sort,
      options?.order,
      options?.page,
      6
    ).then((data) => {
      setRepos(data.items);
      setLoading(false);
    });
  }, [options]);

  return (
    <div className={classes}>
      {loading ? (
        <div className="repos-list__loading">
          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />

          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />

          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />

          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />
          <div className="repos-list__loading-cube" />
        </div>
      ) : repos ? (
        repos.map((element: any, index: number) => {
          return (
            <RepoElement
              onClick={(owner, repo) => {
                navigate(`/preview/${owner}/${repo}`);
              }}
              key={index}
              data={Object(element)}
            ></RepoElement>
          );
        })
      ) : (
        <div className="repos-list__overuse">
          <p className="repos-list__overuse__label">
            API rate limit exceeded for 62.240.25.151. Please wait a moment
            before doing action.
          </p>
        </div>
      )}
    </div>
  );
};

export default ReposList;
