module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
	],
	settings: {
	},
	rules: {
		'no-tabs': 0,
		indent: ['error', 'tab', { SwitchCase: 1 }],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],
		'node/no-callback-literal': 'off',
	},
}
