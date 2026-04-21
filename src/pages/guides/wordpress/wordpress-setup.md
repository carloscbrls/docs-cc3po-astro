---
layout: '../../../layouts/Layout.astro'
title: WordPress Setup Guide
---

# WordPress Setup Guide

A comprehensive guide to setting up a secure, performant WordPress installation.

## Prerequisites

Before you begin, ensure you have:

- A domain name registered
- Web hosting (recommended: SiteGround, Kinsta, or WP Engine)
- SSL certificate (usually provided by host)
- FTP/SFTP access credentials

## Step 1: Download WordPress

1. Visit [wordpress.org/download](https://wordpress.org/download/)
2. Download the latest stable version
3. Extract the ZIP file to your local machine

## Step 2: Create a Database

Most hosting providers offer one-click WordPress installation. If installing manually:

```sql
CREATE DATABASE wordpress_db;
CREATE USER 'wp_user'@'localhost' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wp_user'@'localhost';
FLUSH PRIVILEGES;
```

## Step 3: Upload Files

1. Connect to your server via FTP/SFTP
2. Upload WordPress files to your `public_html` directory
3. Rename `wp-config-sample.php` to `wp-config.php`

## Step 4: Configure wp-config.php

Edit the file with your database credentials:

```php
define('DB_NAME', 'wordpress_db');
define('DB_USER', 'wp_user');
define('DB_PASSWORD', 'secure_password');
define('DB_HOST', 'localhost');
```

> **Security Tip**: Add security keys from [api.wordpress.org/secret-key](https://api.wordpress.org/secret-key/1.1/salt/)

## Step 5: Run the Installation

1. Visit your domain in a browser
2. Follow the installation wizard
3. Create an admin account (use a strong password!)

## Post-Installation Checklist

- [ ] Change the default admin username (don't use "admin")
- [ ] Install an SSL certificate and force HTTPS
- [ ] Set up automatic backups
- [ ] Install essential security plugins
- [ ] Configure permalinks (Settings → Permalinks)
- [ ] Delete default plugins and themes
- [ ] Set the correct timezone

## Recommended Plugins

| Plugin | Purpose |
|--------|---------|
| Wordfence | Security |
| WP Rocket | Caching |
| Smush | Image optimization |
| UpdraftPlus | Backups |
| Yoast SEO | SEO optimization |

## Next Steps

- Read the [WordPress Security Guide](/guides/wordpress/wordpress-security)
- Learn about [WordPress Optimization](/guides/wordpress/wordpress-optimization)
- Explore [AI Automation Workflows](/guides/ai/ai-automation-workflows)