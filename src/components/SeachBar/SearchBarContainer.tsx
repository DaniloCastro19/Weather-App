import "./searchBar.css";

type SearchBarProps = {
  searchValue: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ searchValue, setSearch }: SearchBarProps) {
  return (
    <>
      <input
        type="text"
        placeholder="Search Location"
        value={searchValue}
        onChange={(e) => setSearch(e.target.value.trim())}
      />
    </>
  );
}
