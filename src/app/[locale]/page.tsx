import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <div>
      <div className="relative z-10 flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-start p-4">
          <p className="mb-6 text-8xl font-medium text-white">
            wagmi boilerplate
          </p>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
