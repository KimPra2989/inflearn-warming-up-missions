// https://github.com/login/oauth/authorize?client_id=Ov23liv7tvjrxpxAZQ9q&redirect_uri=http://localhost:5500/&scope=user

function qs(selector, element = document) {
  return element.querySelector(selector);
}

let search;
searchUser.addEventListener("input", async () => {
  search = searchUser.value;
  try {
    let profileData = await fetchProfile(search);
    if (profileData.message == "Not Found") {
      qs("#search-result").style.display = "none";
      return;
    }

    qs("#search-result").style.display = "block";
    bindData(profileData, search);
    console.log(search);
  } catch (e) {
    console.log(e);
    return;
  }
});

async function fetchProfile(user) {
  const url = `https://api.github.com/users/${user}`;
  const res = await fetch(url);

  const data = await res.json();
  return data;
}

async function bindData(data, search) {
  const {
    avatar_url,
    login,
    name,
    followers,
    following,
    public_repos,
    blog,
    bio,
    created_at,
    email,
    id,
  } = data;

  const profilePic = qs("#profile-picture");
  profilePic.src = avatar_url;

  const userID = qs("#user-id");
  userID.textContent = login;

  const userName = qs("#user-name");
  userName.textContent = name;

  const Follower = qs("#follower");
  Follower.textContent = followers;

  const Following = qs("#following");
  Following.textContent = following;

  const Repo = qs("#repos");
  Repo.textContent = public_repos;

  const Bio = qs("#bio");

  const bioContent = [];

  bioContent.push(
    `<li>가입일 : ${new Intl.DateTimeFormat("ko-KR").format(
      new Date(created_at)
    )}<li>`
  );

  if (blog) {
    bioContent.push(
      `<li>
            <a href="${blog}">Blog</a>
        </li>
        `
    );
  }

  if (email) {
    bioContent.push(`<li>email : ${email}</li>`);
  }

  if (bio) {
    bioContent.push(`<li>소개
    ${bio}</li>`);
  }

  Bio.innerHTML = bioContent.join("");

  if (public_repos) {
    const repos = await fetchRepoData(search);
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

    const RepoGrid = qs(".repo-grid");
    const RepoContents = [];
    for (let repo of repos) {
      const { name, language, updated_at, stargazers_count } = repo;

      const content = `
        <div class="repository">
            <h2 class="repo-name">${name}</h2>
             <p class="repo-etc">Language: ${language}</p>
            <p class="repo-etc">Last Updated: ${new Intl.DateTimeFormat(
              "ko-KR"
            ).format(new Date(updated_at))}</p>
            <p class="repo-etc">Stars: ${stargazers_count}</p>
        </div>
        `;

      RepoContents.push(content);
    }
    RepoGrid.innerHTML = RepoContents.join("");
  }
}

async function fetchRepoData(user) {
  const url = `https://api.github.com/users/${user}/repos`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
}
