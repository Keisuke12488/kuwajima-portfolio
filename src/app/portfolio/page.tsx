"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  ArrowRight,
  Brain,
  Building2,
  FileText,
  HomeIcon,
  BarChart3,
  Sparkles,
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

// ===== AI事業 — 代表事例（ストーリー型） =====

interface AICaseStudy {
  title: string;
  status: string;
  icon: React.ElementType;
  situationLead: string;
  background: string;
  challenge: string;
  focusLead: string;
  approach: string;
  design: string;
  outcomeLead: string;
  resultBefore: string;
  resultAfter: string;
  resultNote?: string;
  quote: string;
  processes: string[];
  tech: string[];
}

const aiCaseStudies: AICaseStudy[] = [
  {
    title: "福祉施設AI — 支援記録の自動化",
    status: "デモ公開中",
    icon: Building2,
    situationLead: "大阪の福祉施設へ実際に足を運ぶと、手書き記録に毎日2時間かかっていた。",
    background: "知り合いから相談を受け、現場に入りながら支援記録の流れとスタッフの動きを一緒に見ていった。",
    challenge: "提出用フォーマットへの転記にもさらに時間がかかり、しかも新しいツールを増やすやり方は現場に定着しにくかった。",
    focusLead: "現場の方とすり合わせながら、今のやり方のまま使える形を探した。",
    approach: "誰がどこで止まるのか、普段どのツールなら無理なく使えるのかを、その場で一緒に確認した。",
    design: "SlackやLINEの延長で使える形に絞り、URLを開いて確認して少し直すだけの流れに落とし込んだ。",
    outcomeLead: "支援記録の作成は120分から10分に。",
    resultBefore: "120分",
    resultAfter: "10分",
    quote: "「これだったらできるわね」と現場スタッフから即日評価。支援員が利用者と向き合う時間が生まれた。",
    processes: ["要件定義", "現場ヒアリング", "プロトタイプ実装", "Whisper連携", "Claude API設計", "デモ構築"],
    tech: ["Next.js", "Whisper API", "Claude API", "Vercel"],
  },
  {
    title: "広告シナリオAI — クリエイティブ制作の仕組み化",
    status: "運用中",
    icon: MessageSquare,
    situationLead: "シナリオ制作に毎回10時間。訴求の当て方が個人の勘に寄っていた。",
    background: "広告クリエイティブの制作を、再現性のある仕組みに変えるプロジェクト。",
    challenge: "どの見せ方・映像パターン・シナリオ構成が成果に繋がるか、体系的に整理されていなかった。",
    focusLead: "過去データから勝ちパターンを抽出し、再現できる形に落とし込んだ。",
    approach: "成績の良かったクリエイティブを分析し、シナリオ設計・見せ方・映像パターンの最適な組み合わせを導き出した。",
    design: "抽出したパターンをデータベース化し、商材情報を入れるとDBを参照して最適なシナリオを出力できる専用AIを構築。",
    outcomeLead: "シナリオ制作は10時間から10分に。",
    resultBefore: "10時間",
    resultAfter: "10分",
    resultNote: "精度90%",
    quote: "少し手直しするだけで、数十本のシナリオを30分で完成できる体制に。",
    processes: ["過去データ分析", "勝ちパターン抽出", "DB構築", "専用AI設計", "運用"],
    tech: ["Claude API", "自動化ワークフロー"],
  },
];

// ===== AI事業 — その他実績（カード型） =====

interface AIProject {
  title: string;
  highlight: string;
  description: string;
  detail?: string;
  results?: string;
  status: string;
  icon: React.ElementType;
}

