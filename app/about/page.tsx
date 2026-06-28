import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Zap, Code, Heart, Globe } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container max-w-screen-2xl px-4 py-24 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              👋 저희에 대해
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              현대적인 웹 개발의
              <br />
              <span className="text-primary">새로운 시작</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              우리는 개발자들이 더 빠르고 효율적으로 웹 애플리케이션을
              만들 수 있도록 돕기 위해 Next.js Starter Kit을 만들었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container max-w-screen-2xl px-4 py-24 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            우리의 미션
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            개발자의 생산성을 높이고, 최신 기술 스택을 쉽게 접근할 수 있게 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>명확한 목표</CardTitle>
              <CardDescription>
                개발자들이 보일러플레이트 코드 작성보다
                중요한 기능 구현에 집중할 수 있도록
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>빠른 개발</CardTitle>
              <CardDescription>
                최신 기술과 모범 사례가 적용된
                스타터 킷으로 즉시 시작하세요
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>최신 스택</CardTitle>
              <CardDescription>
                Next.js v15, React 19, TypeScript,
                TailwindCSS v4를 기본으로 제공
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>개발자 경험</CardTitle>
              <CardDescription>
                직관적인 구조와 명확한 문서로
                개발 경험을 극대화합니다
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>확장 가능성</CardTitle>
              <CardDescription>
                shadcn/ui와 Radix UI를 기반으로
                쉽게 확장할 수 있는 구조
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>커뮤니티</CardTitle>
              <CardDescription>
                활발한 커뮤니티와 지속적인
                업데이트로 함께 성장합니다
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-24">
        <div className="container max-w-screen-2xl px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              우리의 가치
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">품질</h3>
              <p className="text-muted-foreground">
                최고의 코드 품질을 유지하고
                베스트 프랙티스를 따릅니다.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">단순성</h3>
              <p className="text-muted-foreground">
                복잡함을 제거하고 단순하지만
                강력한 솔루션을 제공합니다.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">혁신</h3>
              <p className="text-muted-foreground">
                최신 기술 트렌드를 따라가며
                계속 진화합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
