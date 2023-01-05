import React, { useState } from "react";
import classNames from "classnames";

import ReposNavigation from "../../components/ReposNavigation";
import RepoList from "../../components/ReposList";
import { SearchOptions } from "../../types/services";
import Footer from "../../components/Footer";

import "./ReposPage.styles.scss";

type ReposPageProps = {
  className?: string;
};

const ReposPage: React.FC<ReposPageProps> = (props) => {
  const { className } = props;
  const topics = ["React", "Angular", "Vue"];
  const [options, setOptions] = useState<SearchOptions>({
    order: "desc",
    sort: "stars",
    page: 1,
    search: "react",
  });

  const classes = classNames("repos-page", className);

  return (
    <div className={classes}>
      <ReposNavigation
        onChange={(values) => setOptions(values)}
        topics={topics}
      />
      <RepoList options={options} />
      <Footer
        pageChanged={(page) => {
          setOptions({
            order: options.order,
            sort: options.sort,
            page: page,
            search: options.search,
          });
        }}
      />
    </div>
  );
};

export default ReposPage;
