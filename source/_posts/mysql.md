---
title: MySQL的一些命令
date: 2025-02-18 22:05:00
tags: MySQL
top_img: transparent
cover: https://tuchuang.voooe.cn/images/2025/03/03/37.jpg
copyright_info: 此文章版权归Ethereal所有，如有转载，请注明来自原作者
categories:
  - 技术
  - 数据库
  - MySQL
---
{% note info modern %}这篇是用来记命令的，教学视频是看黑马程序员的{% endnote %}
# 开始
注意：得先安装和配置好MySQL,再Windows搜索里找到**MySQL 8.0 Command Line Client**这个终端程序。打开进入终端，提示信息会让你输入密码(就是你配置MySQL用户root的那个密码)一般都是:**123456**。 
## 显示当前所有数据库 
```MySQL
show databases; 
```
效果:
```MySQL
+--------------------+
| Database           |
+--------------------+
| information_schema |
| itcast             |
| itheima            |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.00 sec)
```
## 查询当前数据库
```MySQL
select database(); 
```
效果:
当前还未进到任何数据库中所以是NULL(空)。
```MySQL
+------------+
| database() |
+------------+
| NULL       |
+------------+
1 row in set (0.00 sec)
```
## 创建一个名为test1的数据库
```MySQL
create database test1;   
```
效果：
```MySQL
Query OK, 1 row affected (0.01 sec)
```
出现以上提示，说明是创建成功的  
![159c811a2714c9bcc085c790885d65b2.gif](https://tuchuang.voooe.cn/images/2025/01/01/159c811a2714c9bcc085c790885d65b2.gif)
{% note info modern %}未完待续{% endnote %}