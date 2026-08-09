export type Category = 'portrait' | 'brand' | 'family' | 'event'
export type Product = { id: string; title: string; category: Category; price: number; rating: number; hue: string; description: string; descriptionEn: string; accent: string }

const seed: Omit<Product, 'id'>[] = [
  { title: 'Quiet Portrait', category: 'portrait', price: 6900, rating: 5, hue: '#738c7d', accent: 'portrait in warm daylight', description: 'Часовая портретная сессия с мягким дневным светом.', descriptionEn: 'A one-hour portrait session in soft natural daylight.' },
  { title: 'Faces at Noon', category: 'portrait', price: 8200, rating: 4.9, hue: '#bd8b70', accent: 'sunlit face closeup', description: 'Выразительные портреты для личного архива и медиа.', descriptionEn: 'Expressive portraits for personal archives and editorial use.' },
  { title: 'The New Mark', category: 'brand', price: 12000, rating: 5, hue: '#273d3a', accent: 'editorial desk and objects', description: 'Визуальный язык бренда: предметы, команда, детали.', descriptionEn: 'A visual language for your brand: objects, team, and details.' },
  { title: 'Honest Objects', category: 'brand', price: 9800, rating: 4.8, hue: '#a99d84', accent: 'minimal product composition', description: 'Предметная съемка для каталогов и запусков.', descriptionEn: 'Product photography for catalogues and launches.' },
  { title: 'Sunday Table', category: 'family', price: 7500, rating: 4.9, hue: '#c6735a', accent: 'family meal candid moment', description: 'Живые семейные истории без постановки.', descriptionEn: 'Living family stories without staged poses.' },
  { title: 'Home Film', category: 'family', price: 8900, rating: 4.7, hue: '#71859b', accent: 'family in blue room', description: 'Домашняя съемка с настроением короткого кино.', descriptionEn: 'An at-home session with the mood of a short film.' },
  { title: 'After the Vows', category: 'event', price: 15000, rating: 5, hue: '#554b62', accent: 'evening celebration', description: 'Репортажная съемка событий, где важны эмоции.', descriptionEn: 'Event coverage where the emotion matters most.' },
  { title: 'Small Gathering', category: 'event', price: 11000, rating: 4.8, hue: '#8c805b', accent: 'guests around candle light', description: 'Камерные события, ужины и презентации.', descriptionEn: 'Intimate events, dinners, and presentations.' }
]
export const products: Product[] = Array.from({ length: 40 }, (_, i) => ({ ...seed[i % seed.length], id: `${i + 1}`, price: seed[i % seed.length].price + Math.floor(i / 8) * 600 }))
