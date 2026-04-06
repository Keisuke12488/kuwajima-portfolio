"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  ArrowRight,
  Clock,
  Target,
  Zap,
  Users,
} from "lucide-react";

const stats = [
  { before: "120分", after: "10分", label: "福祉施設の記録業務を自動化" },
  { before: "10時間", after: "10分", label: "広告シナリオ制作を仕組み化" },
  { before: null, after: "7+", label: "業界横断のAI構築実績" },
  { before: null, after: "170万+", label: "SNSでも再現した設計力" },
];

const caseStudies = [
  {
    icon: Clock,
    label: "福祉施設AI",
    title: "支援記録の自動化",
    challengeLead: "大阪の福祉施設へ実際に足を運ぶと、手書き記録に毎日2時間かかっていた。",
    challenge: "提出用フォーマットへの転記にもさらに時間がかかり、しかも新しいツールを増やすやり方は現場に定着しにくかった。",
    approachLead: "現場の方とすり合わせながら、今のやり方のまま使える形を探した。",
    approach: "SlackやLINEの延長で使える形に絞り、URLを開いて確認して少し直すだけの流れに落とし込んだ。",
    resultBefore: "120分",
    resultAfter: "10分",
    quote: "「これだったらできるわね」と現場スタッフから即日評価。",
  },
  {
    icon: Target,
    label: "広告シナリオAI",
    title: "クリエイティブ制作の仕組み化",
    challengeLead: "シナリオ制作に毎回10時間。訴求の当て方が個人の勘に寄っていた。",
    challenge: "どの見せ方・映像パターン・シナリオ構成が成果に繋がるか、体系的に整理されていなかった。",
    approachLead: "過去データから勝ちパターンを抽出し、再現できる形に落とし込んだ。",
    approach: "抽出したパターンをDB化し、商材情報を入れると最適なシナリオを出力できる専用AIを構築。",
    resultBefore: "10時間",
    resultAfter: "10分",
    quote: "少し手直しするだけで、数十本のシナリオを30分で完成できる体制に。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <span
              className="inline-block text-xs font-medium tracking-widest uppercase text-text-muted mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              業務AI構築
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8 text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            今<span className="tracking-[-0.1em]">、</span>あの人が
            <span className="text-[#999999]">抜けたら</span>
            <br />
            終わる<span className="tracking-[-0.1em]">。</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl font-bold text-text-primary max-w-2xl mx-auto mb-14"
            style={{ fontFamily: "var(--font-display)" }}
          >
            その不安、仕組みで消せます
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-text-primary hover:opacity-80 transition-opacity duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span>まず相談する</span>
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-text-secondary border border-border-light hover:border-text-muted transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              実績を見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-24 px-6 border-t border-border">
        <StaggerContainer className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="mb-2 sm:whitespace-nowrap" style={{ fontFamily: "var(--font-display)" }}>
                {stat.before ? (
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-text-muted line-through decoration-1">
                      {stat.before}
                    </span>
                    <span className="text-text-muted text-lg">→</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                      {stat.after}
                    </span>
                  </div>
                ) : (
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-secondary">
                    {stat.after}
                  </p>
                )}
              </div>
              <p className="text-xs text-text-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeInSection>
            <p
              className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              導入事例
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              止まっていた業務を、回る仕組みに変える。
            </h2>
            <p className="text-text-secondary max-w-xl mb-20">
              作って終わりではなく、現場で続く形まで設計します。
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <FadeInSection key={cs.label} delay={i * 0.08}>
                <div className="rounded-xl border border-border bg-bg-card p-8 md:p-12 transition-colors duration-200 hover:border-border-light h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <cs.icon size={18} className="text-text-muted" />
                    <div>
                      <p className="text-xs text-text-muted">{cs.label}</p>
                      <h3
                        className="text-lg font-bold text-text-primary"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {cs.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-text-secondary leading-relaxed flex-1">
                    <div>
                      <p className="text-xs font-medium text-text-muted mb-1">課題</p>
                      <p className="font-semibold text-text-primary mb-1">{cs.challengeLead}</p>
                      <p>{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-text-muted mb-1">設計</p>
                      <p className="font-semibold text-text-primary mb-1">{cs.approachLead}</p>
                      <p>{cs.approach}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <div
                      className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2 sm:whitespace-nowrap"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <span className="text-2xl md:text-3xl font-bold text-text-muted line-through decoration-1">
                        {cs.resultBefore}
                      </span>
                      <span className="text-text-muted text-xl">→</span>
                      <span className="text-3xl md:text-4xl font-bold text-text-primary">
                        {cs.resultAfter}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">{cs.quote}</p>
                  </div>

                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-text-secondary transition-colors mt-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    詳しく見る
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROOF OF DESIGN (SNS) ===== */}
      <section className="py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <FadeInSection>
            <p
              className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              設計力の証明
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SNSでも、勝ち筋を仕組みにしてきた。
            </h2>
            <p className="text-text-secondary max-w-2xl mb-16">
              何が刺さるかを言語化し、再現できる運用に落とした結果が170万フォロワーです。
              AI構築でも同じく、判断基準を人ではなく仕組みに残します。
            </p>
          </FadeInSection>

          <StaggerContainer className="grid gap-5 sm:grid-cols-3 sm:gap-8">
            {[
              { value: "170万+", label: "総フォロワー" },
              { value: "6+", label: "チャンネル運用" },
              { value: "55万人", label: "最大チャンネル規模" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="rounded-xl border border-border bg-bg-card px-5 py-6">
                  <p
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-secondary mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-xs sm:text-sm text-text-muted">{item.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-40 px-6">
        <FadeInSection>
          <div className="mx-auto max-w-3xl">
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              まず、止まりやすい業務を
              <br />
              聞かせてください。
            </h2>
            <p className="text-text-secondary mb-12">
              「どこから手をつけるべきか分からない」でも大丈夫です。
              <br className="hidden sm:block" />
              業務を聞いて、最初に残すべき判断基準を一緒に整理します。
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-3.5 rounded-full text-sm font-semibold text-white bg-text-primary hover:opacity-80 transition-opacity duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span>無料で相談する</span>
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
