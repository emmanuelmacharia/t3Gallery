import Link from "next/link";
import Image from "next"

const mockUrls = [
  "https://gmhd64et5c.ufs.sh/f/Q695QrPnWHBTafLdkNyiJ76T2F0IoCV4P3tlbfjHcwyMzrXv",
  "https://gmhd64et5c.ufs.sh/f/Q695QrPnWHBTe8bi7smkH5YQyOIXB6bfCMZozLNaV94K3p7s",
  "https://gmhd64et5c.ufs.sh/f/Q695QrPnWHBTzoESlv0ZGIY9fHjDUEBCn75610PblmvSMXoi",
  "https://gmhd64et5c.ufs.sh/f/Q695QrPnWHBT7Rl3jXcugDvTXWyamYMz6woV5dURxOpZelQk",
  "https://gmhd64et5c.ufs.sh/f/Q695QrPnWHBTuX67wcetIsvrgnKFV8XqJc4ziQN5jxBEd29h",
  "https://gmhd64et5c.ufs.sh/f/Q695QrPnWHBTPGIWIZUWMajDgrRmTpO7e8J9IunlL1Ki4A2Q"
]

const mockImages = mockUrls.map((url, index) =>( {
    id: index + 1,
    url
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div className="w-48 p-4" key={image.id}>
            <img src={image.url} alt="image" />
          </div>
        ))
        }
      </div>
     Hello (gallery in progress)
    </main>
  );
}
