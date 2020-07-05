const message =
  "`let` and `var` variable initialisers must have an explicit type"

module.exports = function explicitLetType(context) {
  "use strict"

  return {
    VariableDeclaration(node) {
      const { kind, declarations } = node
      if (kind === "let" || kind === "var") {
        declarations.map((declaration) => {
          if (
            // If there's no type annotation
            declaration.id.typeAnnotation === undefined &&
            // And there's no initial value
            !declaration.init
          ) {
            // Ya done goofed
            context.report(node, message)
          }
        })
      }
    },
  }
}
