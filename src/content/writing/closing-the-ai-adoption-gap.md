---
title: "AI Capability Is Ahead of Adoption. Here's How I'd Close the Gap."
date: 2026-10-05
summary: "AI can do more than most organizations are ready to use. Closing that gap means designing dependable workflows, earning employee trust, and measuring the whole job."
tags: [AI, Leadership, Operations]
draft: false
---

An AI assistant can draft a customer response in seconds. Getting a customer experience team to rely on that draft on a busy Monday is a different problem.

Does it have the current order status? Can it distinguish a requested delivery date from a confirmed commitment? Who checks the answer, and who owns the mistake if it is wrong?

That is the gap I care about: the distance between what the technology can do and what people can depend on in the actual work.

The [RSM article that prompted this post](https://lifestyle.cfxmagazine.com/story/781281/rsm-survey-the-middle-market-has-embraced-ai-now-comes-the-hard-part/) argues that middle-market businesses have embraced AI and now face the harder work of execution. Reading it in October 2026, I think the useful question is no longer simply whether we have adopted AI. It is whether we have made it usable, trustworthy, and worth coming back to.

## The numbers need a little unpacking

RSM's [July 2026 Middle Market AI Survey](https://rsmus.com/insights/services/digital-transformation/rsm-middle-market-ai-survey.html) found that 86% of respondents said their organizations had partially or fully integrated AI into operations. Only 36% reported it fully embedded across core processes. And 85% said executive leadership was more enthusiastic about AI than employees were.

An important qualification: the survey's 1,030 participants represented organizations **already using AI**, from pilots through full integration. That 86% is not the adoption rate of every middle-market business. These are also leaders' reports, not an independent audit of performance or a direct survey of employee sentiment.

Even with those limits, the findings describe a recognizable problem. A company can report successful AI investments while individual teams still struggle to fit them into their work.

Data quality was the top deployment inhibitor, cited by 34% of respondents, followed by security and privacy at 30%, and legacy-system integration and talent or skills gaps at 28% each. Those are not problems another impressive demonstration will solve.

## Capability, access, and adoption are different things

I would separate three questions:

- **Capability:** Can the system perform this task under the conditions we need?
- **Access:** Do people have an approved tool and the information they are allowed to use?
- **Adoption:** Can they repeatedly use it to complete the work better, without creating more work somewhere else?

A license answers part of the second question. It does not answer the third.

Nor does a stronger model eliminate the first. Stanford's [2026 AI Index](https://hai.stanford.edu/ai-index/2026-ai-index-report) describes sharply improving capabilities alongside uneven reliability: AI agents achieved roughly 66% task success on OSWorld, a benchmark of computer tasks. That is not a failure rate for your business workflow. It is a reminder that broad capability claims are no substitute for testing your particular task.

If a tool produces a convincing answer but the employee cannot verify it quickly, skepticism is reasonable. I would treat that skepticism as information about the design, not a character flaw in the user.

## What this looks like in real work

One documented example in RSM's July release is tax: 83% of respondents said their tax function used AI tools, and 41% reported applying AI to tax data extraction and validation. That is a specific application, rather than a general promise of transformation. It still leaves a professional responsible for interpreting the data and making the judgment. The survey does not establish how much time those activities saved or how accurate they were.

Here are two practical scenarios from the operational areas I work across. They illustrate how I would design adoption; they are not claims about deployments or measured results at my employer.

### Customer service: help with the answer, not an invented promise

Consider an employee answering, "Where is my order?" The work may involve checking the ERP, warehouse status, carrier tracking, and earlier correspondence before writing a reply.

I would start with an assistant that assembles those approved sources and drafts a response with links back to the records. Missing or conflicting information should be visible. The assistant should not turn an estimated ship date into a delivery promise, and an employee should approve the outbound message.

Training would use an ordinary shipped order, a partial shipment, and an order with stale tracking. The point is to practice recognizing when the draft is useful and when it needs to be rejected.

I would measure time to a correct response, correction rates, and repeat customer contacts. Faster drafting is not a win if the customer has to call again.

### Freight auditing: surface an exception before changing a payment

An invoice-review assistant could compare carrier charges with contracted rates and shipment records, then identify possible discrepancies.

The adoption problem is whether an analyst can understand and verify each flag. I would require the invoice line, relevant contract provision, shipment evidence, and reason for the discrepancy to appear together. A person would decide whether to dispute the charge; the assistant would not alter payments or send disputes on its own.

Before adding AI, I would check whether straightforward matching rules already solve the problem. AI may help interpret messy documents, but it should not replace reliable arithmetic or deterministic controls.

The measures would include false positives, review time, and dollars actually recovered, not just the number of charges flagged. An assistant that creates a larger exception queue may be making the analyst's job worse.

## How I would address the concerns

### "Will this make my job disappear?"

I would not answer with a promise I cannot keep. I would explain what the proposed workflow changes, what decisions remain with people, and what is known or undecided about staffing. Employees should help shape the work before it is imposed on them. Leadership also needs to say what the recovered capacity is for: clearing a backlog, improving service, taking on growth, or something else.

PwC's [2026 AI Jobs Barometer, published June 15](https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html), reports that skills requirements are changing more than twice as fast in the most AI-exposed jobs as in the least exposed. That is a reason to invest in learning. Its findings about exposure, productivity, and hiring are not proof that a particular rollout will preserve every job.

### "What if the answer is wrong?"

I would define what an acceptable answer looks like, test representative cases and exceptions, and make source evidence easy to inspect. Higher-consequence actions need explicit approval. People need permission to reject an answer, a way to report failures, and a working fallback when the system is unavailable or unreliable. Accountability stays with a named process owner.

### "Can I put this information into the tool?"

The answer should not require interpreting a policy document in the middle of a customer call. Provide approved tools, clear rules for permitted data, access limited to the user's role, and a named contact for uncertain cases. Verify retention and data-use settings before sensitive information enters the workflow. Useful guardrails make the approved path easier to follow.

### "When am I supposed to learn this?"

Learning cannot be an extra assignment squeezed into an already full day. I would protect time for practice on the team's actual tasks, with a nearby colleague who can help and a short routine for sharing what worked and what failed. A generic prompt-writing seminar is not enough preparation for resolving a customer exception.

## Start small enough to learn, complete enough to matter

For an initial adoption cycle, I would choose one recurring workflow with a clear owner, usable data, and a manageable downside.

First, observe how the team does it today and establish a baseline: elapsed time, effort, errors, and downstream rework. Then co-design an assisted version with the people doing the work, including approval rules and the fallback.

Run it with a small group on representative cases. Review failures every week, not just the best outputs. Expand only when the whole workflow improves, including the checking and correction work. If it does not, change the design or stop.

I would still track repeat use, but I would pair it with outcomes and conversations. Low use might mean poor training. It might also mean slow access, missing data, unclear permission, or a tool that does not help. High use can coexist with poor results.

The adoption question I would ask is: **Does this help you finish the job, or does it give you another thing to manage?**

Middle-market businesses do not need to match every new capability with an immediate deployment. They do need a disciplined way to turn useful capabilities into dependable work.

For me, closing the gap means connecting the tool to the process, the process to an owner, and the change to a benefit the team can recognize. That is when AI stops being something we demonstrate and starts being something people choose to use.

## Sources

- [RSM: The Middle Market Has Embraced AI. Now Comes the Hard Part.](https://lifestyle.cfxmagazine.com/story/781281/rsm-survey-the-middle-market-has-embraced-ai-now-comes-the-hard-part/) July 21, 2026. Original article, survey methodology, and tax-function findings.
- [RSM Middle Market AI Survey 2026](https://rsmus.com/insights/services/digital-transformation/rsm-middle-market-ai-survey.html) July 21, 2026. Primary survey overview and integration findings.
- [Stanford HAI: 2026 AI Index Report](https://hai.stanford.edu/ai-index/2026-ai-index-report) 2026 edition. Capability and reliability context; some underlying benchmark results concern 2025.
- [PwC: 2026 AI Jobs Barometer](https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html) June 15, 2026. Workforce and skills context; historical trends do not establish the effect of an individual deployment.
