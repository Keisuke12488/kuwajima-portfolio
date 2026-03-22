"use client";

import { useState } from "react";
import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  Brain,
  Building2,
  FileText,
  HomeIcon,
  BarChart3,
  Sparkles,
  Heart,
  MessageSquare,
  Megaphone,
} from "lucide-react";

// SNSアイコン（SVGインライン）
function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="18" height="18">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="18" height="18">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="18" height="18">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

type SectionTab = "ai" | "sns";

// AI事業プロジェクト
interface AIProject {
  title: string;
  description: string;
  results?: string;
  tech: string[];
  status: string;
  icon: React.ElementType;
}

const aiProjects: AIProject[] = [
  {
    title: "Welza",
    description: "AIチェックワークフロー自動化プロダクト。チーム間の品質チェックを、AIが設計・運用・レポートまで一気通貫で自動化。Slackネイティブで既存ワークスペース上でそのまま稼働。",
    tech: ["TypeScript", "Next.js", "Supabase", "Claude API", "Slack Block Kit", "Vercel"],
    status: "PoC募集中",
    icon: Sparkles,
  },
  {
    title: "福祉施設AI — 支援記録自動生成",
    description: "障害福祉施設向け。音声入力 → Whisper → Claude → 構造化された支援記録を自動生成。行政提出用フォーマットに変換した状態で出力。",
    results: "毎日120分の記録業務 → 10分に短縮",
    tech: ["Next.js", "Whisper API", "Claude API", "Vercel"],
    status: "デモ公開中",
    icon: Building2,
  },
  {
    title: "不動産AI効率化",
    description: "不動産業務プロセスのAI最適化。物件情報の整理、査定レポート生成などの定型業務をAI化。業界特有の商習慣を踏まえたワークフロー設計。",
    tech: ["Claude API", "自動化ワークフロー"],
    status: "設計・提案済み",
    icon: HomeIcon,
  },
  {
    title: "SNSシナリオ自動化",
    description: "SNSコンテンツの企画・構成・投稿フローをAIで自動化。シナリオ作成から投稿スケジュール管理まで。",
    tech: ["Claude API", "自動化ワークフロー"],
    status: "運用中",
    icon: MessageSquare,
  },
  {
    title: "広告レポート自動化",
    description: "広告代理店のレポート業務を完全自動化。",
    results: "手作業10時間 → 完全自動化",
    tech: ["n8n", "API連携"],
    status: "運用中",
    icon: BarChart3,
  },
  {
    title: "税務OCRツール",
    description: "税理士向けレシート・帳票のAI読み取り。",
    results: "月額6万円の既存ツール → 月3千円以下の構成で代替可能と検証",
    tech: ["React", "Next.js", "Claude Vision API"],
    status: "検証完了",
    icon: FileText,
  },
  {
    title: "Weluru（カップル向け関係構築アプリ）",
    description: "カップルの関係性を深めるためのAIアプリ。パートナー間のコミュニケーションをサポート。",
    tech: ["Next.js", "Supabase", "Claude API", "Vercel"],
    status: "開発中",
    icon: Heart,
  },
];

// SNS運用実績
interface SNSChannel {
  name: string;
  period: string;
  youtube?: string;
  tiktok?: string;
  instagram?: string;
}

interface SNSCategory {
  label: string;
  channels: SNSChannel[];
}

const snsData: SNSCategory[] = [
  {
    label: "法人案件",
    channels: [
      {
        name: "アナリソ",
        period: "2年",
        youtube: "https://youtube.com/@ana_riso_fudousan?si=4b_N1sS8q-93bvP4",
        tiktok: "https://www.tiktok.com/@ana_riso_manager?_r=1&_t=ZS-94uguFRue1P",
        instagram: "https://www.instagram.com/ana_riso_fudousan?igsh=MTN5cHdreWsyYzZ5NA==",
      },
      {
        name: "ルムパ",
        period: "1年（途中から運用参加）",
        youtube: "https://youtube.com/@roompa?si=R1odM1tFhGV8otVc",
        tiktok: "https://www.tiktok.com/@amufi_roompa?_r=1&_t=ZS-94uh24QzxKM",
        instagram: "https://www.instagram.com/roompa__?igsh=bmJjeGcxcG42YWk2",
      },
      {
        name: "ライフハック",
        period: "1年半",
        youtube: "https://youtube.com/@30-uk7eb?si=Rq73QsOzjT072CIm",
        instagram: "https://www.instagram.com/1minute.panda?igsh=aXJzbWIwdHpsajBn",
      },
    ],
  },
  {
    label: "個人制作",
    channels: [
      {
        name: "アシタクル",
        period: "半年",
        youtube: "https://youtube.com/@tisiki?si=dzEkhMafFo73s7_7",
      },
      {
        name: "宇宙チャンネル",
        period: "半年",
        youtube: "https://youtube.com/channel/UCi5JqShtoqBCj8SkyK8fHyQ?si=-zRtJIIxkbN0otV3",
      },
      {
        name: "30秒で学ぶ食の科学",
        period: "半年（個人の趣味で運用）",
        youtube: "https://youtube.com/@30-uk7eb?si=Rq73QsOzjT072CIm",
      },
    ],
  },
];

