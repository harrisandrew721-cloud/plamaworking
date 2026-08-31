import { useEffect, useState } from "react";
import { MessageCircle, Phone, Mail, MessageSquare, Star, X } from "lucide-react";

const PHONE = "0452588578";
const EMAIL = "plama.pro@outlook.com";
const REVIEW_URL = "https://share.google/vjpKSwhqAbGwSUbpD";
const CHATBOT_URL =
  "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/07/09/14/20260709142042-JXWM9FWC.json";

export function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewDismissed, setReviewDismissed] = useState(true);

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && sessionStorage.getItem("review_dismissed");
    if (dismissed) return;
    setReviewDismissed(false);
    const t = setTimeout(() => setReviewOpen(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const dismissReview = () => {
    setReviewOpen(false);
    setReviewDismissed(true);
    try {
      sessionStorage.setItem("review_dismissed", "1");
    } catch {}
  };

  return (
    <>
      {/* Left side: review badge popup */}
      {!reviewDismissed && (
        <div className="fixed bottom-5 left-5 z-[60] max-w-[280px]">
          {reviewOpen ? (
            <div className="relative rounded-2xl bg-white shadow-2xl border border-black/5 p-4 animate-in fade-in slide-in-from-bottom-4">
              <button
                onClick={dismissReview}
                aria-label="Dismiss"
                className="absolute top-2 right-2 rounded-full p-1 text-[var(--ink-soft)] hover:bg-black/5"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">Google Reviews</div>
                  <div className="flex items-center gap-0.5 text-[var(--accent-orange)]">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-[var(--ink)] leading-snug">
                Enjoyed working with us? A short Google review helps other clients find Plama.
              </p>
              <a
                href={REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center w-full rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-medium text-white hover:bg-[var(--accent-orange)] transition"
              >
                Leave a review
              </a>
            </div>
          ) : (
            <button
              onClick={() => setReviewOpen(true)}
              aria-label="Leave a Google review"
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-[var(--brand)] shadow-lg border border-black/5 hover:bg-[var(--brand)] hover:text-white transition"
            >
              <Star className="h-5 w-5" />
            </button>
          )}
        </div>
      )}

      {/* Right side: floating action stack */}
      <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
        <FloatingBtn href={`tel:${PHONE}`} label="Call" icon={<Phone className="h-5 w-5" />} bg="bg-emerald-600" />
        <FloatingBtn href={`sms:${PHONE}`} label="SMS" icon={<MessageSquare className="h-5 w-5" />} bg="bg-sky-600" />
        <FloatingBtn href={`mailto:${EMAIL}`} label="Email" icon={<Mail className="h-5 w-5" />} bg="bg-[var(--accent-orange)]" />
        <button
          onClick={() => setChatOpen((v) => !v)}
          aria-label={chatOpen ? "Close chat" : "Open chat"}
          className="grid h-14 w-14 place-items-center rounded-full bg-[var(--brand)] text-white shadow-xl hover:bg-[var(--accent-orange)] transition"
        >
          {chatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      {/* Chatbot iframe */}
      {chatOpen && (
        <div className="fixed bottom-24 right-5 z-[59] w-[min(380px,calc(100vw-2.5rem))] h-[min(600px,calc(100vh-8rem))] rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-white animate-in fade-in slide-in-from-bottom-4">
          <iframe
            src={CHATBOT_URL}
            title="Plama chatbot"
            className="w-full h-full border-0"
            allow="microphone"
          />
        </div>
      )}
    </>
  );
}

function FloatingBtn({
  href,
  label,
  icon,
  bg,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`group relative grid h-12 w-12 place-items-center rounded-full ${bg} text-white shadow-lg hover:scale-105 transition`}
    >
      {icon}
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-[var(--ink)] px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
        {label}
      </span>
    </a>
  );
}
