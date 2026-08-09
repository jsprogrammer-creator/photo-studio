import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => { const el = ref.current; if (!el) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target) } }, { threshold: .12 }); observer.observe(el); return () => observer.disconnect() }, [])
  return { ref, visible }
}

export function useFocusTrap(open: boolean, close: () => void) {
  const ref = useRef<HTMLElement | null>(null)
  const closeRef = useRef(close)
  useEffect(() => { closeRef.current = close }, [close])
  useEffect(() => { if (!open) return; const old = document.activeElement as HTMLElement; const node = ref.current; node?.querySelector<HTMLElement>('button, a, input, select, [tabindex]:not([tabindex="-1"])')?.focus(); const key = (e: KeyboardEvent) => { if (e.key === 'Escape') closeRef.current(); if (e.key === 'Tab' && node) { const list = [...node.querySelectorAll<HTMLElement>('button, a, input, select, [tabindex]:not([tabindex="-1"])')]; if (!list.length) return; const first = list[0], last = list[list.length - 1]; if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() } else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() } } }; document.addEventListener('keydown', key); return () => { document.removeEventListener('keydown', key); old?.focus() } }, [open])
  return ref
}
