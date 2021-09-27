import GithubSlugger from 'github-slugger'

import { FunctionData } from './types.js'
import { createTitle } from './utilities/create-title.js'

/**
 * Generate a Markdown table of contents for the given `categories`.
 *
 * @category Markdown table of contents
 */
export function renderCategoriesToMarkdownToc(
  categories: Array<{
    name: string
    functionsData: Array<FunctionData>
  }>
): string {
  const githubSlugger = new GithubSlugger()
  const lines = []
  for (const { name, functionsData } of categories) {
    lines.push(`- [**${name}**](#${githubSlugger.slug(name)})`)
    for (const { name, parameters, type, typeParameters } of functionsData) {
      const functionName = createTitle(name, type, typeParameters, parameters)
      lines.push(`  - [${functionName}](#${githubSlugger.slug(functionName)})`)
    }
  }
  return lines.join('\n')
}
