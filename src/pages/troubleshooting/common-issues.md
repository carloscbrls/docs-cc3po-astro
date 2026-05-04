---
layout: '../../layouts/Layout.astro'
title: 'Common Issues'
description: 'Frequent problems our clients run into and how to resolve them — written in plain language.'
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "My website is slow — what should I do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Run a free speed test at PageSpeed Insights, compress your images, enable caching in your hosting panel, remove unused plugins. If still slow, contact us for a free audit."
      }
    },
    {
      "@type": "Question",
      "name": "My site shows a white screen or went down — what should I do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check if it's just you or everyone. If everyone: rename your plugins folder to plugins-old via FTP to disable all plugins. If the site comes back, activate plugins one by one to find the broken one. Contact us if needed."
      }
    },
    {
      "@type": "Question",
      "name": "I can't log into WordPress — how do I get back in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Try Lost your password on the login page and check your email. If that doesn't work, reset via database or FTP, or contact us for help."
      }
    },
    {
      "@type": "Question",
      "name": "Emails from my site go to spam — how do I fix this?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add SPF, DKIM, and DMARC DNS records to prove your emails are legitimate. Test at mail-tester.com to check your score. Contact us if you need help configuring these records."
      }
    },
    {
      "@type": "Question",
      "name": "My site got hacked — what do I do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Change all passwords immediately (WordPress admin, hosting, FTP, database). Install Wordfence and run a full scan. Delete unknown admin users. Update WordPress, theme, and all plugins. Contact us for emergency cleanup if needed."
      }
    },
    {
      "@type": "Question",
      "name": "I see a Not Secure warning on my site — how do I fix it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Install a free SSL certificate through your hosting panel (most hosts offer Let's Encrypt). Once installed, redirect all HTTP traffic to HTTPS. Contact us if you need help."
      }
    }
  ]
}
</script>

## Common Issues

Real problems we see often, explained in plain language. No tech jargon — just what's wrong, why it happens, and exactly what to do.

---

### Website Issues

#### "My website is slow"
**What's happening:** Your site takes more than 3 seconds to load. Visitors leave before they see anything.

**Why it happens:** Large images, no caching, too many plugins, or cheap hosting.

