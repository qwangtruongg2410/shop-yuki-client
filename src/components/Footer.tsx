export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} ShopYuki · Bài tập môn Công nghệ lập trình hiện đại</p>
        <p>Hotline: 1900 0000 · Email: hotro@shopyuki.vn</p>
      </div>
    </footer>
  );
}
