import { writeFileSync } from 'fs';
import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitSkipNetlify(): Promise<void> {
  const now = new Date().toISOString();
  writeFileSync('.skip-netlify', now);

  const git: SimpleGit = simpleGit(options);
  const status = await git.status();
  const unstagedFiles = status.modified;

  for (let index = 0; index < unstagedFiles.length; index++) {

    const unstagedFile = unstagedFiles[index];

    if (unstagedFile.includes('.skip-netlify')) {
      const commitMessage = `chore(netlify): [skip ci]`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);

    }
  }
}

autoCommitSkipNetlify().then();
