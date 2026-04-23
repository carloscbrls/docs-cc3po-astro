---
title: Prompt Engineering for Agents
description: How to write effective prompts for AI agents
---

# Prompt Engineering Guide

Learn how to communicate effectively with AI agents to get the best results.

## Principles

### 1. Be Specific
❌ "Write a blog post"
✅ "Write a 1500-word blog post about AI automation for small businesses, focusing on cost savings and efficiency gains. Include 3 case studies and a call-to-action."

### 2. Provide Context
❌ "Create social posts"
✅ "Create 5 LinkedIn posts for a dental practice in Manteca, CA. Focus on family dentistry, preventive care, and community involvement. Tone: professional but friendly."

### 3. Define the Output
❌ "Generate leads"
✅ "Find 20 HVAC businesses in the Central Valley area (Manteca, Modesto, Stockton, Tracy, Lathrop). For each, provide: business name, phone, website, address, and priority score (1-10)."

### 4. Set Constraints
❌ "Write content"
✅ "Write a 300-word email for a heating and cooling company. Maximum 3 paragraphs. Include these keywords: HVAC, furnace repair, energy efficiency. No technical jargon."

## Agent-Specific Prompts

### Taylor (Content)
```
Write a blog post for [BUSINESS] about [TOPIC].
- Length: [WORDS] words
- Audience: [WHO]
- Tone: [TONE]
- Keywords: [KEYWORDS]
- Call-to-action: [CTA]
```

### Sam (Social Media)
```
Create [NUMBER] [PLATFORM] posts for [BUSINESS].
- Focus: [TOPIC]
- Hashtags: [TAGS]
- Tone: [TONE]
- Include: [ELEMENTS]
```

### Alex (Research)
```
Research [TOPIC] for [BUSINESS].
- Geographic area: [LOCATION]
- Industry: [INDUSTRY]
- Output format: [FORMAT]
- Priority: [CRITERIA]
```

### Marco (Revenue)
```
Find leads for [BUSINESS TYPE] in [LOCATION].
- Quantity: [NUMBER]
- Priority criteria: [CRITERIA]
- Output: [FORMAT]
- Exclude: [EXCLUSIONS]
```

### Rico (Compliance)
```
Audit [WEBSITE] for:
- ADA compliance
- Privacy policy
- Terms of service
- Contact information
- Industry-specific regulations: [REGULATIONS]
```

## Advanced Techniques

### Chain Prompting
Break complex tasks into steps:
1. "Research [TOPIC]. Summarize findings."
2. "Based on the summary, create an outline."
3. "Write content following the outline."

### Few-Shot Prompting
Provide examples:
```
Write a product description like these examples:

Example 1: "The XYZ Widget saves you 2 hours per day..."
Example 2: "With ABC Service, you'll never worry about..."

Now write for [PRODUCT]:
```

### Role Prompting
```
You are [ROLE] with [YEARS] years of experience in [FIELD].
Your task is [TASK].
Consider [FACTORS].
Output as [FORMAT].
```

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Too vague | Add specifics |
| No constraints | Set limits |
| Wrong tone | Define tone |
| Missing context | Add background |
| No format | Specify output |

## Best Practices

1. **Start broad, then refine** — Iterate based on output
2. **Save successful prompts** — Build a library
3. **Test variations** — Find what works
4. **Document learnings** — Share with team
5. **Use templates** — Standardize common tasks

## Prompt Templates

### Blog Post
```
Write a blog post for [BUSINESS] about [TOPIC].

LENGTH: [X] words
AUDIENCE: [WHO]
TONE: [TONE]
KEYWORDS: [KEYWORDS]
STRUCTURE:
- Introduction with hook
- [X] main points with examples
- Practical tips
- Conclusion with CTA

Avoid: [WHAT TO AVOID]
Include: [WHAT TO INCLUDE]
```

### Email Sequence
```
Create a [X]-email sequence for [PURPOSE].

BUSINESS: [BUSINESS]
OFFER: [OFFER]
AUDIENCE: [WHO]
GOAL: [GOAL]

Each email should:
- Have a clear subject line
- Be under [X] words
- Include one CTA
- Match tone: [TONE]

Topics:
1. [TOPIC 1]
2. [TOPIC 2]
...
```

### Social Media Calendar
```
Create a [X]-week social media calendar for [BUSINESS].

PLATFORMS: [LIST]
POSTING FREQUENCY: [X] per week
CONTENT MIX:
- [X]% educational
- [X]% promotional
- [X]% engagement
- [X]% behind-the-scenes

HASHTAGS: [TAGS]
TONE: [TONE]
GOAL: [GOAL]
```

---

*Last updated: April 2026*
