"use client";

import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import { MessageCircle, Mail, ArrowRight, Brain, Megaphone, HelpCircle } from "lucide-react";

const consultationTypes = [
  {
    icon: Brain,
    title: "AI導入のご相談",
    desc: "業務のAI化、PoC構築、プロダクト開発など",
  },
  {
    icon: Megaphone,
    title: "SNS戦略のご相談",
    desc: "コンテンツ戦略、ブランディング、運用支援など",
  },
  {
    icon: HelpCircle,
    title: "その他のご相談",
    desc: "まだ具体的に決まっていなくてもOKです",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeInSection>
          <p
            className="text-xs font-medium tracking-widest uppercase text-text-muted mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            お問い合わせ
          </h1>
          <p className="text-text-secondary max-w-2xl mb-20">
            「まだ具体的に決まっていない」という段階でも大丈夫です。
            <br />
            お気軽にご相談ください。
          </p>
        </FadeInSection>

        {/* Consultation Types */}
        <StaggerContainer className="grid sm:grid-cols-3 gap-6 mb-20">
          {consultationTypes.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-xl border border-border bg-bg-card p-8 h-full transition-colors duration-200 hover:border-border-light">
                <item.icon size={18} className="text-text-muted mb-5" />
                <h3
                  className="text-sm font-bold mb-1.5 text-text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* LINE CTA */}
        <FadeInSection>
          <div className="border-t border-border pt-16">
            <div className="md:flex md:items-start md:gap-16">
              <div className="md:max-w-sm mb-8 md:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#06C755" }}>
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <h2
                    className="text-xl font-bold tracking-tight text-text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    LINEでご相談
                  </h2>
                </div>
                <p className="text-sm text-text-secondary">
                  友だち追加後、ご相談内容をメッセージでお送りください。
                  通常24時間以内に返信いたします。
                </p>
              </div>
              <div className="md:flex-1 md:pt-1">
                <a
                  href="https://line.me/ti/p/8yg5v22ilf"
                  className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-opacity duration-200 hover:opacity-90"
                  style={{
                    fontFamily: "var(--font-display)",
                    backgroundColor: "#06C755",
                  }}
                >
                  <MessageCircle size={18} />
                  LINE で相談する
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <p className="text-xs text-text-muted mt-3">
                  LINEの友だち追加ページに移動します
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Email */}
        <FadeInSection>
          <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-text-muted" />
              <div>
                <p
                  className="text-sm font-semibold text-text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  メールでのお問い合わせ
                </p>
                <p className="text-xs text-text-muted">
                  LINEが難しい場合はメールでも受け付けています
                </p>
              </div>
            </div>
            <a
              href="mailto:kei4733.88@gmail.com"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
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
