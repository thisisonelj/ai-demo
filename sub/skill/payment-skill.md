# 支付模块 Skill

## 模块目标

开发订单卖车TOB后台Saas服务系统的支付模块，实现支付订单和查询支付订单状态功能。

## 功能描述

### 支付订单
- 支持多种支付方式（如支付宝、微信支付）
- 生成支付链接或二维码
- 处理支付回调
- 自动更新订单状态

### 查询支付订单状态
- 实时同步支付渠道的支付结果
- 更新本地订单状态
- 提供支付历史记录查询

## 技术实现

### 后端
- 使用Node.js + Express框架
- 数据库使用MySQL存储支付信息
- 集成第三方支付网关
- 实现RESTful API接口

### 前端
- 使用React框架
- 使用Ant Design组件库
- 使用Redux进行状态管理
- 使用react-router-dom进行路由管理
- 实现支付页面和支付状态查询界面

## 接口设计

### 后端API
- POST /api/payments - 创建支付订单
- GET /api/payments - 查询支付订单列表
- GET /api/payments/:id - 获取支付订单详情
- PUT /api/payments/:id - 更新支付订单信息
- DELETE /api/payments/:id - 删除支付订单
- GET /api/payments/:id/status - 查询支付订单状态
- POST /api/payments/callback - 支付回调

### 前端路由
- /payments - 支付订单列表页面
- /payments/create - 创建支付订单页面
- /payments/:id - 支付订单详情页面
- /payments/:id/status - 支付订单状态页面

## 数据模型

### 支付表（payments）
- id: 主键
- order_id: 订单ID（外键）
- payment_method: 支付方式
- payment_amount: 支付金额
- transaction_id: 交易ID
- status: 支付状态
- created_at: 创建时间
- updated_at: 更新时间

### 支付状态
- 待支付
- 已支付
- 支付失败
- 退款中
- 已退款

## 业务流程

1. **支付订单流程**
   - 创建订单
   - 选择支付方式
   - 生成支付链接或二维码
   - 用户完成支付
   - 支付网关回调
   - 后端处理回调，更新支付状态和订单状态

2. **查询支付订单状态流程**
   - 进入支付订单详情页面
   - 点击查询状态按钮
   - 后端调用支付网关查询支付状态
   - 更新本地支付状态和订单状态
   - 前端显示最新支付状态
