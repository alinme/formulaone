/** PM2 config – run from repo root: pm2 start ecosystem.config.cjs */
module.exports = {
  apps: [
    {
      name: "formulaone",
      cwd: "./apps/nextjs",
      script: ".next/standalone/apps/nextjs/server.js",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      env: { NODE_ENV: "production", PORT: "3001" },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      merge_logs: true,
    },
  ],
};
