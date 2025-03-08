---
title: markdown语法
date: 2025-02-17 18:23:00
tags: Markdown
top_img: transparent
cover: https://tuchuang.voooe.cn/images/2025/03/03/35.jpg
copyright_info: 此文章版权归Ethereal所有，如有转载，请注明来自原作者
categories:
  - 技术
  - Markdown语法
---
{% note info modern %}自建站53个日夜以来，自己写文章基本上都是用Markdown，但格式还是稍有欠缺。作为初学者，这里就用来记一下Markdown所有语法了，站长会慢慢更新的。此文章要用Chrom浏览器下观看{% endnote %}

# 标签语法
```Markdown
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6
```
预览效果:
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6
# Markdown段落
``` Markdown
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
```
预览效果:

I really like using Markdown.

I think I'll use it to format all of my documents from now on.
# Markdown换行语法
## 第一种方法
在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行
```
This is the first line.  
And this is the second line.
```
预览效果:

This is the first line.  
And this is the second line.
## 第二种方法
```
This is the first line.<br>
And this is the second line.
```
预览效果:

This is the first line.<br>
And this is the second line.

随自己喜好，两种方法。
# Markdown强调语法
通过将文本设置为粗体或斜体来强调其重要性。
## 粗体(Blod)
要加粗文本，请在单词或短语的前后各添加两个星号(**)或两个下划线(__)。
``` Markdown
I just love **bold text**.
I just love __bold text__.
Love**is**bold
```
预览效果:

I just love **bold text**.  
I just love __bold text__.  
Love**is**bold
## 粗体(Blod)-注意
在单词或短语中间部分加粗的话，请使用星号
Love**is**bold  ✅  
Love__is__bold  ❌

## 斜体（Italic）
用斜体显示文本，请在单词或短语前后添加一个星号(*)或一个下划线(_)。
```Markdown
Italicized text is the *cat's meow*.
Italicized text is the _cat's meow_.
A*cat*meow
```
预览效果:

Italicized text is the *cat's meow*.  
Italicized text is the _cat's meow_.  
A*cat*meow

{% note info modern %}未完待续{% endnote %}