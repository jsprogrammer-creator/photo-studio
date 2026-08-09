import type { Product } from './data'

type Text = Record<string, string>

export default function DetailPage({ product, t, lang, add, go }: { product?: Product; t: Text; lang: 'ru' | 'en'; add: (id: string) => void; go: (path: string) => void }) {
  const money = (value: number) => new Intl.NumberFormat(lang === 'ru' ? 'ru-RU' : 'en-US', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(value)
  if (!product) return <section className="notfound"><h1>404</h1><button className="button" onClick={() => go('/')}>{t.back}</button></section>
  return <section className="detail"><button className="back" onClick={() => go('/')}>← {t.back}</button><div className="detail-grid"><div className="detail-art" style={{ background: product.hue }}><i>{product.accent}</i><strong>{product.title.slice(0, 1)}</strong></div><div><p className="eyebrow">{t[product.category]}</p><h1>{product.title}</h1><p className="lead">{lang === 'en' ? product.descriptionEn : product.description}</p><p>★ {product.rating} / {money(product.price)}</p><button className="button" onClick={() => add(product.id)}>{t.add}</button></div></div></section>
}
