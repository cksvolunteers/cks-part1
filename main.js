let slides = document.getElementById('slider');
let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');

let i = 0
let img = [
    'https://www.wildernessshots.com/wp-content/uploads/2017/10/Grenadier-Mountains-Panorama-Colorado-Photos.jpg',
    'https://media.cntraveler.com/photos/6123f6bb7dfe5dff926c7675/3:1/w_2999,h_999,c_limit/South%20Korea_GettyImages-1200320719.jpg',
    'https://www.mountainphotography.com/images/xl/20120928-Cimarron-Sunset-Panorama.jpg',
    'https://www.aeroflot.ru/media/aflfiles/kr/kr_1.jpg',
    'https://wallpaperaccess.com/full/5463722.jpg',
    'https://media.audleytravel.com/-/media/images/home/north-asia-and-russia/south-korea/overview-letterbox-images/bttv/istock_908748356_gyeongbokgung_palace_seoul_letterbox.jpg'];



const HandleClick = btn_left.onclick = () =>{
    slides.style.backgroundImage = `url(${img[i]})`
    i++;
    if(i === img.length){
        i = 0
    }
    btn_right.onclick = () => {
        slides.style.backgroundImage = `url(${img.reverse()[i]})`
        i-1;
        if(i === img.length){
            i = 0
        }
    }
}

HandleClick()
