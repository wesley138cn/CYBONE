import {mkdir,copyFile,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const assets=['index.html','styles.css','app.js','model.js','README.md','README.en.md','NOTICE.md','LICENSE','BRAND.md','CONTRIBUTING.md','SECURITY.md','CHANGELOG.md','docs/DESIGN.md','docs/CAPABILITIES.md'];
await mkdir('dist',{recursive:true});
await mkdir('dist/docs',{recursive:true});
const manifest={};
for(const file of assets){await copyFile(file,'dist/'+file);manifest[file]=createHash('sha256').update(await readFile(file)).digest('hex');}
await writeFile('dist/SHA256SUMS',Object.entries(manifest).map(([file,hash])=>hash+'  '+file).join('\n')+'\n');
console.log('Built '+assets.length+' public assets into dist/.');
