// PriceSelectionStep.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function PriceSelectionStep() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {/* 좌측: 가격/할인 선택 */}
      <div className="space-y-6">
        {/* 스탠딩 */}
        <Card>
          <CardContent className="space-y-4 pt-6">
            <h2 className="text-lg font-bold">스탠딩 1매를 선택하셨습니다.</h2>
            <div className="flex justify-between items-center">
              <Label>기본가</Label>
              <span>일반 14,300원</span>
              <Select>
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="0매" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(11)].map((_, i) => (
                    <SelectItem key={i} value={`${i}`}>{i}매</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 할인 선택 */}
            <div className="space-y-2">
              <Label>청년문화패스 할인</Label>
              <div className="flex justify-between items-center">
                <span>할인 금액</span>
                <Select>
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="0매" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(11)].map((_, i) => (
                      <SelectItem key={i} value={`${i}`}>{i}매</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Label>국가유공자 할인 (확인)</Label>
              <div className="flex justify-between items-center">
                <span>할인 금액</span>
                <Select>
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="0매" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(11)].map((_, i) => (
                      <SelectItem key={i} value={`${i}`}>{i}매</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 지정석 */}
        <Card>
          <CardContent className="space-y-4 pt-6">
            <h2 className="text-lg font-bold">지정석 2매를 선택하셨습니다.</h2>
            <div className="flex justify-between items-center">
              <Label>기본가</Label>
              <span>일반 14,300원</span>
              <Select defaultValue="1">
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="1매" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(11)].map((_, i) => (
                    <SelectItem key={i} value={`${i}`}>{i}매</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 할인 선택 */}
            <div className="space-y-2">
              <Label>청년문화패스 할인</Label>
              <div className="flex justify-between items-center">
                <span>할인 금액</span>
                <Select>
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="0매" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(11)].map((_, i) => (
                      <SelectItem key={i} value={`${i}`}>{i}매</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Label>국가유공자 할인 (확인)</Label>
              <div className="flex justify-between items-center">
                <span>할인 금액</span>
                <Select defaultValue="1">
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="1매" />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(11)].map((_, i) => (
                      <SelectItem key={i} value={`${i}`}>{i}매</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 우측: 공연 정보 및 요약 */}
      <div className="space-y-6">
        <Card className="aspect-square bg-muted">
          <CardContent className="flex items-center justify-center h-full text-xl text-red-600 font-bold">
            공연제목<br />공연이미지
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-2 pt-6 text-sm">
            <div>📅 예매 정보</div>
            <div>일시: </div>
            <div>선택좌석: </div>
            <div>티켓금액: </div>
            <div>할인: </div>
            <div className="font-bold">총 결제금액: </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline">이전 단계</Button>
          <Button>다음 단계</Button>
        </div>
      </div>
    </div>
  );
}
