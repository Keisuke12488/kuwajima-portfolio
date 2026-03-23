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
    icon: Lightbulb,
    title: "構想力",
    desc: "ビジネスの課題を捉え、AIとSNSの組み合わせで解決策を設計する",
  },
  {
    icon: Rocket,
    title: "推進力",
    desc: "アイデアを形にするスピード。PoC構築から本番実装まで一気通貫",
  },
  {
    icon: Users,
    title: "個別化",
    desc: "業界・事業ごとの特性を深く理解し、最適なソリューションを提案",
  },
  {
    icon: Target,
    title: "戦略性",
    desc: "複数のルートから最適解を選び、限られたリソースで最大成果を出す",
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
            About
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-[#999999]">K</span>uwajima
          </h1>
          <p className="text-text-secondary max-w-2xl mb-4">
            AIの事業実装とSNS戦略設計を軸に活動するフリーランス。
            業界特化のAI構築（福祉・税務・不動産・広告）と、
            アルゴリズムの構造理解に基づくSNS設計の二刀流で、
            事業の成長をトータルで支援しています。
          </p>
          <p className="text-text-secondary max-w-2xl">
            現在はAIプロダクト「Welza」を共同開発中。
            チーム間の品質チェックワークフローをAIで自動化する
            プロダクトとして、PoC段階から事業化を推進しています。
          </p>
        </FadeInSection>

        {/* ===== STRENGTHS ===== */}
        <section className="mt-32 border-t border-border pt-20">
          <FadeInSection>
            <p
              className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Strengths
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-16 text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              強みとスタイル
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

        {/* ===== SKILLS ===== */}
        <section className="mt-32 border-t border-border pt-20">
          <FadeInSection>
            <p
              className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Skills
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-16 text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              スキル
            </h2>
          </FadeInSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group) => (
              <StaggerItem key={group.category}>
                <div className="rounded-xl border border-border bg-bg-card p-6 md:p-8 transition-colors duration-200 hover:border-border-light">
                  <div className="flex items-center gap-2.5 mb-5">
                    <group.icon size={14} className="text-text-muted" />
                    <h3
                      className="text-sm font-bold text-text-primary"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item.label}
                        className={`text-xs px-2.5 py-1 rounded-full ${item.bg} ${item.text}`}
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
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
              Approach
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              仕事の進め方
            </h2>
            <div className="space-y-6 text-text-secondary max-w-2xl">
              <p>
                まず、事業そのものを理解することから始めます。
                AIやSNSは手段であり、目的は事業の成長です。
                業界の商習慣、現場のオペレーション、チームの力学を把握した上で、
                テクノロジーをどこに差し込むかを設計します。
              </p>
              <p>
                実装はスピード重視。PoCを最短で構築し、
                実際のデータ・ユーザーで検証してから磨き上げる。
                「完璧な設計書を作ってから動く」ではなく、
                「動くものを見せてから設計を深める」スタイルです。
              </p>
            </div>
          </FadeInSection>
        </section>
      </div>
    </div>
  );
}
