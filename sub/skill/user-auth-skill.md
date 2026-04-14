# 用户登录模块 Skill

## 模块目标

开发订单卖车TOB后台Saas服务系统的用户登录模块，实现用户注册、登录和权限管理功能。

## 功能描述

### 用户注册
- 支持用户注册，包含必要的字段验证和安全性考虑（如密码加密）
- 支持多种注册方式（如邮箱、手机号）
- 注册成功后自动登录

### 用户登录
- 支持多种认证方式（如用户名/密码、手机号/验证码）
- 处理会话管理，生成并管理JWT token
- 登录失败处理和错误提示

### 用户权限管理
- 实现基于角色的访问控制（RBAC）
- 明确区分不同用户角色的操作权限
- 权限验证中间件

## 技术实现

### 后端
- 使用Node.js + Express框架
- 数据库使用MySQL存储用户信息
- 使用bcrypt进行密码加密
- 使用jsonwebtoken生成JWT token
- 实现RESTful API接口

### 前端
- 使用React框架
- 使用Ant Design组件库
- 使用Redux进行状态管理
- 使用react-router-dom进行路由管理
- 实现登录和注册表单
- 实现权限控制和路由守卫

## 接口设计

### 后端API
- POST /api/auth/register - 用户注册
- POST /api/auth/login - 用户登录
- GET /api/auth/me - 获取当前用户信息
- PUT /api/auth/update - 更新用户信息
- PUT /api/auth/change-password - 修改密码

### 前端路由
- /login - 登录页面
- /register - 注册页面
- /dashboard - 仪表盘（需要登录）

## 数据模型

### 用户表（users）
- id: 主键
- username: 用户名
- email: 邮箱
- phone: 手机号
- password_hash: 密码哈希
- role: 角色（admin, user）
- created_at: 创建时间
- updated_at: 更新时间

## 安全考虑

- 密码加密存储
- JWT token验证
- 防止SQL注入
- 防止XSS攻击
- 防止CSRF攻击
