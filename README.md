# 🚀 Laravel Inertia Quasar — Bộ Khởi Động Dự Án Full-Stack

## Giới Thiệu

Laravel Inertia Quasar là template khởi đầu (starter kit) kết hợp ba công nghệ mạnh mẽ: **Laravel** (backend PHP), **Inertia.js** (cầu nối server–client) và **Quasar Framework** (UI Vue.js). Bộ template này giúp đội ngũ Flash Dev Team khởi tạo dự án web hiện đại nhanh chóng, với đầy đủ cấu trúc đã được cài đặt và cấu hình sẵn.

## Mục Đích Sử Dụng

Đây là **boilerplate nội bộ** dùng để:
- Khởi tạo nhanh các dự án web SPA (Single Page Application)
- Chuẩn hóa cấu trúc dự án trong tổ chức Flash Dev Team
- Tiết kiệm thời gian cài đặt ban đầu cho mỗi dự án mới

## Tính Năng Có Sẵn

### 🏗️ Cấu Trúc Đã Tích Hợp

- 🔐 **Xác thực người dùng**: Đăng ký, đăng nhập, quản lý phiên (session)
- 👥 **Phân quyền người dùng**: Phân tách quyền Admin và User cơ bản
- 📋 **Giao diện Admin**: Panel quản trị với layout Quasar hoàn chỉnh
- 📱 **Responsive**: Tương thích đầy đủ với mọi kích thước màn hình
- 🔄 **Realtime Ready**: Tích hợp sẵn Pusher để mở rộng tính năng realtime
- 📦 **Queue & Schedule**: Cấu hình hàng đợi và lịch trình tác vụ nền

### ⚙️ Cấu Hình Sẵn

- Kết nối database MySQL
- Môi trường phát triển và production
- Build frontend tối ưu với Quasar CLI
- Tailwind CSS cho tùy chỉnh giao diện linh hoạt

## Công Nghệ Sử Dụng

| Thành phần | Công nghệ |
|---|---|
| Backend | PHP / Laravel 10 |
| Frontend | Vue.js 3, Quasar Framework |
| Bridge | Inertia.js |
| Realtime | Pusher / Livewire |
| Cơ sở dữ liệu | MySQL 8 |
| Phong cách | Tailwind CSS |
| Node.js | >= 18 |

## Hướng Dẫn Cài Đặt

### Yêu Cầu Hệ Thống
- PHP >= 8.1
- Composer
- MySQL 8
- Node.js >= 18

### Các Bước Khởi Tạo Dự Án Mới

1. **Clone hoặc fork template**
   ```bash
   git clone https://github.com/Flash-Dev-Team/laravel-inertia-quasar.git ten-du-an-moi
   cd ten-du-an-moi
   ```

2. **Cài đặt dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Cấu hình môi trường**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Cấu hình database trong file `.env`**

5. **Chạy migrations**
   ```bash
   php artisan migrate --seed
   ```

6. **Khởi động môi trường phát triển**
   ```bash
   php artisan serve
   npm run dev
   ```

## Liên Hệ

Template được phát triển và duy trì bởi **Flash Dev Team**.  
Mọi thắc mắc xin liên hệ qua [GitHub Issues](https://github.com/Flash-Dev-Team/laravel-inertia-quasar/issues).
