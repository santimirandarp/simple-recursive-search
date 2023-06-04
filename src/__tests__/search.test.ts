import { join } from 'node:path';

import { search } from '../search';

describe('search', () => {
  const baseDir = join(__dirname, 'data');
  it('Return only files', async () => {
    const paths = await search(baseDir);
    const expectedPaths = ['./a.txt', './subdata/b.jpg'];
    for (const ep of expectedPaths) {
      expect(paths).toContain(join(baseDir, ep));
    }
  });
  it('Return only directories', async () => {
    const paths = await search(baseDir, { files: false, directories: true });
    const expectedPaths = ['./subdata', './subdata/subdata2'];
    for (const ep of expectedPaths) {
      expect(paths).toContain(join(baseDir, ep));
    }
  });
  it('Return only jpg files', async () => {
    const paths = await search(baseDir, {
      filterFilename: (name) => name.endsWith('.jpg'),
    });

    const expectedPath = './subdata/b.jpg';
    expect(paths).toContain(join(baseDir, expectedPath));
  });
  it('Return all but a single filtered directory', async () => {
    const paths = await search(baseDir, {
      filterDirname: (name) => name !== 'subdata2',
      files: true,
      directories: true,
      dotFiles: true,
    });

    const expectedPaths = [
      './a.txt',
      './subdata',
      './subdata/b.jpg',
      './subdata/.hidden',
    ];
    for (const ep of expectedPaths) {
      expect(paths).toContain(join(baseDir, ep));
    }
  });
});
