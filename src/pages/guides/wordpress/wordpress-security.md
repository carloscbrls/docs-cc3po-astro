---
layout: '../../../layouts/Layout.astro'
title: WordPress Security Best Practices
---

# WordPress Security Best Practices

Essential security measures to protect your WordPress site from common vulnerabilities.

## Why Security Matters

WordPress powers over 40% of websites, making it a prime target for hackers. A compromised site can:

- Damage your reputation
- Expose user data
- Result in Google blacklisting
- Cause significant downtime

## Security Layers

### 1. Hosting Security

Choose a reputable host that provides:

- Server-level firewalls
- Automatic PHP updates
- SSL certificates
- Daily backups
- Malware scanning

> **Recommended**: SiteGround, Kinsta, or WP Engine for managed security.

### 2. Secure Login Practices

**Change Default Admin Username:**

```sql
UPDATE wp_users SET user_login = 'new_admin' WHERE user_login = 'admin';
```

**Implement Strong Passwords:**
- Minimum 12 characters
- Mix uppercase, lowercase, numbers, symbols
- Use a password manager

**Enable Two-Factor Authentication:**

Install a 2FA plugin like:
- Wordfence Login Security
- Two Factor
- WP 2FA

### 3. Limit Login Attempts

Add to `wp-config.php`:

```php
// Limit login attempts
define('WP_LOGIN_ATTEMPTS_LIMIT', 5);
define('WP_LOGIN_LOCKOUT_DURATION', 30 * MINUTE_IN_SECONDS);
```

Or use a plugin like "Limit Login Attempts Reloaded".

### 4. Secure wp-config.php

Move `wp-config.php` one directory above `public_html` (WordPress supports this automatically).

Add these security headers:

```php
// Disable file editing in admin
define('DISALLOW_FILE_EDIT', true);

// Disable file modification
define('DISALLOW_FILE_MODS', true);

// Force SSL for admin
define('FORCE_SSL_ADMIN', true);
```

### 5. Protect Core Files

Add to `.htaccess`:

```apache
# Protect wp-config.php
<files wp-config.php>
  order allow,deny
  deny from all
</files>

# Protect .htaccess
<files ~ "^.*\.([Hh][Tt][Aa])">
  order allow,deny
  deny from all
</files>

# Disable directory browsing
Options -Indexes

# Block suspicious requests
<IfModule mod_rewrite.c>
  RewriteCond %{QUERY_STRING} (<|%3C)script.*?(>|%3E) [NC,OR]
  RewriteCond %{QUERY_STRING} GLOBALS(=|[|\%[0-9A-Z]{0,2}) [OR]
  RewriteCond %{QUERY_STRING} _REQUEST(=|[|\%[0-9A-Z]{0,2})
  RewriteRule .* index.php [F,L]
</IfModule>
```

### 6. Keep Everything Updated

```bash
# WP-CLI update commands
wp core update
wp plugin update --all
wp theme update --all
```

### 7. Regular Backups

Automate daily backups including:

- Database
- wp-content directory
- wp-config.php (store separately)

Recommended backup plugins:

| Plugin | Features |
|--------|----------|
| UpdraftPlus | Cloud storage, scheduling |
| BackupBuddy | Migration included |
| Duplicator | Site migration |

### 8. Security Plugins

Install at least one security plugin:

- **Wordfence**: Firewall + malware scanner
- **Sucuri**: Monitoring + cleanup
- **iThemes Security**: Comprehensive hardening

## Security Checklist

- [ ] SSL certificate installed
- [ ] Admin username changed
- [ ] Strong passwords enforced
- [ ] 2FA enabled
- [ ] Login attempts limited
- [ ] wp-config.php protected
- [ ] File editing disabled
- [ ] Directory browsing disabled
- [ ] Core/plugins/themes updated
- [ ] Backups automated
- [ ] Security plugin active

## Monitoring & Response

Set up alerts for:

- Failed login attempts
- Plugin/core changes
- New admin users
- File modifications

## Related Guides

- [WordPress Setup Guide](/guides/wordpress/wordpress-setup)
- [WordPress Optimization](/guides/wordpress/wordpress-optimization)
- [Security Best Practices](/guides/security)