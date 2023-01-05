import { useState } from "react";

export const searchRepos = async (
  q,
  sort = "stars",
  order = "desc",
  page = 1,
  perPage = 6
) => {
  return fetch(
    `https://api.github.com/search/repositories?q=${q}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
