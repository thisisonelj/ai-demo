# 车辆管理模块 Skill

## 模块目标

开发订单卖车TOB后台Saas服务系统的车辆管理模块，实现车辆信息录入、查询和状态管理功能。

## 功能描述

### 车辆信息录入
- 支持单个车辆信息录入
- 支持批量导入车辆信息
- 对录入数据进行严格校验
- 支持上传车辆图片

### 车辆信息查询
- 支持多条件筛选（品牌、型号、颜色、状态等）
- 支持分页查询
- 支持排序功能
- 提供高效的查询响应

### 车辆状态管理
- 清晰反映车辆的销售、库存、维修等状态流转
- 支持状态变更记录
- 支持批量更新车辆状态

## 技术实现

### 后端
- 使用Node.js + Express框架
- 数据库使用MySQL存储车辆信息
- 实现RESTful API接口
- 支持文件上传（车辆图片）

### 前端
- 使用React框架
- 使用Ant Design组件库
- 使用Redux进行状态管理
- 使用react-router-dom进行路由管理
- 实现车辆信息表格和表单
- 实现车辆状态变更界面

## 接口设计

### 后端API
- POST /api/vehicles - 创建车辆信息
- GET /api/vehicles - 查询车辆列表
- GET /api/vehicles/:id - 获取车辆详情
- PUT /api/vehicles/:id - 更新车辆信息
- DELETE /api/vehicles/:id - 删除车辆信息
- POST /api/vehicles/batch - 批量导入车辆
- PUT /api/vehicles/:id/status - 更新车辆状态

### 前端路由
- /vehicles - 车辆列表页面
- /vehicles/create - 创建车辆页面
- /vehicles/:id - 车辆详情页面
- /vehicles/:id/edit - 编辑车辆页面

## 数据模型

### 车辆表（vehicles）
- id: 主键
- brand_id: 品牌ID（外键）
- model_id: 型号ID（外键）
- color_id: 颜色ID（外键）
- status_id: 状态ID（外键）
- vin: 车辆识别码
- price: 价格
- stock: 库存
- description: 描述
- image_url: 图片URL
- created_at: 创建时间
- updated_at: 更新时间

### 品牌表（brands）
- id: 主键
- name: 品牌名称
- created_at: 创建时间
- updated_at: 更新时间

### 型号表（models）
- id: 主键
- brand_id: 品牌ID（外键）
- name: 型号名称
- created_at: 创建时间
- updated_at: 更新时间

### 颜色表（colors）
- id: 主键
- name: 颜色名称
- code: 颜色代码
- created_at: 创建时间
- updated_at: 更新时间

### 状态表（vehicle_statuses）
- id: 主键
- name: 状态名称
- created_at: 创建时间
- updated_at: 更新时间

## 业务流程

1. **车辆信息录入流程**
   - 填写车辆基本信息
   - 选择品牌、型号、颜色和状态
   - 上传车辆图片
   - 提交表单
   - 后端验证并保存数据

2. **车辆信息查询流程**
   - 设置筛选条件
   - 点击查询按钮
   - 后端根据条件查询数据
   - 前端展示查询结果

3. **车辆状态变更流程**
   - 选择需要变更状态的车辆
   - 选择新的状态
   - 提交状态变更
   - 后端更新车辆状态并记录变更历史
