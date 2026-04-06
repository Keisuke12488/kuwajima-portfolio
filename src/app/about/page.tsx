"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  Lightbulb,
  Rocket,
  Users,
  Target,
  Code2,
  Cloud,
  Brain,
  HardDrive,
  ClipboardList,
  Megaphone,
} from "lucide-react";

interface SkillItem {
  label: string;
  bg: string;
  text: string;
}

interface SkillGroup {
  category: string;
  icon: React.ElementType;
  items: SkillItem[];
}

const skills: SkillGroup[] = [
  {
    category: "フロントエンド",
    icon: Code2,
    items: [
      { label: "TypeScript", bg: "bg-[#3178c6]/10", text: "text-[#3178c6]" },
      { label: "React", bg: "bg-[#61dafb]/10", text: "text-[#0ea5e9]" },
      { label: "Next.js", bg: "bg-[#000000]/10", text: "text-[#000000]" },
      { label: "Tailwind CSS", bg: "bg-[#06b6d4]/10", text: "text-[#06b6d4]" },
      { label: "HTML / CSS", bg: "bg-[#e34f26]/10", text: "text-[#e34f26]" },
    ],
  },
  {
    category: "バックエンド",
    icon: Cloud,
    items: [
      { label: "Node.js", bg: "bg-[#339933]/10", text: "text-[#339933]" },
      { label: "Python", bg: "bg-[#3776ab]/10", text: "text-[#3776ab]" },
      { label: "Supabase", bg: "bg-[#3ecf8e]/10", text: "text-[#38a169]" },
      { label: "PostgreSQL", bg: "bg-[#336791]/10", text: "text-[#336791]" },
    ],
  },
  {
    category: "AI / LLM",
    icon: Brain,
    items: [
      { label: "Claude API", bg: "bg-[#d97706]/10", text: "text-[#d97706]" },
      { label: "Gemini API", bg: "bg-[#4285f4]/10", text: "text-[#4285f4]" },
      { label: "Whisper API", bg: "bg-[#412991]/10", text: "text-[#412991]" },
      { label: "プロンプトエンジニアリング", bg: "bg-[#8b5cf6]/10", text: "text-[#8b5cf6]" },
      { label: "RAG設計", bg: "bg-[#059669]/10", text: "text-[#059669]" },
    ],
  },
  {
    category: "インフラ / ツール",
    icon: HardDrive,
    items: [
      { label: "AWS", bg: "bg-[#ff9900]/10", text: "text-[#ff9900]" },
      { label: "Vercel", bg: "bg-[#000000]/10", text: "text-[#000000]" },
      { label: "Git", bg: "bg-[#f05032]/10", text: "text-[#f05032]" },
      { label: "Docker", bg: "bg-[#2496ed]/10", text: "text-[#2496ed]" },
    ],
  },
  {
    category: "上流工程",
    icon: ClipboardList,
    items: [
      { label: "要件定義", bg: "bg-[#6366f1]/10", text: "text-[#6366f1]" },
      { label: "データ設計", bg: "bg-[#6366f1]/10", text: "text-[#6366f1]" },
      { label: "API設計", bg: "bg-[#6366f1]/10", text: "text-[#6366f1]" },
      { label: "0→1構想設計", bg: "bg-[#6366f1]/10", text: "text-[#6366f1]" },
      { label: "ワークフロー設計", bg: "bg-[#6366f1]/10", text: "text-[#6366f1]" },
    ],
  },
  {
    category: "SNS / マーケティング",
    icon: Megaphone,
    items: [
      { label: "コンテンツ戦略設計", bg: "bg-[#f59e0b]/10", text: "text-[#f59e0b]" },
      { label: "チャンネル運用ディレクション", bg: "bg-[#f59e0b]/10", text: "text-[#f59e0b]" },
      { label: "アルゴリズム分析", bg: "bg-[#f59e0b]/10", text: "text-[#f59e0b]" },
      { label: "ブランド設計", bg: "bg-[#f59e0b]/10", text: "text-[#f59e0b]" },
      { label: "撮影 / 編集ディレクション", bg: "bg-[#f59e0b]/10", text: "text-[#f59e0b]" },
    ],
  },
];

