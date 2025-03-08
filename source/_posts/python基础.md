---
title: Python基础
date: 2025-01-09 17:48:00
tags: 编程
top_img: transparent
cover: https://tuchuang.voooe.cn/images/2025/03/03/14.webp
copyright_info: 此文章版权归Ethereal所有，如有转载，请注明来自原作者
categories:
  - 编程
  - Python
---
我认为Python相较于其他编程语言算是友好的，如果你也会其他语言那么学起Python会很快，而且它们之间也是通的，
如果没学过就当我这句话没说。
## 安装Python和编译环境
在开始编写 Python 代码之前，我们需要先安装 Python 解释器和一个合适的编译环境。

### 安装 Python

1. **下载 Python**：访问 [Python 官方网站](https://www.python.org/)，下载适合你操作系统的最新版本的 Python 安装包。
2. **安装 Python**：运行下载的安装包，按照提示完成安装。在安装过程中，记得勾选“Add Python to PATH”选项，以便在命令行中使用 Python。

### 安装编译环境
编译环境有多种[Pycharm](https://www.jetbrains.com/pycharm/download/?section=windows#section=windows)、[Anaconda](https://www.anaconda.com/)和[Vscode](https://code.visualstudio.com/Download),但我自己用的是Vscode，我也推荐使用Vscode，接下来的安装步骤也是根据Vscode来的。
1. **下载 VS Code**：访问 [VS Code 官方网站](https://code.visualstudio.com/)，下载适合你操作系统的安装包。
2. **安装 VS Code**：运行下载的安装包，按照提示完成安装。
3. **安装 Python 扩展**：打开 VS Code，点击左侧的扩展图标（或按 `Ctrl+Shift+X`），搜索“Python”，然后点击安装由 Microsoft 提供的 Python 扩展。
## 编写第一个 Python 程序

安装完成后，我们可以开始编写第一个 Python 程序。

1. **创建一个新文件**：在 VS Code 中，点击左侧的文件图标，选择“新建文件”，并将文件命名为 `hello.py`。
2. **编写代码**：在 `hello.py` 文件中输入以下代码：
   ```python
   print("Hello, World!")
   ```
3. **运行程序**：保存文件后，按 Ctrl+Shift+P 打开命令面板，输入“Run Python File in Terminal”，然后按回车键。你将在终端中看到输出：
    ```python
    Hello, World!  # 输出的
    ```
## Python基本语法
### 变量和数据类型
Python支持多种数据类型，包括整数、浮点数、字符串和布尔值。以下是一些示例:
```python
# 整数
a=10

# 浮点数
b=3.14  # 就是带小数点的数

# 字符串
c="hello, python" # 像e="123456"也是字符串，只要带双引号/单引号的都是字符串

# 布尔值
d=True  # 除了True还有False
```
### 运算符
Python 支持多种运算符，包括算术运算符、比较运算符和逻辑运算符。以下是一些示例:
```python
# 算术运算符
x = 10 + 5  # 表示10加5
y = 10 - 5  # 表示10减5  
z = 10 * 5  # 表示10乘5
w = 10 / 5  # 表示10除以5，但是它算出来的结果是带有小数点的
h = 10 // 5 # 同上,但结果是整数
s = 5 % 2   # 表示5取模2，算出来的数是余数，5除以2余1，那么1就是它的结果
# 比较运算符
print(x > y)  # 输出: True 根据上面x结果是15，y的结果是5，15是必然大于5的
print(x == y)  # 输出: False x=15,y=5,怎么可能相等呢

# 逻辑运算符
print(x > y and y > z)  # 输出: True
print(x > y or y > z)  # 输出: True
print(not (x > y))  # 输出: False
```
### 条件语句
Python使用if、elif、else语句来进行条件判断。以下是一个示例:
```python
age = 18

if age < 18:
    print("未成年")
elif age == 18:
    print("刚成年")
else:
    print("成年")
```
### 循环语句
Python支持for循环和While循环。以下是一些示例:
```python
# for 循环
for i in range(5):
    print(i)

# while 循环
i = 0
while i < 5:
    print(i)
    i += 1
```
## 总结
通过这篇文章，我们了解了如何安装 Python 和编译环境，并编写了第一个 Python 程序。同时，我们还学习了 Python 的基本语法，包括变量和数据类型、运算符、条件语句和循环语句。希望这篇文章对你学习 Python 有所帮助。







