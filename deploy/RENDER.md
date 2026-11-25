# Deploying to Render

`render.yaml` describes a free service: Node 22, Singapore, manual deploys.

1. In Render, choose New > Blueprint and pick the Git repository and branch.
2. Check that the plan says Free, then apply.

## What the free plan means

- It sleeps after 15 idle minutes. The next visit takes about a minute.
- Files do not last, so on its own the site shows the six sample articles, the contact form hands
  messages to WhatsApp or email, and there is no admin login.

## Free, with a working blog admin

Add a Turso database. In the service's Environment, set `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`, then redeploy.
Once, from this folder, with the same two values in `.env.turso`:

    node --env-file=.env.turso scripts/copy-to-turso.mjs

This copies the posts, inquiries and admin login. Publishing and the inquiry inbox then work as usual.

## Paid, with a disk

Set `plan: starter`, replace `EPHEMERAL_STORAGE` with `BLOG_DATA_DIR: /var/data`, and add a disk mounted at `/var/data`.
Create the login from the service's Shell with `npm run admin:password`.
