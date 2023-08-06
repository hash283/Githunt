import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MostStarredRepository from './MostStarredRepository';
import Spinner from '../layouts/Spinner';

let githubClientId = '129cb694760f23c996de';
let githubClientSecret = '0109baf5195c3c9ee604a10160230362fe0fef1b';

// if (process.env.NODE_ENV !== 'production') {
//   githubClientId = process.env.REACT_APP_GITHUB_CLIEND_ID;
//   githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
// } else {
//   githubClientId = process.env.GITHUB_CLIEND_ID;
//   githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
// }

const MostStarredRepositoriesPage = () => {
  const [most_starred_repositories, set_most_starred_repositories] = useState(
    []
  );
  const [loading, set_loading] = useState(false);

  useEffect(() => {
    set_loading(true);
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=stars:>=500&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      response.data.items && set_loading(false);
      set_most_starred_repositories(response.data.items);
    };

    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="main">
      <div className="main_container">
        <h1 className="heading_sub underline">
          Most Starred Repositories on Github:
        </h1>
        {loading && <Spinner />}
        <ul className="main_cards-block">
          {most_starred_repositories.map((repo) => (
            <MostStarredRepository key={repo.id} repo={repo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MostStarredRepositoriesPage;