**What to do:**
1. Run a free speed test at [PageSpeed Insights](https://pagespeed.web.dev/)
2. Compress your images (use TinyPNG or install Smush on WordPress)
3. Enable caching in your hosting panel
4. Remove plugins you're not using
5. If still slow → [contact us](https://offers.cc3po.com/get-started/) and we'll audit it for free

#### "My site went down / shows a white screen"
**What's happening:** Your website shows a blank white page or an error message.

**Why it happens:** Usually a PHP error, a broken plugin, or the server ran out of memory.

**What to do:**
1. Check if it's just you — visit [downforeveryoneorjustme.com](https://downforeveryoneorjustme.com)
2. If it's everyone: rename your `plugins` folder to `plugins-old` via FTP/SSH (this disables all plugins)
3. If the site comes back, rename it back to `plugins` and activate them one by one to find the broken one
4. If that doesn't work → [contact us](https://offers.cc3po.com/get-started/) immediately

#### "I can't log into WordPress"
**What's happening:** Your admin login doesn't work — wrong password, locked out, or the page won't load.

**What to do:**
1. Try "Lost your password?" on the login page
2. Check your email for the reset link (check spam folder too)
3. If that doesn't work, reset via database or FTP — [contact us](https://offers.cc3po.com/get-started/) and we'll get you back in

#### "Images aren't loading on my site"
**What's happening:** You see broken image icons or empty spaces where pictures should be.

**Why it happens:** Wrong file paths, hotlinked images that went offline, or permissions issue.

**What to do:**
1. Check if the image URL starts with `https://` (not `http://`) — mixed content gets blocked
2. Re-upload the image through WordPress media library
3. If it's only on certain pages, check that the image path is correct in the editor

---

### Email Issues

#### "Emails from my site go to spam"
**What's happening:** Contact form emails, notifications, or business emails land in spam.

**Why it happens:** Missing DNS records (SPF, DKIM, DMARC) that prove your emails are legitimate.

**What to do:**
1. Check your DNS settings in your hosting panel
2. Add these DNS records (your host can help, or [contact us](https://offers.cc3po.com/get-started/)):
   - **SPF record** — tells email providers which servers can send from your domain
   - **DKIM record** — adds a digital signature to your emails
   - **DMARC record** — tells providers what to do if SPF/DKIM fail
3. Test at [mail-tester.com](https://www.mail-tester.com/) to see your score

#### "I'm not receiving form submissions"
**What's happening:** People fill out your contact form but you never get the email.

**Why it happens:** Email routing is broken, spam filter caught it, or the form plugin isn't configured.

**What to do:**
1. Check your spam/junk folder
2. Test the form yourself — submit it and see if you get it
3. Check form settings for the correct "send to" email
4. If using WordPress, check that wp-mail is configured properly

---

### Security Issues

#### "My site got hacked"
**What's happening:** Your site shows random links, spam pages, redirects to weird sites, or your admin has users you didn't create.

**What to do:**
1. **Don't panic** — most hacks are fixable
2. Change all passwords immediately (WordPress admin, hosting, FTP, database)
3. Install Wordfence and run a full scan
4. Delete any admin users you didn't create
5. Update WordPress core, theme, and all plugins
6. If it's beyond what you can handle → [contact us](https://offers.cc3po.com/get-started/) for emergency cleanup

#### "SSL certificate error / Not Secure warning"
**What's happening:** Visitors see "Not Secure" or a red warning in their browser.

**Why it happens:** Your SSL certificate expired or was never installed.

**What to do:**
1. Most hosts offer free Let's Encrypt SSL — enable it in your hosting panel
2. Force HTTPS redirect in WordPress settings
3. Run a search & replace to change all `http://` links to `https://`

---

### AI Assistant Issues

#### "The AI assistant stopped responding"
**What's happening:** Your CC3PO AI bot on Telegram or your website isn't replying.

**Why it happens:** Server restart, API connection lost, or webhook expired.

**What to do:**
1. Check if your internet is working
2. Try sending `/start` to the bot
3. If it's still down, message us — we monitor 24/7 and usually catch it first

#### "AI is giving wrong answers"
**What's happening:** The bot responds with outdated or incorrect information.

**Why it happens:** The knowledge base needs updating, or the bot is answering outside its trained scope.

**What to do:**
1. Tell us what it got wrong — send a screenshot or copy the response
2. We'll update the knowledge base immediately
3. Most fixes take under an hour

---

### Hosting Issues

#### "Out of disk space"
**What's happening:** Your site can't upload files, write to database, or shows disk space errors.

**Why it happens:** Log files, backups, or media files filled up your storage.

**What to do:**
1. Check your hosting panel for disk usage breakdown
2. Delete old backups you don't need
3. Empty the WordPress trash (media and posts)
4. If you're on CC3PO hosting → [contact us](https://offers.cc3po.com/get-started/) and we'll handle it

#### "Domain not working / DNS issues"
**What's happening:** Your domain doesn't load your website, or shows a parking page.

**Why it happens:** DNS records pointing to the wrong server, domain expired, or propagation delay.

**What to do:**
1. Check if your domain registration is current (expired?)
2. Verify DNS records point to the correct IP
3. DNS changes can take up to 48 hours to propagate
4. Use [whatsmydns.net](https://whatsmydns.net/) to check propagation worldwide

---

> **Don't see your issue here?** [Contact us](https://offers.cc3po.com/get-started/) — we've seen it all and we're happy to help. Most issues get resolved same day.

---

**Need copy-paste fixes?** Check our [Quick Fixes](/troubleshooting/quick-fixes) page for terminal commands, DNS records, and other fast solutions.