const aiOtherProjects: AIProject[] = [
  {
    title: "welza",
    highlight: "品質チェックを、Slack上でそのまま回せるAIフローに。",
    description: "ばらつきやすいチェック業務を、設計からレポートまで一気通貫で自動化。",
    detail: "新しいツールを増やさず、Slackの中で完結するように設計。0→1の構想設計からプロダクト設計、技術選定、開発リードまで担当。",
    status: "PoC募集中",
    icon: Sparkles,
  },
  {
    title: "広告レポート自動化",
    highlight: "広告レポート集計を、ボタン1つで終わる業務に。",
    description: "トレンド収集からランキング出力までを自動化し、毎回の手集計をなくした。",
    detail: "最新の広告トレンドを自動収集し、分析結果をスプレッドシートに出力。担当者が毎回まとめなくても、必要なランキングがすぐ見られる状態にした。",
    results: "手作業2〜3時間 → ボタン1つ・5分",
    status: "運用中",
    icon: BarChart3,
  },
  {
    title: "不動産AI効率化",
    highlight: "物件整理や査定レポート作成を、現場の流れに沿って軽くする設計に。",
    description: "不動産特有の業務を崩さず、AIを無理なく差し込むワークフローを提案。",
    detail: "業界特有の言い回しや商習慣を踏まえて、既存業務に違和感なく入る構成に設計。定型作業を短くしながら、判断しやすい状態をつくった。",
    status: "設計・提案済み",
    icon: HomeIcon,
  },
  {
    title: "税務OCRツール",
    highlight: "レシート処理を、今より安く同等精度で回せるかを検証。",
    description: "税理士業務で頻出する帳票読み取りを、低コストで代替できるかを比較した。",
    detail: "レシートや帳票の読み取りをAIで検証し、既存ツールより低コストで代替できる可能性を確認。精度比較まで行い、導入判断に必要な材料を整理した。",
    results: "月額6万円の既存ツール → 月2〜3万円で代替可能と検証",
    status: "検証完了",
    icon: FileText,
  },
];

// ===== SNS運用 =====

const snsStats = [
  { value: "170万+", label: "総フォロワー" },
  { value: "6+", label: "運用チャンネル数" },
  { value: "55万人", label: "最大チャンネル登録" },
];

// ストーリー型SNS事例
interface SNSCaseStudy {
  title: string;
  icon: React.ElementType;
  background: string;
  challenge: string;
  approach: string;
  design: string;
  resultBefore: string;
  resultAfter: string;
  quote: string;
  roles: string[];
  links: { type: "youtube" | "tiktok" | "instagram"; url: string }[];
}

const snsCaseStudies: SNSCaseStudy[] = [
  {
    title: "あなたの理想不動産 — キャラクター設計でファン化を実装",
    icon: Megaphone,
    background: "不動産系YouTubeチャンネル。登録者20万人の時点からディレクションを担当し、企画・編集・撮影のすべてを統括する立場で参画した。",
    challenge: "制作体制が属人化しており、本数・インプレッションに限界があった。また不動産というBtoBの堅いジャンルで、いかに視聴者との距離を縮めるかが課題だった。",
    approach: "まず属人化を解消し、より多くの本数を安定して出せる制作体制を設計。同時に「不動産」というキャラクターの解像度を徹底的に上げ、視聴者が楽しめるコンテンツを追求した。",
    design: "イラストを使ったキャラクター設計を導入し、そのキャラクターが実在するかのような振る舞いを一貫して演出。お昼ご飯に行ったり、キャラクターに沿った話し方やシナリオを埋め込んだり、不動産業界でよくあるストーリーを織り込むことで「この人、本当にいるんだ」と思わせるファン化の仕組みを実装した。",
    resultBefore: "20万人",
    resultAfter: "55万人",
    quote: "属人化を脱却しながら、キャラクターの実在感でファンとの距離を縮めた。",
    roles: ["ディレクション（全体統括）", "企画立案", "戦略設計", "シナリオディレクション", "撮影ディレクション", "編集ディレクション"],
    links: [
      { type: "youtube", url: "https://www.youtube.com/@_anariso_" },
      { type: "tiktok", url: "https://www.tiktok.com/@ana_riso_manager?_r=1&_t=ZS-94uguFRue1P" },
      { type: "instagram", url: "https://www.instagram.com/ana_riso_fudousan?igsh=MTN5cHdreWsyYzZ5NA==" },
    ],
  },
  {
    title: "アシタクル — 市場の変化を読み、半年で10万人",
    icon: Megaphone,
    background: "コロナ禍で多くの社会人・大人の層がYouTubeやSNSに流入。行き場を失った人々の居場所がSNSへ移り変わるタイミングを捉えた。",
    challenge: "ニュース・政治系アカウントの視聴回数が急増し、大人向けコンテンツの需要が拡大。日本において常に課題である「災害」「防災」をSNSでどう届けるかが問われていた。",
    approach: "リテラシーの高い大人層が「エンタメを通じて学びたい」というニーズを持って流入してくると構想。災害チャンネルとして、固すぎずエンタメ軸で情報を摂取しながら学べる設計を追求した。",
    design: "「明日が来る」というコンセプトで、防災・災害をエンタメとして消化できるコンテンツ設計を構築。見込んでいた構想が的中し、半年で一気に登録者10万人に到達した。",
    resultBefore: "0人",
    resultAfter: "10万人",
    quote: "市場の変化を読み切り、構想を形にした結果、半年で10万人を達成。",
    roles: ["0→1設計", "戦略立案", "運用マネジメント", "ディレクション"],
    links: [
      { type: "youtube", url: "https://www.youtube.com/@tisiki" },
    ],
  },
];

