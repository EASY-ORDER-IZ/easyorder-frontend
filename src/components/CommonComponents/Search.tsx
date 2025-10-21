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
        const q = value.toLowerCase();
        const filtered = data.filter((user) => user.name?.toLowerCase().includes(q));
        setResults(filtered);
        setShowBox(true); // show suggestions once user starts typing
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (value: string) => {
    setInput(value);
    if (value.trim() === '') {
      setShowBox(false); // hide when input is cleared
      setResults([]);
    } else {
      fetchData(value);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex w-full items-center">
        <div className="absolute inset-y-0 left-2 flex items-center">
          <Search className="text-text-secondary h-4.5 w-4.5" />
        </div>
        <Input
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          type="search"
          placeholder="Search for products..."
          className="no-cancel px-8"
        />
        <div className="absolute inset-y-0 right-2 flex cursor-pointer items-center">
          <Camera className="text-text-secondary h-4.5 w-4.5" />
        </div>
      </div>

      {showBox && (
        <div className="custom-shadow flex max-h-60 flex-col gap-2 overflow-y-scroll rounded-sm p-2">
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
