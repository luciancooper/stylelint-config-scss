/* eslint-disable max-len */
module.exports = {
    plugins: [
        'stylelint-order',
        'stylelint-scss',
    ],
    customSyntax: require('postcss-scss'),
    rules: {
        // general - Specify indentation (Autofixable).
        indentation: 4,
        // general - Disallow end-of-line whitespace (Autofixable).
        'no-eol-whitespace': true,
        // general - Disallow extra semicolons (Autofixable).
        'no-extra-semicolons': true,
        // general - Disallow empty blocks.
        'block-no-empty': true,
        // general - Require quoted keys in Sass maps.
        'scss/map-keys-quotes': 'always',
        // strings - Disallow (unescaped) newlines in strings.
        'string-no-newline': true,
        // strings - Specify single or double quotes around strings (Autofixable).
        'string-quotes': 'single',
        // fonts - Disallow duplicate font family names.
        'font-family-no-duplicate-names': true,
        // fonts - Disallow missing generic families in lists of font family names.
        'font-family-no-missing-generic-family-keyword': true,
        // fonts - Specify whether or not quotation marks should be used around font family names.
        'font-family-name-quotes': 'always-unless-keyword',
        // fonts - Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.
        'font-weight-notation': 'named-where-possible',
        // numbers - Limit the number of decimal places allowed in numbers.
        'number-max-precision': 8,
        // numbers - Require or disallow a leading zero for fractional numbers less than 1 (Autofixable).
        'number-leading-zero': 'always',
        // numbers - Disallow trailing zeros in numbers (Autofixable).
        'number-no-trailing-zeros': true,
        // color - Disallow invalid hex colors.
        'color-no-invalid-hex': true,
        // color - Specify lowercase or uppercase for hex colors (Autofixable).
        'color-hex-case': 'lower',
        // color - Specify short or long notation for hex colors (Autofixable).
        'color-hex-length': 'long',
        // color - Require (where possible) or disallow named colors.
        'color-named': 'never',
        // case - Specify lowercase or uppercase for function names (Autofixable).
        'function-name-case': 'lower',
        // case - Specify lowercase or uppercase for units (Autofixable).
        'unit-case': 'lower',
        // case - Specify lowercase or uppercase for keywords values (Autofixable).
        'value-keyword-case': 'lower',
        // case - Specify lowercase or uppercase for properties (Autofixable).
        'property-case': 'lower',
        // case - Specify lowercase or uppercase for pseudo-class selectors (Autofixable).
        'selector-pseudo-class-case': 'lower',
        // case - Specify lowercase or uppercase for pseudo-element selectors (Autofixable).
        'selector-pseudo-element-case': 'lower',
        // case - Specify lowercase or uppercase for type selectors (Autofixable).
        'selector-type-case': 'lower',
        // case - Specify lowercase or uppercase for media feature names (Autofixable).
        'media-feature-name-case': 'lower',
        // case - Specify lowercase or uppercase for at-rules names (Autofixable).
        'at-rule-name-case': 'lower',
        // no-unknown - Disallow unknown units.
        'unit-no-unknown': true,
        // no-unknown - Disallow unknown properties.
        'property-no-unknown': true,
        // no-unknown - Disallow unknown pseudo-class selectors.
        'selector-pseudo-class-no-unknown': true,
        // no-unknown - Disallow unknown pseudo-element selectors.
        'selector-pseudo-element-no-unknown': true,
        // no-unknown - Disallow unknown type selectors.
        'selector-type-no-unknown': true,
        // no-unknown - Disallow unknown media feature names.
        'media-feature-name-no-unknown': true,
        // no-unknown - Disallow unknown animations.
        'no-unknown-animations': true,
        // no-unknown - Disallow unknown at-rules. Should be used instead of stylelint's at-rule-no-unknown.
        'scss/at-rule-no-unknown': true,
        // vendor-prefix - Disallow vendor prefixes for values.
        'value-no-vendor-prefix': true,
        // vendor-prefix - Disallow vendor prefixes for properties.
        'property-no-vendor-prefix': true,
        // vendor-prefix - Disallow vendor prefixes for selectors.
        'selector-no-vendor-prefix': true,
        // vendor-prefix - Disallow vendor prefixes for media feature names.
        'media-feature-name-no-vendor-prefix': true,
        // vendor-prefix - Disallow vendor prefixes for at-rules.
        'at-rule-no-vendor-prefix': true,
        // functions - Disallow an invalid expression within calc functions.
        'function-calc-no-invalid': true,
        // functions - Disallow an unspaced operator within calc functions.
        'function-calc-no-unspaced-operator': true,
        // functions - Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
        'function-linear-gradient-no-nonstandard-direction': true,
        // functions - Require a newline or disallow whitespace after the commas of functions (Autofixable).
        'function-comma-newline-after': 'always-multi-line',
        // functions - Require a single space or disallow whitespace after the commas of functions (Autofixable).
        'function-comma-space-after': 'always-single-line',
        // functions - Require a single space or disallow whitespace before the commas of functions (Autofixable).
        'function-comma-space-before': 'never',
        // functions - Limit the number of adjacent empty lines within functions (Autofixable).
        'function-max-empty-lines': 0,
        // functions - Require a newline or disallow whitespace on the inside of the parentheses of functions (Autofixable).
        'function-parentheses-newline-inside': 'always-multi-line',
        // functions - Require a single space or disallow whitespace on the inside of the parentheses of functions (Autofixable).
        'function-parentheses-space-inside': 'never',
        // functions - Require or disallow quotes for urls.
        'function-url-quotes': 'always',
        // functions - Require or disallow whitespace after functions (Autofixable).
        'function-whitespace-after': 'always',
        // value-lists - Require a newline or disallow whitespace after the commas of value lists (Autofixable).
        'value-list-comma-newline-after': 'always-multi-line',
        // value-lists - Require a newline or disallow whitespace before the commas of value lists.
        'value-list-comma-newline-before': 'never-multi-line',
        // value-lists - Require a single space or disallow whitespace after the commas of value lists (Autofixable).
        'value-list-comma-space-after': 'always-single-line',
        // value-lists - Require a single space or disallow whitespace before the commas of value lists (Autofixable).
        'value-list-comma-space-before': 'never',
        // value-lists - Limit the number of adjacent empty lines within value lists (Autofixable).
        'value-list-max-empty-lines': 0,
        // declarations - Disallow duplicate properties within declaration blocks.
        'declaration-block-no-duplicate-properties': [true, {
            ignore: [
                'consecutive-duplicates-with-different-values',
            ],
        }],
        // declarations - Disallow shorthand properties that override related longhand properties.
        'declaration-block-no-shorthand-property-overrides': true,
        // declarations - Disallow redundant values in shorthand properties (Autofixable).
        'shorthand-property-no-redundant-values': true,
        // declarations - Limit the number of declarations within a single-line declaration block.
        'declaration-block-single-line-max-declarations': 1,
        // declarations - Require a single space or disallow whitespace after the bang of declarations (Autofixable).
        'declaration-bang-space-after': 'never',
        // declarations - Require a single space or disallow whitespace before the bang of declarations (Autofixable).
        'declaration-bang-space-before': 'always',
        // declarations - Require a newline or disallow whitespace after the colon of declarations (Autofixable).
        'declaration-colon-newline-after': 'always-multi-line',
        // declarations - Require a single space or disallow whitespace after the colon of declarations (Autofixable).
        'declaration-colon-space-after': 'always-single-line',
        // declarations - Require a single space or disallow whitespace before the colon of declarations (Autofixable).
        'declaration-colon-space-before': 'never',
        // declarations - Require a newline or disallow whitespace after the semicolons of declaration blocks (Autofixable).
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        // declarations - Require a newline or disallow whitespace before the semicolons of declaration blocks.
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        // declarations - Require a single space or disallow whitespace after the semicolons of declaration blocks (Autofixable).
        'declaration-block-semicolon-space-after': 'always-single-line',
        // declarations - Require a single space or disallow whitespace before the semicolons of declaration blocks (Autofixable).
        'declaration-block-semicolon-space-before': 'never',
        // declarations - Require or disallow a trailing semicolon within declaration blocks (Autofixable).
        'declaration-block-trailing-semicolon': 'always',
        // declarations - Disallow !important within keyframe declarations.
        'keyframe-declaration-no-important': true,
        // declarations - Disallow nested properties of the same 'namespace' be divided into multiple groups.
        'scss/declaration-nested-properties-no-divided-groups': true,
        // blocks - Require or disallow an empty line before the closing brace of blocks (Autofixable).
        'block-closing-brace-empty-line-before': 'never',
        // blocks - Require a newline or disallow whitespace after the closing brace of blocks (Autofixable).
        'block-closing-brace-newline-after': ['always', {
            ignoreAtRules: [
                'if',
                'else',
            ],
        }],
        // blocks - Require a newline or disallow whitespace before the closing brace of blocks (Autofixable).
        'block-closing-brace-newline-before': 'always-multi-line',
        // blocks - Require a single space or disallow whitespace before the closing brace of blocks (Autofixable).
        'block-closing-brace-space-before': 'always-single-line',
        // blocks - Require a newline after the opening brace of blocks (Autofixable).
        'block-opening-brace-newline-after': 'always-multi-line',
        // blocks - Require a single space or disallow whitespace after the opening brace of blocks (Autofixable).
        'block-opening-brace-space-after': 'always-single-line',
        // blocks - Require a single space or disallow whitespace before the opening brace of blocks (Autofixable).
        'block-opening-brace-space-before': 'always',
        // selectors - Disallow duplicate selectors within a stylesheet.
        'no-duplicate-selectors': true,
        // selectors - Limit the number of adjacent empty lines within selectors (Autofixable).
        'selector-max-empty-lines': 0,
        // selectors - Limit the number of ID selectors in a selector.
        'selector-max-id': 1,
        // selectors - Require a single space or disallow whitespace on the inside of the brackets within attribute selectors (Autofixable).
        'selector-attribute-brackets-space-inside': 'never',
        // selectors - Require a single space or disallow whitespace after operators within attribute selectors (Autofixable).
        'selector-attribute-operator-space-after': 'never',
        // selectors - Require a single space or disallow whitespace before operators within attribute selectors (Autofixable).
        'selector-attribute-operator-space-before': 'never',
        // selectors - Require or disallow quotes for attribute values.
        'selector-attribute-quotes': 'always',
        // selectors - Require a single space or disallow whitespace after the combinators of selectors (Autofixable).
        'selector-combinator-space-after': 'always',
        // selectors - Require a single space or disallow whitespace before the combinators of selectors (Autofixable).
        'selector-combinator-space-before': 'always',
        // selectors - Disallow non-space characters for descendant combinators of selectors (Autofixable).
        'selector-descendant-combinator-no-non-space': true,
        // selectors - Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors (Autofixable).
        'selector-pseudo-class-parentheses-space-inside': 'never',
        // selectors - Specify single or double colon notation for applicable pseudo-elements (Autofixable).
        'selector-pseudo-element-colon-notation': 'double',
        // selectors - Require a newline or disallow whitespace after the commas of selector lists (Autofixable).
        'selector-list-comma-newline-after': 'always',
        // selectors - Require a single space or disallow whitespace before the commas of selector lists (Autofixable).
        'selector-list-comma-space-before': 'never',
        // selectors - Disallow redundant nesting selectors (&).
        'scss/selector-no-redundant-nesting-selector': true,
        // @media - Require a single space or disallow whitespace after the colon in media features (Autofixable).
        'media-feature-colon-space-after': 'always',
        // @media - Require a single space or disallow whitespace before the colon in media features (Autofixable).
        'media-feature-colon-space-before': 'never',
        // @media - Require a single space or disallow whitespace on the inside of the parentheses within media features (Autofixable).
        'media-feature-parentheses-space-inside': 'never',
        // @media - Require a single space or disallow whitespace after the range operator in media features (Autofixable).
        'media-feature-range-operator-space-after': 'always',
        // @media - Require a single space or disallow whitespace before the range operator in media features (Autofixable).
        'media-feature-range-operator-space-before': 'always',
        // @media - Require a newline or disallow whitespace after the commas of media query lists (Autofixable).
        'media-query-list-comma-newline-after': 'always-multi-line',
        // @media - Require a newline or disallow whitespace before the commas of media query lists.
        'media-query-list-comma-newline-before': 'never-multi-line',
        // @media - Require a single space or disallow whitespace after the commas of media query lists (Autofixable).
        'media-query-list-comma-space-after': 'always-single-line',
        // @media - Require a single space or disallow whitespace before the commas of media query lists (Autofixable).
        'media-query-list-comma-space-before': 'never',
        // at-rules - Require a newline after at-rule names.
        'at-rule-name-newline-after': 'always-multi-line',
        // at-rules - Require a single space after at-rule names (Autofixable).
        'at-rule-name-space-after': 'always-single-line',
        // at-rules - Require a newline after the semicolon of at-rules (Autofixable).
        'at-rule-semicolon-newline-after': 'always',
        // at-rules - Require a single space or disallow whitespace before the semicolons of at-rules.
        'at-rule-semicolon-space-before': 'never',
        // at-rules - Specify a list of disallowed at-rules.
        'at-rule-disallowed-list': [
            'debug',
        ],
        // at-rules - This is a rule that checks for situations where users have done a loop using map-keys and grabbed the value for that key inside of the loop.
        'scss/at-each-key-value-single-line': true,
        // at-rules - Require or disallow a newline after the closing brace of @else statements (Autofixable).
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        // at-rules - Require a single space or disallow whitespace after the closing brace of @else statements (Autofixable).
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        // at-rules - Require an empty line or disallow empty lines before @-else (Autofixable).
        'scss/at-else-empty-line-before': 'never',
        // at-rules - Require or disallow a space before @else if parentheses (Autofixable).
        'scss/at-else-if-parentheses-space-before': 'always',
        // at-rules - Disallow at-extends (@extend) with missing placeholders.
        'scss/at-extend-no-missing-placeholder': true,
        // at-rules - Require or disallow parentheses in argumentless @mixin calls (Autofixable).
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        // at-rules - Require or disallow a space before @function parentheses (Autofixable).
        'scss/at-function-parentheses-space-before': 'never',
        // at-rules - Require or disallow a space before @mixin parentheses (Autofixable).
        'scss/at-mixin-parentheses-space-before': 'never',
        // at-rules - Require or disallow a newline after the closing brace of @if statements (Autofixable).
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        // at-rules - Require a single space or disallow whitespace after the closing brace of @if statements (Autofixable).
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        // at-rules - Disallow null in @if statements.
        'scss/at-if-no-null': true,
        // at-rules - Disallow parentheses in conditional @ rules (if, elsif, while).
        'scss/at-rule-conditional-no-parentheses': true,
        // at-rules - Disallow duplicate mixins within a stylesheet.
        'scss/no-duplicate-mixins': true,
        // comments - Disallow empty comments.
        'comment-no-empty': true,
        // comments - Disallow double-slash comments which are not supported by CSS.
        'no-invalid-double-slash-comments': true,
        // comments - Require or disallow whitespace on the inside of comment markers (Autofixable).
        'comment-whitespace-inside': 'always',
        // comments - Require or disallow whitespace after the // in //-comments
        'scss/double-slash-comment-whitespace-inside': 'always',
        // empty-lines - Limit the number of adjacent empty lines (Autofixable).
        'max-empty-lines': 1,
        // empty-lines - Disallow missing end-of-source newlines (Autofixable).
        'no-missing-end-of-source-newline': true,
        // empty-lines - Disallow empty first lines (Autofixable).
        'no-empty-first-line': true,
        // empty-lines - Require or disallow an empty line before custom properties (Autofixable).
        'custom-property-empty-line-before': 'never',
        // empty-lines - Require or disallow an empty line before declarations (Autofixable).
        'declaration-empty-line-before': 'never',
        // empty-lines - Require or disallow an empty line before rules (Autofixable).
        'rule-empty-line-before': ['always', {
            except: [
                'after-single-line-comment',
                'first-nested',
            ],
        }],
        // empty-lines - Require or disallow an empty line before at-rules (Autofixable).
        'at-rule-empty-line-before': ['always', {
            except: [
                'blockless-after-blockless',
                'first-nested',
            ],
            ignore: [
                'after-comment',
            ],
            ignoreAtRules: [
                'if',
                'else',
                'return',
                'error',
                'for',
                'each',
                'while',
                'include',
            ],
        }],
        // empty-lines - Require or disallow an empty line before comments (Autofixable).
        'comment-empty-line-before': ['always', {
            except: [
                'first-nested',
            ],
            ignore: [
                'after-comment',
                'stylelint-commands',
            ],
        }],
        // empty-lines - Require or disallow an empty line before //-comments (Autofixable).
        'scss/double-slash-comment-empty-line-before': ['always', {
            except: [
                'first-nested',
            ],
            ignore: [
                'between-comments',
                'stylelint-commands',
            ],
        }],
        // naming-conventions - Specify a pattern for class selectors.
        'selector-class-pattern': [/^[a-z][a-z0-9-]*$/, {
            resolveNestedSelectors: true,
            message: 'Class selectors should be lowercase with hyphens (selector-class-pattern)',
        }],
        // naming-conventions - Specify a pattern for ID selectors.
        'selector-id-pattern': [/^[a-z][a-z0-9-]*$/, {
            message: 'Id selectors should be lowercase with hyphens (selector-id-pattern)',
        }],
        // naming-conventions - Specify a pattern for keyframe names.
        'keyframes-name-pattern': [/^[a-z][a-z0-9-]*$/, {
            message: 'Keyframe names should be lowercase with hyphens (keyframes-name-pattern)',
        }],
        // naming-conventions - Specify a pattern for custom properties.
        'custom-property-pattern': [/^[a-z][a-z0-9-]*$/, {
            message: 'Property names should be lowercase with hyphens (custom-property-pattern)',
        }],
        // naming-conventions - Specify a pattern for Sass/SCSS-like function names.
        'scss/at-function-pattern': [/^[a-z][a-z0-9-]*$/, {
            message: '@function names should be lowercase with hyphens (scss/at-function-pattern)',
        }],
        // naming-conventions - Specify a pattern for Sass/SCSS-like mixin names.
        'scss/at-mixin-pattern': [/^[a-z][a-z0-9-]*$/, {
            message: '@mixin names should be lowercase with hyphens (scss/at-mixin-pattern)',
        }],
        // naming-conventions - Specify a pattern for Sass-like variables.
        'scss/dollar-variable-pattern': [/^[a-z][a-z0-9-]*$/, {
            message: 'Variable names should be lowercase with hyphens (scss/dollar-variable-pattern)',
        }],
        // naming-conventions - Specify a pattern for %-placeholders.
        'scss/percent-placeholder-pattern': [/^[a-z][a-z0-9-]*$/, {
            message: 'Placeholder names should be lowercase with hyphens (scss/percent-placeholder-pattern)',
        }],
        // imports - Disallow empty sources.
        'no-empty-source': true,
        // imports - Disallow duplicate @import rules within a stylesheet.
        'no-duplicate-at-import-rules': true,
        // imports - Disallow leading underscore in partial names in @import.
        'scss/at-import-no-partial-leading-underscore': true,
        // imports - Require or disallow extension in @import commands.
        'scss/at-import-partial-extension': 'never',
        // imports - Specify blacklist of disallowed file extensions for partial names in @import commands.
        'scss/at-import-partial-extension-blacklist': [
            'scss',
        ],
        // imports - Disallow non-CSS @imports in partial files.
        'scss/partial-no-import': true,
        // $variables - Require a newline after the colon in $-variable declarations (Autofixable).
        'scss/dollar-variable-colon-newline-after': 'always-multi-line',
        // $variables - Require or disallow whitespace after the colon in $-variable declarations (Autofixable).
        'scss/dollar-variable-colon-space-after': 'always-single-line',
        // $variables - Require a single space or disallow whitespace before the colon in $-variable declarations (Autofixable).
        'scss/dollar-variable-colon-space-before': 'never',
        // $variables - Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
        'scss/dollar-variable-no-missing-interpolation': true,
        // $variables - Disallow duplicate dollar variables within a stylesheet.
        'scss/no-duplicate-dollar-variables': [true, {
            ignoreInside: [
                'at-rule',
            ],
            ignoreInsideAtRules: [
                'if',
                'else',
                'for',
                'each',
                'while',
                'function',
            ],
        }],
        // units - Disallow units for zero lengths (Autofixable).
        'length-zero-no-unit': [true, {
            ignore: [
                'custom-properties',
            ],
        }],
        // units - Disallow non-numeric values when interpolating a value with a unit.
        'scss/dimension-no-non-numeric-values': true,
        // operators - Disallow linebreaks after Sass operators.
        'scss/operator-no-newline-after': true,
        // operators - Disallow linebreaks before Sass operators.
        'scss/operator-no-newline-before': true,
        // operators - Disallow unspaced operators in Sass operations.
        'scss/operator-no-unspaced': true,
        // order - Specify the order of content within declaration blocks.
        'order/order': [
            'custom-properties',
            {
                type: 'at-rule',
                name: 'extend',
            },
            {
                type: 'at-rule',
                name: 'include',
                hasBlock: false,
            },
            'declarations',
            {
                type: 'at-rule',
                name: 'include',
                hasBlock: true,
            },
            {
                type: 'at-rule',
                hasBlock: true,
            },
            'rules',
            {
                type: 'at-rule',
                name: 'at-root',
            },
        ],
    },
};