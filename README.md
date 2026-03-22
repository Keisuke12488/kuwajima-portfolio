# Kuwajima Portfolio

AI × SNS の二刀流ポートフォリオサイト。

## Tech Stack

- **Next.js 15** — App Router + Static Export
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — スクロールアニメーション
- **Lucide React** — アイコン
- **Vercel** — デプロイ先

## セットアップ

```bash
npm install
npm run dev    # http://localhost:3000 で確認
npm run build  # 静的ビルド（out/ に出力）
```

## Vercelデプロイ

1. GitHubにリポジトリを作成してpush
2. [vercel.com](https://vercel.com) でリポジトリをインポート
3. 設定はデフォルトでOK（自動検知される）
4. Deployをクリック

## カスタマイズ箇所

### LINE URL
`src/app/contact/page.tsx` の `href="#"` を実際のLINE友だち追加URLに変更：
```tsx
<a href="https://line.me/R/ti/p/YOUR_LINE_ID" ...>
```

### メールアドレス
`src/app/contact/page.tsx` の `mailto:contact@example.com` を変更。

### OGP / メタデータ
`src/app/layout.tsx` の `metadata` を必要に応じて編集。

### カラーテーマ
`src/app/globals.css` の `@theme` ブロック内でカスタムカラーを変更可能。

## ページ構成

| ページ | パス | 内容 |
|--------|------|------|
| Home | `/` | ヒーロー + AI/SNS紹介 + Welzaティーザー + CTA |
| About | `/about` | プロフィール + 強み + 技術スタック + 仕事の進め方 |
| Portfolio | `/portfolio` | プロジェクト一覧（AI / SNS / Product） |
| Contact | `/contact` | LINE誘導 + メール代替 |

## 拡張予定（B → A変更時）

- Blog（MDX）
- Timeline（経歴年表）
- 個別プロジェクト詳細ページ
- OGP画像
