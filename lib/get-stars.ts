import { unstable_cache } from "next/cache"

export const getStarCount = unstable_cache(
  async (repo: string) => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      if (!res.ok) return 0
      const json = (await res.json()) as { stargazers_count?: number }
      return Number(json?.stargazers_count) || 0
    } catch {
      return 0
    }
  },
  ["github-stars"],
  { revalidate: 3600 }
)
