module.exports = {
  rules: {
    "explicit-let-type": {
      meta: {
        docs: {
          description:
            "`let` and `var` variable declarations should always have an explicit type",
        },
        schema: [], // no options
        messages: {
          missing:
            "`let` and `var` variable initialisers must have an explicit type",
        },
      },
      create: function (context) {
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
                  context.report({ node, messageId: "missing" })
                }
              })
            }
          },
        }
      },
    },
  },
}
