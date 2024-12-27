import type { Repository } from '../utils/types'

const CACHE_TIME = 60 * 60

export default defineCachedEventHandler(async () => {
  const REPO_WHITE_LIST = ['shop-api-client', 'shop-api-server']

  const REPOSITORIES_URL = 'https://api.github.com/users/brokuka/repos'

  const REPOSITORIES = await $fetch<Repository[]>(REPOSITORIES_URL)

  const filteredRepos = REPOSITORIES.filter(repo => REPO_WHITE_LIST.includes(repo.name))
  const transformedRepos = filteredRepos.map<TransformedRepository>(repo => ({
    id: repo.id,
    name: repo.name,
    stars: repo.stargazers_count,
    starsLink: `${repo.html_url}/stargazers`,
    forks: repo.forks_count,
    github: repo.html_url,
    url: repo.homepage,
    description: repo.description,
    lastUpdate: repo.updated_at,
  }))

  return transformedRepos
}, { maxAge: CACHE_TIME })
