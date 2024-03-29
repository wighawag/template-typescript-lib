import dts from 'bun-plugin-dts'

const args = process.argv.slice(2);
const plugins = [];
if (! (args[0] === '--no-dts')) {
  plugins.push(dts())
}

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  plugins
})