// その他チャンネル（カード型）
interface SNSChannel {
  name: string;
  subscribers?: string | string[];
  period: string;
  roles: string[];
  youtube?: string;
  tiktok?: string;
  instagram?: string;
}

const snsOtherChannels: SNSChannel[] = [
  {
    name: "ルムパ",
    subscribers: ["TikTok 36万人", "Instagram 55万人"],
    period: "1年（途中から運用参加）",
    roles: ["企画", "戦略設計", "運用ディレクション", "統合管理"],
    youtube: "https://www.youtube.com/@RoomPa",
    tiktok: "https://www.tiktok.com/@amufi_roompa?_r=1&_t=ZS-94uh24QzxKM",
    instagram: "https://www.instagram.com/roompa__?igsh=bmJjeGcxcG42YWk2",
  },
  {
    name: "1分暮らしの雑学パンダ",
    subscribers: "5万人",
    period: "1年半",
    roles: ["0→1構想", "企画立案", "ディレクション"],
    youtube: "https://www.youtube.com/@1%E5%88%86%E6%9A%AE%E3%82%89%E3%81%97%E3%81%AE%E9%9B%91%E5%AD%A6%E3%83%91%E3%83%B3%E3%83%80",
    instagram: "https://www.instagram.com/1minute.panda?igsh=aXJzbWIwdHpsajBn",
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
];

const statusStyle: Record<string, string> = {
  "PoC募集中": "text-accent-blue",
  "デモ公開中": "text-accent-blue",
  "運用中": "text-green-600",
  "検証完了": "text-text-secondary",
  "設計・提案済み": "text-text-secondary",
  "開発中": "text-accent-blue",
};

const aiImpactStats = [
  { value: "120分→10分", label: "福祉施設の記録業務を自動化" },
  { value: "10時間→10分", label: "広告シナリオ制作を仕組み化" },
  { value: "7+", label: "業界横断のAI構築実績" },
  {
    value: "既存ツール優先",
    label: "Slack・LINEの延長で定着まで設計",
    valueClassName: "xl:whitespace-nowrap xl:text-[1.7rem]",
  },
];

const heroWorries = [
  {
    title: "あの人が辞めたら終わる",
    desc: "頭の中のノウハウをヒアリングで抽出し、誰でも使える業務フローに変換",
  },
  {
    title: "毎回同じことを聞かれる",
    desc: "手順・判断基準をシステムに組み込み、聞かなくても回る現場へ",
  },
  {
    title: "何から手をつければ？",
    desc: "業務を棚卸しして、効果が大きい順に着手。最初の一手を一緒に設計",
  },
];

const makerTags = [
  "要件定義",
  "現場ヒアリング",
  "プロトタイプ実装",
  "定着支援",
  "Claude API",
  "Whisper",
  "Next.js",
  "Vercel",
];

const processSteps = [
  {
    number: "01",
    title: "ヒアリング（無料）",
    desc: "今の業務フローを聞かせてください。30分でAI化の余地を整理します。",
  },
  {
    number: "02",
    title: "提案・見積もり",
    desc: "何をどう変えるか、費用感とスケジュールを提示します。",
  },
  {
    number: "03",
    title: "構築・導入",
    desc: "プロトタイプを作り、現場で試しながら磨きます。",
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<SectionTab>("ai");

  return (
    <div className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-5xl">
        {/* ヘッダー */}
        <FadeInSection>
          <div className="mb-14">
            <div className="text-center">
              <p
                className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                あなたの現場、こうなっていませんか
              </p>
              <h1
                className="text-[2.15rem] font-bold leading-[1.08] tracking-tight text-text-primary md:text-[2.95rem] lg:text-[3.55rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                属人化を
                <br />
                <span className="text-[#999999]">仕組み</span>に変える
              </h1>
              <p
                className="mt-5 text-base text-text-secondary md:text-lg"
              >
                ベテランの頭にしかない判断や手順を、
                <br className="hidden sm:block" />
                会社に残る業務フローへ変える。
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroWorries.map((scenario) => (
                <div
                  key={scenario.title}
                  className="rounded-2xl border border-border bg-bg-card px-5 py-5"
                >
                  <p
                    className="text-sm font-semibold leading-snug text-text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {scenario.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{scenario.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p
                className="text-2xl font-bold leading-snug tracking-tight text-text-primary md:text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                属人の知見を
                <br />
                組織の武器に変える
              </p>
              <p className="mt-3 text-sm text-text-secondary md:text-base">
                今のやり方を活かしたまま、AIで仕組みに変えます
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-text-primary px-7 py-3.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                style={{ fontFamily: "var(--font-display)" }}
              >
                無料で相談する
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#ai-case-studies"
                onClick={() => setActiveTab("ai")}
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-text-secondary transition-colors duration-200 hover:border-border-light hover:text-text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                事例を見る
              </a>
            </div>
          </div>
        </FadeInSection>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-16">
          {aiImpactStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-2xl border border-border bg-bg-card px-5 py-6 h-full">
                <p
                  className={`mb-2 text-2xl font-bold text-text-primary md:text-3xl ${stat.valueClassName ?? ""}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* セクションナビ */}
        <FadeInSection>
          <div className="mb-16 border-b border-border">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="flex gap-6 overflow-x-auto">
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`flex items-center gap-2 pb-3 text-sm font-semibold transition-colors duration-200 border-b-2 -mb-px whitespace-nowrap ${
                    activeTab === "ai"
                      ? "border-text-primary text-text-primary"
                      : "border-transparent text-text-muted hover:text-text-secondary"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Brain size={15} />
                  AI構築実績
                </button>
                <button
                  onClick={() => setActiveTab("sns")}
                  className={`flex items-center gap-2 pb-3 text-sm font-semibold transition-colors duration-200 border-b-2 -mb-px whitespace-nowrap ${
                    activeTab === "sns"
                      ? "border-text-primary text-text-primary"
                      : "border-transparent text-text-muted hover:text-text-secondary"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Megaphone size={15} />
                  SNS設計実績
                </button>
              </div>
              <p className="text-xs text-text-muted max-w-sm pb-3">
                SNS実績は、ユーザー理解から設計・運用まで成果を出してきた再現性の証明として掲載しています。
              </p>
            </div>
          </div>
        </FadeInSection>

        <AnimatePresence mode="wait">
        {/* ===== AI事業セクション ===== */}
        {activeTab === "ai" && (
          <motion.div
            key="ai"
            id="ai-case-studies"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
          {/* 代表事例（ストーリー型） */}
          <div className="space-y-6 mb-16">
            {aiCaseStudies.map((cs, i) => (
              <FadeInSection key={cs.title} delay={i * 0.08}>
                <div className="rounded-xl border border-border bg-bg-card p-8 md:p-12 transition-colors duration-200 hover:border-border-light">
                  <div className="flex items-center gap-3 mb-8">
                    <cs.icon size={18} className="text-text-muted" />
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3
                        className="text-xl font-bold text-text-primary"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {cs.title}
                      </h3>
                      <span
                        className={`text-xs font-medium ${statusStyle[cs.status] || "text-text-muted"}`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {cs.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div>
                        <p className="text-xs font-medium text-text-muted mb-3">どういう状況だったか</p>
                        <div className="space-y-3">
                          <p className="text-sm font-semibold leading-relaxed text-text-primary">{cs.situationLead}</p>
                          <p className="text-sm text-text-secondary leading-relaxed">{cs.background}</p>
                          <p className="text-sm text-text-secondary leading-relaxed">{cs.challenge}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-xs font-medium text-text-muted mb-3">何を大事にしたか</p>
                        <div className="space-y-3">
                          <p className="text-sm font-semibold leading-relaxed text-text-primary">{cs.focusLead}</p>
                          <p className="text-sm text-text-secondary leading-relaxed">{cs.approach}</p>
                          <p className="text-sm text-text-secondary leading-relaxed">{cs.design}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="mb-6">
                      <p className="text-xs font-medium text-text-muted mb-3">何が変わったか</p>
                      <p className="mb-3 text-sm font-semibold leading-relaxed text-text-primary">{cs.outcomeLead}</p>
                      <div
                        className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2 sm:whitespace-nowrap"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        <span className="text-2xl md:text-3xl font-bold text-text-muted line-through decoration-1">
                          {cs.resultBefore}
                        </span>
                        <span className="text-text-muted text-xl">→</span>
                        <span className="text-4xl md:text-5xl font-bold text-text-primary">
                          {cs.resultAfter}
                        </span>
                        {cs.resultNote && (
                          <span className="text-sm text-text-muted ml-1">
                            {cs.resultNote}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary">{cs.quote}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cs.processes.map((p) => (
                        <span
                          key={p}
                          className="text-xs px-2.5 py-1 rounded-full bg-bg-secondary text-text-secondary"
                        >
                          {p}
                        </span>
                      ))}
                      {cs.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full text-text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* その他実績（カード型） */}
          <div className="mb-16">
            <h2
              className="text-xs font-medium tracking-widest uppercase text-text-muted mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              その他の実績
            </h2>
            <StaggerContainer className="space-y-4">
              {aiOtherProjects.map((project) => (
                <StaggerItem key={project.title}>
                  <details className="group rounded-xl border border-border bg-bg-card transition-colors duration-200 hover:border-border-light">
                    <summary className="cursor-pointer p-6 md:p-8 list-none [&::-webkit-details-marker]:hidden">
                      <div className="flex items-start gap-4">
                        <project.icon size={16} className="text-text-muted shrink-0 mt-1" />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline gap-3 mb-1">
                            <h3
                              className="text-base font-bold text-text-primary"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {project.title}
                            </h3>
                            <span
                              className={`text-xs font-medium ${statusStyle[project.status] || "text-text-muted"}`}
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {project.status}
                            </span>
                          </div>
                          <p className="text-sm font-semibold leading-relaxed text-text-primary">
                            {project.highlight}
                          </p>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {project.description}
                          </p>
                          {project.results && (
                            <p className="text-sm font-medium text-text-primary mt-2 sm:whitespace-nowrap">
                              {project.results}
                            </p>
                          )}
                        </div>
                        <span className="text-text-muted text-xs shrink-0 mt-1 transition-transform group-open:rotate-90">▶</span>
                      </div>
                    </summary>
                    {project.detail && (
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                        <div className="pl-8 border-t border-border pt-4">
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {project.detail}
                          </p>
                        </div>
                      </div>
                    )}
                  </details>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <FadeInSection>
            <div className="mb-16 rounded-xl border border-border bg-bg-card p-8 md:p-12 transition-colors duration-200 hover:border-border-light">
              <p
                className="text-xs font-medium tracking-widest uppercase text-text-muted mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                つくる人
              </p>
              <h2
                className="text-2xl font-bold text-text-primary md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Kuwajima Keisuke
              </h2>
              <div className="mt-5 max-w-3xl space-y-3">
                <p className="text-sm leading-relaxed text-text-secondary">
                  現場を見ずに、机上だけで設計しない。
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  大阪の福祉施設にも実際に足を運び、現場の方と一緒に一日の流れを見ながら、どこにAIを入れるべきかを擦り合わせてきました。
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  誰が何に時間を使い、どこで止まり、何が頭の中にしかないのかを見てから、AIの入り方を決めます。
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  要件定義からプロトタイプ実装、定着支援まで一人で完結。
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {makerTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-bg-secondary px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-16">
              <h2
                className="text-xs font-medium tracking-widest uppercase text-text-muted mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                進め方
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-xl border border-border bg-bg-card p-6 md:p-7 transition-colors duration-200 hover:border-border-light"
                  >
                    <p
                      className="text-3xl font-bold text-text-muted/70"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.number}
                    </p>
                    <h3
                      className="mt-4 text-base font-bold text-text-primary"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(248,248,247,0.92),rgba(255,255,255,1))] px-6 py-8 md:px-8 md:py-9">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <h2
                    className="text-2xl font-bold tracking-tight text-text-primary md:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    「何を作るべきかわからない」——それが、ちょうどいいタイミングです。
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    業務フローを聞かせてもらえれば、最初の一手を一緒に決めます。PoCだけ、相談だけでも大丈夫です。
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-text-primary px-7 py-3.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  LINEで相談する
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </FadeInSection>
          </motion.div>
        )}

        {/* ===== SNS運用セクション ===== */}
        {activeTab === "sns" && (
          <motion.div
            key="sns"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
          <div className="space-y-16">
            <FadeInSection>
              <div className="rounded-2xl border border-border bg-bg-card px-5 py-5 md:px-6">
                <p
                  className="text-xs font-medium tracking-widest uppercase text-text-muted mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  設計力の証明
                </p>
                <p className="text-sm font-semibold leading-relaxed text-text-primary">
                  SNSでも、勝ち筋を人の勘ではなく設計として残してきました。
                </p>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  何が刺さるかを言語化し、再現できる形にした結果が170万フォロワーです。業務AIでも同じく、判断基準を人ではなく仕組みに残します。
                </p>
              </div>
            </FadeInSection>

            {/* 実績サマリー */}
            <div className="grid gap-6 sm:grid-cols-3">
              {snsStats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl md:text-4xl font-bold text-text-secondary mb-1 sm:whitespace-nowrap"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* 代表事例（ストーリー型） */}
            <div className="space-y-6">
              {snsCaseStudies.map((cs, i) => (
                <FadeInSection key={cs.title} delay={i * 0.08}>
                  <div className="rounded-xl border border-border bg-bg-card p-8 md:p-12 transition-colors duration-200 hover:border-border-light">
                    <div className="flex items-center gap-3 mb-8">
                      <cs.icon size={18} className="text-text-muted" />
                      <h3
                        className="text-xl font-bold text-text-primary"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {cs.title}
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="space-y-6">
                        <div>
                          <p className="text-xs font-medium text-text-muted mb-2">背景</p>
                          <p className="text-sm text-text-secondary leading-relaxed">{cs.background}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-text-muted mb-2">課題</p>
                          <p className="text-sm text-text-secondary leading-relaxed">{cs.challenge}</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <p className="text-xs font-medium text-text-muted mb-2">アプローチ</p>
                          <p className="text-sm text-text-secondary leading-relaxed">{cs.approach}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-text-muted mb-2">設計のこだわり</p>
                          <p className="text-sm text-text-secondary leading-relaxed">{cs.design}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <div className="mb-6">
                        <div
                          className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2 sm:whitespace-nowrap"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          <span className="text-2xl md:text-3xl font-bold text-text-muted line-through decoration-1">
                            {cs.resultBefore}
                          </span>
                          <span className="text-text-muted text-xl">→</span>
                          <span className="text-4xl md:text-5xl font-bold text-text-primary">
                            {cs.resultAfter}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary">{cs.quote}</p>
                      </div>

                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {cs.roles.map((role) => (
                            <span
                              key={role}
                              className="text-xs px-2.5 py-1 rounded-full bg-bg-secondary text-text-secondary"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 shrink-0 md:ml-4">
                          {cs.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-muted hover:text-text-primary transition-colors"
                              aria-label={link.type}
                            >
                              {link.type === "youtube" && <YouTubeIcon size={18} />}
                              {link.type === "tiktok" && <TikTokIcon size={18} />}
                              {link.type === "instagram" && <InstagramIcon size={18} />}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            {/* その他のチャンネル */}
            <div>
              <h2
                className="text-xs font-medium tracking-widest uppercase text-text-muted mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                その他のチャンネル
              </h2>
              <StaggerContainer className="space-y-4">
                {snsOtherChannels.map((channel) => (
                  <StaggerItem key={channel.name}>
                    <div className="rounded-xl border border-border bg-bg-card p-6 md:p-8 transition-colors duration-200 hover:border-border-light">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-baseline gap-3 mb-1">
                            <h3
                              className="text-base font-bold text-text-primary"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {channel.name}
                            </h3>
                            {channel.subscribers && (
                              typeof channel.subscribers === "string" ? (
                                <span className="text-sm text-text-secondary">
                                  {channel.subscribers}
                                </span>
                              ) : (
                                <span className="text-xs text-text-secondary">
                                  {(channel.subscribers as string[]).join(" / ")}
                                </span>
                              )
                            )}
                          </div>
                          <p className="text-xs text-text-muted">{channel.period}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {channel.youtube && (
                            <a href={channel.youtube} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label={`${channel.name} YouTube`}>
                              <YouTubeIcon size={16} />
                            </a>
                          )}
                          {channel.tiktok && (
                            <a href={channel.tiktok} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label={`${channel.name} TikTok`}>
                              <TikTokIcon size={16} />
                            </a>
                          )}
                          {channel.instagram && (
                            <a href={channel.instagram} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors" aria-label={`${channel.name} Instagram`}>
                              <InstagramIcon size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                      {channel.roles.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {channel.roles.map((role) => (
                            <span key={role} className="text-xs px-2.5 py-1 rounded-full bg-bg-secondary text-text-secondary">
                              {role}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}
