import React, { ReactNode } from "react";
import classNames from "classnames";

import Button from "../../components/Button";
import EyeIcon from "../../icons/EyeIcon.icon";
import StarsIcon from "../../icons/StarsIcon.icon";
import ForkIcon from "../../icons/ForkIcon.icon";
import EyeBlindIcon from "../../icons/EyeBlindIcon.icon";
import BugIcon from "../../icons/BugIcon.icon";

import "./RepoElement.styles.scss";

type InfoBlockProps = {
  className?: string;
  label: string;
  icon: ReactNode;
};

const InfoBlock: React.FC<InfoBlockProps> = (props) => {
  const { label, icon, className } = props;
  const classes = classNames("info-block", className);
  return (
    <div className={classes}>
      {icon && icon}
      <p className="info-block__label">{label}</p>
    </div>
  );
};

type RepoElementProps = {
  className?: string;
  onClick?: (owner: string, repo: string) => void;
  data: any;
  showIssues?: boolean;
};

const RepoElement: React.FC<RepoElementProps> = (props) => {
  const { className, data, onClick, showIssues = false } = props;
  const classes = classNames("repo-element", className);

  return (
    <div
      className={classes}
      onClick={() =>
        props.onClick && props.onClick(data.owner.login, data.name)
      }
    >
      <div className="repo-element__left">
        <div className="repo-element__left__top">
          <img className="profile-icon" src={data.owner.avatar_url} />

          <div className="repo-name">
            <p className="repo-name__label">{data.full_name}</p>
          </div>

          <InfoBlock
            label={data.private ? "private" : "public"}
            icon={data.private ? <EyeBlindIcon /> : <EyeIcon />}
            className={
              data.private
                ? `repo-privacy repo-privacy--private`
                : "repo-privacy"
            }
          ></InfoBlock>
        </div>
        <div className="repo-element__left__bottom">
          <div className="repo-description">
            <p className="repo-description__label">{data.description}</p>
          </div>
        </div>
      </div>
      <div className="repo-element__right">
        <div className="repo-element__right__info-holder">
          <InfoBlock
            label={data.stargazers_count + " stars"}
            icon={<StarsIcon />}
            className="info-holder__stars"
          />
          <InfoBlock
            label={data.forks + " forks"}
            icon={<ForkIcon />}
            className="info-holder__forks"
          />
          {showIssues && (
            <InfoBlock
              label={data.open_issues_count + " open issues"}
              icon={<BugIcon />}
              className="info-holder__issues"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoElement;
