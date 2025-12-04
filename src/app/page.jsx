import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 bg-[var(--background)] text-[var(--foreground)] font-sans min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Next.js Image Example</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src="/Images/moto.jpg"
          width={600}
          height={400}
          alt="moto"
          priority={true}
          className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
        />
        <Image
          src="/Images/moto2.jpg"
          width={600}
          height={400}
          alt="moto"
          priority={true}
          className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
        />
        <Image
          src="/Images/moto3.jpg"
          width={600}
          height={400}
          alt="moto"
          priority={true}
          className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
        />
        <Image
          src="/Images/moto4.jpg"
          width={600}
          height={400}
          alt="moto"
          priority={true}
          className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
        />
        <Image
          src="/Images/moto5.jpg"
          width={600}
          height={400}
          alt="moto"
          priority={true}
          className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
        />
        <Image
          src="/Images/moto6.jpg"
          width={600}
          height={400}
          alt="moto"
          priority={true}
          className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
        />
      </div>
    </div>
  );
}
