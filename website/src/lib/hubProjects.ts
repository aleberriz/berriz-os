import { parse } from 'yaml';
/** Repo root: website/src/lib → ../../../ */
import raw from '../../../projects/projects.yaml?raw';

export type HubProject = {
  slug: string;
  repo_url: string;
  visibility: string;
  status: string;
  one_liner: string;
  tags: string[];
  on_hub: boolean;
  last_reviewed: string;
};

type ProjectsFile = { projects: HubProject[] };

export function getHubProjects(): HubProject[] {
  const doc = parse(raw) as ProjectsFile;
  return doc.projects.filter((p) => p.on_hub === true && p.visibility === 'public');
}
