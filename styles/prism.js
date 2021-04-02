import { css } from '@emotion/react'

export const prismcssDark = (theme) => css`
  pre::-webkit-scrollbar {
    width: 14px;
  }

  pre::-webkit-scrollbar-track {
    background-color: ${theme.colors.dark[100]};
    border-radius: 0.5em;
  }

  pre::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.whiteAlpha[200]};
    border-radius: 0.5em;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #ccc;
    background: ${theme.colors.dark[100]};
    text-shadow: none;
    font-family: 'Fira Code', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background-color: ${theme.colors.accent};
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background-color: ${theme.colors.accent};
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*='language-'] {    
    border-radius: 0.5em;
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    height: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: ${theme.colors.dark[100]};
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 4px 7px;
    border-radius: 0.3em;
    white-space: normal;
  }

  .limit-300 {
    height: 300px !important;
  }

  .limit-400 {
    height: 400px !important;
  }

  .limit-500 {
    height: 500px !important;
  }

  .limit-600 {
    height: 600px !important;
  }

  .limit-700 {
    height: 700px !important;
  }

  .limit-800 {
    height: 800px !important;
  }

  .token.comment {
    color: rgba(98, 114, 164, 1);
  }

  .token.prolog {
    color: rgba(207, 207, 194, 1);
  }

  .token.tag {
    color: rgba(220, 104, 170, 1);
  }

  .token.entity {
    color: rgba(139, 233, 253, 1);
  }

  .token.atrule {
    color: rgba(98, 239, 117, 1);
  }

  .token.url {
    color: rgba(102, 217, 239, 1);
  }

  .token.selector {
    color: rgba(207, 207, 194, 1);
  }

  .token.string {
    color: rgba(241, 250, 140, 1);
  }

  .token.property {
    color: rgba(255, 184, 108, 1);
  }

  .token.important {
    color: ${theme.colors.red[400]};
    font-weight: bold;
  }

  .token.punctuation {
    color: white;
  }

  .token.number {
    color: rgba(189, 147, 249, 1);
  }

  .token.function {
    color: rgba(80, 250, 123, 1);
  }

  .token.class-name {
    color: rgba(255, 184, 108, 1);
  }

  .token.keyword {
    color: ${theme.colors.red[400]};
  }

  .token.boolean {
    color: rgba(255, 184, 108, 1);
  }

  .token.operator {
    color: rgba(139, 233, 253, 1);
  }

  .token.char {
    color: rgba(255, 135, 157, 1);
  }

  .token.regex {
    color: rgba(80, 250, 123, 1);
  }

  .token.variable {
    color: rgba(80, 250, 123, 1);
  }

  .token.constant {
    color: rgba(255, 184, 108, 1);
  }

  .token.symbol {
    color: rgba(255, 184, 108, 1);
  }

  .token.builtin {
    color: ${theme.colors.red[400]};
  }

  .token.attr-value {
    color: #7ec699;
  }

  .token.deleted {
    color: #e2777a;
  }

  .token.namespace {
    color: #e2777a;
  }

  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token {
    color: ${theme.colors.red[400]};
  }

  .language-cpp .token.string {
    color: #8be9fd;
  }

  .language-c .token.string {
    color: #8be9fd;
  }

  .language-css .token.selector {
    color: rgba(80, 250, 123, 1);
  }

  .language-css .token.property {
    color: rgba(255, 184, 108, 1);
  }

  .language-java span.token.class-name {
    color: #8be9fd;
  }

  .language-java .token.class-name {
    color: #8be9fd;
  }

  .language-markup .token.attr-value {
    color: rgba(102, 217, 239, 1);
  }

  .language-markup .token.tag {
    color: rgba(80, 250, 123, 1);
  }

  .language-objectivec .token.property {
    color: #66d9ef;
  }

  .language-objectivec .token.string {
    color: #50fa7b;
  }

  .language-php .token.boolean {
    color: #8be9fd;
  }

  .language-php .token.function {
    color: ${theme.colors.red[400]};
  }

  .language-php .token.keyword {
    color: #66d9ef;
  }

  .language-ruby .token.symbol {
    color: #8be9fd;
  }

  .language-ruby .token.class-name {
    color: #cfcfc2;
  }

  pre.line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  pre.line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }

  div.code-toolbar {
    position: relative;
  }

  div.code-toolbar > .toolbar {
    position: absolute;
    top: 0.3em;
    right: 0.2em;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  div.code-toolbar:hover > .toolbar {
    opacity: 1;
  }

  div.code-toolbar > .toolbar .toolbar-item {
    display: inline-block;
    padding-right: 20px;
  }

  div.code-toolbar > .toolbar a {
    cursor: pointer;
  }

  div.code-toolbar > .toolbar button {
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-user-select: none; /* for button */
    -moz-user-select: none;
    -ms-user-select: none;
  }

  div.code-toolbar > .toolbar a,
  div.code-toolbar > .toolbar button,
  div.code-toolbar > .toolbar span {
    color: #ccc;
    font-size: 0.8em;
    padding: 0.5em;
    background: rgba(98, 114, 164, 1);
    border-radius: 0.5em;
  }

  div.code-toolbar > .toolbar a:hover,
  div.code-toolbar > .toolbar a:focus,
  div.code-toolbar > .toolbar button:hover,
  div.code-toolbar > .toolbar button:focus,
  div.code-toolbar > .toolbar span:hover,
  div.code-toolbar > .toolbar span:focus {
    color: inherit;
    text-decoration: none;
    background-color: var(--verde);
  }
  /* override */
  pre[class*='language-'] {
    margin-bottom: 2rem;
  }

  /* Remark code title */

  .remark-code-title {
    padding: 6px 2em;
    background-color: ${theme.colors.dark[100]};
    font-size: 13px;
    margin-top: 0.5em;
    border-radius: 0.5em 0.5em 0 0;
    display: inline-block;
    border-bottom: 1px solid ${theme.colors.dark[200]};
    color: ${theme.colors.gray[400]};
  }
  .remark-code-title + code[class*='language-'],
  .remark-code-title + pre[class*='language-'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0.5em;
    margin-top: 0;
  }
`

