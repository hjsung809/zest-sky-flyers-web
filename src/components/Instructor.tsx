
import { Card, CardContent } from "@/components/ui/card";

export const Instructor = () => {
  return (
    <Card className="max-w-sm mx-auto">
      <CardContent className="p-6">
        <img
          src="/lovable-uploads/7c42a369-9992-482b-9885-c83df0312ca2.png"
          alt="Team Zest Instructor"
          className="w-full h-auto rounded-lg mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">오민석 원장</h3>
        <p className="text-gray-600">
          전문 아크로바틱 & 트릭킹 강사
        </p>
      </CardContent>
    </Card>
  );
};
