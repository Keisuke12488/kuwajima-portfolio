"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import {
  Brain,
  Megaphone,
  ArrowRight,
  Building2,
  FileText,
  Home as HomeIcon,
  BarChart3,
} from "lucide-react";

const aiFields = [
  { icon: Building2, label: "福祉AI", desc: "支援記録の自動生成", color: "#10b981" },
  { icon: FileText, label: "税務AI", desc: "OCR×帳票処理の効率化", color: "#6366f1" },
  { icon: HomeIcon, label: "不動産AI", desc: "業務プロセスのAI化", color: "#f59e0b" },
  { icon: BarChart3, label: "広告AI", desc: "レポート自動化", color: "#ef4444" },
];

const stats = [
  { value: "170万+", label: "総フォロワー" },
  { value: "7+", label: "AI構築実績" },
  { value: "6+", label: "SNSチャンネル運用" },
  { value: "700H+", label: "累計削減時間" },
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
              AI × SNS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8 text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            あなた<span className="text-[#999999]">専用の</span>
            <br />
            テクノロジーを。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-14"
          >
            AIの事業実装とSNS戦略設計の二刀流。
            <br className="hidden sm:block" />
            構想から実装まで、ビジネスの成長を一気通貫でサポート。
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
              <span>お問い合わせ</span>
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
              <p
                className="text-5xl md:text-6xl font-bold text-text-secondary mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ===== DUAL DOMAINS ===== */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeInSection>
            <p
              className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Two Domains
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ふたつの武器で、事業を動かす。
            </h2>
            <p className="text-text-secondary max-w-xl mb-20">
              AIで業務を自動化し、SNSで認知を拡大する。
              テクノロジーとマーケティング、両輪で事業成長を設計します。
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AI Domain */}
            <FadeInSection>
              <div className="rounded-xl border border-border bg-bg-card p-8 md:p-12 transition-colors duration-200 hover:border-border-light">
                <div className="flex items-center gap-3 mb-6">
                  <Brain size={18} className="text-[#3b82f6]" />
                  <h3
                    className="text-lg font-bold text-text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    AI事業化
                  </h3>
                </div>

                <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                  業界の業務フローを理解し、AIで本質的な課題を解決する。
                  PoC設計から本番実装まで、事業に実装可能なAIを構築します。
                </p>

                <div className="space-y-3">
                  {aiFields.map((field) => (
                    <div
                      key={field.label}
                      className="flex items-center gap-3"
                    >
                      <field.icon size={14} className="shrink-0" style={{ color: field.color }} />
                      <div className="flex items-baseline gap-2">
                        <p className="text-sm font-medium text-text-primary">{field.label}</p>
                        <p className="text-xs text-text-muted">{field.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* SNS Domain */}
            <FadeInSection delay={0.08}>
              <div className="rounded-xl border border-border bg-bg-card p-8 md:p-12 transition-colors duration-200 hover:border-border-light">
                <div className="flex items-center gap-3 mb-6">
                  <Megaphone size={18} className="text-[#f59e0b]" />
                  <h3
                    className="text-lg font-bold text-text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    SNS設計
                  </h3>
                </div>

                <p className="text-text-secondary text-sm mb-8 leading-relaxed">
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
                      className="flex items-center gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-text-muted shrink-0" />
                      <p className="text-sm font-medium text-text-primary">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT TEASER ===== */}
      <section className="py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <FadeInSection>
            <div className="md:flex md:items-start md:justify-between md:gap-16">
              <div className="md:max-w-md">
                <span
                  className="inline-block text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Product — PoC募集中
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Welza
                </h2>
              </div>
              <div className="md:flex-1 md:pt-12">
                <p className="text-text-secondary mb-8">
                  AIがチェックワークフローを丸ごと設計・運用。
                  チーム間の品質管理を、属人化から仕組みに変える。
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
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
      <section className="py-40 px-6">
        <FadeInSection>
          <div className="mx-auto max-w-3xl">
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              一緒に、事業を動かしませんか？
            </h2>
            <p className="text-text-secondary mb-12">
              AI導入のご相談も、SNS戦略のご相談も、お気軽にどうぞ。
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-3.5 rounded-full text-sm font-semibold text-white bg-text-primary hover:opacity-80 transition-opacity duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span>お問い合わせ</span>
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
