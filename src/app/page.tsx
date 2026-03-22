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
  { value: "7+", label: "AI構築プロジェクト" },
  { value: "120分→10分", label: "記録業務の短縮" },
  { value: "6+", label: "SNSチャンネル運用" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
        {/* Ambient orbs */}
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{ background: "var(--color-accent-blue)" }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[120px] opacity-15"
          style={{ background: "var(--color-accent-purple)" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            AIの事業実装とSNS戦略設計の二刀流。
            <br className="hidden sm:block" />
            構想から実装まで、ビジネスの成長を一気通貫でサポート。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300"
              style={{
                fontFamily: "var(--font-display)",
                background: "linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-purple))",
              }}
            >
              <span className="relative z-10">お問い合わせ</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium text-text-secondary border border-border hover:border-border-light hover:text-text-primary transition-all duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              実績を見る
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-5 h-8 rounded-full border border-text-muted flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-text-muted" />
          </motion.div>
        </motion.div>
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
            <p className="text-text-secondary text-lg max-w-xl mb-16 leading-relaxed">
              AIで業務を自動化し、SNSで認知を拡大する。
              テクノロジーとマーケティング、両輪で事業成長を設計します。
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AI Domain */}
            <FadeInSection>
              <div className="relative group rounded-2xl border border-border bg-bg-card p-8 md:p-10 transition-all duration-500 hover:border-border-light">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-accent-blue" />

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

                <p className="text-text-secondary mb-8 leading-relaxed">
                  業界の業務フローを理解し、AIで本質的な課題を解決する。
                  PoC設計から本番実装まで、事業に実装可能なAIを構築します。
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {aiFields.map((field) => (
                    <div
                      key={field.label}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-bg-primary/50 border border-border/50"
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
            <FadeInSection delay={0.15}>
              <div className="relative group rounded-2xl border border-border bg-bg-card p-8 md:p-10 transition-all duration-500 hover:border-border-light">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-accent-purple" />

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

                <p className="text-text-secondary mb-8 leading-relaxed">
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
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-bg-primary/50 border border-border/50"
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
      <section className="py-24 px-6">
        <StaggerContainer className="mx-auto max-w-4xl grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
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
      <section className="py-40 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeInSection>
            <div className="relative rounded-2xl border border-border bg-bg-card overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 50%, var(--color-accent-blue), transparent 60%), radial-gradient(ellipse at 70% 50%, var(--color-accent-purple), transparent 60%)",
                }}
              />
              <div className="relative p-10 md:p-16 text-center">
                <span
                  className="inline-block text-xs font-medium tracking-wide uppercase text-accent-purple mb-4 px-3 py-1 rounded-full border border-accent-purple/20 bg-accent-purple/5"
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
                <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8 leading-relaxed">
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
      <section className="py-32 px-6">
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              一緒に、
              <span className="gradient-text">事業を動かしませんか？</span>
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              AI導入のご相談も、SNS戦略のご相談も、お気軽にどうぞ。
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300"
              style={{
                fontFamily: "var(--font-display)",
                background:
                  "linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-purple))",
              }}
            >
              <span className="relative z-10">お問い合わせ</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
