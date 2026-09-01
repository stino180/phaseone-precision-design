# Inpoint Studio

Digital consultancy — web, mobile, brand, and video. This is the site that sells,
so it speaks to prospective clients only and has one call to action: book a
discovery call. Deployed via Lovable.

Repo name predates the brand; `phaseone-precision-design` **is** Inpoint Studio.

## The project catalogue is synced, not owned

`src/data/projects.ts` is **generated — do not edit it here.** The canonical
catalogue lives in the `my-digital-orchard` repo (the personal site). Edit it
there, then:

```
npm run sync:projects
```

Local edits to that file are overwritten by the next sync. The two sites are
separate deployments, so this is a copy rather than a shared package: one owner,
one direction, and drift shows up as a diff instead of two files quietly
disagreeing.

Screenshots are this site's own and are keyed by slug in `WorkSection.tsx`,
because both sites use different artwork for the same project.

## Portfolio framing

Cards carry an **In-House Product** / **Client Work** badge from the catalogue's
`origin` field. Both belong here — shipping our own products is a trust signal,
not padding.

Two labelled grids were considered and rejected: client work in that grid is
currently one project, and a one-item column reads worse than no split. Revisit
once there are enough client projects to fill a column.

Discipline filters are derived from the data, so a category with nothing behind
it renders no filter rather than an empty page.

## Package manager

**Use npm.** This repo has been touched by both npm and bun, and only npm writes
`package-lock.json`. Its lockfile has drifted from `package.json` before, which
gives a working dev server and a broken clean install.

`npm run dev` checks for that first and tells you the fix
(`npm install --package-lock-only`). Run `npm run check:lockfile` any time.

Not wired into `build` on purpose — the hosted build runs where this repo can't
see, and a failing prebuild there would take the site down rather than warn you.

## Images

Encode to webp and size to roughly 2–3x the rendered size. `src/assets` was once
19MB: 3MB screenshots in 370px cards, 1.5MB logos in an 80x80 slot. It is now
384KB. Keep it that way.
