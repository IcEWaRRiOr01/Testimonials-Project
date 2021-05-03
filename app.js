let slideIndex = 1;

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('avatar');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let slide of slides) {
        slide.style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

let clientIndex = 1;

document.getElementById('btnPrev').addEventListener('click', function() {
    showClients(clientIndex += 1);
});

document.getElementById('btnNext').addEventListener('click', function() {
    showClients(clientIndex -= 1);
});

function currentClient(c) {
    showClients(clientIndex = c);
}

function showClients(c) {
    let clients = document.getElementsByClassName('customer');
    if (c > clients.length) {
        clientIndex = 1;
    }
    if (c < 1) {
        clientIndex = clients.length;
    }
    for (let client of clients) {
        client.style.display = 'none';
    }
    clients[clientIndex - 1].style.display = 'block';
}












function init() {
    var testimonials = [
        {
            testimonial:
               "The best on the net! I am so pleased with this product. Product has completely surpassed our expectations."
        },
        {
            testimonial:
               "I would gladly pay over 600 dollars for this product."
        },
        {
            testimonial:
               "No matter where you go, this product is the coolest, most happening thing around! I'd be lost without this product. If you aren't sure, always go for this product. We've used this product for the last five years."
        },
        {
            testimonial:
               "It's all good. Buy this now. I am so pleased with this product."
        },
        {
            testimonial:
               "I just can't get enough of this product. I want to get a T-Shirt with this product on it so I can show it off to everyone."
        },
        {
            testimonial:
               "It's the perfect solution for our business. I am so pleased with this product. I could probably go into sales for you. No matter where you go, this product is the coolest, most happening thing around!"
        },
        {
            testimonial:
               "Thank you so much for your help. Great job, I will definitely be ordering again! Really good. I can't say enough about this product."
        }
    ];

    var generator = document.getElementById('btnNext');
    var text = document.getElementById('customerText');

    generator.addEventListener('click', function() {
        var random = Math.floor(Math.random() * testimonials.length);
        text.textContent = testimonials[random].testimonial;
    });

    var generator2 = document.getElementById('btnPrev');

    generator2.addEventListener('click', function() {
        var random2 = Math.floor(Math.random() * testimonials.length);
        text.textContent = testimonials[random2].testimonial;
    });
}

window.onload = init;