const statusColors: Record<string, string> = {
  "PoC募集中": "border-accent-pink/30 bg-accent-pink/5 text-accent-pink",
  "デモ公開中": "border-accent-blue/30 bg-accent-blue/5 text-accent-blue",
  "運用中": "border-green-500/30 bg-green-500/5 text-green-400",
  "検証完了": "border-accent-purple/30 bg-accent-purple/5 text-accent-purple",
  "設計・提案済み": "border-yellow-500/30 bg-yellow-500/5 text-yellow-400",
  "開発中": "border-accent-blue/30 bg-accent-blue/5 text-accent-blue",
};

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<SectionTab>("ai");

  return (
    <div className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-5xl">
        {/* ヘッダー */}
        <FadeInSection>
          <p
            className="text-sm font-medium tracking-wide uppercase text-accent-blue mb-4"
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
          <p className="text-text-secondary text-lg max-w-2xl mb-12 leading-relaxed">
            AI事業化とSNS運用の領域で手がけてきたプロジェクト。
            構想から実装まで、一気通貫で推進しています。
          </p>
        </FadeInSection>

        {/* セクションナビ */}
        <FadeInSection>
          <div className="flex gap-2 mb-12">
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                activeTab === "ai"
                  ? "border-accent-blue/40 bg-accent-blue/10 text-accent-blue"
                  : "border-border bg-bg-card text-text-secondary hover:border-border-light hover:text-text-primary"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Brain size={16} />
              AI事業
            </button>
            <button
              onClick={() => setActiveTab("sns")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                activeTab === "sns"
                  ? "border-accent-purple/40 bg-accent-purple/10 text-accent-purple"
                  : "border-border bg-bg-card text-text-secondary hover:border-border-light hover:text-text-primary"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Megaphone size={16} />
              SNS運用
            </button>
          </div>
        </FadeInSection>

        {/* AI事業セクション */}
        {activeTab === "ai" && (
          <StaggerContainer className="space-y-5">
            {aiProjects.map((project) => {
              const statusClass = statusColors[project.status] || "border-border bg-bg-primary text-text-muted";
              return (
                <StaggerItem key={project.title}>
                  <div className="group rounded-2xl border border-border bg-bg-card p-8 md:p-10 transition-all duration-300 hover:border-border-light">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* アイコン */}
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-accent-blue/10">
                        <project.icon size={22} className="text-accent-blue" />
                      </div>

                      {/* コンテンツ */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3
                            className="text-xl font-bold"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {project.title}
                          </h3>
                          <span
                            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${statusClass}`}
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {project.status}
                          </span>
                        </div>

                        <p className="text-text-secondary mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        {project.results && (
                          <div className="mb-4 px-4 py-3 rounded-lg bg-accent-blue/5 border border-accent-blue/15">
                            <p className="text-sm font-medium text-accent-blue">
                              {project.results}
                            </p>
                          </div>
                        )}

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
        )}

        {/* SNS運用セクション */}
        {activeTab === "sns" && (
          <div className="space-y-12">
            {snsData.map((category) => (
              <FadeInSection key={category.label}>
                <h2
                  className="text-lg font-bold mb-6 text-text-primary flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className={`w-2 h-2 rounded-full ${category.label === "法人案件" ? "bg-accent-purple" : "bg-accent-pink"}`} />
                  {category.label}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.channels.map((channel) => (
                    <div
                      key={channel.name}
                      className="rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-border-light"
                    >
                      <h3
                        className="text-base font-bold mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {channel.name}
                      </h3>
                      <p className="text-xs text-text-muted mb-4">
                        運用期間: {channel.period}
                      </p>
                      <div className="flex items-center gap-3">
                        {channel.youtube && (
                          <a
                            href={channel.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-red-500 transition-colors"
                            aria-label={`${channel.name} YouTube`}
                          >
                            <YouTubeIcon />
                          </a>
                        )}
                        {channel.tiktok && (
                          <a
                            href={channel.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-text-primary transition-colors"
                            aria-label={`${channel.name} TikTok`}
                          >
                            <TikTokIcon />
                          </a>
                        )}
                        {channel.instagram && (
                          <a
                            href={channel.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-pink-500 transition-colors"
                            aria-label={`${channel.name} Instagram`}
                          >
                            <InstagramIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
