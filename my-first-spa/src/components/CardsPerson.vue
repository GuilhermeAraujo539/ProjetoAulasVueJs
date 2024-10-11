<template>
  <div v-for="(item, index) in persons" :key="index" class="card-client">
    <div class="user-picture">
      <img :src=item.image alt="">
    </div>
    <p class="name-client"> {{ item.name }}
      <span style="font-weight: 400; margin-top: 20px;">{{ item.age }} anos
      </span>
      <span style="margin-top: 20px; font-weight: 600;">"{{ item.phrase }}"
      </span>
    </p>
    <div class="social-media">
      <a :href=item.gitHub>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100px" height="100px">
          <path
            d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
        </svg>
        <span class="tooltip-social">GitHub</span>
      </a>
      <a :href=item.insta>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
          </path>
        </svg>
        <span class="tooltip-social">Instagram</span>
      </a>

    </div>
  </div>
</template>


<script>
export default {
  name: 'CardsPerson',
  data() {
    return {
      persons: [
        {
          name: 'Joao Diamon', age: 18, phrase: "Pra mim, tudo é um desafio que pode ser descoberto", image: require("../assets/imageDiamon.jpg"), insta: "https://www.instagram.com/joao.diamonzx/", gitHub: "https://github.com/JoaoVitorDiamon"
        },
        { name: 'Gabriel Fontes', age: 17, phrase: "Silêncio e Trabalho", image: require("../assets/imagemFontes.jpg"), insta: "https://www.instagram.com/gfontez/" , gitHub: "https://github.com/gabrielfontesdesousa"},
        { name: 'Gabriela Maris', age: 17, phrase: "A paz é a única forma de nos sentirmos realmente humanos", image: require("../assets/imageGabis.jpg"), insta: "https://www.instagram.com/gabiszzk__/", gitHub: "https://github.com/Gabriella-Kailainy" },
        { name: 'Guilherme Araujo', age: 20, phrase: "A paz é a única forma de nos sentirmos realmente humanos", image: require("../assets/imageGuilherme.jpg"), insta: "https://www.instagram.com/omega_gui/" , gitHub: "https://github.com/GuilhermeAraujo539"},
        { name: 'Gabriel Falavena', age: 17, phrase: "O vazio dentro de mim é como uma xícara de café, esquecida no canto de uma mesa.", image: require("../assets/imageFalavena.jpg"), insta: "https://www.instagram.com/gfalavena._/" , gitHub: "https://github.com/gfalavena"},
        { name: 'Matheus Felipe', age: 18, phrase: "A paz é a única forma de nos sentirmos realmente humanos", image: require("../assets/imageMatheus.jpg"), insta: "https://www.instagram.com/teuvxz/" , gitHub: "https://github.com/matheusrodriguesvxz"},
      ],
    }
  }
}

</script>

<style>
.card-client {
  background: #2cb5a0;
  width: 20rem;
  height: 25rem;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;
  border: 4px solid #7cdacc;
  box-shadow: 0 6px 10px rgba(207, 212, 222, 1);
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
}

.user-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-client:hover {
  transform: translateY(-10px);
}

.user-picture {
  overflow: hidden;
  object-fit: fill;
  width: 5rem;
  height: 5rem;
  border: 4px solid #7cdacc;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}


.name-client {
  margin: 0;
  margin-top: 20px;
  font-weight: 600;
  background-color: transparent;
  font-size: 18px;
}

.name-client span {
  display: block;
  font-weight: 200;
  font-size: 16px;
  background-color: transparent;
}

.social-media:before {
  content: " ";
  display: block;
  width: 100%;
  background-color: transparent;
  height: 2px;
  margin: 20px 0;
  background: #7cdacc;
}

.social-media a {
  position: relative;
  margin-right: 15px;
  text-decoration: none;
  color: inherit;
  background-color: transparent;
}

.social-media {
  background-color: transparent;
}

.social-media a:last-child {
  margin-right: 0;
  background-color: transparent;
}

.social-media a svg {
  width: 1.2em;
  background-color: transparent;
  fill: currentColor;
}

.tooltip-social {
  background: #262626;
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 0.5rem 0.4rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -90%);
  transition: all 0.2s ease;
  z-index: 1;
}

.tooltip-social:after {
  content: " ";
  position: absolute;
  bottom: 1px;
  left: 50%;
  border: solid;
  border-width: 10px 10px 0 10px;
  border-color: transparent;
  transform: translate(-50%, 100%);
}

.social-media a .tooltip-social:after {
  border-top-color: #262626;
}

.social-media a:hover .tooltip-social {
  opacity: 1;
  transform: translate(-50%, -130%);
}
</style>