const strengths = [
  {
    icon: Users,
    title: "ヒアリング力",
    desc: "誰が何に時間を使い、どこで止まり、何が頭の中にしかないのかを聞き出す。技術ではなく、現場の言葉で課題を整理する。",
  },
  {
    icon: Lightbulb,
    title: "着想力",
    desc: "1つの改善で終わらせず、「この判断基準も残せる」「この作業も軽くできる」と次の打ち手まで見通す。",
  },
  {
    icon: Target,
    title: "設計力",
    desc: "ベテラン任せだった判断を、誰でもたどれる業務フローに変える。SNSで培った設計力を、業務AIにもそのまま活かしている。",
  },
  {
    icon: Rocket,
    title: "実装・定着力",
    desc: "動くものを早く出し、現場で試して磨く。新しいツールを押し付けず、今の運用の延長で使える形まで落とし込む。",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-5xl">
        {/* ===== HERO ===== */}
        <FadeInSection>
          <p
            className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            自己紹介
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-[#999999]">K</span>uwajima
          </h1>
          <p className="text-text-secondary max-w-2xl mb-4">
            誰が抜けると止まるのか。どの判断が頭の中にしかないのか。
            そこを見つけて、AIで会社に残る業務フローへ変える仕事をしています。
          </p>
          <p className="text-text-secondary max-w-2xl">
            福祉・広告・不動産・税務まで業界をまたいで、ヒアリングから設計、実装、定着まで一気通貫で担当。
            SNSでは6チャンネル・170万フォロワーを設計し、その再現性を業務AIにも持ち込んでいます。
          </p>
        </FadeInSection>

        {/* ===== STRENGTHS ===== */}
        <section className="mt-32 border-t border-border pt-20">
          <FadeInSection>
            <p
              className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              強み
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-16 text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              聞く → 着想 → 設計 → 動かす
            </h2>
          </FadeInSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {strengths.map((s) => (
              <StaggerItem key={s.title}>
                <div className="rounded-xl border border-border bg-bg-card p-8 md:p-10 transition-colors duration-200 hover:border-border-light">
                  <s.icon size={18} className="text-text-muted mb-5" />
                  <h3
                    className="text-lg font-bold mb-2 text-text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ===== APPROACH ===== */}
        <section className="mt-32 border-t border-border pt-20">
          <FadeInSection>
            <p
              className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              仕事の進め方
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              使われる形になるまで設計する。
            </h2>
            <div className="space-y-6 text-text-secondary max-w-2xl">
              <p>
                まずは現場を見て、「どの業務が止まりやすいか」「誰に負担が寄っているか」を整理します。
                その上で、どこにAIを入れると一番効くかを決めます。
              </p>
              <p>
                実際に大阪の福祉施設へ足を運び、現場の方と一緒に業務の流れを見ながら方向性を擦り合わせたように、
                まずはその場の空気と使われ方を見てから設計します。
              </p>
              <p>
                新しいツールは、できる限り増やしません。
                SlackやLINEなど今の業務で使っているものの延長で動かし、現場が迷わない導線にします。
              </p>
              <p>
                実装は早く出して、現場で試しながら磨きます。
                完璧な資料を先に作るより、まず動くものを見せてから判断基準を詰めていくスタイルです。
              </p>
            </div>
          </FadeInSection>
        </section>

        {/* ===== SKILLS（簡易版） ===== */}
        <section className="mt-32 border-t border-border pt-20">
          <FadeInSection>
            <p
              className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              技術スタック
            </p>
            <p className="text-sm text-text-muted mb-8">
              案件に応じて最適な技術を選定しています。
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-wrap gap-2">
              {skills.flatMap((group) =>
                group.items.map((item) => (
                  <span
                    key={item.label}
                    className="text-xs px-2.5 py-1 rounded-full bg-bg-secondary text-text-muted"
                  >
                    {item.label}
                  </span>
                ))
              )}
            </div>
          </FadeInSection>
        </section>
      </div>
    </div>
  );
}
