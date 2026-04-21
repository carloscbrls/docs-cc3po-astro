---
layout: '../../../layouts/Layout.astro'
title: WordPress Performance Optimization
---

# WordPress Performance Optimization

Speed up your WordPress site with these proven optimization techniques.

## Why Speed Matters

- **SEO Impact**: Google uses Core Web Vitals as ranking factors
- **User Experience**: 53% of users abandon sites that take over 3 seconds
- **Conversion**: Every 1-second delay reduces conversions by 7%

## Performance Audit

Start by measuring current performance:

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## Optimization Strategies

### 1. Hosting Performance

Choose performance-optimized hosting:

| Type | Speed | Cost |
|------|-------|------|
| Shared | ⭐⭐ | $ |
| VPS | ⭐⭐⭐ | $$ |
| Managed WP | ⭐⭐⭐⭐ | $$$ |
| Cloud | ⭐⭐⭐⭐⭐ | $$$$ |

> **Recommendation**: Kinsta or SiteGround for balanced performance/cost.

### 2. Caching Implementation

**Object Caching with Redis:**

```php
// wp-config.php
define('WP_REDIS_HOST', '127.0.0.1');
define('WP_REDIS_DATABASE', 0);
```

**Page Caching Rules:**

```apache
# .htaccess for browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

**Recommended Cache Plugins:**

- WP Rocket (premium)
- W3 Total Cache (free)
- LiteSpeed Cache (if using LiteSpeed server)

### 3. Image Optimization

**Automatic Compression:**

Install Smush or ShortPixel for automatic optimization on upload.

**Lazy Loading (WordPress 5.5+):**

```php
// Add to theme functions.php
add_filter('wp_lazy_loading_enabled', '__return_true');
```

**WebP Conversion:**

```bash
# Convert images via WP-CLI
wp media regenerate --yes
```

### 4. Database Optimization

**Clean up database tables:**

```sql
-- Remove post revisions
DELETE FROM wp_posts WHERE post_type = 'revision';

-- Remove spam comments
DELETE FROM wp_comments WHERE comment_approved = 'spam';

-- Remove transient data
DELETE FROM wp_options WHERE option_name LIKE '_transient_%';
```

Or use WP-CLI:

```bash
wp db optimize
wp cache flush
```

### 5. PHP Optimization

**Use PHP 8.2+** for significant performance gains.

**Increase memory limit:**

```php
// wp-config.php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');
```

**OPcache configuration** (php.ini):

```ini
opcache.enable=1
opcache.memory_consumption=256
opcache.interned_strings_buffer=16
opcache.max_accelerated_files=10000
```

### 6. Disable Unnecessary Features

```php
// Disable embeds
define('WP_EMBED_POWERED_BY', false);

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// Remove query strings from static resources
function remove_query_strings($src) {
  $parts = explode('?', $src);
  return $parts[0];
}
add_filter('script_loader_src', 'remove_query_strings');
add_filter('style_loader_src', 'remove_query_strings');
```

### 7. Content Delivery Network (CDN)

Offload static assets to a CDN:

- **Cloudflare**: Free tier available
- **KeyCDN**: Pay-as-you-go
- **BunnyCDN**: Low-cost option

### 8. Minimize HTTP Requests

**Combine CSS/JS files:**

```php
// Dequeue unnecessary styles
wp_dequeue_style('wp-block-library');
wp_dequeue_style('wp-block-library-theme');
```

**Use critical CSS:**

Extract above-the-fold CSS and inline it in the head.

## Performance Checklist

- [ ] PHP 8.2+ running
- [ ] Page caching enabled
- [ ] Object caching (Redis/Memcached)
- [ ] Images optimized + lazy loaded
- [ ] Database cleaned
- [ ] CDN configured
- [ ] GZIP compression enabled
- [ ] CSS/JS minified
- [ ] Unused plugins removed
- [ ] Theme optimized

## Benchmark Goals

| Metric | Target |
|--------|--------|
| Largest Contentful Paint | < 2.5s |
| First Input Delay | < 100ms |
| Cumulative Layout Shift | < 0.1 |
| Time to First Byte | < 200ms |
| Total Page Size | < 1MB |

## Monitoring

Set up ongoing performance monitoring:

- New Relic (application monitoring)
- Query Monitor (WordPress plugin)
- Uptime Robot (availability)

## Related Guides

- [WordPress Setup Guide](/guides/wordpress/wordpress-setup)
- [WordPress Security](/guides/wordpress/wordpress-security)