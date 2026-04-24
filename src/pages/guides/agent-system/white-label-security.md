---
title: White-Labeling & Security for Client Data
description: How to securely white-label Supabase and protect client data
---

# White-Labeling & Security for Client Data

## Why White-Label Matters

When selling agent systems to clients, you want:
- **Your branding** — Not Supabase's
- **Data isolation** — Each client's data separate
- **Security** — Client can't access other clients
- **Control** — You own the infrastructure

---

## Supabase White-Labeling Options

### Option 1: Supabase for Platforms (Managed)

| Feature | Details |
|---------|---------|
| **Custom domains** | Use your own domain for APIs |
| **Custom UI** | White-label Auth and dashboard |
| **Multi-tenant** | Per-client projects with isolation |
| **Status** | Private alpha — check availability |

**Pros:**
- No infrastructure management
- Automatic updates
- Built-in security

**Cons:**
- Still Supabase infrastructure
- May have Supabase references
- Limited control

**Cost:** Enterprise pricing

---

### Option 2: Self-Hosted Supabase (Full Control)

| Feature | Details |
|---------|---------|
| **Full control** | Host on your servers |
| **Complete white-label** | No Supabase branding |
| **Your domain** | api.yourcompany.com |
| **Custom UI** | Build your own dashboard |

**Pros:**
- Complete white-label
- Full data ownership
- No vendor lock-in
- No usage limits

**Cons:**
- You manage infrastructure
- You handle updates
- You handle security

**Cost:** Server costs ($45-100/mo) + your time

---

### Option 3: API-Only Mode (Hybrid)

| Feature | Details |
|---------|---------|
| **Use Supabase backend** | Database, auth, realtime |
| **Your frontend** | No Supabase UI visible to clients |
| **Proxy through your domain** | api.yourcompany.com → Supabase |

**Pros:**
- Less management
- Your branding on frontend
- Supabase reliability

**Cons:**
- Still dependent on Supabase
- Data on their servers

**Cost:** Supabase pricing + your frontend

---

## Alternative: Appwrite (Better White-Label)

| Feature | Appwrite | Supabase |
|---------|----------|----------|
| **Self-hosted** | ✅ Easy | ✅ Docker |
| **White-label** | ✅ Built-in | ⚠️ Requires work |
| **Multi-tenant** | ✅ Yes | ✅ Yes |
| **Dashboard** | ✅ Your branding | ⚠️ Supabase branding |
| **Learning curve** | Medium | Low |

**Recommendation:** If white-labeling is critical, consider Appwrite.

---

## Security Best Practices for Client Data

### 1. Row Level Security (RLS)

```sql
-- Enable RLS on all tables
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;

-- Create policy for client isolation
CREATE POLICY "client_isolation" ON businesses
  USING (client_id = current_client_id());
```

### 2. Separate Projects per Client

| Client | Project | Database |
|--------|---------|----------|
| Client A | proj-client-a | db-client-a |
| Client B | proj-client-b | db-client-b |
| Client C | proj-client-c | db-client-c |

**Why:** Complete isolation, no cross-client access

### 3. IP Restrictions

```bash
# Only allow connections from your servers
supabase projects api set --ip-whitelist "1.2.3.4,5.6.7.8"
```

### 4. SSL Enforcement

- Force HTTPS on all connections
- Use SSL certificates for API calls
- Never transmit data over HTTP

### 5. API Key Management

| Key Type | Scope | Storage |
|----------|-------|---------|
| **anon key** | Public | Safe to expose |
| **service_role** | Admin | Server-side only |
| **client keys** | Per-client | Store securely |

---

## Recommended Architecture

```
Client App
    ↓
Your API Gateway (api.yourcompany.com)
    ↓
Your Backend
    ↓
Supabase/Appwrite
```

**Why:**
- Client never sees Supabase
- You control all access
- Add your branding
- Add your security layer

---

## Cost Comparison

| Option | Monthly Cost | White-Label | Effort |
|--------|--------------|--------------|--------|
| **Supabase Cloud** | $0-25 | ❌ No | Low |
| **Supabase Self-Hosted** | $45-100 | ✅ Yes | Medium |
| **Appwrite Self-Hosted** | $45-100 | ✅ Yes | Medium |
| **Your API + Supabase** | $25-50 | ✅ Yes | Medium |
| **Your API + Appwrite** | $45-100 | ✅ Yes | Medium |

---

## Recommendation

**For Client Work:**

1. **Start with Supabase Cloud** — Get it working
2. **Add your API layer** — White-label the frontend
3. **Migrate to self-hosted** — When you need full control

**For White-Label Clients:**

1. **Use Appwrite** — Better white-label support
2. **Or self-host Supabase** — Complete control
3. **Always add your API gateway** — Extra security layer

---

## Implementation Steps

### Step 1: Create Client Database

```sql
-- Create separate schema per client
CREATE SCHEMA client_a;
CREATE SCHEMA client_b;

-- Or separate project per client
-- Project: client-a-prod
-- Project: client-b-prod
```

### Step 2: Add Your API Layer

```javascript
// Your API gateway
app.get('/api/businesses', async (req, res) => {
  const client_id = req.headers['x-client-id'];
  
  // Forward to Supabase with client isolation
  const { data } = await supabase
    .from('businesses')
    .select('*')
    .eq('client_id', client_id);
    
  res.json(data);
});
```

### Step 3: Add Your Branding

- Custom domain (api.yourcompany.com)
- Custom dashboard (yourcompany.com/dashboard)
- Your logo and colors
- Your terms of service

---

[← Back to Agent System](/guides/agent-system/) | [GitHub Integration →](/guides/agent-system/github-integration)