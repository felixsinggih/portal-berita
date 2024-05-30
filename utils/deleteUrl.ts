export default function deleteUrl(url: string) {
  const deleteUrl = [
    '/',
    '/terkini/',
    '/search',
    '/terpopuler',
    '/seputar-pemilu-2024',
    '/tanpa-jaminan-ini-3-pinjaman-onlie-tenor-24-bulan-jadi-solusi-saat-butuh-dana-cepat',
    '/punya-banyak-keuntungan-ini-syarat-dan-alur-pendaftaran-nuptk-guru-2023',
  ]

  if (url.startsWith('/category/') || deleteUrl.includes(url))
    return false

  if (url.startsWith('/tag/') || deleteUrl.includes(url))
    return false

  return true
}
