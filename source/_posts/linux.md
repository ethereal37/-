---
title: 给老电脑装上Ubuntu系统，并解决网络问题。
date: 2025-03-07 20:19:30
tags: 
    - 技术
    - Linux
top_img: transparent
cover: https://tuchuang.voooe.cn/images/2025/03/03/21.webp
copyright_info: 此文章版权归Ethereal所有，如有转载，请注明来自原作者
categories:
    - 技术
    - Linux
---
## 重装系统
我的老电脑也就是Lenovo G50-70(翻译过来就是学习笔记本)，这个笔记本陪伴我高中三年的奋斗时光，最开始是老爹从朋友那拿的用来给我练习打字和简单的编程，拿到手的第一时间，无比激动，即使装的是老旧的win7系统。![4.jpg](https://tuchuang.voooe.cn/images/2025/03/07/4.jpg)后来的几天，我便无法满足于win7系统，便把目光转向win10系统，我尝试升级win10系统，但是却把电脑搞坏了——其实是启动时一直在win10图标转圈迟迟不进入桌面，不知道该怎么办，于是去问度娘，度娘让我找一个优盘，到大白菜官网下一个启动工具软件，好巧不巧没有U盘，电脑坏了，就只能去淘宝上买一个启动盘，选了一个重装win10的U盘。等待几天后，U盘到了，开装！(这里就不详细说过程了)反正就是win10成功装上了。让我愉快的度过了三年时光，陪我征战刺客信条2、我的世界和星露谷物语。 
![1.jpg](https://tuchuang.voooe.cn/images/2025/03/07/1.jpg)
![2.jpg](https://tuchuang.voooe.cn/images/2025/03/07/2.jpg) 
高三毕业自己打暑假工换了新电脑，老电脑就开始长期的休假。因为我的专业是云计算的，要学习Linux系统，我现在的电脑也开虚拟机并成功运行Linux系统，但是感觉虚拟机上的Linux跟阉割了差不多，性能不是很好。所以我有了在老电脑里重新装Ubuntu的想法，也方便我学习Linux。随便找了一个看起来向U盘的东西——其真实身份是读卡器，在Ubuntu官网里下载镜像到桌面，再用balenaEtcher(镜像烧录工具)刻录到读卡器里，插到老电脑里![3.jpg](https://tuchuang.voooe.cn/images/2025/03/07/3.jpg)从Bios里设置电脑从U盘启动选项...最后安装成功。  
安装了Ubuntu的老电脑，我只能说流畅性确实快了不少。之后就是各种个性化设置，是我喜欢的样式。
![6.jpg](https://tuchuang.voooe.cn/images/2025/03/07/6.jpg)
![11.jpg](https://tuchuang.voooe.cn/images/2025/03/07/11.jpg)
有个显示器就投屏到这上面，正好键盘放到老电脑上面节省空间。
![12.jpg](https://tuchuang.voooe.cn/images/2025/03/07/12.jpg)
## 网络问题
在网络问题解决之前，这个电脑上的网络都是靠一根数据线来共享网络，我设置过但都未能成功反而在“高级网络配置”里出现很多失败品，去查找资料才知道是我缺少无线网卡驱动。  
### 下载驱动
```
sudo apt install bcmwl-kernel-source
```
前提是得先连上网，否则会下载失败
### 重启系统
```
sudo reboot
```
### 联网成功
这时重启之后的系统会新增一个Wifi图标，找到自己要连的网络的名称，输入密码即可。
### 其他问题
讲讲我解决网络连接遇到的问题，输入sudo apt install bcmwl-kernel-source命令后出现了系统提示我需要插入标有"Ubuntu22.04.4LTS Jammy Jellyfish-Releaseamd64(20240220)"的光盘介质。没有光盘啊，所以就直接Enter键跳过，结果却一直循环在这了，原因是系统配置了从光盘源安装软件包，而我没有插入光盘。  
#### 解决方法是禁用光盘源：  

```
sudo nano /etc/apt/sources.list
```

编辑软件列表  
#### 找到类似以下的行：

```
deb cdrom:[Ubuntu 22.04.4 LTS _Jammy Jellyfish_ - Release amd64 (20240220)] jammy main restricted

```
#### 在这行前面加上#注释掉它：  
```终端
 #deb cdrom:[Ubuntu 22.04.4 LTS _Jammy Jellyfish_ - Release amd64 (20240220)] jammy main restricted

```

#### 保存并退出（按Ctrl+X,然后按Y确认保存）
#### 更新软件源
```
sudo apt update

```
#### 接着继续安装

```
sudo apt install bcmwl-kernel-source
```

这次系统应该会从网络下载了，而不是让你插入光盘。