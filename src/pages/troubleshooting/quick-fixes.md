---
layout: '../../layouts/Layout.astro'
title: 'Quick Fixes'
description: 'Fast solutions for the most common problems — copy, paste, done. Most take under 5 minutes.'
---

## Quick Fixes

These are the fastest solutions we give clients every day. Most take under 5 minutes.

> 💡 **Not technical?** No worries — just [contact us](https://offers.cc3po.com/get-started/) and we'll handle it. These fixes are here for when you want to try it yourself first.

---

### WordPress

#### Clear cache (site showing old content)
```
WordPress Admin → Plugins → your caching plugin → Purge All Cache
```
If that doesn't work: SiteGround → Site Tools → Speed → Caching → Flush All

#### Reset WordPress admin password via database
1. Log into phpMyAdmin (from hosting panel)
2. Find `wp_users` table
3. Click your user row → Edit
4. In `user_pass`, select MD5 from the dropdown
5. Type your new password → Go
6. Log in with new password → WordPress will re-encrypt it

#### Disable all plugins via FTP (emergency)
```bash
# Rename the plugins folder
mv wp-content/plugins wp-content/plugins-off

# Site loads now? Rename back and activate one by one
mv wp-content/plugins-off wp-content/plugins
```

#### Increase PHP memory limit
Add to `wp-config.php` (before "That's all, stop editing"):
```php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');
```

#### Force HTTPS
Add to `.htaccess` at the top:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

### Email

#### SPF Record (prevents spam flagging)
```
v=spf1 +a +mx +include:_spf.google.com ~all
```
*Type: TXT | Name: @ or your domain | TTL: 3600*

#### DMARC Record (required by Gmail/Yahoo since 2024)
```
v=DMARC1; p=none; rua=mailto:alerts@cc3po.com
```
*Type: TXT | Name: _dmarc | TTL: 3600*

---

### Server

#### Check if a port is open
```bash
curl -v telnet://yourdomain.com:443
# Or use nc:
nc -zv yourdomain.com 443
```

#### Quick disk usage check
```bash
# Find what's eating space
du -sh /* | sort -rh | head -10

# Check specific directory
du -sh /var/log/* | sort -rh | head -10
```

#### Restart a stuck service
```bash
# Nginx
sudo systemctl restart nginx

# PHP-FPM
sudo systemctl restart php8.3-fpm

# MySQL
sudo systemctl restart mysql
```

---

### SSL

#### Check SSL certificate
```bash
openssl s_client -connect yourdomain.com:443 -servername yourdomain.com </dev/null 2>/dev/null | openssl x509 -noout -dates -subject
```

#### Renew Let's Encrypt
```bash
sudo certbot renew
sudo systemctl reload nginx
```

---

### Monitoring

#### Quick uptime check
```bash
curl -sI https://yourdomain.com | head -1
# Should return: HTTP/2 200
```

#### Check cron jobs
```bash
crontab -l
# Or for a specific user:
sudo crontab -u username -l
```

---

> **Need more help?** These fixes cover 80% of what we see. For anything else, [contact us](https://offers.cc3po.com/get-started/) — we're here 24/7.

---

**Need a bigger-picture explanation?** Check our [Common Issues](/troubleshooting/common-issues) page for detailed walkthroughs of each problem.