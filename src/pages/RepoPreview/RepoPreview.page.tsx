import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ContributorList from "../../components/Lists/ContributorsList";
import LanguagesList from "../../components/Lists/LanguagesList";
import RepoElement from "../../components/RepoElement";
import { getContrubitors } from "../../util/getContributors";
import { getLanguages } from "../../util/getLanguages";
import { getRepo } from "../../util/getRepo";

import "./RepoPreview.styles.scss";

type RepoPreviewProps = {
  className?: string;
};

const RepoPreview: React.FC<RepoPreviewProps> = (props) => {
  const { className } = props;
  let params = useParams();

  const [repoData, setRepoData] = useState();
  const [languages, setLanguages] = useState();
  const [contributors, setContributors] = useState();

  useEffect(() => {
    getRepo(params.owner, params.repo).then((data) => {
      setRepoData(data);
    });
    getLanguages(params.owner, params.repo).then((data) => {
      setLanguages(data);
    });
    getContrubitors(params.owner, params.repo).then((data) => {
      setContributors(data);
    });
  }, [params]);

  return (
    <div className="repo-preview">
      {repoData && (
        <RepoElement
          className="repo-preview-card repo-preview__main"
          data={Object(repoData)}
          showIssues={true}
        />
      )}
      {contributors && (
        <ContributorList
          className="repo-preview-card"
          data={Object(contributors)}
        />
      )}
      {languages && Object(repoData).language && (
        <LanguagesList className="repo-preview-card" data={Object(languages)} />
      )}
    </div>
  );
};

export default RepoPreview;
