// 加载 template.html 中的内容
var xhr = new XMLHttpRequest();
xhr.open('GET', 'template.html', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // 获取整个 HTML 内容
        var templateContent = xhr.responseText;

        // 使用 DOMParser 解析 HTML
        var parser = new DOMParser();
        var doc = parser.parseFromString(templateContent, 'text/html');

        // 获取 header 部分
        var headerContent = doc.querySelector('.header').outerHTML;
        var header = document.getElementsByTagName('header')[0];
        header.innerHTML = headerContent;

        // 获取 navbar 部分
        var navbarContent = doc.querySelector('.navbar').outerHTML;
        var nav = document.getElementsByTagName('nav')[0];
        nav.innerHTML = navbarContent;

        // 获取 footer 部分
        var footerContent = doc.querySelector('.footer').outerHTML;
        var footer = document.getElementsByTagName('footer')[0];
        footer.innerHTML = footerContent;

        // 获取 skip 部分
        var skipContent = doc.querySelector('.skip').outerHTML;
        var skip = document.getElementsByTagName('skip')[0];
        skip.innerHTML = skipContent;
    }
};
xhr.send();