import { hydrate, prerender as ssr } from 'preact-iso'

export function App() {
  return <div>hello world</div>
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'))
}

export async function prerender(data) {
  return await ssr(<App {...data} />)
}
