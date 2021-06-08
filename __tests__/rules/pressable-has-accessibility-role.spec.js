/**
 * @fileoverview Forbid "pressable" element without an explicit "accessibilityRole" attribute rule.
 * @author forxtu
 */
'use strict'

import { RuleTester } from 'eslint'

// Utils
import parserOptionsMapper from '../utils/parserOptionsMapper'
import rule from '../../src/rules/pressable-has-accessibility-role'

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester()

const expectedError = {
  message:
    'Missing an explicit "accessibilityRole" attribute for pressable element',
  type: 'JSXOpeningElement'
}

ruleTester.run('pressable-has-accessibility-role', rule, {
  valid: [
    {
      code: `<Pressable onPress={() => {}} accessibilityRole="button"></Pressable>`
    },
    {
      code: `<Text onPress={() => {}} accessibilityRole="link"></Text>`
    }
  ].map(parserOptionsMapper),
  invalid: [
    {
      code: `<Pressable onPress={() => {}}></Pressable>`,
      errors: [expectedError]
    },
    {
      code: `<Text onPress={() => {}}></Text>`,
      errors: [expectedError]
    }
  ].map(parserOptionsMapper)
})
