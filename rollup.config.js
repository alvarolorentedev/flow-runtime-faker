import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: "src/index.js",
    plugins: [
        babel(),
        resolve(),
        commonjs({
            namedExports: { 'node_modules/faker/index.js': ['random'] },
            
        })
    ],
    output: [
    {
        name: "flow-runtime-faker",
        format: "cjs",
        file: "dist/flow-runtime-faker.js",
    }]
}
