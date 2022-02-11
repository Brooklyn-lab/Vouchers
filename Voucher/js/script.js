$(document).ready(function () {
  //---------Loader----------
  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  };

  // ----------- Data based -----------------

  const DATABASE = {
    companies: [
      {
        id: 1,
        title: 'All Beauty',
        logo: './img/companies/allbeauty.png',
        link: 'https://www.allbeauty.com/',
        coupons: [
          {
            id: 1,
            shortText: 'Save Up to 40%',
            header: 'Save Up to 40% RRP',
            description: {
              text: 'Makeup Special Offers',
            },
          },
        ],
      },
      {
        id: 2,
        title: 'B & Q',
        logo: './img/companies/B&Q.png',
        link: 'https://www.diy.com/',
        coupons: [
          {
            id: 1,
            shortText: '20% Off',
            header: 'Get 20% Off',
            description: {
              text: '20% Off for all kitchens* and bathrooms**',
            },
            details: [
              '*When you spent £2,500 on a kitchen',
              '**When you spent £250 on a bathroom',
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Best Buy',
        logo: './img/companies/bestbuy.png',
        link: 'https://www.bestbuy.com/',
        coupons: [
          {
            id: 1,
            shortText: 'Up to $300*',
            header: 'Save Up to $300*',
            description: {
              text: '*on Select laptops with Student Deals',
            },
          },
        ],
      },
      {
        id: 4,
        title: 'Charles & Keith',
        logo: './img/companies/CharlesAndKeith.png',
        link: 'https://www.charleskeith.eu/',
        coupons: [
          {
            id: 1,
            shortText: '15% Off',
            header: 'Get 15% Discount',
            description: {
              title: "Valentine's Day 2022 Collection",
              text: 'Celebrate the season of love with adorable heart-themed accessories',
            },
          },
          {
            id: 2,
            shortText: '10% Off',
            header: 'Get 10% Discount',
            description: {
              title: 'New Arrivals',
              text: 'Show off your style personality with our latest shoes, bags and accessories',
            },
          },
        ],
      },
      {
        id: 5,
        title: 'Deal Extreme (DX)',
        logo: './img/companies/dealextreme.png',
        link: 'https://www.dx.com/',
        coupons: [
          {
            id: 1,
            shortText: '5% Off',
            header: 'Get 5% Off',
            description: {
              text: 'Get up to 35% Off in Flash Deals',
            },
          },
        ],
      },
      {
        id: 6,
        title: 'Dorothy Perkins',
        logo: './img/companies/dorothyperkins.png',
        link: 'https://www.dorothyperkins.com/',
        coupons: [
          {
            id: 1,
            shortText: 'Up to 50% Off',
            header: 'Get up to 50% Off',
            description: {
              text: 'Wear now, layer later <br>Up to 50% Off Trans-Seasonal Staples',
            },
          },
        ],
      },
      {
        id: 7,
        title: 'GhostBed',
        logo: './img/companies/ghostbed.png',
        link: 'https://www.ghostbed.com/',
        coupons: [
          {
            id: 1,
            shortText: '30% Off',
            header: 'Get 30% Off',
            description: {
              text: 'Biggest Flash Sale <br> Mattresses + 2 Luxury Pillows',
            },
          },
        ],
      },
      {
        id: 8,
        title: 'Know Fashion Style',
        logo: './img/companies/knowfashionstyle.png',
        link: 'https://www.knowfashionstyle.com/',
        coupons: [
          {
            id: 1,
            shortText: 'Up to 30% Off',
            header: 'Get Up to 30% Off for Annual Best Sellers',
            description: {
              text: '<ul class="coupon__description"><li>- No Minimum Order</li><li>- Shipping Worldwide</li></ul>',
            },
          },
        ],
      },
      {
        id: 9,
        title: 'Long Tall Sally',
        logo: './img/companies/longtallsally.png',
        link: 'https://www.longtallsally.com/',
        coupons: [
          {
            id: 1,
            shortText: 'Up to 70% Off',
            header: 'Get Up to 70% Off',
            description: {
              text: 'Shop the Outlet with up to 70% off',
            },
          },
        ],
      },
      {
        id: 10,
        title: 'Look Fantastic',
        logo: './img/companies/lookfantastic.png',
        link: 'https://www.lookfantastic.com/',
        coupons: [
          {
            id: 1,
            shortText: 'Save 20%*',
            header:
              'Save 20%*<br> with code: <span class="coupon__text-strong">NEW20</span>',
            description: {
              text: 'Code available for new customers',
            },
            details: ['*Code valid on products in list only.'],
          },
        ],
      },
      {
        id: 11,
        title: 'Marks & Spencer',
        logo: './img/companies/MS.png',
        link: 'https://www.marksandspencer.com/',
        coupons: [
          {
            id: 1,
            shortText: '20% Off',
            header: 'Get 20% Off',
            description: {
              text: 'Get the discount on selected lines',
            },
          },
        ],
      },
      {
        id: 12,
        title: 'Samsonite',
        logo: './img/companies/samsonite.png',
        link: 'https://shop.samsonite.com/',
        coupons: [
          {
            id: 1,
            shortText: '20% Off',
            header:
              '20% Off Site Side <br> Using code: <span class="coupon__text-strong">JOY20</span>',
            description: {
              text: '20% Off for all categories: <br> <ul class="coupon__description"><li>- Luggage</li><li>- Backpacks & bags</li><li>- Accessories</li></ul>',
            },
          },
        ],
      },
      {
        id: 13,
        title: 'Women Secret',
        logo: './img/companies/womensecret.png',
        link: 'https://womensecret.com/',
        coupons: [
          {
            id: 1,
            shortText: '50% Off',
            header: '50% Off on the 2nd item',
            description: {
              text: '<ul class="coupon__description"><li>- Bra</li><li>- Briefs</li><li>- Nightwear & Homewear</li><li>- Accessories</li><li>- Men</li><li>- Maternity</li></ul>',
            },
          },
        ],
      },
      {
        id: 14,
        title: 'Forever21',
        logo: './img/companies/forever21.png',
        link: 'https://www.forever21.com/',
        coupons: [
          {
            id: 1,
            shortText: '17% Off',
            header: 'Get 17% Discount',
            description: {
              title: 'Last chance to get 17% Off',
              text: 'Almost everything',
            },
          },
        ],
      },
      {
        id: 15,
        title: 'Bad Rhino',
        logo: './img/companies/badrhino.png',
        link: 'https://www.badrhino.com/',
        coupons: [
          {
            id: 1,
            shortText: 'Up to 70%',
            header: 'Up to 70% Off Selected Lines',
            description: {
              text: 'Further reductions CLEARANCE',
            },
          },
        ],
      },
      {
        id: 16,
        title: 'Rohan',
        logo: './img/companies/rohan.png',
        link: 'https://www.rohan.co.uk/',
        coupons: [
          {
            id: 1,
            shortText: '50% Off',
            header: 'Get 50% Discount',
            description: {
              text: 'Even more further reductions. The Winter Sale. Many lines 50% Off',
            },
          },
        ],
      },
    ],
  };

  // ---------- Burger ------------

  const burgerShow = $('.burger, .header__nav-wrapper, body');
  $('.header__burger').on('click', () => burgerShow.toggleClass('show'));

  // ---------- Slider -------------

  const swiper = new Swiper('.preview__slider', {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // ----------- goBackButton --------------

  $('#goBack').on('click', () => history.back());

  // ----------------- Resize ------------------------

  const mediaQuery = window.matchMedia('(max-width: 768px)');
  let count = 5;
  mediaQuery.matches ? (count = 5) : (count = 10);

  // --------------------------------------------

  const storesWrapper = $('.preview__stores-body');
  const searchCompanies = [];
  $('#stores-loader').fadeOut();

  // ----------- Stores in home page -----------

  if (DATABASE.companies.length !== 0) {
    DATABASE.companies.map((companyItem, index) => {
      if (index >= count) {
        return;
      } else {
        storesWrapper.append(function () {
          return $('<div></div>', {
            class: 'preview__stores-item',
            'data-id': companyItem.id,
          }).append(function () {
            return $('<img>', {
              src: companyItem.logo,
              alt: companyItem.title,
            });
          });
        });
      }
    });
  } else {
    $('.preview__stores').remove();
  }

  let companyId = localStorage.getItem('companyId');

  const postLicalStorageDataId = function () {
    localStorage.setItem('companyId', $(this).attr('data-id'));
    // подставить в url href с доменом /coupons.html оставляем
    location.href = 'http://localhost:3000/coupons.html';
  };

  storesWrapper.on('click', '.preview__stores-item', postLicalStorageDataId);

  // ---------- All Stores ---------------
  const allStoresWrapper = $('.stores__body');
  let page = 1;
  const limit = 8;

  const getPosts = function (pageArg, arr) {
    const to = pageArg * limit;
    const from = to - limit;
    return arr.slice(from, to);
  };

  window.addEventListener('scroll', () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      page++;
      if (getPosts(page, DATABASE.companies).length !== 0) {
        $('#stores-loader').fadeIn().delay(500).fadeOut();
        $('body').addClass('show');
        setTimeout(() => {
          createAllStoresTemplate(getPosts(page, DATABASE.companies));
          $('body').removeClass('show');
          console.log(DATABASE.companies);
        }, 500);
      } else {
        return;
      }
    }
  });

  const createAllStoresTemplate = (array, isSearch) => {
    if (array.length === 0 && isSearch) {
      allStoresWrapper.append(function () {
        return $('<h2></h2>', {
          class: 'stores__empty-search',
          text: 'Sorry, 0 Stores Available',
        });
      });
    } else if (array.length === 0) {
      return;
    } else {
      array.map((company) => {
        allStoresWrapper.append(function () {
          return $('<div></div>', {
            class: 'stores__item',
          })
            .append(function () {
              return $('<div></div>', {
                class: 'stores__image',
              }).append(function () {
                return $('<img>', {
                  src: company.logo,
                  alt: company.title,
                });
              });
            })
            .append(function () {
              return $('<div></div>', {
                class: 'stores__button',
                text: 'View Details',
                'data-id': company.id,
              });
            });
        });
      });
    }

    searchCompanies.splice(0, searchCompanies.length);
  };

  allStoresWrapper.on('click', '.stores__button', postLicalStorageDataId);

  //------------ Search --------------------

  const search = $('#search');
  const searchBtn = $('#searcBtn');
  const getSearchValue = localStorage.getItem('searchValue');
  let searchValue = '';

  const searchCurrentCompany = (value) =>
    DATABASE.companies.map((company) => {
      const companyName = company.title.toLowerCase();
      if (companyName.includes(value)) searchCompanies.push(company);
    });

  const startSearch = function (searchValue) {
    searchCurrentCompany(searchValue);
    allStoresWrapper.empty();
    createAllStoresTemplate(getPosts(page, searchCompanies), 'search');
  };

  if (window.location.href.includes('stores') && getSearchValue === null) {
    createAllStoresTemplate(getPosts(page, DATABASE.companies));
  } else {
    startSearch(getSearchValue);
    search.val(getSearchValue);
    localStorage.removeItem('searchValue');
  }

  searchBtn.on('click', function () {
    searchValue = search.val().toLowerCase();

    if (window.location.href.includes('stores')) {
      startSearch(searchValue);
    } else {
      localStorage.setItem('searchValue', searchValue);
      location.href = 'http://localhost:3000/stores.html';
    }
  });

  // ------ Get coincidence ----------------

  const getStore = (companyId) =>
    DATABASE.companies.find((company) => company.id === Number(companyId));

  let currentCompany = getStore(companyId);

  if (currentCompany !== undefined) {
    $('.store__company-logo')
      .attr('src', currentCompany.logo)
      .attr('alt', currentCompany.title);
  }

  $('.store__coupons').on('click', '.coupon__details-btn', function () {
    $(this).parent().find('.coupon__footer-body').toggleClass('show');
  });

  currentCompany.coupons.map((coupon) => {
    const createLiTemplate =
      coupon.details !== undefined
        ? coupon.details
            .map(
              (detail) =>
                `<li class="coupon__footer-list-item coupon__footer-list-item_strong">${detail}</li>`
            )
            .join(' ')
        : ' ';

    const detailsTemplate =
      coupon.details !== undefined
        ? `<ul class="coupon__footer-list-strong">
            ${createLiTemplate}
          </ul>`
        : ' ';

    const descriptionTitleTemplate =
      coupon.description.title !== undefined
        ? `<span class="coupon__description-title">${coupon.description.title}</  span>`
        : ' ';

    const descriptionTextTemplate =
      coupon.description.text !== undefined
        ? `${coupon.description.text}`
        : ' ';

    function createCoupon() {
      return `
        <div class="store__coupon coupon">
          <div class="coupon__body">
            <p class="coupon__header">Valid Till 28-02-2022</p>
            <div class="coupon__content">
              <div class="coupon__shorts">
                <p class="coupon__shorts-text">${coupon.shortText}</p>
              </div>
              <div class="coupon__about">
                <p class="coupon__title">${coupon.header}</p>
                <p class="coupon__description">
                  ${descriptionTitleTemplate}
                  ${descriptionTextTemplate}
                </p>
                <div class="coupon__button button" data-button-id="${coupon.id}">GET DEAL</div>
              </div>
            </div>
          </div>
          <div class="coupon__footer">
            <p class="coupon__details-btn">Show Details</p>
            <div class="coupon__footer-body">
              <p class="coupon__footer-title">Terms and conditions:</p>
              <ul class="coupon__footer-list">
                <li class="coupon__footer-list-item">
                  - Applicable For All Registered Members and for Guest Checkout
                  too.
                </li>
                <li class="coupon__footer-list-item">
                  - No Coupon Code Required to Avail this discount.
                </li>
                <li class="coupon__footer-list-item">
                  - Valid For Limited Period Only.
                </li>
                <li>
                  ${detailsTemplate}
                </li>
              </ul>
            </div>
          </div>
        </div>`;
    }

    return $('.store__coupons').append(createCoupon);
  });

  //--------------- Coupons ----------------------

  $('.store__body').on('click', '.coupon__button', function () {
    localStorage.setItem('couponId', $(this).attr('data-button-id'));
    // подставить в url href с доменом /coupon.html оставляем
    location.href = 'http://localhost:3000/coupon.html';
  });

  let couponId = localStorage.getItem('couponId');

  const createCouponTempale = (company) => {
    const currentCoupon = company.coupons.find(
      (coupon) => coupon.id === Number(couponId)
    );

    const createLiTemplate =
      currentCoupon.details !== undefined
        ? currentCoupon.details
            .map(
              (detail) =>
                `<li class="coupon__footer-list-item coupon__footer-list-item_strong">${detail}</li>`
            )
            .join(' ')
        : ' ';

    const detailsTemplate =
      currentCoupon.details !== undefined
        ? `<ul class="coupon__footer-list-strong">
            ${createLiTemplate}
          </ul>`
        : ' ';

    const descriptionTitleTemplate =
      currentCoupon.description.title !== undefined
        ? `<span class="coupon__description-title">${currentCoupon.description.title}</  span>`
        : ' ';

    const descriptionTextTemplate =
      currentCoupon.description.text !== undefined
        ? `${currentCoupon.description.text}`
        : ' ';

    function createCoupon() {
      return `
        <div class="coupon-item__company">
          <div class="coupon-item__image">
            <img src="${company.logo}" alt="${company.title}" />
          </div>
          <h1 class="coupon__shorts-text">${currentCoupon.header}</h1>
        </div>
        <div class="coupon-item__about coupon-item__about">
          <p class="coupon__description coupon-item__description">
            ${descriptionTitleTemplate}
            ${descriptionTextTemplate}
          </p>
          <div>
            <p class="coupon__footer-title coupon-item__footer-title">Terms and conditions:</p>
            <ul class="coupon__footer-list coupon-item__footer-list">
              <li class="coupon__footer-list-item">
                - Applicable For All Registered Members and for Guest Checkout
                too.
              </li>
              <li class="coupon__footer-list-item">
                - No Coupon Code Required to Avail this discount.
              </li>
              <li class="coupon__footer-list-item">
                - Valid For Limited Period Only.
              </li>
              <li>
                ${detailsTemplate}
              </li>
            </ul>
          </div>
          <a href='${company.link}' class="button coupon-item__button">GET DEAL</a>
        </div>`;
    }

    return $('.coupon-item__body').append(createCoupon);
  };

  createCouponTempale(currentCompany);
});
