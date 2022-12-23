export default function SecRegional() {
  return (
    <section className="mt-10 md:mt-20 relative" id="regional">
      <div className="container mx-auto justify-center text-center flex flex-wrap">
        <h2 className="font-bold text-4xl font-mulish mb-5">REGIONAL</h2>
      </div>
      <div className="bg-white">
        <iframe className="w-full aspect-video" src="https://datastudio.google.com/embed/reporting/3087343f-c6c5-4ae0-ac9a-7acf17edf122/page/aKN8C" frameBorder="0"></iframe>
      </div>
      <style>
        {`
        .aspect-video {
            aspect-ratio: 16 / 7 !important;
        }
        `}
      </style>
    </section>
  )
}