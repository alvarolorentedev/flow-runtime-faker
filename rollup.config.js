import babel from 'rollup-plugin-babel'

export default {
    input: "src/index.js",
    plugins: [
        babel(),
        resolve(),
        commonjs()
    ],
    output: [
    {
        name: "flow-runtime-faker",
        format: "cjs",
        file: "dist/flow-runtime-faker.js",
    }]
}
