# CYBONE

**Personal Digital Counterpart**

CYBONE brings daily notifications, conversations, memory, health and meal records into a personal context that is easier to revisit.

[Live demo](https://wesley138cn.github.io/CYBONE/) · [中文](README.md) · [Design notes](docs/DESIGN.md) · [Scope](docs/CAPABILITIES.md) · [Attribution](NOTICE.md)

## Public design edition

This repository contains selected interaction designs, reusable UI styles and an executable five-screen prototype: TODAY, WITH, Memory, Health and Dining. It is not the complete product source or an installable mobile application.

Use Node.js 22 or later. No third-party runtime dependencies or installation step are required.

```sh
git clone https://github.com/wesley138cn/CYBONE.git
cd CYBONE
npm run check
npm start
```

Visit <http://127.0.0.1:4175>. The check command runs syntax checks and tests, then builds static assets into `dist/`. Deploy that directory to a static host, or build separately with `npm run build`.

## Experience

- **Notifications:** filter fictional records by iPhone or Android and view their original text. The product uses Android notification access and authorized Bluetooth ANCS notification sharing from a paired iPhone. Records are stored on the Android device running CYBONE. Available notifications depend on permissions and connectivity; notifications missed during disconnection are not guaranteed to be recovered. The prototype does not capture notifications.
- **WITH:** explore a conversation and explicitly managed memory. Add, edit or delete sample preferences, then ask about memory. Replies are deterministic demonstrations, with no model calls or automatic memory extraction.
- **Health:** view fictional step counts, a seven-day trend, sleep and resting heart rate.
- **Dining:** enter a meal, category and calorie value, review totals and delete entries. Optional local photo previews are not uploaded or saved. There is no image recognition or automatic calorie estimation in the prototype.

## Data

Text records persist in unencrypted browser localStorage. Do not enter sensitive information. The About dialog provides export and reset; unavailable browser storage falls back to temporary in-memory state. Photos remain transient previews. There is no telemetry, model call or data upload. External documentation links navigate to their respective websites.

Local storage in the product does not imply offline AI processing: configured external model services may receive relevant inputs. Health and calorie displays are for personal recordkeeping, not medical diagnosis.

## Upstream and license

The CYBONE product uses [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) for its Agent runtime and [DeepCode (dsh-mobile-apk)](https://github.com/kelai141/dsh-mobile-apk) and related components for its Android foundation. This independent public prototype does not bundle those runtimes or sources. CYBONE is not affiliated with or endorsed by those upstream projects.

Original code and documentation in this repository are MIT licensed. See [NOTICE.md](NOTICE.md), [LICENSE](LICENSE), [BRAND.md](BRAND.md) and [CONTRIBUTING.md](CONTRIBUTING.md).
