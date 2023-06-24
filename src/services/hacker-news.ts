export const getTopStories = async (page: number, limit: number) => {
  const results = await fetch(
    `http://hacker-news.firebaseio.com/v0/topstories.json`
  ).then(async (response) => await response.json())

  // page start with 1
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const storiesIds = results.slice(startIndex, endIndex)

  return storiesIds
}

export const getItemInfo = async (id: number) => {
  const results = await fetch(
    `http://hacker-news.firebaseio.com/v0/item/${id}.json`
  ).then(async (response) => await response.json())
  return results
}
