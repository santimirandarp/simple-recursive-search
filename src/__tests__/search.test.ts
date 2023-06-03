import { join } from 'node:path';

import { search } from '../search';

describe('search', () => {
  const baseDir = join(__dirname, 'data');
  it('Return only files', async () => {
    const paths = await search(baseDir);
    expect(paths).toEqual(
      ['./a.txt', './subdata/b.jpg'].map((p) => join(baseDir, p)),
    );
  });
  it('Return only directories', async () => {
    const paths = await search(baseDir, { files: false, directories: true });
    expect(paths).toEqual(
      ['./subdata', './subdata/subdata2'].map((p) => join(baseDir, p)),
    );
  });
  it('Return only jpg files', async () => {
    const paths = await search(baseDir, {
      filter: (name) => name.endsWith('.jpg'),
    });
    expect(paths).toEqual(['./subdata/b.jpg'].map((p) => join(baseDir, p)));
  });
});
