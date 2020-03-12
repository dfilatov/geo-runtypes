import typescript from 'rollup-plugin-typescript2';
import * as pkg from './package.json';

const rollupConfig = {
    input: `./src/index.ts`,
    output: [
        {
            name: pkg.name,
            file: `./lib/index.js`,
            format: 'cjs'
        }
    ],
    external: Object.keys(pkg.dependencies),
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                compilerOptions: {
                    declaration: true,
                    declarationDir: './lib',
                    module: 'esnext',
                    target: 'es5'
                },
                include: [`src/**/*`],
                exclude: [`src/__tests__`]
            }
        })
    ]
};

export default rollupConfig;
