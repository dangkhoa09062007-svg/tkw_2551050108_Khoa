# BÁO CÁO THỰC HÀNH THIẾT KẾ WEB - BUỔI 3
**Trường Đại Học Mở TPHCM – Khoa CNTT**  
**GVHD**: ThS Võ Việt Khoa  
**Sinh viên thực hiện**: Lê Đăng Khoa  
**MSSV**: 2551050108  
**Chủ đề & Sản phẩm**: Bloom - Sustainable Solutions & ESG Management  

---

## 🌐 1. Link & Deploy
- **Figma Design Reference**: [Landwind - Tailwind CSS Landing Page](https://www.figma.com/design/75ddYYpn0x33POxewcXaVE/Landwind---Tailwind-CSS-Landing-Page--Community-?node-id=1-19856&p=f&t=OsyRTE0Kes7jHN2P-0)
- **GitHub Repository**: [https://github.com/dangkhoa09062007-svg/tkw_2551050108_Khoa](https://github.com/dangkhoa09062007-svg/tkw_2551050108_Khoa)
- **URL Deploy (GitHub Pages)**: [https://dangkhoa09062007-svg.github.io/tkw_2551050108_Khoa/bloom/src/index.html](https://dangkhoa09062007-svg.github.io/tkw_2551050108_Khoa/bloom/src/index.html)

---

## 🎨 2. Hệ Thống Design Tokens & Rebrand
- **Màu thương hiệu chính**: `#0F5132` (Brand 600) / `#0A3B24` (Brand 700)
- **Màu nhấn**: `#22C55E` / `#FBBF24`
- **Màu chữ**:
  - Chữ sáng (Light mode): `--color-ink: #12211D`
  - Chữ tối (Dark mode): `--color-ink-invert: #EAF2EE`
  - Chữ phụ (Muted): `--color-muted: #64748B` / `--color-muted-invert: #94A3B8`
- **Màu nền trang**:
  - Nền sáng: `--color-surface: #FFFFFF` / Nền phụ: `--color-surface-alt: #F0FDF4`
  - Nền tối: `--color-surface-dark: #0E1C19` / Nền tối phụ: `--color-surface-dark-alt: #152925`
- **Màu viền**:
  - Viền sáng: `--color-line: #DFE6E2`
  - Viền tối: `--color-line-invert: #24403A`
- **Phông chữ**:
  - Tiêu đề: `Plus Jakarta Sans` / `Roboto`, sans-serif
  - Nội dung: `Inter`, system-ui, sans-serif
- **Bo góc**:
  - Bo góc card: `--radius-card: 0.875rem` (`14px`)
  - Bo góc pill/button: `--radius-pill: 9999px`

---

## 🚀 3. Danh Sách Component Trích Xuất (`@layer components`)
Tất cả các thành phần lặp lại từ 3 lần trở lên được đưa vào `@layer components` trong file `bloom/src/input.css`:
1. `.section`: Container chuẩn độ rộng max 6xl, padding co giãn theo màn hình (`py-16 lg:py-24`).
2. `.eyebrow`: Thẻ tag phụ phía trên tiêu đề chính với bo tròn pill và màu sắc thương hiệu.
3. `.btn`: Nút cơ sở có hiệu ứng chuyển đổi mượt mà, focus ring rõ ràng, bo góc pill.
4. `.btn-primary`: Nút hành động chính (Primary CTA) màu xanh thương hiệu.
5. `.btn-secondary`: Nút phụ (Secondary CTA) dạng viền outline hỗ trợ dark mode.
6. `.btn-ghost`: Nút dạng chữ không viền cho các thao tác phụ / đăng nhập.
7. `.card`: Khối thẻ thông tin có viền và nền token, tự động đổi màu theo dark mode, thay bóng đổ bằng viền trên nền tối.
8. `.badge`: Nhãn trạng thái nổi bật (Live, Xu hướng, Đã kiểm định).
9. `.field-label`: Nhãn form chuẩn semantic có `for` liên kết chặt chẽ với `id` của input.
10. `.field-input`: Ô nhập liệu chuẩn accessibility, focus ring tùy biến theo theme sáng/tối.
11. `.field-hint`: Đoạn văn bản trợ giúp / gợi ý bên dưới ô nhập.
12. `.field-error`: Đoạn văn bản cảnh báo lỗi với thuộc tính `role="alert"`.

---

## 📱 4. Xử Lý Responsive (Mobile-First)
Quy trình test cố định: **360px → 768px → 1024px → 1440px** trên cả 3 trang:
1. **Trang chủ (`index.html`)**:
   - *Hero hai cột*: Mặc định 1 cột, lên `lg:grid-cols-2`.
   - *Lưới tính năng & Quy trình*: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
   - *Footer bốn cột*: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
   - *Header*: Ẩn menu chính dưới `lg`, tích hợp nút hamburger mở rộng và nút toggle Dark mode.
2. **Trang Bảng giá (`pricing.html`)**:
   - *3 gói giá*: `grid-cols-1 lg:grid-cols-3`.
   - *Bảng so sánh chi tiết nhiều cột*: Bọc trong `overflow-x-auto` + `min-w-[720px]`, kèm dòng chỉ dẫn: `Vuốt ngang để xem hết bảng.` ở màn hình mobile/tablet.
3. **Trang Liên hệ (`contact.html`)**:
   - Bố cục 2 cột (Form và Thông tin liên hệ): `grid-cols-1 lg:grid-cols-12` (Form chiếm 7 cột, Info chiếm 5 cột).
   - Quy trình "Sau khi gửi thì sao": `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.

---

## ♿ 5. Form Chuẩn Tiếp Cận (Accessibility) Trên `contact.html`
Form gồm **6 trường** với **5 kiểu dữ liệu** khác nhau (`text`, `tel`, `email`, `select`, `textarea`, `checkbox`), đảm bảo đủ 7 tiêu chuẩn kỹ thuật:
- `for` ↔ `id`: Giúp mở rộng vùng bấm trên màn hình cảm ứng di động.
- `type="tel"` + `inputmode="numeric"`: Bật bàn phím số chuyên dụng trên smartphone.
- `autocomplete`: Hỗ trợ trình duyệt tự điền (`name`, `tel`, `email`).
- `pattern="0[0-9]{9}"`: Tự kiểm tra định dạng số điện thoại Việt Nam hợp lệ.
- `aria-describedby`: Kết nối trình đọc màn hình với dòng gợi ý (hint) và dòng báo lỗi (error).
- `role="alert"`: Cho phép trình đọc màn hình phát âm ngay khi có lỗi phát sinh.
- `Dòng gợi ý riêng`: Tuyệt đối không dùng `placeholder` thay cho `label` vì placeholder sẽ biến mất khi người dùng nhập.

---

## ✅ 5. Yêu Cầu Hoàn Thành (Checklist Buổi 3)
- [x] **Không có scroll ngang ở 360px trên cả ba trang** (`index.html`, `pricing.html`, `contact.html`).
- [x] **Mọi class responsive viết theo hướng mobile-first** (không dùng `max-lg:`).
- [x] **Bật class `dark` cho kết quả dùng được**: chữ đọc rõ, không có mảng trắng lòi ra.
- [x] **Dark mode khai báo qua token**, không rải `dark:bg-gray-800` khắp HTML.
- [x] **Có 8–10 component trong `@layer components`**, dùng ở ít nhất 2 trang (`.section`, `.eyebrow`, `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.card`, `.badge`, `.field-label`, `.field-input`, `.field-hint`, `.field-error`).
- [x] **`pricing.html` và `contact.html` hoàn chỉnh**, tái sử dụng component.
- [x] **Form đi được hết bằng Tab**, mỗi ô focus thấy rõ, có nhãn thật (không dùng placeholder thay nhãn).
- [x] **Có URL công khai chạy được**, đã ghi vào README.
- [x] **Ít nhất 4 commit, có tag `buoi-3`**.

---

## 💡 6. Sẽ Làm Lại Nếu Có Thêm Thời Gian
> **Nhận xét quan trọng về cấu trúc**:
> Hiện tại, các phần **Header** (thanh điều hướng) và **Footer** đang phải sao chép thủ công ở cả 3 file (`index.html`, `pricing.html`, `contact.html`). Đây là một giới hạn cố hữu của **HTML tĩnh thuần túy**.
> Nếu có thêm thời gian hoặc chuyển sang giai đoạn phát triển bằng các framework hiện đại (như React, Vue, Astro, Next.js, hoặc template engine như EJS/Nunjucks), toàn bộ Header/Footer và Layout chung sẽ được đóng gói thành các **Component dùng chung** (ví dụ `<Navbar />`, `<Footer />`, `<Layout />`), giúp việc cập nhật menu hay thông tin liên hệ chỉ cần thực hiện tại 1 nơi duy nhất mà tự động đồng bộ trên toàn bộ website.

---

## 💬 7. Trả Lời Câu Hỏi Vấn Đáp Cuối Buổi

### 1. `md:text-lg` áp dụng ở những kích thước màn hình nào?
- **Trả lời**: Trong Tailwind CSS, các tiền tố breakpoint áp dụng theo cơ chế **Mobile-first** (tương ứng với `@media (min-width: ...)`). Do đó, `md:text-lg` sẽ áp dụng cho tất cả các màn hình có chiều rộng **từ breakpoint `md` (768px) trở lên** (bao gồm cả `md`, `lg`, `xl`, `2xl`), trừ khi có breakpoint lớn hơn ghi đè lên (ví dụ `lg:text-xl`).

### 2. Vì sao Dark Mode nên khai báo bằng cặp token thay vì thêm `dark:` ở từng chỗ?
- **Trả lời**: Khai báo bằng cặp token giúp:
  1. Giữ tính **nhất quán và phân cấp thị giác** của thương hiệu (màu nền tối có cùng tông với màu thương hiệu, màu chữ không bị lóa trắng `#fff` trên nền đen `#000`).
  2. **Dễ bảo trì và chỉnh sửa theme**: Khi cần đổi tông màu dark mode, chỉ cần cập nhật tại file CSS cấu hình token mà không phải sửa hàng trăm class `dark:...` rải rác khắp các file HTML.
  3. Giữ cho code HTML gọn gàng, trong sáng và giảm thiểu nguy cơ quên sót style ở các thành phần con.

### 3. Bạn xử lý bảng so sánh trên mobile theo cách nào, và vì sao không chọn cách còn lại?
- **Trả lời**:
  - **Cách xử lý**: Bọc bảng trong container có `overflow-x-auto` kết hợp đặt độ rộng tối thiểu `min-w-[720px]` cho thẻ `<table>`, đồng thời hiển thị thông báo `Vuốt ngang để xem hết bảng.` trên màn hình nhỏ.
  - **Lý do không chọn cách ép bảng co xuống 360px**: Bảng so sánh có nhiều cột dữ liệu. Nếu ép co lại cho vừa 360px thì chữ sẽ bị ngắt dòng vụn vặt, các cột bị méo mó, thông tin chồng chéo không đọc được và làm mất hoàn toàn khả năng đối chiếu dữ liệu theo hàng ngang của người dùng.

### 4. Tại sao không được dùng `placeholder` thay cho nhãn (`label`)?
- **Trả lời**:
  1. **Trải nghiệm người dùng (UX)**: Placeholder sẽ biến mất ngay khi người dùng bắt đầu gõ hoặc khi trình duyệt tự điền, khiến người dùng mất phương hướng và không biết mình đang điền trường gì.
  2. **Khả năng tiếp cận (Accessibility - A11y)**: Trình đọc màn hình (Screen Reader) không thể nhận diện được nhãn của trường nhập nếu không có thẻ `<label>` được liên kết qua thuộc tính `for` ↔ `id`.
  3. **Độ tương phản**: Chữ placeholder thường có màu xám mờ nhạt, không đạt chuẩn tương phản tối thiểu của WCAG, gây khó khăn cho người thị lực kém.