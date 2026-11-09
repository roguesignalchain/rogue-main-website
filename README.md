# Rogue Signal Main Website (`rogue-main-website`)

Official landing page and Web3 portal for the **Rogue Signal (ROGUE)** network.

Rogue Signal synthesizes the Turing-complete smart contract capability of Ethereum Classic (via Core-Geth) with the ASIC-resistant CPU Proof-of-Work mining power of Monero (RandomX `rx/0`).

---

## 🚀 Key Specifications Displayed

* **Network Name**: Rogue Signal
* **Ticker**: `ROGUE`
* **Chain ID**: `800055` (`0xc3517`)
* **Mining Algorithm**: RandomX (`rx/0` profile, 2MB L3 scratchpad per thread)
* **Target Block Time**: 10 seconds (LWMA-1 difficulty adjustment, $N=60$)
* **Block Reward**: 8 ROGUE (Halving every 6,300,000 blocks / ~2 years)
* **Reward Split**: 95% Miner (7.6 ROGUE) / 5% Protocol Treasury (0.4 ROGUE)
* **Max Supply**: 100,000,000 ROGUE (Hard cap, zero tail emission)
* **Time Rules**: Strict MTP-11 (Past Median Time) + 15s max future drift

---

## 🛠️ Tech Stack

* **Framework**: Next.js (Pages Router, Static Export ready)
* **Styling**: TailwindCSS with custom Cyber-Industrial Minimalist theme
* **Icons & Animation**: Lucide React, Framer Motion
* **Web3 Integration**: RainbowKit + Wagmi + Viem
* **Internationalization**: Lightweight typed TypeScript dictionary with instant client-side switching (English / Spanish)
* **Deployment**: Universally compatible static export (`out/`) for shared hosting (Apache, Nginx, cPanel) or modern CDNs (Vercel, Cloudflare Pages)

---

## 💻 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build static production bundle (exports to ./out)
npm run build
```

---

## 📜 License

Released under open-source licenses. See repository root for details.
