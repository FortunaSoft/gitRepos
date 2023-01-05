import { useState } from 'react';

export const getContrubitors = async (owner,repo) => {
    return fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`)
        .then(response => response.json())
        .then((data) => { console.log(data); return data }) .catch((error) => {
                console.error('Error:', error);
              });
}