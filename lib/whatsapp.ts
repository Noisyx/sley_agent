function normalizePhone(phoneRaw: string) {
  const digits = phoneRaw.replace(/[^\d]/g, "");
  return digits;
}

export function buildWhatsAppLink(options?: {
  phone?: string;
  text?: string;
}) {
  const phone =
    options?.phone ?? process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const text =
    options?.text ?? process.env.NEXT_PUBLIC_WHATSAPP_PREFILL ?? "";

  const normalized = normalizePhone(phone);
  const base = normalized ? `https://wa.me/${normalized}` : "https://wa.me/";
  const qs = text ? `?text=${encodeURIComponent(text)}` : "";
  return `${base}${qs}`;
}

