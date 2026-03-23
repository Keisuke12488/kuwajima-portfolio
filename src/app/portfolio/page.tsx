"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
function YouTubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.86.12V9.01a6.32 6.32 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.19 8.19 0 0 0 4.77 1.52V6.83a4.84 4.84 0 0 1-1.01-.14z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

type SectionTab = "ai" | "sns";

// ===== AI事業 =====

interface AIProject {
  title: string;
  description: string;
  results?: string;
  processes: string[];
  tech: string[];
  status: string;
  icon: React.ElementType;
}

const aiProjects: AIProject[] = [
  {
    title: "Welza",
    description: "AIチェックワークフロー自動化プロダクト。チーム間の品質チェックを、AIが設計・運用・レポートまで一気通貫で自動化。Slackネイティブで既存ワークスペース上でそのまま稼働。",
    processes: ["0→1構想設計", "プロダクト設計", "技術選定", "開発リード", "Slack連携実装"],
    tech: ["TypeScript", "Next.js", "Supabase", "Claude API", "Slack Block Kit", "Vercel"],
    status: "PoC募集中",
    icon: Sparkles,
  },
  {
    title: "福祉施設AI — 支援記録自動生成",
    description: "障害福祉施設向け。音声入力 → Whisper → Claude → 構造化された支援記録を自動生成。行政提出用フォーマットに変換した状態で出力。",
    results: "毎日120分の記録業務 → 10分に短縮",
    processes: ["要件定義", "プロトタイプ実装", "Whisper連携", "Claude API設計", "デモ構築"],
    tech: ["Next.js", "Whisper API", "Claude API", "Vercel"],
    status: "デモ公開中",
    icon: Building2,
  },
  {
    title: "不動産AI効率化",
    description: "不動産業務プロセスのAI最適化。物件情報の整理、査定レポート生成などの定型業務をAI化。業界特有の商習慣を踏まえたワークフロー設計。",
    processes: ["業務フロー分析", "AI活用設計", "ワークフロー設計", "提案"],
    tech: ["Claude API", "自動化ワークフロー"],
    status: "設計・提案済み",
    icon: HomeIcon,
  },
  {
    title: "広告シナリオ自動化",
    description: "広告クリエイティブの制作フローをAIで自動化。競合・トレンド情報をスクレイピングで自動収集し、AIがシナリオを出力。常に最新のクリエイティブトレンドを確認できる環境を構築。",
    results: "手作業2〜3時間のリサーチ → ボタン1つ・5分で完了",
    processes: ["スクレイピング設計", "データ分析", "スプレッドシート連携", "自動化構築", "運用"],
    tech: ["Claude API", "自動化ワークフロー"],
    status: "運用中",
    icon: MessageSquare,
  },
  {
    title: "広告レポート自動化",
    description: "広告代理店のレポート業務を完全自動化。",
    results: "手作業10時間 → 完全自動化",
    processes: ["業務フロー分析", "データ集約設計", "ワークフロー構築", "API連携", "自動化実装"],
    tech: ["n8n", "API連携"],
    status: "運用中",
    icon: BarChart3,
  },
  {
    title: "税務OCRツール",
    description: "税理士向けレシート・帳票のAI読み取り。",
    results: "月額6万円の既存ツール → 月2〜3万円の構成で代替可能と検証",
    processes: ["0→1構想設計", "技術検証", "プロトタイプ実装", "精度比較分析"],
    tech: ["React", "Next.js", "Claude Vision API"],
    status: "検証完了",
    icon: FileText,
  },
  {
    title: "Weluru（カップル向け関係構築アプリ）",
    description: "カップルの関係構築を支援するAIアプリ。LINEグループ上でAIがコミュニケーションをサポート。",
    processes: ["0→1構想設計", "プロダクト設計", "技術選定", "実装"],
    tech: ["Next.js", "Supabase", "Claude API", "LINE Messaging API"],
    status: "開発中",
    icon: Heart,
  },
];

