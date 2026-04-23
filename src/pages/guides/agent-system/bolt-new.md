---
title: Bolt.new Documentation
description: AI-powered website builder for rapid development
---

# Bolt.new Documentation for CC3PO Agent System

**Purpose:** Enable CC3PO agents to help clients build websites faster using Bolt.new AI-powered development platform.

---

## What is Bolt.new?

Bolt.new is an **AI-powered full-stack web development platform** created by StackBlitz. It allows users to build, run, edit, and deploy complete web applications directly in the browser—no local setup required.

### Key Differentiator
Unlike other AI tools (Claude, v0) that only generate code, Bolt.new gives AI agents **complete control over the entire development environment**:
- File system management
- Node.js server execution
- Package manager (npm)
- Terminal commands
- Browser console
- Deployment pipeline

This enables AI to handle the **entire app lifecycle** from creation to production deployment.

---

## How Bolt.new Works

### Core Technology: WebContainers
Bolt.new runs on StackBlitz's **WebContainers** technology—a full Node.js environment that runs entirely in the browser. This means:
- No local installation needed
- Real npm packages can be installed
- Backend servers run in-browser
- Full filesystem operations possible

### Workflow
1. **Prompt → Plan → Build → Deploy**: Users describe what they want in natural language
2. **AI scaffolds the project**: Creates file structure, installs dependencies, sets up configuration
3. **Iterate through chat**: Make changes, add features, fix bugs through conversation
4. **Deploy to production**: One-click deployment to bolt.host or custom domains

---

## Capabilities and Features

### Full-Stack Development
| Feature | Capability |
|---------|------------|
| **Frontend** | React, Vue, Next.js, Astro, Vite, any JS framework |
| **Backend** | Node.js servers, API routes, serverless functions |
| **Styling** | Tailwind CSS, styled-components, CSS modules |
| **Database** | Built-in Bolt Cloud database or external (Supabase, etc.) |
| **Auth** | User authentication built-in |
| **Hosting** | Free bolt.host subdomain or custom domain |
| **Integrations** | Stripe (payments), Figma (design import), GitHub (version control) |

### Design System Support
Bolt.new can build from **real design systems**, not generic components:
- Material UI
- Chakra UI
- Shadcn UI
- Custom company design systems (Teams plan)
- Porsche Design System
- Washington Post Design System

### Built-in Infrastructure (Bolt Cloud)
- **Unlimited databases** (SQLite-based)
- **User management & authentication**
- **File storage**
- **Custom domains**
- **SSL certificates**
- **SEO optimization**
- **Analytics dashboard**
- **Server functions**

### AI Features
- **Multiple AI models**: Claude Opus, Claude Sonnet, Claude Standard
- **Enhance prompt feature**: AI refines your prompts before submission
- **Plan mode**: Discuss architecture without generating code
- **Discussion mode**: Troubleshoot without token costs
- **Automatic error fixing**: AI attempts to resolve runtime errors
- **Version history**: Rollback to any previous state

---

## Prompts and Commands

### Prompt Best Practices

#### 1. Start with Architecture
```
Build a SaaS dashboard using Next.js 14, Tailwind CSS, and Shadcn UI.
Include authentication, a sidebar navigation, and data tables with sorting/filtering.
```

#### 2. Be Specific About Stack
```
Create an e-commerce site with Astro framework, React components for interactivity,
and Stripe integration for payments. Use Tailwind for styling.
```

#### 3. Add Features Incrementally
```
First prompt: Create a basic blog layout with header, footer, and main content area.
Second prompt: Add a newsletter signup form to the footer.
Third prompt: Create individual blog post pages with dynamic routing.
```

#### 4. Explicit Scope Control
```
Change only the Hero component colors. Do not modify any other files.
Update the background gradient to use blue-purple instead of green-teal.
```

### Special Commands

| Command | Purpose |
|---------|---------|
| `/clear` | Clear context (reset AI memory) |
| Enhance prompt | AI refines your prompt before submission |

### Scope Control Actions
- **Target file**: Right-click file → "Target file" to focus AI on specific file
- **Lock file/directory**: Right-click → "Lock" to exclude from AI context
- **Ask Bolt**: Highlight code → "Ask Bolt" to discuss specific section

---

## Best Practices

