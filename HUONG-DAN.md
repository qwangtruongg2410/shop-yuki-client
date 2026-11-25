# Hướng dẫn chạy và nộp bài ShopYuki (Lab 1)

Project React + TypeScript (Vite): trang chủ **ShopYuki** gồm header, banner, danh mục, lưới 6 sản phẩm và footer.
Làm theo thứ tự từ trên xuống.

---

## Bước 1 – Kiểm tra máy đã có công cụ

Mở **VS Code**, bấm **Ctrl + `** để mở terminal, gõ lần lượt:

```
node -v
npm -v
git --version
```

- Ra dạng `v24.x.x`, `11.x.x`, `git version ...` là được.
- Báo **"not recognized"** thì cài:
  - Node.js bản LTS: https://nodejs.org
  - Git: https://git-scm.com
  - Cài xong phải **đóng hẳn VS Code rồi mở lại**.

> **Lỗi `running scripts is disabled`** khi gõ `npm`: chạy lệnh dưới, gõ `Y` nếu được hỏi, rồi **đóng terminal mở terminal mới**:
> ```
> Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
> ```

---

## Bước 2 – Giải nén và chạy thử

1. Giải nén file `shop-yuki-client.zip`, ví dụ vào `D:\CNLTHD\shop-yuki-client`.
2. Trong VS Code chọn **File → Open Folder...** và mở đúng thư mục `shop-yuki-client` (thư mục có file `package.json`).
3. Mở terminal (**Ctrl + `**) và gõ:

```
npm install
npm run dev
```

- `npm install` tải thư viện vào thư mục `node_modules` (mất 1–2 phút, chỉ cần làm **một lần**).
- `npm run dev` in ra địa chỉ `http://localhost:5173`. Giữ **Ctrl** và bấm vào để mở trang.
- Để terminal này chạy suốt lúc làm. Muốn dừng thì bấm **Ctrl + C**.

✅ Thấy trang **ShopYuki** có banner, danh mục và 6 sản phẩm là thành công.
📸 **Chụp màn hình trang này để nộp** (chụp cả thanh địa chỉ `localhost:5173`).

---

## Bước 3 – Khai báo Git (chỉ làm lần đầu trên máy)

Dùng **tên và email tài khoản GitHub của bạn**:

```
git config --global user.name "ten-cua-ban"
git config --global user.email "email-github-cua-ban@gmail.com"
```

---

## Bước 4 – Đưa code lên GitHub

1. Vào https://github.com/new và tạo repository:
   - **Repository name:** `shop-yuki-client`
   - Chọn **Public**
   - **KHÔNG** tích *Add a README file* (không chọn .gitignore hay license)
   - Bấm **Create repository**
2. Mở **terminal thứ hai** trong VS Code (bấm dấu **+** ở khung terminal, terminal đầu vẫn để chạy `npm run dev`).
3. Gõ lần lượt từng lệnh:

```
git init
git add .
git commit -m "Lab 1: trang chu ShopYuki"
git branch -M main
git remote add origin https://github.com/qwangtruongg2410/shop-yuki-client.git
git push -u origin main
```

- Lần đầu push, Git mở cửa sổ đăng nhập GitHub → chọn **Sign in with your browser** → **Authorize**.
- Tải lại trang repo trên GitHub, thấy thư mục `src`, `public`, file `package.json`... là xong.

📮 **Nộp bài:** link `https://github.com/qwangtruongg2410/shop-yuki-client` + ảnh chụp màn hình ở Bước 2.

Từ buổi sau, mỗi lần làm xong một phần chỉ cần:

```
git add .
git commit -m "mo ta ngan gon thay doi"
git push
```

---

## Cấu trúc project

```
shop-yuki-client/
├── public/
│   └── images/
│       ├── banners/          ← ảnh banner (đang dùng mouse-banner.jpg)
│       └── products/         ← ảnh sản phẩm, mỗi sản phẩm một thư mục
├── src/
│   ├── components/
│   │   ├── Header.tsx        ← thanh điều hướng, logo ShopYuki
│   │   ├── Banner.tsx        ← khối khuyến mãi + nút "Mua ngay" (bài tập về nhà)
│   │   ├── CategoryList.tsx  ← danh mục lấy từ mảng products (bài tập về nhà)
│   │   ├── ProductList.tsx   ← lưới sản phẩm, dùng map có key
│   │   ├── ProductCard.tsx   ← thẻ sản phẩm, nhãn "Hết hàng" khi stock = 0 (bài tập về nhà)
│   │   └── Footer.tsx        ← chân trang
│   ├── data/
│   │   └── products.ts       ← dữ liệu 6 sản phẩm
│   ├── App.tsx               ← ghép các component
│   ├── App.css               ← giao diện
│   └── main.tsx
├── index.html
└── package.json
```

### Muốn đổi / thêm sản phẩm
1. Bỏ ảnh vào `public/images/products/<loai>/<ten-san-pham>/` (tên thư mục **không dấu, không khoảng trắng**).
2. Thêm một dòng trong `src/data/products.ts`, đường dẫn ảnh bắt đầu bằng `/images/...` (không ghi `public`):

```ts
{ id: 7, name: "Tên sản phẩm", price: 500000, image: "/images/products/mice/ten-san-pham/1.webp", category: "Chuột", stock: 10 },
```

---

## Lỗi thường gặp

| Hiện tượng | Cách xử lý |
|---|---|
| `'npm' is not recognized` | Chưa cài Node.js, hoặc chưa mở lại VS Code sau khi cài |
| `running scripts is disabled` | Xem lệnh `Set-ExecutionPolicy` ở Bước 1 |
| `vite is not recognized` | Chưa chạy `npm install` |
| Trang mở ở cổng **5174** | Cổng 5173 đang bận, mở đúng địa chỉ terminal in ra |
| Ảnh không hiện | Sai tên file / đuôi file (`.webp`, `.jpg`), hoặc đường dẫn có chữ `public` |
| `git push` báo `rejected ... fetch first` | Lúc tạo repo lỡ tích README → xóa repo, tạo lại không tích README rồi push lại |
| `remote origin already exists` | Gắn nhầm link → `git remote set-url origin <link-dung>` |

---

## Tự kiểm tra theo tiêu chí chấm (10 điểm)

- [ ] `npm run dev` chạy được, F12 → Console không có lỗi đỏ (2đ)
- [ ] Có đủ 4 component Header, ProductCard, ProductList, Footer trong `components/` (3đ)
- [ ] Dữ liệu lấy từ `products.ts`, hiển thị bằng `map` có `key` (2đ)
- [ ] Thu nhỏ cửa sổ, lưới tự đổi từ 4 cột xuống 1 cột (1đ)
- [ ] Code đã lên GitHub, có ít nhất 1 commit rõ nội dung (1đ)
- [ ] Có Banner, CategoryList, nhãn "Hết hàng" (1đ)

**Kiểm tra bằng React Developer Tools** (cài extension này cho Chrome/Edge từ Chrome Web Store, bản của Meta):
F12 → tab **Components** → bấm một `ProductCard` để xem props `product` của nó.