// ===== SNS運用 =====

const snsStats = [
  { value: "170万+", label: "総フォロワー" },
  { value: "6", label: "運用チャンネル数" },
  { value: "55万人", label: "最大チャンネル登録" },
];

interface SNSChannel {
  name: string;
  subscribers?: string | string[];
  period: string;
  roles: string[];
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
    label: "企業チャンネル運用",
    channels: [
      {
        name: "あなたの理想不動産",
        subscribers: "55万人",
        period: "3年（現在も運用中）",
        roles: ["ディレクション（全体統括）", "企画立案", "戦略設計", "シナリオディレクション", "撮影ディレクション", "編集ディレクション"],
        youtube: "https://youtube.com/@ana_riso_fudousan?si=4b_N1sS8q-93bvP4",
        tiktok: "https://www.tiktok.com/@ana_riso_manager?_r=1&_t=ZS-94uguFRue1P",
        instagram: "https://www.instagram.com/ana_riso_fudousan?igsh=MTN5cHdreWsyYzZ5NA==",
      },
      {
        name: "ルムパ",
        subscribers: ["TikTok 36万人", "Instagram 55万人"],
        period: "1年（途中から運用参加）",
        roles: ["企画", "戦略設計", "運用ディレクション", "統合管理"],
        youtube: "https://youtube.com/@roompa?si=R1odM1tFhGV8otVc",
        tiktok: "https://www.tiktok.com/@amufi_roompa?_r=1&_t=ZS-94uh24QzxKM",
        instagram: "https://www.instagram.com/roompa__?igsh=bmJjeGcxcG42YWk2",
      },
      {
        name: "ライフハック",
        subscribers: "5万人",
        period: "1年半",
        roles: ["0→1構想", "企画立案", "ディレクション"],
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
        subscribers: "10万人",
        period: "半年",
        roles: ["0→1設計", "戦略立案", "運用マネジメント", "ディレクション"],
        youtube: "https://youtube.com/@tisiki?si=dzEkhMafFo73s7_7",
      },
      {
        name: "宇宙チャンネル",
        subscribers: "〜5万人",
        period: "半年",
        roles: ["0→1設計", "戦略立案", "運用マネジメント", "ディレクション"],
        youtube: "https://youtube.com/channel/UCi5JqShtoqBCj8SkyK8fHyQ?si=-zRtJIIxkbN0otV3",
      },
      {
        name: "30秒で学ぶ食の科学",
        subscribers: "〜5万人",
        period: "半年（個人の趣味として運用）",
        roles: [],
        youtube: "https://youtube.com/@30-uk7eb?si=Rq73QsOzjT072CIm",
      },
    ],
  },
];

