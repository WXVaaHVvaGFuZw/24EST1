document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const intervalTime = 10000; // 切换间隔时间，单位为毫秒
    let slideIndex = 0;

    // 初始状态设置第一张图为显示
    slides[slideIndex].classList.add("active");

    // 定义轮播函数
    function nextSlide() {
        slides[slideIndex].classList.remove("active");
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add("active");
    }

    // 设置定时器，每隔intervalTime时间调用一次nextSlide函数
    setInterval(nextSlide, intervalTime);
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

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

// 遍历每个图片元素并为其添加mousedown事件监听器
slides.forEach(slide => {
    slide.addEventListener('mousedown', function(event) {
        // 取消事件的默认行为
        event.preventDefault();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const intervalTime = 10000; // 切换间隔时间，单位为毫秒
    let slideIndex = 0;

    // 初始状态设置第一张图为显示
    slides[slideIndex].classList.add("active");

    // 创建小圆点
    const dotsDiv = document.querySelector('.dots');
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsDiv.appendChild(dot);
    }

    // 设置初始小圆点状态
    dotsDiv.children[slideIndex].classList.add('active');

    // 定义轮播函数
    function nextSlide() {
        slides[slideIndex].classList.remove("active");
        dotsDiv.children[slideIndex].classList.remove('active');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add("active");
        dotsDiv.children[slideIndex].classList.add('active');
    }

    // 设置定时器，每隔 intervalTime 时间调用一次 nextSlide 函数
    setInterval(nextSlide, intervalTime);

    // 为小圆点添加点击事件
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slides[slideIndex].classList.remove('active');
            dotsDiv.children[slideIndex].classList.remove('active');
            slideIndex = index;
            slides[slideIndex].classList.add('active');
            dotsDiv.children[slideIndex].classList.add('active');
        });
    });

    document.querySelector('.left-button').addEventListener('click', () => {
        slides[slideIndex].classList.remove('active');
        dotsDiv.children[slideIndex].classList.remove('active');
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        slides[slideIndex].classList.add('active');
        dotsDiv.children[slideIndex].classList.add('active');
    });

    document.querySelector('.right-button').addEventListener('click', () => {
        slides[slideIndex].classList.remove('active');
        dotsDiv.children[slideIndex].classList.remove('active');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('active');
        dotsDiv.children[slideIndex].classList.add('active');
    });

    // 遍历每个图片元素并为其添加 mousedown 事件监听器
    slides.forEach(slide => {
        slide.addEventListener('mousedown', function (event) {
            // 取消事件的默认行为
            event.preventDefault();
        });
    });
});

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

  function searchStudent() {
    var input = document.getElementById("searchStudentInput");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("studentTable");
    var tr = table.getElementsByTagName("tr");
    var found = false;

    // 如果输入为空，移除所有行的高亮
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
            // 跳转到第一个匹配的行（可根据需求调整）
            tr[Array.from(tr).findIndex(row => row.classList.contains('highlight'))].scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
}