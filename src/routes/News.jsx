const News = () => {
  return (
    <section className="flex flex-col justify-center h-screen items-center overflow-hidden">
      <h1 className="text-4xl font-bold text-orange-600 text-center mt-6">
        Siguenos en Facebook
      </h1>
      <h2 className="text-orange-500 text-3xl font-semibold text-center mb-8">
        Para estar al dia con nuestras publicaciones
      </h2>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhogarparaancianoshilosdeplata%3Flocale%3Des_LA&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="500"
        height="500"
        style={{ border: "none", overflow: "scroll" }}
        scrolling="yes"
        frameBorder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
};

export default News;
