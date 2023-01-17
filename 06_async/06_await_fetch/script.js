const githubRequest = async login => {
  const response = await fetch(`https://api.github.com/users/${login}`);
  const json = await response.json();
  const summary = `${json.name}, ${json.company}`;
  console.log(summary);
};

githubRequest("mariolazzari");
