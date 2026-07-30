# Laravel Inertia Quasar — Starter Kit Full-Stack

## Giới Thiệu

**Laravel Inertia Quasar** là bộ template khởi đầu (starter kit) kết hợp Laravel, Inertia.js và Quasar Framework (Vue.js). Template này được Flash Dev Team dùng để khởi tạo nhanh các dự án web SPA, với cấu trúc đã được chuẩn hóa, xác thực và phân quyền có sẵn.

---

## Tính Năng Có Sẵn

- Đăng ký, đăng nhập, quản lý phiên đăng nhập
- Phân quyền Admin và User cơ bản
- Giao diện admin panel với layout Quasar hoàn chỉnh, responsive
- Cấu hình hàng đợi (queue) và lịch trình tác vụ nền (scheduler)
- Tích hợp sẵn để mở rộng tính năng realtime

---

## Mục Đích Sử Dụng

Đây là **boilerplate nội bộ** của Flash Dev Team dùng để:
- Khởi tạo nhanh các dự án web mới
- Chuẩn hóa cấu trúc và công nghệ trong tổ chức

---

## Công Nghệ Sử Dụng

| Thành phần | Công nghệ |
|------------|-----------|
| Backend | Laravel (PHP) |
| Frontend | Vue.js 3, Quasar Framework |
| Bridge | Inertia.js |
| Cơ sở dữ liệu | MySQL |

---

## Hướng Dẫn Khởi Tạo Dự Án Mới

```bash
git clone https://github.com/Flash-Dev-Team/laravel-inertia-quasar.git ten-du-an
cd ten-du-an

composer install && npm install
cp .env.example .env
php artisan key:generate
# Cấu hình .env: DB...
php artisan migrate --seed
php artisan serve & npm run dev
```

---

## Liên Hệ

Template phát triển bởi **Flash Dev Team** — [GitHub](https://github.com/Flash-Dev-Team)
