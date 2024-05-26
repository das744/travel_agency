
         document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.social-icon ul li');
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = 1; // Set opacity to 1 to make the icon visible
        }, index * 500); // Adjust the delay as needed
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('#destination-slider > div');
   

    // hide all cards
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Function to show each card with a sliding animation
    const showCard = (index) => {
        if (index < cards.length) {
            setTimeout(() => {
                cards[index].style.opacity = 1;
                cards[index].style.transform = 'translateY(0)';
                showCard(index + 1); // Call the function recursively for the next card
            }, 200 * index); // Adjust the delay as needed
        }
    };

    // Call the function to start showing the cards
    showCard(0);
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.flex .card');

    // Initially hide all cards and their images
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Apply CSS transition
        const img = card.querySelector('img');
        img.style.opacity = 0;
        img.style.transition = 'opacity 0.5s ease'; // Apply CSS transition for images
    });

    // Function to show each card with a sliding animation
    const showCard = (index) => {
        if (index < cards.length) {
            setTimeout(() => {
                cards[index].style.opacity = 1;
                cards[index].style.transform = 'translateY(0)';
                const img = cards[index].querySelector('img');
                img.style.opacity = 1; // Show image smoothly
                showCard(index + 1); // Call the function recursively for the next card
            }, 200 * index); // Adjust the delay as needed
        }
    };

    // Call the function to start showing the cards
    showCard(0);
});



</script>
<script>

      $(function () {
        let headerElem = $("header");
        let logo = $("#logo");
        let navMenu = $("#nav-menu");
        let navToggle = $("#nav-toggle");

        $("#destination-slider").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow:
            '<a href="#" class="slick-arrow slick-prev"><i class="fas fa-arrow-left"></i></a>',
          nextArrow:
            '<a href="#" class="slick-arrow slick-next"><i class="fas fa-arrow-right"></i></a>',
          responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 530,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              },
            },
          ],
        });

        $("#testimonials-slider").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
          nextArrow: '<a href="#" class="slick-arrow slick-next">></a>',
        });

        navToggle.on("click", () => {
          navMenu.css("right", "0");
        });

        $("#close-flyout").on("click", () => {
          navMenu.css("right", "-100%");
        });

        $(document).on("click", (e) => {
          let target = $(e.target);
          if (
            !(
              target.closest("#nav-toggle").length > 0 ||
              target.closest("#nav-menu").length > 0
            )
          ) {
            navMenu.css("right", "-100%");
          }
        });

        $(document).scroll(() => {
          let scrollTop = $(document).scrollTop();

          if (scrollTop > 0) {
            navMenu.addClass("is-sticky");
            logo.css("color", "#be0884");
            headerElem.css("background", "#fff");
            navToggle.css("border-color", "#000");
            navToggle.find(".strip").css("background-color", "#000");
          } else {
            navMenu.removeClass("is-sticky");
            logo.css("color", "#09195d");
            headerElem.css("background", "transparent");
            navToggle.css("bordre-color", "#fff");
            navToggle.find(".strip").css("background-color", "#fff");
          }

          headerElem.css(
            scrollTop >= 200
              ? { padding: "0.5rem", "box-shadow": "0 -4px 10px 1px #999" }
              : { padding: "1rem 0", "box-shadow": "none" }
          );
        });

        $(document).trigger("scroll");
      });

     
