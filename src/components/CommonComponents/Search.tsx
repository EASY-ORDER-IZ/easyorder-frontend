import { Input } from '@/components/ui/input';
import { Camera, Search } from 'lucide-react';
import { useState } from 'react';

type User = { name?: string };

const SearchComponent = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<User[]>([]);
  const [showBox, setShowBox] = useState(false);

  const fetchData = (value: string) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json() as Promise<User[]>)
      .then((data) => {
        const result = value.toLowerCase();
        const filtered = data.filter((user) => user.name?.toLowerCase().includes(result));
        setResults(filtered);
        setShowBox(true);
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (value: string) => {
    setInput(value);
    if (value.trim() === '') {
      setShowBox(false);
      setResults([]);
    } else {
      fetchData(value);
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center gap-1">
      <Input
        prefixIcon={<Search size={16} className="text-text-secondary" />}
        suffixIcon={<Camera size={16} className="text-text-secondary" />}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        type="search"
        placeholder="Search for products..."
        className="no-cancel"
      />

      {showBox && (
        <div className="custom-shadow bg-background absolute top-full right-0 left-0 z-10 mt-2 flex max-h-60 flex-col gap-2 overflow-y-scroll rounded-sm p-2">
          <span className="suggestion-text text-text-secondary">Suggestions</span>
          <div className="flex w-full flex-col gap-1.5">
            {results.length > 0 ? (
              results.map((user, index) => (
                <div
                  key={index}
                  className="bg-background hover:text-background hover:bg-accent-primary cursor-pointer rounded-sm p-1"
                >
                  <span className="button-text"> {user.name}</span>
                </div>
              ))
            ) : (
              <div className="bg-background text-text-secondary rounded-sm p-1">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
