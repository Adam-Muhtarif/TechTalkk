import NextTopLoader from 'nextjs-toploader'

export default function TopLoader() {
  return (
    <>
      <NextTopLoader
        color="#5E16EC"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 6px rgba(94, 22, 236, 0.6), 0 0 12px rgba(94, 22, 236, 0.5), 0 0 18px rgba(94, 22, 236, 0.4)"
      />
    </>
  )
}
