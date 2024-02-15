`use strict`;
//bar__icon
const nav = document.querySelector(`nav`);
const bar__icon = document.querySelector(`.bar__icon`);
const category = document.querySelector(`.category`);
bar__icon.addEventListener(`click`, function () {
  category.classList.toggle(`category__hidden`);
  // nav.classList.toggle(`nav_bg_color`);
  //bar__icon.classList.toggle(`bar__icon_hidden_color`);
});
//nav bar

const nav_bar = `
<ul>
<li ><a class="link" href="#Home">Home</a></li>
<li ><a class="link" href="#about">About</a></li>
<li ><a class="link" href="#services">Services</a></li>
<li ><a class="link" href="#blog">Blog</a></li>
</ul>
  
    `;
category.insertAdjacentHTML(`afterbegin`, nav_bar);

// animate nav color
const link = document.querySelectorAll(`.link`);
const chick = document.querySelector(`.chick`);
window.addEventListener(`scroll`, animateNav);
//
//chick_for_mobile
const chick_for_mobile = document.querySelector(`.chick_for_mobile`);
window.addEventListener(`scroll`, animateNav);
function animateNav() {
  const x = (window.innerHeight / 4) * 7;
  const triggleheight = chick.getBoundingClientRect().top;
  if (x > triggleheight) {
    nav.classList.add(`nav_bg_color`);
    link.forEach((links) => {
      links.classList.add(`link__color`);
      bar__icon.classList.add(`bar__icon_hidden_color`);
      bar__icon.classList.add(`bar__icon_active`);
    });
  } else {
    nav.classList.remove(`nav_bg_color`);
    link.forEach((links) => {
      links.classList.remove(`link__color`);
      bar__icon.classList.remove(`bar__icon_hidden_color`);
      bar__icon.classList.remove(`bar__icon_active`);
      category.classList.remove(`category__hidden`);
    });
  }
}

//background image
let x = 0;
const background_image = document.querySelector(`.background_image`);

const show = function () {
  if (x === 0) {
    background_image.classList.add(`background_image_second`);
    x++;
  } else {
    background_image.classList.remove(`background_image_second`);

    background_image.classList.add(`background_image_first`);
    x--;
  }
};
setInterval(show, 7000);

//slider__left and Customer__say_content__container
const profile__three = document.querySelector(`.profile__three`);
const profile__one = document.querySelector(`.profile__one`);
const profile__two = document.querySelector(`.profile__two`);
const Customer__say_content__container = document.querySelector(
  `.Customer__say_content__container`
);
const slider__indecate_1 = document.querySelector(`.slider__indecate_1`);
const slider__indecate_2 = document.querySelector(`.slider__indecate_2`);
const slider__indecate_3 = document.querySelector(`.slider__indecate_3`);
const slider__left = document.querySelector(`.slider__left`);
const slider__right = document.querySelector(`.slider__right`);
const slider__indecate = document.querySelector(`.slider__indecate`);
/// right
let count = 0;

slider__right.addEventListener(`click`, function () {
  count--;
  if (count < 0) {
    count = displayLogic.length - 1;
  }
  forLeft();
  console.log(count);
});
/// left
slider__left.addEventListener(`click`, function () {
  count++;

  if (count > displayLogic.length - 1) {
    count = 0;
  }
  forLeft();
  console.log(count);
});

const displayLogic = [0, 1, 2];
//
function forLeft() {
  const show = displayLogic[count];
  if (show === displayLogic[0]) {
    slider__indecate_1.classList.add(`slider__indecate_1_active`);
    slider__indecate_3.classList.remove(`slider__indecate_3_active`);
    slider__indecate_2.classList.remove(`slider__indecate_2_active`);
    profile__three.classList.remove(`profile__three__active`);
    profile__one.classList.remove(`profile__one__active`);
    profile__two.classList.remove(`profile__two__active`);
  } else if (show === displayLogic[1]) {
    slider__indecate_3.classList.remove(`slider__indecate_3_active`);
    slider__indecate_1.classList.remove(`slider__indecate_1_active`);
    slider__indecate_2.classList.add(`slider__indecate_2_active`);
    profile__two.classList.add(`profile__two__active`);
    profile__one.classList.add(`profile__one__active`);
    profile__three.classList.remove(`profile__three__active`);
  } else if (show === displayLogic[2]) {
    slider__indecate_1.classList.remove(`slider__indecate_1_active`);
    slider__indecate_2.classList.remove(`slider__indecate_2_active`);
    slider__indecate_3.classList.add(`slider__indecate_3_active`);
    profile__two.classList.remove(`profile__two__active`);
    profile__three.classList.add(`profile__three__active`);
    profile__one.classList.add(`profile__one__active`);
  } else {
    count === 2;
  }
}
///view__more__btn
const view__more__text = document.querySelector(`.view__more__text`);
const view__less = document.querySelector(`.view__less`);
const Blog__profile__container__section__two = document.querySelector(
  `.Blog__profile__container__section__two`
);
const view__more__btn = document.querySelector(`.view__more__btn`);
view__more__btn.addEventListener(`click`, () => {
  Blog__profile__container__section__two.classList.toggle(
    `Blog__profile__container__section__two`
  );
  //view__more__btn.textContent = `view less`
  view__less.classList.toggle(`view__less`);
  view__more__text.classList.toggle(`view__more__text__active`);
});

