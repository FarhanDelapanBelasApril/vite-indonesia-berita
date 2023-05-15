/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Form } from "react-bootstrap";

export default function NewsSearchItems({
  ref,
  searchQuery,
  setSearchQuery,
  items,
}) {
  return (
    <div className="ib-search-items" style={{ position: "relative" }}>
      <Form
        onSubmit={(e) => e.preventDefault()}
        className="ib-search-items__forms"
      >
        <Form.Control
          ref={ref}
          onChange={(e) => setSearchQuery({ search: e.target.value })}
          value={searchQuery.get("search") ? searchQuery.get("search") : ""}
          type="search"
          disabled={!items}
          placeholder="Cari..."
          aria-label="Cari"
        />
      </Form>
    </div>
  );
}
