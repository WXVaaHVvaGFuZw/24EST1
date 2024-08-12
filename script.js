// 轮播图功能
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const intervalTime = 10000; // 轮播间隔10秒
    let slideIndex = 0;

    slides[slideIndex].classList.add("active");

    function nextSlide() {
        slides[slideIndex].classList.remove("active");
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add("active");
    }

    setInterval(nextSlide, intervalTime);
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// 轮播图上下图片切换按钮功能
document.querySelector('.left-button').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
});

document.querySelector('.right-button').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});

// footer 电话号码复制功能
function copyNumber() {
    const number = "15623365668";
    navigator.clipboard.writeText(number)
        .then(() => {
            alert("电话号码已复制到剪贴板：" + number);
        })
        .catch(err => {
            console.error('无法复制：', err);
            alert("复制失败");
        });
}

// 学生信息搜索功能
function searchStudent() {
    var input = document.getElementById("searchStudentInput");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("studentTable");
    var tr = table.getElementsByTagName("tr");
    var found = false;

    if (filter === "") {
        for (var i = 0; i < tr.length; i++) {
            tr[i].classList.remove('highlight');
        }
    } else {
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName("td");
            var foundInThisRow = false;

            for (var j = 0; j < td.length; j++) {
                var txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    foundInThisRow = true;
                    break;
                }
            }

            if (foundInThisRow) {
                tr[i].classList.add('highlight');
                found = true;
            } else {
                tr[i].classList.remove('highlight');
            }
        }

        if (!found) {
            alert("未搜到学生相关信息");
        } else {
            tr[Array.from(tr).findIndex(row => row.classList.contains('highlight'))].scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
}

// Pop-up alerts when the device screen size is less than 900px
function checkScreenSize() {
    if (window.innerWidth < 900) {
        document.querySelector('.popup').style.display = 'block';
        startCountdown();
    }
}

function startCountdown() {
    let countdown = 3;
    const countdownElement = document.getElementById('countdown');
    const countdownInterval = setInterval(() => {
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            document.querySelector('.popup').style.display = 'none';
        }
        countdown--;
    }, 1000);
}

// Back to Top
const button = document.getElementById('scrollTopButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        button.style.bottom = '20px';
        button.style.opacity = '1';
    } else {
        button.style.bottom = '-60px';
        button.style.opacity = '0';
    }
});

button.addEventListener('click', () => {
    button.style.animation = 'rocket-launch 0.5s forwards';
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        button.style.animation = '';
    }, 500);
});

// Mouse
let img = document.querySelector('.img')
let deg = 0
let imgx = 0
let imgy = 0
let imgl = 0
let imgt = 0
let y = 0
let index = 0

window.addEventListener('mousemove', function (xyz) {
    imgx = xyz.x - img.offsetLeft - img.clientWidth / 2
    imgy = xyz.y - img.offsetTop - img.clientHeight / 2
    deg = 360 * Math.atan(imgy / imgx) / (2 * Math.PI)
    index = 0
    let x = event.clientX
    if (img.offsetLeft < x) {
        y = -180
    } else {
        y = 0
    }
})
setInterval(() => {
    img.style.transform = "rotateZ(" + deg + "deg) rotateY(" + y + "deg)"
    index++
    if (index < 50) {
        imgl += imgx / 50
        imgt += imgy / 50
    }
    img.style.left = imgl + "px"
    img.style.top = imgt + "px"
}, 10)