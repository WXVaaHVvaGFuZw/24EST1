import shutil
import re
import os

def modify_html_links(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        
    # 匹配 href 和 src 属性的链接
    pattern = r'(href=")((?!http|https|ftp|#).*?)(")|(src=")((?!http|https|ftp|#).*?)(")'
    
    def repl(match):
        if match.group(1):  # 匹配 href
            path = match.group(2)
            suffix = match.group(3)
            if path:
                return match.group(1) + ("../" if not path.startswith("http") and not path.startswith("#") else "") + path + suffix
        elif match.group(4):  # 匹配 src
            path = match.group(5)
            suffix = match.group(6)
            if path:
                return match.group(4) + "../" + path + suffix
        return match.group(0)

    modified_content = re.sub(pattern, repl, content)
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(modified_content)

def copy_and_modify_html():
    # 主模版文件
    current_dir = os.path.dirname(os.path.abspath(__file__))
    template_path = os.path.join(current_dir, 'template.html')

    # 复制到 News 目录下的 template.html
    news_dir = os.path.join(current_dir, 'News')
    os.makedirs(news_dir, exist_ok=True)
    news_destination_path = os.path.join(news_dir, 'template.html')
    shutil.copy2(template_path, news_destination_path)
    modify_html_links(news_destination_path)

    # 复制到 Notification 目录下的 template.html
    notification_dir = os.path.join(current_dir, 'Notification')
    os.makedirs(notification_dir, exist_ok=True)
    notification_destination_path = os.path.join(notification_dir, 'template.html')
    shutil.copy2(template_path, notification_destination_path)
    modify_html_links(notification_destination_path)

    print("Loaded Successfully")

if __name__ == "__main__":
    copy_and_modify_html()