### Token Efficiency
**Tokens = cost and speed.** Optimize usage:

#### Do:
✅ Use buttons instead of prompts (Publish, Version History)
✅ Use Discussion mode for planning (no code changes = fewer tokens)
✅ Start simple, add complexity incrementally
✅ Clear context regularly (when AI doesn't need recent history)
✅ Target specific files/sections
✅ Use Plan mode to architect without generating code

#### Don't:
❌ Make multiple requests in one prompt (break them up)
❌ Repeat "Attempt fix" automatically (tokens used each attempt)
❌ Leave unused files in project (cleanup with `npx knip`)
❌ Keep connectors enabled when not needed
❌ Work on advanced features before basics are solid

### Model Selection

| Model | Best For | Token Cost |
|-------|----------|------------|
| **Standard** | Quick experiments, UI sketches, early prototypes | Lowest |
| **Sonnet** | Most development, feature builds, refactoring | Medium |
| **Opus** | Production apps, complex logic, data modeling | Highest |

### Project Planning
Before starting, define:
1. **App type**: Website, web app, or mobile app (Expo)
2. **Target users**: Who will use it
3. **Key features**: Prioritized list
4. **User flow**: Navigation path
5. **Design system**: Material UI? Shadcn? Custom?

Example plan for a CRM:
- Lead capture forms
- Contact profiles with details
- Search and filter functionality
- Dashboard with analytics
- Export capabilities

### Development Workflow
1. **Foundation first**: Homepage, navigation, basic layout
2. **Add features one-by-one**: Test after each addition
3. **Incremental complexity**: Core → Forms → Data → Search → Analytics
4. **Version checkpoints**: Let AI create stable checkpoints

---

## Integration Options

### Design & Prototyping
| Integration | Use Case |
|-------------|----------|
| **Figma** | Import designs directly, convert to code |
| **Google Stitch** | Import Stitch designs, build functional app |
| **Lovable** | Import Lovable projects to Bolt |

### Version Control
| Integration | Use Case |
|-------------|----------|
| **GitHub** | Automatic commits, version history, team collaboration |

### Backend & Infrastructure
| Integration | Use Case |
|-------------|----------|
| **Bolt Cloud Database** | Built-in SQLite database (no setup) |
| **Supabase** | Alternative database with auth & edge functions |
| **Bolt Cloud Hosting** | Deploy to bolt.host or custom domains |
| **Netlify** | Alternative deployment platform |

### Payments
| Integration | Use Case |
|-------------|----------|
| **Stripe** | Handle payments, subscriptions, checkout |

### Mobile
| Integration | Use Case |
|-------------|----------|
| **Expo** | Build mobile apps, publish to app stores |

### Authentication
| Integration | Use Case |
|-------------|----------|
| **Google SSO** | User authentication via Google |
| **Built-in auth** | Bolt Cloud user management |

---

## Pricing (2026)

### Free Plan
- **Cost**: $0
- **Tokens**: 300K daily limit, 1M monthly limit
- **Projects**: Public and private
- **Hosting**: bolt.host subdomain
- **Branding**: Bolt branding on sites
- **Upload limit**: 10MB
- **Web requests**: Up to 333K

### Pro Plan
- **Cost**: $25/month (billed monthly)
- **Tokens**: 10M monthly (no daily limit)
- **Features**:
  - No Bolt branding
  - Private sharing
  - 100MB upload limit
  - 1M web requests
  - Unused tokens roll over
  - Custom domain support
  - SEO boost
  - Unlimited databases
  - AI image editing

### Teams Plan
- **Cost**: $30/user/month
- **Features**: Everything in Pro, plus:
  - Centralized billing
  - Team workspace
  - Access management
  - Admin controls
  - User provisioning
  - Private NPM registries
  - Design system knowledge (per-package prompts)
  - Team templates

### Enterprise
- **Cost**: Custom pricing
- **Features**: Everything in Teams, plus:
  - SSO (single sign-on)
  - Audit logs
  - Compliance support
  - Dedicated account manager
  - 24/7 priority support
  - Custom workflows
  - SLAs
  - Flexible billing
  - Data governance
  - Enterprise training

---

## How CC3PO Agents Can Use Bolt.new

### Client Workflow Integration

#### For Client Website Projects

**Step 1: Requirements Gathering**
- Agent collects client requirements (style, features, target audience)
- Agent asks about design preferences (minimal, bold, professional, etc.)
- Agent confirms tech stack preferences (React, Next.js, etc.)

**Step 2: Initial Prompt Crafting**
Agent creates detailed initial prompt:
```
Build a professional consulting website for [client type] with:
- Modern, clean design using [design system]
- Homepage with hero section, services overview, testimonials, contact form
- Services page with detailed service descriptions
- About page with team section
- Contact page with form and map
- Mobile-responsive design
- SEO meta tags and structured data
- Fast loading with optimized images

Use [Next.js/React/Vue] with [Tailwind CSS].
Include [Shadcn UI/Material UI/Chakra UI] components.
```

**Step 3: Iterative Development**
- Agent reviews AI output
- Agent prompts for refinements (colors, spacing, content)
- Agent adds features incrementally
- Agent uses Discussion mode to plan without tokens

**Step 4: Deployment**
- Agent deploys to bolt.host for preview
- Agent exports code for client review
- Agent connects custom domain (Pro plan)
- Agent provides client access

**Step 5: Handoff**
- Agent exports project files
- Agent documents tech stack and structure
- Agent provides maintenance instructions
- Agent sets up GitHub for version control

### Automation Opportunities

#### Template Creation
Create reusable templates for common client types:
- **Local business landing page**
- **Portfolio site**
- **E-commerce storefront**
- **SaaS dashboard**
- **Blog/magazine site**
- **Event registration site**

#### Design System Setup
For clients with existing brand guidelines:
1. Add design system to Bolt (Teams plan required)
2. Configure colors, typography, spacing
3. Add component library
4. Use across all client projects

#### Batch Processing
For multiple similar projects:
1. Create master template
2. Duplicate project for each client
3. Customize content and branding
4. Deploy with custom domains

### Client Service Packages

#### Package 1: Landing Page ($500-1500)
- Single-page site
- Hero, services, contact
- Mobile-responsive
- SEO basics
- Deployed to client domain
- **Time**: 2-4 hours with Bolt.new

#### Package 2: Business Website ($1500-5000)
- 5-10 pages
- Contact forms
- About, services, blog
- Custom design system
- SEO optimization
- Analytics setup
- **Time**: 1-2 days with Bolt.new

#### Package 3: Web Application ($5000-20000+)
- Custom functionality
- Database integration
- User authentication
- Payment processing (Stripe)
- Admin dashboard
- **Time**: 3-10 days with Bolt.new

### Integration with CC3PO Stack

#### Bolt.new + WordPress (Hybrid Approach)
1. Use Bolt.new to prototype quickly
2. Export HTML/CSS/JS
3. Integrate into WordPress theme
4. Deploy to SiteGround (CC3PO hosting)

#### Bolt.new + Existing Tools
| CC3PO Tool | Integration |
|------------|-------------|
| **SiteGround** | Export Bolt project, deploy via SSH |
| **JotForm** | Embed JotForm in Bolt projects |
| **Stripe** | Native Bolt integration for payments |
| **GitHub** | Auto-sync Bolt projects to repos |

### Agent Coordination

#### Operator (Primary)
- Coordinates client intake
- Defines project scope
- Reviews Bolt output
- Manages deployment

#### Auditor (Technical Review)
- Reviews generated code quality
- Checks accessibility (WCAG)
- Validates performance
- Security audit for client apps

#### Taylor (Content)
- Provides website copy
- Ensures messaging alignment
- SEO content for pages

#### Sam (Social)
- Integrates social links
- Creates landing pages for campaigns
- Connects Bolt sites to social

---

## Practical Examples

### Example 1: HVAC Service Website

**Prompt:**
```
Build a professional HVAC services website for a local company. Include:
- Homepage with hero image, services overview, service areas map, testimonials
- Services page with detailed HVAC offerings
- About page with company history and certifications
- Contact page with form and Google Maps embed
- Emergency services banner
- Mobile-responsive design
- Local SEO optimization (schema markup for local business)

Use Next.js with Tailwind CSS and Shadcn UI.
Orange and blue color scheme (HVAC industry standard).
```

**Time Estimate:** 2-3 hours to complete, test, and deploy

### Example 2: Restaurant Landing Page

**Prompt:**
```
Create a modern restaurant landing page with:
- Hero section with food photography
- Menu highlights with images
- Online reservation form
- Location and hours
- Instagram feed integration
- Mobile-first responsive design
- OpenTable integration button

Use Astro framework with React islands for interactivity.
Warm, inviting color palette (deep red, cream, gold).
```

**Time Estimate:** 1-2 hours

### Example 3: SaaS Dashboard

**Prompt:**
```
Build a SaaS analytics dashboard with:
- Login/signup authentication
- Sidebar navigation
- Dashboard with charts (recharts)
- User management table
- Settings page
- Billing integration (Stripe)
- Dark mode toggle

Use Next.js 14 App Router, Tailwind CSS, Shadcn UI.
Professional, clean design suitable for B2B SaaS.
```

**Time Estimate:** 4-6 hours

---

## Limitations to Know

### Technical Constraints
- **JavaScript/TypeScript only** (no PHP, Python, Ruby backends)
- **WebContainer limits**: Some packages may not work
- **Token limits**: Free plan has daily/monthly caps
- **File size**: Upload limits (10MB free, 100MB paid)

### Business Constraints
- **Commercial use**: Check ToS for client work licensing
- **Branding**: Free tier shows Bolt branding
- **Private repos**: Only paid plans support private projects
- **Design systems**: Custom design systems require Teams plan

### Best For:
✅ Landing pages
✅ Marketing sites
✅ Web applications (JS/TS)
✅ Prototypes and MVPs
✅ Client demos
✅ SaaS dashboards
✅ E-commerce frontends

### Not Ideal For:
❌ Complex enterprise applications
❌ Heavy backend processing
❌ Non-JavaScript projects
❌ High-traffic production sites (use Bolt for prototype, export for deployment elsewhere)

---

## Getting Started Checklist for CC3PO Agents

### Account Setup
- [ ] Create Bolt.new account (free tier to start)
- [ ] Explore interface with sample prompts
- [ ] Try pre-loaded design systems (Material UI, Shadcn)
- [ ] Build first test project to understand workflow

### Client Project Workflow
- [ ] Gather requirements from client
- [ ] Define tech stack and design system
- [ ] Create detailed initial prompt
- [ ] Review AI output with client
- [ ] Iterate with focused prompts
- [ ] Add features incrementally
- [ ] Test on multiple devices
- [ ] Deploy to preview URL
- [ ] Get client approval
- [ ] Deploy to production (custom domain)
- [ ] Export project files for backup
- [ ] Document project for maintenance

### Optimization Tips
- [ ] Use Plan mode before building
- [ ] Keep prompts specific
- [ ] Add features one at a time
- [ ] Test after each change
- [ ] Use Version history for rollback
- [ ] Clear context when changing topics
- [ ] Target specific files to focus AI

---

## Resources

### Official Links
- **Website**: https://bolt.new
- **Documentation**: https://support.bolt.new
- **GitHub**: https://github.com/stackblitz/bolt.new
- **Discord**: https://discord.com/invite/stackblitz
- **Blog**: https://blog.stackblitz.com

### Support
- **Free plan**: Discord community support
- **Paid plan**: Email support@bolt.new (business hours)
- **Security**: security@bolt.new

### Learning
- **QuickStart**: Build first app in minutes
- **Video tutorials**: Available in Bolt interface
- **Best practices**: Prompting, token efficiency guides

---

## Summary for CC3PO

**Bolt.new enables agents to:**
1. Build client websites 10x faster than traditional development
2. Offer competitive pricing with healthy margins
3. Prototype and iterate rapidly with clients
4. Deploy functional sites without local development
5. Focus on strategy and content while AI handles code

**Recommended approach:**
- Start with Free plan for testing and prototypes
- Upgrade to Pro for client work (no Bolt branding)
- Consider Teams plan for design system integration and team collaboration
- Use as rapid prototyping tool, export code for production deployment elsewhere if needed

**Integration points:**
- Bolt.new for initial build and client approval
- Export code for WordPress integration
- Use with SiteGround hosting for final deployment
- Coordinate with Taylor (content) and Sam (social) for integrated campaigns

---

*Documentation prepared: April 23, 2026*
*Last updated: April 23, 2026*
*Source: Bolt.new official documentation, support center, and GitHub repository*