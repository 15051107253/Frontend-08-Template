## 浏览器

##### 流程

- URL 发送解析http请求（HTTP）
- HTML 取出文本html并进行parse变成dom树（parse）
- DOM 进行css计算出css dom树（css computing）
- DOM with CSS 排版，计算出dom元素盒的位置（layout）
- DOM with position 渲染（render）
- Bitmap





## HTTP的协议解析

#### ISO-OSI七层网络模型

- 应用
- 表示
- 会话
- 传输
- 网络
- 数据链路
- 物理层





### 第一步：HTTP请求总结

- 设计一个HTTP请求的类
- content-type是一个必要的字段，要有默认值
- body是KV（key：value）格式
- 不同的content-type影响body的格式

### 第二步：send函数总结

- 在Request的构造器中国呢收集必要的信息
- 设计一个send函数，把请求真实发送到服务器
- send函数应该是异步的，所以返回Promise

### 第三步：发送请求

- 设计支持已有的connection或者自己新建connection
- 收到数据传给parser
- 根据parser的状态resolve Promise

### 第四步：ResponseParser总结

- Response必须分段构造，所以我们要用一个ResponseParser来“装配”
- ResonseParser分段处理ResponseText，我们用状态机来分析文本的结构

### 第五步：BodyParser总结

- Response的body可能根据Content-Type有不同的结构，因此我们会采用子Parser的结构来解决问题
- 以TrunkedBodyParser为例，我们同样用状态机来处理body的格式