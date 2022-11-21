import { expect, test } from 'vitest'
import { Recipe } from '../src'
import { createContext } from './fixture'

function run(value: Record<string, any> = {}) {
  const recipe = new Recipe(
    {
      name: 'text',
      base: {
        marginTop: 'auto',
        marginBottom: 0,
        paddingTop: 0,
        objectPos: 'center',
      },
      variants: {
        variant: {
          sm: {
            '&:first-child': {
              marginRight: '4',
              '&:hover': {
                color: { base: 'red.200', md: 'gray.300' },
              },
            },
            '&:disabled': {
              marginRight: '40px',
              filter: 'unset',
            },
          },
          md: {
            '&:before': {
              '--mb': 'colors.gray.300',
              left: '5',
              borderBottomRightRadius: 'sm',
            },
            '&:after': {
              right: 90,
              borderBottomRightRadius: 'lg',
              transform: 'scaleX(-1)',
            },
          },
        },
      },
    },
    createContext(),
  )

  recipe.process({ styles: value })
  return recipe.toCss()
}

test('[recipe] direct nesting / recipe ruleset', () => {
  expect(run({ variant: 'sm' })).toMatchInlineSnapshot(`
    "@layer recipes {
        .text {
            margin-top: auto;
            margin-bottom: 0;
            padding-top: 0;
            object-position: center
        }
        .text--variant_sm {
            &:first-child {
                margin-right: var(--spacing-4)
            }
            &:first-child:hover {
                color: var(--colors-red-200)
            }
            @screen md {
                &:first-child:hover {
                    color: var(--colors-gray-300)
                }
            }
            &:disabled {
                margin-right: 40px;
                filter: unset
            }
        }
    }"
  `)

  expect(run({ variant: 'md' })).toMatchInlineSnapshot(`
    "@layer recipes {
        .text {
            margin-top: auto;
            margin-bottom: 0;
            padding-top: 0;
            object-position: center
        }
        .text--variant_md {
            &:before {
                --mb: var(--colors-gray-300)
    ;
                left: var(--spacing-5);
                border-bottom-right-radius: sm
            }
            &:after {
                right: 90px;
                border-bottom-right-radius: lg;
                transform: scaleX(-1)
            }
        }
    }"
  `)
})