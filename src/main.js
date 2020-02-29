const content = document.getElementById("content");

const listRepos = async name => {
  const repos = await fetch(
    `https://api.github.com/users/${name}/repos?type=owner&sort=updated`
  )
    .then(response => response.json())
    .catch(err => console.error(err));

  const itemsMarkup = repos
    .map(
      repo => `
        <li class="repo">
          <a href="${repo.html_url}">
            <span class="repo__name">${repo.name}<span><span class="repo__star">(⭐ ${repo.stargazers_count})<span>
          </a>
        </li>
      `
    )
    .join("");

  const fullMarkup = `<ul>${itemsMarkup}</ul>`;

  const content = document.getElementById("content");
  content.innerHTML = fullMarkup;

  const accountName = document.getElementById("account-name");
  accountName.innerHTML = name;
};

listRepos("ehudthelefthand");
