"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  Brain,
  Megaphone,
  ArrowRight,
  Zap,
  Building2,
  FileText,
  Home as HomeIcon,
  BarChart3,
} from "lucide-react";

const aiFields = [
  { icon: Building2, label: "福祉AI", desc: "支援記録の自動生成" },
  { icon: FileText, label: "税務AI", desc: "OCR×帳票処理の効率化" },
  { icon: HomeIcon, label: "不動産AI", desc: "業務プロセスのAI化" },
  { icon: BarChart3, label: "広告AI", desc: "レポート自動化" },
];

const stats = [
  { value: "170万+", label: "総フォロワー" },
  { value: "7+", label: "AI構築実績" },
  { value: "6+", label: "SNSチャンネル運用" },
  { value: "700+", label: "累計削減時間（時間）" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
        {/* Ambient orbs — 控えめに */}
        <div
          className="absolute top-1/3 -left-48 w-72 h-72 rounded-full blur-[140px] opacity-10"
          style={{ background: "var(--color-accent-blue)" }}
        />
        <div
          className="absolute bottom-1/3 -right-48 w-64 h-64 rounded-full blur-[140px] opacity-[0.06]"
          style={{ background: "var(--color-accent-blue-light)" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <span
              className="inline-block text-sm font-medium tracking-wide uppercase text-text-secondary mb-6 px-4 py-1.5 rounded-full border border-border"
              style={{ fontFamily: "var(--font-display)" }}
            >
              AI × SNS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            テクノロジーで
            <br />
            <span className="gradient-text">事業を加速させる。</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12"
          >
            AIの事業実装とSNS戦略設計の二刀流。
            <br className="hidden sm:block" />
            構想から実装まで、ビジネスの成長を一気通貫でサポート。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold text-white bg-accent-blue hover:bg-accent-blue-light transition-colors duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span>お問い合わせ</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-medium text-text-secondary border border-border hover:border-border-light hover:text-text-primary transition-all duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              実績を見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== DUAL DOMAINS ===== */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeInSection>
            <p
              className="text-sm font-medium tracking-wide uppercase text-accent-blue mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Two Domains
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ふたつの武器で、事業を動かす。
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mb-16">
              AIで業務を自動化し、SNSで認知を拡大する。
              テクノロジーとマーケティング、両輪で事業成長を設計します。
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AI Domain */}
            <FadeInSection>
              <div className="rounded-lg border border-border bg-bg-secondary p-8 md:p-10 transition-all duration-300 hover:border-border-light">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent-blue/10">
                    <Brain size={20} className="text-accent-blue" />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    AI事業化
                  </h3>
                </div>

                <p className="text-text-secondary mb-8">
                  業界の業務フローを理解し、AIで本質的な課題を解決する。
                  PoC設計から本番実装まで、事業に実装可能なAIを構築します。
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {aiFields.map((field) => (
                    <div
                      key={field.label}
                      className="flex items-center gap-2.5 p-3 rounded-md bg-bg-primary/50 border border-border/50"
                    >
                      <field.icon size={16} className="text-accent-blue shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{field.label}</p>
                        <p className="text-xs text-text-muted">{field.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* SNS Domain */}
            <FadeInSection delay={0.12}>
              <div className="rounded-lg border border-border bg-bg-secondary p-8 md:p-10 transition-all duration-300 hover:border-border-light">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent-purple/10">
                    <Megaphone size={20} className="text-accent-purple" />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    SNS設計
                  </h3>
                </div>

                <p className="text-text-secondary mb-8">
                  6チャンネル・総フォロワー170万人超の運用実績。
                  アルゴリズムの構造を理解した上で、
                  コンテンツ戦略とブランド設計をトータルで支援します。
                </p>

                <div className="space-y-3">
                  {[
                    "コンテンツ戦略設計",
                    "SNSブランディング",
                    "アルゴリズム最適化",
                    "運用・分析サポート",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-3 rounded-md bg-bg-primary/50 border border-border/50"
                    >
                      <Zap size={14} className="text-accent-purple shrink-0" />
                      <p className="text-sm font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 px-6">
        <StaggerContainer className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <p
                className="text-4xl md:text-5xl font-extrabold text-accent-blue mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-text-secondary">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ===== PRODUCT TEASER ===== */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeInSection>
            <div className="rounded-lg border-l-2 border-l-accent-blue border border-border bg-bg-secondary overflow-hidden">
              <div className="p-10 md:p-16">
                <span
                  className="inline-block text-xs font-medium tracking-wide uppercase text-accent-blue mb-4 px-3 py-1 rounded-md border border-accent-blue/20 bg-accent-blue/5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Product — PoC募集中
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Welza
                </h2>
                <p className="text-text-secondary text-lg max-w-xl mb-8">
                  AIがチェックワークフローを丸ごと設計・運用。
                  チーム間の品質管理を、属人化から仕組みに変える。
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-accent-blue-light transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  PoC参加のご相談
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-36 px-6">
        <FadeInSection>
          <div className="mx-auto max-w-3xl">
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              一緒に、事業を動かしませんか？
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              AI導入のご相談も、SNS戦略のご相談も、お気軽にどうぞ。
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-lg text-sm font-semibold text-white bg-accent-blue hover:bg-accent-blue-light transition-colors duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span>お問い合わせ</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