const statusColors: Record<string, string> = {
  "PoC募集中": "border-accent-blue/30 bg-accent-blue/5 text-accent-blue",
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
          <p className="text-text-secondary text-lg max-w-2xl mb-12">
            AI事業化とSNS運用の領域で手がけてきたプロジェクト。
            構想から実装まで、一気通貫で推進しています。
          </p>
        </FadeInSection>

        {/* セクションナビ */}
        <FadeInSection>
          <div className="flex gap-2 mb-12">
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                activeTab === "ai"
                  ? "border-accent-blue/40 bg-accent-blue/10 text-accent-blue"
                  : "border-border bg-bg-secondary text-text-secondary hover:border-border-light hover:text-text-primary"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Brain size={16} />
              AI事業
            </button>
            <button
              onClick={() => setActiveTab("sns")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                activeTab === "sns"
                  ? "border-accent-purple/40 bg-accent-purple/10 text-accent-purple"
                  : "border-border bg-bg-secondary text-text-secondary hover:border-border-light hover:text-text-primary"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Megaphone size={16} />
              SNS運用
            </button>
          </div>
        </FadeInSection>

        <AnimatePresence mode="wait">
        {/* ===== AI事業セクション ===== */}
        {activeTab === "ai" && (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
          <StaggerContainer className="space-y-5">
            {aiProjects.map((project) => {
              const statusClass = statusColors[project.status] || "border-border bg-bg-primary text-text-muted";
              return (
                <StaggerItem key={project.title}>
                  <div className="rounded-xl border border-border bg-bg-secondary p-8 md:p-10 transition-all duration-300 hover:border-border-light">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-accent-blue/10">
                        <project.icon size={22} className="text-accent-blue" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3
                            className="text-xl font-bold"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {project.title}
                          </h3>
                          <span
                            className={`text-xs font-medium px-2.5 py-0.5 rounded-md border ${statusClass}`}
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {project.status}
                          </span>
                        </div>

                        <p className="text-text-secondary mb-4">
                          {project.description}
                        </p>

                        {project.results && (
                          <div className="mb-4 px-4 py-3 rounded-md bg-accent-blue/5 border border-accent-blue/15">
                            <p className="text-sm font-medium text-accent-blue">
                              {project.results}
                            </p>
                          </div>
                        )}

                        {/* 担当プロセス */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.processes.map((p) => (
                            <span
                              key={p}
                              className="text-xs px-2.5 py-1 rounded-md bg-accent-blue/8 border border-accent-blue/15 text-accent-blue-light"
                            >
                              {p}
                            </span>
                          ))}
                        </div>

                        {/* 技術スタック */}
                        <div className="flex flex-wrap gap-1.5">
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
          </motion.div>
        )}

        {/* ===== SNS運用セクション ===== */}
        {activeTab === "sns" && (
          <motion.div
            key="sns"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
          <div className="space-y-12">
            {/* 実績サマリー */}
            <FadeInSection>
              <div className="grid grid-cols-3 gap-6 mb-4">
                {snsStats.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-3xl md:text-4xl font-bold text-accent-blue mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-text-secondary">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>

            {/* チャンネル一覧 */}
            {snsData.map((category) => (
              <FadeInSection key={category.label}>
                <h2
                  className="text-lg font-bold mb-6 text-text-primary flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${category.label === "企業チャンネル運用" ? "bg-accent-blue" : "bg-accent-purple"}`} />
                  {category.label}
                </h2>
                <div className="space-y-4">
                  {category.channels.map((channel) => (
                    <div
                      key={channel.name}
                      className="rounded-xl border border-border bg-bg-secondary p-6 md:p-8 transition-all duration-300 hover:border-border-light"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3
                              className="text-lg font-bold"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {channel.name}
                            </h3>
                            {channel.subscribers && (
                              typeof channel.subscribers === "string" ? (
                                <span
                                  className="text-sm font-semibold text-accent-blue"
                                  style={{ fontFamily: "var(--font-display)" }}
                                >
                                  {channel.subscribers}
                                </span>
                              ) : (
                                <div className="flex items-center gap-2">
                                  {channel.subscribers.map((s) => (
                                    <span
                                      key={s}
                                      className="text-xs font-semibold text-accent-blue"
                                      style={{ fontFamily: "var(--font-display)" }}
                                    >
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              )
                            )}
                          </div>
                          <p className="text-xs text-text-muted">
                            運用期間: {channel.period}
                          </p>
                        </div>

                        {/* SNSリンク */}
                        <div className="flex items-center gap-3">
                          {channel.youtube && (
                            <a
                              href={channel.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-muted hover:text-red-500 transition-colors"
                              aria-label={`${channel.name} YouTube`}
                            >
                              <YouTubeIcon size={18} />
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
                              <TikTokIcon size={18} />
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
                              <InstagramIcon size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* 担当範囲 */}
                      {channel.roles.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {channel.roles.map((role) => (
                            <span
                              key={role}
                              className="text-xs px-2.5 py-1 rounded-md bg-accent-purple/8 border border-accent-purple/15 text-accent-purple"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </FadeInSection>
            ))}
          </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}
