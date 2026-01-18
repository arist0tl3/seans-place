---
title: "PWAs Are Underrated"
description: "The case for progressive web apps as the default choice for indie builders and side projects."
date: 2025-01-20
draft: false
---

Every few months someone asks what stack I used for my side projects. When I say they're PWAs, I get a pause. Then: "Oh, so just a website?"

No. Well, yes. But also no.

A PWA is a website that behaves like an app. It installs on your home screen. It works offline. It can send push notifications. It doesn't need the App Store's permission or 30% cut. For a certain class of project—the kind I like to build—it's the right tool almost every time.

---

The default mental model for "I want to build an app" goes like this: if it's serious, build native. If it's not serious, just make a website. PWAs occupy an uncanny middle ground that makes people suspicious. It feels like cheating.

But I've shipped three apps this way. A contact manager. A budgeting tool. An analytics dashboard for restaurants. All PWAs. All installed on my phone's home screen. All working on a plane.

None of them needed to be in the App Store. None of them needed a $99/year developer account. None of them needed separate iOS and Android codebases. I built each one with the web technologies I already knew, and they work everywhere.

---

The case against PWAs usually comes down to two things: capability and distribution.

On capability, the gap has mostly closed. You can access the camera, geolocation, background sync, local storage. You can't do everything—no Bluetooth on iOS, no real background execution—but for most apps, "most" is enough. If you're building Spotify, build native. If you're building a tool for yourself or a few hundred people, you probably don't need Bluetooth.

On distribution, people assume the App Store is how users find apps. But that's only true for consumer apps competing for attention. If you're building something for a specific audience—your coworkers, your customers, your own damn self—you don't need distribution. You need a URL and a "Add to Home Screen" prompt.

---

The real reason PWAs are underrated is simpler: they're boring. There's no new language to learn. No exciting framework drama. No waiting for App Review. You just build a website, add a manifest file and a service worker, and suddenly it's installable.

Boring is underrated too.

---

I'm not saying PWAs are right for everything. If your business model depends on App Store presence, go native. If you need deep OS integration, go native. If your users expect the polish of a top-tier consumer app, maybe go native.

But if you're an indie builder shipping tools for yourself or a niche audience, PWAs let you move fast and stay in control. No gatekeepers. No separate codebases. No waiting for approval.

Just a URL that works like an app.
