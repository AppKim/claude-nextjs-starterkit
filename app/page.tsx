import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container max-w-screen-xl py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Next.js v15 Starter Kit
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            모던 기술스택으로 빠르게 시작하는 웹개발. TypeScript, TailwindCSS v4,
            shadcn/ui로 구성되었습니다.
          </p>
          <div className="flex gap-4 mt-4">
            <Button size="lg" asChild>
              <Link href="/components-showcase">컴포넌트 보기</Link>
            </Button>
            <Button size="lg" variant="outline">
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="container max-w-screen-xl py-12 md:py-24 lg:py-32">
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            기술스택
          </h2>
          <p className="text-muted-foreground">
            최신 버전의 검증된 도구들을 사용하고 있습니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Next.js v15"
            description="App Router, Turbopack, 빠른 성능을 갖춘 최신 프레임워크"
            features={["App Router", "Turbopack", "Server Components"]}
          />
          <FeatureCard
            title="TailwindCSS v4"
            description="설정 없는 CSS-first 접근. 빠른 스타일링과 커스터마이징"
            features={["CSS Variables", "No Config", "Dark Mode"]}
          />
          <FeatureCard
            title="shadcn/ui"
            description="복사 가능한 컴포넌트. Radix UI 기반의 접근성 있는 UI"
            features={["Accessible", "Customizable", "Radix UI"]}
          />
          <FeatureCard
            title="TypeScript"
            description="타입 안정성으로 버그를 미리 방지하세요"
            features={["Type Safety", "IDE Support", "Better DX"]}
          />
          <FeatureCard
            title="lucide-react"
            description="일관된 디자인의 아이콘 라이브러리"
            features={["400+ Icons", "SVG Based", "Customizable"]}
          />
          <FeatureCard
            title="next-themes"
            description="다크모드 지원. 사용자 테마 선호도 자동 감지"
            features={["Dark Mode", "System Preference", "Persisted"]}
          />
        </div>
      </section>

      <Separator />

      {/* Tech Stack Badges */}
      <section className="container max-w-screen-xl py-12 md:py-24">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            사용 기술
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Next.js 16.x</Badge>
            <Badge variant="default">React 19</Badge>
            <Badge variant="secondary">TypeScript 5</Badge>
            <Badge variant="secondary">TailwindCSS 4</Badge>
            <Badge variant="outline">shadcn/ui</Badge>
            <Badge variant="outline">lucide-react</Badge>
            <Badge variant="outline">next-themes</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
}

function FeatureCard({ title, description, features }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          {features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="text-primary">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