// footer
const social__media = document.querySelector(`.social__media`);
const forSocial__media = `
<h1>
          HarvestHub
        </h1>
        <div class="social__media__category">
          <div>
            <h3>Company</h3>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Blog</a>

          </div>
          <div>
            <h3>Socials</h3>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">Linkedin</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="">Hello<br>@<br>Harvesthub</a>
            <a href="">21, Kofo Abayomi , Victoria Island, Lagos.</a>
          </div>

        </div>
        <p>All rights reserved ©2023 HarverstHub</p>


`;
social__media.insertAdjacentHTML(`afterbegin`, forSocial__media);
////////////////////////////////////////////////////////////////////////////////////////////

//choose__section
const our__story__section = document.querySelector(`.our__story__section`);
const forour__story__section = `
<h3>Our Story</h3>
<p>
  HarvestHub was born out of a passion for sustainable agriculture and a
  deep appreciation for the traditional practices that have sustained
  communities for generations. We recognized the need for a platform
  that seamlessly integrates time-tested farming wisdom with the latest
  advancements in technology.
</p>



`;
our__story__section.insertAdjacentHTML(`afterbegin`, forour__story__section);
//////////////////////////////////////////////////////////////////////////////////////////////
const Featured__Services = document.querySelector(`.Featured__Services`);
const forFeatured__Services = `
<h2>Featured Services</h2>
        <div class="Services__container">
          <div class="Services">
            <img class = "services__img"
              src="photo1.png"
              width="100%"
              height="60%"
              alt="photo_1"
              loading="lazy"
            />
            <h3>Precision Farming Tools</h3>
            <p class = "service__text">
              Enhance productivity and reduce waste with our precision farming
              tools. From GPS-guided tractors to sensor-based irrigation
              systems, we have the tools you need for efficient farming.
            </p>
          </div>
          <div class="Services">
            <img class = "services__img"
              src="photo2.jpg"
              width="100%"
              height="60%"
              alt="photo_1"
              loading="lazy"
            />
            <h3>Sustainable Practices Workshops</h3>
            <p class = "service__text">
              Participate in workshops and webinars to learn about the latest
              sustainable farming practices. Stay ahead of the curve and make a
              positive impact on the environment.
            </p>
          </div>
          <div class="Services">
            <img class = "services__img"
              src="photo3.jpg"
              width="100%"
              height="60%"
              alt="photo_1"
              loading="lazy"
            />
            <h3>Crop Monitoring and Analysis</h3>
            <p class = "service__text">
              Utilize cutting-edge technology to monitor crop health, detect
              diseases early, and optimize irrigation schedules. Our advanced
              analytics ensure you stay one step ahead in crop management.
            </p>
          </div>
        </div>

`;
Featured__Services.insertAdjacentHTML(`afterbegin`, forFeatured__Services);
///////////////////////////////////////////////////////////////////////////////////////
//Blog__profile__container
const Blog__profile__container = document.querySelector(
  `.Blog__profile__container`
);
const forBlog__profile__container = `



`;
Blog__profile__container.insertAdjacentHTML(
  `afterbegin`,
  forBlog__profile__container
);

//choose__category
const choose__category = document.querySelectorAll(`.choose__category`);
window.addEventListener(`scroll`, function () {
  const x = (window.innerHeight / 4) * 4;
  choose__category.forEach((choos) => {
    const tagget = choos.getBoundingClientRect().top;
    if (tagget < x) {
      choos.classList.add(`choose__category_active`);
    }
  });
});

// our__story__section

window.addEventListener(`scroll`,function () {
  const x = (window.innerHeight / 4) * 4;
  const tagget = our__story__section.getBoundingClientRect().top;
  if (tagget < x) {
    our__story__section.classList.add(`choose__category_active`)
  }


  
})

//services__img

const service__text = document.querySelectorAll(`.service__text`)
const services__img = document.querySelectorAll(`.services__img`)
console.log(services__img);
window.addEventListener(`scroll`,function () {
  const x = (window.innerHeight / 4) * 4;
  services__img.forEach(img => {
    const tagget = img.getBoundingClientRect().top;
    if (tagget < x) {
      img.classList.add(`services__img__active`)
     
    }
    
  });
})
//service__text
window.addEventListener(`scroll`,function () {
  const x = (window.innerHeight / 4) * 4;
  service__text.forEach(serviceText => {
    const tagget = serviceText.getBoundingClientRect().top;
    if (tagget < x) {
      serviceText.classList.add(`service__text__active`)
     
    }
    
  });
})






