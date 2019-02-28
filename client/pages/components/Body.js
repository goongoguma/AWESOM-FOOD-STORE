import * as React from "react";

const Body = () => {
  return (
    <div className="body-groups">
      <h2>Our Motto</h2>
      <div className="section-wrapper">
        <section>
          <h4>EAT</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </section>
        <section>
          <h4>PRAY</h4>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
        </section>
        <section>
          <h4>LOVE</h4>
          <p>
            Ao contrário da crença popular, o Lorem Ipsum não é simplesmente
            texto aleatório. Tem raízes numa peça de literatura clássica em
            Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard
            McClintock, um professor de Latim no Colégio Hampden-Sydney, na
            Virgínia, procurou uma das palavras em Latim mais obscuras.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Body;