/**
 * Coldark Theme for Prism.js
 * Theme variation: Cold
 * Tested with HTML, CSS, JS, JSON, PHP, YAML, Bash script
 * @author Armand Philippot <contact@armandphilippot.com>
 * @homepage https://github.com/ArmandPhilippot/coldark-prism
 * @license MIT
 */
export const prismcssLight = (theme) => css`
  code[class*='language-'],
  pre[class*='language-'] {
    color: #111b27;
    background: none;    
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    background: #8da1b9;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    background: #8da1b9;
  }

  /* Code blocks */
  pre[class*='language-'] {
    border-radius: 0.5em;
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #e3eaf2;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em 0.3em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #3c526d;
  }

  .token.punctuation {
    color: #111b27;
  }

  .token.delimiter.important,
  .token.selector .parent,
  .token.tag,
  .token.tag .token.punctuation {
    color: #006d6d;
  }

  .token.attr-name,
  .token.boolean,
  .token.boolean.important,
  .token.number,
  .token.constant,
  .token.selector .token.attribute {
    color: #755f00;
  }

  .token.class-name,
  .token.key,
  .token.parameter,
  .token.property,
  .token.property-access,
  .token.variable {
    color: #005a8e;
  }

  .token.attr-value,
  .token.inserted,
  .token.color,
  .token.selector .token.value,
  .token.string,
  .token.string .token.url-link {
    color: #116b00;
  }

  .token.builtin,
  .token.keyword-array,
  .token.package,
  .token.regex {
    color: #af00af;
  }

  .token.function,
  .token.selector .token.class,
  .token.selector .token.id {
    color: #7c00aa;
  }

  .token.atrule .token.rule,
  .token.combinator,
  .token.keyword,
  .token.operator,
  .token.pseudo-class,
  .token.pseudo-element,
  .token.selector,
  .token.unit {
    color: #a04900;
  }

  .token.deleted,
  .token.important {
    color: #c22f2e;
  }

  .token.keyword-this,
  .token.this {
    color: #005a8e;
  }

  .token.important,
  .token.keyword-this,
  .token.this,
  .token.bold {
    font-weight: bold;
  }

  .token.delimiter.important {
    font-weight: inherit;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .language-markdown .token.title,
  .language-markdown .token.title .token.punctuation {
    color: #005a8e;
    font-weight: bold;
  }

  .language-markdown .token.blockquote.punctuation {
    color: #af00af;
  }

  .language-markdown .token.code {
    color: #006d6d;
  }

  .language-markdown .token.hr.punctuation {
    color: #005a8e;
  }

  .language-markdown .token.url > .token.content {
    color: #116b00;
  }

  .language-markdown .token.url-link {
    color: #755f00;
  }

  .language-markdown .token.list.punctuation {
    color: #af00af;
  }

  .language-markdown .token.table-header {
    color: #111b27;
  }

  .language-json .token.operator {
    color: #111b27;
  }

  .language-scss .token.variable {
    color: #006d6d;
  }

  /* overrides color-values for the Show Invisibles plugin
 * https://prismjs.com/plugins/show-invisibles/
 */
  .token.tab:not(:empty):before,
  .token.cr:before,
  .token.lf:before,
  .token.space:before {
    color: #3c526d;
  }

  /* overrides color-values for the Toolbar plugin
 * https://prismjs.com/plugins/toolbar/
 */
  div.code-toolbar > .toolbar a,
  div.code-toolbar > .toolbar button {
    color: #e3eaf2;
    background: #005a8e;
  }

  div.code-toolbar > .toolbar a:hover,
  div.code-toolbar > .toolbar a:focus,
  div.code-toolbar > .toolbar button:hover,
  div.code-toolbar > .toolbar button:focus {
    color: #e3eaf2;
    background: #005a8eda;
    text-decoration: none;
  }

  div.code-toolbar > .toolbar span,
  div.code-toolbar > .toolbar span:hover,
  div.code-toolbar > .toolbar span:focus {
    color: #e3eaf2;
    background: #3c526d;
  }

  /* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */
  .line-highlight {
    background: #8da1b92f;
    background: linear-gradient(to right, #8da1b92f 70%, #8da1b925);
  }

  .line-highlight:before,
  .line-highlight[data-end]:after {
    background-color: #3c526d;
    color: #e3eaf2;
    box-shadow: 0 1px #8da1b9;
  }

  pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before {
    background-color: #3c526d1f;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
  .line-numbers .line-numbers-rows {
    border-right: 1px solid #8da1b97a;
    background: #d0dae77a;
  }

  .line-numbers-rows > span:before {
    color: #3c526dda;
  }

  /* overrides color-values for the Match Braces plugin
 * https://prismjs.com/plugins/match-braces/
 */
  .rainbow-braces .token.punctuation.brace-level-1,
  .rainbow-braces .token.punctuation.brace-level-5,
  .rainbow-braces .token.punctuation.brace-level-9 {
    color: #755f00;
  }

  .rainbow-braces .token.punctuation.brace-level-2,
  .rainbow-braces .token.punctuation.brace-level-6,
  .rainbow-braces .token.punctuation.brace-level-10 {
    color: #af00af;
  }

  .rainbow-braces .token.punctuation.brace-level-3,
  .rainbow-braces .token.punctuation.brace-level-7,
  .rainbow-braces .token.punctuation.brace-level-11 {
    color: #005a8e;
  }

  .rainbow-braces .token.punctuation.brace-level-4,
  .rainbow-braces .token.punctuation.brace-level-8,
  .rainbow-braces .token.punctuation.brace-level-12 {
    color: #7c00aa;
  }

  /* overrides color-values for the Diff Highlight plugin
 * https://prismjs.com/plugins/diff-highlight/
 */
  pre.diff-highlight > code .token.deleted:not(.prefix),
  pre > code.diff-highlight .token.deleted:not(.prefix) {
    background-color: #c22f2e1f;
  }

  pre.diff-highlight > code .token.inserted:not(.prefix),
  pre > code.diff-highlight .token.inserted:not(.prefix) {
    background-color: #116b001f;
  }

  /* overrides color-values for the Command Line plugin
 * https://prismjs.com/plugins/command-line/
 */
  .command-line-prompt {
    border-right: 1px solid #8da1b97a;
  }

  .command-line-prompt > span:before {
    color: #3c526dda;
  }

  /* override */
  pre[class*='language-'] {
    margin-bottom: 2rem;
  }


  /* Remark code title */

  .remark-code-title {
    padding: 6px 2em;
    background-color: #e3eaf2;
    font-size: 13px;
    margin-top: 0.5em;
    border-radius: 0.5em 0.5em 0 0;
    display: inline-block;
    border-bottom: 1px solid white;
    color: ${theme.colors.gray[600]};
  }
  .remark-code-title + code[class*='language-'],
  .remark-code-title + pre[class*='language-'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0.5em;
    margin-top: 0;
  }
`
export default {
  prismcssDark,
  prismcssLight
}
