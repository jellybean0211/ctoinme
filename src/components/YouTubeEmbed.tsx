function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export { YouTubeEmbed }
