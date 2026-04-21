import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

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

const here = path.dirname(fileURLToPath(import.meta.url));
/** Repo root: website/src/lib → ../../../ */
const projectsYaml = path.resolve(here, '..', '..', '..', 'projects', 'projects.yaml');

export function getHubProjects(): HubProject[] {
  const raw = fs.readFileSync(projectsYaml, 'utf-8');
  const doc = parse(raw) as ProjectsFile;
  return doc.projects.filter((p) => p.on_hub === true && p.visibility === 'public');
}
