# Rogue Signal Main Website (`rogue-main-website`)

Official landing page and Web3 portal for the **Rogue Signal (ROGUE)** network.

Rogue Signal synthesizes the Turing-complete smart contract capability of Ethereum Classic (via Core-Geth) with the ASIC-resistant CPU Proof-of-Work mining power of Monero (RandomX `rx/0`).

---

## 🚀 Key Specifications Displayed

* **Network Name**: Rogue Signal
* **Ticker**: `ROGUE`
* **Chain ID**: `800055` (`0xc3537`)
* **Mining Algorithm**: RandomX (`rx/0` profile, 2MB L3 scratchpad per thread, full-node solo mining)
* **Target Block Time**: 30 seconds (LWMA-1 difficulty adjustment, $N=60$, $\pm 33\%$ clamp)
* **Block Reward**: 25 ROGUE (Halving every 2,000,000 blocks / ~1.90 years)
* **Reward Split**: 95% Miner (23.75 ROGUE) / 5% Protocol Treasury (1.25 ROGUE) + 100% tx fees to miner
* **Max Supply**: 100,000,000 ROGUE (Exact hard cap across 32 eras, zero tail emission)
* **Anti-51% Finality**: `MaxReorgDepth = 90` blocks (~45m) + `ECBP-1100 (MESS)` active from Block 0
* **Time Rules**: Strict MTP-11 (Past Median Time) + 15s max future drift + 64B max ExtraData + EmptyUncleHash

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
