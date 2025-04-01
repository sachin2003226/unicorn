import Counter from "@/component/counter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex flex-col gap-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Counter title="Counter 1" />
          <Counter title="Counter 2" />
          <Counter title="Counter 3" />
        </div>
        <Link href="/dashboard" className="btn">
          Go to Dashboard
        </Link>

        <details className="dropdown">
            <summary className="btn m-1">open or close</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
      </details>
      </div>
    </div>
  );
}
