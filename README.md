# Dandiws.io

Personal portfolio of [Dandi Wiratsangka](https://dandiws.my.id), built with [Astro](https://astro.build/) and deployed on Cloudflare Workers.

## Requirements

- Node.js 22.12 or later, managed with [fnm](https://github.com/Schniz/fnm)
- Bun 1.4 or later

## Getting started

```shell
fnm use
bun install
bun run dev
```

## Production

```shell
bun run build
bun run preview
```

The site is a static, single-page portfolio. Astro renders the page, and a Solid island manages the interactive ASCII terrain. Deploy with `bun run deploy` after authenticating Wrangler with Cloudflare.

## License

I'm keeping my personal website open sourced as learning materials. Please find it as inspiration and not a template. Sure you're free to use it for your personal website, but **with attribution**.
