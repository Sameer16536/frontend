import Navbar from "@/components/Navbar";
import StreamCard from "@/components/StreamCard";

const HomePage = () => {
  const streams = [
    { id: "1", title: "Live Stream 1", thumbnail: "/images/stream1.jpg" },
    { id: "2", title: "Live Stream 2", thumbnail: "/images/stream2.jpg" },
    { id: "3", title: "Live Stream 3", thumbnail: "/images/stream3.jpg" },
    // Add more streams here
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {streams.map((stream) => (
            <StreamCard
              key={stream.id}
              id={stream.id}
              title={stream.title}
              thumbnail={stream.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
