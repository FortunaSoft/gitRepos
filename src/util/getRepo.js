import { useState } from 'react';

export const getRepo = async (owner,repo) => {
    return fetch(`https://api.github.com/repos/${owner}/${repo}`)
        .then(response => response.json())
        .then((data) => { console.log(data); return data }) .catch((error) => {
                console.error('Error:', error);
              });
}