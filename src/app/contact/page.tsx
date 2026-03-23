"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import { MessageCircle, Mail, ArrowRight, Brain, Megaphone, HelpCircle } from "lucide-react";

const consultationTypes = [
  {
    icon: Brain,
    title: "AI導入のご相談",
    desc: "業務のAI化、PoC構築、プロダクト開発など",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Megaphone,
    title: "SNS戦略のご相談",
    desc: "コンテンツ戦略、ブランディング、運用支援など",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
  },
  {
    icon: HelpCircle,
    title: "その他のご相談",
    desc: "まだ具体的に決まっていなくてもOKです",
    color: "text-text-secondary",
    bg: "bg-bg-primary",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeInSection>
          <p
            className="text-sm font-medium tracking-wide uppercase text-accent-blue mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            お問い合わせ
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-16">
            「まだ具体的に決まっていない」という段階でも大丈夫です。
            <br />
            お気軽にご相談ください。
          </p>
        </FadeInSection>

        {/* Consultation Types */}
        <StaggerContainer className="grid sm:grid-cols-3 gap-4 mb-16">
          {consultationTypes.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-lg border border-border bg-bg-secondary p-6 h-full">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bg} mb-4`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <h3
                  className="text-sm font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* LINE CTA - Main */}
        <FadeInSection>
          <div className="rounded-xl border border-border bg-bg-secondary overflow-hidden">
            <div className="p-10 md:p-14">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#06C755" }}>
                  <MessageCircle size={24} className="text-white" />
                </div>
                <h2
                  className="text-2xl md:text-3xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  LINEでお気軽にご相談ください
                </h2>
              </div>
              <p className="text-text-secondary mb-8 max-w-lg">
                友だち追加後、ご相談内容をメッセージでお送りください。
                通常24時間以内に返信いたします。
              </p>
              <a
                href="https://line.me/ti/p/8yg5v22ilf"
                className="group inline-flex items-center gap-3 px-10 py-4 rounded-lg text-base font-bold text-white transition-all duration-300 hover:opacity-90"
                style={{
                  fontFamily: "var(--font-display)",
                  backgroundColor: "#06C755",
                }}
              >
                <MessageCircle size={20} />
                LINE で相談する
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <p className="text-xs text-text-muted mt-4">
                ※ LINEの友だち追加ページに移動します
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Email alternative */}
        <FadeInSection>
          <div className="mt-6 rounded-lg border border-border bg-bg-secondary p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent-blue/10">
                <Mail size={18} className="text-accent-blue" />
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  メールでのお問い合わせ
                </p>
                <p className="text-xs text-text-secondary">
                  LINEが難しい場合はメールでも受け付けています
                </p>
              </div>
            </div>
            <a
              href="mailto:kei4733.88@gmail.com"
              className="text-sm font-medium text-accent-blue hover:text-accent-blue-light transition-colors whitespace-nowrap"
              style={{ fontFamily: "var(--font-display)" }}
            >
              メールを送る →
            </a>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
