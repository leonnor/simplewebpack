// 1.用来把代码解析成ast再把ast转换成代码，即es6 => es5
// 2.分析依赖

const fs = require('fs')
const babylon = require('babylon')
const traverse = require('babel-traverse').default
const { transformFromAst } = require('babel-core')

module.exports = {
    getAST: (path) => {
        const source = fs.readFileSync(path, 'utf-8')

        return babylon.parse(source, {
            sourceType: 'module'
        })
    },
    getDependencies: (ast) => {
        const dependencies = []
        traverse(ast, {
            //分析impot语句
            ImportDeclaration: ({ node }) => {
                dependencies.push(node.source.value)
            }
        })

        return dependencies
    },
    //ast => es5
    transform: (ast) => {
        const { code } = transformFromAst(ast, null, {
            presets: ['env']
        })

        return code
    }
}