import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** A project gets its own page only when it has a full case study */
export const hasPage = (p: Project) => Boolean(p.data.problem);

export async function getSortedProjects(): Promise<Project[]> {
  const all = await getCollection('projects');
  return all.sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}

export function allTags(projects: Project[]): string[] {
  const seen = new Set<string>();
  projects.forEach((p) => p.data.tags.forEach((t) => seen.add(t)));
  return [...seen];
}
