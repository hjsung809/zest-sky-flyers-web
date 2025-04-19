
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

export const Schedule = () => {
  const schedule = {
    times: [
      "10:00 - 12:00",
      "12:00 - 13:00",
      "13:00 - 15:00",
      "15:30 - 17:00",
      "17:00 - 19:00",
      "19:00 - 20:00",
      "20:00 - 22:00"
    ],
    days: ["월", "화", "수", "목", "금", "토", "일"]
  };

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>시간/요일</TableHead>
            {schedule.days.map((day) => (
              <TableHead key={day}>{day}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.times.map((time) => (
            <TableRow key={time}>
              <TableCell className="font-medium">{time}</TableCell>
              {schedule.days.map((day) => (
                <TableCell key={`${day}-${time}`}>
                  {day === "월" && time === "13:00 - 15:00" ? "키즈 & 단체 수업" : "Group Class"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
