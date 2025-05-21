import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

interface Props {
  disabled?: boolean;
}
const SearchInput = ({ disabled }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="p-8"
          placeholder="Search products"
          disabled={disabled}
        />
      </div>
      {/* Todo: Add categories view all button */}
      {/* Todo: Add library button */}
    </div>
  );
};

export default SearchInput;
