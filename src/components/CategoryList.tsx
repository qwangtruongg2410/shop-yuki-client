import type { Product } from "../data/products";

type Props = {
  items: Product[];
};

export default function CategoryList({ items }: Props) {
  const categories = [...new Set(items.map((p) => p.category))];

  return (
    <section className="container">
      <h2 className="section-title">Danh mục</h2>
      <div className="category-list">
        {categories.map((c) => (
          <span key={c} className="category-item">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
