# TypeError: Cannot read properties of undefined (reading 'message')

Reproduce repository for https://github.com/newmohq/newmo-app/pull/469

## Reproduce Steps

```bash
for i in {1..1000}
  do
    pnpm run lint:website > /dev/null
    if [ $? -eq 2 ]; then
      break
    fi
done
```

Crash @pandacss/eslint-plugin randomly.

```bash
> eslint website/src --ext .tsx


Oops! Something went wrong! :(

ESLint: 8.56.0

TypeError: Cannot read properties of undefined (reading 'message')
Occurred while linting /Users/azu/ghq/github.com/chakra-ui/panda/website/src/nextra/framework-card.tsx:99
Rule: "@pandacss/no-invalid-token-paths"
    at syncFn (/Users/azu/ghq/github.com/chakra-ui/panda/node_modules/.pnpm/synckit@0.9.0/node_modules/synckit/lib/index.cjs:352:59)
    at /Users/azu/ghq/github.com/chakra-ui/panda/node_modules/.pnpm/@pandacss+eslint-plugin@0.1.5_eslint@8.56.0_jsdom@24.0.0_typescript@5.3.3/node_modules/@pandacss/eslint-plugin/dist/index.js:8060:34
    at Array.filter (<anonymous>)
    at getImports (/Users/azu/ghq/github.com/chakra-ui/panda/node_modules/.pnpm/@pandacss+eslint-plugin@0.1.5_eslint@8.56.0_jsdom@24.0.0_typescript@5.3.3/node_modules/@pandacss/eslint-plugin/dist/index.js:8060:18)
    at isPandaIsh (/Users/azu/ghq/github.com/chakra-ui/panda/node_modules/.pnpm/@pandacss+eslint-plugin@0.1.5_eslint@8.56.0_jsdom@24.0.0_typescript@5.3.3/node_modules/@pandacss/eslint-plugin/dist/index.js:8068:19)
    at isInPandaFunction (/Users/azu/ghq/github.com/chakra-ui/panda/node_modules/.pnpm/@pandacss+eslint-plugin@0.1.5_eslint@8.56.0_jsdom@24.0.0_typescript@5.3.3/node_modules/@pandacss/eslint-plugin/dist/index.js:8143:8)
    at isPandaAttribute (/Users/azu/ghq/github.com/chakra-ui/panda/node_modules/.pnpm/@pandacss+eslint-plugin@0.1.5_eslint@8.56.0_jsdom@24.0.0_typescript@5.3.3/node_modules/@pandacss/eslint-plugin/dist/index.js:8161:20)
    at Property (/Users/azu/ghq/github.com/chakra-ui/panda/node_modules/.pnpm/@pandacss+eslint-plugin@0.1.5_eslint@8.56.0_jsdom@24.0.0_typescript@5.3.3/node_modules/@pandacss/eslint-plugin/dist/index.js:8829:14)
    at ruleErrorHandler (/Users/azu/ghq/github.com/chakra-ui/panda/node_modules/.pnpm/eslint@8.56.0/node_modules/eslint/lib/linter/linter.js:1076:28)
    at /Users/azu/ghq/github.com/chakra-ui/panda/node_modules
```
