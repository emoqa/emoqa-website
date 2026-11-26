module.exports = {
  apps: [
    {
      name: "emoqa-website",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3003",
      cwd: "/opt/emoqa-website",
      env: {
        NODE_ENV: "production",
        PORT: "3003",
        BLOG_DATA_DIR: "/var/data/emoqa-website",
        NEXT_PUBLIC_INQUIRY_URL: "https://www.emoqa.in/api/inquiry/",
      },
    },
  ],
};
