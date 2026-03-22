"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  Cpu,
  Code2,
  Cloud,
  MessageSquare,
  Lightbulb,
  Rocket,
  Users,
  Target,
} from "lucide-react";

const techStack = [
  { category: "AI / LLM", items: ["Claude API", "Gemini", "Whisper", "プロンプトエンジニアリング"] },
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend / Infra", items: ["Vercel", "Supabase", "Node.js", "PostgreSQL"] },
  { category: "Platforms", items: ["Slack API", "LINE Messaging API", "Block Kit"] },
];

const strengths = [
  {
    icon: Lightbulb,
    title: "構想力",
    desc: "ビジネスの課題を捉え、AIとSNSの組み合わせで解決策を設計する",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Rocket,
    title: "推進力",
    desc: "アイデアを形にするスピード。PoC構築から本番実装まで一気通貫",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
  },
  {
    icon: Users,
    title: "個別化",
    desc: "業界・事業ごとの特性を深く理解し、最適なソリューションを提案",
    color: "text-accent-pink",
    bg: "bg-accent-pink/10",
  },
  {
    icon: Target,
    title: "戦略性",
    desc: "複数のルートから最適解を選び、限られたリソースで最大成果を出す",
    color: "text-accent-blue-light",
    bg: "bg-accent-blue-light/10",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-5xl">
        {/* ===== HERO ===== */}
        <FadeInSection>
          <p
            className="text-sm font-medium tracking-widest uppercase text-accent-blue mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Kuwajima
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed mb-4">
            AIの事業実装とSNS戦略設計を軸に活動するフリーランス。
            業界特化のAI構築（福祉・税務・不動産・広告）と、
            アルゴリズムの構造理解に基づくSNS設計の二刀流で、
            事業の成長をトータルで支援しています。
          </p>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            現在はAIプロダクト「Welza」を共同開発中。
            チーム間の品質チェックワークフローをAIで自動化する
            プロダクトとして、PoC段階から事業化を推進しています。
          </p>
        </FadeInSection>

        {/* ===== STRENGTHS ===== */}
        <section className="mt-28">
          <FadeInSection>
            <p
              className="text-sm font-medium tracking-widest uppercase text-accent-purple mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Strengths
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              強みとスタイル
            </h2>
          </FadeInSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {strengths.map((s) => (
              <StaggerItem key={s.title}>
                <div className="group rounded-2xl border border-border bg-bg-card p-7 transition-all duration-300 hover:border-border-light hover:bg-bg-card-hover h-full">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.bg} mb-4`}>
                    <s.icon size={20} className={s.color} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
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

        {/* ===== TECH STACK ===== */}
        <section className="mt-28">
          <FadeInSection>
            <p
              className="text-sm font-medium tracking-widest uppercase text-accent-blue mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tech Stack
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              使用技術
            </h2>
          </FadeInSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {techStack.map((group) => (
              <StaggerItem key={group.category}>
                <div className="rounded-2xl border border-border bg-bg-card p-7">
                  <div className="flex items-center gap-2 mb-4">
                    {group.category.includes("AI") && <Cpu size={16} className="text-accent-blue" />}
                    {group.category.includes("Frontend") && <Code2 size={16} className="text-accent-purple" />}
                    {group.category.includes("Backend") && <Cloud size={16} className="text-accent-pink" />}
                    {group.category.includes("Platforms") && <MessageSquare size={16} className="text-accent-blue-light" />}
                    <h3
                      className="text-sm font-semibold tracking-wide"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-md bg-bg-primary border border-border text-text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ===== APPROACH ===== */}
        <section className="mt-28">
          <FadeInSection>
            <div className="rounded-2xl border border-border bg-bg-card p-10 md:p-14">
              <p
                className="text-sm font-medium tracking-widest uppercase text-accent-purple mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Approach
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                仕事の進め方
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
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
            </div>
          </FadeInSection>
        </section>
      </div>
    </div>
  );
}
