import type { Repository } from '../utils/types'

const CACHE_TIME = 60 * 60

export default defineCachedEventHandler(async (event) => {
  const REPO_WHITE_LIST = ['shop-api-client', 'shop-api-server']

  const REPOSITORIES_URL = 'https://api.github.com/users/brokuka/repos'

  const REPOSITORIES = await event.$fetch<Repository[]>(REPOSITORIES_URL)

  const filteredRepos = REPOSITORIES.filter(repo => REPO_WHITE_LIST.includes(repo.name))

  async function fetchReadmeByOptions(name: string, branch = 'main') {
    return await event.$fetch(`https://raw.githubusercontent.com/brokuka/${name}/${branch}/README.md`)
  }

  const transformedRepos = await Promise.all(filteredRepos.map(async (repo) => {
    const readme = await fetchReadmeByOptions(repo.name) as string

    return {
      id: repo.id,
      name: repo.name,
      stars: repo.stargazers_count,
      starsLink: `${repo.html_url}/stargazers`,
      forks: repo.forks_count,
      github: repo.html_url,
      url: repo.homepage,
      description: repo.description,
      lastUpdate: repo.updated_at,
      readme,
    }
  }))

  return transformedRepos
}, { maxAge: CACHE_TIME })
