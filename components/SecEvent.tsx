import Script from 'next/script';

export default function SecEvent() {
  return (
    <section className="mt-10 md:mt-20 relative" id="event">
      <div className="container mx-auto justify-center text-center flex flex-wrap">
        <h2 className="font-bold text-4xl font-mulish">EVENT</h2>
      </div>
      <div className="h-screen bg-white">
        <Script src="https://embedsocial.com/js/iframe.js"></Script>
        <iframe className="rounded-xl w-full h-full" scrolling="no" src="https://embedsocial.com/api/pro_hashtag/32e6f83904d726ad3d5ae2208ac825ba3bb52fbf"></iframe>
        <script>iFrameResize();</script>
      </div>
    </section>
    
  );
}
