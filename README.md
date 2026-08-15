https://www.figma.com/design/75ddYYpn0x33POxewcXaVE/Landwind---Tailwind-CSS-Landing-Page--Community-?node-id=1-19856&p=f&t=OsyRTE0Kes7jHN2P-0

tiêu đề: 
font-size: 60px
line-height: 60px
font-weight: 900

Chủ đề: Grow your business
Sản phẩm: bloom
Chọn màu:
Màu thương hiệu chính :#0F5132
Màu nhấn: #FBBF24
Chữ chính: #1F2937
Chữ phụ: #64748B
Nền trang: rgb(236, 253, 245)
Viền: #D1FAE5
Phông tiêu đề: Roboto, sans-serif
Phông nội dung: Inter, sans-serif
H1 / H2 / H3: 56px / 36px / 24px
Padding dọc section: 80px
Bo góc thẻ:
--radius-card: 0.875rem
--radis-pill: 999px
1 rem = 16px;
Bảng quy đổi:
Figma: Taiwindcss
2px    rounded-sm
4      rounded
6      rounded-md
8px    rounded-lg
12     rounded-xl
16     rounded-2xl
24     rounded-3xl
9999px rounded-full //Bo tròn hoàn toàn

-Trong Tw, lg: có nghĩa là "từ lg trở lên", không phải"ở lg"
-Mặc định text-4xl, từ sm trở lên, từ lg trở lên
-Hệ quả: class không có tiền tố chính là class dành cho điện thoại. Vì vậy quy trình luôn là 2 động tác:
 1) Hạ giá trị mặc định xuống kích cỡ điện thoại
 2) Nâng dần lên bằng sm: -> lg: -> xl: ....
 