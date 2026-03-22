"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  Brain,
  Building2,
  FileText,
  HomeIcon,
  BarChart3,
  ExternalLink,
  Megaphone,
  Sparkles,
} from "lucide-react";

interface Project {
  title: string;
  category: "AI" | "SNS" | "Product";
  description: string;
  details: string[];
  tech: string[];
  status: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    title: "Welza",
    category: "Product",
    description: "AIチェックワークフロー自動化プロダクト",
    details: [
      "チーム間の品質チェックを、AIが設計・運用・レポートまで一気通貫で自動化",
      "Slackネイティブ：既存のワークスペース上でそのまま稼働",
      "コンテキスト復元エンジン：チェッカーの認知負荷を最小化",
    ],
    tech: ["TypeScript", "Next.js", "Supabase", "Claude API", "Slack Block Kit", "Vercel"],
    status: "PoC募集中",
    icon: Sparkles,
  },
  {
    title: "福祉施設AI",
    category: "AI",
    description: "障害福祉施設向け 支援記録自動生成システム",
    details: [
      "音声入力 → Whisper → Claude → 構造化された支援記録を自動生成",
      "現場スタッフの記録業務を大幅に削減",
      "デモ環境構築済み・共同事業化を提案中",
    ],
    tech: ["Next.js", "Whisper API", "Claude API", "Vercel"],
    status: "デモ公開中",
    icon: Building2,
  },
  {
    title: "税務OCRツール",
    category: "AI",
    description: "税理士向け レシート・帳票のAI読み取り",
    details: [
      "Claude VisionによるOCR処理で紙の帳票をデジタル化",
      "既存の月額6万円ツールの代替として、月3千円以下で運用可能な構成を検証",
    ],
    tech: ["React", "Next.js", "Claude Vision API"],
    status: "検証完了",
    icon: FileText,
  },
  {
    title: "不動産AI効率化",
    category: "AI",
    description: "不動産業務プロセスのAI最適化",
    details: [
      "物件情報の整理、査定レポート生成などの定型業務をAI化",
      "業界特有の商習慣を踏まえたワークフロー設計",
    ],
    tech: ["Claude API", "自動化ワークフロー"],
    status: "設計・提案済み",
    icon: HomeIcon,
  },
  {
    title: "広告レポート自動化",
    category: "AI",
    description: "広告代理店向け レポート業務の完全自動化",
    details: [
      "手作業10時間 → 完全自動化を実現",
      "n8nワークフロー自動化で、人的コストを大幅削減",
    ],
    tech: ["n8n", "API連携", "自動化設計"],
    status: "運用中",
    icon: BarChart3,
  },
  {
    title: "SNS戦略設計",
    category: "SNS",
    description: "アルゴリズム構造に基づくSNSコンテンツ戦略",
    details: [
      "プラットフォームごとのアルゴリズム特性を分析",
      "コンテンツ設計 × ブランディング × 運用をトータルで支援",
    ],
    tech: ["コンテンツ戦略", "アルゴリズム分析", "ブランド設計"],
    status: "対応中",
    icon: Megaphone,
  },
];

const categoryColors: Record<string, { text: string; border: string; bg: string }> = {
  AI: { text: "text-accent-blue", border: "border-accent-blue/20", bg: "bg-accent-blue/5" },
  SNS: { text: "text-accent-purple", border: "border-accent-purple/20", bg: "bg-accent-purple/5" },
  Product: { text: "text-accent-pink", border: "border-accent-pink/20", bg: "bg-accent-pink/5" },
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeInSection>
          <p
            className="text-sm font-medium tracking-widest uppercase text-accent-blue mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Portfolio
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            実績・プロジェクト
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-16">
            AI事業化とSNS設計の領域で手がけてきたプロジェクト。
            構想から実装まで、一気通貫で推進しています。
          </p>
        </FadeInSection>

        <StaggerContainer className="space-y-6">
          {projects.map((project) => {
            const colors = categoryColors[project.category];
            return (
              <StaggerItem key={project.title}>
                <div className="group rounded-2xl border border-border bg-bg-card p-8 md:p-10 transition-all duration-300 hover:border-border-light hover:bg-bg-card-hover">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        project.category === "AI"
                          ? "bg-accent-blue/10"
                          : project.category === "SNS"
                            ? "bg-accent-purple/10"
                            : "bg-accent-pink/10"
                      }`}
                    >
                      <project.icon
                        size={22}
                        className={
                          project.category === "AI"
                            ? "text-accent-blue"
                            : project.category === "SNS"
                              ? "text-accent-purple"
                              : "text-accent-pink"
                        }
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3
                          className="text-xl font-bold"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {project.title}
                        </h3>
                        <span
                          className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${colors.text} ${colors.border} ${colors.bg}`}
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {project.category}
                        </span>
                        <span className="text-xs text-text-muted px-2.5 py-0.5 rounded-full border border-border bg-bg-primary">
                          {project.status}
                        </span>
                      </div>

                      <p className="text-text-secondary font-medium mb-4">
                        {project.description}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {project.details.map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-text-muted shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-md bg-bg-primary border border-border text-text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
