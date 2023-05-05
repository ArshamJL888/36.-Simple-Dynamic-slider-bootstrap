let sliderArray = [
    {
        Address: 'https://sabzlearn.ir/wp-content/uploads/2020/12/List-of-top-Css-video-libraries-522x295.png',
        Header: 'Slide 1',
        Description: 'List of the best Css libraries',
    },
    {
        Address: 'https://sabzlearn.ir/wp-content/uploads/2020/10/How-Much-Money-Does-a-Web-Developer-Make-522x295.png',
        Header: 'Slide 2',
        Description: 'How Much Money Does a Web Developer Make',
    },
    {
        Address: 'https://sabzlearn.ir/wp-content/uploads/2021/01/113-522x295.png',
        Header: 'Slide 3',
        Description: 'Simple Game with JavaScript'
    },
    {
        Address: 'https://sabzlearn.ir/wp-content/uploads/2020/12/JavaScript-exercises-video-522x295.jpeg',
        Header: 'Slide 4',
        Description: 'JavaScript Exercises'
    },
];
document.addEventListener('load', loadSlider)
document.body.classList.add('container');
document.body.classList.add('py-5');

loadSlider()

function loadSlider() {
    let newCarouselDiv = document.createElement('div');
    newCarouselDiv.classList.add('carousel');
    newCarouselDiv.classList.add('slide');
    newCarouselDiv.classList.add('carousel-dark');
    newCarouselDiv.classList.add('carousel-fade');
    newCarouselDiv.id = 'carouselTop';
    document.body.append(newCarouselDiv);
    newCarouselDiv.setAttribute('data-bs-ride', 'carousel')

    let newIndicatorDiv = document.createElement('div');
    newIndicatorDiv.classList.add('carousel-indicators')
    newCarouselDiv.append(newIndicatorDiv);

    let newInnerDiv = document.createElement('div');
    newInnerDiv.classList.add('carousel-inner');
    newCarouselDiv.append(newInnerDiv);
    let btns = ' <span class="carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#carouselTop">';
    btns += ' <span class="carousel-control-prev-icon"></span>';
    btns += ' </span>';
    btns += '<span class="carousel-control-next" type="button" data-bs-target="#carouselTop" data-bs-slide="next">';
    btns += '<span class="carousel-control-next-icon"></span>';
    btns += '</span>';
    newCarouselDiv.insertAdjacentHTML('beforeend', btns)
        sliderArray.forEach((slide, index) => {
            console.log(slide)

            let newfooterBtn = document.createElement('button');
            newfooterBtn.setAttribute('data-bs-target', '#carouselTop');
            newfooterBtn.setAttribute('data-bs-slide-to', `${index}`);
            newIndicatorDiv.append(newfooterBtn);


            let newItem = document.createElement('div');
            newItem.classList.add('carousel-item');
            newItem.setAttribute('data-bs-interval', '3000');
            if (index === 0) {
                newfooterBtn.classList.add('active');
                newItem.classList.add('active');
            }

            let newImg = document.createElement('img');
            newImg.classList.add('d-block')
            newImg.classList.add('w-100')
            newImg.src = slide.Address;
            newImg.alt = 'slideImage';
            newItem.append(newImg);

            let imgCaption = document.createElement('div');
            imgCaption.classList.add('carousel-caption');

            let newH4 = document.createElement('h4');
            newH4.innerHTML = slide.Header;
            imgCaption.append(newH4);

            let newDetail = document.createElement('p');
            newDetail.innerHTML = slide.Description;
            imgCaption.append(newDetail);

            newItem.append(imgCaption);

            newInnerDiv.append(newItem);
        });

    ;
}     