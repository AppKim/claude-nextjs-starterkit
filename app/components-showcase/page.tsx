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

export default function ComponentsShowcase() {
  return (
    <div className="w-full">
      <section className="container max-w-screen-xl py-12 md:py-24 lg:py-32">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
          컴포넌트 쇼케이스
        </h1>

        {/* Button Components */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl mb-4">
              Button
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>다양한 버튼 스타일</CardTitle>
                <CardDescription>
                  기본 스타일부터 특수한 용도까지 다양한 버튼 변형이 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Button>기본</Button>
                  <Button variant="secondary">보조</Button>
                  <Button variant="outline">외곽선</Button>
                  <Button variant="ghost">고스트</Button>
                  <Button variant="destructive">삭제</Button>
                  <Button variant="link">링크</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Button Sizes */}
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl mb-4">
              Button Sizes
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>버튼 크기</CardTitle>
                <CardDescription>
                  다양한 크기의 버튼으로 여러 컨텍스트에 맞춥니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 items-center">
                  <Button size="sm">작음</Button>
                  <Button>기본</Button>
                  <Button size="lg">큼</Button>
                  <Button size="icon">✕</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Badge Components */}
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl mb-4">
              Badge
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>배지 스타일</CardTitle>
                <CardDescription>
                  상태, 카테고리, 태그 표시용 배지 컴포넌트
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>기본</Badge>
                  <Badge variant="secondary">보조</Badge>
                  <Badge variant="destructive">삭제</Badge>
                  <Badge variant="outline">외곽선</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Card Components */}
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl mb-4">
              Card
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>카드 제목</CardTitle>
                  <CardDescription>
                    카드는 정보를 담기 위한 기본 컨테이너입니다.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>카드 본문 콘텐츠가 여기에 들어갑니다.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>다른 카드</CardTitle>
                  <CardDescription>
                    여러 카드를 그리드로 배열할 수 있습니다.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>각 카드는 독립적인 단위입니다.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator />

          {/* Typography */}
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl mb-4">
              Typography
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>텍스트 스타일</CardTitle>
                <CardDescription>
                  다양한 크기와 스타일의 텍스트 요소
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h1 className="text-4xl font-bold">Heading 1</h1>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Heading 2</h2>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Heading 3</h3>
                </div>
                <div>
                  <p>일반 본문 텍스트입니다.</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    작은 회색 텍스트입니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
