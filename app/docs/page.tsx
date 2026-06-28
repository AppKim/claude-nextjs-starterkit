import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Settings, Package, Lightbulb, Zap } from "lucide-react"

export default function Docs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container max-w-screen-2xl px-4 py-24 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              📚 문서
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Next.js Starter Kit
              <br />
              <span className="text-primary">완벽한 가이드</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              프로젝트 설정부터 배포까지
              모든 것을 배워보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="container max-w-screen-2xl px-4 py-24 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            주요 문서
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            필요한 모든 정보를 한 곳에서 찾으세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>빠른 시작</CardTitle>
              <CardDescription>
                <code>npm install</code>로 시작하고
                개발 서버를 실행하는 방법을 배우세요.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>설정</CardTitle>
              <CardDescription>
                TypeScript, TailwindCSS, Next.js 설정을
                이해하고 커스터마이징하세요.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>구조</CardTitle>
              <CardDescription>
                프로젝트 폴더 구조와 각 디렉토리의
                역할을 이해하세요.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>컴포넌트</CardTitle>
              <CardDescription>
                shadcn/ui 컴포넌트를 사용하고
                커스텀 컴포넌트를 만드는 방법.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>스타일링</CardTitle>
              <CardDescription>
                TailwindCSS v4로 스타일링하고
                다크 모드를 구현하세요.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/40 hover:border-border transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>배포</CardTitle>
              <CardDescription>
                Vercel이나 다른 플랫폼에
                프로젝트를 배포하는 방법.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-muted/30 py-24">
        <div className="container max-w-screen-2xl px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              유용한 링크
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">공식 문서</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground underline"
                  >
                    Next.js 공식 문서
                  </a>
                </li>
                <li>
                  <a
                    href="https://react.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground underline"
                  >
                    React 공식 문서
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground underline"
                  >
                    TailwindCSS 공식 문서
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">리소스</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="https://ui.shadcn.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground underline"
                  >
                    shadcn/ui 컴포넌트
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.radix-ui.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground underline"
                  >
                    Radix UI
                  </a>
                </li>
                <li>
                  <a
                    href="https://lucide.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground underline"
                  >
                    Lucide 아이콘
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
