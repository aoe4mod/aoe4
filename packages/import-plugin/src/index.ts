import * as ts from 'typescript'
import * as tstl from 'typescript-to-lua'

const plugin: tstl.Plugin = {
  visitors: {
    [ts.SyntaxKind.ImportDeclaration]: (node, context) => {
      const importModule = node.moduleSpecifier.getText()
      if (importModule.endsWith('.scar"') || importModule.endsWith('.scar\'')) {
        return tstl.createExpressionStatement(
          tstl.createCallExpression(tstl.createIdentifier('import'), [
            tstl.createStringLiteral(importModule.slice(1, -1))
          ]))
      }
      return context.superTransformStatements(node)
    }
  }
}

export default plugin
