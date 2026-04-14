# 基础数据模块 Skill

## 模块目标

开发订单卖车TOB后台Saas服务系统的基础数据模块，实现品牌、型号、颜色、状态等基础数据的管理功能。

## 功能描述

### 品牌管理
- 支持品牌的增删改查操作
- 支持品牌的导入导出功能
- 支持品牌的排序功能

### 型号管理
- 支持型号的增删改查操作
- 支持型号的导入导出功能
- 支持按品牌筛选型号

### 颜色管理
- 支持颜色的增删改查操作
- 支持颜色的导入导出功能
- 支持颜色预览

### 状态管理
- 支持车辆状态的增删改查操作
- 支持状态的导入导出功能
- 支持状态的排序功能

## 技术实现

### 后端
- 使用Node.js + Express框架
- 数据库使用MySQL存储基础数据
- 实现RESTful API接口

### 前端
- 使用React框架
- 使用Ant Design组件库
- 使用Redux进行状态管理
- 使用react-router-dom进行路由管理
- 实现基础数据表格和表单
- 实现数据导入导出功能

## 接口设计

### 后端API
- **品牌管理**
  - GET /api/brands - 获取品牌列表
  - POST /api/brands - 创建品牌
  - GET /api/brands/:id - 获取品牌详情
  - PUT /api/brands/:id - 更新品牌
  - DELETE /api/brands/:id - 删除品牌
  - POST /api/brands/import - 导入品牌
  - GET /api/brands/export - 导出品牌

- **型号管理**
  - GET /api/models - 获取型号列表
  - POST /api/models - 创建型号
  - GET /api/models/:id - 获取型号详情
  - PUT /api/models/:id - 更新型号
  - DELETE /api/models/:id - 删除型号
  - POST /api/models/import - 导入型号
  - GET /api/models/export - 导出型号

- **颜色管理**
  - GET /api/colors - 获取颜色列表
  - POST /api/colors - 创建颜色
  - GET /api/colors/:id - 获取颜色详情
  - PUT /api/colors/:id - 更新颜色
  - DELETE /api/colors/:id - 删除颜色
  - POST /api/colors/import - 导入颜色
  - GET /api/colors/export - 导出颜色

- **状态管理**
  - GET /api/vehicle-statuses - 获取车辆状态列表
  - POST /api/vehicle-statuses - 创建车辆状态
  - GET /api/vehicle-statuses/:id - 获取车辆状态详情
  - PUT /api/vehicle-statuses/:id - 更新车辆状态
  - DELETE /api/vehicle-statuses/:id - 删除车辆状态
  - POST /api/vehicle-statuses/import - 导入车辆状态
  - GET /api/vehicle-statuses/export - 导出车辆状态

### 前端路由
- /basic-data - 基础数据管理页面
- /basic-data/brands - 品牌管理页面
- /basic-data/models - 型号管理页面
- /basic-data/colors - 颜色管理页面
- /basic-data/statuses - 状态管理页面

## 数据模型

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

1. **基础数据管理流程**
   - 进入基础数据管理页面
   - 选择需要管理的基础数据类型（品牌、型号、颜色、状态）
   - 进行增删改查操作
   - 可以导入导出数据

2. **数据导入流程**
   - 选择导入文件（Excel格式）
   - 上传文件
   - 后端验证数据
   - 导入成功后显示导入结果

3. **数据导出流程**
   - 点击导出按钮
   - 后端生成Excel文件
   - 下载导出文件
