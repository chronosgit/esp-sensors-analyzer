// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

// /** @type {import('eslint').Linter.Config} */
export default withNuxt({
	ignores: ['node_modules/', 'dist/', '.nuxt/', '.output/', '.husky', '.nuxt'],
	rules: {
		'capitalized-comments': ['off', 'always'],
		'default-case-last': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'vue/no-dupe-v-else-if': 'error',
		'no-alert': 'error',
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		'prefer-const': 'warn',
		'@typescript-eslint/init-declarations': 'error',
		'init-declarations': 'error',
		'prefer-arrow-callback': 'warn',
		'no-var': 'error',
		'vue/arrow-spacing': 'warn',
		'no-duplicate-imports': 'error',
		'no-implicit-globals': 'warn',
		'@typescript-eslint/no-unused-expressions': 'warn',
		'vue/valid-attribute-name': 'error',
		'vue/attributes-order': 'warn',
		'vue/no-multiple-template-root': 'error',
		'vue/no-v-html': 'error',
		'vue/require-v-for-key': 'warn',
		'vue/attribute-hyphenation': 'error',
		'vue/no-async-in-computed-properties': 'error',
		'vue/no-template-key': 'error',
		'vue/no-unused-components': 'warn',
		'vue/no-mutating-props': 'error',
		'vue/valid-template-root': 'error',
		'vue/no-side-effects-in-computed-properties': 'error',
		'no-empty-function': 'error',
		'no-useless-catch': 'error',
		'no-useless-return': 'error',
		'no-useless-escape': 'warn',
	},
});
