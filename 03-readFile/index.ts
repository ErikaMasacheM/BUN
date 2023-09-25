const file = Bun.file(import.meta.dir + '/package.json'); // BunFile

console.log(import.meta.dir );


const pkg = await file.json(); // BunFile extends Blob
pkg.name = 'file';
pkg.version = '1.0.0';

await Bun.write(file, JSON.stringify(pkg, null, 2));

console.log(pkg);

