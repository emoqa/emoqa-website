# Moving emoqa.in to the Node server

Needed once, on the VPS. Requires nginx with HTTPS, and Node 22.13 or newer (`node -v`).
The old static site in `/var/www/emoqa-website` stays untouched, so you can switch back at any time.

## 1. Prepare the VPS

Run as root. Replace `DEPLOY_USER` with the value of the `VPS_USER` GitHub secret.

```bash
useradd --system --shell /usr/sbin/nologin emoqa
mkdir -p /var/www/emoqa-app/releases
chown -R DEPLOY_USER /var/www/emoqa-app
# copy deploy/emoqa-website.service to /etc/systemd/system/ first
systemctl daemon-reload
systemctl enable emoqa-website
```

If `DEPLOY_USER` is not root, allow it to restart this one service (`visudo -f /etc/sudoers.d/emoqa-website`):

```
DEPLOY_USER ALL=(root) NOPASSWD: /usr/bin/systemctl restart emoqa-website
```

If Node is installed through nvm in a home folder, install it system-wide instead. The service cannot read home folders.

## 2. First deploy

In GitHub: Settings > Secrets and variables > Actions > Variables, add `VPS_NODE_READY` = `true`.
Then run the Deploy Website workflow. The live site does not change yet.

Check it on the VPS: `curl -I http://127.0.0.1:3010/blogs/`

## 3. Create the admin login

```bash
cd /var/www/emoqa-app/current
sudo -u emoqa BLOG_DATA_DIR=/var/lib/emoqa-blog node --disable-warning=ExperimentalWarning scripts/admin-password.mjs
```

## 4. Switch nginx

Back up the emoqa.in config, put in `deploy/nginx-location.conf`, then:

```bash
nginx -t && systemctl reload nginx
```

Open https://www.emoqa.in/blogs/ and https://www.emoqa.in/admin/. The admin login needs HTTPS.

## Undo

- Website: restore the nginx backup and reload.
- One release: `ln -sfn /var/www/emoqa-app/releases/OLD_SHA /var/www/emoqa-app/current && systemctl restart emoqa-website`

## Backups

Posts, images and the login are in `/var/lib/emoqa-blog`. A safe daily copy (needs the `sqlite3` package):

```bash
sqlite3 /var/lib/emoqa-blog/blog.db ".backup '/root/blog-backup.db'"
tar -czf /root/blog-uploads.tgz -C /var/lib/emoqa-blog uploads
```
