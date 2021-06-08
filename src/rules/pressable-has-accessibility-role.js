/**
 * @fileoverview Forbid "pressable" element without an explicit "accessibilityRole" attribute.
 * @author forxtu
 */
'use strict'

import { hasProp } from 'jsx-ast-utils'

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

const errorMessage =
  'Missing an explicit "accessibilityRole" attribute for pressable element'

module.exports = {
  meta: {
    docs: {
      description:
        'Forbid "pressable" element without an explicit "accessibilityRole" attribute',
      category: 'Possible Errors',
      recommended: true
    },
    fixable: null
  },
  create: (context) => ({
    JSXOpeningElement: (node) => {
      const hasOnPressAttr = hasProp(node.attributes, 'onPress')
      const hasAccessibilityRoleAttr = hasProp(
        node.attributes,
        'accessibilityRole'
      )

      if (hasOnPressAttr && !hasAccessibilityRoleAttr) {
        context.report({
          node,
          message: errorMessage
        })
      }
    }
  })
}
