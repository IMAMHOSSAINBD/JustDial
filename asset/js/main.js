// popular-carousel owl carousel


$('.popular-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3

        },
        1000: {
            items: 4

        }
    }
})


// trending-carousel owl carousel

$('.trending-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3

        },
        1000: {
            items: 4

        }
    }
})




// motoCare-carousel owl carousel

$('.motoCare-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3

        },
        1000: {
            items: 4

        }
    }
})




// b2b-carousel owl carousel


$('.b2b-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3

        },
        1000: {
            items: 4

        }
    }
})




// medical-carousel owl carousel


$('.medical-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3

        },
        1000: {
            items: 4

        }
    }
})



// automobile-carousel owl carousel

$('.automobile-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3

        },
        1000: {
            items: 4

        }
    }
})



// onlinShop-carousel owl carousel


$('.onlinShop1-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3

        },
        1000: {
            items: 4

        }
    }
})


// onlinShop-carousel owl carousel


$('.onlinShop2-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3

        },
        1000: {
            items: 4

        }
    }
})



// hotelBook-carousel owl carousel

$('.hotelBook-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 3

        },
        1000: {
            items: 4

        }
    }
})




window.bkash = function (bkashFunction) {
    if (bkashFunction == no) {
        document.getElementById('bkash_code').style.display = 'none';
    } else if (bkashFunction == yes) {
        document.getElementById('bkash_code').style.display = 'block';
        return;
    }
}

window.rocket = function (rocketFunction) {
    if (rocketFunction == no) {
        document.getElementById('rocket_code').style.display = 'none';
    } else if (rocketFunction == yes) {
        document.getElementById('rocket_code').style.display = 'block';
        return;
    }
}



/*---------------------- Sign Up Page JS ---------------------*/


function show() {
    var option = document.getElementById("businessType").value;

    if (option == "Free") {
        document.getElementById("freeExpand").style.display = "block";
    }
    if (option == "Premium") {
        document.getElementById("premiumExpand").style.display = "block";
    }
}
